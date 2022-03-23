import Head from 'next/head';
import Footer from './Footer';
import Navigation from './Navigation';

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        {props.children}
      </main>

      <Footer />
    </>
  );
}
