import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer-container">
            <span className="version-tag">Project version 5.5.5 | Transformation in Progress</span>
            <h3 className="footer-text">
                © Anchal Koshta | abcrob.in | Started in Delhi | Scaled Pan-India | 
                <Link to="/LoginAndSignup" className="footer-login-btn">LogIn</Link>
            </h3>
        </footer>
    );
}

export default Footer;
