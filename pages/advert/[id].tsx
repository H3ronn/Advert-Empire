import type { GetStaticProps } from 'next';
import { getAdvertById, getAdvertsPaths } from '../../lib/adverts';
import styles from '../../components/adverts/advertList/advertList.module.scss';
import type Prisma from '@prisma/client';
import NoImage from '../../components/adverts/advertList/noImage/NoImage';

type AdvertPageProps = {
  advertData: Prisma.Advert;
};

export default function AdvertPage({
  advertData: { images, content, location, price, title, createdAt },
}: AdvertPageProps) {
  return (
    <li className={styles.wrapper}>
      {images ? <img className={styles.image} src={images[0]} alt="" /> : <NoImage />}
      <div>
        <div className={styles.name}>{title}</div>
        <div className={styles.name}>{content}</div>
        <div className={styles.locality}>{location}</div>
        <div className={styles.price}>{price} zł</div>
        <div
          className={styles.added}
        >{`${createdAt.getDay()}.${createdAt.getMonth()}.${createdAt.getFullYear()} ${createdAt.getHours()}:${createdAt.getMinutes()}`}</div>
      </div>
    </li>
  );
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
