import { Container } from "react-bootstrap";
import FutureBoxes from "./assets/Boxes/FutureBoxes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./assets/Boxes/Header";
import Meditation from "./components/meditation/Meditation";
import Home from "./Page/Home/Home";
import DailyMeditation from "./components/meditation/DailyMeditation";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Meditation" element={<Meditation />} />
        <Route path="/DailyMeditation" element={<DailyMeditation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
