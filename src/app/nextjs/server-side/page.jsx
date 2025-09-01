import Image from "next/image"

const page = () => {
  return (
    <container className="flex flex-row items-center justify-center">
      <Image 
        className="h-auto rounded-lg" 
        src="/server-side-rendering.png" 
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '70%', height: 'auto' }} alt=""
      />
    </container>
  )
}

export default page