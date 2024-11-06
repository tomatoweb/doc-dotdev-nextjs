import CodeBlock from '@/app/components/CodeBlock';
import { Card, Typography } from '@mui/material'
import React from 'react'

const page = () => {
  const text = 
  `'use client';	
import { createTheme } from '@mui/material/styles';
import { grey, yellow } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    mode: 'dark',
  primary: {
    main: '#7367F0',
    dark: yellow[900]
  },
  myColor: {
    main: "#95bd31",
    contrastText: "#e33279"
  },
  grey: {
    main: grey[300],
    light: grey[100],
    dark: grey[500],
    contrastText: "#000"
  },
    background: {
      default: '#000'
    }
  },
  typography: {
    fontFamily: "geistSans",
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
`<Button variant="contained" color="grey" size='small' sx={{textTransform: 'none'}}>
	Login
</Button>

<Link href={"/scratch/next"} sx={{color: 'link'}}> /scratch/next</Link>

<Box sx={{color: 'myColor.main'}}>
    Read our docs
</Box>;

const ListButton = styled(ListItemButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: 'transparent',
  "&:hover": {color: theme.palette.text.primary, backgroundColor: 'transparent'},
  "&.Mui-selected": {
      color: theme.palette.link, backgroundColor: 'transparent', 
      "&:hover": {backgroundColor: 'transparent'},
  }
}));
`;
  return (    
    <div>
      <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4}}>Customize colors MUI Theme</Typography>
      src/theme.ts
      <CodeBlock text={text} />
      usage :
      <CodeBlock text={text2} />
    </div>   
  )
}

export default page