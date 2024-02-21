import './styles.css';

function ThreeBoxes() {
  const boxesData = [
    { id: 1, title: "Box 1", imageUrl: "image1.jpg" },
    { id: 2, title: "Box 2", imageUrl: "image2.jpg" },
    { id: 3, title: "Box 3", imageUrl: "image3.jpg" },
    { id: 4, title: "Box 4", imageUrl: "image4.jpg" },
    { id: 5, title: "Box 5", imageUrl: "image5.jpg" },
    { id: 6, title: "Box 6", imageUrl: "image6.jpg" },
    { id: 7, title: "Box 7", imageUrl: "image7.jpg" },
    { id: 8, title: "Box 8", imageUrl: "image8.jpg" },
    { id: 9, title: "Box 9", imageUrl: "image9.jpg" },
    { id: 10, title: "Box 10", imageUrl: "image10.jpg" },
    { id: 11, title: "Box 11", imageUrl: "image11.jpg" },
    { id: 12, title: "Box 12", imageUrl: "image12.jpg" },
    { id: 13, title: "Box 13", imageUrl: "image13.jpg" },
    { id: 14, title: "Box 14", imageUrl: "image14.jpg" },
    { id: 15, title: "hello", imageUrl: "image15.jpg" },
  ];

  return (
    <div className="container">
      {boxesData.map(box => (
        <div className="box" key={box.id}>
          <img src={box.imageUrl} alt={box.title} />
          <h2>{box.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default ThreeBoxes;
