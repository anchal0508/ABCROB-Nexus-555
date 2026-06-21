// <!-- Home (Hero section, summary) -->

import BlockDiagram from "./components/BlockDiagram";
import Glimpse from "./components/Glimps";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import ScoreBoard from "./components/ScoreBoard";
import Transformation from "./components/Transformation";
import VerifiedProof from "./components/VerifiedProof";



function PortfolioHome() {

  return (
    <div className="portfolio-home">
      <Introduction />
    <BlockDiagram />
      <ScoreBoard />
      <Transformation />
      <Glimpse />
      <VerifiedProof />
      <Projects />
    </div>
  );
}

export default PortfolioHome;
