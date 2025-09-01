import CodeBlock from "@/app/components/CodeBlock"
import { Typography } from "@mui/material";


const page = () => {

  const text = 
`// Basic usage
import Image from "next/image";
<Image 
  className="rounded-lg" 
  src="/children-pattern.png" 
  width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }} 
	alt=""
/>`;

const text1 = 
`// with MUI Styled
import { styled  } from '@mui/material/styles';
import Image from 'next/image';

const StyledImage = styled('img')(() => ({
  width: '100%',
  maxWidth: 'none',
  height: 'auto',
  '&:hover': {
    width: '170%',
    zIndex: '2',
    position: 'relative'
  },
  transition: 'width 0.5s'
}))
  
<StyledImage 
        className="rounded-lg" 
        src="/SCSS.png" 
        width={0}
        height={0}
        sizes="100vw"
        alt=""
      />
`;
const text2 = 
`// With Click to enlarge
'use client'
import { Typography } from '@mui/material';
import ImageModal from "@/app/components/ImageModal";

const Page = () => {

	return (
		<main>
			<ImageModal	img={"/promise-callback1.png"} />
		</main>
	)
}

export default Page`;
const text3 = 
`// src/app/components/ImageModal.tsx
import Image from "next/image";

const ImageModal = ({
  popStatus, img, closePop
}:{
  popStatus: boolean;
  img: string;
  closePop: (status: boolean) => void;
}) => {
  return (
    popStatus && (
    <section
      onClick={() => closePop(false)}
      className="fixed z-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-80">
      <aside className='rounded-2xl w-full shadow-md'>        
        <Image                  
          className="mx-auto rounded-xl cursor-zoom-out transition delay-150 duration-300 ease-in-out"
          src={img}
          width={1300}
          height={0}
          style={{maxHeight: '99vh', width: 'auto'}}
          alt=""
          quality={100}
        />
      </aside>
    </section>
    )
  )
}

export default ImageModal`;
  return (
    <div>
			<Typography variant="body1" component="div" sx={{mb:2}}>
      ✨ Image with Nextjs and MUI
      </Typography>
      <CodeBlock text={text} />
      <CodeBlock text={text1} />
      <CodeBlock text={text2} />
      <CodeBlock text={text3} />
    </div>
  )
}

export default page