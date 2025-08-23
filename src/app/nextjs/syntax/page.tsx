import CodeBlock from '@/app/components/CodeBlock';
import { Link, Typography } from '@mui/material'
import React from 'react'

const page = () => {
  const text = 
  `'use client';
import { CopyBlock, solarizedDark } from 'react-code-blocks';

const CodeBlock = (props: { text: string; color?: string; lang?: string }) => {
	return (
		<div className="my-4 py-2">
			<CopyBlock
				text={props.text}
				language="jsx"
				showLineNumbers={false}
				theme={solarizedDark}
			/>
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