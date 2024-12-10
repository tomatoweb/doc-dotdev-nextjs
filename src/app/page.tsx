import { Box, Container, Typography } from "@mui/material";
	export default function Test() {
	  return (
	    <Container>
	      <Box my={4}>
        <Box className="flex flex-col justify-center items-center mb-10">

            <Typography variant="h4" sx={{fontFamily: 'papyrus'}} className="text-xl " gutterBottom>
              Welcome to Dotdev documentation!
            </Typography>
            <Typography variant="h5" sx={{fontFamily: 'dynapuff', marginTop: '5rem'}} className="text-tahiti">
              Find here the how-to documentation you need for all technos used by Dotdev development!
            </Typography>
          </Box>
	      </Box>
	    </Container>
	  );
	}