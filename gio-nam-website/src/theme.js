import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#FFFFFF', //white
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f5deb3', //wheat
      dark: '#b80000', //dark red
      contrastText: '#000'
    },
    alternate: {
      light: '#ff7961',
      main: '#b80000', //dark red
      dark: '#f5deb3', //wheat
      contrastText: '#000'
    },
  },
});

export default theme