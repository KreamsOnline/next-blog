import { Router } from 'react-router-dom';
import Layout from '../components/home-page/layout';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return ( 
          <Layout>
            <Component {...pageProps} />
          </Layout>
          
        )
};


