import styles from './singleAdvert.module.scss';
import type Prisma from '@prisma/client';
import NoImage from '../advertList/noImage/NoImage';
import StarIcon from '../../../public/icons/star.svg';
import { getFormatedDate } from '../../../utils/getFormatedDate';
import SellerCard from './sellerCard/SellerCard';
import BackIcon from '../../backIcon/BackIcon';

type AdvertPageProps = {
  advert: Prisma.Advert;
};

const SingleAdvert = ({
  advert: { images, content, location, price, title, createdAt },
}: AdvertPageProps) => {
  return (
    <div className={styles.wrapper}>
      <BackIcon className={styles.backIcon} />
      <div className={styles.imageContainer}>
        {images ? <img className={styles.image} src={images[0]} alt="" /> : <NoImage />}
      </div>
      <div className={styles.informations}>
        <span className={styles.added}>Added: {getFormatedDate(createdAt)}</span>
        <address className={styles.locality}>{location} </address>
        <h1 className={styles.title}>{title}</h1>
        <b className={styles.price}>$ {price}</b>
        <p className={styles.content}>{content}</p>
      </div>
      <div className={styles.buttonsWrapper}>
        <button className={styles.favoriteButton}>
          <StarIcon />
        </button>
        <button className={styles.messageButton}>SendMessage</button>
      </div>
      <SellerCard />
    </div>
  );
};

export default SingleAdvert;
