import ImageModal from "@/app/components/ImageModal";
import { Typography } from '@mui/material';

const Page = () => {

	return (
		<main>
			<Typography variant="body1" component="div" sx={{mb:2}}>
      ✨ A Promise is an Object that links Producing code and Consuming code
      </Typography>
			<ImageModal	img={"/wait-then0.png"}/>
			<ImageModal	img={"/wait-then.png"}/>
			<ImageModal	img={"/promise-callback1.png"}/>
			<ImageModal	img={"/promise-callback2.png"}/>
		</main>
	)
}

export default Page