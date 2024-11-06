import CodeBlock from '@/app/components/CodeBlock';
import { Link, Typography } from '@mui/material'
import React from 'react'

const page = () => {
  const text = 
  `@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: 'nothingYouCanDo';
  src: local('nothingYouCanDo'), url(./fonts/NothingYouCouldDo-Regular.woff) format('woff');
}
@font-face {
  font-family: 'geistSans';
  src: local('geistSans'), url(./fonts/GeistVF.woff) format('woff');
}
@font-face {
  font-family: 'dynapuff';
  src: local('dynapuff'), url(./fonts/DynaPuff-VariableFont.woff) format('woff');
}
nav {
  scrollbar-width: thin;
  scrollbar-color: #eaeaea transparent;
  scrollbar-gutter: stable;
}
code {
  white-space: pre !important;
}
.codeblock {
  border: 1px solid #2e2e2e !important;
  scrollbar-width: thin;
  scrollbar-color: #eaeaea transparent;
  scrollbar-gutter: stable;
}
.token {
  text-decoration: none !important;
}
`;
const text2 = 
`<nav className='overflow-y-auto overflow-x-hidden h-[calc(100vh-200px)]'>
`;
  return (    
    <div>
      <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4}}>Thiny Scrollbar</Typography>
      src/app/globals.css
      <CodeBlock text={text} />
      usage :
      <CodeBlock text={text2} />
    </div>   
  )
}

export default page