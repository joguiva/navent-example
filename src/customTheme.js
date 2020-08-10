import { createMuiTheme } from '@material-ui/core/styles';

const CustomTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#69d8ff',
      main: '#1ea7dd',
      dark: '#0078ab',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffac57',
      main: '#fc7b27',
      dark: '#c24c00',
      contrastText: '#fff',
    },
  },
});

export default CustomTheme;