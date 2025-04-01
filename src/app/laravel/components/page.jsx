'use client'
import React from 'react'
import { styled  } from '@mui/material/styles'

const StyledImage = styled('img')(() => ({
  width: '100%',
  maxWidth: 'none',
  height: 'auto',
  '&:hover': {
    width: '95vw',
    zIndex: '2',
    position: 'absolute',
    left: 20
  }
}))

const page = () => {
  return (
    <main>      
      <StyledImage 
        className="rounded-lg" 
        src="/component-laravel.png" 
        width={0}
        height={0}
        sizes="100vw"
        alt=""
      />
    </main>
  )
}

export default page