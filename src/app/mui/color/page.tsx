import CodeBlock from '@/app/components/CodeBlock';
import { Typography } from '@mui/material'
import React from 'react'

const page = () => {
  const text = 
  `'use client';
import { createTheme, PaletteColor, SimplePaletteColorOptions } from '@mui/material/styles';
declare module "@mui/material/styles" {
  interface Palette {
    link: PaletteColor;
  }

  interface PaletteOptions {
    link: SimplePaletteColorOptions;
    tahiti: SimplePaletteColorOptions;
  }
}
const theme = createTheme({
  palette: {
    mode: 'dark',
    tahiti: {main: "#42f5b3"},
    link: { main: "#00ff00" },  
    background: {
      default: '#000'
    }
  },
  typography: {
    fontFamily: "geistSans",
    fontWeightRegular: 400,
    h1: {
      fontFamily: 'Papyrus',
      fontWeight: 500,
      fontSize: '5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "Brush Script MT",
      fontWeight: 300,
      fontSize: '5rem',
      lineHeight: 1.2,
    },
  },
});
export default theme;
`;
const text2 = 
`<Link href={"/scratch/next"} sx={{color: 'link.main'}}> /scratch/next</Link>

<Box sx={{color: 'link.main'}}>
    Read our docs
</Box>;

const ListButton = styled(ListItemButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: 'transparent',
  "&:hover": {color: theme.palette.text.primary, backgroundColor: 'transparent'},
  "&.Mui-selected": {
      color: theme.palette.link.main, backgroundColor: 'transparent', 
      "&:hover": {backgroundColor: 'transparent'},
  }
}));
`;
  return (    
    <div>
      <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4}}>Customize colors MUI Theme</Typography>
      <Typography variant="h6" sx={{fontWeight: 600, marginBottom:4}}>
        {`Pour ajouter une custom color (e.g tahiti, link ) il faut l'ajouter dans interface PaletteOptions
        comme ci-dessous :`}
      </Typography>
      src/theme.ts
      <CodeBlock text={text} />
      usage :
      <CodeBlock text={text2} />
    </div>   
  )
}

export default page