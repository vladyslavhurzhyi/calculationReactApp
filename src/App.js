import './index.css';
import { useState } from 'react';
import ProgressBar from './Components/ProgressBar';
import StepOne from './Components/StepOne';
import StepTwo from './Components/StepTwo';
import StepThree from './Components/StepThree';

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setStep(prevStep => {
      if (prevStep !== 3) {
        return prevStep + 1;
      }
    });
  };

  const previousStep = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setStep(prevStep => {
      if (prevStep !== 1) {
        return prevStep - 1;
      }
    });
  };

  return (
    <>
      <ProgressBar step={step} />
      {step === 1 && <StepOne nextStep={nextStep} />}
      {step === 2 && (
        <StepTwo nextStep={nextStep} previousStep={previousStep} />
      )}
      {step === 3 && <StepThree previousStep={previousStep} />}
    </>
  );
}

export default App;
