import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5b6bff'
    },
    secondary: {
      main: '#6f8ed9'
    },
    background: {
      default: '#ffffff'
    }
  },
  typography: {
    fontFamily: [
      'Inter',
      'system-ui',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial'
    ].join(',')
  }
});

export default theme;
