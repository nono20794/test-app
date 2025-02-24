import { Fragment, useState } from "react";
import "./header.css";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header({ handleSidebar }) {
  const location = useLocation();

  const troop = () => {
    const path = location.pathname;
    if (path.includes("atroop")) {
      return <p>סוללה א</p>;
    }
    if (path.includes("btroop")) {
      return <p>סוללה ב</p>;
    }
    if (path.includes("ctroop")) {
      return <p>סוללה ג</p>;
    }
    return <Fragment></Fragment>;
  };
  return (
    <header className="main-header">
      <div className="select-troop">{troop()}</div>
      <div className="logo-menu">
        <Link to="/" className="header-home-link">
          412#
        </Link>
        <button onClick={() => handleSidebar(true)}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}
