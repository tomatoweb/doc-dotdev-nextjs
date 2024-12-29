import CodeBlock from "@/app/components/CodeBlock"


const page = () => {

  const text = 
`<Image 
  className="rounded-lg" 
  src="/children-pattern.png" 
  width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }} alt=""
/>`;

const text1 = 
`import { styled  } from '@mui/material/styles';
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
  return (
    <div>
      <CodeBlock text={text} />
      <CodeBlock text={text1} />
    </div>
  )
}

export default page