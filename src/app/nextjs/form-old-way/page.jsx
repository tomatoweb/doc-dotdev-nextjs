'use client';

import CodeBlock from '@/app/components/CodeBlock';
import { Typography } from '@mui/material';

const FormOldWay = () => {

  const text = `'use client';
  
import React, { useState } from 'react'

const FormOldWay = () => {

  const [inputText, setInputText] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({content: inputText}),
      headers: {"Content-Type": "application/json",
      },
      })
  }
  
  return (
    <main>
    <form onSubmit={handleSubmit}>
    <input
    type='text'
          name='content'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          />
        <button>
          submit
        </button>
        </form>
    </main>
    )
}
  
export default FormOldWay`;
    
    return (
    <main>
      <Typography variant="h6" component="div" sx={{mb:2}}>
      ✨ Form handle: old way with fetch datas (vs. Server Actions)
      </Typography>
      <CodeBlock text={text} />
    </main>
  )
}

export default FormOldWay