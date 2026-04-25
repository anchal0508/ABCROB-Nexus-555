import "./Introduction.css";
import ProfileImage from "../Images/ProfileImage.jpeg";

function Introduction() {
    return (<>
        <div className="outer-container">
            <div className="profile">
                <p className="legacy">LEGACY TRANSFORMATION</p>
                <div className="name"><span className="Profile-name1">Anchal</span><span className="Profile-name2">Koshta</span></div>
                <span className="profile-discription">Founder of ABCROB Technologies | Backend Engineer | Automation Expert</span>
                <p className="intro-summary">10+ years of technical leadership. From hardware precision in <b>Delhi</b> to high-scale backend logic. I don't just write code; I build systems that evolve.</p>

                <div className="btn-container">
                    <a className="btn" href="#">GitHub Repos</a>
                    <a className="btn btn-white" href="#">Training Channel</a>
                </div>

            </div>
            <div className="photo">
                <img src={ProfileImage} width="200" height="220" alt="" />
            </div>
        </div>
    </>);
}

export default Introduction;