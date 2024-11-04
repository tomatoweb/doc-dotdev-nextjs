'use client';
import { Copy } from '@geist-ui/icons';
import { Box } from '@mui/material';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = props => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative">
      <br/>
      <div className="flex justify-end cursor-pointer mr-4">
        <Box sx={[{fontSize: '0.8rem'}, copied ? { visibility: 'visible' } : { visibility: 'hidden'}]}>
          copied
        </Box>
        <Copy size={17} color='lightgray' onClick={() => {navigator.clipboard.writeText(props.text); setCopied(true)}} className=""/>
      </div>
      <SyntaxHighlighter        
        language="jsx"
        style={atomDark}
        wrapLongLines
        customStyle={{
            backgroundColor: "transparent",
            opacity: "1",
            marginTop: "-2rem",
        }}
        codeTagProps={{
            style: {
                color: "white",
            },
        }}>                
        {props.text}
      </SyntaxHighlighter>
      <br/>
    </div>
  )
}

export default CodeBlock