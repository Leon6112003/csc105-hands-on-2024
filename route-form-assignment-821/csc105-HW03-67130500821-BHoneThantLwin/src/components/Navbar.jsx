import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" p-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/"
            className="text-black
             border-2
             rounded-lg px-4 py1
             "
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className="text-black
           border-2 rounded-lg px-4 py1"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fav"
            className="text-black
           border-2 rounded-lg px-4 py1"
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
