import { createTheme } from '@mui/material';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/600.css';
import '@fontsource/rubik/700.css';

const initialTheme = createTheme({
  spacing: [5, 10, 15, 20, 30, 45, 60, 80, 100, 120, 160, 240, 320],
});

export const theme = {
  ...initialTheme,
  typography: {
    ...initialTheme.typography,
    allVariants: {
      fontFamily: ['Tahoma', 'sans-serif'].join(','),
      fontSize: 16,
    },
    h1: {
      textTransform: 'uppercase',
      fontSize: '32px',
      fontWeight: 700,
      letterSpacing: '0.03',
      lineHeight: '84px',
      [initialTheme.breakpoints.up('md')]: {
        fontSize: '56px',
      },
    },
    h2: {
      fontSize: '22px',
      fontWeight: 700,
      lineHeight: '1.55',
      [initialTheme.breakpoints.up('md')]: {
        fontSize: '32px',
      },
    },
    h3: {
      fontSize: '22px',
      fontWeight: 400,
      lineHeight: '1.55',
      [initialTheme.breakpoints.up('md')]: {
        fontSize: '32px',
      },
    },
    h4: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '36px',
      [initialTheme.breakpoints.up('md')]: {
        fontSize: '24px',
      },
    },
    h5: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '25px',
    },
    body1: {
      fontSize: '22px',
      fontWeight: 400,
      lineHeight: '1.18',
      [initialTheme.breakpoints.up('md')]: {
        fontSize: '28px',
      },
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '1.18',
      [initialTheme.breakpoints.up('md')]: {
        fontSize: '16px',
        fontWeight: 600,
      },
    },
    subtitle1: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '1.18',
    },
    subtitle2: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '1.18',
    },
  },
};

theme.palette.text.secondary = 'rgba(0,0,0,0.4)';
