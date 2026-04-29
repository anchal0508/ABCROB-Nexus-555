import "./MainContainer.css";
import Introduction from "../components/Introduction";
import ScoreBoard from "../components/ScoreBoard";
import Transformation from "../components/Transformation";
import VerifiedProof from "../components/VerifiedProof";

function MainContainer() {

    return (

        <div className="middle-body">
            <Introduction />

            <ScoreBoard />
            <Transformation />
            <VerifiedProof/>
            <h2> Featured Technical Repos </h2>


        </div>
    );
}

export default MainContainer;