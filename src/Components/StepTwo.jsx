import { useEffect, useState } from 'react';
import InputWithPlaceholder from './InputWithPlaceholder';
import Title from './Title';

const StepTwo = ({ nextStep, previousStep }) => {
  const [isShowBox, setIsShowBox] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShowBox(true));
  }, []);

  const [uptime, setUptime] = useState(50);
  const [utilization, setUtilization] = useState(50);

  const handleChange = e => {
    switch (e.target.id) {
      case 'uptime-range':
        setUptime(e.target.value === '' ? 50 : e.target.value);
        break;

      case 'utilization-range':
        setUtilization(e.target.value === '' ? 50 : e.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <section
        className={`mx-20 mt-20 opacityComponent ${
          isShowBox ? 'component-show' : ''
        }`}
      >
        <div className="mt-20 flex justify-between">
          <Title text={'Uptime'} />
          <div className="max-w-[400px] text-xl  text-gray-500">
            Our normal operational numbers are the perfect baseline to start.
            Even though you welcome to adjust them. Now, Marvin assures that
            your operations will involve Robertson's undaunted. What level of
            uptime can you anticipate from Xynlog? After monitoring machines for
            a few weeks, vertical service enhancements increase performance to
            90%
          </div>
        </div>

        <div className="mt-20 flex justify-between">
          <div className="w-[500px]">
            <label className="block mb-2  text-xl font-medium text-gray-300 dark:text-white">
              Current Machine Uptime
            </label>
            <input
              onChange={handleChange}
              id="uptime-range"
              type="range"
              className="w-full h-2 bg-gradient-to-r from-blue-900 to-purple-600 rounded-lg appearance-none cursor-pointer "
            />
          </div>

          <div className="w-[400px] mt-auto">
            <div>
              <InputWithPlaceholder
                placeholder={0}
                units={'%'}
                nameInput={'uptime'}
                handleChange={handleChange}
                value={uptime}
              />
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-between">
          <Title text={'Utilization'} />
          <div className="max-w-[400px] text-xl  text-gray-500">
            Our normal operational numbers are the perfect baseline to start.
            Even though you welcome to adjust them. Now, Marvin assures that
            your operations will involve Robertson's undaunted. What level of
            uptime can you anticipate from Xynlog? After monitoring machines for
            a few weeks, vertical service enhancements increase performance to
            90%
          </div>
        </div>

        <div className="mt-20 flex justify-between">
          <div className="w-[500px]">
            <label className="block mb-2  text-xl font-medium text-gray-300 dark:text-white">
              Current Utilization Rate
            </label>
            <input
              onChange={handleChange}
              id="utilization-range"
              type="range"
              className="bg-gradient-to-r from-blue-900 to-purple-600 w-full h-2  rounded-lg appearance-none cursor-pointer "
            />
          </div>
          <div className="w-[400px] mt-auto">
            <div>
              <InputWithPlaceholder
                placeholder={0}
                units={'%'}
                nameInput={'utilization'}
                handleChange={handleChange}
                value={utilization}
              />
            </div>
          </div>
        </div>

        <div
          className={` my-20   ${
            uptime === 0
              ? 'text-gray-500'
              : 'text-gray-50 transition-all ease-out'
          }`}
        >
          <div className="flex  ">
            <p className="min-w-[320px]">Operator Cost per Hour </p>
            <p className="">
              - ${' '}
              {uptime === 0
                ? 0
                : Number(uptime) + Number(utilization) + Number(uptime) / 10}
            </p>
          </div>
          <div className="flex ">
            <p className="min-w-[320px]">Working days per year</p>
            <p className="">
              - $ {Number(uptime) * Number(utilization) * 0.88}
            </p>
          </div>
          <div className="flex ">
            <p className="min-w-[320px]">Machine Uptime with xynLOG</p>
            <p className="">
              {' '}
              {uptime === 0
                ? '- 0%'
                : '- ' +
                  (Math.random() * 100 + utilization / 10).toFixed(1) +
                  '%'}
            </p>
          </div>

          <div className="ml-auto w-[300px] ">
            <button
              onClick={() => {
                nextStep();
              }}
              type="button"
              className=" text-black mt-10 mr-5 text-xl hover:bg-blue-500 transition-all font-bold bg-blue-400 px-5 py-3"
            >
              Next
            </button>

            <button
              onClick={() => {
                previousStep();
              }}
              type="button"
              className=" text-black mt-10 text-xl hover:bg-blue-500 transition-all font-bold bg-blue-400 px-5 py-3"
            >
              Previous
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default StepTwo;
