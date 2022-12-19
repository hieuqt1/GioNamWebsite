import React from "react";
import "./HomePage.css"
import Header from "../../PageSections/Header/Header";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from '../../../theme'
import Carousel from "../../CustomComponents/Carousel";

import welcome_image_1 from "../../../assets/team.JPG"
import welcome_image_2 from "../../../assets/wedding-1.JPG"
import welcome_image_3 from "../../../assets/wedding-2.JPG"


export default function HomePage()
{
    let navigate = useNavigate();
    function welcomeButton() {
        let path = '/welcome';
        navigate(path)
    }

    const image_list = [
        welcome_image_1, welcome_image_2, welcome_image_3
    ]

    return (
        <ThemeProvider theme={theme}>
            <div className="homepage-container">
                <Header />
                <div className="homepage-hero-banner gio-nam-font">
                    <div className="homepage-hero-text">
                        <h1>Gió Nam Múa Lân</h1>
                        <h2>Southern Wind Lion Dance</h2>
                        <h3>南風醒獅團 </h3>
                        <h4>Est. 2004</h4>
                        {/* button defaults to "primary" theme color */}
                        <Button className="welcomeButton" variant="outlined" style={{ border: '2px solid' }} onClick={welcomeButton}>Welcome</Button>
                    </div>
                </div>
                {/* mui components arent really compatible with className so cant throw alignSelf and justifyContent into className  
                    other properties may vary*/}
                <div className="welcome-container">
                    <div className="left-column">
                        <Carousel imageList={image_list} />
                    </div>
                    <div className="right-column gio-nam-font">
                            <h1 className="welcome-header">Welcome</h1>
                            <div className="welcome-text">
                                <p>
                                We are a nonprofit organization located in Orange County, CA, specializing in the traditional art of lion dance.  
                                Founded in 2004, we have proudly continued to spread awareness of lion dance traditions ever since.<br></br>
                                <br></br>
                                We are inaugural members of the USA Dragon and Lion Dance Sports Association.
                                </p>
                            </div>
                            <Button className="welcome-button" sx={{"&:hover": {color: "white"}, marginBottom: "50px"}} variant="contained" color="secondary" disableElevation>Learn More</Button>
                            <Button className="welcome-button" sx={{"&:hover": {color: "white"}}} variant="contained" color="secondary" disableElevation>Contact Us</Button>

                    </div>
                    
                </div>          
            </div>
        </ThemeProvider>
    )
}