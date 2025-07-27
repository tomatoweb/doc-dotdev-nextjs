'use client';

import CodeBlock from '@/app/components/CodeBlock';
import { Link, Typography } from '@mui/material';

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
            <Typography variant="h6" component="div" sx={{ mb: 2 }}>
                ✨ Lucide React Icons
            </Typography>
            <Link href={"https://lucide.dev/icons/"} sx={{color: 'link.main'}}>https://lucide.dev/icons/</Link>
            <CodeBlock text={text} />
            
            <Typography variant="h6" component="div" sx={{ mb: 2 }}>
                ✨ Material UI Icons
            </Typography>
            <Link href={"https://mui.com/material-ui/material-icons/"} sx={{color: 'link.main'}}>https://mui.com/material-ui/material-icons/</Link>
            <CodeBlock text={text2} />
            <Typography variant="h6" component="div" sx={{ mb: 2 }}>
                ✨ Geist Icons
            </Typography>
            <Link href={"https://geist-ui.dev/en-us/components/icons"} sx={{color: 'link.main'}}>https://geist-ui.dev/en-us/components/icons</Link>
            <CodeBlock text={text3} />

            <Typography variant="h6" component="div" sx={{ mb: 2 }}>
                ✨ Demo
            </Typography>
            <Link href={"/mui/demo"} sx={{color: 'link.main'}} target="_blank">/mui/demo</Link>
            <footer className="mb-20"></footer>
        </main>
    )
}

export default PostsWithPrisma