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
              <div className=" bg-black w-[500px] h-[110px] rounded-b-3xl absolute bottom-0 "></div>
            </div>
            <div className="bg-red-100 w-[500px] h-[250px] relative rounded-3xl shadow outline outline-2 cursor-pointer">
              <div className=" bg-black w-[500px] h-[110px] rounded-b-3xl absolute bottom-0 "></div>
            </div>
          </div>
        </div>
        <div className=" items-center justify-center p-10 gap-20 flex w-screen h-max">
          <div className=" flex gap-20">
            <div className="bg-red-100 w-[500px] relative h-[250px] rounded-3xl shadow outline outline-2 cursor-pointer">
              <div className=" bg-black w-[500px] h-[110px] rounded-b-3xl absolute bottom-0 "></div>
            </div>
            <div className="bg-red-100 w-[500px] relative h-[250px] rounded-3xl shadow outline outline-2 cursor-pointer">
              <div className=" bg-black w-[500px] h-[110px] rounded-b-3xl absolute bottom-0 "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow w-screen h-screen flex items-center justify-center bg-green-200"></div>
    </div>
  );
};

export default TarotReading;
