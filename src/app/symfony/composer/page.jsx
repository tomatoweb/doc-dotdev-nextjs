'use client'
import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { Typography } from '@mui/material';
import Image from 'next/image';
import ImageModal from '@/app/components/ImageModal';

const text = `composer install

    Composer va regarder si un fichier composer.lock existe.
    S'il existe, Composer va télécharger et installer les librairies
    avec la version spécifiée dans le fichier composer.lock
    S'il n'existe pas Composer va appeler "composer update"

composer update

    Composer va regarder le contenu du fichier composer.json
    Composer va télécharger et installer les versions les plus récentes
    des librairies
    en respectant les versions précisées dans composer.json
    Pour finir, Composer va mettre à jour le fichier composer.lock
    avec les numéros de versions qui viennent d'être installées.


Conclusion

Le fichier composer.lock est très important
Il transcrit précisément toutes les versions 
des librairies installées.
Si on utilise un VCS comme GIT, ce fichier doit être suivi (commité)
pour que toute l'équipe utilise les mêmes versions 
et ainsi avoir un workflow homogène.

Attention : Il ne faut jamais faire de "composer update" 
sur le server de production, seulement en développement.
En effet, comme la commande va chercher les dernières versions des librairies
on aura un décallage avec la version en développement.`;

const page = () => {

  return (
    <main>
      <Typography variant='h6' component="div">
      🚀  COMPOSER 
      </Typography>
      <CodeBlock text={text}/>
      <Typography variant='body1' component="div">
      Use composer 'why' to check 2nd level dependencies
      </Typography>
			<ImageModal img={"/composer-why.png"} />
			<ImageModal img={"/composer.jpg"} />
      
    </main>
  )
}

export default page