'use client'
import { Typography } from '@mui/material';
import CodeBlock from '@/app/components/CodeBlock'
import { useEffect, useState } from "react"

const Page = () => {
  const [duration, setDuration] = useState(5)
  const [countdown, setCountdown] = useState(duration)
  
  const text = `'use client'

import { useEffect, useState } from "react"


const MyUseEffect = () => {

    const [duration, setDuration] = useState(5)
    const [countdown, setCountdown] = useState(duration)

    console.log("render")

    const handleChange = (v) => {
      setDuration(v)
      setCountdown(v)
    }

    useEffect(() => {


      const timer = setInterval(() => {
        setCountdown(c => c - 1)
      }, 1000)

      return () => {
        clearInterval(timer)
      } 

    }, [duration])

    return (
      <main className="flex flex-col p-4 bg-gray-900">    
       {countdown}
        <input 
          type="number"
          value={duration}
          onChange={e => handleChange(e.target.value)} 
          className="m-4 bg-gray-800"
        />
      </main>
    )
}

export default MyUseEffect`;


console.log("render")

const handleChange = (v) => {
  setDuration(v)
  setCountdown(v)
}

useEffect(() => {


  const timer = setInterval(() => {
    setCountdown(c => c - 1)
  }, 1000)

  return () => {
    clearInterval(timer)
  } 

}, [duration])

  return (
    <main>
      <Typography variant='h5'>
        setInterval()
      </Typography>
      <div className="flex flex-col p-4 bg-gray-900">
        {countdown}
          <input 
            type="number"
            value={duration}
            onChange={e => handleChange(e.target.value)} 
            className="m-4 bg-gray-800"
          />
      </div>
      <CodeBlock text={text}/>
    </main>
  )
}

export default Page