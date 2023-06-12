import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import logo from '../Image/logo.png';
import MainMenu from './MainMenu';
import { alignProperty } from '@mui/material/styles/cssUtils';


function Header() {
return (
<Box>
    <Box className="Header" sx={{ display: 'flex' }}>

        <Box sx={{ flexGrow: 1, backgroundColor: '#f0f0c0',minWidth:'220px', maxWidth: '220px' }}>
            <img src={logo} alt="logo" width="220px" height="75px" align="left" />

        </Box>
        <Box sx={{ flexGrow: 7, backgroundColor: '#486078' }}>
            <Typography variant="h3" component="div" align="left" sx={{ marginTop: '10px', marginLeft: '20px', fontWeight: 'bold',fontStyle: 'italic', color: '#f0f0c0' }}>
                Онлайн-решения для медицины
            </Typography>
        </Box>
    </Box>
    <Box sx={{ display: 'flex', minHeight:'45px' }}>

        <Box sx={{ flexGrow: 1, backgroundColor: '#A8C090',borderBottom: '5px solid #f0f0c0', minWidth:'220px', maxWidth: '220px' }}>
           

        </Box>
            {/*контейнер для меню*/}
            <Box sx={{ flexGrow: 7, backgroundColor: '#A8C090',textAlign:'left', borderBottom: '5px solid #f0f0c0'}}>
                <MainMenu/>
             
    </Box>
</Box>


</Box>    

    
);
}
export default Header;