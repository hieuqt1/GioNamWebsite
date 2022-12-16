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
                    <h1>Gió Nam Múa Lân</h1>
                    <h2>Southern Wind Lion Dance</h2>
                    <h3>南風醒獅團 </h3>
                    <h4>Est. 2004</h4>
                    {/* button defaults to "primary" theme color */}
                    <Button className="welcomeButton" variant="outlined" style={{ border: '2px solid' }} onClick={welcomeButton}>Welcome</Button>
                </div>
            </div>
            
            </div>
        </ThemeProvider>

        
            
        
        
    )
}