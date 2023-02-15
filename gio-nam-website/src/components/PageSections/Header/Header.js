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
        title: "About Us",
        href: "/about",
      },
      {
        id: 1,
        title: "Our Philosophy",
        href: "/about",
      },
      {
        id: 2,
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
    title: "Join Us",
    href: "/join-us",
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
        {/* <div className="dropdown">
          <div className="dropdown-header page-button navigation-item">
            <Link to="/about" className="link-size">
              About Us
              <ExpandMoreIcon fontSize="small" className="icon-style" />
            </Link>
          </div>
          <div className="dropdown-content">
            <Link to="/about">About Us</Link>
            <Link to="/about">Our Philosophy</Link>
            <Link to="/about/meet-the-instructors">Meet the Instructors</Link>
          </div>
        </div>
        <div className="page-button navigation-item">
          <Link to="/history">History</Link>
        </div>
        <div className="dropdown">
          <div className="dropdown-header page-button navigation-item">
            <Link to="/media" className="link-size">
              Media
              <ExpandMoreIcon fontSize="small" className="icon-style" />
            </Link>
          </div>
          <div className="dropdown-content">
            <Link to="/media">Gallery</Link>
            <Link to="/media">Our Pride</Link>
          </div>
        </div>
        <div className="page-button navigation-item">
          <Link to="/join-us">Join Us</Link>
        </div>
        <div className="page-button navigation-item">
          <Link to="/contact">Contact</Link>
        </div> */}
        {/* replace Search with magnifying glass and capability */}
        {/* <div className="page-button navigation-item">
          <p>Search</p>
        </div> */}
      </div>
    </div>
  );
}
