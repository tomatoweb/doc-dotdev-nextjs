'use client'
import React from 'react'
import { Link, Typography } from '@mui/material';

const Page = () => {

  return (
    <main>
      <Typography variant='h4' component="div" sx={{marginTop:4, marginBottom:3}}>
      🚀 Asset Mapper vs. Bundler 
      </Typography>
      <Link 
				href={"https://symfony.com/doc/current/frontend.html#frontend-twig-php"} 
				sx={{color: 'link.main', wordBreak: 'break-all'}}> 
        https://symfony.com/doc/current/frontend.html#frontend-twig-php
      </Link>
      <Typography variant='h6' component="div" sx={{marginTop:4, marginBottom:2}}>
      Front-end tools : there are generally two approaches:
      </Typography>
      <Typography variant='body2' component="div" sx={{marginTop:2, marginBottom:2, fontSize:'1.1rem'}}>
      - building your HTML with PHP & Twig
      </Typography>
      <Typography variant='body2' component="div" sx={{marginTop:2, marginBottom:2, fontSize:'1.1rem'}}>
      - building your frontend with a JavaScript framework like Next, React, Vue, Svelte, etc. 
      </Typography>
      <Typography variant='body1' component="div" sx={{marginTop:4, marginBottom:2, fontSize:'1.1rem'}}>
        <p>
          {`Pour un projet qui nécessite assez peu de JS, on peut utiliser le `}
          <span className='text-link'>AssetMapper </span>de Symfony.
        </p>
        <p>
          {`Pour des projets qui utilisent Next, React, Vue, on a besoin d'un Bundler : `}
          <span className='text-link'>Webpack-Encore.</span>
        </p>
        <p className='my-4'>          
          <span>Webpack-Encore is built with</span>
          <span className='text-link'> Node.js</span>
          <span> on top of </span>          
          <span className='text-link'>Webpack</span>
        </p>
      </Typography>     
      
    </main>
  )
}

export default Page