'use client'
import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { Typography } from '@mui/material';

const Page = () => {

const text = `'use client'

import { useState } from "react"
import { useEffect} from "react"


const MyComponent = () => {

    const [title, setTitle] = useState("original title")
    const [firstName, setFirstName] = useState("")

		// Case : User can change the title of the current page 
		// problem : document object is not available on server side first rendering
		// it belongs to client side because
		// it's a DOM APIs (window, document, document.getElementById,...)

		// option 1 : useEffect
    useEffect(() => {

			// This code below inside this useEffect is only executed if the value of title changes
			console.log('the code inside the useEffect is executing...')

			// option 2 : typeof window
			if (typeof window !== "undefined") {
			document.title = title;
			}


		}, [title, firstName]);

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
				<span className="">first name is : {firstName}</span>
      </main>
    )
}

export default MyComponent`;	

  return (
    <main>
      <Typography variant='h6' component="div" sx={{marginBottom: '2rem'}}>
        Typeof window vs. useEffect
      </Typography>
      <Typography variant='body1' sx={{marginBottom: '2rem'}}>
        How to initially render on server side a browser Object (document)
      </Typography>
			<CodeBlock text={text} />  
    </main>
  )
}

export default Page