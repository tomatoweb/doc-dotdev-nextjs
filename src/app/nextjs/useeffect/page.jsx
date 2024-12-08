import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { Typography } from '@mui/material';
import Image from 'next/image';

const page = () => {

  const text0 = `
Qu'est ce qu'un effet de bord ?

Voici un component avec 2 input :
  `;

  const text1 = `
On voit dans la console du browser que quand la value de l'input title change il y a un rendering.
En effet, comme la variable title est "contrôlée" par le useState, 
si sa valeur change tout le code du component est ré-executé:
non seulement le code "document.title = title", 
mais aussi le code "return <main>...</main>".
et c'est très bien puique c'est ce qu'on veut : 
on veut que le titre du document html (DOM) change quand le user tape dans l'input title.
Par contre, si le user modifie l'input firstName, 
il y a aussi un rendering, dans ce cas-ci le rendering ne sert à rien,
car pour ce component le firstName ne fait pas partie de la vue,
(je l'ai mis dans un div en fin de page pour éviter la lint error variable never used)
il peut être envoyé quelque part, mais pas dans la vue :
c'est donc un effet de bord.
On ne veut que le code "document.title = title" ne s'exécute 
que si le valeur de la variable title change.


Pour que le code document.title = title ne s'exécute que si la variable title change
on met ce code dans la callback d'un useEffect, 
et on ajoute la variable title dans le array des dépendances du useEffect.
Ainsi, il n'y aura pas de rendering lorsque la variable firstName est updatée.`;

  const text2 = `'use client'

import { useState } from "react"


const MyComponent = () => {

    const [title, setTitle] = useState("")
    const [firstName, setFirstName] = useState("")

    document.title = title
    console.log('rendering...')

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
      </main>
    )
}

export default MyComponent`;

  const text3 = `'use client'

import { useEffect, useState } from "react"


const MyUseEffect = () => {

    const [title, setTitle] = useState("")
    const [firstName, setFirstName] = useState("")

    useEffect(() => {
      document.title = title
      console.log('rendering...')
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
      </main>
    )
}

export default MyUseEffect`;

  return (
    <main>
      <Typography variant='h6' component="div">
        useEffect - avoid side effect - éviter les effets de bord 
      </Typography>
      <pre>{text0}</pre>
      <CodeBlock text={text2}/>
      <Image 
        className="rounded-lg" 
        src="/useEffect.png" 
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }} alt=""
      />
      <pre className='text-wrap'>{text1}</pre>
      <CodeBlock text={text3}/>
      <pre>{"c'est un exemple de side effect: directly updating the DOM,"}</pre>
      <pre>{"Some other examples are fetching data, and timers.\n\n"}</pre>
      
    </main>
  )
}

export default page