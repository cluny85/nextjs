import useDarkMode from 'use-dark-mode';
import { Grommet } from 'grommet';
import { theme } from '../styles/theme/index';
// TODO: remove: import '../styles/globals.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const darkmode = useDarkMode(false);
  return (
    <Grommet
      theme={theme(darkmode.value)}
      themeMode={darkmode.value ? 'dark' : 'light'}
    >
      <Component {...pageProps} />
    </Grommet>
  );
}

export default MyApp
