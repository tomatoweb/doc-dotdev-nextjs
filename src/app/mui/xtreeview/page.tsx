import CodeBlock from '@/app/components/CodeBlock';
import { Link, Typography } from '@mui/material'
import React from 'react'

const page = () => {
  return (    
    <div>
      <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4}}>MUI X Tree View</Typography>
      src/theme.ts
      <CodeBlock text={"npm install @mui/x-tree-view"} />
      API :
      <Link href="https://mui.com/x/react-tree-view/">https://mui.com/x/react-tree-view/</Link>
    </div>   
  )
}

export default page