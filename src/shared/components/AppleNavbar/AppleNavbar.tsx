import { PropsWithChildren } from 'react';
import './AppleNavbarStyles.scss';

export type AppleNavbarProps = {};

const AppleNavbar: React.FC<PropsWithChildren<AppleNavbarProps>> = (props) => {
  const { children } = props;

  return (
    <nav className="apple-nav" role="navigation">
      <ul className="nav-items">{children}</ul>
    </nav>
  );
};

export default AppleNavbar;
