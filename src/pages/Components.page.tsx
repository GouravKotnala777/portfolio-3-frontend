import {TextSlashInput, SlitherInput, MeteorMash, GooeyNavbar, FluidNavbar, PopupNavabr, DiaScrollerNavbar, ParticleVanishingInput} from "kotnala_ui";
import { useEffect, useState } from "react";
import Tab from "../components/reusable/Tab.component";
import { DIA_SCROLLER_NAVBAR_CODE, FLUID_NAVBAR_CODE, GOOEY_NAVBAR_CODE, METEOR_MASH_CODE, PARTICLE_VANISHING_INPUT_CODE, POPUP_NAVBAR_CODE, SLITHER_INPUT_CODE, TEXT_SLASH_INPUT_CODE } from "../utils/constants";
import useTheme from "../hooks/useTheme";
import CodeBlock from "../components/reusable/CodeBlock.component";
import { useLocation } from "react-router-dom";

type ThicknessPropTypes = 1|1.1|1.2|1.3|1.4|1.5|1.6|1.7|1.8|1.9|2|2.1|2.2|2.3|2.4|2.5|2.6|2.7|2.8|2.9|3|3.2|3.3|3.5|3.7|3.9|4|4.5|4.9|5|5.3|5.5|5.7;
interface SlitherAnimationTypes{
    waveLength?:"xs"|"sm"|"md"|"lg"|"xl"|"xxl";
    amplitude?:1|2|3|4|5|6|7|8|9;
    smoothness?:1|2|3|4|5|6|7|8|9;
    waveThickness?:ThicknessPropTypes;
    blurEffect?:boolean;
    shrinkEffect?:boolean;
};

const CODE_ICON = () => {
    return(
        <>
            <path d="M8 9l3 3l-3 3"></path>
            <path d="M13 15l3 0"></path>
            <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
        </>
    )
}
const PREVIEW_ICON = () => {
    return (
        <>
            <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
            <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
            <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
            <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
            <circle cx="12" cy="12" r="1"/>
            <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"/>
            
        </>        
    )
}
const COMMAND_ICON = () => {
    return (
        <>
            <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
            <path d="M6 8h.01"></path>
            <path d="M9 8h.01"></path>
        </>        
    )
}
const NAVITEMS:{
    iconPath: string;
    text: string;
    url: string;
}[] = [
    {iconPath:"m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25", text:"Home", url:"/home"},
    {iconPath:"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z", text:"Chat", url:"/chat"},
    {iconPath:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0", text:"Notifications", url:"/notifications"},
    {iconPath:"M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z", text:"Payments", url:"/payments"},
    {iconPath:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9", text:"Signout", url:"/signout"}
];


function Components() {
    const {theme} = useTheme();
    const [_, setData] = useState("");
    const {hash} = useLocation();
    const [isMeteorMashHovering, setIsMeteorMashHovering] = useState<boolean>(false);
    const [isAnimationRunning, setIsAnimationRunning] = useState<boolean>(false);
    const [slitherAnimationOptions, setSlitherAnimationOptions] = useState<SlitherAnimationTypes>({amplitude:1, smoothness:1, waveLength:"xs", waveThickness:1, blurEffect:true, shrinkEffect:true});


    useEffect(() => {
        if (!hash) return;
        
        const section = document.querySelector(hash);
        
        if (!section) return;

        const y = section.getBoundingClientRect().top+window.scrollY-50;

        window.scrollTo({top:y, behavior:"smooth"});

    }, [hash]);
    
    return(
        <section className=" flex flex-col gap-4 relative min-h-screen font-roboto selection:bg-neutral-300 dark:selection:bg-neutral-600 pt-30">
            <div className="absolute top-0 left-0 inset-0 border border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto"></div>

            {/* Particle Vanishing Input */}
            <div id="particle_vanishing_input" className="border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 z-1">
                <div className="w-full bg-white dark:bg-neutral-800 max-w-3xl mx-auto">
                    <Tab
                        panels={[
                            {
                                tabIconPath:PREVIEW_ICON(),
                                tabName:"Preview",
                                content:(
                                    <div className="relative">
                                        <div className="w-[40%] h-[20%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] dark:bg-neutral-800 blur-2xl"></div>
                                        <div className="h-80 w-60 mx-auto flex justify-center items-center">
                                            <ParticleVanishingInput theme={theme} setData={setData} />
                                        </div>
                                    </div>
                                ),
                                code:""
                            },
                            {
                                tabIconPath:COMMAND_ICON(),
                                tabName:"Command",
                                content:(
                                    <div className="p-4">
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg">Installation</div>
                                        <div className="text-neutral-500 dark:text-neutral-400 font-mono m-2">
                                            npm i kotnala_ui
                                        </div>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg mt-10">Prerequisite</div>
                                        <div className="text-neutral-400 dark:text-neutral-600 text-sm m-2">You should have Tailwind CSS installed before using this component.</div>
                                        <a target="_blank" href="https://tailwindcss.com/docs/installation/using-vite" className="text-gray-400 dark:text-gray-600 text-sm m-2">Tailwind Installation</a>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg mt-10">index.css :-</div>
                                        <div className="text-neutral-500 dark:text-neutral-400 font-mono m-2">
                                            @source "../node_modules/kotnala_ui"; <br/>
                                            <span className="text-sm">add this to css file in which you have imported tailwindcss</span>
                                        </div>
                                    </div>
                                ),
                                code:"npm i kotnala_ui"
                            },
                            {
                                tabIconPath:CODE_ICON(),
                                tabName:"Code",
                                content:<CodeBlock code={PARTICLE_VANISHING_INPUT_CODE} language="jsx" />,
                                code:PARTICLE_VANISHING_INPUT_CODE
                            }
                        ]}
                    />
                </div>
            </div>

            
           {/* Dia Scroller Navbar */}
            <div id="dia_scroller_navbar" className="border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 z-1">
                <div className="w-full bg-white dark:bg-neutral-800 max-w-3xl mx-auto">
                    <Tab
                        panels={[
                            {
                                tabIconPath:PREVIEW_ICON(),
                                tabName:"Preview",
                                content:(
                                    <div className="relative">
                                        <div className="w-[40%] h-[20%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] dark:bg-neutral-800 blur-2xl"></div>
                                        <div className="h-80 w-60 mx-auto flex justify-center items-center">
                                            <DiaScrollerNavbar navItems={NAVITEMS} padding="6px 12px" fontSize="18px" borderRadius="10px" previewGap="-60px" />
                                        </div>
                                    </div>
                                ),
                                code:""
                            },{
                                tabIconPath:COMMAND_ICON(),
                                tabName:"Command",
                                content:(
                                    <div className="p-4">
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg">Installation</div>
                                        <div className="text-neutral-500 dark:text-neutral-400 font-mono m-2">
                                            npm i kotnala_ui
                                        </div>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg mt-10">Prerequisite</div>
                                        <div className="text-neutral-400 dark:text-neutral-600 text-sm m-2">You should have Tailwind CSS installed before using this component.</div>
                                        <a target="_blank" href="https://tailwindcss.com/docs/installation/using-vite" className="text-gray-400 dark:text-gray-600 text-sm m-2">Tailwind Installation</a>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg mt-10">index.css :-</div>
                                        <div className="text-neutral-500 dark:text-neutral-400 font-mono m-2">
                                            @source "../node_modules/kotnala_ui"; <br/>
                                            <span className="text-sm">add this to css file in which you have imported tailwindcss</span>
                                        </div>
                                    </div>
                                ),
                                code:"npm i kotnala_ui"
                            },
                            {
                                tabIconPath:CODE_ICON(),
                                tabName:"Code",
                                content:<CodeBlock code={DIA_SCROLLER_NAVBAR_CODE} language="jsx" />,
                                code:DIA_SCROLLER_NAVBAR_CODE
                            }
                        ]}
                    />
                </div>
            </div>


           {/* Popup Navabr */}
            <div id="popup_navabr" className="border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 z-1">
                <div className="w-full bg-white dark:bg-neutral-800 max-w-3xl mx-auto">
                    <Tab
                        panels={[
                            {
                                tabIconPath:PREVIEW_ICON(),
                                tabName:"Preview",
                                content:(
                                    <div className="relative">
                                        <div className="w-[40%] h-[20%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] dark:bg-neutral-800 blur-2xl"></div>
                                        <div className="h-80 w-60 mx-auto flex justify-center items-center">
                                            <PopupNavabr navItems={NAVITEMS} />
                                        </div>
                                    </div>
                                ),
                                code:""
                            },{
                                tabIconPath:COMMAND_ICON(),
                                tabName:"Command",
                                content:(
                                    <div className="p-4">
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg">Installation</div>
                                        <div className="text-neutral-500 dark:text-neutral-400 font-mono m-2">
                                            npm i kotnala_ui
                                        </div>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg mt-10">Prerequisite</div>
                                        <div className="text-neutral-400 dark:text-neutral-600 text-sm m-2">You should have Tailwind CSS installed before using this component.</div>
                                        <a target="_blank" href="https://tailwindcss.com/docs/installation/using-vite" className="text-gray-400 dark:text-gray-600 text-sm m-2">Tailwind Installation</a>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg mt-10">index.css :-</div>
                                        <div className="text-neutral-500 dark:text-neutral-400 font-mono m-2">
                                            @source "../node_modules/kotnala_ui"; <br/>
                                            <span className="text-sm">add this to css file in which you have imported tailwindcss</span>
                                        </div>
                                    </div>
                                ),
                                code:"npm i kotnala_ui"
                            },
                            {
                                tabIconPath:CODE_ICON(),
                                tabName:"Code",
                                content:<CodeBlock code={POPUP_NAVBAR_CODE} language="jsx" />,
                                code:POPUP_NAVBAR_CODE
                            }
                        ]}
                    />
                </div>
            </div>

            
           {/* Fluid Navbar */}
            <div id="fluid_navbar" className="border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 z-1">
                <div className="w-full bg-white dark:bg-neutral-800 max-w-3xl mx-auto">
                    <Tab
                        panels={[
                            {
                                tabIconPath:PREVIEW_ICON(),
                                tabName:"Preview",
                                content:(
                                    <div className="relative">
                                        <div className="w-[40%] h-[20%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] dark:bg-neutral-800 blur-2xl"></div>
                                        <div className="h-80 w-60 mx-auto flex justify-center items-center">
                                            <FluidNavbar navItems={NAVITEMS} blobTop="20px" />
                                        </div>
                                    </div>
                                ),
                                code:""
                            },{
                                tabIconPath:COMMAND_ICON(),
                                tabName:"Command",
                                content:(
                                    <div className="p-4">
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg">Installation</div>
                                        <div className="text-neutral-500 dark:text-neutral-400 font-mono m-2">
                                            npm i kotnala_ui
                                        </div>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg mt-10">Prerequisite</div>
                                        <div className="text-neutral-400 dark:text-neutral-600 text-sm m-2">You should have Tailwind CSS installed before using this component.</div>
                                        <a target="_blank" href="https://tailwindcss.com/docs/installation/using-vite" className="text-gray-400 dark:text-gray-600 text-sm m-2">Tailwind Installation</a>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg mt-10">index.css :-</div>
                                        <div className="text-neutral-500 dark:text-neutral-400 font-mono m-2">
                                            @source "../node_modules/kotnala_ui"; <br/>
                                            <span className="text-sm">add this to css file in which you have imported tailwindcss</span>
                                        </div>
                                    </div>
                                ),
                                code:"npm i kotnala_ui"
                            },
                            {
                                tabIconPath:CODE_ICON(),
                                tabName:"Code",
                                content:<CodeBlock code={FLUID_NAVBAR_CODE} language="jsx" />,
                                code:FLUID_NAVBAR_CODE
                            }
                        ]}
                    />
                </div>
            </div>


           {/* Gooey Navbar */}
            <div id="gooey_navbar" className="border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 z-1">
                <div className="w-full bg-white dark:bg-neutral-800 max-w-3xl mx-auto">
                    <Tab
                        panels={[
                            {
                                tabIconPath:PREVIEW_ICON(),
                                tabName:"Preview",
                                content:(
                                    <div className="relative">
                                        <div className="w-[40%] h-[20%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] dark:bg-neutral-800 blur-2xl"></div>
                                        <div className="h-80 w-60 mx-auto flex justify-center items-center">
                                            <GooeyNavbar navItems={NAVITEMS} marginTop="300px" />
                                        </div>
                                    </div>
                                ),
                                code:""
                            },{
                                tabIconPath:COMMAND_ICON(),
                                tabName:"Command",
                                content:(
                                    <div className="p-4">
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg">Installation</div>
                                        <div className="text-neutral-500 dark:text-neutral-400 font-mono m-2">
                                            npm i kotnala_ui
                                        </div>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg mt-10">Prerequisite</div>
                                        <div className="text-neutral-400 dark:text-neutral-600 text-sm m-2">You should have Tailwind CSS & React Router Dom installed before using this component.</div>
                                        <a target="_blank" href="https://tailwindcss.com/docs/installation/using-vite" className="text-gray-400 dark:text-gray-600 text-sm m-2">Tailwind Installation</a>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg mt-10">index.css :-</div>
                                        <div className="text-neutral-500 dark:text-neutral-400 font-mono m-2">
                                            @source "../node_modules/kotnala_ui"; <br/>
                                            <span className="text-sm">add this to css file in which you have imported tailwindcss</span>
                                        </div>
                                    </div>
                                ),
                                code:"npm i kotnala_ui"
                            },
                            {
                                tabIconPath:CODE_ICON(),
                                tabName:"Code",
                                content:<CodeBlock code={GOOEY_NAVBAR_CODE} language="jsx" />,
                                code:GOOEY_NAVBAR_CODE
                            }
                        ]}
                    />
                </div>
            </div>



           {/* Meteor Mash */}
            <div id="meteor_mash" className="border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 z-1">
                <div className="w-full bg-white dark:bg-neutral-800 max-w-3xl mx-auto">
                    <Tab
                        panels={[
                            {
                                tabIconPath:PREVIEW_ICON(),
                                tabName:"Preview",
                                content:(
                                    <div className="relative">
                                        <div className="w-[40%] h-[20%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-sky-100 dark:bg-sky-900 blur-2xl"></div>
                                        <div className="absolute w-full h-full text-center content-center">
                                            <div className="text-gray-200 dark:text-gray-700 text-5xl font-semibold">Hover Me</div>
                                            <p className="mx-auto mt-4 w-[70%] text-gray-500 dark:text-gray-400 text-sm">Not every shooting star is meteor, some are astronaut poop returning with unnecessary drama 💩</p>
                                        </div>
                                        <div className="h-80 w-full mx-auto flex justify-center items-center"
                                            onMouseEnter={() => setIsMeteorMashHovering(true)} // these events are not necessary. i only added them to prevent the animation from running infinitely.
                                            onMouseLeave={() => setIsMeteorMashHovering(false)}
                                        >
                                            <MeteorMash
                                                theme={theme === "light"?"dark":"light"}
                                                animateUntill={isMeteorMashHovering} // by default it is true and run autometically for infinite
                                            />
                                        </div>
                                    </div>
                                ),
                                code:""
                            },{
                                tabIconPath:COMMAND_ICON(),
                                tabName:"Command",
                                content:(
                                    <div className="p-4">
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg">Installation</div>
                                        <div className="text-neutral-500 dark:text-neutral-400 font-mono m-2">
                                            npm i kotnala_ui
                                        </div>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg mt-10">Prerequisite</div>
                                        <div className="text-neutral-400 dark:text-neutral-600 text-sm m-2">You should have Tailwind CSS installed before using this component.</div>
                                        <a target="_blank" href="https://tailwindcss.com/docs/installation/using-vite" className="text-gray-400 dark:text-gray-600 text-sm m-2">Tailwind Installation</a>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg mt-10">index.css :-</div>
                                        <div className="text-neutral-500 dark:text-neutral-400 font-mono m-2">
                                            @source "../node_modules/kotnala_ui"; <br/>
                                            <span className="text-sm">add this to css file in which you have imported tailwindcss</span>
                                        </div>
                                    </div>
                                ),
                                code:"npm i kotnala_ui"
                            },
                            {
                                tabIconPath:CODE_ICON(),
                                tabName:"Code",
                                content:<CodeBlock code={METEOR_MASH_CODE} language="jsx" />,
                                code:METEOR_MASH_CODE
                            }
                        ]}
                    />
                </div>
            </div>


           {/* Text Slash Input */}
            <div id="text_slash_input" className="border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 z-1">
                <div className="w-full bg-white dark:bg-neutral-800 max-w-3xl mx-auto">
                    <Tab
                        panels={[
                            {
                                tabIconPath:PREVIEW_ICON(),
                                tabName:"Preview",
                                content:(
                                    <div className="w-full h-80 flex justify-center items-center">
                                        <div className="w-full max-w-80">
                                            <TextSlashInput setTextState={setData} placeHolder="Enter Your Name" />
                                        </div>
                                    </div>
                                ),
                                code:""
                            },{
                                tabIconPath:COMMAND_ICON(),
                                tabName:"Command",
                                content:(
                                    <div className="p-4">
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg">Installation</div>
                                        <div className="text-neutral-500 dark:text-neutral-400 font-mono m-2">
                                            npm i kotnala_ui
                                        </div>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg mt-10">Prerequisite</div>
                                        <div className="text-neutral-400 dark:text-neutral-600 text-sm m-2">You should have Tailwind CSS installed before using this component.</div>
                                        <a target="_blank" href="https://tailwindcss.com/docs/installation/using-vite" className="text-gray-400 dark:text-gray-600 text-sm m-2">Tailwind Installation</a>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg mt-10">index.css :-</div>
                                        <div className="text-neutral-500 dark:text-neutral-400 font-mono m-2">
                                            @source "../node_modules/kotnala_ui"; <br/>
                                            <span className="text-sm">add this to css file in which you have imported tailwindcss</span>
                                        </div>
                                    </div>
                                ),
                                code:"npm i kotnala_ui"
                            },
                            {
                                tabIconPath:CODE_ICON(),
                                tabName:"Code",
                                content:<CodeBlock code={TEXT_SLASH_INPUT_CODE} language="jsx" />,
                                code:TEXT_SLASH_INPUT_CODE
                            }
                        ]}
                    />
                </div>
            </div>

           {/* Slither Input */}
            <div id="slither_input" className="border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 z-1">
                <div className="w-full bg-white dark:bg-neutral-800 max-w-3xl mx-auto">
                    <Tab
                        panels={[
                            {
                                tabIconPath:PREVIEW_ICON(),
                                tabName:"Preview",
                                content:(
                                    <div className="w-full h-80 flex justify-center items-center flex-col gap-4">
                                        
                                        {/* control box */}
                                        <div className={`w-45 border border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-400 text-[12px] py-2 px-3 rounded-sm font-mono font-semibold bg-gray-100 dark:bg-gray-800 ${isAnimationRunning?"opacity-50":"opacity-100"} transition-opacity ease-in-out duration-300`}>
                                            <div className="flex justify-between">
                                                <label htmlFor="amplitude">Amplitude</label>
                                                <select id="amplitude" name="amplitude" disabled={isAnimationRunning} onChange={(e) => setSlitherAnimationOptions({...slitherAnimationOptions, [e.target.name]:e.target.value})}>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                </select>
                                            </div>
                                            <div className="flex justify-between">
                                                <label htmlFor="smoothness">Smoothness</label>
                                                <select id="smoothness" name="smoothness" disabled={isAnimationRunning} onChange={(e) => setSlitherAnimationOptions({...slitherAnimationOptions, [e.target.name]:e.target.value})}>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                </select>
                                            </div>
                                            <div className="flex justify-between">
                                                <label htmlFor="waveLength">WaveLength</label>
                                                <select id="waveLength" name="waveLength" disabled={isAnimationRunning} onChange={(e) => setSlitherAnimationOptions({...slitherAnimationOptions, [e.target.name]:e.target.value})}>
                                                    <option>xs</option>
                                                    <option>sm</option>
                                                    <option>md</option>
                                                    <option>lg</option>
                                                    <option>xl</option>
                                                    <option>xxl</option>
                                                </select>                                                
                                            </div>
                                            <div className="flex justify-between">
                                                <label htmlFor="waveThickness">WaveThickness</label>
                                                <select id="waveThickness" name="waveThickness" disabled={isAnimationRunning} onChange={(e) => setSlitherAnimationOptions({...slitherAnimationOptions, [e.target.name]:e.target.value})}>
                                                    <option>1</option>
                                                    <option>1.1</option>
                                                    <option>1.2</option>
                                                    <option>1.3</option>
                                                    <option>1.4</option>
                                                    <option>1.5</option>
                                                    <option>1.6</option>
                                                    <option>1.7</option>
                                                    <option>1.8</option>
                                                    <option>1.9</option>
                                                    <option>2</option>
                                                    <option>2.1</option>
                                                    <option>2.2</option>
                                                    <option>2.3</option>
                                                    <option>2.4</option>
                                                    <option>2.5</option>
                                                    <option>2.6</option>
                                                    <option>2.7</option>
                                                    <option>2.8</option>
                                                    <option>2.9</option>
                                                    <option>3</option>
                                                    <option>3.2</option>
                                                    <option>3.3</option>
                                                    <option>3.5</option>
                                                    <option>3.7</option>
                                                    <option>3.9</option>
                                                    <option>4</option>
                                                    <option>4.5</option>
                                                    <option>4.9</option>
                                                    <option>5</option>
                                                    <option>5.3</option>
                                                    <option>5.5</option>
                                                    <option>5.7</option>
                                                </select>
                                            </div>
                                            <div className="flex justify-between">
                                                <label htmlFor="blurEffect">BlurEffect</label>
                                                <select id="blurEffect" name="blurEffect" disabled={isAnimationRunning} onChange={(e) => setSlitherAnimationOptions({...slitherAnimationOptions, [e.target.name]:(e.target.value==="true"?true:false)})}>
                                                    <option>false</option>
                                                    <option>true</option>
                                                </select>
                                            </div>
                                            <div className="flex justify-between">
                                                <label htmlFor="shrinkEffect">shrinkEffect</label>
                                                <select id="shrinkEffect" name="shrinkEffect" disabled={isAnimationRunning} onChange={(e) => setSlitherAnimationOptions({...slitherAnimationOptions, [e.target.name]:(e.target.value==="true"?true:false)})}>
                                                    <option>false</option>
                                                    <option>true</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="w-full max-w-80">
                                            <SlitherInput  setText={setData} theme="light" placeHolder="Enter Your Name" amplitude={slitherAnimationOptions.amplitude} shrinkEffect={slitherAnimationOptions.shrinkEffect} blurEffect={slitherAnimationOptions.blurEffect} smoothness={slitherAnimationOptions.smoothness} waveLength={slitherAnimationOptions.waveLength} waveThickness={slitherAnimationOptions.waveThickness} setIsAnimationRunning={setIsAnimationRunning} />
                                        </div>
                                    </div>
                                ),
                                code:""
                            },{
                                tabIconPath:COMMAND_ICON(),
                                tabName:"Command",
                                content:(
                                    <div className="p-4">
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg">Installation</div>
                                        <div className="text-neutral-500 dark:text-neutral-400 font-mono m-2">
                                            npm i kotnala_ui
                                        </div>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg mt-10">Prerequisite</div>
                                        <div className="text-neutral-400 dark:text-neutral-600 text-sm m-2">You should have Tailwind CSS installed before using this component.</div>
                                        <a target="_blank" href="https://tailwindcss.com/docs/installation/using-vite" className="text-gray-400 dark:text-gray-600 text-sm m-2">Tailwind Installation</a>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-lg mt-10">index.css :-</div>
                                        <div className="text-neutral-500 dark:text-neutral-400 font-mono m-2">
                                            @source "../node_modules/kotnala_ui"; <br/>
                                            <span className="text-sm">add this to css file in which you have imported tailwindcss</span>
                                        </div>
                                    </div>
                                ),
                                code:"npm i kotnala_ui"
                            },
                            {
                                tabIconPath:CODE_ICON(),
                                tabName:"Code",
                                content:<CodeBlock code={SLITHER_INPUT_CODE} language="jsx" />,
                                code:SLITHER_INPUT_CODE
                            }
                        ]}
                    />
                </div>
            </div>


        </section>
    )
};

export default Components;