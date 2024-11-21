import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CodeBlock from '../components/CodeBlock';

export default function BasicCard() {

  const text7 = 
`<Typography variant="h5" component="div">
  🖐🏻 ✨ ✔ 👋
</Typography>
<Typography variant="h4" component="div">
  💓 🚀
</Typography>`;

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>        
          <Typography variant="h5" component="div" sx={{mb:2}}>
            🖐🏻 ✨ ✔ 👋
          </Typography>
          <Typography variant="h4" component="div" sx={{mb:6}}>
            💓 🚀
          </Typography>
          <Typography variant="h5">
          {'\u229E'} Windows key + ;
          </Typography>
          <Typography variant="p">
          
          </Typography>
        </CardContent>
      </Card>
      <CodeBlock text={text7} />
    </>
  );
}
