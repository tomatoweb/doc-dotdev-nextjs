'use client'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Image from 'next/image'

const StyledImage = styled('img')(() => ({
	maxHeight: '85vh',
	width: 'auto',
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
				className="w-full rounded-lg mx-auto my-4"
				src={img}
				width={0}
				height={0}
				alt=""
			/>
			{popStatus && (
			<div
				onClick={() => setPopStatus(false)}
				className="cursor-zoom-out fixed z-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-80">
				<div className='rounded-2xl shadow-md'>
					<Image
						width="0"
						height="0"
						sizes="95vh"
						className="w-auto h-auto mt-16"
						src={img}
						alt=''
					/>
				</div>
			</div>
			)}
		</>
	)
}

export default ImageModal