import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import transparent_logo from "../../../assets/icons/gio-nam-transparent-logo.png";
import HeaderItem from "./HeaderItem";

//todo: break navigation items into smaller components
const headerItems = [
  {
    id: 0,
    title: "About Us",
    href: "/about",
    contents: [
      {
        id: 0,
        title: "Our Philosophy",
        href: "/about/our-philosophy",
      },
      {
        id: 1,
        title: "Meet the Instructors",
        href: "/about/meet-the-instructors",
      },
    ],
  },
  {
    id: 1,
    title: "History",
    href: "/history",
  },
  {
    id: 2,
    title: "Our Pride",
    href: "/our-pride",
  },
  {
    id: 3,
    title: "Join Us",
    href: "/join-us",
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  return (
    <div className="header">
      <div className="identity-container">
        <div>
          <Link to="/">
            <img className="header-image-item" src={transparent_logo} />
          </Link>
        </div>
        <div className="name-button navigation-item">
          <Link to="/">Gió Nam Múa Lân</Link>
        </div>
      </div>

      <div className="navigation-container">
        {headerItems.map((item) => (
          <HeaderItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
