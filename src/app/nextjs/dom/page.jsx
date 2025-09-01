'use client'
import ImageModal from "@/app/components/ImageModal";
import { Typography } from '@mui/material';

const Page = () => {
	return (
		<main>
			<ImageModal img={"/domhtml.png"} />		
			<Typography variant='body1' component="div" sx={{margin: '1rem'}}>
			{`This is because the HTML represents the initial page content, whereas the DOM represents the updated page content which was changed by the JavaScript code you wrote.
Updating the DOM with plain JavaScript is very powerful but verbose. You've written all this code to add an <h1> element with some text`}
      </Typography>
		</main>
	)
}

export default Page