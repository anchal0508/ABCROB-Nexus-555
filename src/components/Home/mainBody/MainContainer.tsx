import Introduction from "../Introduction";
import ScoreBoard from "../ScoreBoard";
import Transformation from "../Transformation";
import VerifiedProof from "../VerifiedProof";
import Projects from "../Projects";
import Glimps from "../Glimps";
function MainContainer() {

    return (

        <div className="middle-body">
            <Introduction />

            <ScoreBoard />
            <Transformation />
            <Glimps/>
            <VerifiedProof/>
            <Projects/>


        </div>
    );
}

export default MainContainer;