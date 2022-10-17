import type { NextPage } from 'next';
import Head from 'next/head';
import Items from '../components/items/Items';
import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Advert Empire</title>
        <meta name="description" content="Items advert" />
      </Head>
      <Items />
    </Layout>
  );
};

export default Home;
