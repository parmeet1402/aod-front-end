import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div className="navigation">
      <ul className="navigation__box">
        <li className="navigation__item">
          <Link to="#" className="navigation__link">
            Developers
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="#" className="navigation__link">
            Explore
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="#" className="navigation__link">
            News
          </Link>
        </li>
      </ul>
    </div>
  );
}
