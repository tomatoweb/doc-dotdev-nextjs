import { Link, Typography } from "@mui/material";
import Image from "next/image";
import ImageModal from "@/app/components/ImageModal";
import CodeBlock from "@/app/components/CodeBlock";

const page = () => {


	return (
		<div className='overflow-x-auto text-sm'>
			<div className="flex items-center mt-5">
				<Image src="/react.svg" width={40} height={0} className="-mt-8 mr-3" alt="React logo" />
				<Typography variant="h5" sx={{ fontWeight: '600' }} mb={4}>
					UseReducer
				</Typography>
			</div>
				<Typography variant="h5" sx={{ fontWeight: '600' }} mb={4}>
					The useState Hell !
				</Typography>
			
			<Typography sx={{ mb: 4 }}>
				<Link href="https://www.w3schools.com/react/react_usereducer.asp" target="_blank">
					https://www.w3schools.com/react/react_usereducer.asp
				</Link>
			</Typography>
			<Typography sx={{ mb: 4 }}>
				<Link href="https://www.youtube.com/watch?v=SzcPyC5Nzdo" target="_blank">
					https://www.youtube.com/watch?v=SzcPyC5Nzdo
				</Link>
			</Typography>
		</div>
	)
}

export default page