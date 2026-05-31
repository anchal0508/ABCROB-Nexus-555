import places_visited from "../../Images/places_visited.jpeg";

interface TileIteam {
    id: number;
    cardId: string;
    className: string;
    title: string;
    desc: string;
    link?: string;
    image?: string;

};

const liveProject: TileIteam[] = [
    { id: 1, cardId: "card1", className: "card", title: "ABCROB Nexus Engine", desc: "A full-scale Production-Ready API managing Identity, Data Streams, and Security." },
    { id: 2, cardId: "card2", className: "card", title: "AutoLogic-555 Suite", desc: "Transitioning BPO Process Automation into a Scalable Web-based Microservice." },
    { id: 3, cardId: "card3", className: "card", title: "VBA Automation Suite", desc: "Custom macros developed during BPO tenure to automate complex data entry and chat logs.", image: places_visited }
]

const Projects: React.FC = () => {
    return (
        <section className="project-container">
            <h2 className="home-heading ">Featured Technical Repos</h2>
            <div className="project-grid">
                {liveProject.map((item) => (
                    <a href={item.link?.toString() || "#"} target="_blank" rel="noopener noreferrer" className="tile-link" key={item.id}>
                        <div className={`${item.className}`} id={`${item.cardId}`}>
                            <div className="image-box">
                                <img src={item.image || places_visited} alt={item.title?.toString()} />
                            </div>
                            <h3 className="tile-heading orange">{item.title}</h3>
                            <p className="description">
                                {item.desc}
                            </p>
                        </div>

                    </a>
                ))};
            </div>
        </section>
    );
}

export default Projects;