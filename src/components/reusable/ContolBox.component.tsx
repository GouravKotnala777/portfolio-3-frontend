import type { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react";

export type InputTypes={name:string; type:HTMLInputTypeAttribute|"select"; options:(string|number|boolean)[];};

interface ControlBoxPropTypes<ControllerStateType>{
    inputs:InputTypes[];
    controlState:ControllerStateType;
    setControlState:Dispatch<SetStateAction<ControllerStateType>>;
    isAnimationRunning:boolean;
};



function ControlBox<ControllerStateType>({inputs, controlState, setControlState, isAnimationRunning}:ControlBoxPropTypes<ControllerStateType>) {

    function hexToRgb(hex: string): string {
        hex = hex.replace("#", "");

        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);

        return `${r},${g},${b}`;
    }
    
    return(
        <div className={`w-55 border border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-400 text-[12px] py-2 px-3 rounded-sm font-mono font-semibold bg-gray-100 dark:bg-gray-800 ${isAnimationRunning?"opacity-50":"opacity-100"} transition-opacity ease-in-out duration-300 z-1`}>
            {
                inputs.map((input, index) => {
                    if (input.type === "text") {
                        return(
                            <div key={index} className="flex justify-between">
                                <label htmlFor={input.name}>{input.name}</label>
                                <input id={input.name} type={input.type} name={input.name} placeholder={controlState[input.name as keyof ControllerStateType] as string} disabled={isAnimationRunning} className="border border-dotted w-10 text-right" onChange={(e) => setControlState({...controlState, [e.target.name]:e.target.value})} />
                            </div>
                        )
                        
                    }
                    else if (input.type === "number") {
                        return(
                            <div key={index} className="flex justify-between">
                                <label htmlFor={input.name}>{input.name}</label>
                                <input id={input.name} type={input.type} name={input.name} placeholder={controlState[input.name as keyof ControllerStateType] as string} disabled={isAnimationRunning} className="border border-dotted w-10 text-right" onChange={(e) => setControlState({...controlState, [e.target.name]:Number(e.target.value)})} />
                            </div>
                        )
                        
                    }
                    else if (input.type === "color") {
                        return(
                            <div key={index} className="flex justify-between">
                                <label htmlFor={input.name}>{input.name}</label>
                                <input id={input.name} type={input.type} name={input.name} value={`rgb(${controlState[input.name as keyof ControllerStateType]})`} disabled={isAnimationRunning} onChange={(e) => setControlState({...controlState, [e.target.name]:hexToRgb(e.target.value)})} />
                            </div>
                        )
                        
                    }
                    else if (input.type === "select") {
                        return(
                            <div key={index} className="flex justify-between">
                                <label htmlFor={input.name}>{input.name}</label>
                                <select id={input.name} defaultValue={JSON.stringify(controlState[input.name as keyof ControllerStateType])} name={input.name} disabled={isAnimationRunning} className="w-10" onChange={(e) => setControlState({...controlState, [e.target.name]:e.target.value})}>
                                    {
                                        input.options.map((opt, optInd) => (
                                            <option key={`${opt}-${optInd}`} className="">{opt}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
};

export default ControlBox;