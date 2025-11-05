import { Link, Typography } from "@mui/material";
import Image from "next/image";
const page = () => {


	return (
		<div className='overflow-x-auto text-sm'>
			<div className="flex items-center mt-5">
				<Image src="/react.svg" width={40} height={0} className="-mt-8 mr-3" alt="React logo" />
				<Typography variant="h5" sx={{ fontWeight: '600' }} mb={4}>
					Redux
				</Typography>
			</div>
				<Typography variant="h5" sx={{ fontWeight: '600' }} mb={4}>
					The global state manager
				</Typography>
			
			<Typography sx={{ mb: 4 }}>
				<Link href="https://github.com/tomatoweb/redux-app" target="_blank">
					https://github.com/tomatoweb/redux-app
				</Link>
			</Typography>
			<Typography sx={{ mb: 4 }}>
				<Link href="https://www.youtube.com/watch?v=hWLFTtcnEOs" target="_blank">
					https://www.youtube.com/watch?v=hWLFTtcnEOs
				</Link>
			</Typography>
		</div>
	)
}

export default page