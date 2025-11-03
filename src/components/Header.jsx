
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'black'}} className='text-warning'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        <img width={'50px'} src="https://static.vecteezy.com/system/resources/previews/003/602/595/non_2x/expense-tracker-app-gradient-icon-for-dark-theme-vector.jpg" alt="" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,fontWeight:600}}>
           <Link  to={'/'} className='text-warning'> EXPENSOIC</Link>
          </Typography>
        
        </Toolbar>
      </AppBar>
    </Box> 
    </div>
  )
}

export default Header