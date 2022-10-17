import type { Item as ItemType } from '../../../types/item';
import styles from './item.module.scss';

type ItemProps = {
  itemData: ItemType;
};

const Item = ({ itemData: { image, name, locality, price, added } }: ItemProps) => {
  return (
    <li className={styles.wrapper}>
      <img className={styles.image} src={image} alt="" />
      <div className={styles.name}>{name}</div>
      <div className={styles.locality}>{locality}</div>
      <div className={styles.price}>{price} zł</div>
      <div className={styles.added}>{added}</div>
    </li>
  );
};

export default Item;
