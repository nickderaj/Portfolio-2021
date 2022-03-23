import React from 'react';
import { useRouter } from 'next/router';
import '../styles/main.scss';
import Loader from '../components/Reusable/Loader';

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return <>{loading ? <Loader /> : <Component {...pageProps} />}</>;
}
