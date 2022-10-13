import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Advert Empire</title>
        <meta name="description" content="Items advert" />
      </Head>
      <h1>Welcome to Advert Empire!</h1>
    </Layout>
  );
};

export default Home;
