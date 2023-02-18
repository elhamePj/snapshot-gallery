import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <li>
        <NavLink className="navLink" to="/mountain">
          Mountain
        </NavLink>
      </li>
      <li>
        <NavLink className="navLink" to="/beaches">
          Beaches
        </NavLink>
      </li>
      <li>
        <NavLink className="navLink" to="/birds">
          Birds
        </NavLink>
      </li>
      <li>
        <NavLink className="navLink" to="/food">
          Food
        </NavLink>
      </li>
    </div>
  );
};

export default Navigation;
