import Item from './item/Item';
import { items as itemsData } from '../../data/items';
import styles from './items.module.scss';

const Items = () => {
  return (
    <ul className={styles.wrapper}>
      {itemsData.map((item) => (
        <Item key={item.id} itemData={item} />
      ))}
    </ul>
  );
};

export default Items;
