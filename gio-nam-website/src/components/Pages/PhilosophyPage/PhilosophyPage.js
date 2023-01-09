import React from "react";
import "./PhilosophyPage.css"
import Header from "../../PageSections/Header/Header"; 
import Footer from "../../PageSections/Footer/Footer";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from '../../../theme'

export default function PhilosophyPage() {

    return (
        <ThemeProvider theme={theme}>
            <div className="philo-container gio-nam-font">
                <Header />
                <div className="aboutus-lion-line-up">
                    <h1>About Us</h1>
                </div>

                <div className="aboutus-button-container">
                    {/* <div className="buttons">
                        <Button sx={{ "&:hover": { color: "white" }, marginRight: "4vh" }} variant="contained" color="secondary" disableElevation>Team Philosophy</Button>
                        <Button sx={{ "&:hover": { color: "white" } }} variant="contained" color="secondary" disableElevation>Meet the Instructors</Button>
                    </div> */}

                </div>

                <div className="aboutus-text-container">
                    <p>Gió Nam Múa Lân aims to serve as both a cultural resource for traditional lion dance in the Orange County community as well as a mentorship and leadership program for its members. </p>
                    <p>Our team believes that connection to our roots is important so as not to forget where we came from. By spreading the knowledge, history, and tradition of lion dance, we aim to earn the respect and recognition of our community here in Southern California while giving back by spreading joy and good blessings and educating our audiences about the tradition and culture. Our team makes it a point to perform for as many schools and youth organizations as possible at little to no charge, and we teach any interested new member regardless of age, background, beliefs, or identity.</p>
                    <p>Our team's other primary motivation is to provide opportunities for members to grow professionally and personally. All of our students are encouraged to practice self-discipline both physically and mentally, and to hold themselves to the same standard to which they hold others. We believe in pushing our members to be well-rounded individuals, and regularly introduce our students to standard business etiquette practices and teach the necessary skills to strengthen not only our team but their own professional careers and endeavors.</p>
                    <p>Many of our members lack strong guidance in their home lives, and we work to create a family environment for our students with older members filling the role of mentors by providing advice, support, and compassion. This mentorship lasts not just while students are at UCI, but throughout life. We also schedule annual dinners, trips, and recreational events for our own team members to provide enrichment and experiences in their lives that they may not have otherwise. Our team also works to instill respect in our students both for themselves and for others regardless of background, beliefs, or identity. We regularly interact with other teams in the area to foster good relations and to build a friendly atmosphere. Above all, our team emphasizes hard work, honesty, open minds, and willingness to overcome differences in background, mindset, and culture to achieve common goals.</p>
                    
                </div>

                <Footer />
            </div>
        </ThemeProvider>

    )
}