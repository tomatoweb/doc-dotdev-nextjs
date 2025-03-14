'use client';
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
    link: { main: "#52a8ff" },  
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
    caption12r: {
      color: "red"
    }
  },
});
export default theme;