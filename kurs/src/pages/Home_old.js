import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import OnlinePharmacyCard1 from '../Image/OnlinePharmacy/Card1.png';
import OnlinePharmacyCard2 from '../Image/OnlinePharmacy/Card2.png';
import OnlinePharmacyCard3 from '../Image/OnlinePharmacy/Card3.png';
import OnlinePharmacyCard4 from '../Image/OnlinePharmacy/Card4.png';


import "../styles/App.css";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
        
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f0f0c0',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'f0f0c0',
  }));


  const ImageArray=[
      { 
        src: OnlinePharmacyCard1,
        alt: "Card1",
      },
      
      { 
        src: OnlinePharmacyCard2,
        alt: "Card2",
      },
      { 
        src: OnlinePharmacyCard3,
        alt: "Card3",
      },
      { 
        src: OnlinePharmacyCard4,
        alt: "Card4",
      }

  ]

  return (
    <Box height={`calc(100vh - 165px)`}
      sx={{display: 'flex',flexgrow:1,bgcolor:'#f0f0c0'}}
    >
      <Tabs
      sx={{ 
        '& .MuiTabs-indicator': { display:'none'},
        '& .MuiTab-root': { 
                            backgroundColor:'#A8C090',
                            color: '#486078',
                            borderTopLeftRadius:'12px',
                            borderBottomLeftRadius:'12px',
                            borderBottom: '1px solid #60A890',
                            borderTop: '1px solid #60A890',
                            borderLeft: '1px solid #60A890'   },
        '& .Mui-selected': { backgroundColor:'#60A890',color: '#f0f0c0' },
        minWidth:'220px'
      }}
        orientation="vertical"
        /*variant="scrollable"*/
        value={value}
        onChange={handleChange}
        
      >
        <Tab label="Online pharmacy" {...a11yProps(0)} />
        <Tab label="Medical cosmetic" {...a11yProps(1)} />
        <Tab label="Medical supply" {...a11yProps(2)} />
        
      </Tabs>
      <TabPanel value={value} index={0} >
        
          {/* Блок для контента*/}
          <Box 
              width={`calc(100vw - 240px)`} 
              margin={'-24px'}
              sx={{display:'flex',bgcolor:'#60A890'}}>
             <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 745,
          height: 420,
        },
      }}
    >
      <Paper elevation={6}>



      </Paper>
      

      <Paper elevation={6}/>
      <Paper elevation={6} />
      <Paper elevation={6} />
    </Box>      
           
          </Box>
      
        
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Box 

          sx={{display:'flex',bgcolor:'#60A890'}}>
        Item Two
       </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
     
  );
}
export default Home;