import { colors, createTheme, type PaletteColorOptions } from '@mui/material';
import type {} from '@mui/x-data-grid/themeAugmentation';
import { colors as designColors } from '@repo/design-tokens';

const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        accent: {
          contrastText: designColors.navy[900],
          dark: designColors.yellow[700],
          light: designColors.yellow[400],
          main: designColors.yellow[600],
        },
        action: {
          activatedOpacity: 0.56,
          disabledOpacity: 0.38,
          focusOpacity: 0.12,
          hoverOpacity: 0.08,
          selectedOpacity: 0.16,
        },
        background: {
          default: '#121212',
          paper: '#121212',
        },
        divider: 'rgba(255,255,255,0.12)',
        error: {
          contrastText: designColors.common.white,
          dark: designColors.red[800],
          light: designColors.red[300],
          main: designColors.red[600],
        },
        info: {
          contrastText: 'rgba(7,20,51,0.87)',
          dark: designColors.navy[400],
          light: designColors.navy[100],
          main: designColors.navy[200],
        },
        link: {
          contrastText: designColors.navy[900],
          dark: designColors.blue[700],
          light: designColors.blue[200],
          main: designColors.blue[300],
        },
        primary: {
          contrastText: designColors.navy[900],
          dark: designColors.navy[400],
          light: designColors.navy[100],
          main: designColors.navy[200],
        },
        secondary: {
          contrastText: designColors.grey[100],
          dark: designColors.grey[700],
          light: designColors.grey[900],
          main: designColors.grey[600],
        },
        success: {
          contrastText: 'rgba(255,255,255,0.87)',
          dark: designColors.green[700],
          light: designColors.green[400],
          main: designColors.green[600],
        },
        tertiary: {
          contrastText: 'rgba(102,203,227,0.87)',
          dark: designColors.turquoise[300],
          light: designColors.turquoise[100],
          main: designColors.turquoise[200],
        },
        text: {
          disabled: 'rgba(255,255,255,0.38)',
          primary: colors.common.white,
          secondary: 'rgba(255,255,255,0.50)',
        },
        warning: {
          contrastText: 'rgba(0,0,0,0.87)',
          dark: designColors.orange[600],
          light: designColors.orange[200],
          main: designColors.orange[400],
        },
      },
    },
    light: {
      palette: {
        accent: {
          contrastText: designColors.navy[900],
          dark: designColors.yellow[700],
          light: designColors.yellow[500],
          main: designColors.yellow[600],
        },
        action: {
          activatedOpacity: 0.46,
          disabledOpacity: 0.28,
          focusOpacity: 0.1,
          hoverOpacity: 0.04,
          selectedOpacity: 0.08,
        },
        background: {
          default: designColors.common.white,
          paper: designColors.common.white,
        },
        divider: 'rgba(7,20,51,0.12)',
        error: {
          contrastText: designColors.common.white,
          dark: designColors.red[800],
          light: designColors.red[300],
          main: designColors.red[600],
        },
        info: {
          contrastText: designColors.common.white,
          dark: designColors.navy[1000],
          light: designColors.navy[600],
          main: designColors.navy[900],
        },
        link: {
          contrastText: designColors.common.white,
          dark: designColors.blue[800],
          light: designColors.blue[300],
          main: designColors.blue[500],
        },
        primary: {
          contrastText: colors.common.white,
          dark: designColors.navy[1000],
          light: designColors.navy[300],
          main: designColors.navy[900],
        },
        secondary: {
          contrastText: designColors.navy[900],
          dark: designColors.grey[300],
          light: designColors.grey[50],
          main: designColors.grey[100],
        },
        success: {
          contrastText: designColors.common.white,
          dark: designColors.green[700],
          light: designColors.green[300],
          main: designColors.green[400],
        },
        tertiary: {
          contrastText: designColors.common.white,
          dark: designColors.turquoise[500],
          light: designColors.turquoise[200],
          main: designColors.turquoise[300],
        },
        text: {
          disabled: 'rgba(7,20,51,0.38)',
          primary: designColors.navy[900],
          secondary: 'rgba(7,20,51,0.57)',
        },
        warning: {
          contrastText: designColors.common.white,
          dark: designColors.orange[600],
          light: designColors.orange[200],
          main: designColors.orange[400],
        },
      },
    },
  },
  components: {},
});

export default theme;

declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Palette {
    accent?: PaletteColorOptions;
    tertiary?: PaletteColorOptions;
    link?: PaletteColorOptions;
  }
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface PaletteOptions {
    accent?: PaletteColorOptions;
    tertiary?: PaletteColorOptions;
    link?: PaletteColorOptions;
  }
}
