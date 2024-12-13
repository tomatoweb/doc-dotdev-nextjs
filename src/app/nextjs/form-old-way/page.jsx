'use client';

import CodeBlock from '@/app/components/CodeBlock';
import { Typography } from '@mui/material';

const FormOldWay = () => {

  const text = `'use client';
const FormOldWay = () => {
  const handleSubmit = async (e) => {
    await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({
        title: e.target.title.value,
        content: e.target.content.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
  }  
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" />
        <input type='text' name='content' />
        <button> add </button>
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