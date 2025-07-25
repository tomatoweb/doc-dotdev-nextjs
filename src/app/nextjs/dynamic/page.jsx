'use client'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
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
        img={"/dynamic.png"}
        closePop={(status) => setPopStatus(status)}
      />

      <StyledImage
        onClick={() => setPopStatus(true)}
        className="rounded-lg"
        src="/dynamic.png"
        width={0}
        height={0}
        sizes="100vw"
        alt=""
      />
    </main>
  )
}

export default Page