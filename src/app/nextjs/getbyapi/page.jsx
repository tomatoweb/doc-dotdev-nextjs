'use client';
import CodeBlock from '@/app/components/CodeBlock';
import ImageModal from '@/app/components/ImageModal';
import { Typography } from '@mui/material';

const PostsWithPrisma = () => {
  
  const text = `
import Link from "next/link";
import AddPost from "@/app/components/AddPost";

export default async function PostsPage() {  

  // This is the classic data fetch with call to API
  const response = await fetch(process.env.URL + '/api/posts/', { cache: "no-store" })
  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
	}
const res = await response.json();
  
  const posts = res.data
  
  return (
    <main className="flex flex-col items-center justify-center py-8 gap-y-24 text-center bg-gray-800">

      <h1 className="text-3xl font-semibold">All Posts ({posts.length})</h1>
      <ul className="border-t border-b border-primary py-5 leading-8 ">
        {posts.map( (post) => (
            <li key={post.id} className="flex items-center justify-center px-5">
              <Link href={\`/posts-api/\${post.slug}\`}>
                {post.title}
              </Link>
            </li>
        ) )}
      </ul>

      <AddPost/>

      {/*
        Server Actions to create posts are not working
        in production (npm run build, pm2) but well in dev.
        error msg :
        Application error: a server-side exception has occurred
        (see the server logs for more information).
        Digest: 760205265
        <form
        onSubmit={(e) => {
          fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: e.target.title.value,
              content: e.target.content.value,
              }),
              })
              }}
              className="flex flex-col gap-y-2 w-[300px]"
        >

      <form action={addPost} className="flex flex-col gap-y-2 w-[300px]">
        <input type="text" name="title" placeholder="title" className="p-2 rounded-sm bg-gray-900" />
        <textarea rows={5} name="content" placeholder="content" className="p-2 rounded-sm bg-gray-900" />
        <button className="bg-blue-500 py-2 text-white rounded-sm">Create post</button>
      </form>
        */}

    </main>
  );
}
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
      <Typography variant="h6" component="div" sx={{mb:2}}>
      ✨ Get data with fetch API
      </Typography>
      <Typography variant="body2" component="div" sx={{mb:2}}>
      ( image on bottom )
      </Typography>
      <CodeBlock text={text} />
      <Typography variant="h6" component="div" sx={{mb:2}}>
      ✨ The AddPost client component to create a new post
      </Typography>
      <CodeBlock text={text1} />
      <Typography variant="h6" component="div" sx={{mb:2}}>
      ✨ The API to add a post by POST method
      </Typography>
      <CodeBlock text={text2} />
			<ImageModal	img={"/posts-api.png"} />
    </main>
  )
}

export default PostsWithPrisma