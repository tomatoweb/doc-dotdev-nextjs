'use client';

import CodeBlock from '@/app/components/CodeBlock';
import { Link, Typography } from '@mui/material';

const Page = () => {

	const text = `2 méthodes :

- Offline :

	on génère le css des icônes dans un bundle (dans le build) (src/assets/iconify-icons/generated-icons.css) nous-mêmes avec Node et on les bundle à l'avance,
	donc pas de call to third party, c'est la solution que j'ai choisie (app dashboard)

1. npm install --save-dev @iconify/utils @iconify/json @iconify/tools

2. recopier le fichier src/assets/iconify-icons/bundle-icons-css.js (du projet original vuexy), c'est ce fichier qui crée le bundle d'icônes

3. ajouter le set d'icons désiré. par exemple: require.resolve('@iconify/json/json/tabler.json')

4. ajouter le script "build:icons": "tsx src/assets/iconify-icons/bundle-icons-css.js" dans la liste des scripts dans le package.json

5. installer tsx l'exec de ts:  "pnpm i tsx" pour pouvoir exécuter le script typescript ci-dessus

6. lancer ce script pnpm build:icons, cela va créer le fichier css des icones générés -> src/assets/iconify-icons/generated-icons.css

7. dans le component ancêtre RootLayout ( src/app/layout.jsx parent le plus haut), ajouter import '@/assets/iconify-icons/generated-icons.css'

8. dans n'importe quel component enfant:

	<i className='tabler-michelin-bib-gourmand text-[40] text-violet-600 mx-2'/>


- Online : on va chercher les icônes par API, https://iconify.design/docs/icon-components/react/), c'est rapide mais pas instantané,
				contrairement à la 1ère méthode, où les icônes sont déjà dans le build bundle.


liste des icônes : https://icon-sets.iconify.design/
    `;

	return (
		<main>
			<Typography variant="h6" component="div" sx={{ mb: 2 }}>
				✨ Iconify
			</Typography>
			<i className='tabler-settings text-[22px]' />
			<Typography variant="body1" component="div" sx={{ mb: 2 }}>
				This package has been deprecated. Author message: no longer maintained, switch to modern iconify-icon web component
			</Typography>
			<Typography variant="body1" component="div" sx={{ mb: 2 }}>
				for example:
			</Typography>
			<Link href={"https://www.npmjs.com/package/@tabler/icons"} sx={{ color: 'link.main' }}>https://www.npmjs.com/package/@tabler/icons</Link>
			<CodeBlock text={text} lang='html' />
			<Link href={"https://icon-sets.iconify.design/"} sx={{ color: 'link.main' }}>https://icon-sets.iconify.design/</Link>
			<footer className="mb-20"></footer>
		</main>
	)
}

export default Page