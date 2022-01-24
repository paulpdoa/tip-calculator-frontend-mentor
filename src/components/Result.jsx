
const Result = ({ tip,total,setTotal,setTip,bill,people }) => {

    return (
        <div className="m-5 result-bg rounded-xl relative">
            <div className="flex items-center justify-between px-5 py-5 ">
                <div>
                    <h2 className="text-white text-lg font-bold">Tip Amount</h2>
                    <span className="text-gray-400 text-sm font-bold">/ person</span>   
                </div>
                <span className="font-bold md:text-4xl text-3xl numbers">${tip.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between px-5 py-2">
                <div>
                    <h2 className="text-white text-lg font-bold">Total</h2>
                    <span className="text-gray-400 text-sm font-bold">/ person</span>
                </div>
                <span className="font-bold md:text-4xl text-3xl numbers">${(tip + Number(bill) / people).toFixed(2)}</span>
            </div>

            <div className="md:absolute md:bottom-10 w-full flex justify-center py-5">
                <button className="button-bg button-text rounded-md text-lg font-bold h-10 result-btn" style={{ width:"90%" }}>RESET</button>
            </div>
        </div>
    )
}

export default Result;