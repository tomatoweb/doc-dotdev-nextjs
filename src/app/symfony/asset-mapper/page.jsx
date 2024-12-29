'use client'
import React from 'react'
import { Link, Typography } from '@mui/material';


const page = () => {

  return (
    <main>
      <Typography variant='h4' component="div" sx={{marginTop:4, marginBottom:3}}>
      🚀 Asset Mapper 
      </Typography>
      <Link href={"https://www.youtube.com/watch?v=LytWiEDprOY&ab_channel=Grafikart.fr"} sx={{color: 'link.main'}}> 
        https://www.youtube.com/watch?v=LytWiEDprOY&ab_channel=Grafikart.fr
      </Link>     
      
    </main>
  )
}

export default page