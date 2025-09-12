'use client'
import CodeBlock from '@/app/components/CodeBlock'
import ImageModal from "@/app/components/ImageModal";

const Page = () => {

  return (
    <main>
      <CodeBlock text={`symfony console debug:dotenv`} />
      <ImageModal img={"/env.png"} />
    </main>
  )
}

export default Page