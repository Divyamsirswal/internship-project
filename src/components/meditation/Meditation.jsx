import React from "react";
import { useNavigate } from "react-router-dom";
import "./meditation.css";

const Meditation = () => {
  const navigate = useNavigate();
  const options = [
    "Daily Meditation",
    "Chakra Meditation",
    "Meditation for sleep",
    "5 minute Meditation",
    "Sleep Meditation",
    "Mindfullness Meditation",
    "Meditation for Positive Energy",
    "Meditation for beginners",
    "Meditation for Male",
    "Meditation for female",
  ];
  const imgurl = [
    "https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=1753&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1577344718665-3e7c0c1ecf6b?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1592895792095-85fa785192a9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1489659639091-8b687bc4386e?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1559595500-e15296bdbb48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554067559-269708c83fb6?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const onButtonClick = (option) => {
    if (option === "Daily Meditation") {
      navigate("/DailyMeditation");
    }
  };
  return (
    <div className="Main-page">
      <div className="Meditation-text">
        <h1>Meditation</h1>
      </div>

      <div className="Options">
        {options.map((option, index) => {
          return (
            <div className="list">
              <div className="circle">
                <img
                  className="hy"
                  onClick={() => onButtonClick(option)}
                  src={imgurl[index]}
                  alt="Meditation"
                />
              </div>
              <div className="list-item" key={index}>
                {option}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meditation;
