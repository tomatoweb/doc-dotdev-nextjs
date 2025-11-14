'use client';

import CodeBlock from '@/app/components/CodeBlock';
import { Link, Typography } from '@mui/material';
import Image from 'next/image';
import { RxRocket } from "react-icons/rx";

const PostsWithPrisma = () => {

	const text = `npm i lucide-react


import { Bone } from 'lucide-react';

const App = () => {
  return (
    <Bone size={24} color="red" />
  );
};

export default App;
    `;
	const text2 = `npm install @mui/icons-material @mui/material @emotion/styled @emotion/react


import AppleIcon from '@mui/icons-material/Apple';

const App = () => {
  return (
    <AppleIcon sx={{ color: 'tahiti.main' }} />
  );
};

export default App;
    `;
	const text3 = `npm install geist-icons


import { ChevronDown, ChevronRight } from '@geist-ui/icons';

const App = () => {
  return (
    <ListItemButton component="a" onClick={() => { setLaravelListOpen(!laravelListOpen) }} disableRipple dense>
     <ListItemText primary={\`\${laravelListTitle.text}\`} /> {laravelListOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
    </ListItemButton>
  );
};

export default App;
    `;

	return (
		<main>
			<Typography variant="h6" sx={{ fontWeight: '600' }} mb={2}>
				<div className="flex">
					<Image src="/react.svg" width={25} height={0} className="mr-4" alt="React logo" />
					React icons
				</div>
			</Typography>
			<Typography>
				First install React Icons
			</Typography>
			<CodeBlock text={`npm install react-icons --save`} />
			<Typography>
				Here is the full list
			</Typography>
			<Link href="https://react-icons.github.io/react-icons/" target="_blank">
				https://react-icons.github.io/react-icons/
			</Link>
			<Typography sx={{marginTop: 4, fontSize: 20}}>
				Example
			</Typography>
			<RxRocket size={"4rem"} color={"#7367F2"} className='my-4'/>
			<CodeBlock text={`import { RxRocket } from "react-icons/rx";
				
<RxRocket size={"4rem"} color={"#7367F2"} className='my-4' />`} />
			<Typography sx={{marginTop: 8, fontSize: 20}}>
				Other ways
			</Typography>
			<Typography variant="h6" component="div" sx={{ mb: 2, mt: 2 }}>
				✨ Lucide React Icons
			</Typography>
			<Link href={"https://lucide.dev/icons/"} sx={{ color: 'link.main' }}>https://lucide.dev/icons/</Link>
			<CodeBlock text={text} />

			<Typography variant="h6" component="div" sx={{ mb: 2, mt: 6 }}>
				✨ Material UI Icons
			</Typography>
			<Link href={"https://mui.com/material-ui/material-icons/"} sx={{ color: 'link.main' }}>https://mui.com/material-ui/material-icons/</Link>
			<CodeBlock text={text2} />
			<Typography variant="h6" component="div" sx={{ mb: 2, mt: 6 }}>
				✨ Geist Icons
			</Typography>
			<Link href={"https://geist-ui.dev/en-us/components/icons"} sx={{ color: 'link.main' }}>https://geist-ui.dev/en-us/components/icons</Link>
			<CodeBlock text={text3} />

			<Typography variant="h6" component="div" sx={{ mb: 2, mt: 6 }}>
				✨ Demo
			</Typography>
			<Link href={"/mui/demo"} sx={{ color: 'link.main' }} target="_blank">/mui/demo</Link>
			<footer className="mb-20"></footer>
		</main>
	)
}

export default PostsWithPrisma