'use client'
import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { Link, Typography } from '@mui/material';
import ImageModal from '@/app/components/ImageModal';

const page = () => {

  const text = `How to create a REST API using json-server npm package.
What is json-server?

json-server is an npm module/package, used for creating a REST API effortlessly. 

Data is communicated in JSON (JavaScript Object Notation) format between client and server.

Installation: Execute the below command in your project directory.`;

  const text1 = `The code 'document.title' = title only needs to be executed if the user updates the title input value
and consequently updating the title useState.
Let's put this code in a useEffect :`;
  const text0 = `The db.json database file: The data is stored in JSON format`;

  const text2 = `// db.json (at the root of the project)
{
  "posts": [
    {
      "title": "Lorem ipsum dolor sit amet",
      "author": "Patrice",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "likes": 27,
      "id": "1"
    },
    {
      "title": "Lorem ipsum dolor sit amet dolor sit amet",
      "author": "Samia",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "likes": 16,
      "id": "2"
    },
    {
      "title": "Lorem ipsum dolor",
      "author": "Denis",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
      "likes": 107,
      "id": "3"
    }
  ],
  "user": [
    {
      "pseudo": "user42",
      "likes": 0,
      "age": 30,
      "id": 1
    }
  ]
}`;

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
        {`JSON-Server`}
      </Typography>
      <Typography variant='body1' sx={{ whiteSpace: 'pre-wrap', lineHeight: '2em' }}>
        {text}
      </Typography>
      <CodeBlock text={`npm i -g json-server
npx json-server --watch db.json //  --port PORT_NUMBER`} />
			<Typography variant='body1' sx={{ whiteSpace: 'pre-wrap', lineHeight: '2em' }}>
				{text0}
			</Typography>
			<CodeBlock text={text2} />
      <Typography variant='h7' component="div" sx={{ whiteSpace: 'pre-wrap', lineHeight: '2em' }}>
        {`Find a full example utilization in my redux-project`}
      </Typography>
			<Typography sx={{ mb: 4 }}>
				<Link href="https://github.com/tomatoweb/redux-app" target="_blank">
					https://github.com/tomatoweb/redux-app
				</Link>
			</Typography>
    </main>
  )
}

export default page