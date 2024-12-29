'use client'
import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { Typography } from '@mui/material';
import { styled  } from '@mui/material/styles';
import Image from 'next/image';

const StyledImage = styled('img')(() => ({
  width: '100%',
  maxWidth: 'none',
  height: 'auto',
  '&:hover': {
    width: '170%',
    zIndex: '2',
    position: 'relative'
  },
  transition: 'width 0.5s'
}))

const page = () => {

  return (
    <main>
      <Typography variant='h6' component="div">
        SASS SCSS 
      </Typography>
      <Typography variant='h6' component="div">
        Sass preprocessor
      </Typography>
      <CodeBlock text={`npm i sass --save-dev`}/>
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
      <StyledImage 
        className="rounded-lg" 
        src="/SCSS.png" 
        width={0}
        height={0}
        sizes="100vw"
        alt=""
      />
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{width: '100%', height: 'auto'}} 
        className="h-auto rounded-lg" 
        src="/sass_scss.png" 
        alt=""
      />
    </main>
  )
}

export default page