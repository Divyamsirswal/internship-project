import { Container } from "react-bootstrap";
import FutureBoxes from "../../assets/Boxes/FutureBoxes";
import Header from "../../assets/Boxes/Header";

import React from "react";

const Home = () => {
  return (
    <Container>
      <div className="App">
        <Header />
        <FutureBoxes />
      </div>
    </Container>
  );
};

export default Home;
