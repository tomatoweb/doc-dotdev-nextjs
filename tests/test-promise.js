// This file is for Node tests on server side
// type 'node tests/test-promise.js' in CLI at root of this project

console.log(obj?.prop)

return // die

const axiosRequest = require('axios')

console.log('======== test 1 ============')

axiosRequest
    .get('https://bored-api.appbrewery.com/random')
    // .get('https://httpstat.us/404') // simulate an error to catch
    .then(response => {
        console.log(`You could ${response.data.activity}`)
        console.log('======== test 2 ============')
    })
    .catch(error => {
        console.error(`ERROR! ${error}`)
    })
    
    console.log('Why am I here?') // this will output first, also if an error is catched
 
    
    
    async function getActivity() {
        let response = await axiosRequest.get('https://bored-api.appbrewery.com/random')
		let anotherResponse = await axiosRequest.get('https://bored-api.appbrewery.com/random')
		console.log(`You could ${response.data.activity}`)
		console.log(`You could ${anotherResponse.data.activity}`)
        console.log('======== test 3 ============')
	}
    
    getActivity()



async function getActivityError() {
        try {
			let response = await axiosRequest.get('https://httpstat.us/404')
			console.log(`You could ${response.data.activity}`)
		} catch (error) {
		 	console.error(`ERROR: ${error}`)
            
            return; // break the function completion, the very last console.log in this function will not output

		} finally {
            console.log('finally!') // this will output anyway
        }

        console.log('after try catch block.....')
	}
    
    getActivityError()