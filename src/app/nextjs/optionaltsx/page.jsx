import { Alert, Typography } from "@mui/material";
import CodeBlock from "@/app/components/CodeBlock";
import { CheckCircleOutline } from "@mui/icons-material";

const text1 = 
`'use client';
import { Copy } from '@geist-ui/icons';
import { Box } from '@mui/material';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = (props: { text: string; color?: string }) => {
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
            backgroundColor: "#0a0a0a",
            opacity: "1",
            marginTop: "-2rem",
            paddingTop: "1.7rem"
        }}
        codeTagProps={{
            style: {
                color: props.color,
            },
        }}>                
        {props.text}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock`;
const text = 
`Just add a question mark :
  const CodeBlock = (props: { text: string; color?: string }) => {`;

const page = () => {
  return (
    <div>
      <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4}}>tsx optional params</Typography>
      <Typography variant="p" sx={{marginBottom:4}}>{text}</Typography>
      
      <CodeBlock text={text1} />
      
    </div>
  )
}
export default page