import React from 'react'
import { Box, Button, Checkbox, List, ListItem, ListItemIcon, ListItemText, Collapse, IconButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey} from '@mui/material/colors';

export default function Navbar() {
    const theme = createTheme({
        palette: {
          primary:{
            main:"#bdbdbd"
          },
          
          
        },
      });
    return (
        <>
        <div className='Navbar'>
            <div className='left-div'>
                <img src='logo.png'></img>
                <Button variant="contained" size="medium">
                    Courses
                </Button>
            </div>
            <div className='right-div'>
                <ul className='right-ul'>
                <li>Refer & Earn</li>
                <li>Resources</li>
                <li>About Us</li>
                <li>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" size="medium" color="primary">
                        Login
                    </Button>
                </ThemeProvider>
                </li>
                <li>
                    <Button variant="contained" size="medium">
                        Try for Free
                    </Button>
                </li>
                </ul>
            </div>
         </div>
        </>
    )
}
