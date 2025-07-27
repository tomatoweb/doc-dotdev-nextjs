"use client";

import { Avatar, Button, Chip, createTheme, Slider } from "@mui/material";
import AppleIcon from '@mui/icons-material/Apple';
import { deepOrange } from "@mui/material/colors";
import { Bone } from 'lucide-react';

const page = () => {

  const theme = createTheme({
    palette: {
      primary: deepOrange,
    }
  });

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Slider
        sx={{ color: "secondary.main" }}
      />
      <Slider
        sx={{ color: deepOrange[600] }}
      />
      <div className="flex flex-col items-start gap-4 mt-4">
        <Chip label="Chip Filled" color="primary" />
        <Chip label="Chip Outlined" variant="outlined" />
        <Chip
          label="Deletable"
          variant="outlined"
          onclick={() => { }}
          onDelete={() => { }}
        />
        <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
        <Button color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="primary">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <div className="my-2">
          <AppleIcon htmlColor="#c283c9" />
          <AppleIcon sx={{ color: 'tahiti.main' }} />
          <AppleIcon sx={{ color: 'banana.main' }} />
          <AppleIcon color="primary" />
          <AppleIcon color="secondary" />
          <AppleIcon color="warning" />
          <AppleIcon color="success" />
          <Bone style={{display: 'inline-block'}} size={40} color="#fcba03" />
          <Bone className="inline-block" size={24} color="#fc0356" />          
        </div>
      </div>
      {/* </ThemeProvider> */}
    </>
  )
}

export default page;