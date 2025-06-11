'use client'
import React, { useState } from 'react'
import Link from 'next/link';
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
        img={"/nextjs_import_export.png"}
        closePop={(status) => setPopStatus(status)}
      />

      <StyledImage
        onClick={() => setPopStatus(true)}
        className="rounded-lg"
        src="/nextjs_import_export.png"
        width={0}
        height={0}
        sizes="100vw"
        alt=""
      />
      <Typography variant="body1" sx={{ marginTop: 4}}>
        {`source: `}
      </Typography>
      <Link href="https://fr.react.dev/learn/importing-and-exporting-components">
      https://fr.react.dev/learn/importing-and-exporting-components
        </Link>
    </main>
  )
}

export default Page