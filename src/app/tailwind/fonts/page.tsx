import { Link, Typography } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <div className='text-center'>
      <Typography variant='h5'>Customize Tailwind Fonts</Typography>
      see here : 
      <Link href={"/scratch/next"} sx={{color: 'link'}}> /scratch/next</Link>      
    </div>
  )
}

export default page