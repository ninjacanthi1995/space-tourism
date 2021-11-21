import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import DestinationPage from "./pages/destination-page/destination-page";
import CrewPage from "./pages/crew-page/crew-page";
import TechnologyPage from "./pages/technology-page/technology-page";
const data = require("./assets/data.json")

function App() {
  const destinationRoutes = data.destinations.map((destination, index) => {
      return <Route path={`/destination/${destination.name.toLowerCase()}`} element={<DestinationPage planetIdx={index} />} />
  })
  const crewRoutes = data.crew.map((crew, index) => {
      const crewNameUrl = crew.name.toLowerCase().split(' ').join('-');
      return <Route path={`/crew/${crewNameUrl}`} element={<CrewPage crewIdx={index} />} />
  })
  const technologyRoutes = data.technology.map((technology, index) => {
      const technologyNameUrl = technology.name.toLowerCase().split(' ').join('-');
      return <Route path={`/technology/${technologyNameUrl}`} element={<TechnologyPage technologyIdx={index} />} />
  })
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {destinationRoutes}
          {crewRoutes}
          {technologyRoutes}
        </Routes>
      </div>
  );
}

export default App;
