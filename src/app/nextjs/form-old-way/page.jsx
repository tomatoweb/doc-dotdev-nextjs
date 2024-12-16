'use client';
import CodeBlock from '@/app/components/CodeBlock';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';

const FormOldWay = () => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      
      await fetch("/api/add-post", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          content: content,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    } catch (error) {
      console.log(error)
      throw new Error("server error", error)
    }

    setTitle('')
    setContent('')
  }


  const text = `'use client';
import CodeBlock from '@/app/components/CodeBlock';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';

const FormOldWay = () => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      
      await fetch("/api/add-post", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          content: content,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    } catch (error) {
      console.log(error)
      throw new Error("server error", error)
    }

    setTitle('')
    setContent('')
  }
  return (
    <main>
      <Box className="flex flex-col items-center justify-center py-8 gap-y-24 text-center bg-gray-800">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 w-[300px] justify-center items-center">
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="p-2 rounded-sm bg-gray-900" placeholder='title' />
          <input type='text' value={content} onChange={e => setContent(e.target.value)} className="p-2 rounded-sm bg-gray-900" placeholder='content' />
          <button type="submit" className="bg-blue-500 py-2 text-white rounded-sm w-1/4 ">add</button>
        </form>
      </Box>
    </main>
  )
}
export default FormOldWay`;

    
  return (
    <main>
      <Typography variant="h6" component="div" sx={{mb:2}}>
      ✨ Form handle: old way with fetch datas (vs. Server Actions)
      </Typography>
      <Box className="flex flex-col items-center justify-center py-8 gap-y-24 text-center bg-gray-800">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 w-[300px] justify-center items-center">
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="p-2 rounded-sm bg-gray-900" placeholder='title' />
          <input type='text' value={content} onChange={e => setContent(e.target.value)} className="p-2 rounded-sm bg-gray-900" placeholder='content' />
          <button type="submit" className="bg-blue-500 py-2 text-white rounded-sm w-1/4 ">add</button>
        </form>
      </Box>

      <CodeBlock text={text} />
    </main>
  )
}
export default FormOldWay