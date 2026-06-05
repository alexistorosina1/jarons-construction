import { NavLink } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1>JARONS</h1>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#eab308" : "white",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
