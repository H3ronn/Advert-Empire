import styles from './noImage.module.scss';

const NoImage = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src="images/placeholder-image.png" alt="" />
    </div>
  );
};

export default NoImage;
