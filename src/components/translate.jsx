import React, { useEffect, useState } from 'react';
import { TextField, MenuItem, ListItem, List, ListItemText, Box , CircularProgress, Typography} from '@mui/material';
const Languages = [
    {name: 'English'},
    {name: 'Spanish'},
    {name: 'French'},
    {name: 'German'},
    {name: 'Italian'},  
    {name: 'Portuguese'},
    {name: 'Russian'},
    {name: 'Chinese'},
    {name: 'Japanese'},
    {name: 'Korean'},
    {name: 'Arabic'},
    {name: 'Hindi'},
    {name: 'Urdu'},
    {name: 'Turkish'},
    {name: 'Dutch'},
]
const Asi = [
  'Chinese',
  'Japanese',
  'Korean',
  'Arabic',
  'Hindi',
  'Urdu',
  'Turkish',
]
const TranslateLang = (props) => { 
  console.log(props.data, "kk")
const [data, setData] = useState([]);
const [Lang, setLang] = useState('English');
const [loading, setLoading] = useState(false);

const randomString = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  const crypto = window.crypto || window.msCrypto;
  const randomValues = new Uint32Array(1);

  for (let i = 0; i < length; i++) {
    crypto.getRandomValues(randomValues);
    result += characters.charAt(randomValues[0] % charactersLength);
  }

  return result;
};

const randomStringAsi = (length) => {
  let result = '';
  const characters = '是在不了有和人这中大为上个国我以要他时来用们生到作地于出就0123456789';
  const charactersLength = characters.length;
  const crypto = window.crypto || window.msCrypto;
  const randomValues = new Uint32Array(1);

  for (let i = 0; i < length; i++) {
    crypto.getRandomValues(randomValues);
    result += characters.charAt(randomValues[0] % charactersLength);
  }

  return result;
};


let temp ;
const handleLang = (e) => {
    setLoading(true)
    setLang(e.target.value);
    temp = setTimeout(() =>
    setLoading(false), 2000)
}
useEffect(() => {
  setData(props.data);
  console.log(props.data)
    return () => {
      clearTimeout(temp);
    };
  }, [temp, props.data]);
    return (
        <Box sx={{width: '500px', marginTop: '5rem', margin: '5rem 5px 0 5px'}} >
        <TextField
        fullWidth
        id="outlined-select-lang"
          select
          value={Lang}
          onChange={handleLang}
          
        >
          {Languages.map((option) => (
            <MenuItem key={option.name} value={option.name} >
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      { loading ? <CircularProgress style={{marginLeft: '50%', marginTop: "50%"}} /> :
      data.map((item) => (
      <ListItem>
        <ListItemText primary={<Typography style={{fontWeight: '1000'}} >{ Asi.includes(Lang) ? randomStringAsi(4) : randomString(4)}</Typography>} secondary={item.name} />
      </ListItem>
      ))
}
      </List>

    </Box>
    )
}

export default TranslateLang;


