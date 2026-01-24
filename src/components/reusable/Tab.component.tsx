import { useState, type MouseEvent, type ReactElement, type ReactNode } from "react";



interface TabPropTypes{
    panels:{
        tabIconPath?:ReactElement;
        tabName:string;
        content:ReactNode;
        code:string;
    }[]
};

function CopyButtonHandler(e:MouseEvent<HTMLButtonElement>, code:string) {
    const copyElem = e.currentTarget.firstChild;
    const pasteElem = e.currentTarget.lastChild;

    (copyElem as SVGElement).style.opacity = "0";
    (copyElem as SVGElement).style.filter = "blur(3px)";
    (pasteElem as SVGElement).style.opacity = "1";
    (pasteElem as SVGElement).style.filter = "blur(0px)";

    navigator.clipboard.writeText(code);
    
    setTimeout(() => {
        (copyElem as SVGElement).style.opacity = "1";
        (copyElem as SVGElement).style.filter = "blur(0px)";
        (pasteElem as SVGElement).style.opacity = "0";
        (pasteElem as SVGElement).style.filter = "blur(3px)";
    }, 3000);
};

function Tab({panels}:TabPropTypes) {
    const [activeTab, setActiveTab] = useState<number>(0);

    return(
        <div className={`bg-white dark:bg-neutral-900 rounded-md overflow-hidden p-3`}>
            <div className=" bg-neutral-200 dark:bg-neutral-800 flex justify-between p-2 rounded-tl-md rounded-tr-md">
                <div className="flex gap-3">
                    {
                        panels.map(({tabIconPath, tabName}, index) => (
                            <button key={index}
                                className={` ${index === activeTab?"bg-neutral-300 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-300":"bg-neutral-200 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-500"} flex justify-center items-center px-3 py-2 rounded-sm cursor-pointer`}
                                onClick={() => setActiveTab(index)}
                            >
                                {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">*/}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-4">
                                    {tabIconPath}
                                </svg>
                                <span className="[font-size:var(--text-sm)]">{tabName}</span>
                            </button>
                        ))
                    }
                </div>
                {
                    activeTab === 1 &&
                    <div className="">
                        <button className="[font-size:var(--text-sm)] text-neutral-700 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700 px-3 py-2 rounded-sm cursor-pointer relative transition-colors ease-in-out duration-300"
                            onClick={(e) => CopyButtonHandler(e, panels[1].code)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            className="size-4 transition-all ease-in-out duration-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            className="absolute size-4 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-all ease-in-out duration-600 opacity-0">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                            </svg>

                        </button>
                    </div>
                }
            </div>
            <div className={`border border-neutral-200 dark:border-none bg-white dark:bg-neutral-950 rounded-bl-md rounded-br-md
                `}>
                {
                    panels.map(({content}, index) => (
                        <>
                            {
                                index === activeTab && content
                            }
                        </>
                    ))
                }
            </div>

        </div>
    )
};

export default Tab;