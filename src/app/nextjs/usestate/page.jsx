'use client'
import CodeBlock from '@/app/components/CodeBlock';
import React from 'react'
import { useState } from 'react';

const text = `'use client'
import { useState } from "react";
	export default function Home() {

    const [a, setA] = useState(1) // Integer

    const [person, setPerson] = useState({ // Object
      firsName: 'John',
      age: 30
    })    

    const incrementInt = () => {
      setA(prev => prev + 1)
    }
    
    const incrementObj = () => {
      setPerson({
        ...person,
         age: person.age + 1
      })
    }
    
	  return (
	    <main>	      
        <div onClick={incrementInt}>{a}</div>
        <div onClick={incrementObj}>{person.firsName} : {person.age}</div>
	    </main>
	  );
	}`;

const MyUseState = () => {

  const [a, setA] = useState(1) // Integer

  const [person, setPerson] = useState({ // Object
    firsName: 'John',
    age: 30
  })    

  const incrementInt = () => {
    setA(prev => prev + 1)
  }
  
  const incrementObj = () => {
    setPerson({
      ...person,
       age: person.age + 1
    })
  }
  
  return (
    <main>	      
      <div onClick={incrementInt}>{a}</div>
      <div onClick={incrementObj}>{person.firsName} : {person.age}</div>

      <CodeBlock text={text} />
    </main>
  );
}

export default MyUseState