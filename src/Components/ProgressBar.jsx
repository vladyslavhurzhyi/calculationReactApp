const ProgressBar = ({ step }) => {
  return (
    <>
      <div className="mt-[50px]  relative flex items-center justify-between mx-10">
        <div className="z-10 flex items-start">
          <div className="outline outline-2 outline-offset-4 w-6 h-6 bg-[#01AD81] border-2 border-current text-[#01AD81] rounded-full"></div>
        </div>
        <div className={`h-1 w-full relative overflow-hidden`}>
          <div
            className={`h-full bg-[#01AD81] transition-all duration-[1000ms]`}
            style={{ width: '100%' }}
          ></div>
        </div>

        {/* circle2 */}
        <div className="z-10 flex items-start">
          <div
            className={`${
              step === 2 || step > 2
                ? 'bg-[#01AD81] text-[#01AD81] outline outline-2 outline-offset-4 transition-all duration-[1500ms] '
                : 'text-[#01AD81]'
            } w-6 h-6 border-2 border-current  rounded-full`}
          ></div>
        </div>

        {/* line */}
        <div className={` h-1  w-full relative overflow-hidden`}>
          <div className={`absolute h-1 w-full  overflow-hidden`}>
            <div
              className={`  h-full 
               bg-[#fdfdfd]
               transition-all duration-[1500ms]`}
              style={{ width: '100%' }}
            ></div>
          </div>

          <div className={`absolute h-1  w-full  overflow-hidden`}>
            <div
              className={` h-full ${
                step === 3 ? 'bg-[#01AD81]' : 'bg-[#fdfdfd]'
              } transition-all duration-[1500ms]`}
              style={{ width: step === 3 ? '100%' : '0%' }}
            ></div>
          </div>
        </div>

        {/* circle3 */}
        <div className="z-10 flex items-start">
          <div
            className={`${
              step === 3
                ? 'bg-[#01AD81] text-[#01AD81] outline outline-2 outline-offset-4 transition-all duration-[1500ms] '
                : 'text-[#01AD81]'
            } w-6 h-6 border-2 border-current  rounded-full`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
