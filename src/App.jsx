import { Container } from "react-bootstrap";
import FutureBoxes from "./assets/Boxes/FutureBoxes";
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
          <FutureBoxes />
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
  );
}

export default App;
