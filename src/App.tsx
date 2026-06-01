import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import './styles/main.scss';

import PortfolioHome from './sites/1-portfolio/homePage/PortfolioHome';
import Gallery from './sites/1-portfolio/gallery';
import Certificates from './sites/1-portfolio/certificates';
import ClassHome from './sites/7-online-classes/ClassHome';

import SareeHome from './sites/2-saree/SareeHome';



import SuitHome from './sites/3-suit/SuitHome';



import ComponentsHome from './sites/6-electronics-components/ComponentsHome';




import BeautyHome from './sites/4-beauty/BeautyHome';


// import BeautyHome from './sites/4-beauty/BeautyHome';


import CollageHome from './sites/5-collage-projects/CollageHome';
import ProjectDetail from './sites/5-collage-projects/ProjectDetail';
import StudentDashboard from './sites/5-collage-projects/StudentDashboard';


import LogIn from './sites/Login';
import SignUp from './sites/Signup';



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
        {/* ------------ LogIn SignUp ------------ */}

        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />


        {/* ------------ Portfolio ------------ */}

        <Route path="/" element={<PortfolioHome />} />
        <Route path="/portfolio-galary" element={<Gallery />} />
        <Route path="/portfolio-certificates" element={<Certificates />} />
        <Route path="/online-classes" element={<ClassHome />} />


        {/* ------------ Collage Project and Details ------------ */}

        <Route path="/projects" element={<CollageHome />} />
        <Route path="/ProjectDetail" element={<ProjectDetail />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />


        {/* ------------ Components ------------ */}

        <Route path="/components" element={<ComponentsHome />} />


        {/* ------------ Saree ------------ */}

        <Route path="/saree" element={<SareeHome />} />
        
        
        
        <Route path="/suits" element={<SuitHome />} />



        <Route path="/beauty" element={<BeautyHome />} />




      </Routes>
    </Router>
  );
}





export default App
