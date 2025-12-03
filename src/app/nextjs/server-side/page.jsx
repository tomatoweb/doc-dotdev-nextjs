import { Container } from "@mui/material"
import Image from "next/image"

const page = () => {
  return (
    <Container maxWidth="xs">
      <Image 
        className="h-auto rounded-lg" 
        src="/server-side-rendering.png" 
        width={500}
        height={500}
        sizes="100vw"
				alt=""
      />
    </Container>
  )
}

export default page