'use client'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'
import ImageModal from "@/app/components/ImageModal";

const StyledImage = styled('img')(() => ({
  position: 'sticky',
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
        img={"/openapi.png"}
        closePop={(status) => setPopStatus(status)}
      />

      <StyledImage
        onClick={() => setPopStatus(true)}
        className="rounded-lg"
        src="/openapi.png"
        width={0}
        height={0}
        sizes="100vw"
        alt=""
      />
      <Typography variant="h6" sx={{ fontWeight: 500, marginTop: 6, marginBottom: 4 }}>
        {``}
      </Typography>
    </main>
  )
}

export default Page