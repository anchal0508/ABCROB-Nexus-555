import "./Header.css";



function Header() {

    const items = ["Journey", "Impact", "Project", "Download Resume"];

    return (
        <header className="header-container">
            <h1 className="logo"><span>ABCROB </span><span className="logo-555">Nexus-555</span></h1>
            <ul className="list-header">
                {items.map(item => <li className="header-list-items">{item}</li>)}
            </ul>
        </header>
    );
}


export default Header;