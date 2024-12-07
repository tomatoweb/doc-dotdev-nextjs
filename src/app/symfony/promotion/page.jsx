import Image from "next/image"

const page = () => {
  return (
    <container>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{width: '100%', height: 'auto'}} 
        className="h-auto rounded-lg" 
        src="/php8-property-promotion.png" 
        alt=""
      />
    </container>
  )
}

export default page