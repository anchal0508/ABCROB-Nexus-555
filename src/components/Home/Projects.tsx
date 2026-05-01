import places_visited from "../../Images/places_visited.jpeg";

interface TileIteam {
    id: number;
    title: String;
    desc: String;
    link?: String;
    image?: String;

};

const liveProject: TileIteam[] = [
    { id: 1, title: "ABCROB Nexus Engine", desc: "A full-scale Production-Ready API managing Identity, Data Streams, and Security." },
    { id: 2, title: "AutoLogic-555 Suite", desc: "Transitioning BPO Process Automation into a Scalable Web-based Microservice." },
    { id: 3, title: "VBA Automation Suite", desc: "Custom macros developed during BPO tenure to automate complex data entry and chat logs.", image: places_visited }
];

const Projects: React.FC = () => {
    return (
        <section className="project-container">
            <h2 className="home-heading ">Featured Technical Repos</h2>
            <div className="project-grid">
                {liveProject.map((item) => (
                    <a href={item.link?.toString() || "#"} target="_blank" rel="noopener noreferrer" className="tile-link" key={item.id}>
                        <div className="tile-box">
                            <div className="image-box">
                                <img src={places_visited} alt={item.title?.toString()} />
                            </div>
                            <h2 className="tile-heading orange">{item.title}</h2>
                            <div className="description">
                                {item.desc}
                            </div>
                        </div>

                    </a>
                ))};
            </div>
        </section>
    );
}

export default Projects;