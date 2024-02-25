import { Container } from "react-bootstrap";
import FutureBoxes from "./assets/Boxes/FutureBoxes";
<<<<<<< HEAD
import Header from "./assets/Boxes/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TarotReading from "./pages/TarotReading";
import AngelReading from "./pages/AngelReading";
import KetinaLoveReading from "./pages/KetinaLoveReading";

function App() {
  return (
    <Router>
      <Container>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<FutureBoxes />} />
            <Route path="/tarot_reading" element={<TarotReading />} />
            <Route path="/angel_reading" element={<AngelReading />} />
            <Route
              path="/ketina_love_reading"
              element={<KetinaLoveReading />}
            />
          </Routes>
        </div>
      </Container>
    </Router>
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./assets/Boxes/Header";
import Meditation from "./components/meditation/Meditation";
import Home from "./Page/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Meditation" element={<Meditation />} />
      </Routes>
    </BrowserRouter>
>>>>>>> eda943a03464a0108ad77f5fee660cc78940b4cf
  );
}

export default App;
