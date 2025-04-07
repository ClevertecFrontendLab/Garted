import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
    sm: '361px',
    md: '769px',
    lg: '1440px',
    xl: '1920px',
};

const theme = extendTheme({
    breakpoints,
    fonts: {
        heading: "'Inter', sans-serif",
        body: "'Inter', sans-serif",
    },
});

export default theme;
