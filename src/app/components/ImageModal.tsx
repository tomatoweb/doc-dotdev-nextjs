'use client'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Image from 'next/image'

const StyledImage = styled('img')(() => ({
	height: 'auto',
	transition: 'all 500ms ease-in-out',
	'&:hover': {
		cursor: 'zoom-in'
	}
}))

const ImageModal = ({img}: {img: string;}) => {

	const [popStatus, setPopStatus] = useState(false);

	return (
		<>
			<StyledImage
				onClick={() => setPopStatus(true)}
				className="w-full xl:w-1/2 rounded-lg mx-auto my-4"
				src={img}
				width={0}
				height={0}
				alt=""
			/>
			{popStatus && (
			<section
				onClick={() => setPopStatus(false)}
				className="fixed z-50 top-[4rem] left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-80">
				<aside className='rounded-2xl w-full shadow-md'>
					<Image
						className="w-[auto] h-[92vh] mx-auto my-auto rounded-xl cursor-zoom-out"
						width={2000}
						height={2000}
						src={img}
						alt=''
					/>
				</aside>
			</section>
			)}
		</>
	)
}

export default ImageModal