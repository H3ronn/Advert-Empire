import Link from 'next/link';
import type Prisma from '@prisma/client';
import NoImage from '../noImage/NoImage';
import styles from './advert.module.scss';

type AdvertProps = {
  advertData: Prisma.Advert;
};

const Advert = ({ advertData: { id, images, title, location, price, createdAt } }: AdvertProps) => {
  return (
    <li className={styles.wrapper}>
      <Link href={`/advert/${id}`}>
        <a>
          {images ? <img className={styles.image} src={images[0]} alt="" /> : <NoImage />}
          <div>
            <div className={styles.title}>{title}</div>
            <div className={styles.location}>{location}</div>
            <div className={styles.price}>{price} zł</div>
            {/* <div className={styles.added}>{createdAt}</div> */}
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Advert;
