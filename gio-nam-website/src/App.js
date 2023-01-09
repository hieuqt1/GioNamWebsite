import HomePage from './components/Pages/HomePage/HomePage';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import HistoryPage from './components/Pages/HistoryPage/HistoryPage';
import MediaPage from './components/Pages/MediaPage/MediaPage';
import JoinPage from './components/Pages/JoinPage/JoinPage';
import ContactPage from './components/Pages/ContactPage/ContactPage';
import WelcomePage from './components/Pages/WelcomePage/WelcomePage';
import PhilosophyPage from './components/Pages/PhilosophyPage/PhilosophyPage';
// components\Pages\PhilosophyPage\Philosophy.css
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/join-us" element={<JoinPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </BrowserRouter>
  )
}
export default App;
