import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PortfolioHome from './sites/1-portfolio/homePage/PortfolioHome.tsx';
import SareeHome from './sites/2-saree/SareeHome.tsx';
import SuitHome from './sites/3-suit/SuitHome.tsx';
import BeautyHome from './sites/4-beauty/BeautyHome.tsx';
import CollageHome from './sites/5-collage-projects/CollageHome.tsx';
import ComponentsHome from './sites/6-electronics-components/ComponentsHome.tsx';
import ClassHome from './sites/7-online-classes/ClassHome.tsx';
import LogIn from './sites/LoginAndSignup.tsx';
import Certificates from './sites/1-portfolio/certificates.tsx';
import StudentDashboard from './sites/7-online-classes/StudentDashboard.tsx';
 

 
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
         <Route path='/' element={<PortfolioHome />}/>
          <Route path='/saree' element={<SareeHome />}/>
          <Route path='/suits' element={<SuitHome />}/>
          <Route path='/beauty' element={<BeautyHome />}/>
          <Route path='/projects' element={< CollageHome/>}/>
          <Route path='/components' element={< ComponentsHome/>}/>
          <Route path='/online-classes' element={< ClassHome/>}/>
          <Route path='/LoginAndSignup' element={< LogIn/>}/>
          <Route path='/portfolio-certificates' element={< Certificates/>}/>
          <Route path='/student-dashboard' element={< StudentDashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter >
  </React.StrictMode >,
)

