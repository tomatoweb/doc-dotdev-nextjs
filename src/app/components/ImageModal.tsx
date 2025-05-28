import Image from "next/image";

const ImageModal = ({
  popStatus, img, closePop
}:{
  popStatus: boolean;
  img: string;
  closePop: (status: boolean) => void;
}) => {
  return (
    popStatus && (
    <section
      onClick={() => closePop(false)}
      className="fixed z-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-80">
      <aside className='rounded-2xl w-full shadow-md'>        
        <Image                  
          className="mx-auto rounded-xl cursor-zoom-out transition delay-150 duration-300 ease-in-out"
          src={img}
          width={1300}
          height={0}
          style={{maxHeight: '99vh', width: 'auto'}}
          alt=""
          quality={100}
        />
      </aside>
    </section>
    )
  )
}

export default ImageModal