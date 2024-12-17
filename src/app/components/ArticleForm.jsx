"use client"

import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { useState } from "react";

export default function ArticleForm() {
  
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
