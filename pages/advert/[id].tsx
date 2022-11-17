import type { GetStaticProps } from 'next';
import { getAdvertById, getAdvertsPaths } from '../../lib/adverts';
import styles from '../../components/adverts/advertList/advertList.module.scss';
import type Prisma from '@prisma/client';
import NoImage from '../../components/adverts/advertList/noImage/NoImage';
import SingleAdvert from '../../components/adverts/singleAdvert/SingleAdvert';

type AdvertPageProps = {
  advertData: Prisma.Advert;
};

export default function AdvertPage({ advertData }: AdvertPageProps) {
  return <SingleAdvert advert={advertData} />;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      props: {},
    };
  }

  const advertData = await getAdvertById(params.id as string);
  return {
    props: { advertData },
  };
};

export const getStaticPaths = async () => {
  const paths = await getAdvertsPaths();
  return {
    paths,
    fallback: false,
  };
};
