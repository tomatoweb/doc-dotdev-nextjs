'use client'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import ImageModal from "@/app/components/ImageModal";
import { Typography } from '@mui/material';

const StyledImage = styled('img')(() => ({
	width: '100%',
	maxWidth: 'none',
	height: 'auto',
	transition: 'all 500ms ease-in-out',
	'&:hover': {
		cursor: 'zoom-in'
	}
}))

const Page = () => {

	const [popStatus1, setPopStatus1] = useState(false);
	const [popStatus2, setPopStatus2] = useState(false);

	return (
		<main>
			<Typography variant="body1" component="div" sx={{mb:2}}>
      ✨ A Promise is an Object that links Producing code and Consuming code
      </Typography>
			<ImageModal
				popStatus={popStatus1}
				img={"/promise-callback1.png"}
				closePop={(status) => setPopStatus1(status)}
			/>
			<StyledImage
				onClick={() => setPopStatus1(true)}
				className="rounded-lg"
				src="/promise-callback1.png"
				width={0}
				height={0}
				sizes="100vw"
				alt=""
			/>
			<br />
			<ImageModal
				popStatus={popStatus2}
				img={"/promise-callback2.png"}
				closePop={(status) => setPopStatus2(status)}
			/>
			<StyledImage
				onClick={() => setPopStatus2(true)}
				className="rounded-lg"
				src="/promise-callback2.png"
				width={0}
				height={0}
				sizes="100vw"
				alt=""
			/>
		</main>
	)
}

export default Page