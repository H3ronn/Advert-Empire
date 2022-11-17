import styles from './backIcon.module.scss';
import BackIconSvg from '../../public/icons/back.svg';

const BackIcon = ({ className }: any) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <BackIconSvg />
    </div>
  );
};

export default BackIcon;
