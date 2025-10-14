'use client'
import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { Typography } from '@mui/material';
import ImageModal from '@/app/components/ImageModal';

const page = () => {

  const text = `When one of the useState of a component changes, a new render is triggered.
This means that the entire code of the component is re-executed.
But some code may not need to be executed on each re-render, it would produce a Side Effect.
Some examples of side effects are: 
fetching data, directly updating the DOM, and timers.

Let's put this code in a useEffect :  
UseEffect execute it's code on any change of it's Dependency.
UseEffect also execute on first initial render. 
If dependency array is empty, useEffect triggers only on mount of the component.

Example : updating directly the DOM by changing the Document title :
A component with 2 inputs :
One to change the Document title, and another to update the firstname.
If we update the firstname, the firstname's useState is updated and triggers a new render, executing the full code of the component
unnecessary including document.title = title`;

  const text1 = `The code 'document.title' = title only needs to be executed if the user updates the title input value
and consequently updating the title useState.
Let's put this code in a useEffect :`;

  const text2 = ` // src/app/test/page.jsx
'use client'
import { useState } from "react"

const MyComponent = () => {

    const [title, setTitle] = useState("")
    const [firstName, setFirstName] = useState("")

    document.title = title
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
      </main>
    )
}

export default MyComponent`;

  const text3 = `'use client'

import { useEffect, useState } from "react"


const MyComponent = () => {

    const [title, setTitle] = useState("original title")
    const [firstName, setFirstName] = useState("")

    console.log('the component is rendering...')

    // Use Case : change the title of the document (page) 
    // But document is a client side DOM API 
    // e.g. : document.getElementById, window, document, ...
    // Thus not available on server side
    // for first rendering (SSR)
    

    // option 1 : useEffect
    useEffect(() => {
      
      // option 2 : typeof window
      // if (typeof window !== "undefined") {
      
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
          placeholder="first name"
        />
        <span className="">first name is : {firstName}</span>
      </main>
    )
}

export default MyComponent`;


  return (
    <main>
      <Typography variant='h5' sx={{marginBottom: '1em'}}>
        {`UseEffect`}
      </Typography>
      <Typography variant='body1' sx={{ whiteSpace: 'pre-wrap', lineHeight: '2em' }}>
        {text}
      </Typography>
      <CodeBlock text={text2} />
      <ImageModal img={"/useEffect.png"} />
      <Typography variant='h7' component="div" sx={{ whiteSpace: 'pre-wrap', lineHeight: '2em' }}>
        {text1}
      </Typography>
      <CodeBlock text={text3} />
    </main>
  )
}

export default page