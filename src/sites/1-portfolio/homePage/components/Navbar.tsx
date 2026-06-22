import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../../AuthContext'; 

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, logout } = useAuth(); 
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const items = [
        { label: "MySelf", path: "/" },
        { label: "Certificates & Letters", path: "/portfolio-certificates" },
        { label: "Classes", path: "/online-classes" },
        { label: "Download Resume", path: "/downloadCV" }
    ];

    function getCurrentSelection() {
        const path = location.pathname;
        if (path.includes('/dashboard')) return '/dashboard';
        if (path.includes('/saree')) return '/saree';
        if (path.includes('/suits')) return '/suits';
        if (path.includes('/beauty')) return '/beauty';
        if (path.includes('/projects')) return '/projects';
        if (path.includes('/components')) return '/components';
        if (path.includes('/online-classes')) return '/online-classes';
        return '/';
    }

    function navigateToPage(event: React.ChangeEvent<HTMLSelectElement>) {
        const targetPath = event.target.value;
        if (targetPath) {
            navigate(targetPath);
            setIsMenuOpen(false);
        }
    }

    const handleLogoutClick = async () => {
        try {
            await logout(); 
            setIsMenuOpen(false); 
            navigate('/LoginAndSignup');
        } catch (error) {
            console.error("Navigation after logout failed", error);
        }
    };

    return (
        <header className={`header-container ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
            <span className="logo">
                <span className="logo-text">ABCROB </span>
                <span className="logo-555">Nexus-555</span>
            </span>

            <button className="mobile-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>

            <ul className="list-header">
                {items.map((item, index) => (
                    <Link to={item.path} className="nav-link" key={index} onClick={() => setIsMenuOpen(false)}>
                        <li className="header-list-items">
                            {item.label}
                        </li>
                    </Link>
                ))}
            </ul>

            <div className="side-header">
                {user ? (
                    <div className="user-profile-badge">
                        <img 
                            src={user.profilePhoto || `https://dicebear.com{user.name}`} 
                            alt="Profile" 
                            className="user-avatar"
                        />
                        <span className="user-name">{user.name}</span>
                        <button onClick={handleLogoutClick} className="logout-compact-btn" title="Logout">
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link to="/LoginAndSignup" className="login-btn" onClick={() => setIsMenuOpen(false)}>LogIn</Link>
                )}

                <select name="webSwitch" id="webSwitch" value={getCurrentSelection()} onChange={navigateToPage}>
                    <option value="/"> MySelf (Identity) </option>
                    <option value="/saree"> VastraMala Saree Core </option>
                    <option value="/suits"> Kriti Core Suits </option>
                    <option value="/beauty"> Aura Matrix Beauty </option>
                    <option value="/projects"> Tech Ecosystem </option>
                    <option value="/components"> IoT Edge Hardware </option>
                    <option value="/online-classes"> Training Matrix </option>
                </select>
            </div>
        </header>
    );
}

export default Navbar;
