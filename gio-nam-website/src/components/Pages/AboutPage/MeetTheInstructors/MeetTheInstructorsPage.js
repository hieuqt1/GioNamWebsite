import React from "react";
import "./MeetTheInstructorsPage.css"
import Header from "../../../PageSections/Header/Header";
import Footer from "../../../PageSections/Footer/Footer";
import { Card } from 'primereact/card';
import hieu_card from "../../../../assets/hieu-card.JPG"
import brian_card from "../../../../assets/brian-card.JPG"
import william_card from "../../../../assets/william-card.JPG"
import braden_card from "../../../../assets/braden-card.JPG"
import jimmy_card from "../../../../assets/jimmy-card.JPG"

export default function MeetTheInstructorsPage()
{
    const header = (image) => {
        return <img alt="Card" src={image} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    };

    return (
        <div className="mtipage-container">
            <Header />
            <div className="mtipage-hero-banner gio-nam-font">
                <h1>Meet the Instructors</h1>
            </div>
            <div className="mtipage-card-container">
                <div className="mtipage-text-container gio-nam-font">
                    <p>Each one of our instructors and senior members is invaluable in allowing our team to continue to pass on the traditions, art, and culture of lion dance and martial arts.
                    We are lucky to have such passionate people guiding our team.</p>
                    <p>Click on each instructor's image to go to their profile and learn more about their experiences. We hope to see you soon!</p>
                </div>
                <div className="mtipage-card-grid">
                    <Card title="Brian Le" header={header(brian_card)} subTitle="Coordinator" className="instructor-card">
                    </Card>
                    <Card title="Hieu Tran" header={header(hieu_card)} subTitle="Coordinator" className="instructor-card">
                    </Card>
                    <Card title="William Bui" header={header(william_card)} subTitle="Coordinator" className="instructor-card">
                    </Card>
                    <Card title="Bao-Linh Nguyen" subTitle="Instructor" className="instructor-card">
                    </Card>
                    <Card title="Braden Perez" header={header(braden_card)} subTitle="Instructor" className="instructor-card">
                    </Card>
                    <Card title="Dana Mendoza" subTitle="Instructor" className="instructor-card">
                    </Card>
                    <Card title="Frankii Tang" subTitle="Instructor" className="instructor-card">
                    </Card>
                    <Card title="Hai-Trang Nguyen" subTitle="Instructor" className="instructor-card">
                    </Card>
                    <Card title="Jimmy Tran" header={header(jimmy_card)} subTitle="Instructor" className="instructor-card">
                    </Card>
                    <Card title="Michael Mac" subTitle="Instructor" className="instructor-card">
                    </Card>
                    
                </div>
            </div>
            <Footer />
        </div>
            
        
        
    )
}