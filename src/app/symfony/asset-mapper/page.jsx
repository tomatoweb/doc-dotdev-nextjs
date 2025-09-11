'use client'
import React from 'react'
import { Link, Typography } from '@mui/material';


const page = () => {

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
				Asset Mapper
			</Typography>
			<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
				{`AssetMapper is included in the "symfony new myapp --webapp" installation.`}
			</Typography>
			<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
				To use it put all your js css and images in /assets folder
			</Typography>
			<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
				and, in <span className='text-tahiti'>production</span>, compile it with php bin/console asset-map:compile
			</Typography>
			<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
				this creates a /public/assets folder with all your css js etc versioned for caching
			</Typography>
			<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
				In <span className='text-tahiti'>development</span> mode, to avoid repeating asset-map:compile after every source code update,
				delete the just created public/assets folder
				and start the Symfony server (symfony serve -d),
				insteed of the PHP internal server (php -S localhost:8000 -t public)
			</Typography>
			<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
				To add an image, put it in assets/images
			</Typography>
			<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
				and in template {`<img src="{{ asset('images/background.jpg') }}" height="100" width="100" alt="" />`}
			</Typography>
			<div className='my-8'>
				<Link href={"https://www.youtube.com/watch?v=LytWiEDprOY&ab_channel=Grafikart.fr"} sx={{ color: 'link.main' }} target="_blank">
					tuto AssetMapper Youtube FR
				</Link>
			</div>

		</main>
	)
}

export default page