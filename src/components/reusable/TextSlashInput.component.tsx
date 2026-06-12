import {useRef, useState, type ChangeEvent, type KeyboardEvent } from "react";

interface TextSlashInputPropTypes{
    placeHolder?:string;
};
let textingTimer = 0;
let progressRingClearInterval = 0;
function TextSlashInput({placeHolder=""}:TextSlashInputPropTypes) {
    const [text, setText] = useState(placeHolder);
    const [textCopy, setTextCopy] = useState("");
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [isTexting, setIsTexting] = useState<boolean>(false);
    const childRef = useRef<HTMLDivElement|null>(null);
    const inputRef = useRef<HTMLInputElement|null>(null);


    function setTextHandler(e:ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
        setTextCopy(e.target.value);
        setIsTexting(true);
        clearTimeout(textingTimer);
        textingTimer = setTimeout(() => {
            setIsTexting(false);
        }, 500);
    };

    function clearProgressRing() {
        setTextCopy((prev) => {
            let string = prev.split("");
            string.pop();
            return string.join("");
        })
    };

    function clearInput() {
        if (placeHolder && text===placeHolder) return;

        if (!isAnimating) {
            setIsAnimating(true);
        }
        setTimeout(() => {
            clearInterval(progressRingClearInterval);
            setIsAnimating(false);
            console.log("khatam....");
            const inputElement = inputRef.current
            if (!inputElement) return;
            inputElement.value = "";
            setText("");
        }, (((text.length)/11)*1000)+1500);


        progressRingClearInterval = setInterval(() => {
            console.log("chal raha...");
            clearProgressRing();
        }, ((((text.length)/11)*1000)+1500)/text.length);
    };

    function onKeyEnterHandler(e:KeyboardEvent<HTMLInputElement>) {
        const key = e.key;
        if (key === "Enter") {
            clearInput();
        }
    };
    return(
        <>
            <div className={`border border-neutral-200 dark:border-neutral-200/30 ${(text===placeHolder && placeHolder)?"text-neutral-400/50":"text-neutral-600  dark:text-neutral-300"} focus-within:[box-shadow:0px_0px_8px_0.1px_#d4d4d490_inset] flex justify-between items-center rounded-full px-1.25 py-1 transition-shadow duration-300 ease-in-out`}>
                <div className="relative w-[calc(100%-41px)] overflow-hidden">
                    <input ref={inputRef} disabled={isAnimating} type="text" maxLength={160} className="px-2 w-full max-w-full h-10 absolute text-transparent font-mono outline-none caret-gray-500" onChange={setTextHandler} onKeyDown={onKeyEnterHandler} />
                    <div ref={childRef} className="w-full pointer-events-none">
                        <div className="h-10 flex justify-end">
                            <div className="flex flex-col relative h-10 pl-2 mr-auto font-mono transition-transform duration-9000 ease-in"
                                style={{
                                    //animation:(isAnimating && !isTexting)?`slide ${(text.length)/11}s 3.5s linear both`:"none"
                                    animation:(isAnimating && !isTexting)?`slide ${(text.length)/11}s ${(childRef.current?.clientWidth||10)<=120?"0.8s":"3.5s"} linear both`:"none"
                                }}
                            >
                                <div className="w-5 h-5 rounded-3xl  absolute top-[50%] -right-5 -translate-y-[50%]"></div>
                                <div className="w-full h-[50%] flex">
                                    {
                                        text.split("").map((c, index) => (
                                            <div key={index} className="inline-block overflow-hidden h-full"
                                                style={{
                                                    animation:(isAnimating && !isTexting)?`textUpperPart 1.5s ${(text.length-index)*0.09}s linear both`:"none",
                                                }}
                                            >
                                                {
                                                    c===" "?
                                                    <div className="translate-y-[6.3px]">&nbsp;</div>
                                                    :
                                                    <div className="translate-y-[6.3px]">{c}</div>
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="w-full h-[50%] flex">

                                    {
                                        
                                            text.split("").map((c, index) => (
                                                <div key={index} className="inline-block overflow-hidden h-full"
                                                    style={{
                                                        animation:(isAnimating && !isTexting)?`textLowerPart 1.5s ${(text.length-index)*0.09}s linear both`:"none",
                                                    }}
                                                >
                                                    {
                                                        c===" "?
                                                        <div className="-translate-y-[13.7px]">&nbsp;</div>
                                                        :
                                                        <div className="-translate-y-[13.7px]">{c}</div>
                                                    }
                                                </div>
                                            ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="rounded-full w-10 h-10 overflow-hidden relative">
                    <div className="w-full h-full rounded-full"
                        style={{
                            background:`conic-gradient(at center, orange 0% ${((Math.floor(textCopy.length/4)*4)/160)*100}%, transparent ${((Math.floor(textCopy.length/4)*4)/160)*100}% 100%)`
                        }}
                    ></div>
                    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[87%] h-[87%] bg-gray-100 dark:bg-gray-800 rounded-full"></div>
                    <div className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[50%] h-[50%] ${(!isAnimating&&!isTexting&&text.length===160)&&"bg-sky-400 dark:bg-sky-600"} ${(!isAnimating&&!isTexting&&text.length<160)&&"bg-neutral-900 dark:bg-neutral-500"} ${isTexting&&"bg-orange-500 animate-pulse"} ${(isAnimating && !isTexting)&&"bg-orange-500 animate-ping"} transition-all duration-500 ease-in-out rounded-full`}></div>
                    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] border-2 border-dashed border-white dark:border-neutral-900 w-full h-full rounded-full"></div>
                    <button className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[90%] h-[90%] rounded-full bg-gray-200/5 dark:bg-gray-50/5 text-neutral-800 backdrop-blur-[6px]" onClick={clearInput}>
                        <div className="h-full w-full rounded-full flex justify-around items-center">
                            {
                                [1,2,3].map((_, i) => (
                                    <div className={`w-1.5 h-1.5 rounded-full bg-neutral-800 dark:bg-neutral-100`}
                                        style={{
                                            transform:isAnimating?"translate(0px, 3px)":"translate(0px, 0px)",
                                            opacity:(isAnimating||isTexting)?1:0,
                                            transitionDuration:"0.3s",
                                            animation:isAnimating?`oscillateUpDown 1s ${i*0.3}s linear infinite`:`dotPulseLoader 1s ${i*0.3}s ease-in-out infinite`
                                        }}
                                    ></div>
                                ))
                            }
                        </div>
                    </button>
                </div>

            </div>

            <style>{`
                @keyframes dotPulseLoader {
                    0%{ transform:scale(0.9) }
                    50%{ transform:scale(1.4) }
                    100%{ transform:scale(0.9) }
                }
                @keyframes oscillateUpDown {
                    0%{ transform:translate(0px, 3px) }
                    50%{ transform:translate(0px, -3px) }
                    100%{ transform:translate(0px, 3px) }
                }
                @keyframes slide {
                    0%{ transform:translate(0px, 0px) }
                    100%{ transform:translate(100%, 0px) }
                }
                @keyframes textUpperPart {
                    0%{ transform:translate(0px, 0px) scale(1); filter:opacity(1); }
                    20%{ transform:translate(1px, -7px) scale(1.2); filter:opacity(1); }
                    40%{ transform:translate(2px, -14px) scale(1.5); filter:opacity(0.5); }
                    60%{ transform:translate(1px, -14px) scale(1.2); filter:opacity(0.3); }
                    80%{ transform:translate(0.5px, -7px) scale(1); filter:opacity(0.2); }
                    95%{ transform:translate(0px, -4px) scale(0.9); filter:opacity(0.2); }
                    100%{ transform:translate(0px, -4px) scale(0.9); filter:opacity(0); }
                }
                @keyframes textLowerPart {
                    0%{ transform:translate(0px, 0px) scale(1); filter:opacity(1); }
                    20%{ transform:translate(1px, 7px) scale(1.2); filter:opacity(1); }
                    40%{ transform:translate(2px, 14px) scale(1.5); filter:opacity(1); }
                    60%{ transform:translate(1px, 14px) scale(1.2); filter:opacity(0.5); }
                    80%{ transform:translate(0.5px, 7px) scale(1); filter:opacity(0.3); }
                    95%{ transform:translate(0px, 4px) scale(0.9); filter:opacity(0.3); }
                    100%{ transform:translate(0px, 4px) scale(0.9); filter:opacity(0); }
                }
            `}</style>
        </>
    )
}

export default TextSlashInput;


//@keyframes slide {
//    0%{ transform:translate(0px, 0px) }
//    20%{ transform:translate(10px, 0px) }
//    40%{ transform:translate(px, 0px) }
//    60%{ transform:translate(1px, 0px) }
//    80%{ transform:translate(0.5px, 0px) }
//    95%{ transform:translate(0px, 0px) }
//    100%{ transform:translate(0px, 0px) }
//}