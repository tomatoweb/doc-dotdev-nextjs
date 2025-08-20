'use client'
import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { Link, Typography } from '@mui/material';
import { setCookie } from '@/actions/actions';
import { toast } from 'sonner'  // npm install sonner

const Page = () => {

const text00 = `// Set cookie with a server action
import { setCookie } from '@/actions/actions';

<form
	action={ async () => {
		const error = await setCookie({name: 'accept-cookie', value: "true"})
		if(error) {
			toast.error('Server action error:' + error, {className: "bg-red-200", duration: 10000});
		} else {
			toast.success('Post created!', {className: "bg-blue-500", duration: 10000})
		}
	}} 
	className="flex justify-center"
>
	<button className="bg-blue-500 px-3 py-2 text-white rounded-sm">Set cookie</button>
</form>` 
const text000 = `// src/actions/actions.ts
"use server";
import { cookies } from 'next/headers'

export async function setCookie(data : { name: string; value: string }) {
	if(!cookies().get(data.name)) {
		cookies().set(data.name, data.value);
	}	
}`
  const text1 = `Good to know
headers is an asynchronous function that returns a promise. You must use async/await or React's use function.
In version 14 and earlier, headers was a synchronous function. To help with backwards compatibility, you can still access it synchronously in Next.js 15, but this behavior will be deprecated in the future.
Since headers is read-only, you cannot set or delete the outgoing request headers.
headers is a Dynamic API whose returned values cannot be known ahead of time. Using it in will opt a route into dynamic rendering.`;


  return (
    <main>
      <Typography variant='h6' component="div" sx={{marginBottom: '2rem'}}>
        headers() and cookies()
      </Typography>
			<Typography sx={{ mb: 4 }}>
				<Link href="https://nextjs.org/docs/app/api-reference/functions/headers" target="_blank">
					https://nextjs.org/docs/app/api-reference/functions/headers
				</Link>
			</Typography><Typography sx={{ mb: 4 }}>
				<Link href="https://nextjs.org/docs/app/api-reference/functions/cookies" target="_blank">
					https://nextjs.org/docs/app/api-reference/functions/cookies
				</Link>
			</Typography>
			<form
        action={ async () => {
          const error = await setCookie({name: 'accept-cookie', value: "true"})
          if(error) {
            toast.error('Server action error:' + error, {className: "bg-red-200", duration: 10000});
          } else {
            toast.success('Post created!', {className: "bg-blue-500", duration: 10000})
          }
        }} 
        className="flex justify-center"
      >
        <button className="bg-blue-500 px-3 py-2 text-white rounded-sm">Set cookie</button>
      </form>
			<CodeBlock text={text00} />
			<CodeBlock text={text000} />
      <CodeBlock text={text1} />    
    </main>
  )
}

export default Page