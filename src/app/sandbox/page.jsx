'use client'

import { useEffect, useState } from "react"


const MyUseEffect = () => {

    const [title, setTitle] = useState("")
    const [firstName, setFirstName] = useState("")

    useEffect(() => {
      document.title = title
      console.log('rendering...')
    }, [title]);


    return (
      <main className="flex flex-col p-4 bg-gray-900">    
        <input 
          type="text" 
          onChange={e => setTitle(e.target.value)} 
          className="m-4 bg-gray-800" 
          placeholder="title" 
        />
        <input 
          type="text" 
          onChange={e => setFirstName(e.target.value)} 
          className="m-4 bg-gray-800" 
          placeholder="first name"
        />
        <div>{firstName}</div>
      </main>
    )
}

export default MyUseEffect