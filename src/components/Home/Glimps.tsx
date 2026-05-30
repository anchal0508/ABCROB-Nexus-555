import glimps from "../../Images/glimps.jpg";

function Glimps() {
    return (
        <section className="glimps-container">
            <div className="glimps">
                <img src={glimps} alt="Glimps of Workshop in India" />
            </div>
            <div className="home-heading">
                <h2 >Glimps of workshops in India</h2>

            </div>
        </section>
    );
}

export default Glimps;