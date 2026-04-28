import "./MainContainer.css";
import Introduction from "../components/Introduction";
import ScoreBoard from "../components/ScoreBoard";
import Transformation from "../components/Transformation";

function MainContainer() {

    return (
        <>
            <div className="middle-body">
                <Introduction />

                <ScoreBoard />
                <Transformation />
                <h2> Verified Proof of Work </h2>
                <h2> Featured Technical Repos </h2>


            </div>
        </>
    );
}

export default MainContainer;