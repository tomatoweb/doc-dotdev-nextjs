'use client'
import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { Link, Typography } from '@mui/material';
import { setCookie } from '@/actions/actions';
import { toast } from 'sonner'  // npm install sonner

const Page = () => {

const text00 = `// SET cookie with a server action
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
headers is an asynchronous function that returns a promise. 
You must use async/await or React's use function.
In version 14 and earlier, headers was a synchronous function. To help with backwards compatibility, you can still access it synchronously in Next.js 15, but this behavior will be deprecated in the future.
Since headers is read-only, you cannot set or delete the outgoing request headers.
headers is a Dynamic API whose returned values cannot be known ahead of time. Using it in will opt a route into dynamic rendering.`;
  
const text20 = `// (in app.dotdev.be)   
// src/utils/serverHelpers.js 
import 'server-only'
import { headers, cookies } from 'next/headers'

export const getSettingsFromCookie = async () => {
	
	const cookieStore = cookies()

	return cookieStore.get('colorPref')?.value || "light"
}`;
const text21 = `// (in app.dotdev.be)   
// src/app/(main-layout-pages)/layout.js 
import { getUserAcceptCookie } from '@/utils/serverHelpers'

const cookies = await getUserAcceptCookie()

return (
    <html lang="en">
      <body className={roboto.className}>

        <CookiesBar cookies={cookies} />
				
        <div className="2xl:py-10 pt-9 ease-in duration-300">
          <div className="px-4 m-auto xl:max-w-[1240px] 2xl:max-w-[1320px]">
            <Navbar />
            <Ipinfo />
          </div>
        </div>
        <div className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-16 xl:px-16 2xl:px-80 bg-transparent overflow-hidden">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}`;
const text23 = `// (in app.dotdev.be)   
// src/app/components/CookieBar.tsx 
'use client'

const CookiesBar = (props : any) => {

	const { cookies } = props
	const [cookiesShow, setCookiesShow] = useState(!cookies);
	
	{/* Cookies Bar */}			
      <div className={{ cookiesShow ? bottom-20 : -bottom-[19rem]}`;
	

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
			<Typography variant='body1' component="div" sx={{marginBottom: '1rem'}}>
        GET the cookie should have a different implementation, for the reasons that you can read in the documentation links above.
      </Typography>
			<Typography variant='body1' component="div" sx={{marginBottom: '1rem'}}>
				{`I create a serverHelper (server-only), import it's getUserAcceptCookie() in Layout (server component).`}
      </Typography>
			<Typography variant='body1' component="div" sx={{marginBottom: '1rem'}}>
				Because cookies() (in serverHelper) is async, layout must also be async and await.
      </Typography>
			<Typography variant='body1' component="div" sx={{marginBottom: '1rem'}}>
				And pass it to the client component (cookieBar) that needs the cookie value as props
      </Typography>
      <CodeBlock text={text20} />    
      <CodeBlock text={text21} />  
      <CodeBlock text={text23} className="mb-10" />    
    </main>
  )
}

export default Page