import darkmode from './darkmode';
import regular from './regular';

const global = {
  font: {
    family: 'Roboto',
    size: '18px',
    height: '20px',
  },
};

export const theme = (isDarkMode) => isDarkMode
  ? { ...darkmode, global }
  : { ...regular, global };
