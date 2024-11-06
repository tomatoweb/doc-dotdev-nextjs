import CodeBlock from '@/app/components/CodeBlock';
import { Link, Typography } from '@mui/material'
import React from 'react'

const page = () => {
const text = 
`'use client';`;
const text2 = 
`<Button variant="contained" color="grey" size='small' sx={{textTransform: 'none'}}>
	Login
</Button>

<Link href={"/scratch/next"} sx={{color: 'link'}}> /scratch/next</Link>

<Box sx={{color: 'myColor.main'}}>
    Read our docs
</Box>;

const ListButton = styled(ListItemButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: 'transparent',
  "&:hover": {color: theme.palette.text.primary, backgroundColor: 'transparent'},
  "&.Mui-selected": {
      color: theme.palette.link, backgroundColor: 'transparent', 
      "&:hover": {backgroundColor: 'transparent'},
  }
}));
`;
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