import CodeBlock from "@/app/components/CodeBlock";
import { Typography } from "@mui/material";
import Link from "next/link";

const page = () => {

  const text0 = `'use client'

import { styled  } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const ListButton = styled(ListItemButton)(({ theme }) => ({
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
    "&:hover": {color: theme.palette.tahiti.main, backgroundColor: 'transparent'},
    "&.Mui-selected": {color: theme.palette.link.main, backgroundColor: 'transparent', "&:hover": {color: theme.palette.text.primary, backgroundColor: 'transparent'}}
  }));
  
const page = () => {

  return (    
    <nav className='overflow-x-auto text-sm'>      
      <Typography 
        variant="h5" 
        sx={{ color: 'primary.dark', fontWeight: 600, marginBottom:4 }}
      >
        Some text here.
      </Typography>
      <Typography variant="h5" sx={{color: 'tahiti.main', fontWeight: 600, marginBottom:4}}>styled and sx</Typography>
      <ListButton
        disableRipple
        component="a"
        key={item.text}
        dense
        selected={selectedIndex === item.route}
        onClick={() => {
          setSelectedIndex(item.route);
          router.push(item.route)
        }}
        sx={[{pl: 4,}, { justifyContent: 'initial' }]}
      >
        <ListItemText primary={item.text} />
      </ListButton>
      <pre>
        {text}
      </pre>
    </nav>   
  )
}`;

  const text = 
  `Avec styled() et sx={{}} on peut utiliser le MUI theme sans devoir l'importer  
  (e.g. const theme = useTheme())

Par exemple ici, primary.dark vient du default theme, qu'on peut consulter ici:

https://mui.com/material-ui/customization/default-theme/


Par contre 'tahiti.main' vient du MUI theme qu'on a redéfini dans src/theme.ts:

const theme = createTheme({
  palette: {
    mode: 'dark',
    tahiti: {main: "#42f5b3"},
    link: { main: "#52a8ff" },  
    background: {
      default: '#000'
    }
  },
  
  ATTENTION: 
  pour rajouter des properties au theme (e.g. link et tahiti)
  il faut les déclarer au dessus:
  sinon on a une erreur du "type checker"
  `;

  const text4 = `import { createTheme, PaletteColor, SimplePaletteColorOptions } from '@mui/material/styles';
declare module "@mui/material/styles" {
  interface Palette {
    link: PaletteColor;
  }

  interface PaletteOptions {
    link: SimplePaletteColorOptions;
    tahiti: SimplePaletteColorOptions;
  }
}`;

  return (
    
      <nav className='overflow-x-auto text-sm'>
        <Typography variant="h4" sx={{fontWeight: 600, marginBottom:4}}>MUI Material Components library</Typography>
        <Typography variant="h5" sx={{color: 'link.main', fontWeight: 600, marginBottom:4}}>styled and sx</Typography>
        <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4, color: 'error.light'}}>
          Important: styled needs use client
        </Typography>
        <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4, color: 'primary.dark'}}>
          rem : How to install MUI click here:
        </Typography>
          <Link href="/nextjs/scratch" className="text-tahiti">
            🚀 Tailwind+MUI Nextjs from scratch
          </Link>
        <CodeBlock text={text0}/>
        <pre className="text-wrap">
          {text}
        </pre>
        <CodeBlock text={text4}/>
      </nav>
   
  )
}

export default page