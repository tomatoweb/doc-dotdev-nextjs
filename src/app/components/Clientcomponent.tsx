"use client";

const Clientcomponent = ({children}: {children: React.ReactNode;}) => {
  return (
    <div className="bg-slate-500 text-center m-7 p-5">

      Clientcomponent

      {children}

      </div>
  )
}

export default Clientcomponent