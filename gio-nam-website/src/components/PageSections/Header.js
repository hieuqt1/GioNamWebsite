import React from "react";
import './Header.css'
import transparent_logo from "../../assets/gio-nam-transparent-logo.png"


export default function Header ()
{
    return (
        <div className="header">
            <div className="identity-container">
                <div className="logo-button">
                    <img className="image-item" src = {transparent_logo} />
                </div>
                <div className="name-button">
                    <p>Gió Nam Múa Lân</p>
                </div>
            </div>
            <div className="navigation-container">
                <div className="navigation-item">
                    <p>Home</p>
                </div>
                <div className="navigation-item">
                    <p>Home</p>
                </div>
                <div className="navigation-item">
                    <p>Home</p>
                </div>
                <div className="navigation-item">
                    <p>Home</p>
                </div>
                <div className="navigation-item">
                    <p>Home</p>
                </div>
                <div className="navigation-item">
                    <p>Home</p>
                </div>
                <div className="navigation-item">
                    <p>Home</p>
                </div>
            </div>
           
            <div className="header-buttons">

            </div>
        </div>
    )
}