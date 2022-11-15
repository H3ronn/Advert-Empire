import Link from 'next/link';
import type Prisma from '@prisma/client';
import NoImage from '../noImage/NoImage';
import styles from './advertItem.module.scss';
import ObserveIcon from '../../../../public/icons/observe.svg';

type AdvertProps = {
  advertData: Prisma.Advert;
};

const AdvertItem = ({
  advertData: { id, images, title, location, price, createdAt },
}: AdvertProps) => {
  return (
    <li className={styles.wrapper}>
      <Link href={`/advert/${id}`}>
        <a>
          <div className={styles.imageContainer}>
            {images.length > 0 ? (
              <img className={styles.image} src={images[0]} alt="" />
            ) : (
              <NoImage />
            )}
            <div className={styles.observeButton}>
              <ObserveIcon />
            </div>
          </div>
          <div>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>$ {price}</div>
            <div className={styles.location}>{location}</div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default AdvertItem;
