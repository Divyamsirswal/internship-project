import FutureBoxes from './assets/Boxes/FutureBoxes';

function App() {
  return (
    <div className="App">
      <FutureBoxes/>
    </div>
  );
}

export default App;

// import ThreeBoxes from './assets/Boxes/ThreeBoxes';

// import PropTypes from 'prop-types';

// function App() {
//     return (
//         <div className="container">
//             <div className="section-title" style={titleStyle}>Read Your Future Now</div>
//             <div className="box-container" style={boxContainerStyle}>
//                 <Box image="image1.jpg" title="Box 1" />
//                 <Box image="image2.jpg" title="Box 2" />
//                 <Box image="image3.jpg" title="Box 3" />
//             </div>

//             <div className="box-container" style={boxContainerStyle}>
//                 <Box image="image4.jpg" title="Box 4" />
//                 <Box image="image5.jpg" title="Box 5" />
//                 <Box image="image6.jpg" title="Box 6" />
//             </div>

//             <div className="section-title" style={titleStyle}>Embark on your Journey</div>
//             <div className="box-container" style={boxContainerStyle}>
//                 <Box image="image7.jpg" title="Box 7" />
//                 <Box image="image8.jpg" title="Box 8" />
//                 <Box image="image9.jpg" title="Box 9" />
//             </div>

//             <div className="section-title" style={titleStyle}>Let&rsquo;s take you to another Dimension</div>
//             <div className="box-container" style={boxContainerStyle}>
//                 <Box image="image10.jpg" title="Box 10" />
//                 <Box image="image11.jpg" title="Box 11" />
//                 <Box image="image12.jpg" title="Box 12" />
//             </div>

//             <div className="section-title" style={titleStyle}>Nourish Your Soul</div>
//             <div className="box-container" style={boxContainerStyle}>
//                 <Box image="image13.jpg" title="Box 13" />
//                 <Box image="image14.jpg" title="Box 14" />
//                 <Box image="image15.jpg" title="Box 15" />
//             </div>
//         </div>
//     );
// }

// function Box({ image, title }) {
//     return (
//         <div className="box" style={boxStyle}>
//             <img src={image} alt={title} style={imageStyle} />
//             <h3>{title}</h3>
//         </div>
//     );
// }

// Box.propTypes = {
//     image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
// };

// const titleStyle = {
//     margin: '20px 0',
//     fontSize: '24px',
// };

// const boxContainerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//     marginBottom: '40px',
// };

// const boxStyle = {
//     flex: '0 0 calc(33.33% - 20px)',
//     border: '1px solid black',
//     margin: '0 10px',
//     padding: '20px',
// };

// const imageStyle = {
//     maxWidth: '100%',
//     height: 'auto',
//     marginBottom: '10px',
// };

// export default App;
