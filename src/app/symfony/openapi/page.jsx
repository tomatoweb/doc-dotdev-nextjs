'use client'
import React from 'react'
import { styled  } from '@mui/material/styles'
import { Typography } from '@mui/material'

const StyledImage = styled('img')(() => ({ 
    position: 'sticky',   
    width: '100%',
    maxWidth: 'none',
    height: 'auto',
    transition: 'all 500ms ease-in-out',
    '&:hover': {
      width: '60vw',
      marginLeft: '-20rem',
      zIndex: '2',
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
      <Typography variant="h6" sx={{fontWeight: 500, marginTop:6, marginBottom:4}}>
        {``}
      </Typography>
    </main>
  )
}

export default page