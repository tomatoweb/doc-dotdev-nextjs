'use client'
import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { Link, Typography } from '@mui/material';

const page = () => {

  const text = `How to create a REST API using json-server npm package.
What is json-server?

json-server is an npm module/package, used for creating a REST API effortlessly. 

Data is communicated in JSON (JavaScript Object Notation) format between client and server.

Installation: Execute the below command in your project directory.`;

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