import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import { useImperativeHandle } from "react";

 function FormDialog(props,ref) {
  const [open, setOpen] = React.useState(false);
 
  const dialogClickOpen = () => {
    setOpen(true);
  };

  const dialogClose = () => {
    setOpen(false);
  };

  const [checked, setChecked] = React.useState([true]);
  
  
  const speedHandleChange = (event) => {
    
  };
  
  const qualityHandleChange = (event) => {
    
  };
  
  const priceHandleChange = (event) => {
    
  };

  const listBoxValues = [
    {
      value: 'today',
      label: 'Сегодня',
    },
    {
      value: 'tommorow',
      label: 'Завтра',
    },
    {
      value: 'dayAfterTommorow',
      label: 'Послезавтра',
    },
    {
      value: 'never',
      label: 'Никогда',
    },
  ];

  useImperativeHandle(ref, () => ({ dialogClickOpen }));


  return (
    <div>
      <Button sx={{color:'#486078',fontWeight:'bold'}} variant="text" onClick={dialogClickOpen} >
        Подробнее
      </Button>
      <Dialog open={open} onClose={dialogClose} >
        <DialogTitle sx={{bgcolor:'#A8C090',color:'#486078',fontWeight:'bold'}} >Отправить заявку</DialogTitle>
        <DialogContent sx={{bgcolor:'#A8C090'}}>
          <DialogContentText sx={{ color:'#486078'}} >
            Выберите параметры, которые вам необходимы
          </DialogContentText>
          <Divider />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <RadioGroup
                    aria-labelledby="radio-buttons-group"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Пункт 1" />
                    <FormControlLabel value="male" control={<Radio />} label="Пункт 2" />
                    <FormControlLabel value="other" control={<Radio />} label="Пункт 3" />
                </RadioGroup>

                </Grid>
                <Grid item xs={6}>
                    <FormControl sx={{ m: 0 }} component="fieldset" variant="standard">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                <Checkbox onChange={speedHandleChange} name="speed" />
                                }
                                label="Быстро"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox  onChange={qualityHandleChange} name="quality" />
                                }
                                label="Качественно"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox onChange={priceHandleChange} name="price" />
                                }
                                label="Недорого"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
                
            </Grid>
            <Divider/>
            <TextField 
                id="chooseFeedbackTime"
                select
                fullWidth
                margin="dense"
                label="Срок"
                defaultValue="EUR"
                helperText="Когда с вами связаться"
                
                >
                {listBoxValues.map((option) => (
                    <MenuItem key={option.value} value={option.value} sx={{bgcolor:'#A8C090'}}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>

          <Divider/>              
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions sx={{bgcolor:'#A8C090'}}>
          <Button sx={{color:'#486078',fontWeight:'bold'}} onClick={dialogClose}>Отмена</Button>
          <Button sx={{color:'#486078',fontWeight:'bold'}} onClick={dialogClose}>Отправить</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default React.forwardRef(FormDialog);
