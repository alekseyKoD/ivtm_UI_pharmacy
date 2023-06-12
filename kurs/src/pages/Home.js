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
import Button from '@mui/material/Button';
import FormDialog from '../components/DialogForm';
import { useRef } from "react";

import OnlinePharmacyCard1 from '../Image/OnlinePharmacy/Card1.png';
import OnlinePharmacyCard2 from '../Image/OnlinePharmacy/Card2.png';
import OnlinePharmacyCard3 from '../Image/OnlinePharmacy/Card3.png';
import OnlinePharmacyCard4 from '../Image/OnlinePharmacy/Card4.png';

import MedCosmeticCard1 from '../Image/MedicalCosmetic/Card1.png';
import MedCosmeticCard2 from '../Image/MedicalCosmetic/Card2.png';
import MedCosmeticCard3 from '../Image/MedicalCosmetic/Card3.png';
import MedCosmeticCard4 from '../Image/MedicalCosmetic/Card4.png';

import MedicalSupplyCard1 from '../Image/MedicalSupply/Card1.png';
import MedicalSupplyCard2 from '../Image/MedicalSupply/Card2.png';
import MedicalSupplyCard3 from '../Image/MedicalSupply/Card3.png';
import MedicalSupplyCard4 from '../Image/MedicalSupply/Card4.png';

import "../styles/App.css";
import DialogForm from '../components/DialogForm';

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

  const formDialogRef = useRef(null);

  const [value, setValue] = React.useState(0);

  const formDialogOpen = () => {
    if (formDialogRef.current) {
      formDialogRef.current.formDialogOpen();
    }
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const GridItem = styled(Paper)(({ theme }) => ({
    backgroundColor: '#A8C090',
    
                
  }));

  const CardItem = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f0f0c0',
    
    }));

  const ImageArrayOnlinePharmacy=[
      { 
        src: OnlinePharmacyCard1,
        alt: "Card1",
        description:"Онлайн-платформа, включающая в себя веб-сайт, модуль блогов, онлайн-магазин. Современный дизайн и адаптивная верстка подойдут любому уровню бизнеса. ",
      },
      
      { 
        src: OnlinePharmacyCard2, 
        alt: "Card2",
        description:"Адаптивная верстка с современным плоским дизайном. и встроенным онлайн-магазином. Подойдет для небольших аптек.",
      },
      { 
        src: OnlinePharmacyCard3,
        alt: "Card3",
        description:"Современный сайт со встроенным модулем онлайн-магазина и отслеживанием доставки при участии наших партнеров в сфере доставки медикаментов",
      },
      { 
        src: OnlinePharmacyCard4,
        alt: "Card4",
        description:"Современный сайт, выполенный в минималистичном дизайне. Включает в себя модуль интрнет-магазина",
      }
    ]  
      const ImageArrayMedicalCosmetic=[
        { 
          src: MedCosmeticCard1,
          alt: "Card1",
          description:"Современный веб-сайт с модулем ведения блогов. Строгий дизайн и соременная верстка подойдут любой компании.",
        },
        
        { 
          src: MedCosmeticCard2, 
          alt: "Card2",
          description:"Минималистичный дизайн с интегрированныйм модулем онлайн-магазина.",
        },
        { 
          src: MedCosmeticCard3,
          alt: "Card3",
          description:"Онлайн-магазин для продажи профессиональной уходовой косметики.",
        },
        { 
          src: MedCosmeticCard4,
          alt: "Card4",
          description:"Современный сайт, выполенный в минималистичном дизайне.",
        }

      ]
      const ImageArrayMedicalSupply=[
        { 
          src: MedicalSupplyCard1,
          alt: "Card1",
          description:"Онлайг-платформа для продажи медицинских товаров. Современный дизайн и адаптивная верстка предоставят преимущества вам перед конкурентамми в бизнесе.",
        },
        
        { 
          src: MedicalSupplyCard2, 
          alt: "Card2",
          description:"Сайт для продажи медицинских товаров в области стоматологии. Строгий современный дизайн позволит вам выделиться перед конкурентами.",
        },
        { 
          src: MedicalSupplyCard3,
          alt: "Card3",
          description:"Онлайн-магазин для продажи медицинских товаров. Минималистичный дизайн с интегрированныйм модулем онлайн-магазина. .",
        },
        { 
          src: MedicalSupplyCard4,
          alt: "Card4",
          description:"Современный сайт, выполенный в минималистичном дизайне. Включает в себя модуль интрнет-магазина",
        }

      ]
    
      const ImageArray=[
        ImageArrayOnlinePharmacy,
        ImageArrayMedicalCosmetic,
        ImageArrayMedicalSupply
      ]



  return (
    <Box 
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
        '& .Mui-selected': { backgroundColor:'#60A890', color: '#f0f0c0' },
        minWidth:'220px'
      }}
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        
      >\
        <Tab label="Интернет-магазины" {...a11yProps(0)} />
        <Tab label="Медицинская косметика" {...a11yProps(1)} />
        <Tab label="Товары для медицины" {...a11yProps(2)} />
        
      </Tabs>
      
      {Array.from(Array(3)).map((_, rootIndex) => (
        <>
        <TabPanel value={value} index={rootIndex} >
        
        {/* Блок для контента*/}
        <Box 
           
            margin={'-24px'}
            sx={{display:'flex',bgcolor:'#60A890'}}>
           <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                                      m: 1,
                                      width: 745,
                                      height: 370,
                                    },
                }}>

                {Array.from(Array(4)).map((_, index) => (

                <CardItem elevation={6} >
                  <Grid container  padding={1}>
                    <Grid item xs={8}>
                      <GridItem>
                        <Card sx={{ maxWidth: 500 }}>
                          <CardMedia
                              sx={{ minHeight: 355 }}
                              image={ImageArray[rootIndex][index].src}
                              title={ImageArray[rootIndex][index].alt}
                          />
                        </Card> 
                      </GridItem>
                    </Grid>

                    <Grid item xs={4}>
                      <GridItem>
                      <Card sx={{ minHeight: 355, bgcolor:'#A8C090', display:'flex', flexDirection:'column' }} >
                        <CardContent>
                            <Typography align='left'>
                              {ImageArray[rootIndex][index].description}
                            </Typography>
                         </CardContent>
                         
                         <CardContent align="left" >
                            <DialogForm ref={formDialogRef} />
                            <Button size="small"  sx={{ color:'#486078'}} onClick={formDialogOpen} ></Button>                          
                          </CardContent>
                        </Card>  
                      </GridItem>
                    </Grid>
                  </Grid>
                </CardItem>
                
                ))}   
              </Box> 
          </Box>
      </TabPanel>
        </>
      ))} 
     </Box>   
  )
}
export default Home;