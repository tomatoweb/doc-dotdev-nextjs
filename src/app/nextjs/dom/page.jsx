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

	const [popStatus, setPopStatus] = useState(false);

	return (
		<main>
			<ImageModal
				popStatus={popStatus}
				img={"/domhtml.png"}
				closePop={(status) => setPopStatus(status)}
			/>
			<StyledImage
				onClick={() => setPopStatus(true)}
				className="rounded-lg"
				src="/domhtml.png"
				width={0}
				height={0}
				sizes="100vw"
				alt=""
			/>			
			<Typography variant='body1' component="div" sx={{margin: '1rem'}}>
			{`This is because the HTML represents the initial page content, whereas the DOM represents the updated page content which was changed by the JavaScript code you wrote.
Updating the DOM with plain JavaScript is very powerful but verbose. You've written all this code to add an <h1> element with some text`}
      </Typography>
		</main>
	)
}

export default Page