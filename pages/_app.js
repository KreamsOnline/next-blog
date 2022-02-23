import { Router } from 'react-router-dom';
import Head from 'next/head';
import Layout from '../components/home-page/layout';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return ( 
          <Layout>
            <Head>
              <meta 
                name='viewport' content='width=device-width, intial-scale=1' 
              />
            </Head>
            <Component {...pageProps} />
          </Layout>
          
        )
};


