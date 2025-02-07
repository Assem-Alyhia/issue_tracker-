import React, { useState, useMemo } from 'react';
import { IconButton, CssBaseline } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ColorModeSwitch = () => {
  const [mode, setMode] = useState('light'); 
  
 
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode] 
  );


  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}> {}
      <CssBaseline /> {}
      <IconButton sx={{ ml: 'auto' }} onClick={toggleColorMode} color="inherit">
      {mode === 'dark' ? (
    <Brightness7 sx={{ fontSize: 35 }}/>
  ) : (
    <Brightness4 sx={{ fontSize: 35}}/>
  )}
      </IconButton>
    </ThemeProvider>
  );
};

export default ColorModeSwitch;
