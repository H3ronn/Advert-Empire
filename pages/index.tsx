import { PrismaClient } from '@prisma/client';
import type { NextPage } from 'next';
import Head from 'next/head';
import AdvertList from '../components/adverts/advertList/AdvertsList';
import Layout from '../components/layout/Layout';
import type Prisma from '@prisma/client';
import Header from '../components/header/Header';
import Categories from '../components/categories/Categories';

type IndexProps = {
  adverts: Prisma.Advert[];
};

const Home: NextPage<IndexProps> = ({ adverts }) => {
  return (
    <Layout>
      <Head>
        <title>Advert Empire</title>
        <meta name="description" content="Adverts" />
      </Head>
      <Header />
      <Categories />
      <AdvertList adverts={adverts} />
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const prisma = new PrismaClient();
  let adverts = await prisma.advert.findMany();

  return {
    props: { adverts },
    revalidate: 10,
  };
};
