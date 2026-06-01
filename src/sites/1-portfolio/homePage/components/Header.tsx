
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const items = [
        { label: "MySelf", path: "/" },
        { label: "Certificates & Letters", path: "/portfolio-certificates" },
        { label: "Classes", path: "/online-classes" },
        { label: "Download Resume", path: "/downloadCV" }];

    function navigateToPage(event: React.ChangeEvent<HTMLSelectElement>) {
        const urlTarget = event.target.value;
        if (urlTarget) {
            window.location.href = urlTarget;
        }
    }

    function getCurrentSelection() {
        const path = window.location.pathname;
        if (path.includes('/suits')) return '/suits';
        if (path.includes('/saree')) return '/saree';
        if (path.includes('/library')) return '/library';
        if (path.includes('/makeup')) return '/makeup';
        if (path.includes('/projects')) return '/projects';
        if (path.includes('/components')) return '/components';
        if (path.includes('/')) return '/';

        return 'portfolio'; // Kuch match nahi hua to 'MySelf' select rahega
    }


    return (
        <header className="header-container">
            <span className="logo">
                <span>ABCROB </span>
                <span className="logo-555">Nexus-555</span>
            </span>
            <ul className="list-header">
                {items.map((item, index) => (
                    <li key={index} className="header-list-items">
                        <Link to={item.path} style={{textDecoration: 'none', color:'inherit'}}>{item.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <select name="webSwitch" id="webSwitch" value={getCurrentSelection()} onChange={navigateToPage}>
                <option value="/" > MySelf </option>
                <option value="/library"> library </option>
                <option value="/suits"> Suits </option>
                <option value="/saree"> Saree </option>
                <option value="/makeup"> Make-Up </option>
                <option value="projects"> Projects </option>
                <option value="components"> Electronic Components </option>
            </select>
        </header>
    );
}


export default Header;