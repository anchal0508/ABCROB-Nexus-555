import React from "react";
import glimpseImg from "../../images/glimps.jpg"; // इमेज का नाम वही रखा है जो आपके पास है

function Glimpse() {
    return (
        <section className="glimpse-container">
            <div className="glimpse-wrapper">
                <img src={glimpseImg} alt="Glimpse of Workshops in India" />
            </div>
            <div className="home-heading">
                <h2>
                    Glimpse of workshops 
                    <span className="highlight">in India</span>
                </h2>
            </div>
        </section>
    );
}

export default Glimpse;
