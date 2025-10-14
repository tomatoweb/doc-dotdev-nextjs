'use client'

import { useState } from "react"
import { useEffect} from "react"


const MyComponent = () => {

    const [title, setTitle] = useState("original title")
    const [firstName, setFirstName] = useState("")

    console.log('the component is rendering...')

		// Case : User can change the title of the current page 
		// problem : document object is not available on server side first rendering (SSR)
		// it belongs to client side because
		// it's a DOM APIs (window, document, document.getElementById,...)

		// option 1 : useEffect
    useEffect(() => {

			// This code below inside this useEffect is only executed if the value of title changes
			console.log('the code inside the useEffect is executing...')

			// option 2 : typeof window
			//if (typeof window !== "undefined") {
			document.title = title;
			//}


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
          placeholder="firstname"
        />
				<span className="">firstname is : {firstName}</span>
      </main>
    )
}

export default MyComponent