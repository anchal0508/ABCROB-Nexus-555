import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    
    // 🚀 मोबाइल मेनू को ऑन/ऑफ करने के लिए केवल एक स्टेट वेरिएबल
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const items = [
        { label: "MySelf", path: "/" },
        { label: "Certificates & Letters", path: "/portfolio-certificates" },
        { label: "Classes", path: "/online-classes" },
        { label: "Download Resume", path: "/downloadCV" }
    ];

    // 1. Current Active Path Evaluator (Astro-Numerology Dynamic Matrix)
    function getCurrentSelection() {
        const path = location.pathname;

        // Strict Dashboard node validation
        if (path.includes('/dashboard')) return '/dashboard';

        // Core E-Commerce Business Routes (Saree, Suits, Beauty Assets)
        if (path.includes('/saree')) return '/saree';
        if (path.includes('/suits')) return '/suits';
        if (path.includes('/beauty')) return '/beauty';

        // Core Engineering Platform Routes
        if (path.includes('/projects')) return '/projects';
        if (path.includes('/components')) return '/components';
        if (path.includes('/online-classes')) return '/online-classes';

        // Absolute Root Target for Identity (Home Node)
        return '/';
    }

    // 2. Zero-Jerk LightSpeed Navigation Controller (FIXED TYPE AND SCOPE BINDING)
    function navigateToPage(event: React.ChangeEvent<HTMLSelectElement>) {
        // Safe variable extraction to prevent race condition during DOM re-renders
        const targetPath = event.target.value;

        // Verifies that the path is active and routes using React Router navigate parameter
        if (targetPath) {
            navigate(targetPath);
            setIsMenuOpen(false); // Direct execution without nested typeof fallback
        }
    }

    return (
        /* 🚨 पैरेंट कंटेनर में केवल क्लास जुड़ेगी, स्ट्रक्चर बिल्कुल वही रहेगा */
        <header className={`header-container ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
            <span className="logo">
                <span className="logo-text">ABCROB </span>
                <span className="logo-555">Nexus-555</span>
            </span>

            {/* 🍔 हैमबर्गर आइकॉन - बिना किसी रैपर के सीधे सिबलिंग की तरह काम करेगा */}
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
                <Link to="/LoginAndSignup" className="login-btn" onClick={() => setIsMenuOpen(false)}>LogIn</Link>
                <select name="webSwitch" id="webSwitch" value={getCurrentSelection()} onChange={navigateToPage}>
                    <option value="/"> MySelf (Identity) </option>
                    <option value="/saree"> VastraMala Saree Core </option>
                    <option value="/suits"> Kriti Core Suits </option>
                    <option value="/beauty"> Aura Matrix Beauty </option>
                    {/* Pure Engineering Core Layouts */}
                    <option value="/projects"> Tech Ecosystem </option>
                    <option value="/components"> IoT Edge Hardware </option>
                    <option value="/online-classes"> Training Matrix </option>
                </select>
            </div>
        </header>
    );
}

export default Header;
