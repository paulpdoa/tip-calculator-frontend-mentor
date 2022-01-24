import Calculator from "./components/Calculator";
import Result from "./components/Result";
import { useState } from 'react';
import { ReactComponent as Logo } from './assets/logo.svg';

const App = () =>  {

  const [bill,setBill] = useState(0);
  const [people,setPeople] = useState(1);
  const [custom,setCustom] = useState(0);

  const [tip,setTip] = useState(0.00);
  const [total] = useState(0.00);


  return (
    <>
     <div className="md:flex md:justify-center md:items-center w-full">
        <div className="md:max-w-7xl md:w-full flex flex-col items-center">
          <h1 className="select-none uppercase font-semibold text-lg title md:relative absolute top-6"><Logo /></h1>
          <div className="md:grid md:grid-cols-2 md:w-3/4 md:h-1/2 bg-white md:mt-20 md:rounded-2xl md:relative h-4/5 overflow-y-scroll rounded-t-2xl absolute bottom-0">
            <Calculator bill={bill} people={people} custom={custom} setPeople={setPeople} setCustom={setCustom} setBill={setBill} setTip={setTip} />
            <Result tip={tip} total={total} setTotal={setTip} bill={bill} people={people} />
          </div>
        </div>
     </div>
    </>
  );
}

export default App;
