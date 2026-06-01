import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import {useEffect} from 'react';

import './styles/main.scss';

import PortfolioHome from './sites/1-portfolio/homePage/PortfolioHome';
import Gallery from './sites/1-portfolio/gallery';
import Certificates from './sites/1-portfolio/certificates';
import ClassHome from './sites/7-online-classes/ClassHome';

import SareeHome from './sites/2-saree/SareeHome';
import CollageHome from './sites/5-collage-projects/CollageHome';
// import ShuitHome from './sites/3-suit/ShuitHome';
// import BeautyHome from './sites/4-beauty/BeautyHome';

 



function ThemeSelector() {
  const location = useLocation();

  useEffect(() => {
    let currentTheme = 'portfolio'; // Default theme

    if (location.pathname.startsWith('/saree')) currentTheme = 'saree';
    else if (location.pathname.startsWith('/suit')) currentTheme = 'suit';
    else if (location.pathname.startsWith('/beauty')) currentTheme = 'beauty';
    else if (location.pathname.startsWith('/college-projects')) currentTheme = 'college';
    else if (location.pathname.startsWith('/electronics')) currentTheme = 'components';
    else if (location.pathname.startsWith('/classes')) currentTheme = 'classes';

    // HTML root tag (<html data-theme="...">) par attribute set karega
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ThemeSelector /> {/* Background me theme auto-switch karega */}
      
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/portfolio-galary" element={<Gallery />} />
        <Route path="/portfolio-certificates" element={<Certificates />} />
        <Route path="/online-classes" element={<ClassHome />} />



        <Route path="/projects" element={<CollageHome />} />


        <Route path="/saree" element={<SareeHome />} />
       
     
      </Routes>
    </Router>
  );
}





export default App
