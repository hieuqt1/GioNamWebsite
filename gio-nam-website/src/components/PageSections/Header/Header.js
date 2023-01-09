import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import transparent_logo from "../../../assets/icons/gio-nam-transparent-logo.png"

//todo: break navigation items into smaller components

export default function Header ()
{
    return (
            <div className="header">
                <div className="identity-container">
                    <div>
                        <Link to="/">
                            <img className="header-image-item" src = {transparent_logo} />
                        </Link> 
                    </div>
                    <div className="name-button navigation-item">
                        <Link to="/">
                            Gió Nam Múa Lân
                        </Link>                     
                    </div>
                </div>
                <div className="navigation-container">
                    <div className="dropdown">
                        <div className="dropdown-header page-button navigation-item">
                            <Link to="/about" className="link-size">About Us
                                <ExpandMoreIcon fontSize="small" className="icon-style"/>
                            </Link>
                        </div>
                        <div className="dropdown-content">
                            <Link to="/about">
                                About Us
                            </Link> 
                            <Link to="/philosophy">
                                Our Philosophy
                            </Link> 
                            <Link to="/about">
                                Meet the Instructors
                            </Link> 
                        </div>
                    </div>
                    <div className="page-button navigation-item">
                        <Link to="/history">
                            History
                        </Link> 
                    </div>
                    <div className="dropdown">
                        <div className="dropdown-header page-button navigation-item">
                            <Link to="/media" className="link-size">Media
                                <ExpandMoreIcon fontSize="small" className="icon-style"/>
                            </Link>
                        </div>
                        <div className="dropdown-content">
                            <Link to="/media">
                                Gallery
                            </Link> 
                            <Link to="/media">
                                Our Pride
                            </Link> 
                        </div>
                    </div>
                    <div className="page-button navigation-item">
                        <Link to="/join-us">
                            Join Us
                        </Link> 
                    </div>
                    <div className="page-button navigation-item">
                        <Link to="/contact">
                            Contact
                        </Link> 
                    </div>
                    {/* replace Search with magnifying glass and capability */}
                    <div className="page-button navigation-item">
                        <p>Search</p>
                    </div>
                </div>
            </div>
        
    )
}