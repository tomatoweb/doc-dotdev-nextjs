'use client'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import ImageModal from "@/app/components/ImageModal";

const StyledImage = styled('img')(() => ({
  width: '100%',
  maxWidth: 'none',
  height: 'auto',
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
        img={"/component-laravel.png"}
        closePop={(status) => setPopStatus(status)}
      />

      <StyledImage
        onClick={() => setPopStatus(true)}
        className="rounded-lg"
        src="/component-laravel.png"
        width={0}
        height={0}
        sizes="100vw"
        alt=""
      />
    </main>
  )
}

export default Page