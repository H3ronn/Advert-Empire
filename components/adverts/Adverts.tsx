import Advert from './advert/Advert';
import styles from './adverts.module.scss';
import type Prisma from '@prisma/client';

type IndexProps = {
  adverts: Prisma.Advert[];
};

const Adverts = ({ adverts }: IndexProps) => {
  return (
    <ul className={styles.wrapper}>
      {adverts.map((advert) => (
        <Advert key={advert.id} advertData={advert} />
      ))}
      {adverts.map((advert) => (
        <Advert key={advert.id} advertData={advert} />
      ))}
      {adverts.map((advert) => (
        <Advert key={advert.id} advertData={advert} />
      ))}
      {adverts.map((advert) => (
        <Advert key={advert.id} advertData={advert} />
      ))}
      {adverts.map((advert) => (
        <Advert key={advert.id} advertData={advert} />
      ))}
      {adverts.map((advert) => (
        <Advert key={advert.id} advertData={advert} />
      ))}
    </ul>
  );
};

export default Adverts;
