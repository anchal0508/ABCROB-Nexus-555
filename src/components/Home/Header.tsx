


function Header() {

    const items = ["MySelf", "Certificates & Letters", "Classes", "Download Resume", "Switch Websites"];

    return (
        <header className="header-container">
            <h1 className="logo">
                <span>ABCROB </span>
                <span className="logo-555">Nexus-555</span>
            </h1>
            <ul className="list-header">
                {items.map(item => <li className="header-list-items">{item}</li>)}
            </ul>
            <select name="webSwitch" id="webSwitch">
                <option value= "portfolio"> MySelf </option>
                <option value= "Suits"> Suits </option>
                <option value= "saree"> Saree </option>
                <option value= "makeup"> Make-Up </option>
                <option value= "projects"> Projects </option>
                <option value= "components"> Electronic Components </option>
            </select>
        </header>
    );
}


export default Header;