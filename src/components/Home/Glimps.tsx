import glimps from "../../Images/glimps.jpg";

function Glimps(){
    return(
        <section className="glimps-container">
            <div className="glimps">
                <img src={glimps} alt="Glimps of Workshop in India" />
            </div>
            <h2 className="home-heading">Glimps of workshops in India</h2>
        </section>
    );
}

export default Glimps;