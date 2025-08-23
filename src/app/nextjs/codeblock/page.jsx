'use client'
import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { Typography } from '@mui/material';

const Page = () => {

const text = `// src/components/CodeBlock.tsx
'use client';
import { CopyBlock, solarizedDark } from 'react-code-blocks';

const CodeBlock = (props: { text: string; color?: string; lang?: string; className?: string; }) => {
	return (
		<div className={\`my-4 py-2 \${props.className}\`}>
			<CopyBlock
				text={props.text}
				language="jsx"
				showLineNumbers={false}
				theme={solarizedDark}
			/>
		</div>
	)
}

export default CodeBlock`;
	

  return (
    <main>
      <Typography variant='h6' component="div" sx={{marginBottom: '2rem'}}>
        Code Block
      </Typography>			
			<CodeBlock text={text} /> 
    </main>
  )
}

export default Page