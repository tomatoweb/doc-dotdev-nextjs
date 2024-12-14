"use client"

import { NextResponse } from "next/server";
import { useState } from "react";

export default function PostsPage() {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (event) => {

    event.preventDefault();

    try {
      fetch('/api/add-post',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, content})
      })
      
    } catch (error) {
      return new NextResponse('server error', error)
    }
  }

  return (
    <main className="flex flex-col items-center justify-center py-8 gap-y-24 text-center bg-gray-800">
      <h1 className="text-3xl font-semibold">Add Post</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 w-[300px]">
          <input 
            onChange={(e) => setTitle(e.target.value)} 
            value={title} 
            type="text" 
            name="title" 
            placeholder="title" 
            className="p-2 rounded-sm bg-gray-900" 
          />
          <textarea 
            onChange={(e) => setContent(e.target.value)} 
            value={content} 
            rows={5} 
            name="content" 
            placeholder="content" 
            className="p-2 rounded-sm bg-gray-900" 
          />
          <button className="bg-blue-500 py-2 text-white rounded-sm">Create post</button>
        </form>
    </main>
  );
}
