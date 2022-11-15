import AdvertItem from './advertItem/AdvertItem';
import styles from './advertList.module.scss';
import type Prisma from '@prisma/client';

type IndexProps = {
  adverts: Prisma.Advert[];
};

const AdvertList = ({ adverts }: IndexProps) => {
  return (
    <ul className={styles.wrapper}>
      {adverts.map((advert) => (
        <AdvertItem key={advert.id} advertData={advert} />
      ))}
      {adverts.map((advert) => (
        <AdvertItem key={advert.id} advertData={advert} />
      ))}
      {adverts.map((advert) => (
        <AdvertItem key={advert.id} advertData={advert} />
      ))}
      {adverts.map((advert) => (
        <AdvertItem key={advert.id} advertData={advert} />
      ))}
      {adverts.map((advert) => (
        <AdvertItem key={advert.id} advertData={advert} />
      ))}
      {adverts.map((advert) => (
        <AdvertItem key={advert.id} advertData={advert} />
      ))}
    </ul>
  );
};

export default AdvertList;
