import CodeBlock from '@/app/components/CodeBlock';
import { Typography } from '@mui/material'
import React from 'react'

const page = () => {
  const text = 
  `import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nothing: ['nothingYouCanDo'],
        dynapuff: ['dynapuff'],
      },
      colors: {
        'tahiti': '#3ab7bf',
        'midnight': '#121063',
        'primary': '#7367F0',
      },
    },
  },
  plugins: [],
};
export default config
`;
const text2 = 
`<Github width={40} height={40} className='text-tahiti' />
`;
  return (    
    <div>
      <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4}}>Customize colors Tailwind</Typography>
      src/tailwind.config.ts
      <CodeBlock text={text} />
      usage :
      <CodeBlock text={text2} />
    </div>   
  )
}

export default page