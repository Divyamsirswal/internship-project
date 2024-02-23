import './styles.css';
import tarot from '../../../public/ICONS/tarot.png';
import angel from '../../../public/ICONS/angel.png';
import ketinaLove from '../../../public/ICONS/ketinalove.png';
import face from '../../../public/ICONS/face.png';
import palm from '../../../public/ICONS/palm.png';
import finger from '../../../public/ICONS/finger.png';
import timeTravel from '../../../public/ICONS/timetravel.png';
import astrology from '../../../public/ICONS/astrology.png';
import biorythm from '../../../public/ICONS/biorythm.png';
import dreamInterpretation from '../../../public/ICONS/dreaminterpretation.png';
import crystalBall from '../../../public/ICONS/crystalball.png';
import numerology from '../../../public/ICONS/numerology.png';
import meditation from '../../../public/ICONS/meditation.png';
import emotionalSupport from '../../../public/ICONS/emotionalsupport.png';
import divineLogo from '../../../public/ICONS/divinelogohorizontal.png';

function FutureBoxes() {
  return (
    <div className="container">
      <div className="section">
        <h2>Read Your Future Now</h2>
        <div className="box">
          <img src={tarot} alt="Tarot Reading" />
          <h3>Tarot Reading</h3>
        </div>
        <div className="box">
          <img src={angel} alt="Angel Reader" />
          <h3>Angel Reader</h3>
        </div>
        <div className="box">
          <img src={ketinaLove} alt="Katina Love Reading" />
          <h3>Katina Love Reading</h3>
        </div>
        <div className="box">
          <img src={face} alt="Face Reader" />
          <h3>Face Reader</h3>
        </div>
        <div className="box">
          <img src={palm} alt="Palm Reader" />
          <h3>Palm Reader</h3>
        </div>
        <div className="box">
          <img src={finger} alt="Finger Reader" />
          <h3>Finger Reader</h3>
        </div>
      </div>
      <div className="section">
        <h2>Embark on your Journey</h2>
        <div className="box">
          <img src={timeTravel} alt="Time Travel" />
          <h3>Time Travel</h3>
        </div>
        <div className="box">
          <img src={astrology} alt="Astrology" />
          <h3>Astrology</h3>
        </div>
        <div className="box">
          <img src={biorythm} alt="Biorythm" />
          <h3>Biorythm</h3>
        </div>
      </div>
      <div className="section">
        <h2>Lets take you to the another Dimension</h2>
        <div className="box">
          <img src={dreamInterpretation} alt="Dream Interpretation" />
          <h3>Dream Interpretation</h3>
        </div>
        <div className="box">
          <img src={crystalBall} alt="Crystal Ball" />
          <h3>Crystal Ball</h3>
        </div>
        <div className="box">
          <img src={numerology} alt="Numerlogy" />
          <h3>Numerlogy</h3>
        </div>
      </div>
      <div className="section">
        <h2>Nourish Your soul</h2>
        <div className="box">
          <img src={meditation} alt="Meditation" />
          <h3>Meditation</h3>
        </div>
        <div className="box">
          <img src={emotionalSupport} alt="Emotional Support" />
          <h3>Emotional Support</h3>
        </div>
        <div className="box">
          <img src={divineLogo} alt="Get Your Solutions" />
          <h3>Get Your Solutions</h3>
        </div>
      </div>
    </div>
  );
}

export default FutureBoxes;
