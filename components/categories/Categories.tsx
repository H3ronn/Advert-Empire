import styles from './categories.module.scss';
import ChairIcon from '../../public/icons/Chair.svg';
import StarIcon from '../../public/icons/star.svg';
import TableIcon from '../../public/icons/Table.svg';

const Categories = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.category}>
        <StarIcon />
        <span className={styles.categoryName}>Observed</span>
      </div>
      <div className={styles.category}>
        <ChairIcon />
        <span className={styles.categoryName}>Chair</span>
      </div>
      <div className={styles.category}>
        <TableIcon />
        <span className={styles.categoryName}>Table</span>
      </div>
      <div className={styles.category}>
        <TableIcon />
        <span className={styles.categoryName}>Table</span>
      </div>
      <div className={styles.category}>
        <TableIcon />
        <span className={styles.categoryName}>Table</span>
      </div>
      <div className={styles.category}>
        <TableIcon />
        <span className={styles.categoryName}>Table</span>
      </div>
      <div className={styles.category}>
        <TableIcon />
        <span className={styles.categoryName}>Table</span>
      </div>
      <div className={styles.category}>
        <TableIcon />
        <span className={styles.categoryName}>Table</span>
      </div>
      <div className={styles.category}>
        <TableIcon />
        <span className={styles.categoryName}>Table</span>
      </div>
      <div className={styles.category}>
        <TableIcon />
        <span className={styles.categoryName}>Table</span>
      </div>
      <div className={styles.category}>
        <TableIcon />
        <span className={styles.categoryName}>Table</span>
      </div>
      <div className={styles.category}>
        <TableIcon />
        <span className={styles.categoryName}>Table</span>
      </div>
      <div className={styles.category}>
        <TableIcon />
        <span className={styles.categoryName}>Table</span>
      </div>
    </div>
  );
};

export default Categories;
