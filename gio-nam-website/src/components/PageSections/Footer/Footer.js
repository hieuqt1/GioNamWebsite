import React from "react";
import './Footer.css';
import association_logo from "../../../assets/icons/association-icon.png"
import instagram_logo from "../../../assets/icons/instagram-icon.png"
import facebook_logo from "../../../assets/icons/facebook-icon.png"


export default function MediaPage()
{
    return (
        <div className="footer">
            <p className="topText">Gió Nam Múa Lân | Southern Wind Lion Dance | 南風醒獅團</p>
            <a className="middleText" href="mailto:booking@gionam.org">booking@gionam.org</a> 
            <p className="bottomText">© 2004 – 2022. All rights reserved.</p>
            <div className="footer-image-links">
                    {/* target value opens link in new tab
                    rel value prevents tagnabbing (security concern) */}
                    <a href="https://www.liondanceusa.com/" target="_blank" rel="noopener noreferrer"><img className="footer-image-sports-association" src = {association_logo} /></a>
                    <a href="https://www.instagram.com/gionamsouthernwind/" target="_blank" rel="noopener noreferrer"><img className="footer-image-logo" src = {instagram_logo} /></a>
                    <a href="https://www.facebook.com/southernwindliondance" target="_blank" rel="noopener noreferrer"><img className="footer-image-logo" src = {facebook_logo} /></a>
            </div>
        </div>
    )
}