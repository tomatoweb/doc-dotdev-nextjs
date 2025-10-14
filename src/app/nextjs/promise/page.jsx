import CodeBlock from "@/app/components/CodeBlock";
import ImageModal from "@/app/components/ImageModal";
import { Typography } from '@mui/material';

const Page = () => {

	const text1 = `const axiosRequest = require('axios')

let response = axiosRequest.get('https://www.boredapi.com/api/activity')
console.log('You could $\{Response.data.activity\}')`;
	const text1b = `
const giveMeSomeActivity = function() {
	return new Promise( (resolve, reject) => {
		activityApi.give( (error, activity) => {
			if (error) {
				reject(error)
			}
			else {
				resolve...
			}
		})		
	}
}`;
	const text2 = `const axiosRequest = require('axios')

	axiosRequest.get('https://www.boredapi.com/api/activity')
	// .get('https://httpstat.us/404') // simulate an error to catch
	.then(response => {
		console.log('You could $\{Response.data.activity\}')
		})
	.catch(error => {
		console.error('ERROR! $\{error})
		})	

console.log('Why am I here?') // this will output first, also if an error is catched
		`;
	const text3 = `const axiosRequest = require('axios')

async function getActivity() {
	let response = await axiosRequest.get('https://bored-api.appbrewery.com/random')
	let anotherResponse = await axiosRequest.get('https://bored-api.appbrewery.com/random')
	console.log('You could $\{response.data.activity\}')
	console.log('You could $\{anotherResponse.data.activity\}')
}


getActivity()`;
	const text4 = `const axiosRequest = require('axios')

async function getActivityError() {
	try {
		let response = await axiosRequest.get('https://httpstat.us/404')
		console.log('You could $\{response.data.activity\}')
	} catch (error) {
		console.error('ERROR: $\{error\})
		
		return; // break the function completion, the very last console.log in this function will not output
	} finally {
		console.log('finally!') // this will output anyway
}

	console.log('after try catch block.....') // will not dispay because of the 'return'

}


getActivityError()`;

	return (
		<main>
			<Typography variant="h5" component="div" sx={{mb:2}}>
      ✨ A long running task ( fetch DB or API or a file ) will usually not return an immediate result
      		</Typography>
			<Typography variant="body1" component="div" sx={{mb:2}}>
	   It would rather be implemented by returning a PROMISE
      		</Typography>
			<Typography variant="body1" component="div" sx={{mb:2}}>
	   A PROMISE is a special typed Object that represent the eventual completion or failure of an asynchrone operation
	   and its resulting value. here an example
      		</Typography>
			<CodeBlock text={text1b}/>
			<Typography variant="body1" component="div" sx={{mb:2}}>
      	{`Let's make a call to an API that returns a PROMISE`}
			</Typography>
			<Typography variant="body1" component="div" sx={{mb:2}}>
		{`( Feel free to test it yourself with 'node tests/test-promise.js' in a cli on server root project )`}
			</Typography>
			<CodeBlock text={text1}/>
			<Typography variant="body1" component="div" sx={{mb:2}}>
      	{`This will output an error 'cannot read property "activity" of undefined' as the request is not finish yet.`}
			</Typography>
			<Typography variant="body1" component="div" sx={{mb:2}}>
      	To have access to the result of the request and run code when it returns we have to wait for the result
		with promise.then or catch any error with promise.catch
			</Typography>
			<CodeBlock text={text2}/>
			<Typography variant="body1" component="div" sx={{mb:2}}>
      	{`As you see, the code after the get-then-catch 'why am i here' is executed first.`}
			</Typography>
			<Typography variant="body1" component="div" sx={{mb:2}}>
      	But what if we need to wait for the response and then make a call to another API. This will complicate the code 
		by imbricate a new get-then-catch in our first get-then-catch... 
			</Typography>
			<Typography variant="body1" component="div" sx={{mb:2}}>
      	This is where the operator AWAIT is coming, to wait for a Promise.
		It can only be used inside an ASYNC function
			</Typography>
			<CodeBlock text={text3}/>
			<Typography variant="body1" component="div" sx={{mb:2}}>
      	It woks fine... but we do not have access to the catch error.
		So lets wrap it in a try-catch
			</Typography>
			<CodeBlock text={text4}/>






			<ImageModal	img={"/wait-then0.png"}/>
			<ImageModal	img={"/wait-then.png"}/>
			<ImageModal	img={"/promise-callback1.png"}/>
			<ImageModal	img={"/promise-callback2.png"}/>
		</main>
	)
}

export default Page