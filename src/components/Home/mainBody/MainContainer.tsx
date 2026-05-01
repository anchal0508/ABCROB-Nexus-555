import Introduction from "../Introduction";
import ScoreBoard from "../ScoreBoard";
import Transformation from "../Transformation";
import VerifiedProof from "../VerifiedProof";
import Projects from "../Projects";
import Momentos from "../Momentos";
import Glimps from "../Glimps";
function MainContainer() {

    return (

        <div className="middle-body">
            <Introduction />

            <ScoreBoard />
            <Momentos/>
            <Transformation />
            <Glimps/>
            <VerifiedProof/>
            <Projects/>


        </div>
    );
}

export default MainContainer;