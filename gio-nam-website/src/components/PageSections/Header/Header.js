import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'
import transparent_logo from "../../../assets/gio-nam-transparent-logo.png"

export default function Header ()
{
    return (
            <div className="header">
                <div className="identity-container">
                    <div className="logo-button">
                        <Link to="/">
                            <img className="image-item" src = {transparent_logo} />
                        </Link> 
                    </div>
                    <div className="name-button navigation-item">
                        <Link to="/">
                            Gió Nam Múa Lân
                        </Link>                     
                    </div>
                </div>
                <div className="navigation-container">
                    <div className="page-button navigation-item">
                        <Link to="/about">
                            About Us
                        </Link> 
                    </div>
                    <div className="page-button navigation-item">
                        <Link to="/history">
                            History
                        </Link> 
                    </div>
                    <div className="page-button navigation-item">
                        <Link to="/media">
                            Media
                        </Link> 
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