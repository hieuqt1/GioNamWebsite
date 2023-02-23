import HomePage from './components/Pages/HomePage/HomePage';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import MeetTheInstructorsPage from './components/Pages/AboutPage/MeetTheInstructorsPage/MeetTheInstructorsPage';
import HistoryPage from './components/Pages/HistoryPage/HistoryPage';
import OurPridePage from './components/Pages/OurPridePage/OurPridePage';
import JoinPage from './components/Pages/JoinPage/JoinPage';
import ContactPage from './components/Pages/ContactPage/ContactPage';
import PhilosophyPage from './components/Pages/AboutPage/PhilosophyPage/PhilosophyPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";


import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import ScrollToTop from './ScrollToTop';
 


function App() {
  return (
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/about/our-philosophy" element={<PhilosophyPage />} />
              <Route path="/about/meet-the-instructors" element={<MeetTheInstructorsPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/our-pride" element={<OurPridePage />} />
              <Route path="/join-us" element={<JoinPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
      </ScrollToTop>
        
      </BrowserRouter>
  )
}
export default App;
