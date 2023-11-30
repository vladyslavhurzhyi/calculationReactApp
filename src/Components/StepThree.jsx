import { useEffect, useState } from 'react';
import Title from './Title';

const StepThree = ({ previousStep }) => {
  const [isShowBox, setIsShowBox] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShowBox(true));
  }, []);

  return (
    <>
      <section
        className={`mx-20 mt-20 opacityComponent ${
          isShowBox ? 'component-show' : ''
        }`}
      >
        <div className="mt-20 mb-20 flex justify-between">
          <Title text={'Potential'} />
          <div className="max-w-[500px] text-xl  text-gray-500">
            With the information you ve provided, we have estimated that vour
            sovines coule de eulte sienircant-Ireneseresuis oeuveu excited, why
            not download our report in PDF format and give us call so that can
            go over it together? Let's put those numbers to the test!
          </div>
        </div>

        <div className="text-white flex justify-between">
          <div className="text-center  max-w-[350px]">
            <div className="text-[90px] font-bold flex">
              <p>10%</p>
            </div>
            <p className="text-xl">Revenue incresse</p>
          </div>

          <div className="text-center max-w-[350px]">
            <div className="text-[90px] font-bold">1232</div>
            <p className="text-xl">
              $ Revenue per Machine <br /> Current revenue :$985
            </p>
          </div>

          <div className="text-center max-w-[350px] flex">
            <p className="mr-4 text-green-500 text-[90px]">↑ </p>
            <div className="text-[90px] font-bold">
              <p>123</p>
              <p className="text-xl">
                +$ per day, <br /> per machine
              </p>
            </div>
          </div>

          <div className="text-center max-w-[350px] flex">
            <p className="mr-4 text-green-500 text-[90px]">↑ </p>
            <div className="text-[90px] font-bold">
              <p>2673</p>
              <p className="text-xl">
                +$ per month, <br /> per machine
              </p>
            </div>
          </div>
        </div>

        <div className="my-20 flex">
          <svg
            className="  fill-gray-400 mr-4"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z"
              fill=""
            />
          </svg>
          <p className="mr-2 text-lg text-white">Share results: </p>
          <p className=" text-blue-500 text-xl font-bold cursor-pointer">
            SAVE PDF
          </p>
        </div>

        <div className="mt-20 mb-20 flex justify-between">
          <div className="">
            <div
              className="text-[65px] text-gray-200 "
              style={{
                borderLeft: '2px solid',
                borderImage:
                  'linear-gradient(180deg, rgba(17,52,255,1) 0%, rgba(0,255,246,1) 100%)',
                borderImageSlice: '1',
                paddingLeft: '20px',
              }}
            >
              <div className="text-xl">Any doubts?</div>
              We`re here to help
            </div>
          </div>
        </div>

        <div>
          <p className=" text-green-600"> Let's connect</p>
          <p className=" text-white">
            Leave your contacts and we'll get in touch with vou within 24 hours
          </p>

          <form className="max-w-sm">
            <div className="">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="email@mail.com"
                required
              />
            </div>

            <div className="">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name..."
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="number"
                id="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Number..."
                required
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(17,52,255,1) 0%, rgba(0,255,246,1) 100%)',
              }}
              className="text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full  px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>

        <button
          onClick={() => {
            previousStep();
          }}
          type="button"
          className="mb-5 block ml-auto text-black mt-10 text-xl hover:bg-blue-500 transition-all font-bold bg-blue-400 px-5 py-3"
        >
          Previous
        </button>
      </section>
    </>
  );
};

export default StepThree;
