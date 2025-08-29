'use client'
import { Typography } from '@mui/material';
import CodeBlock from '@/app/components/CodeBlock'

const Page = () => {
  const text = ` // Simulate a delay (dev)
await new Promise( (resolve) => setTimeout(resolve, 3000) );`;
  return (
    <main>
      <Typography variant='h5'>
        setTimeout
      </Typography>      
      <CodeBlock text={text}/>
    </main>
  )
}

export default Page