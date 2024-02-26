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
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  className=" absolute left-[27px] bottom-[14.37px]"
                >
                  <path
                    d="M3.97097 0.983119C3.63923 0.99747 3.32083 1.15624 3.13923 1.39702C2.96697 1.62368 2.9459 1.89179 3.01577 1.99498L6.7307 7.53698C6.8115 7.65703 6.76243 7.81102 6.62403 7.88095C6.57657 7.90373 6.5267 7.91421 6.47817 7.91421C6.37657 7.91421 6.27817 7.86934 6.22403 7.78824L2.81577 2.7057C2.67817 2.50046 2.40163 2.3795 2.0851 2.39727C1.75017 2.41276 1.43257 2.57039 1.25177 2.81026C1.0795 3.03805 1.05843 3.30594 1.1283 3.40799L4.6835 8.71286C4.7643 8.83382 4.71577 8.98667 4.57683 9.05683C4.52937 9.08052 4.4795 9.08986 4.43097 9.08986C4.32937 9.08986 4.23097 9.04498 4.17683 8.96434L1.64777 5.24834C1.59764 5.23057 1.48777 5.21143 1.28377 5.22214C1.0811 5.23262 0.804568 5.3693 0.645101 5.57568C0.499234 5.76566 0.478434 5.98639 0.589368 6.15222L4.78937 12.4191C5.4587 13.4157 6.04937 13.6198 6.6211 13.818C7.0659 13.9724 7.5243 14.1348 7.9283 14.6303L13.7142 11.7535C13.6574 11.3286 13.8419 10.6001 14.1283 9.53611L14.1752 9.36435C14.4518 8.27937 14.2086 7.59166 13.9283 6.79574C13.7326 6.24129 13.5294 5.66839 13.4726 4.90551C13.4726 4.7358 13.4782 4.59366 13.4835 4.46404C13.4907 4.24582 13.5016 3.97292 13.4558 3.91141C12.9907 3.92326 12.6334 4.03237 12.3875 4.2506C12.0832 4.51643 11.9366 4.95425 11.9499 5.54743L12.1531 7.20828C12.1822 7.44814 11.7696 7.60236 11.6083 7.36136L7.5491 1.30363C7.41017 1.09816 7.12403 0.979474 6.81683 0.996103C6.4835 1.01045 6.1643 1.16923 5.98243 1.40887C5.8115 1.63438 5.7907 1.90136 5.9251 2.10546L8.93763 6.59733C9.01843 6.71829 8.9699 6.87274 8.83097 6.9413C8.7835 6.96499 8.73363 6.97547 8.6851 6.97547C8.5835 6.97547 8.4851 6.9306 8.43097 6.84996L4.63497 1.18973C4.5667 1.08745 4.2891 0.968768 3.97097 0.983119Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="19"
                  viewBox="0 0 30 19"
                  fill="none"
                  className=" absolute left-[16px] bottom-[5px]"
                >
                  <g filter="url(#filter0_d_11_15)">
                    <path
                      d="M24.9406 6.22336L19.2324 9.06099L19.5641 9.55622C19.9822 10.179 20.3252 10.2788 20.5782 10.2965C20.9241 10.3166 21.375 10.1827 22.075 9.83344L24.2974 8.7291C24.9974 8.38034 25.3598 8.1161 25.51 7.84275C25.6198 7.64616 25.6908 7.34092 25.2724 6.71722L24.9406 6.22336ZM6.90329 0.853568C6.68089 1.06587 6.58516 1.37317 6.65422 1.65449C6.71982 1.91919 6.92516 2.12079 7.05849 2.15154L11.6185 3.20395C11.7742 3.23948 11.867 3.37753 11.8241 3.51261C11.7908 3.62423 11.671 3.69849 11.5417 3.69849C11.5166 3.69849 11.4916 3.69621 11.4668 3.68915L5.52089 2.31737C5.38649 2.28662 5.09076 2.37341 4.88222 2.57501C4.65982 2.78731 4.56409 3.09483 4.63209 3.3773C4.69716 3.64063 4.96222 3.85293 5.09556 3.88414L5.62462 4.01102C5.62622 4.01102 5.62889 4.01102 5.63182 4.01193C5.63289 4.01193 5.63289 4.01193 5.63289 4.01193L10.8302 5.21059C10.986 5.24749 11.0788 5.38508 11.0369 5.51902C11.0025 5.63155 10.8844 5.70672 10.755 5.70672C10.73 5.70672 10.7036 5.70399 10.6785 5.69693L5.47822 4.49714C5.21422 4.43791 4.91822 4.5247 4.70836 4.72493C4.48649 4.93723 4.39076 5.24453 4.45982 5.52585C4.52489 5.78918 4.86409 6.02336 4.99742 6.05388L10.3489 7.28761C10.5041 7.32315 10.5974 7.46119 10.5556 7.59628C10.5206 7.70881 10.403 7.78215 10.2737 7.78215C10.2486 7.78215 10.2222 7.78124 10.1972 7.77418L6.79076 6.98852C6.69182 7.02406 6.59742 7.07759 6.51689 7.15481C6.32836 7.33955 6.24596 7.60516 6.30329 7.84753C6.35422 8.06963 6.52089 8.23865 6.62942 8.26531L14.9326 10.1811C15.9502 10.4159 16.3518 10.371 17.2977 10.0378C17.7812 9.85987 18.2812 9.67831 19.091 9.85258C19.0796 9.83709 19.0686 9.8241 19.0577 9.80724L18.5462 9.04459C18.2185 8.56713 17.8588 8.44299 17.4036 8.28512C16.802 8.07738 16.0545 7.81746 15.2838 6.67143L11.8766 1.58684C11.8625 1.58547 11.8476 1.58912 11.8334 1.58547L7.67662 0.625774C7.60996 0.610284 7.54062 0.604361 7.40436 0.608917C7.26676 0.615067 7.06169 0.701857 6.90329 0.852201V0.853568Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_11_15"
                      x="0.437744"
                      y="0.607422"
                      width="29.1567"
                      height="17.7208"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_11_15"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_11_15"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
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
