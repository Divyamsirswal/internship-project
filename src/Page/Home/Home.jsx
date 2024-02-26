import { Container } from "react-bootstrap";
import FutureBoxes from "../../assets/Boxes/FutureBoxes";
import Header from "../../assets/Boxes/Header";
import Hero from "../../components/Hero";

const Home = () => {
  return (
    <Container>
      <div className="App">
        <Header />
        <Hero />
        <FutureBoxes />
      </div>
    </Container>
  );
};

export default Home;
