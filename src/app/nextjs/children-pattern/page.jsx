import Image from "next/image"

const page = () => {
  return (
    <container>
      <Image 
        className="rounded-lg" 
        src="/children-pattern.png" 
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '90%', height: 'auto' }} alt=""
      />
    </container>
  )
}
export default page;