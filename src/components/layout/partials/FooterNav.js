import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#" className="list-reset-link">Contact</Link>
        </li>
        <li>
          <Link to="#" className="list-reset-link">About us</Link>
        </li>
        <li>
          <Link to="#" className="list-reset-link">FAQ's</Link>
        </li>
        <li>
          <Link to="#" className="list-reset-link">Support</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;