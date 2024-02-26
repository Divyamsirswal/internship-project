import hand1 from "../../../public/ICONS/hand1.png";
import hand2 from "../../../public/ICONS/hand2.png";

import eye from "../../../public/ICONS/eyes.png";

const TarotReading = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow w-screen h-screen flex flex-col  bg-red-200">
        <div className="text-center h-max w-full p-10">
          <span className="text-4xl font-mono">Tarot Reading</span>
        </div>
        <div className="p-10 gap-20 items-center justify-center flex w-screen h-max">
          <div className=" flex gap-20">
            <div className="bg-red-100 w-[500px] h-[250px] relative rounded-3xl shadow outline outline-2 cursor-pointer">
              <div className=" flex flex-col gap-1 bg-black/80 px-4 py-2 w-[500px] h-[130px] rounded-b-3xl absolute bottom-0 ">
                <span className=" text-2xl text-white ">
                  Weekend Tarot Fortune
                </span>
                <span className=" text-xs text-white">
                  February 16th to 18th <br /> Shake off the week&apos;s stress
                  with a soul-stirring Tarot reading this weekend! 🌟 🔮 Unveil
                  hidden possibilities and find clarity for the days ahead. ✨
                </span>
              </div>
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
            <div className="bg-red-100 w-[500px] h-[250px] relative rounded-3xl shadow outline outline-2 cursor-pointer">
              <div className=" bg-black/80 w-[500px] h-[130px] rounded-b-3xl absolute bottom-0 "></div>
            </div>
          </div>
        </div>
        <div className=" items-center justify-center p-10 gap-20 flex w-screen h-max">
          <div className=" flex gap-20">
            <div className="bg-red-100 w-[500px] relative h-[250px] rounded-3xl shadow outline outline-2 cursor-pointer">
              <div className=" bg-black/80 w-[500px] h-[130px] rounded-b-3xl absolute bottom-0 "></div>
            </div>
            <div className="bg-red-100 w-[500px] relative h-[250px] rounded-3xl shadow outline outline-2 cursor-pointer">
              <div className=" bg-black/80 w-[500px] h-[130px] rounded-b-3xl absolute bottom-0 "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow w-screen h-screen flex items-center justify-center bg-green-200"></div>
    </div>
  );
};

export default TarotReading;
