import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function ButtonAppBar() {
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
              <Toolbar>
                
                <Button variant="contained"   component={Link} to = '/'
                
                
                sx={{ my: 2, color: 'white', display: 'flex',   mx: 'auto' }}
              >
                HOME
                  </Button>
                  <Button variant="contained"  component={Link} to = '/tweets'
                
                
                sx={{ my: 2, color: 'white', display: 'flex', mx: 'auto' }}
              >
                TWEETS
              </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}