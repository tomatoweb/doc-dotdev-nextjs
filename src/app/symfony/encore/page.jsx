'use client'
import React from 'react'
import { Link, Typography } from '@mui/material';

const Page = () => {

	return (
		<main>
			<Typography variant='h5' component="div" sx={{ marginTop: 4, marginBottom: 3 }}>
				🚀 Asset Mapper vs. Webpack Encore vs. React/Nextjs/Vuejs
			</Typography>
			<div className='mb-4'>
				<Link href={"https://symfony.com/doc/current/frontend.html#frontend-twig-php"} sx={{ color: 'link.main' }}>
					https://symfony.com/doc/current/frontend.html#frontend-twig-php
				</Link>
			</div>
			<div className='mb-10'>
				{`Symfony gives us the flexibility to choose any front-end tools we want. `}
				<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
					There are generally four approaches:
				</Typography>
				<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
					- Put all css js img files in public folder, and load it classicaly
				</Typography>
				<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
					- Use the assets folder, build your HTML with PHP & Twig with AssetMapper (no build, use asset() function in template)
				</Typography>
				<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
					- Use a Builder Webpack Encore (Tailwind compatible)
				</Typography>
				<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
					- Build your frontend with a JavaScript framework like React, Vue, Svelte, etc.
				</Typography>
			</div>
			<Typography variant='h5' component="div" sx={{ marginTop: 2 }}>
				Webpack Encore
			</Typography>
			<p className='my-4'>
				<span>Webpack-Encore is built with</span><span className='text-link'> Node.js</span>
				<span> on top of </span><span className='text-link'>Webpack</span>
			</p>
		</main>
	)
}

export default Page