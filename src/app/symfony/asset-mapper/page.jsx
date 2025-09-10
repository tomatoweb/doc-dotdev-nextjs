'use client'
import React from 'react'
import { Link, Typography } from '@mui/material';


const page = () => {

  return (
    <main>
      <Typography variant='h4' component="div" sx={{marginTop:4, marginBottom:3}}>
      🚀 Asset Mapper vs. Webpack Encore vs. React/Nextjs/Vuejs
      </Typography>
			<Link href={"https://symfony.com/doc/current/frontend.html#frontend-twig-php"} sx={{color: 'link.main'}}> 
				https://symfony.com/doc/current/frontend.html#frontend-twig-php
			</Link>     
			<div className='whitespace-pre mb-10'>{`Symfony gives us the flexibility to choose any front-end tools we want. 
There are generally three approaches:

0. put all css js img files in public folder, and load it classicaly
1. building your HTML with PHP & Twig with AssetMapper (no build, use asset() function in template)
2. building your HTML with PHP & Twig with Webpack Encore (Tailwind compatible) 
3. building your frontend with a JavaScript framework like React, Vue, Svelte, etc.

- AssetMapper bundle is included in the "symfony new myapp --webapp" installation.
- Webpack Encore needs Node.js to build`}</div>
      <Link href={"https://www.youtube.com/watch?v=LytWiEDprOY&ab_channel=Grafikart.fr"} sx={{color: 'link.main'}}  target="_blank"> 
        tuto AssetMapper Youtube FR
      </Link>     
      
    </main>
  )
}

export default page