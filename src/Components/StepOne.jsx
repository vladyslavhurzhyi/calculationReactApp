import { useEffect, useState } from 'react';
import InputWithPlaceholder from './InputWithPlaceholder';
import Title from './Title';

const StepOne = ({ nextStep }) => {
  const [isShowBox, setIsShowBox] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShowBox(true));
  }, []);

  const [operationHours, setOperationHours] = useState(0);
  const [cycleTime, setCycleTime] = useState(0);
  const [costPart, setCostPart] = useState(0);
  const [sellingPrice, setSellingPrice] = useState(0);

  const handleChange = e => {
    switch (e.target.name) {
      case 'operationHours':
        if (e.target.value === '') {
          setOperationHours(0);
        } else {
          setOperationHours(e.target.value);
        }
        break;

      case 'cycleTime':
        if (e.target.value === '') {
          setCycleTime(0);
        } else {
          setCycleTime(e.target.value);
        }
        break;

      case 'costPart':
        if (e.target.value === '') {
          setCostPart(0);
        } else {
          setCostPart(e.target.value);
        }
        break;

      case 'sellingPrice':
        if (e.target.value === '') {
          setSellingPrice(0);
        } else {
          setSellingPrice(e.target.value);
        }
        break;

      default:
        break;
    }
  };

  const applyAverageValues = e => {
    setOperationHours(10);
    setCycleTime(30);
    setCostPart(10);
    setSellingPrice(20);
  };

  return (
    <>
      <section
        className={`mx-20 mt-20 opacityComponent ${
          isShowBox ? 'component-show' : ''
        }`}
      >
        <div className="flex justify-between">
          <Title text={'Your Operations'} />

          <div className="max-w-[400px] text-xl  text-gray-500">
            Our normal operational numbers are the perfect baseline to start.
            Even though you welcome to adjust them. Now, Marvin assures that
            your operations will involve Robertson's undaunted. What level of
            uptime can you anticipate from Xynlog? After monitoring machines for
            a few weeks, vertical service enhancements increase performance to
            90%
          </div>
        </div>
        <div className="mt-20">
          <p className="text-3xl text-gray-300">Production Capacity</p>
          <div className=" flex justify-between mt-10 ">
            <div>
              <button
                onClick={applyAverageValues}
                type="button"
                className="ml-10 text-black text-xl hover:bg-blue-500 transition-all font-bold bg-blue-400 px-5 py-3"
              >
                Apply average values
              </button>

              <div>
                <p className="ml-10 text-gray-300 text-xl">
                  Operation hours per day <br /> (Manned + Unmanned)
                </p>
                <InputWithPlaceholder
                  placeholder={10}
                  handleChange={handleChange}
                  units={'h'}
                  nameInput={'operationHours'}
                />
              </div>
            </div>

            <div className="w-[400px] mt-auto">
              <div>
                <p className="text-gray-300 text-xl">
                  Cycle Time Per Part (minutes)
                </p>
                <InputWithPlaceholder
                  placeholder={30}
                  handleChange={handleChange}
                  units={'m'}
                  nameInput={'cycleTime'}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-between">
          <Title text={'Your Revenue'} />
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
          <div className="w-[400px] mt-auto">
            <div>
              <p className="text-gray-300 text-xl">Your cost per part</p>
              <InputWithPlaceholder
                placeholder={0}
                units={'$'}
                nameInput={'costPart'}
                handleChange={handleChange}
              />
            </div>
          </div>

          <div className="w-[400px] mt-auto">
            <div>
              <p className="text-gray-300 text-xl">
                Your selling price per part
              </p>
              <InputWithPlaceholder
                placeholder={0}
                units={'$'}
                nameInput={'sellingPrice'}
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div
          className={` my-20  text-gray-500 ${
            operationHours === 0
              ? 'text-gray-500'
              : 'text-gray-50 transition-all ease-out'
          }`}
        >
          <div className="flex  ">
            <p className="min-w-[320px]">Operator Cost per Hour </p>
            <p className="">
              - ${' '}
              {operationHours === 0
                ? 0
                : Number(operationHours) +
                  Number(cycleTime) +
                  Number(costPart) / 10}
            </p>
          </div>
          <div className="flex ">
            <p className="min-w-[320px]">Working days per year</p>
            <p className="">
              - $ {Number(operationHours) * Number(cycleTime) * 0.88}
            </p>
          </div>
          <div className="flex ">
            <p className="min-w-[320px]">Machine Uptime with xynLOG</p>
            <p className="">
              {' '}
              {operationHours === 0
                ? '- 0%'
                : '- ' +
                  (Math.random() * 100 + sellingPrice / 10).toFixed(1) +
                  '%'}
            </p>
          </div>

          <button
            onClick={() => {
              nextStep();
            }}
            type="button"
            className=" text-black mt-10 text-xl hover:bg-blue-500 transition-all font-bold bg-blue-400 px-5 py-3"
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default StepOne;
