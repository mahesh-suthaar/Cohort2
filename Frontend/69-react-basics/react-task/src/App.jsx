import { RiArrowRightUpLine } from "@remixicon/react";
import Banner from "./components/Banner.jsx";
import Nav from "./components/Nav.jsx";
import Header from "./components/Header.jsx";
import NumContainer from "./components/NumContainer.jsx";
import CardContainer from "./components/CardContainer.jsx";

function App() {
  return (
  <div className="container">
    <Banner />
    <Nav />
    <Header />
    <NumContainer />
    <CardContainer />
    <CardContainer />
  </div>
  );
}

export default App;
