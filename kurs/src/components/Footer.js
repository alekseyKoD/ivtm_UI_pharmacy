import React from 'react';
import "../styles/App.css";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FooterMenu from './FooterMenu';

function Footer() {
    return (
        <Box>
            <Box sx={{ display: 'flex' }}>
                       
            </Box>
            <Box sx={{ display: 'flex', maxHeight:'45' }}>
        
                <Box sx={{ flexGrow: 1, backgroundColor: '#A8C090',borderTop: '5px solid #f0f0c0', minWidth:'220px', maxWidth: '220px' }}>
                   
        
                </Box>
                    {/*контейнер для меню*/}
                    <Box sx={{ flexGrow: 7, backgroundColor: '#A8C090',textAlign:'left', borderTop: '5px solid #f0f0c0'}}>
                        <FooterMenu/>
                     
            </Box>
        </Box>
        
        
        </Box>    
        
            
        );
    }
export default Footer;