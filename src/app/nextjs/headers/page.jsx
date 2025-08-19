'use client'
import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { Typography } from '@mui/material';
import { setCookie } from '@/actions/actions';
import { useRef } from "react"
import { toast } from 'sonner'  // npm install sonner

const Page = () => {

const text0 = `// https://nextjs.org/docs/app/api-reference/functions/headers
// https://nextjs.org/docs/app/api-reference/functions/cookies
import { headers, cookies } from 'next/headers'
 
export default async function Page() {

  const headersList = await headers()
  const userAgent = headersList.get('user-agent')

	const cookieStore = await cookies()
  const theme = cookieStore.get('theme')

	const headersEntries = headersList.entries()
  
	headersEntries.forEach((value, key) => {
		console.log(value)
  });

	/* output: 
[ 'host', 'localhost:3000' ]
[ 'connection', 'keep-alive' ]
[ 'cache-control', 'max-age=0' ]
[
  'sec-ch-ua',
  '"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"'
]
[ 'sec-ch-ua-mobile', '?0' ]
[ 'sec-ch-ua-platform', '"Windows"' ]
[ 'upgrade-insecure-requests', '1' ]
[
  'accept',
  'text/html,application/xhtml+xml...'
[ 'upgrade-insecure-requests', '1' ]
[
  'user-agent',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64)...'
]
  'accept',
  'text/html,application/xhtml+xml...'
  'user-agent',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64)...'
]
[ 'sec-fetch-site', 'same-origin' ]
[ 'sec-fetch-mode', 'navigate' ]
[ 'sec-fetch-dest', 'document' ]
[ 'referer', 'http://localhost:3000/fr/dashboards/crm' ]
[ 'accept-encoding', 'gzip, deflate, br, zstd' ]
[ 'accept-language', 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7' ]
[
  'cookie',
  'cookie',
  'colorPref=dark; next-auth.csrf-token=b8db29...'
] 15
[ 'x-forwarded-host', 'localhost:3000' ] 16
[ 'x-forwarded-port', '3000' ] 17
[ 'x-forwarded-proto', 'http' ] 18
[ 'x-forwarded-for', '::1' ] 19
	*/
}`;

  const text1 = `Good to know
headers is an asynchronous function that returns a promise. You must use async/await or React's use function.
In version 14 and earlier, headers was a synchronous function. To help with backwards compatibility, you can still access it synchronously in Next.js 15, but this behavior will be deprecated in the future.
Since headers is read-only, you cannot set or delete the outgoing request headers.
headers is a Dynamic API whose returned values cannot be known ahead of time. Using it in will opt a route into dynamic rendering.`;

const ref = useRef(null)

  return (
    <main>
      <Typography variant='h6' component="div" sx={{marginBottom: '2rem'}}>
        headers() and cookies()
      </Typography>
			<form
        ref={ref}
        action={ async () => {
          ref.current?.reset()
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
			<CodeBlock text={text0} />
      <CodeBlock text={text1} />    
    </main>
  )
}

export default Page