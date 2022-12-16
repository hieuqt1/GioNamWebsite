import HomePage from './components/Pages/HomePage/HomePage';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import HistoryPage from './components/Pages/HistoryPage/HistoryPage';
import MediaPage from './components/Pages/MediaPage/MediaPage';
import JoinPage from './components/Pages/JoinPage/JoinPage';
import ContactPage from './components/Pages/ContactPage/ContactPage';
import WelcomePage from './components/Pages/WelcomePage/WelcomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
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
