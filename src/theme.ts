'use client';
import { grey, yellow } from '@mui/material/colors';
	import { createTheme } from '@mui/material/styles';
	const theme = createTheme({
	  palette: {
	    mode: 'dark',
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
      link: "#52a8ff",      
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