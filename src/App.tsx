import './styles/main.scss';
import Navbar from './sites/1-portfolio/homePage/components/Navbar';
import Footer from './sites/Footer';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <div className="base-MainContainer">
      <AuthProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </AuthProvider> 
    </div>
  );
}

export default App;
