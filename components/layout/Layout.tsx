import { ReactNode } from 'react';
import styles from './layout.module.scss';

type LayoutProps = {
  readonly children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Layout;
