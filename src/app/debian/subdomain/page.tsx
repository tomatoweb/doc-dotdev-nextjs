import { Card } from '@mui/material'
import React from 'react'

const page = () => {
  const text = 
  `Pour ajouter un sous-domaine à dotdev.be sur vps683375.ovh.net :
--------------------------------------------------------------
go to
https://www.ovh.com/manager/web/index.html#/configuration/domain/dotdev.be/zone
click add an entry
champ de pointage: A
cible: 51.***.**.196
`;
  return (
    <nav className='overflow-x-auto text-sm'>
        <pre>
          {text}
        </pre>
      </nav>
  )
}

export default page