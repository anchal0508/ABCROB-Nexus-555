import React from "react";
import places_visited from "../../images/places_visited.jpeg";
// भविष्य में आप यहाँ अपनी अन्य प्रोजेक्ट इमेजेस इम्पोर्ट कर सकती हैं, जैसे:
// import nexusEngineImg from "../../images/nexus-engine.jpeg";

interface TileItem { // 'TileIteam' को ठीक किया गया
    id: number;
    cardId: string;
    className: string;
    title: string;
    desc: string;
    link?: string;
    image?: string; 
}

const liveProject: TileItem[] = [
    { 
        id: 1, 
        cardId: "card1", 
        className: "card", 
        title: "ABCROB Nexus Engine", 
        desc: "A full-scale Production-Ready API managing Identity, Data Streams, and Security Built on Node.js and Supabase." 
        // यहाँ आप nexusEngineImg पास कर सकती हैं
    },
    { 
        id: 2, 
        cardId: "card2", 
        className: "card", 
        title: "AutoLogic-555 Suite", 
        desc: "Transitioning BPO Process Automation into a Scalable Web-based Microservice driven by high-speed logic." 
    },
    { 
        // केवल तीसरे प्रोजेक्ट में नक्शा अच्छा लगेगा क्योंकि यह आपकी यात्रा और पुराने VBA काम को दिखाता है
        id: 3, 
        cardId: "card3", 
        className: "card", 
        title: "VBA Automation Suite", 
        desc: "Custom macros developed during BPO tenure to automate complex data entry, optimizing enterprise chat logs.", 
        image: places_visited 
    }
];

const Projects: React.FC = () => {
    return (
        <section className="project-container">
            <h2 className="home-heading">Featured Technical Repos</h2>
            <div className="project-grid">
                {liveProject.map((item) => (
                    /* 🚨 महा-सुधार: ID को a टैग पर ले आए ताकि CSS Sticky Animation सही से काम करे */
                    <a 
                        href={item.link || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="tile-link" 
                        id={item.cardId} 
                        key={item.id}
                    >
                        <div className={item.className}>
                            <div className="image-box">
                                <img src={item.image || places_visited} alt={item.title} loading="lazy" />
                            </div>
                            {/* मंगल की कड़क नारंगी ऊर्जा को हेडिंग में वापस लाया गया */}
                            <h3 className="tile-heading orange">{item.title}</h3>
                            <p className="description">{item.desc}</p>
                        </div>
                    </a>
                ))} {/* अतिरिक्त सेमीकोलन हटा दिया गया */}
            </div>
        </section>
    );
};

export default Projects;
