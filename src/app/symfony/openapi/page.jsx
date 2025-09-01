'use client'
import { Typography } from '@mui/material'
import ImageModal from "@/app/components/ImageModal";

const Page = () => {

  return (
    <main>
      <ImageModal img={"/openapi.png"} />
      <Typography variant="h6" sx={{ fontWeight: 500, marginTop: 6, marginBottom: 4 }}>
        {``}
      </Typography>
    </main>
  )
}

export default Page