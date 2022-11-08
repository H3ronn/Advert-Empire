import { PrismaClient } from '@prisma/client';
import type { NextPage } from 'next';
import Head from 'next/head';
import Items from '../components/items/Items';
import Layout from '../components/layout/Layout';
import type Prisma from '@prisma/client';

type IndexProps = {
  adverts: Prisma.Advert[];
};

const Home: NextPage<IndexProps> = ({ adverts }) => {
  console.log(adverts);
  return (
    <Layout>
      <Head>
        <title>Advert Empire</title>
        <meta name="description" content="Items advert" />
      </Head>
      <Items items={adverts} />
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
