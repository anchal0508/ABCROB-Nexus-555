import "./VerifiedProof.scss";
import ProfileImage from "../Images/ProfileImage.jpeg";

interface TileIteam {
    id: number;
    title: String;
    subHeading?:String;
    desc: String;
    image: String;
};

const proofData: TileIteam[] = [
    { id: 1, title: "Letter of Thanks", desc: "Pan India Workshop Lead", image: ProfileImage },
    { id: 2, title: "Academic Recognition", desc: "300+ Collages Event", image: ProfileImage },
    { id: 3, title: "BPO Experience", desc: "Indore Corporate Letter", image: ProfileImage },
    { id: 4, title: "IoT Mastery", desc: "4+ Physical Lab Sessions", image: ProfileImage },
    { id: 5, title: "Workshop at Collage1", desc: "Hands-on Training ",subHeading:" Jabalpur Hub", image: ProfileImage },
    { id: 6, title: "26 Collages Webinar", desc: "Pan India Webinar 26 collage Impact", image: ProfileImage },
    { id: 7, title: "IoT Project Setup", desc: "Hardware Logic", subHeading: "Arduino & ESP8266", image: ProfileImage },
    { id: 8, title: "Momentos & Certificates", desc: "Recognition",subHeading:" Letters &  Momentos", image: ProfileImage },
];
const VerifiedProof: React.FC = () => {
    return (
        <section className="verified-proof-container">
            <h2 className="home-heading"> Verified Proof of Work </h2>
            <div className="proof-grid">
                {
                    proofData.map((item) => (
                        <div className="proof-card" key={item.id}>
                            <div className="img-wrapper">
                                <img src={ProfileImage} alt="" />
                            </div>
                            <div className="card-content">
                                <h3 className="orange">{item.title}</h3>
                                {item.subHeading && <h4 className="sub-title">{item.subHeading}</h4>}
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}

            </div>
        </section>
    );
}

export default VerifiedProof;