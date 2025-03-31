'use client'
import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { styled  } from '@mui/material/styles'
import { Typography } from '@mui/material'

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
      <StyledImage 
        className="rounded-lg" 
        src="/openapi.png" 
        width={0}
        height={0}
        sizes="100vw"
        alt=""
      />
      <Typography variant="h6" sx={{fontWeight: 500, marginTop:6, marginBottom:4}}>
        OpenAPI is a specification for defining an API's Documentation.
      </Typography>
      <Typography variant="body1" sx={{fontWeight: 500, marginBottom:4}}>
      {`Swagger Editor is a tool that can be used to generate this documentation.`}
      </Typography>
      <Typography variant="body1" sx={{fontWeight: 500, marginBottom:4, color:"coral"}}>
      {`Current Working Directory VS. Current Script (file) Directory`}
      </Typography>
    </main>
  )
}

export default page