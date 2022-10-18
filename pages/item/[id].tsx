import type { GetStaticProps } from 'next';
import { getItemById, getItemsPaths } from '../../lib/items';
import { Item } from '../../types/item';
import styles from '../../components/items/item/item.module.scss';
import NoImage from '../../components/items/noImage/NoImage';

type ItemProps = {
  itemData: Item;
};

export default function ItemPage({ itemData: { image, name, locality, price, added } }: ItemProps) {
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
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      props: {},
    };
  }

  const itemData = getItemById(params.id as string);
  return {
    props: { itemData },
  };
};

export const getStaticPaths = async () => {
  const paths = getItemsPaths();
  return {
    paths,
    fallback: false,
  };
};
