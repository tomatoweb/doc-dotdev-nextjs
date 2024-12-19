'use client';

import CodeBlock from '@/app/components/CodeBlock';
import { Typography } from '@mui/material';

const ServerActions = () => {
  
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

const text1 = `// src/app/components/AddPost.jsx

"use client"

import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { useState } from "react";

export default function AddPost() {
  
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });
  
  const handleSubmit = async (event) => {
    
    event.preventDefault()

    try {

      await fetch('/api/posts',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      // reset form inputs
      setFormData({
        title: '',
        content: '',
      })
     
      router.refresh()      
      
    } catch (error) {
      console.log(error)
      return new NextResponse('server error', error)
    }
  }
  
  const handleInputChange = (event) => {
    setFormData({
      ...formData, 
      [event.target.name]: event.target.value,
    });
    
  };

  return (
    <main className="flex flex-col items-center justify-center py-8 gap-y-24 text-center bg-gray-800">
      <h1 className="text-3xl font-semibold">Add Post</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 w-[300px]">
          <input 
            onChange={handleInputChange} 
            value={formData.title} 
            type="text" 
            name="title" 
            placeholder="title" 
            className="p-2 rounded-sm bg-gray-900" 
          />
          <textarea 
            onChange={handleInputChange} 
            value={formData.content} 
            rows={5} 
            name="content" 
            placeholder="content" 
            className="p-2 rounded-sm bg-gray-900" 
          />
          <button type="submit" className="bg-blue-500 py-2 text-white rounded-sm">Create post</button>
        </form>
    </main>
  );
}
`;

const text2 = `// src/app/api/posts/route.ts

import prisma from "@/lib/db";
import { NextResponse } from "next/server"

export async function GET() {

  const result = await prisma.post.findMany()

  return NextResponse.json({
    message: 'ok',
    status: 200,
    data: result
  })
}


export async function POST(req: Request) {

  const body = await req.json()

  const {title, content} = body

  await prisma.post.deleteMany({where: {}})

  const result = await prisma.post.create({
    data: {
      title: title,
      slug: title
        .replace(/\s+/g, "-")
        .toLowerCase(),
      content: content
    }
  })

  if(!result) return NextResponse.json({
    message: 'error',
    status: 500
  })
  
  return NextResponse.json({ 
    message: 'ok', 
    status: 200,
    data: result
  })
}`;
    
    return (
    <main>
      <Typography variant="h4" component="div" sx={{mb:2}}>
      ✨ Server actions - Prisma ORM
      </Typography>
      <Typography variant="h6" component="div" sx={{mb:2}} className='text-red-300'>
      🚩 Update next.config.mjs like this, PM2 proxy localhost:3004 on Production Debian will allow POST requests from doc.dotdev.be 
      </Typography>
      <CodeBlock text={text} />
      <Typography variant="h6" component="div" sx={{mb:2}}>
      ✨ The AddPost client component to create a new post
      </Typography>
      <CodeBlock text={text1} />
      <Typography variant="h6" component="div" sx={{mb:2}}>
      ✨ The API
      </Typography>
      <CodeBlock text={text2} />
    </main>
  )
}

export default ServerActions