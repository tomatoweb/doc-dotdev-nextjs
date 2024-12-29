'use client'
import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { Typography } from '@mui/material';

const text = ``;

const page = () => {

  return (
    <main>
      <Typography variant='h6' component="div">
      🚀 TWIG templating 
      </Typography>
      <CodeBlock text={text}/>
      <Typography variant='body1' component="div">
      Compile Sass to CSS using the sass command. 
      <CodeBlock text={`sass input.scss output.css`}/>
      you can also watch
      <CodeBlock text={`sass --watch input.scss output.css`}/>
      Sass has two syntaxes! The SCSS syntax .scss is used most commonly. 
      Its a superset of CSS, which means all valid CSS is also valid SCSS. 
      The indented syntax .sass is more unusual: 
      it uses indentation rather than curly braces to nest statements, 
      and newlines instead of semicolons to separate them.      
      </Typography>
      <Typography variant='h6' component="div" sx={{marginTop:6, marginBottom:3}}>
        But React and Nextjs use Sass preprocessor automatically for .scss or .sass files when using npm run dev or npm run build
      </Typography>
      
    </main>
  )
}

export default page