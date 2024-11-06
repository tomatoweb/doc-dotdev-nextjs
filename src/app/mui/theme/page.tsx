import CodeBlock from '@/app/components/CodeBlock';
import { Typography } from '@mui/material'
import React from 'react'

const page = () => {
  const text = 
`'use client';
import { grey, yellow } from '@mui/material/colors';
  import { createTheme } from '@mui/material/styles';
  const theme = createTheme({
    palette: {
      mode: 'dark',
      myColor: {
        main: "#95bd31",
        contrastText: "#e33279"
      },
      grey: {
        main: grey[300],
        light: grey[100],
        dark: grey[500],
        contrastText: "#000"
      },
      link: "#52a8ff",      
      background: {
        default: '#000'
      }
    },
    typography: {
      fontFamily: "geistSans",
      fontWeightRegular: 400,
      h1: {
        fontFamily: 'Papyrus',
        fontWeight: 500,
        fontSize: '5rem',
        lineHeight: 1.2,
      },
      h2: {
        fontFamily: "Brush Script MT",
        fontWeight: 300,
        fontSize: '5rem',
        lineHeight: 1.2,
      },
    },
  });
  export default theme;`;
  const debug = 
`breakpoints: {
    keys: [ 'xs', 'sm', 'md', 'lg', 'xl' ],
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    up: [Function: up],
    down: [Function: down],
    between: [Function: between],
    only: [Function: only],
    not: [Function: not],
    unit: 'px'
  },
  direction: 'ltr',
  components: {},
  palette: {
    mode: 'dark',
    myColor: { main: '#95bd31', contrastText: '#e33279' },
    grey: {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '500': '#9e9e9e',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
      main: '#424242',
      light: '#f5f5f5',
      dark: '#9e9e9e',
      contrastText: '#fff',
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#616161'
    },
    link: '#52a8ff',
    background: { default: '#000', paper: '#121212' },
    common: { black: '#000', white: '#fff' },
    primary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    secondary: {
      main: '#ce93d8',
      light: '#f3e5f5',
      dark: '#ab47bc',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: '#fff'
    },
    warning: {
      main: '#ffa726',
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    info: {
      main: '#29b6f6',
      light: '#4fc3f7',
      dark: '#0288d1',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    success: {
      main: '#66bb6a',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    contrastThreshold: 3,
    getContrastText: [Function: getContrastText],
    augmentColor: [Function: augmentColor],
    tonalOffset: 0.2,
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    action: {
      active: '#fff',
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  },
  spacing: [Function: spacing] { mui: true },
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: 'geistSans',
    fontWeightRegular: 500,
    h1: {
      fontFamily: 'Papyrus',
      fontWeight: 500,
      fontSize: '5rem',
      lineHeight: 1.2
    },
    h2: {
      fontFamily: 'Brush Script MT',
      fontWeight: 300,
      fontSize: '5rem',
      lineHeight: 1.2
    },
    htmlFontSize: 16,
    pxToRem: [Function (anonymous)],
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h3: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '3rem',
      lineHeight: 1.167
    },
    h4: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '2.125rem',
      lineHeight: 1.235
    },
    h5: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.334
    },
    h6: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6
    },
    subtitle1: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.75
    },
    subtitle2: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.57
    },
    body1: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.5
    },
    body2: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.43
    },
    button: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      textTransform: 'uppercase'
    },
    caption: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '0.75rem',
      lineHeight: 1.66
    },
    overline: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      textTransform: 'uppercase'
    },
    inherit: {
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit'
    }
  },
  containerQueries: [Function: containerQueries] {
    up: [Function (anonymous)],
    down: [Function (anonymous)],
    between: [Function (anonymous)],
    only: [Function (anonymous)],
    not: [Function (anonymous)]
  },
  applyStyles: [Function: applyStyles],
  unstable_sxConfig: {
    border: { themeKey: 'borders', transform: [Function: borderTransform] },
    borderTop: { themeKey: 'borders', transform: [Function: borderTransform] },
    borderRight: { themeKey: 'borders', transform: [Function: borderTransform] },
    borderBottom: { themeKey: 'borders', transform: [Function: borderTransform] },
    borderLeft: { themeKey: 'borders', transform: [Function: borderTransform] },
    borderColor: { themeKey: 'palette' },
    borderTopColor: { themeKey: 'palette' },
    borderRightColor: { themeKey: 'palette' },
    borderBottomColor: { themeKey: 'palette' },
    borderLeftColor: { themeKey: 'palette' },
    outline: { themeKey: 'borders', transform: [Function: borderTransform] },
    outlineColor: { themeKey: 'palette' },
    borderRadius: { themeKey: 'shape.borderRadius', style: [Function] },
    color: { themeKey: 'palette', transform: [Function: paletteTransform] },
    bgcolor: {
      themeKey: 'palette',
      cssProperty: 'backgroundColor',
      transform: [Function: paletteTransform]
    },
    backgroundColor: { themeKey: 'palette', transform: [Function: paletteTransform] },
    p: { style: [Function] },
    pt: { style: [Function] },
    pr: { style: [Function] },
    pb: { style: [Function] },
    pl: { style: [Function] },
    px: { style: [Function] },
    py: { style: [Function] },
    padding: { style: [Function] },
    paddingTop: { style: [Function] },
    paddingRight: { style: [Function] },
    paddingBottom: { style: [Function] },
    paddingLeft: { style: [Function] },
    paddingX: { style: [Function] },
    paddingY: { style: [Function] },
    paddingInline: { style: [Function] },
    paddingInlineStart: { style: [Function] },
    paddingInlineEnd: { style: [Function] },
    paddingBlock: { style: [Function] },
    paddingBlockStart: { style: [Function] },
    paddingBlockEnd: { style: [Function] },
    m: { style: [Function] },
    mt: { style: [Function] },
    mr: { style: [Function] },
    mb: { style: [Function] },
    ml: { style: [Function] },
    mx: { style: [Function] },
    my: { style: [Function] },
    margin: { style: [Function] },
    marginTop: { style: [Function] },
    marginRight: { style: [Function] },
    marginBottom: { style: [Function] },
    marginLeft: { style: [Function] },
    marginX: { style: [Function] },
    marginY: { style: [Function] },
    marginInline: { style: [Function] },
    marginInlineStart: { style: [Function] },
    marginInlineEnd: { style: [Function] },
    marginBlock: { style: [Function] },
    marginBlockStart: { style: [Function] },
    marginBlockEnd: { style: [Function] },
    displayPrint: { cssProperty: false, transform: [Function: transform] },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: [Function] },
    rowGap: { style: [Function] },
    columnGap: { style: [Function] },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: 'zIndex' },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: 'shadows' },
    width: { transform: [Function: sizingTransform] },
    maxWidth: { style: [Function] },
    minWidth: { transform: [Function: sizingTransform] },
    height: { transform: [Function: sizingTransform] },
    maxHeight: { transform: [Function: sizingTransform] },
    minHeight: { transform: [Function: sizingTransform] },
    boxSizing: {},
    font: { themeKey: 'font' },
    fontFamily: { themeKey: 'typography' },
    fontSize: { themeKey: 'typography' },
    fontStyle: { themeKey: 'typography' },
    fontWeight: { themeKey: 'typography' },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: false, themeKey: 'typography' }
  },
  unstable_sx: [Function: sx],
  mixins: {
    toolbar: {
      minHeight: 56,
      '@media (min-width:0px)': [Object],
      '@media (min-width:600px)': [Object]
    }
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
  ],
  transitions: {
    getAutoHeightDuration: [Function: getAutoHeightDuration],
    create: [Function: create],
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    }
  },
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },
  toRuntimeSource: [Function: stringifyTheme]
}
{
  breakpoints: {
    keys: [ 'xs', 'sm', 'md', 'lg', 'xl' ],
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    up: [Function: up],
    down: [Function: down],
    between: [Function: between],
    only: [Function: only],
    not: [Function: not],
    unit: 'px'
  },
  direction: 'ltr',
  components: {},
  palette: {
    mode: 'dark',
    myColor: { main: '#95bd31', contrastText: '#e33279' },
    grey: {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '500': '#9e9e9e',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
      main: '#424242',
      light: '#f5f5f5',
      dark: '#9e9e9e',
      contrastText: '#fff',
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#616161'
    },
    link: '#52a8ff',
    background: { default: '#000', paper: '#121212' },
    common: { black: '#000', white: '#fff' },
    primary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    secondary: {
      main: '#ce93d8',
      light: '#f3e5f5',
      dark: '#ab47bc',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: '#fff'
    },
    warning: {
      main: '#ffa726',
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    info: {
      main: '#29b6f6',
      light: '#4fc3f7',
      dark: '#0288d1',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    success: {
      main: '#66bb6a',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    contrastThreshold: 3,
    getContrastText: [Function: getContrastText],
    augmentColor: [Function: augmentColor],
    tonalOffset: 0.2,
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    action: {
      active: '#fff',
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  },
  spacing: [Function: spacing] { mui: true },
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: 'geistSans',
    fontWeightRegular: 500,
    h1: {
      fontFamily: 'Papyrus',
      fontWeight: 500,
      fontSize: '5rem',
      lineHeight: 1.2
    },
    h2: {
      fontFamily: 'Brush Script MT',
      fontWeight: 300,
      fontSize: '5rem',
      lineHeight: 1.2
    },
    htmlFontSize: 16,
    pxToRem: [Function (anonymous)],
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h3: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '3rem',
      lineHeight: 1.167
    },
    h4: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '2.125rem',
      lineHeight: 1.235
    },
    h5: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.334
    },
    h6: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6
    },
    subtitle1: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.75
    },
    subtitle2: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.57
    },
    body1: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.5
    },
    body2: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.43
    },
    button: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      textTransform: 'uppercase'
    },
    caption: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '0.75rem',
      lineHeight: 1.66
    },
    overline: {
      fontFamily: 'geistSans',
      fontWeight: 500,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      textTransform: 'uppercase'
    },
    inherit: {
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit'
    }
  },
  containerQueries: [Function: containerQueries] {
    up: [Function (anonymous)],
    down: [Function (anonymous)],
    between: [Function (anonymous)],
    only: [Function (anonymous)],
    not: [Function (anonymous)]
  },
  applyStyles: [Function: applyStyles],
  unstable_sxConfig: {
    border: { themeKey: 'borders', transform: [Function: borderTransform] },
    borderTop: { themeKey: 'borders', transform: [Function: borderTransform] },
    borderRight: { themeKey: 'borders', transform: [Function: borderTransform] },
    borderBottom: { themeKey: 'borders', transform: [Function: borderTransform] },
    borderLeft: { themeKey: 'borders', transform: [Function: borderTransform] },
    borderColor: { themeKey: 'palette' },
    borderTopColor: { themeKey: 'palette' },
    borderRightColor: { themeKey: 'palette' },
    borderBottomColor: { themeKey: 'palette' },
    borderLeftColor: { themeKey: 'palette' },
    outline: { themeKey: 'borders', transform: [Function: borderTransform] },
    outlineColor: { themeKey: 'palette' },
    borderRadius: { themeKey: 'shape.borderRadius', style: [Function] },
    color: { themeKey: 'palette', transform: [Function: paletteTransform] },
    bgcolor: {
      themeKey: 'palette',
      cssProperty: 'backgroundColor',
      transform: [Function: paletteTransform]
    },
    backgroundColor: { themeKey: 'palette', transform: [Function: paletteTransform] },
    p: { style: [Function] },
    pt: { style: [Function] },
    pr: { style: [Function] },
    pb: { style: [Function] },
    pl: { style: [Function] },
    px: { style: [Function] },
    py: { style: [Function] },
    padding: { style: [Function] },
    paddingTop: { style: [Function] },
    paddingRight: { style: [Function] },
    paddingBottom: { style: [Function] },
    paddingLeft: { style: [Function] },
    paddingX: { style: [Function] },
    paddingY: { style: [Function] },
    paddingInline: { style: [Function] },
    paddingInlineStart: { style: [Function] },
    paddingInlineEnd: { style: [Function] },
    paddingBlock: { style: [Function] },
    paddingBlockStart: { style: [Function] },
    paddingBlockEnd: { style: [Function] },
    m: { style: [Function] },
    mt: { style: [Function] },
    mr: { style: [Function] },
    mb: { style: [Function] },
    ml: { style: [Function] },
    mx: { style: [Function] },
    my: { style: [Function] },
    margin: { style: [Function] },
    marginTop: { style: [Function] },
    marginRight: { style: [Function] },
    marginBottom: { style: [Function] },
    marginLeft: { style: [Function] },
    marginX: { style: [Function] },
    marginY: { style: [Function] },
    marginInline: { style: [Function] },
    marginInlineStart: { style: [Function] },
    marginInlineEnd: { style: [Function] },
    marginBlock: { style: [Function] },
    marginBlockStart: { style: [Function] },
    marginBlockEnd: { style: [Function] },
    displayPrint: { cssProperty: false, transform: [Function: transform] },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: [Function] },
    rowGap: { style: [Function] },
    columnGap: { style: [Function] },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: 'zIndex' },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: 'shadows' },
    width: { transform: [Function: sizingTransform] },
    maxWidth: { style: [Function] },
    minWidth: { transform: [Function: sizingTransform] },
    height: { transform: [Function: sizingTransform] },
    maxHeight: { transform: [Function: sizingTransform] },
    minHeight: { transform: [Function: sizingTransform] },
    boxSizing: {},
    font: { themeKey: 'font' },
    fontFamily: { themeKey: 'typography' },
    fontSize: { themeKey: 'typography' },
    fontStyle: { themeKey: 'typography' },
    fontWeight: { themeKey: 'typography' },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: false, themeKey: 'typography' }
  },
  unstable_sx: [Function: sx],
  mixins: {
    toolbar: {
      minHeight: 56,
      '@media (min-width:0px)': [Object],
      '@media (min-width:600px)': [Object]
    }
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
  ],
  transitions: {
    getAutoHeightDuration: [Function: getAutoHeightDuration],
    create: [Function: create],
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    }
  },
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },
  toRuntimeSource: [Function: stringifyTheme]`;
  return (
    <div className='text-center'>
      <Typography variant='h5'>MUI Theme and debug theme (below)</Typography>
      <CodeBlock text={text} />  
      <Typography variant='h5'>Debug MUI theme</Typography>
      <CodeBlock text={debug} />  
    </div>
  )
}

export default page