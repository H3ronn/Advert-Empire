import Link from 'next/link';
import type Prisma from '@prisma/client';
import NoImage from '../noImage/NoImage';
import styles from './item.module.scss';

type ItemProps = {
  itemData: Prisma.Advert;
};

const Item = ({ itemData: { id, images, title, location, price, createdAt } }: ItemProps) => {
  return (
    <li className={styles.wrapper}>
      <Link href={`/item/${id}`}>
        <a>
          {images ? <img className={styles.image} src={images[0]} alt="" /> : <NoImage />}
          <div>
            <div className={styles.name}>{title}</div>
            <div className={styles.locality}>{location}</div>
            <div className={styles.price}>{price} zł</div>
            {/* <div className={styles.added}>{createdAt}</div> */}
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Item;
