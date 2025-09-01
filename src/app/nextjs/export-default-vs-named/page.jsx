'use client'
import Link from 'next/link';
import { Typography } from '@mui/material'
import ImageModal from "@/app/components/ImageModal";

const Page = () => {
  return (
    <main>
      <ImageModal img={"/nextjs_import_export.png"} />
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