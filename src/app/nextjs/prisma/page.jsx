import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'

const page = () => {

  const text1 = `// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Post {
  id String @id @default(cuid())
  title String
  slug String @unique
  content String
  published Boolean? @default(false)
  updatedAt DateTime @updatedAt
  creatdAt DateTime @default(now())
}`;

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
    <CodeBlock text={'npm i prisma --save-dev'}/>  
    <CodeBlock text={'npx prisma init --datasource-provider sqlite'}/>  
    .env
    <CodeBlock text={'DATABASE_URL="file:./dev.db"'}/>  
    prisma/schema.prisma
    <CodeBlock text={text1}/> 
    create prisma/dev.db  -also after updating the schema.prisma Model-
    <CodeBlock text={'npx prisma db push'}/>  
    View prisma/dev.db
    <CodeBlock text={'npx prisma studio'}/>  
    Help
    <CodeBlock text={'npx prisma -h'}/>  
    Create Prisma Client lib/db.ts like recommanded in the Prisma best practices:
    https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices
    <CodeBlock text={text2}/>
    Create app/posts/page.jsx 
    <CodeBlock text={text3}/>
    Create server action
    <CodeBlock text={text4}/>
      
    </main>
  )
}

export default page