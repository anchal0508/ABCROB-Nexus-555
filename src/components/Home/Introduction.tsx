import ProfileImage2 from "../../Images/ProfileImage2.jpeg";

function Introduction() {
    return (<>
        <div className="outer-container">
            <div className="profile">

                <p className="legacy">LEGACY TRANSFORMATION</p>

                <div className="name">
                    <span className="Profile-name1">Anchal</span>
                    <span className="Profile-name2">Koshta</span>
                </div>

                <span className="profile-discription">Founder of ABCROB Technologies | Backend Engineer | Automation Expert</span>

                <p className="intro-summary">10+ years of technical leadership. From hardware precision in
                    <b className="orange"> Delhi</b> to high-scale backend logic. I don't just write code; I build systems that evolve.
                </p>

                <div className="btn-container">
                    <a className="btn" href="https://github.com/anchal0508?tab=repositories" target="blanck">GitHub Repos</a>
                    <a className="btn btn-white" href="https://www.youtube.com/abcrob" target="blanck">Training Channel</a>
                </div>

            </div>
            <div className="photo">
                <img src={ProfileImage2} width="300" height="220" alt="" />
            </div>
        </div>
    </>);
}

export default Introduction;