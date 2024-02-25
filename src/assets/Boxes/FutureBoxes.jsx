import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import tarot from "../../../public/ICONS/tarot.png";
import angel from "../../../public/ICONS/angel.png";
import ketinaLove from "../../../public/ICONS/ketinalove.png";
import face from "../../../public/ICONS/face.png";
import palm from "../../../public/ICONS/palm.png";
import finger from "../../../public/ICONS/finger.png";
import timeTravel from "../../../public/ICONS/timetravel.png";
import astrology from "../../../public/ICONS/astrology.png";
import biorythm from "../../../public/ICONS/biorythm.png";
import dreamInterpretation from "../../../public/ICONS/dreaminterpretation.png";
import crystalBall from "../../../public/ICONS/crystalball.png";
import numerology from "../../../public/ICONS/numerology.png";
import meditation from "../../../public/ICONS/meditation.png";
import emotionalSupport from "../../../public/ICONS/emotionalsupport.png";
import getyoursolution from "../../../public/ICONS/getyoursolution.png";
import divineLogo from "../../../public/ICONS/divinelogohorizontal.png";

function FutureBoxes() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@700&family=IBM+Plex+Sans&family=Inter:wght@100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Container className="container d-flex flex-column justify-content-center align-items-center">
        <div className="section mb-4 w-100">
          <h2
            style={{
              fontFamily: "Baloo Bhai 2",
              fontWeight: 700,
              fontSize: "2rem",
            }}
          >
            Read Your Future Now
          </h2>
          <Row className="row-cols-1 row-cols-md-3 g-4">
            <Col>
              <div className="box">
                <img src={tarot} alt="Tarot Reading" className="img-fluid" />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "Bold" }}
                >
                  <Link
                    className="hove:text-black font-bold text-black"
                    to="/tarot_reading"
                  >
                    Tarot Reading
                  </Link>
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img src={angel} alt="Angel Reader" className="img-fluid" />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "Bold" }}
                >
                  Angel Reader
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img
                  src={ketinaLove}
                  alt="Katina Love Reading"
                  className="img-fluid"
                />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "Bold" }}
                >
                  Katina Love Reading
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img src={face} alt="Face Reader" className="img-fluid" />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "Bold" }}
                >
                  Face Reader
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img src={palm} alt="Palm Reader" className="img-fluid" />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "Bold" }}
                >
                  Palm Reader
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img src={finger} alt="Finger Reader" className="img-fluid" />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "Bold" }}
                >
                  Finger Reader
                </h3>
              </div>
            </Col>
          </Row>
        </div>
        <div className="section mb-4 w-100">
          <h2>Embark on your Journey</h2>
          <Row className="row-cols-1 row-cols-md-3 g-4">
            <Col>
              <div className="box">
                <img src={timeTravel} alt="Time Travel" className="img-fluid" />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "Bold" }}
                >
                  Time Travel
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img src={astrology} alt="Astrology" className="img-fluid" />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "Bold" }}
                >
                  Astrology
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img src={biorythm} alt="Biorythm" className="img-fluid" />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "Bold" }}
                >
                  Biorythm
                </h3>
              </div>
            </Col>
          </Row>
        </div>
        <div className="section mb-4 w-100">
          <h2>Lets take you to the another Dimension</h2>
          <Row className="row-cols-1 row-cols-md-3 g-4">
            <Col>
              <div className="box">
                <img
                  src={dreamInterpretation}
                  alt="Dream Interpretation"
                  className="img-fluid"
                />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "Bold" }}
                >
                  Dream Interpretation
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img
                  src={crystalBall}
                  alt="Crystal Ball"
                  className="img-fluid"
                />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "Bold" }}
                >
                  Crystal Ball
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img src={numerology} alt="Numerology" className="img-fluid" />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "Bold" }}
                >
                  Numerology
                </h3>
              </div>
            </Col>
          </Row>
        </div>
        <div className="section mb-4 w-100">
          <h2>Nourish Your soul</h2>
          <Row className="row-cols-1 row-cols-md-3 g-4">
            <Col>
              <div onClick={() => navigate("/Meditation")} className="box">
                <img src={meditation} alt="Meditation" className="img-fluid" />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "Bold" }}
                >
                  Meditation
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img
                  src={emotionalSupport}
                  alt="Emotional Support"
                  className="img-fluid"
                />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "Bold" }}
                >
                  Emotional Support
                </h3>
              </div>
            </Col>
            <Col>
              <div className="box">
                <img
                  src={getyoursolution}
                  alt="Get Your Solutions"
                  className="img-fluid"
                />
                <h3
                  className="mt-3"
                  style={{ fontFamily: "Inter", fontWeight: "Bold" }}
                >
                  Get Your Solutions
                </h3>
              </div>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-3 g-4 justify-content-center">
            <img src={divineLogo} alt="Divine Logo" />
          </Row>
        </div>
      </Container>
    </>
  );
}

export default FutureBoxes;
