import styles from './header.module.scss';
import SearchIcon from '../../public/icons/Search-icon.svg';
import LogoIcon from '../../public/icons/logo.svg';
import ProfileIcon from '../../public/icons/profile3.svg';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <button className={styles.button}>
        <SearchIcon className={styles.searchIcon} />
      </button>
      <LogoIcon className={styles.logoIcon} />
      <button className={styles.button}>
        <ProfileIcon />
      </button>
    </header>
  );
};

export default Header;
