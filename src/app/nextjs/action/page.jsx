
import Link from "next/link";
import prisma from "@/lib/db";
import Form from "@/app/components/Form";
import CodeBlock from '@/app/components/CodeBlock';
import { Typography } from '@mui/material';

const ServerActions = async () => {

const posts = await prisma.post.findMany()

const postsCount = await prisma.post.count();

const text = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['doc.dotdev.be'],
    },
  },
};

export default nextConfig;
`;

const text1 = `import Link from "next/link";
import prisma from "@/lib/db";
import Form from "../components/Form";

export default async function PostsPage() {

  const posts = await prisma.post.findMany()

  const postsCount = await prisma.post.count();

  return (
    <main className="flex flex-col items-center justify-center py-8 gap-y-6 text-center bg-gray-800">
      <h1 className="text-3xl font-semibold">All Posts ({postsCount})</h1>
      <ul className="border-t border-b border-primary py-5 leading-8 ">
        {posts.map( (post) => (
            <li key={post.id} className="flex items-center justify-center px-5">
              <Link href={\`/posts-api/\${post.slug}\`}>
                {post.title}
              </Link>
            </li>
        ) )}
      </ul>

      { postsCount < 50 && <Form /> }

    </main>
  );
}`;

const text2 = `// src/app/components/Form.jsx
'use client'
import {toast, Toaster} from 'sonner'  // npm install sonner
import { createPost } from "@/actions/actions"
import { useRef } from "react"

const Form = () => {

  const ref = useRef(null)

  return (
    <>
      <Toaster />
      {/* IMPORTANT !
        Server Actions need next.config.mjs experimental allowedOrigins:

              const nextConfig = {
                experimental: {
                  serverActions: {
                    allowedOrigins: ['doc.dotdev.be'],
                  },
                },
              };
      */}
      <form
        ref={ref}
        action={ async (formData) => {
          ref.current?.reset()
          const error = await createPost(formData)
          if(error) {
            toast.error('Server action error:' + error, {className: "bg-red-200", duration: 10000});
          } else {
            toast.success('Post created!', {className: "bg-blue-500", duration: 10000})
          }
        }}
        className="flex flex-col gap-y-2 w-[300px]"
      >
        <input type="text" name="title" placeholder="title" className="p-2 rounded-sm bg-gray-900" />
        <textarea rows={5} name="content" placeholder="content" className="p-2 rounded-sm bg-gray-900" />
        <button className="bg-blue-500 py-2 text-white rounded-sm">Create post</button>
      </form>
    </>
  )
}

export default Form`;

const text3 = `// src/actions/actions.ts
"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {

  try {
    await prisma.post.create({
      data: {
        title: formData.get('title') as string,
        slug: (formData.get('content') as string)
          .replace(/\s+/g, "-")
          .toLowerCase(),
        content: formData.get('content') as string
      }
    });
  } catch (e) {
    console.log(e.message)
    return e.message

  }

  revalidatePath('/posts-action')
}`;

    return (
    <main>
      <Typography variant="h4" component="div" sx={{mb:2}}>
      ✨ Server actions - Prisma ORM
      </Typography>
      <main className="flex flex-col items-center justify-center mb-8 py-8 gap-y-6 text-center bg-gray-800">
        <h1 className="text-3xl font-semibold">All Posts ({postsCount})</h1>
        <ul className="border-t border-b border-primary py-5 leading-8">
          {posts.map( (post) => (
              <li key={post.id} className="flex items-center justify-center px-5">
                <Link href={`/posts-api/${post.slug}`}>
                  {post.title}
                </Link>
              </li>
          ) )}
        </ul>
        { postsCount < 50 && <Form /> }
      </main>
      <Typography variant="h6" component="div" sx={{mb:2}} className='text-red-300'>
      🚩 !! Update next.config.mjs like this, PM2 proxy localhost:3004 on Production Debian will allow POST requests from doc.dotdev.be
      </Typography>
      <CodeBlock text={text} />
      <Typography variant="h6" component="div" sx={{mb:2}}>
      ✨ The server component displaying the data list
      </Typography>
      <CodeBlock text={text1} />
      <Typography variant="h6" component="div" sx={{mb:2}}>
      ✨ The client component form with action prop and useRef to reset the form after submit, and Toast notification
      </Typography>
      <CodeBlock text={text2} />
      <Typography variant="h6" component="div" sx={{mb:2}}>
      ✨ The Action
      </Typography>
      <CodeBlock text={text3} />
    </main>
  )
}

export default ServerActions