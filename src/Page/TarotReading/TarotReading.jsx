import { useState } from "react";
import img from "../../../public/ICONS/biorythm.png";

// eslint-disable-next-line react/prop-types
const TarotBox = ({ title, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-red-100 ${
        isHovered ? "bg-black/90" : ""
      } hover:bg-black/90 transition-all duration-700 ease-in-out w-[500px] h-[250px] relative rounded-3xl shadow outline outline-2 cursor-pointer`}
    >
      {isHovered && (
        <img
          src={img}
          alt="Hovered Image"
          className="absolute transform transition-transform duration-500 ease-in-out inset-0 w-full h-full object-cover rounded-3xl"
        />
      )}
      <div className="flex flex-col gap-1 bg-black/80 px-4 py-2 w-[500px] h-[130px] rounded-b-3xl absolute bottom-0">
        <span className="text-2xl text-white">{title}</span>
        <span className="text-xs text-white">{content}</span>
      </div>
      <div></div>
      <div className=" w-full h-full">
        <img
          src="../../../public/images/vector.svg"
          className=" absolute left-[30.519px] bottom-[14.369px]"
          alt="...."
        />
        <img
          src="../../../public/images/vector2.svg"
          className=" absolute left-[23.438px] bottom-[12.672px]"
          alt="...."
        />

        <h1 className=" text-xl absolute left-[55px] bottom-[8px] font-[30px] text-white ">
          10
        </h1>

        <img
          src="../../../public/images/vector3.svg"
          alt="....."
          className=" absolute left-[86px] bottom-[14.699px]"
        />

        <h1 className=" text-xl absolute left-[120px] bottom-[8px] font-[30px] text-white ">
          10
        </h1>
      </div>
    </div>
  );
};

const TarotReading = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow w-screen h-screen flex flex-col bg-red-200">
        <div className="text-center h-max w-full p-10">
          <span className="text-4xl font-mono">Tarot Reading</span>
        </div>
        <div className="p-10 gap-20 items-center justify-center flex w-screen h-max">
          <div className="flex gap-20">
            <TarotBox
              title="Weekend Tarot Fortune"
              content="February 16th to 18th Shake off the week's stress with a soul-stirring Tarot reading this weekend! 🌟 🔮 Unveil hidden possibilities and find clarity for the days ahead. ✨"
            />
            <TarotBox
              title="Weekly Tarot Fortune"
              content="February 12th to 16th Navigate foggy weeks with Tarot's illuminating wisdom. 🌫️ 🔮 Dive into clarity and discover your best course of action! 💡"
            />
          </div>
        </div>
        <div className="items-center justify-center p-10 gap-20 flex w-screen h-max">
          <div className="flex gap-20">
            <TarotBox
              title="What Is the Age of My Destined Partner?"
              content="Hold on tight! 💜 You’re about to uncover some juicy intel about your destined partner! 👀 Want a hint? Let the wisdom of Tarot guide you, my friend. 🧭 🗺"
            />
            <TarotBox
              title="The First Half of 2024 Tarot Career Advice"
              content="February 12th to 16th Navigate foggy weeks with Tarot's illuminating wisdom. 🌫️ 🔮 Dive into clarity and discover your best course of action! 💡"
            />
          </div>
        </div>
      </div>
      <div className="flex-grow w-screen h-screen flex items-center justify-center bg-green-200"></div>
    </div>
  );
};

export default TarotReading;
