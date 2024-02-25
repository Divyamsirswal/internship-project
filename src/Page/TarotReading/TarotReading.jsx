// import React from "react";
import Card from "../../components/Card/Card";
const TarotReading = () => {
  return (
    <div className=" w-full h-full bg-violet-100">
      <h1 className=" text-center p-10 font-semibold">Tarot Reading</h1>
      <div className=" flex flex-col items-center justify-center w-screen px-20 py-10">
        <div className=" flex p-20 gap-20">
          <Card name="Weekend Tarot Fortune" />
          <Card name="Weekly Tarot Fortune" />
          <Card name="Weekend Tarot Fortune" />
          <Card name="Weekend Tarot Fortune" />
          <Card name="Weekend Tarot Fortune" />
        </div>
        <div className=" flex p-20 gap-20">
          <Card name="Weekend Tarot Fortune" />
          <Card name="Weekend Tarot Fortune" />
          <Card name="Weekend Tarot Fortune" />
          <Card name="Weekend Tarot Fortune" />
          <Card name="Weekend Tarot Fortune" />
        </div>
      </div>
      <div className=" w-full h-full"></div>
    </div>
  );
};

export default TarotReading;
