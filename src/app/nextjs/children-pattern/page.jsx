import Clientcomponent from "@/app/components/Clientcomponent";
import ServerComponent from "@/app/components/ServerComponent";
import Image from "next/image"

const page = () => {
  return (
    <container>

      <Clientcomponent>

        <ServerComponent/>

      </Clientcomponent>
      
      <Image 
        className="rounded-lg" 
        src="/children-pattern.png" 
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '90%', height: 'auto', margin: 'auto' }} alt=""
      />
    </container>
  )
}
export default page;