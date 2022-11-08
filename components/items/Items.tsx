import Item from './item/Item';
import styles from './items.module.scss';
import type Prisma from '@prisma/client';

type IndexProps = {
  items: Prisma.Advert[];
};

const Items = ({ items }: IndexProps) => {
  return (
    <ul className={styles.wrapper}>
      {items.map((item) => (
        <Item key={item.id} itemData={item} />
      ))}
    </ul>
  );
};

export default Items;
