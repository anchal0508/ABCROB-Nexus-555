import "./Transformation.scss";

import ProfileImage2 from "../Images/ProfileImage2.jpeg";
function Transformation() {
    return (<>
        <h2 className="home-heading">The 555 Transformation Journey</h2>
        <div className="jureny-555-main">

            <div className="details-555">
                <p><b>From Delhi Foundation to Pan-India impact</b></p>

                <p>Started ABCROB in <b>Delhi</b>, scaled technical workshops to <b>26</b> colleges across UP & Uttarakhand. Managed full-scale R&D in <b>Jabalpur</b> and corporate process optimization in <b>Indore</b>.</p>

                <p><b>The Automation Edge: </b> In my BPO tenure, I implemented Excel VBA Macros to automate repetitive workflows, turning manual chat processes into efficient algorithmic systems.
                </p>

                <p><i>Currently specialized in Node.js, PostgreSQL, and Scalable Backend Architectures.</i></p>
            </div>
            <div className="googleMap">
                <img src={ProfileImage2} alt="Verified Location Indore Center" width='300' height="200" />
            </div>

        </div>
    </>);
}

export default Transformation;