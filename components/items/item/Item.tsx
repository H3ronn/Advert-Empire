import type { Item as ItemType } from '../../../types/item';
import NoImage from '../noImage/NoImage';
import styles from './item.module.scss';

type ItemProps = {
  itemData: ItemType;
};

const Item = ({ itemData: { image, name, locality, price, added } }: ItemProps) => {
  return (
    <li className={styles.wrapper}>
      {image ? <img className={styles.image} src={image} alt="" /> : <NoImage />}
      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.locality}>{locality}</div>
        <div className={styles.price}>{price} zł</div>
        <div className={styles.added}>{added}</div>
      </div>
    </li>
  );
};

export default Item;
