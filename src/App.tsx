 

import './styles/main.scss';
import Header from './sites/1-portfolio/homePage/components/Header';
import Footer from './sites/Footer';
import { Outlet } from 'react-router-dom';



 
function App() {
  return (
    <div className="base-MainContainer">
      <Header />
      <Outlet />
      <Footer />z
    </div>
  );
}





export default App;
