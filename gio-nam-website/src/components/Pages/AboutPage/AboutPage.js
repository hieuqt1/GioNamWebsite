import React from "react";
import "./AboutPage.css"
import Header from "../../PageSections/Header/Header";
import Button from '@mui/material/Button';
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
                
                <div className="aboutus-button-container">
                    <div className="buttons">
                        <Button sx={{"&:hover": {color: "white"}, marginRight: "4vh"}} variant="contained" color="secondary" disableElevation>Team Philosophy</Button>
                        <Button sx={{"&:hover": {color: "white"}}} variant="contained" color="secondary" disableElevation>Meet the Instructors</Button>
                    </div>
                    
                </div>

                <div className="aboutus-text-container">
                    <div className="text">
                    Located in Southern California, Gió Nam Múa Lân (Southern Wind Lion Dance, 南風醒獅團) was originally founded in the fall of 2004 as a fund-raising group for the Vietnamese Student Association (VSA) of the University of California, Irvine (UCI). The team has since developed new goals, but we still dance for the love and fun of the art throughout Orange County and the greater Southern California region for clients and events such as Hell's Kitchen, the Beyond the Pride Exhibitions (BPX) I and II, the Pasadena Tournament of Roses Parade, Swedish pop artist Iconapop, Google, and many more.  We are a nonprofit organization; all proceeds go to help support and maintain our lion dance equipment, as well as to support community events and initiatives.
                    </div>
                    <div className="text">
                    Our team hopes to create strong bonds, not only with our own teammates, but with other lion dancing groups across the country. Gathering our influence from the Four Winds, we combine traditional and modern styles of lion dancing to form our own unique way of presenting the art.  We are proud members of the USA Lion and Dragon Dance Sports Association.
                    </div>
                    <div className="text">
                    The tradition of lion dance has been part of East Asian culture for thousands of years. It is believed to wear off evil spirits and bring luck to whomever the lions are dancing for. In most lion dance performances, the lions will eat lettuce and a tangerine. The spread of good luck and fortune is represented by the lions spitting the leaves of the lettuce. By eating the tangerine and spitting out the peel, the lions spread happiness, longevity, and prosperity among the audience.
                    </div>
                    <div className="text">
                    "The south wind represents our Asian heritage, and like the wind, it has traveled a great distance from Asia to America." - Gió Nam Founder
                    </div>
                    <div className="text">
                    Let the Southern Wind Guide You.
                    </div>
                </div>
            </div>
            <footer></footer>
        </ThemeProvider>
        
    )
}