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
        <div className="mt-20 flex justify-between">
          <Title text={'Potential'} />
          <div className="max-w-[500px] text-xl  text-gray-500">
            Our normal operational numbers are the perfect baseline to start.
            Even though you welcome to adjust them. Now, Marvin assures that
            your operations will involve Robertson's undaunted. What level of
            uptime can you anticipate from Xynlog? After monitoring machines for
            a few weeks, vertical service enhancements increase performance to
            90%
          </div>
        </div>

        <button
          onClick={() => {
            previousStep();
          }}
          type="button"
          className=" text-black mt-10 text-xl hover:bg-blue-500 transition-all font-bold bg-blue-400 px-5 py-3"
        >
          Previous
        </button>
      </section>
    </>
  );
};

export default StepThree;
