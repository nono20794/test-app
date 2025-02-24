import {
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineCloseSquare,
  AiOutlineHome,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import "./SideBar.css";
import { GiArtilleryShell, GiRallyTheTroops } from "react-icons/gi";
import { FaStroopwafel } from "react-icons/fa";

export default function SidebarContent({ setSidebar }) {
  const activeStyle = {
    borderRight: "2px solid var(--primary)",
    backgroundColor: "var(--sidebar-bacground)",
    // borderBottom: "2px solid var(--primary)",
  };
  return (
    <div className="sidebar-container">
      <Link to="#" className="menu-close">
        <AiOutlineClose onClick={() => setSidebar(false)} />
      </Link>
      <NavLink
        to="/"
        className="nav-link"
        onClick={() => setSidebar(false)}
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <span>עמוד בית</span>
        <AiOutlineHome />
      </NavLink>

      <NavLink
        to="atroop"
        className="nav-link"
        onClick={() => setSidebar(false)}
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <span>סוללה א</span>
        <GiRallyTheTroops />
      </NavLink>

      <NavLink
        to="btroop"
        className="nav-link"
        onClick={() => setSidebar(false)}
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <span>סוללה ב</span>
        <GiArtilleryShell />
      </NavLink>

      <NavLink
        to="ctroop"
        className="nav-link"
        onClick={() => setSidebar(false)}
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <span>סוללה ג</span>
        <FaStroopwafel />
      </NavLink>
    </div>
  );
}
