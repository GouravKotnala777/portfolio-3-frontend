import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Input from "../reusable/Input.component";
import useTheme from "../../hooks/useTheme";



const SENTANCE:string[] = [
    "The quick brown fox jumps over the lazy dog.",
    //"The ",
    "The quick brown fox jumps over the lazy dog while the silent forest watches calmly.",
    "The quick brown fox jumps over the lazy dog while the silent forest watches calmly as birds scatter and leaves rustle under the moonlight."
];
const CAT_IMAGES = ["typing-cat.png", "typing-cat-left.png", "typing-cat-right.png"];
const timeForLevel = [1500, 2500, 3500];

function returnNumber0To2(num:number) {
    if (num === 0) return 0;
    return (num%2)+1;
};
function findLevel(gameLevel:number) {
    return gameLevel === 1?
        "LEVEL 1"
        :
        gameLevel === 2?
            "LEVEL 2"
            :
            "FINAL LEVEL";
};
let typingCateAnimationTimer = 0;


function TypingGame() {
    const [typedSentance, setTypedSentance] = useState<string>("");
    const [timer, setTimer] = useState<number>(1500);
    const [frameIndex, setFrameIndex] = useState<number>(0);
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [gameLevel, setGameLeve] = useState<number>(1);
    const [result, setResult] = useState<"win"|"loss"|null>(null);
    const {theme} = useTheme();
    const inputRef = useRef<HTMLDivElement|null>(null);

    function animateTypingCat(input:string) {
        if(input === SENTANCE[gameLevel-1][typedSentance.length]){
            clearTimeout(typingCateAnimationTimer);
            setFrameIndex(prev => prev+1);
            typingCateAnimationTimer = setTimeout(() => {                    
                setFrameIndex(0);
            }, 300);
        }
    };

    function func(e:KeyboardEvent<HTMLInputElement>) {
        const key = e.key;

        if (!inputRef.current) {
            inputRef.current = e.currentTarget
        }

        if (key === "Tab") {
            const boxElem = e.currentTarget.previousElementSibling?.previousElementSibling;
            console.log(boxElem);
            if (!boxElem) return;
            boxElem?.replaceChildren("");
            e.currentTarget.value = "";
        }
        
        if (key.length === 1 && key.trim() !== ""){
            setIsStarted(true);
            animateTypingCat(key);
        };
    };

    function func2(){
        setIsFocused(true);
    };

    function resetHandler() {
        if (!inputRef.current || !inputRef.current.previousElementSibling) {
            console.log("inputRef.current or inputRef.current.previousElementSibling not found", inputRef.current);
            return;
        }
        inputRef.current.blur();
        const boxRef = inputRef.current.previousElementSibling.previousElementSibling;
        boxRef?.replaceChildren("");
        setIsStarted(false);
        setTypedSentance("");
        setIsFocused(false);
        setIsCompleted(false);
        if (gameLevel === 1) {
            setTimer(1500);
        }
    };

    useEffect(() => {
        if (isStarted) {

            const timerID = setInterval(() => {
                setTimer((prev) => {
                    if (prev<=0) {
                        resetHandler();
                        setResult("loss")
                        setTimeout(() => {
                            setGameLeve(1);
                            setResult(null);
                        }, 6000);
                        return 1500;
                    }
                    else{
                        return prev-1;
                    }
                });
            }, 10);
    
            return() => clearInterval(timerID);
        }
    }, [isStarted]);

    useEffect(() => {
        if (SENTANCE[gameLevel-1] === typedSentance) {
            setIsCompleted(true);
            if (gameLevel === 3) {
                setResult("win");
                setTimeout(() => {
                    setGameLeve(1);
                    setResult(null);
                }, 6000);
            }
            else{
                setGameLeve(gameLevel+1);
                setTimer(timeForLevel[gameLevel]);
                setIsStarted(false);
            }
        }
    }, [typedSentance]);

    
    return(
        <div className="max-w-xl mx-auto rounded-lg relative overflow-hidden">
        
        <div className="p-5">
            <h1 className="p-2 h-30 pb-10">
                {
                    SENTANCE[gameLevel-1].split("").map((c, index) => (
                        <span className={`${
                            typedSentance[index]?
                                c === typedSentance[index]?
                                    "text-neutral-600 dark:text-neutral-50"
                                    :
                                    "text-red-600 dark:text-red-500"
                                :
                                "text-orange-300 dark:text-orange-200"
                        } font-semibold`}>{c}</span>
                    ))
                }
            </h1>
            <div className="">
                <div className="">
                    <div className="relative mt-5">
                        <img src={CAT_IMAGES[returnNumber0To2(frameIndex)]} alt={CAT_IMAGES[returnNumber0To2(frameIndex)]} className="w-30 absolute right-2 md:right-20 sm:right-2 -bottom-4.75" />
                    </div>
                    <Input fontSize="[font-size:var(--text-md)]" fontWeight="font-semibold" placeHolder="Start typing here..." setData={setTypedSentance} onKeyDown={func} onFocus={func2} onBlur={resetHandler} manuallyStartAnimation={isCompleted} theme={theme} btnIconPathD="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
                </div>
            </div>
            <div className={`text-orange-300 dark:text-orange-200 [font-size:var(--text-xs)] font-semibold flex justify-between items-center mt-4 ${isFocused?"opacity-100 blur-0":"opacity-0 blur-xs"} transition-all ease-in-out duration-300`}>
                <div className="w-25 flex justify-between items-center">
                    <span className="bg-orange-50 [box-shadow:-1px_-1px_2px_0.1px_#00000010_inset] dark:[box-shadow:-1px_-1px_2px_0.1px_#ffffff10_inset] dark:bg-neutral-800 font-bold px-3 py-1 rounded-sm">TAB</span>
                    <span>-</span>
                    <span>restart</span>
                </div>
                <div className="font-bold">
                    {findLevel(gameLevel)}
                </div>
                <div className="w-10 font-bold text-left tracking-widest">{timer/100}</div>
            </div>
        </div>

        <div className={`absolute ${result === "win"?"top-0 blur-none":"-top-full blur-md"} transition-all ease-in-out duration-1000 delay-300 left-0 h-full w-full bg-white dark:bg-neutral-900 content-center`}>
            <div className="">
                <div className="text-5xl font-extrabold text-neutral-800 dark:text-neutral-100 text-center pb-3 animate-pulse">You Win🎉</div>
                <div className="[font-size:var(--text-md)] text-neutral-400 dark:text-neutral-500 text-center">your typing speed is next of the chart 🫡.</div>
            </div>
        </div>
        <div className={`absolute ${result === "loss"?"top-0 blur-none":"-top-full blur-md"} transition-all ease-in-out duration-1000 delay-300 left-0 h-full w-full bg-white dark:bg-neutral-900 content-center`}>
            <div className="">
                <div className="text-5xl font-extrabold text-neutral-800 dark:text-neutral-100 text-center pb-3 animate-pulse">You Loss☠️</div>
                <div className="[font-size:var(--text-md)] text-neutral-400 dark:text-neutral-500 text-center">try later next time 🫠.</div>
            </div>
        </div>
        </div>
    )
};

export default TypingGame;