'use client'
import React from 'react'
import { styled  } from '@mui/material/styles'
import { Link, Typography } from '@mui/material'

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
        src="/custom-helper-global-class-or-function.png" 
        width={0}
        height={0}
        sizes="100vw"
        alt=""
      />
      <Typography variant="body1" sx={{fontWeight: 500, marginBottom:4, marginTop: 4}}>
      More details :
      </Typography>
      <Link 
				href={"https://stackoverflow.com/questions/28290332/how-to-create-custom-helper-functions-in-laravel"} 
				sx={{color: 'link', wordBreak: 'break-all'}}>
					https://stackoverflow.com/questions/28290332/how-to-create-custom-helper-functions-in-laravel
			</Link> 
      <Typography variant="body1" sx={{fontWeight: 500, marginBottom:4, marginTop: 4}}>
      Same for Blade directive :
      </Typography>
      <Link 
				href={"https://stackoverflow.com/questions/28290332/how-to-create-custom-helper-functions-in-laravel#36888067"} 
				sx={{color: 'link', wordBreak: 'break-all'}}> 
					https://stackoverflow.com/questions/28290332/how-to-create-custom-helper-functions-in-laravel#36888067
			</Link> 
    </main>
  )
}

export default page