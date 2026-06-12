import React from "react";
import ProfileImage from "../../images/ProfileImage.jpeg"; 
// नोट: भविष्य में आप यहाँ अलग-अलग इमेज इम्पोर्ट कर सकती हैं, जैसे:
// import IoTImage from "../../images/iot-cert.jpeg";

interface TileItem { // स्पेलिंग ठीक की गई (TileIteam -> TileItem)
    id: number;
    title: string;     // स्मॉल 'string' कन्वेंशन का उपयोग
    subHeading?: string;
    desc: string;
    image: string;     
}

const proofData: TileItem[] = [
    { id: 1, title: "Letter of Thanks", desc: "Pan India Workshop Lead", image: ProfileImage },
    { id: 2, title: "Academic Recognition", desc: "300+ Colleges Event", image: ProfileImage }, // College ठीक किया गया
    { id: 3, title: "BPO Experience", desc: "Indore Corporate Letter", image: ProfileImage },
    { id: 4, title: "IoT Mastery", desc: "4+ Physical Lab Sessions", image: ProfileImage },
    { id: 5, title: "Workshop at College1", desc: "Hands-on Training ", subHeading: "Jabalpur Hub", image: ProfileImage }, // College ठीक किया गया
    { id: 6, title: "26 Colleges Webinar", desc: "Pan India Webinar 26 College Impact", image: ProfileImage }, // College ठीक किया गया
    { id: 7, title: "IoT Project Setup", desc: "Hardware Logic", subHeading: "Arduino & ESP8266", image: ProfileImage },
    { id: 8, title: "Moments & Certificates", desc: "Recognition", subHeading: "Letters & Momentos", image: ProfileImage }, // Mementos/Moments
];

const VerifiedProof: React.FC = () => {
    return (
        <section className="verified-proof-container">
            <h2 className="home-heading">Verified Proof of Work</h2>
            <div className="proof-grid">
                {proofData.map((item) => (
                    <div className="proof-card" key={item.id}>
                        <div className="img-wrapper">
                            {/* 🚨 महा-सुधार: अब हर कार्ड अपनी खुद की इमेज (item.image) दिखाएगा */}
                            <img src={item.image} alt={item.title} loading="lazy" />
                        </div>
                        <div className="card-content">
                            <h3 className="orange-title">{item.title}</h3>
                            {item.subHeading && <h4 className="sub-title">{item.subHeading}</h4>}
                            <p className="desc-text">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VerifiedProof;
