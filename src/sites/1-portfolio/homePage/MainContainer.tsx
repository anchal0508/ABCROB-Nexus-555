import Introduction from "./components/Introduction";
import ScoreBoard from "./components/ScoreBoard";
import Transformation from "./components/Transformation";
import VerifiedProof from "./components/VerifiedProof";
import Projects from "./components/Projects";
import Glimps from "./components/Glimps";
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