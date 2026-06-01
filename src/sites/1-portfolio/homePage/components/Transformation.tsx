
import places_visited from "../../images/cities_visited.jpeg";
import cities_visited from "../../images/places_visited.jpeg";

function Transformation() {
    return (
        <section id="transformation-journey">

            <h2 className="home-heading">The <span className="orange">555</span> Transformation Journey</h2>
            <div className="journey-555-main">

                <div className="details-555">
                    <p><b>From Delhi Foundation to Pan-India impact</b></p>

                    <p>Started ABCROB in <b className="orange">Delhi</b>, scaled technical workshops to <b className="orange">300+</b> colleges across UP & Uttarakhand. Managed full-scale R&D in <b className="orange">Jabalpur</b> and corporate process optimization in <b className="orange">Indore</b>.</p>

                    <p><b className="orange">The Automation Edge: </b> In my BPO tenure, I implemented Excel VBA Macros to automate repetitive workflows, turning manual chat processes into efficient algorithmic systems.
                    </p>

                    <p><i>Currently specialized in Node.js, PostgreSQL, and Scalable Backend Architectures.</i></p>
                </div>
                <div className="googleMap">
                    <div className="img-textBox">
                        <div className="imgText orange">1000+ Place visits</div>
                        <img src={places_visited} alt="Verified Location Indore Center" />
                    </div>
                    <div className="img-textBox">
                        <div className="imgText orange">250+ City Visits</div>
                        <img src={cities_visited} alt="Verified Location Indore Center" />
                    </div>
                </div>

            </div>
        </section>);
}

export default Transformation;