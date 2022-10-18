import Link from 'next/link';
import type { Item as ItemType } from '../../../types/item';
import NoImage from '../noImage/NoImage';
import styles from './item.module.scss';

type ItemProps = {
  itemData: ItemType;
};

const Item = ({ itemData: { id, image, name, locality, price, added } }: ItemProps) => {
  return (
    <li className={styles.wrapper}>
      <Link href={`/item/${id}`}>
        <a>
          {image ? <img className={styles.image} src={image} alt="" /> : <NoImage />}
          <div>
            <div className={styles.name}>{name}</div>
            <div className={styles.locality}>{locality}</div>
            <div className={styles.price}>{price} zł</div>
            <div className={styles.added}>{added}</div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Item;
