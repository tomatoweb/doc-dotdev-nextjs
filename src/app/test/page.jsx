'use client'

import { useEffect, useState } from "react"


const MyComponent = () => {

    const [title, setTitle] = useState("original title")
    const [firstName, setFirstName] = useState("")

		// this useEffect allows us to set/change the document title
		// that is normally impossible on client side because the page html code is allready sended to client 
		// that page html code can only be setted/changed before sending 
    useEffect(() => {
			document.title = title;
		}, [title]);
    console.log('rendering...')

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
				<span className="hidden">{firstName}</span>
      </main>
    )
}

export default MyComponent