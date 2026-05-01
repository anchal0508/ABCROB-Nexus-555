import Footer from "./components/Home/Footer";
import Header from "./components/Home/Header";
import MainContainer from "./components/Home/mainBody/MainContainer";
import "./assets/scss/_main.scss";

function App() {

  return <div>
    <div className="body">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  </div>

}

export default App
