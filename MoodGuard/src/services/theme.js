import { extendTheme } from '@chakra-ui/react';

// Definir breakpoints personalizados
const breakpoints = {
  sm: '320px',  // Móviles pequeños
  md: '768px',  // Tablets
  lg: '960px',  // Pantallas medianas
  xl: '1200px', // Pantallas grandes
  '2xl': '1536px', // Pantallas muy grandes
};

const colors = {
  lapisLazuli: {
    50: '#e3f0f7',
    100: '#b8d8e8',
    200: '#8cbfd8',
    300: '#5fa6c9',
    400: '#318db9',
    500: '#05668D', // Color principal
    600: '#045673',
    700: '#034459',
    800: '#023340',
    900: '#012226',
  },
  teal: {
    50: '#e1f4f6',
    100: '#b3dfe3',
    200: '#80c9cf',
    300: '#4eb3ba',
    400: '#1c9ea6',
    500: '#028090', // Teal
    600: '#026b79',
    700: '#015661',
    800: '#00404a',
    900: '#002a33',
  },
  persianGreen: {
    50: '#e0f6f4',
    100: '#b3e7df',
    200: '#80d8c9',
    300: '#4dc9b4',
    400: '#1ab99e',
    500: '#00A896', // Persian Green
    600: '#008b7d',
    700: '#006d64',
    800: '#004f4b',
    900: '#003231',
  },
  mint: {
    50: '#e0f9f3',
    100: '#b3eedf',
    200: '#80e2ca',
    300: '#4dd6b6',
    400: '#1acba2',
    500: '#02C39A', // Mint
    600: '#02a182',
    700: '#01806a',
    800: '#015e52',
    900: '#003d39',
  },
  cream: {
    50: '#fffef4',
    100: '#fdfbdd',
    200: '#fbf8c5',
    300: '#f9f5ae',
    400: '#f7f297',
    500: '#F0F3BD', // Cream
    600: '#d5db8e',
    700: '#b8c35e',
    800: '#9ca92f',
    900: '#7f8f00',
  },
};

// Tipografías responsivas
const fonts = {
  body: "system-ui, sans-serif",
  heading: "Georgia, serif",
  mono: "Menlo, monospace",
};

const fontSizes = {
  sm: '0.875rem', // 14px en pantallas pequeñas
  md: '1rem',     // 16px en pantallas medianas
  lg: '1.125rem', // 18px en pantallas grandes
  xl: '1.25rem',  // 20px en pantallas más grandes
  '2xl': '1.5rem',// 24px para pantallas extra grandes
};

const theme = extendTheme({
  colors,
  fonts,
  fontSizes,
  breakpoints,
  styles: {
    global: {
      // Aplicar estilos globales responsivos
      body: {
        bg: 'cream.50',
        color: 'gray.800',
      },
      h1: {
        fontSize: { base: '2xl', md: '3xl', lg: '4xl' }, // Tipografía adaptativa
        color: 'lapisLazuli.500',
      },
      p: {
        fontSize: { base: 'sm', md: 'md', lg: 'lg' }, // Parrafos adaptativos
        color: 'gray.700',
      },
    },
  },
});

export default theme;
