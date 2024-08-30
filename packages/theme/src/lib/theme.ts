import type {} from '@mui/lab/themeAugmentation';
import {
  type Components,
  createTheme,
  type PaletteColorOptions,
  type PaletteMode,
  type PaletteOptions,
  type Theme,
  type ThemeOptions,
} from '@mui/material';
import type { TypographyOptions } from '@mui/material/styles/createTypography.js';
import type {} from '@mui/x-data-grid/themeAugmentation';

import {
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from './design-tokens/index.js';

const paletteLight = {
  ...colors,
  // Custom Colors
  accent: {
    contrastText: colors.navy[900],
    dark: colors.yellow[700],
    light: colors.yellow[500],
    main: colors.yellow[600],
  },
  action: {
    activatedOpacity: 0.46,
    disabledOpacity: 0.28,
    focusOpacity: 0.1,
    hoverOpacity: 0.04,
    selectedOpacity: 0.08,
  },
  background: {
    default: colors.common.white,
    paper: colors.common.white,
  },
  divider: 'rgba(7,20,51,0.12)',
  error: {
    contrastText: colors.common.white,
    dark: colors.red[800],
    light: colors.red[300],
    main: colors.red[600],
  },
  info: {
    contrastText: colors.common.white,
    dark: colors.navy[1000],
    light: colors.navy[600],
    main: colors.navy[900],
  },
  link: {
    contrastText: colors.common.white,
    dark: colors.blue[800],
    light: colors.blue[300],
    main: colors.blue[500],
  },
  primary: {
    contrastText: colors.common.white,
    dark: colors.navy[1000],
    light: colors.navy[300],
    main: colors.navy[900],
  },
  secondary: {
    contrastText: colors.navy[900],
    dark: colors.grey[300],
    light: colors.grey[50],
    main: colors.grey[100],
  },
  success: {
    contrastText: colors.common.white,
    dark: colors.green[700],
    light: colors.green[300],
    main: colors.green[400],
  },
  tertiary: {
    contrastText: colors.common.white,
    dark: colors.turquoise[500],
    light: colors.turquoise[200],
    main: colors.turquoise[300],
  },
  text: {
    disabled: 'rgba(7,20,51,0.38)',
    primary: colors.navy[900],
    secondary: 'rgba(7,20,51,0.57)',
  },
  warning: {
    contrastText: colors.common.white,
    dark: colors.orange[600],
    light: colors.orange[200],
    main: colors.orange[400],
  },
} satisfies PaletteOptions;

const paletteDark = {
  ...colors,
  // Custom Colors
  accent: {
    contrastText: colors.navy[900],
    dark: colors.yellow[700],
    light: colors.yellow[400],
    main: colors.yellow[600],
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
    contrastText: colors.common.white,
    dark: colors.red[800],
    light: colors.red[300],
    main: colors.red[600],
  },
  info: {
    contrastText: 'rgba(7,20,51,0.87)',
    dark: colors.navy[400],
    light: colors.navy[100],
    main: colors.navy[200],
  },
  link: {
    contrastText: colors.navy[900],
    dark: colors.blue[700],
    light: colors.blue[200],
    main: colors.blue[300],
  },
  primary: {
    contrastText: colors.navy[900],
    dark: colors.navy[400],
    light: colors.navy[100],
    main: colors.navy[200],
  },
  secondary: {
    contrastText: colors.grey[100],
    dark: colors.grey[700],
    light: colors.grey[900],
    main: colors.grey[600],
  },
  success: {
    contrastText: 'rgba(255,255,255,0.87)',
    dark: colors.green[700],
    light: colors.green[400],
    main: colors.green[600],
  },
  tertiary: {
    contrastText: 'rgba(102,203,227,0.87)',
    dark: colors.turquoise[300],
    light: colors.turquoise[100],
    main: colors.turquoise[200],
  },
  text: {
    disabled: 'rgba(255,255,255,0.38)',
    primary: colors.common.white,
    secondary: 'rgba(255,255,255,0.50)',
  },
  warning: {
    contrastText: 'rgba(0,0,0,0.87)',
    dark: colors.orange[600],
    light: colors.orange[200],
    main: colors.orange[400],
  },
} satisfies PaletteOptions;

const typography = {
  allVariants: {
    fontFamily: fontFamilies.montserrat,
  },
  body1: {
    fontSize: fontSizes.body1,
    fontWeight: fontWeights.medium,
    letterSpacing: letterSpacings['05'],
    lineHeight: lineHeights['150'],
  },
  body2: {
    fontSize: fontSizes.body2,
    fontWeight: fontWeights.medium,
    letterSpacing: letterSpacings['025'],
    lineHeight: lineHeights['150'],
  },
  caption: {
    fontSize: fontSizes.caption1,
    fontWeight: fontWeights.medium,
    letterSpacing: letterSpacings['025'],
    lineHeight: lineHeights['150'],
  },
  caption2: {
    fontFamily: fontFamilies.montserrat,
    fontSize: fontSizes.caption2,
    fontWeight: fontWeights.medium,
    letterSpacing: letterSpacings['025'],
    lineHeight: lineHeights['150'],
  },
  display: {
    fontFamily: fontFamilies.montserrat,
    fontSize: fontSizes.display1,
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacings['0'],
    lineHeight: lineHeights['145'],
  },
  fontFamily: fontFamilies.montserrat,
  fontSize: 14,
  fontWeightBold: fontWeights.bold,
  fontWeightMedium: fontWeights.medium,
  h1: {
    fontSize: fontSizes.h1,
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacings['025'],
    lineHeight: lineHeights['145'],
  },
  h2: {
    fontSize: fontSizes.h2,
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacings['0'],
    lineHeight: lineHeights['145'],
  },
  h3: {
    fontSize: fontSizes.h3,
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacings['015'],
    lineHeight: lineHeights['145'],
  },
  h4: {
    fontSize: fontSizes.h4,
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacings['015'],
    lineHeight: lineHeights['150'],
  },
  h5: {
    fontSize: fontSizes.h5,
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacings['01'],
    lineHeight: lineHeights['150'],
  },
  h6: undefined,
  htmlFontSize: 16,
} satisfies TypographyOptions;

const components = {
  MuiAvatar: {
    defaultProps: {
      variant: 'circular',
    },
    styleOverrides: {
      root: ({ theme }) =>
        theme.unstable_sx({
          backgroundColor: theme.palette.primary.light,
          fontSize: '1.125rem',
          height: '2rem',
          width: '2rem',
        }),
    },
  },
  MuiBadge: {
    defaultProps: {
      anchorOrigin: { horizontal: 'right', vertical: 'top' },
      color: 'error',
      variant: 'standard',
    },
    styleOverrides: {
      colorPrimary: ({ theme }) => {
        return theme.unstable_sx({
          backgroundColor:
            theme.palette.mode === 'dark'
              ? theme.palette.primary.dark
              : undefined,
          color:
            theme.palette.mode === 'dark'
              ? theme.palette.common.white
              : undefined,
        });
      },
    },
  },
  MuiButton: {
    defaultProps: {
      color: 'accent',
      disableElevation: true,
      size: 'medium',
      variant: 'contained',
    },
    styleOverrides: {
      root: ({ theme }) =>
        theme.unstable_sx({
          borderRadius: '0.5rem',
          textTransform: 'none',
        }),
    },
  },
  MuiButtonGroup: {
    defaultProps: {
      color: 'accent',
      disableElevation: true,
      size: 'medium',
      variant: 'contained',
    },
  },
  MuiCheckbox: {
    defaultProps: {
      color: 'primary',
      indeterminate: false,
      size: 'small',
    },
    styleOverrides: {
      root: ({ theme }) =>
        theme.unstable_sx({
          padding: '0.5rem',
        }),
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        textRendering: 'optimizeLegibility',
      },
    },
  },
  MuiFormControlLabel: {
    defaultProps: {
      componentsProps: {
        typography: { variant: 'body2' },
      },
    },
  },
  MuiLoadingButton: {
    defaultProps: {
      color: 'accent',
      disableElevation: true,
      size: 'medium',
      variant: 'contained',
    },
    styleOverrides: {
      root: ({ theme }) =>
        theme.unstable_sx({
          borderRadius: '0.5rem',
          textTransform: 'none',
        }),
    },
  },
  MuiOutlinedInput: {
    defaultProps: {
      maxRows: 4,
      minRows: 4,
    },
    styleOverrides: {
      root: ({ theme }) =>
        theme.unstable_sx({
          borderRadius: '0.5rem',
          minWidth: '13.75rem',
        }),
    },
  },
  MuiRadio: {
    defaultProps: {
      color: 'primary',
      size: 'small',
    },
    styleOverrides: {
      root: ({ theme }) =>
        theme.unstable_sx({
          padding: '0.5rem',
        }),
    },
    variants: [
      {
        props: {
          size: 'small',
        },
        style: ({ theme }) =>
          theme.unstable_sx({
            '& .MuiSvgIcon-root': {
              height: '1.25rem',
              width: '1.25rem',
            },
          }),
      },
      {
        props: {
          size: 'medium',
        },
        style: ({ theme }) =>
          theme.unstable_sx({
            '& .MuiSvgIcon-root': {
              height: '1.5rem',
              width: '1.5rem',
            },
          }),
      },
      {
        props: {
          size: 'large',
        },
        style: ({ theme }) =>
          theme.unstable_sx({
            '& .MuiSvgIcon-root': {
              height: '1.75rem',
              width: '1.75rem',
            },
          }),
      },
    ],
  },
  MuiSelect: {
    styleOverrides: {
      root: ({ theme }) =>
        theme.unstable_sx({
          '& .MuiInputBase-root': {
            borderRadius: '0.5rem',
          },
        }),
    },
  },
  MuiSkeleton: {
    defaultProps: {
      animation: 'pulse',
      variant: 'text',
    },
  },
  MuiTextField: {
    defaultProps: {
      maxRows: 4,
      minRows: 4,
      size: 'medium',
      variant: 'outlined',
    },
    styleOverrides: {
      root: ({ theme }) =>
        theme.unstable_sx({
          '& .MuiInputBase-root': {
            borderRadius: '0.5rem',
          },
          fontSize: '1rem',
          minWidth: '13.75rem',
        }),
    },
  },
  MuiToggleButton: {
    defaultProps: {
      color: 'primary',
      size: 'medium',
    },
    styleOverrides: {
      root: ({ theme }) =>
        theme.unstable_sx({
          '&.Mui-selected': {
            backgroundColor: theme.palette.secondary.dark,
            color:
              theme.palette.mode === 'light'
                ? theme.palette.text.primary
                : theme.palette.common.white,
          },
          backgroundColor: theme.palette.secondary.main,
          borderRadius: '0.5rem',
          color: theme.palette.text.secondary,
          textTransform: 'none',
        }),
    },
    variants: [
      {
        props: {
          size: 'small',
        },
        style: ({ theme }) =>
          theme.unstable_sx({
            padding: '0.188rem',
          }),
      },
      {
        props: {
          size: 'medium',
        },
        style: ({ theme }) =>
          theme.unstable_sx({
            padding: '0.375rem',
          }),
      },
      {
        props: {
          size: 'large',
        },
        style: ({ theme }) =>
          theme.unstable_sx({
            padding: '0.563rem',
          }),
      },
    ],
  },
  MuiToggleButtonGroup: {
    defaultProps: {
      color: 'primary',
      size: 'medium',
    },
  },
} satisfies Components<Omit<Theme, 'components'>>;

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  components,
  palette: {
    mode,
    ...(mode === 'light' ? paletteLight : paletteDark),
  },
  spacing: 8,
  typography,
});

const lightTheme = createTheme(getDesignTokens('light'));

const darkTheme = createTheme(getDesignTokens('dark'));

const theme = createTheme({
  colorSchemes: {
    dark: { palette: paletteDark },
    light: { palette: paletteLight },
  },
  components,
  spacing: 8,
  typography,
});

export { darkTheme, getDesignTokens, lightTheme, theme };

// Update the MuiTheme's style types
declare module '@mui/material/styles' {
  // Add or remove colors from the palette
  interface Palette {
    accent: PaletteColorOptions;
    tertiary: PaletteColorOptions;
    link: PaletteColorOptions;
  }

  // Add or remove colors from the palette's color options
  interface PaletteOptions {
    accent?: PaletteColorOptions;
    tertiary?: PaletteColorOptions;
    link?: PaletteColorOptions;
  }

  // Add custom typography variants
  interface TypographyVariants {
    display: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  // Add custom typography variants options
  interface TypographyVariantsOptions {
    display?: React.CSSProperties;
    caption2?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display: true; // add custom size variant
    caption2: true; // add custom size variant
    h6: false; // disable `h6` variant
  }
}

declare module '@mui/material/Avatar' {
  interface ToggleButtonPropsVariantOverrides {
    rounded: false;
    square: false;
  }
}

declare module '@mui/material/Button' {
  // Update the Button's variant prop options
  interface ButtonPropsVariantOverrides {
    outlined: false; // disable `outlined` variant
  }

  interface ButtonPropsColorOverrides {
    accent: true; // add custom color variant to buttons
    link: true; // add custom color variant to buttons
    primary: false;
    warning: false;
    info: false;
    inherit: false;
  }
}

declare module '@mui/lab/LoadingButton' {
  // Update the Button's variant prop options
  interface LoadingButtonPropsVariantOverrides {
    outlined: false; // disable `outlined` variant
  }

  interface LoadingButtonPropsColorOverrides {
    accent: true; // add custom color variant to buttons
    link: true; // add custom color variant to buttons
    primary: false;
    warning: false;
    info: false;
    inherit: false;
  }
}

declare module '@mui/material/ButtonGroup' {
  // Update the ButtonGroup's variant prop options
  interface ButtonGroupPropsVariantOverrides {
    outlined: false; // disable `outlined` variant
  }

  interface ButtonGroupPropsColorOverrides {
    accent: true; // add custom color variant to buttons
    link: true; // add custom color variant to buttons
    primary: false;
    warning: false;
    info: false;
    inherit: false;
  }
}

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsSizeOverrides {
    large: true;
  }
  interface CheckboxPropsColorOverrides {
    secondary: false;
    error: false;
    warning: false;
    info: false;
    success: false;
    inherit: false;
  }
}

declare module '@mui/material/FormControl' {
  interface FormControlPropsVariantOverrides {
    filled: false; // disable `filled` variant
    standard: false; // disable `standard` variant
  }
}

declare module '@mui/material/Radio' {
  interface RadioPropsSizeOverrides {
    large: true;
  }
  interface RadioPropsColorOverrides {
    secondary: false;
    error: false;
    warning: false;
    info: false;
    success: false;
    inherit: false;
  }
}

declare module '@mui/material/Skeleton' {
  interface SkeletonPropsVariantOverrides {
    rectangular: false;
  }
}

declare module '@mui/material/Switch' {
  interface SwitchPropsColorOverrides {
    secondary: false;
    error: false;
    warning: false;
    info: false;
    success: false;
    inherit: false;
  }
}

// Update the TextField's variant prop options
declare module '@mui/material/TextField' {
  interface TextFieldPropsVariantOverrides {
    filled: false; // disable `filled` variant
    standard: false; // disable `standard` variant
  }
}

declare module '@mui/material/ToggleButton' {
  interface ToggleButtonPropsVariantOverrides {
    outlined: false; // disable `outlined` variant
  }

  interface ToggleButtonPropsColorOverrides {
    error: false;
    warning: false;
    info: false;
    success: false;
    inherit: false;
  }
}

declare module '@mui/material/ToggleButtonGroup' {
  interface ToggleButtonGroupPropsVariantOverrides {
    outlined: false;
  }
  interface ToggleButtonGroupPropsColorOverrides {
    error: false;
    warning: false;
    info: false;
    success: false;
    inherit: false;
  }
}
