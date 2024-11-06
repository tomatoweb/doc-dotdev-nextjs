import { Typography } from "@mui/material";

const page = () => {
  const text = 
  `dans le sx={{}} on peut utiliser le theme directement :

sx={[{
	pl: 4,
	color: 'text.primary',
	"&:hover": {color: 'text.primary', backgroundColor: 'transparent'},
	"&.Mui-selected": {color: 'primary.dark', backgroundColor: 'transparent', "&:hover": {color: 'text.primary', backgroundColor: 'transparent'}}
	},
	open ? { justifyContent: 'initial' } : { justifyContent: 'center' }
]}


'text.primary' est celui du theme, par défaut ou bien redéfini comme ceci :

palette: { 
	text: {
		primary: "#42f5b3",
	},
}


Par contre dans le styled() on doit importer ce theme

const ListButton = styled(ListItemButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: 'transparent',
  "&:hover": {color: theme.palette.text.primary, backgroundColor: 'transparent'},
  "&.Mui-selected": {color: theme.palette.link, backgroundColor: 'transparent', "&:hover": {color: theme.palette.text.primary, backgroundColor: 'transparent'}}
}));
`;
  return (
    
      <nav className='overflow-x-auto text-sm'>
        <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4}}>sx versus styled</Typography>
        <pre>
          {text}
        </pre>
      </nav>
   
  )
}

export default page