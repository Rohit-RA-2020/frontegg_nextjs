import '../styles/globals.css';
import { FronteggProvider } from '@frontegg/nextjs';

const contextOptions = {
  baseUrl: '<URL_HERE>',
  clientId: '<CLIENTID_HERE>'
};

function MyApp({ Component, pageProps }) {
  return (
    <FronteggProvider
      contextOptions={contextOptions}
      hostedLoginBox={true}
    >
      <Component {...pageProps} />
    </FronteggProvider>
  );
}

export default MyApp;