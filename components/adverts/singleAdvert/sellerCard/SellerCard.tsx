import styles from './sellerCard.module.scss';
import PhoneIcon from '../../../../public/icons/phone.svg';
import MailIcon from '../../../../public/icons/mail.svg';
import userIcon from '../../../../public/icons/userImg.jpg';
import Image from 'next/image';

const SellerCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h2 className={styles.sellerName}>Dariusz Lewlewlew</h2>
        <span className={styles.created}>Member since: 02.10.2022</span>
        <a className={styles.link}>Show profile</a>
        <a className={styles.link}>Show other adverts</a>
        <div className={styles.contact}>
          <PhoneIcon className={styles.icons} /> 111-222-333
        </div>
        <div className={styles.contact}>
          <MailIcon className={styles.icons} /> darolew@gmail.com
        </div>
      </div>
      <div className={styles.right}>
        <Image src={userIcon} alt="" width={85} height={85} />
      </div>
    </div>
  );
};

export default SellerCard;
