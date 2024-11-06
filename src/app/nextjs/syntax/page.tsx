import CodeBlock from '@/app/components/CodeBlock';
import { Link, Typography } from '@mui/material'
import React from 'react'

const page = () => {
  const text = 
  `'use client';
import { Copy } from '@geist-ui/icons';
import { Box } from '@mui/material';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = props => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative my-8">
      <div className="flex justify-end cursor-pointer mr-4">
        <Box sx={[{fontSize: '0.8rem'}, copied ? { visibility: 'visible' } : { visibility: 'hidden'}]}>
          copied
        </Box>
        <Copy size={17} color='lightgray' onClick={() => {navigator.clipboard.writeText(props.text); setCopied(true)}} className=""/>
      </div>
      <SyntaxHighlighter
        className="codeblock"        
        language="jsx"
        style={atomDark}
        wrapLongLines
        customStyle={{
            backgroundColor: "transparent",
            opacity: "1",
            marginTop: "-2rem",
            paddingTop: "2rem"
        }}
        codeTagProps={{
            style: {
                color: "white",
            },
        }}>                
        {props.text}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock
`;
const text2 = 
`import CodeBlock from "@/app/components/CodeBlock";

<CodeBlock text={text} />
`;
  return (    
    <div>
      <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4}}>SyntaxHighlighter for code block</Typography>
      src/app/components/CodeBlock.tsx
      <CodeBlock text={text} />
      usage :
      <CodeBlock text={text2} />
      <div className='flex flex-col mb-20'>
      <Link href='https://github.com/react-syntax-highlighter/react-syntax-highlighter'>https://github.com/react-syntax-highlighter/react-syntax-highlighter</Link>
      <Link href='https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/'>https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/</Link>      
      </div>
    </div>   
  )
}

export default page