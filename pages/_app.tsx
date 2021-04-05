import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Windmill } from '@windmill/react-ui';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Windmill>
      <Component {...pageProps} />
    </Windmill>
  );
};

export default MyApp;
