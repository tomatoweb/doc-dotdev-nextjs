import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const page = () => {

  const text1 = `// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

generator client {
  provider        = "prisma-client-js"
  binaryTargets   = ["native", "debian-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "rhel-openssl-3.0.x"]
}

model Post {
  id String @id @default(cuid())
  title String
  slug String @unique
  content String
  published Boolean? @default(false)
  updatedAt DateTime @updatedAt
  creatdAt DateTime @default(now())
}

model Account {
  id                 String  @id @default(cuid())
  userId             String
  type               String
  provider           String
  providerAccountId  String
  refresh_token      String?
  access_token       String?
  expires_at         Int?
  token_type         String?
  scope              String?
  id_token           String?
  session_state      String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}
`;

const text2 = `// lib/db.ts
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma`;

const text3 = `// app/posts/page.jsx
import { createPost } from "@/actions/actions";
import prisma from "@/lib/db";
import Link from "next/link";


export default async function PostsPage() {

  const posts = await prisma.post.findMany();

  const postsCount = await prisma.post.count();
  
  return (
    <main className="flex flex-col items-center justify-center py-8 gap-y-24 text-center bg-gray-200">
      <h1 className="text-3xl font-semibold">All Posts ({postsCount})</h1>
      <ul className="border-t border-b border-primary py-5 leading-8 ">
        {posts.map( (post) => (
            <li key={post.id} className="flex items-center justify-center px-5">
              <Link href={\`/posts/\${post.slug}\`}>
                {post.title}
              </Link>
            </li>
        ) )}
      </ul>
      { postsCount < 30 && // avoid DDoS attacks
        <form action={createPost} className="flex flex-col gap-y-2 w-[300px]">
          <input type="text" name="title" placeholder="title" className="p-2 rounded-sm" />
          <textarea rows={5} name="content" placeholder="content" className="p-2 rounded-sm" />
          <button className="bg-blue-500 py-2 text-white rounded-sm">Create post</button>
        </form>
      }
    </main>
  );
}
`;

const text4 = `// src/actions/actions.ts
"use server";
import { headers } from 'next/headers'

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {

  const headersList = headers();
  const referer = (await headersList).get('referer');

  // Display the key/value pairs
  for (const pair of (await headersList).entries()) {
    console.log(\`\${pair[0]}: \${pair[1]}\`);
  }
  await prisma.post.create({
    data: {
      title: formData.get('title') as string,
      slug: (formData.get('content') as string)
        .replace(/\s+/g, "-")
        .toLowerCase(),
      content: formData.get('content') as string
    }
  });

  revalidatePath('/posts');
}`;


  return (
    <main>
      <Typography variant='h6' className='text-orange-400'>
        🚀 Prisma ORM
      </Typography>

      <Box className="pb-4 pt-2">
        <Link href="https://www.prisma.io/docs/getting-started/quickstart-sqlite" className='underline text-link'>
          Prisma Installation Doc
        </Link>
      </Box>
      <Box className="pb-8">
        <Typography variant='p' className='text-orange-400'>
          ! Prisma doc recommand to install typescript
        </Typography>
      </Box>
      Install Prisma CLI as dev dependency
      <CodeBlock text={'npm i prisma --save-dev'}/>
      Initialize Prisma
      <CodeBlock text={'npx prisma init --datasource-provider sqlite'}/>  
      Check .env file configuration sqlite
      <CodeBlock text={'DATABASE_URL="file:./dev.db"'}/>  
      Or mysql
      <CodeBlock text={'DATABASE_URL="mysql://user:password@127.0.0.1:3306/db_name""'}/>  
      prisma/schema.prisma : Create your Model
      <CodeBlock text={text1}/> 
      create prisma/dev.db, this also install the Prisma-client
      <CodeBlock text={'npx prisma migrate dev --name init'}/>
      if you make an update, e.g. add a property:
      <CodeBlock text={'npx prisma generate'}/>
      Or (prisma db push is not to be used in production)
      <CodeBlock text={'npx prisma db push'}/>  
      View prisma/dev.db
      <CodeBlock text={'npx prisma studio'}/>  
      List of the Prisma CLI commands
      <CodeBlock text={'npx prisma -h'}/>  
      Create lib/db.ts for the Prisma Client Singleton pattern
      <Box className="pb-4 text-link">
        <Link href="https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices" className='underline'>
          🚀 Prisma best practices
        </Link>
      </Box>
      
      <CodeBlock text={text2}/>
      Create app/posts/page.jsx 
      <CodeBlock text={text3}/>
      Create server action
      <CodeBlock text={text4}/>
      
    </main>
  )
}

export default page