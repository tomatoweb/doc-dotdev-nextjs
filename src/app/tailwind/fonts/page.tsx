import CodeBlock from '@/app/components/CodeBlock'
import { Typography } from '@mui/material'
import React from 'react'

const page = () => {

	const text = `// src/index.css
@import "tailwindcss";

@font-face {
  font-family: davinci;
  font-style: normal;
  font-weight: 200 700;
  font-display: swap;
  src: url("./fonts/P22 Da Vinci Forward Regular.woff2") format("woff2");
}

@theme {
  --font-davinci: "davinci", sans-serif; 
}
	
// use : <div className='font-davinci'>`;

	return (
		<div>
			<Typography variant='h5'> Tailwind v4: install Fonts</Typography>
			<CodeBlock text={text} />
		</div>
	)
}

export default page