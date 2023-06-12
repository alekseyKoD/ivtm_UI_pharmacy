import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function FooterMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <><div>
      <Button  sx={{color:'#486078',fontWeight: 'bold'}}
        id="Home-button"
        aria-controls={open ? 'Home-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Условия
      </Button>
      
      <Button sx={{color:'#486078',fontWeight: 'bold'}}
          id="SAAS-button"
          aria-controls={open ? 'Saas-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Политика конфиденциальности

        </Button>
        
        <Button sx={{color:'#486078',fontWeight: 'bold'}}
          id="OurWork-button"
          aria-controls={open ? 'OurWork-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Партнерство с нами
        </Button>
        
        <Button sx={{color:'#486078',fontWeight: 'bold'}}
          id="Company-button"
          aria-controls={open ? 'Company-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          FAQs
        </Button>
      
    </div></>
  );
}