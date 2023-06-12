import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function MainMenu() {
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
        Домой
      </Button>
      <Menu 
        id="Home-menu"
        anchorEl={anchorEl}
        /* open={open} */
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'Home-button',
        }}
      >
      {/*}
        <MenuItem sx={{fontWeight:'bold'}} onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      */}
      </Menu>
    
      <Button sx={{color:'#486078',fontWeight: 'bold'}}
          id="SAAS-button"
          aria-controls={open ? 'Saas-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
        SAAS
        </Button>
        
        <Button sx={{color:'#486078',fontWeight: 'bold'}}
          id="OurWork-button"
          aria-controls={open ? 'OurWork-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Наши работы
        </Button>
        
        <Button sx={{color:'#486078',fontWeight: 'bold'}}
          id="Company-button"
          aria-controls={open ? 'Company-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          О компании
        </Button>

        <Button sx={{color:'#486078',fontWeight: 'bold'}}
          id="Contact-button"
          aria-controls={open ? 'Contact-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Связаться с нами
        </Button>
    </div></>
  );
}