import React from "react";
import "./HomePage.css"
import Header from "../../PageSections/Header";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from '../../../theme'


export default function HomePage()
{
    let navigate = useNavigate();
    function welcomeButton() {
        let path = '/welcome';
        navigate(path)
    }

    return (
        <ThemeProvider theme={theme}>
            <div>
            <div className="homepage-container">
                <Header />
            </div>
            <div className="homepage-hero-banner">
                <div className="homepage-hero-text">
                    <h2>Let the South Wind guide you</h2>
                    {/* button defaults to "primary" theme color */}
                    <Button className="welcomeButton" variant="outlined" style={{ border: '2px solid' }} onClick={welcomeButton}>Welcome</Button>
                </div>
            </div>
            
            </div>
        </ThemeProvider>

        
            
        
        
    )
}