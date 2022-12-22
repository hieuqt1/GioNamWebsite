import React from "react";
import "./AboutPage.css"
import Header from "../../PageSections/Header/Header";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from '../../../theme'

export default function AboutPage()
{
    
    return (
        <ThemeProvider theme={theme}>
            <div className="aboutus-container gio-nam-font">
                <Header />
                <div className="aboutus-lion-line-up">
                    <h1>About Us</h1>
                </div>
                
                <div className="aboutus-text-container">
                    <h2> Spacer Testing </h2>
                </div>
            </div>
        </ThemeProvider>
        
    )
}