'use client'
import CodeBlock from '@/app/components/CodeBlock'
import ImageModal from "@/app/components/ImageModal";
import { Typography } from '@mui/material';

const Page = () => {

	return (
		<main>
			<CodeBlock text={`symfony console debug:dotenv`} />
			<ImageModal img={"/env.png"} />
			<Typography variant='body2' component="div" sx={{ marginY: 2 }}>
				{`Les fichiers .env et .env.<environment> doivent être commit dans le repo,
 car ils sont identiques pour tous les développeurs et toutes les machines.`}
			</Typography>
			<Typography variant='body2' component="div" sx={{ marginY: 2 }}>
				{`En revanche, les fichiers d'environnement se terminant par .local ( .env.local et .env.<environment>.local) 
 ne doivent pas être commit, car vous seul les utiliserez.`}
			</Typography>
			<Typography variant='body2' component="div" sx={{ marginY: 2 }}>
				{`En effet, le .gitignore fourni avec Symfony empêche leur validation :`}
			</Typography>
			<Typography variant='body2' component="div" sx={{ marginY: 2 }}>
				{`/.env`}
			</Typography>
			<Typography variant='body2' component="div" sx={{ marginY: 2 }}>
				{`/.env.local`}
			</Typography>
			<Typography variant='body2' component="div" sx={{ marginY: 2 }}>
				{`/.env.local.php`}
			</Typography>
			<Typography variant='body2' component="div" sx={{ marginY: 2 }}>
				{`/.env.*.local`}
			</Typography>
			<Typography variant='h6' component="div" sx={{ marginY: 2 }}>
				{`Configuration des variables d'environnement en production`}
			</Typography>
			<Typography variant='body2' component="div" sx={{ marginY: 2 }}>
				{`En production, les .env sont également analysés et chargés à chaque requête.
				 Le moyen le plus simple de définir des variables d'environnement est donc de 
				 créer un .env.local contenant vos valeurs de production sur votre ou vos serveurs de production.`}
			</Typography>
			<Typography variant='body2' component="div" sx={{ marginY: 2 }}>
				{`Pour améliorer les performances, vous pouvez éventuellement exécuter la dump-envcommande Composer :`}
			</Typography>
			<CodeBlock text={`# parses ALL .env files and dumps their final values to .env.local.php
		$ composer dump-env prod`} />
		<Typography variant='body2' component="div" sx={{ marginY: 2 }}>
			{``}
		</Typography>
		</main>
	)
}

export default Page