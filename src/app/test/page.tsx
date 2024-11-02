import { Box, Container, Typography } from "@mui/material";

	export default function Test() {
	  return (
	    <Container>
	      <Box my={4}>
	        <Typography variant="h1" gutterBottom>
	          Welcome to My Next.js App
	        </Typography>
	        <Typography variant="h2" gutterBottom>
	          Enjoy this moment!
	        </Typography>
	        <Typography variant="h3" className="text-tahiti" >
	          This is the default mui font geistSans and a customized h3 configured in theme.ts 
            and a tailwind custom color className text-tahiti configured in tailwind.config.ts
	        </Typography>
	        <Typography variant="h5" sx={{fontFamily: 'dynapuff'}}>
          this is a tailwind custom font sx= fontFamily:dynapuff configured in tailwind.config.ts
	        </Typography>
          <div className="font-nothing">
            this is a tailwind custom font -nothingYouCanDo- configured in tailwind.config.ts
          </div>
          <div>
            this is the MUI default font geistSans configured in theme.ts
          </div>
          <div className="font-dynapuff">
          this is a tailwind custom font className font-dynapuff configured in tailwind.config.ts
          </div>
	      </Box>
	    </Container>
	  );
	}