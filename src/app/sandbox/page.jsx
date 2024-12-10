'use client'

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

export default MyUseEffect