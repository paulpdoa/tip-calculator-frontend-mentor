import { ReactComponent as Dollar } from '../assets/icon-dollar.svg';
import { ReactComponent as Person } from '../assets/icon-person.svg';

import { useState } from 'react';

const Calculator = ({ bill,people,custom,setCustom,setPeople,setBill,setTip }) => {

    const [five,setFive] = useState(5);
    const [ten,setTen] = useState(10);
    const [fifteen,setFifteen] = useState(15);
    const [twentyFive,setTwentyFive] = useState(25);
    const [fifty,setFifty] = useState(50);
    const [active,setActive] = useState(0);

    const calcTip = (tip) => {
        let result = (tip / 100 * bill) / people;
        setTip(result);
        setActive(tip);
    }

    return (
        <div className="col-span-1 flex flex-col gap-5 px-5 py-5">
            <div>
                <h2 className="text-lg font-bold text-gray-500">Bill</h2>
                <div className="relative">
                    <input onChange={(e) => setBill(e.target.value)} className="text-right button-text font-bold w-full rounded-md outline-2 outline-emerald-400" type="number" name="bill" placeholder="0.0" />
                    <span className="absolute left-3 top-3"><Dollar /></span>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-bold text-gray-500">Select Tip %</h2>
                <div className="grid md:grid-cols-3 grid-cols-2 gap-5 md:grid-rows-2 grid-rows-3 btns">
                    <button onClick={() => calcTip(five)} className={ active === 5 ? "font-bold result-bg rounded-md active-btn text-white" : "font-bold result-bg rounded-md text-white" }>5%</button>
                    <button onClick={() => calcTip(ten)} className={ active === 10 ? "font-bold result-bg rounded-md active-btn text-white" : "font-bold result-bg rounded-md text-white" }>10%</button>
                    <button onClick={() => calcTip(fifteen)} className={ active === 15 ? "font-bold result-bg rounded-md active-btn text-white" : "button-bg button-text rounded-md font-bold" }>15%</button>
                    <button onClick={() => calcTip(twentyFive)} className={ active === 25 ? "font-bold result-bg rounded-md active-btn text-white" : "font-bold result-bg rounded-md text-white" }>25%</button>
                    <button onClick={() => calcTip(fifty)} className={ active === 50 ? "font-bold result-bg rounded-md active-btn text-white" : "font-bold result-bg rounded-md text-white" }>50%</button>
                    <input onKeyPress={(e) => e.key === "Enter" && calcTip(custom)} onChange={(e) => setCustom(e.target.value)} className="md:text-right text-center font-bold w-full outline-2 outline-emerald-400" type="number" placeholder="Custom" />
                </div>
            </div>

            <div>
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold text-gray-500">Number of People</h2>
                    { people < 1 && <h2 className="text-lg font-bold text-red-500">Can't be zero</h2> }
                </div>
                <div className="relative">
                    <input value={people > 0 && people} onKeyPress={(e) => e.key === "Enter" && calcTip(people) } value={people} onChange={(e) => setPeople(e.target.value)} className={ people < 1 ? "text-right button-text font-bold w-full outline-2 outline-red-500 rounded-md" : "text-right button-text font-bold outline-2 outline-emerald-400 w-full rounded-md"} type="number" name="custom" placeholder="0" />
                    <span className="absolute left-3 top-3"><Person /></span>
                </div>
            </div>
        </div>
    )
}

export default Calculator;