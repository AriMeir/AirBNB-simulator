import Fade from '@mui/material/Fade';
import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';

const icon = (
    <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
      <svg>
        <Box
          component="polygon"
          points="0,100 50,00, 100,100"
          sx={{
            fill: (theme) => theme.palette.common.white,
            stroke: (theme) => theme.palette.divider,
            strokeWidth: 1,
          }}
        />
      </svg>
    </Paper>
  );

  export function Test() {
    const [checked, setChecked] = React.useState(false);
  
    const handleChange = () => {
      setChecked((prev) => !prev);
    };
  
    return (
        <>
        <span onClick={handleChange}>text</span>
       
        <Box sx={{ display: 'flex' }}>
          <Fade in={checked}>{icon}</Fade>
        </Box>
        </>
    );
  }


