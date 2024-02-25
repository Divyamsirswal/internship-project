const TarotReading = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow w-screen h-screen flex flex-col  bg-red-200">
        <div className="text-center h-max w-full p-10">
          <span className="text-4xl">Tarot Reading</span>
        </div>
        <div className="p-20 gap-20 items-center justify-center flex w-screen h-max">
          <div className=" flex gap-20">
            <div className="bg-red-400 w-[500px] h-[250px] rounded-3xl"></div>
            <div className="bg-red-400 w-[500px] h-[250px] rounded-3xl"></div>
          </div>
        </div>
        <div className="px-20 items-center justify-center py-10 gap-20 flex w-screen h-max">
          <div className=" flex gap-20">
            <div className="bg-red-400 w-[500px] h-[250px] rounded-3xl"></div>
            <div className="bg-red-400 w-[500px] h-[250px] rounded-3xl"></div>
          </div>
        </div>
      </div>
      <div className="flex-grow w-screen h-screen flex items-center justify-center bg-green-200"></div>
      <div className="flex-grow w-screen h-screen flex items-center justify-center bg-blue-200"></div>
    </div>
  );
};

export default TarotReading;
