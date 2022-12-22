import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#FFFFFF',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f5deb3',
      dark: '#b80000',
      contrastText: '#000'
    },
  },
});

export default theme