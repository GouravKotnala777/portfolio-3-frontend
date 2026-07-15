import {MeteorMash, SlitherInput, ShatterImage, TextSlashInput, GooeyNavbar, FluidNavbar, PopupNavbar, DiaScrollerNavbar, ParticleVanishingInput} from "kotnala_ui";
import { useEffect, useState } from "react";
import Tab from "../components/reusable/Tab.component";
import { DIA_SCROLLER_NAVBAR_CODE, FLUID_NAVBAR_CODE, GOOEY_NAVBAR_CODE, METEOR_MASH_CODE, METEOR_MASH_CONTROL_PROPS, PARTICLE_VANISHING_INPUT_CODE, POPUP_NAVBAR_CODE, SHATTER_IMAGE_CODE, SHATTER_IMAGE_CONTROL_PROPS, SLITHER_INPUT_CODE, SLITHER_INPUT_CONTROL_PROPS, TEXT_SLASH_INPUT_CODE } from "../utils/constants";
import useTheme from "../hooks/useTheme";
import CodeBlock from "../components/reusable/CodeBlock.component";
import { useLocation } from "react-router-dom";
import type { MeteorMashOptionTypes, ShatterImageAnimationTypes, SlitherAnimationTypes } from "../utils/types";
//import SlitherInput from "../components/hidden/SlitherInput";
//import MeteorMash from "../components/hidden/MeteorMash.component";
import ControlBox from "../components/reusable/ContolBox.component";


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
const CONTROL_ICON = () => {
    return (
        <>
            <path d="M10 5H3"/>
            <path d="M12 19H3"/>
            <path d="M14 3v4"/>
            <path d="M16 17v4"/>
            <path d="M21 12h-9"/>
            <path d="M21 19h-5"/>
            <path d="M21 5h-7"/>
            <path d="M8 10v4"/>
            <path d="M8 12H3"/>
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
    //const [isAnimationRunning2, setIsAnimationRunning2] = useState<boolean>(false);
    const [slitherAnimationOptions, setSlitherAnimationOptions] = useState<SlitherAnimationTypes>({amplitude:3, smoothness:3, waveLength:"md", waveThickness:1.5, blurEffect:true, shrinkEffect:true});
    const [meteorMashAnimationOptions, setMeteorMashAnimationOptions] = useState<MeteorMashOptionTypes>({numOfMeteors:10, trailLength:"md", trailLengthShrinkable:"md", trailThickness:3, trailColor:"10,100,200", meteorCoreColor:"10,100,200", collisionDebriColor:"10,100,200", luminosity:3, meteorCoreSize:2, collisionDebriSize:2});    
    const [shatterImageAnimationOptions, setShatterImageAnimationOptions] = useState<ShatterImageAnimationTypes>({pixelGap:3, pixelSize:3, mouseRadius:3, friction:2, ease:3});

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
                            },
                            {
                                tabIconPath:CONTROL_ICON(),
                                tabName:"Contols",
                                content:"",
                                code:""
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
                            },
                            {
                                tabIconPath:CONTROL_ICON(),
                                tabName:"Contols",
                                content:"",
                                code:""
                            }
                        ]}
                    />
                </div>
            </div>


           {/* Popup Navbar */}
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
                                            <PopupNavbar navItems={NAVITEMS} />
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
                            },
                            {
                                tabIconPath:CONTROL_ICON(),
                                tabName:"Contols",
                                content:"",
                                code:""
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
                            },
                            {
                                tabIconPath:CONTROL_ICON(),
                                tabName:"Contols",
                                content:"",
                                code:""
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
                            },
                            {
                                tabIconPath:CONTROL_ICON(),
                                tabName:"Contols",
                                content:"",
                                code:""
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
                            },
                            {
                                tabIconPath:CONTROL_ICON(),
                                tabName:"Contols",
                                content:(
                                    <div className="relative">
                                        {/*<div className="w-[40%] h-[20%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-sky-100 dark:bg-sky-900 blur-2xl"></div>*/}
                                        {/*<pre className="text-[5px] text-gray-400">{JSON.stringify(meteorMashAnimationOptions, null, `\t`)}</pre>*/}
                                        <div className="relative h-80 w-full mx-auto flex justify-center items-center"
                                            onMouseEnter={() => setIsMeteorMashHovering(true)} // these events are not necessary. i only added them to prevent the animation from running infinitely.
                                            onMouseLeave={() => setIsMeteorMashHovering(false)}
                                        >
                                            <ControlBox
                                                inputs={METEOR_MASH_CONTROL_PROPS}
                                                controlState={meteorMashAnimationOptions}
                                                setControlState={setMeteorMashAnimationOptions}
                                                isAnimationRunning={false}
                                            />
                                            <MeteorMash
                                                theme={theme === "light"?"dark":"light"}
                                                trailLength={meteorMashAnimationOptions.trailLength}
                                                trailLengthShrinkable={meteorMashAnimationOptions.trailLengthShrinkable}
                                                trailThickness={meteorMashAnimationOptions.trailThickness}
                                                trailColor={{light:meteorMashAnimationOptions.trailColor, dark:meteorMashAnimationOptions.trailColor}}
                                                meteorCoreSize={meteorMashAnimationOptions.meteorCoreSize}
                                                meteorCoreColor={{light:meteorMashAnimationOptions.meteorCoreColor, dark:meteorMashAnimationOptions.meteorCoreColor}}
                                                collisionDebriSize={meteorMashAnimationOptions.collisionDebriSize}
                                                collisionDebriColor={{light:meteorMashAnimationOptions.collisionDebriColor, dark:meteorMashAnimationOptions.collisionDebriColor}}
                                                luminosity={meteorMashAnimationOptions.luminosity}
                                                animateUntill={isMeteorMashHovering} // by default it is true and run autometically for infinite
                                            />
                                        </div>
                                    </div>
                                ),
                                code:""
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
                            },
                            {
                                tabIconPath:CONTROL_ICON(),
                                tabName:"Contols",
                                content:"",
                                code:""
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
                            },
                            {
                                tabIconPath:CONTROL_ICON(),
                                tabName:"Contols",
                                content:(
                                    <div className="w-full h-80 flex justify-center items-center flex-col gap-4">
                                        {/* control box */}
                                        <ControlBox
                                            inputs={SLITHER_INPUT_CONTROL_PROPS}
                                            controlState={slitherAnimationOptions}
                                            setControlState={setSlitherAnimationOptions}
                                            isAnimationRunning={isAnimationRunning}
                                        />
                                        <div className="w-full max-w-80">
                                            <SlitherInput
                                                setText={setData}
                                                theme="light"
                                                placeHolder="Enter Your Name"
                                                amplitude={slitherAnimationOptions.amplitude}
                                                shrinkEffect={slitherAnimationOptions.shrinkEffect}
                                                blurEffect={slitherAnimationOptions.blurEffect}
                                                smoothness={slitherAnimationOptions.smoothness}
                                                waveLength={slitherAnimationOptions.waveLength}
                                                waveThickness={slitherAnimationOptions.waveThickness}
                                                setIsAnimationRunning={setIsAnimationRunning}
                                            />
                                        </div>
                                    </div>
                                ),
                                code:""
                            }
                        ]}
                    />
                </div>
            </div>

            {/* ShatterImage */}
            <div id="shatter_image" className="border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 z-1">
                <div className="w-full bg-white dark:bg-neutral-800 max-w-3xl mx-auto">
                    <Tab
                        panels={[
                            {
                                tabIconPath:PREVIEW_ICON(),
                                tabName:"Preview",
                                content:(
                                    <div className="w-full h-80 flex justify-center items-center flex-col gap-4">
                                        <div className="w-full max-w-80">
                                            <ShatterImage
                                                base64ImageURL="data:image/png;base64,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"
                                                imageHeight={300}
                                                imageWidth={300}
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
                                content:<CodeBlock code={SHATTER_IMAGE_CODE} language="jsx" />,
                                code:SHATTER_IMAGE_CODE
                            },
                            {
                                tabIconPath:CONTROL_ICON(),
                                tabName:"Contols",
                                content:(
                                    <div className="w-full h-80 flex justify-center items-center flex-col gap-4">
                                        {/* control box */}
                                        <ControlBox
                                            inputs={SHATTER_IMAGE_CONTROL_PROPS}
                                            controlState={shatterImageAnimationOptions}
                                            setControlState={setShatterImageAnimationOptions}
                                            isAnimationRunning={isAnimationRunning}
                                        />
                                        <div className="w-full max-w-40 max-h-40">
                                            <ShatterImage
                                                base64ImageURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAASAAAAEgARslrPgAAI01JREFUeNrtnXd8VFX6uJ/3TkslCWkQiiBNpZdF7KLr2tZGMrGhrro27Lrq7urXZXVd1y2uBcvqWlbU1UyCUtRFBRXsSpGmAlIklDTS25T7/v6YzCTBAJPMZAb48Xw+gTu3nPPec957z7nnvO974CAHOchBDnKQgxzkIAc5yP9fSKwFiAX9512U1tjgSbdaDZvFa9Z4UuKqSk6dWR9ruWLBAa0A2QXOgSo61qc6TmAs6GCEvqokdFAUPqBaoBrYgrAEZImKLrkxd+Ta6TLdjPX9dAcHlAJkzb4wW5ubTzeRXwIngaZFIl1B6hCWocy1WbRge+6szbG+10ix3yuAv9Ldv1b0HBUmoD+9JwODgYnZDE7OITsujV5xaaTZk7EbFuq8TdR6GqnzNlLrbaTW28CGuh2sq91Ks+npqMQU5XPDkNdU4l3luS9vj3UZhMN+qwAZhbkTMLlJ4XxQe9tjabYkjs0czujUQRzRoz9DkvsQb7F3Kn2fmqyv28aa6s2sqdnMlxVr+aF+17oWU4S31bDeV5H7+lexLpOusF8pwIkfTLeuLluRa4rchOrRbY8NTe7LiZmjOCFzJKPSBiLdcGvrarfyzvaveWfHV2xpKGt3TJC3rRh/3JHv+jLW5dQZ9gsFmK7TjRlFK69U1XtR+gb2W8XCqb3GM/WQkxiZOjCqMq2q3sybxZ8wa+snuE1vcL+IvINhvac89/WlsS63UNjnFSDTlXecoo+q6tjAvp72ZPL7Hc/5/U8g05ESU/lKm6p4dsM7FBV/3KoIgheVh3ph3Lc63+WOqYB7YZ9VgOz5lyT6aur/oco1gX1ZjhRuGnIuZ+RMxG5YYy1iO0qbqvj3xv/h+nExHvUrgoisEDUuK8t3LY+1fLtjn1SA7MLcI33KTFUdEth3fr/juW1YLonWuFiLt0d+qNvG71e8yOqawJeieAT+NCJz5J8/nDzdG1bi3cA+pwAZrrxrFHMGihVgUGJvpo+cytjUwbEWLWR8avLshnd4ev1beNUHgMD/BIuzLN9VF2v52rLPKICzwGlZKObDqN4EYBMrVw06jasOPR1bCK97q2HBZrFhNSyICKjiUxO3z4PHF5sH7/vaYn634gXW1hYDIMgSw2E/s/Sc/5bERKAO2CcUYHiB016Cz6VwNkCGPYXHx10XUs8+wRZHgi0Oq2X3SuIzfdS5G2j0NEf93hp9bu745lk+LF0BgCAbsVpPK5/y+tqoC9MBMVcAf+WbhYqeBXBYcj+eGH8D2XGpe7zOZlhJiU/GalhCzqvR00R1U/TfwKaa/GnNqxRsWezfIVTY1HLGvjBmEHrpdQMnfjDdurFhR2HgyR+XOpjnJt5Kmj1pj9fFWe2kxffAYhidys9msaJo1JsEEeGErFFYxcIXO78HSFD0vKSLRs2qf311ZVSF2YWYKkDtmemPApcAjE0dzL8m3EjCXnr5NouVtPge/na+C9gsVurdjTG53/E9h5AVlxpoDhIwzdN6Oke8WuNaExuBiKECZLjyrgG9D+CIHv157me37LXyAXompHT6yW+LiNDsdWNqbGZ3j+hxCKYqX1euA0j3wVEDnSNeLXOt8cVCnq6XZBhkufKOVtXHATIdKcwYd31IlR9ntXeqzd8dXX17RIobhpzNmb0nAqDo8SViPhcrWaKuANnzL0k01XwJ1OYwbDw+dhpZe+nwBXBYOzejtzt8MXr623L/yMsYn+Yf51LVqRmFuVfFQo6oK4CvpuHvCoMAbh16HiNSB4QurIQvrtfnxWfG5G3bDrth5dGx19E7ricAavK3jKKpvaMtR1QVIL3AeZKqXgswsecwpg44uVPXR+LJrXU3RPOW90iqPZE/DJ/a8ktT1NfwRLRliJoCOAucFsR8DCDR6uBPIy/rdBrNnvAm1ho8TTR7963JuWMzh3NWzpGBn+dlFebmRjP/qCnAB6K/RnU4wNWDziQnPr3D86yGhWRHIqnxySTa49sZdjT73F2uwEZPEzUxGAQKhTsPzyfN5h/7ME1mDHjjV6nRyjsqn4GD377R0eiucQEpfeIzeGjUFVg6aM8dFjs9E1KwW21YDSsOq514m4NGb+sQbrPXjd1iwxLi14CpJjXN9dTtQ6/+XYm32MmOS+P9kmUASW5tNhtd3y6MRt5ReQNU1m+/EugHcN2gM3c7udMjLuknn2gWw0KyvdWKW1F2NlZT3VSHdw+dOa/PS21zPWV1lTR6mqJxm2FxZs5ERqceCoDAjX1mXZoeZpIh0e0KoKoiat4M0C8hk7P6TOrwPIsYux3gsVlsP9nX6GmivL6SsrqdVDbWUN1UR3VjLZUN1ZTWVVDeUEW9uxFFo1GOEeGGwWe3lBnJTb6G26ORZ7crQJYr/1SFoQAX95/c4asfwNxDRanu/phPTZq9bho9TTR6m2n2eTB1/6n0thyVcXir3YPqNX0LnPHdnWf3vwEwbwRIsMRxXt9jdn+e6m47eG37AAc6lw4MfBprz2Z8F3V3ft2qAC2uWacDnNNn0l7Nuaqb6nD7Wp0xVJV6d+N+0YZHipOzxtArzu/QpMgN3Z1ft1hWZhY4jwXzBC++swOeOnt6+gOYarKzoRqrYcViGHh83phN2sQKQwzO7D2R5zbOR9ExGQW5cwS+EIO5pXlFKyKdX0RnRXq9ccEAr8f9nMJJbfdbxGDJL2ZglZjOPu83LN+5nqlf/q39TkFFpaAHxjUb8l3VkcorYk1Ar8Lc4V6P+5NdKx9gRMqAg5XfCcb0HEy81dF+pyKKnl8j5qJIzhlERAEyZl+R7FXmKOQACPKUiLwTOH5h/8nRKbkDiAlpQ1p/iHEZ8AaAqo5Ss7HQWeCMyBMVmTeAu+phVT3Un6DcU55fNA2YAP7X/y9zJka18A4Ezu9/QusP5axyZ1EuIs/7f+vRH2DeHYl8wlaAzMLcIapyhf+XzC/LL3rgxA+mWxUzAwhOdx6kc5yYOarN9Ld5lIjogIHp14KsbNl5Z87cCzPCzSdsBVDlDlADxDQMbgRYUbHyHNQ/pntESv9YleF+T6+AoYxKb4AlE57xGBjTABRNbG5qvjXcPMJSgOEFTjvoBQCCzivLK1oHYFE5I3DOcRkjYlR8+z/Dewzwb4gaGW84xwOU5bs+Bj4DELhcVcP6kgtLAcoMc7IqyQBqyAuB/aaahwe2j88aGZvSOwAYm9bqDice85TAtgHPAKjSO7vQeVQ4eYSlAKbqaQHxxJayICgsfh9+i1hIt/eIeME0ez00NO9bo4N1TU0R9zcYlzoouK3CqMC2YU18G8QE8GGeGU4e4Y0EqowGBXRJ+TnP1wZ3IymgJFgcYST+U2Z9voiZi95l/fZiTFUOzerNuUcex+UnnR4Re8HO4vX5+Ne7c5i35DM2l+3AZrEyNKcfV558BqeNPTLs9A9v139q9ZQumTKzNKMgd4XCGFHGhZNHuEPBIwAEWd1ur+BAIcEaOQW4+bnHeG/F1+32/VCyjX/MeZ0PVi7juRvuwmG1dTH1zlPb2Miljz/A91t/DO7z+Lys3rKR2158go+/W8mfLvx1WHlYxMBmWPCYPhTZdfBnJTAGWt8MXaHLj03G7CuSFc1s+fl922OKaQGwS2SmGmZ+NP8nld+WpRvX8sg8V0TyCpUH33i5XeXvyqzPFzHnq0/CzsdhtJjCK+2mhkX0W/9ucnLmXp3Q+ZT9dFkB4pprg427GFS0E65VyrALAODJ+W/u9ZyXPpxPbWN0PKy27SznzS8W7/W8J/73RviZBYvQbFeYihGMUuU2a1K7mnyXFcBnNVp7dyq1bY+pGgrg0/Dt77eUl1Jdv/corqrKt8Wbws4vFFZt2Riy7DUN4UWgleBXXvtOjojWBO/d4+lyT7vrCmB6gw2uqLTr/hqKG6DBF74hR1V96Ja8lfW1IZ8bDpWdkKkz8neErzXCSLuolWIawd8W6LLLVJcVwCIanJJUw2yngWr4tbPBG/6n2pCcviE7gx7Rd0DY+UUyn6S4OPpnZoeVl7fFHkKh3dPUtszb1kVn6bICOIwebTNtF6tNoAzAHQEXrDibneOO2HtHd1if/vTLyAo7v1A4rE8/+oaQ189HTQg7L68GXq6y66skWOa71EWn6LICbDz3hWoRGgBM1XYRnFT5pmWLj8pWdj7xXfhD/uUkx+++o2u1WPjLxVeHnU+o2CxWHrz4qj16GWf2SOWucy8OK5/VVZuDBq4i2q7jYarfv1KEho3nvhB9BRAR1ZaZKVGGtz1mwRLs/r6/I/yAmdkpabx6672M7P/TmEEDsnrz0o13M6xPdCedxh86jOem3UXvtJ+a7/9s8GG8esv/kZKYGFYeC8qWtfllfN72mKiOAFBllYh02Qw6rA91gRUKRyoyYfzXV9uWTHjGA3CCkzkLXKiAfF7xfThZBBmUncN/b/sDyzauZ82WjXi8Pob3H8CYgUOiOgDUlklDj2De7//C0g3rWFO8iUSHg+H9DmX0gEHhJw58vXNdcNsUW2Fge/zXV9s2baiYAIoIYdkJhjlSIwtBrwLtsWlD5XHAQgCXuHzpBVM2AwN2NFVQ0VxLuiM57AIxxGD8oUMZf+jQsNOKFPF2B8ccNoJjDov8rOd3NS3h5YTmirz/BkdbN28uPxbwdwKVD8LJI6wB9NREx9sgbr+QvgvbHhPhRb988MT6OREvnAOd5ZU/0ODzf0UptG9HfXKBf0PcPbC8FU4+YSnA+jNeqRHBb/unMrVXgTMwNExS3c6HAB/AnK2fRbv89nseXzc7uG0YlocD2y0+g5cACMwP10I47Ck0Q42HABSN84p5X2D/pss/bEJkAUCT6eGf382Kdhnut+xsruXLnf44kiI0lOW6gu2/21d3n6LxAIZFHwo3r7AVoDTf9Rki7wIoek1mgfO0wDEx9FeBeev/bH6fWs++66K9L3HvqpeCTq2m6NOB/VkFzlNMuA5ARBaU5s4Ke7YpIpPoNqvtGpBqFFHxFQWUoDx31nYRigC86uO6JTNiUJz7F2uqf2w7dtJ8U+7oOwCyCnNPNTHf8HtaSY1FjYgElYqYZ1CWK2+KD/P1QJRvEZkH+qGKNGPyCKgFQf88/HI5u++kMHM7MFGU4xf+hkp3XWDHV2IYBageHwilC+IzMC4oy29tFsIhoq5hGa68X4L5esfr8vmJNxy8eey99EkI26L5gGPGujk8/cPuO/WCNIJxQXm+K2KfVRG1oyp3Fs6LU8tQv2cQ7ZfYEn+j1mg2c/WSx9jpjs7M3f7CJ+WreXZDizOVUCwiS0CCM34CHzsscUMjWfnQDe7hxfmureX5RdPKnbNyUrCkiiUhJ86alDEyY5TdQP4CsLm+hGu+fozS5oj5OO7XLChZzg1LnsSnJiI0W0TOLHcWTRiZOTJB4AcAhM1bc18pjnTeUY2ZqqqS6cr7j6KXgD9M7GNjQ1sX4EBl7rYvuGfli8HKByOv3Fk4L3A8oyB3naKDRXil3Dlrajh5dURUTWlFREdkjrxCRJ4GKGuu5rIv/87rWxZFU4x9Ao/p5Yl1c/ndyufVpyaC1CvGmW0rPxpE3Zb6w8nTveXOousQ43oEr9v0cv/qV7jo87/wbc2P4WewH7CqahPOTx/gqR/m0fJZV21Y9NQKZ+GC8FPvHDGJFg5Q4Sx8ErWcCvIjwIqqjZz/2YN6/+pXKN5lVc4DhWp3PX//vpCLPn+I9XXbAP86QjaDY3Y3qKMt5l6KdEugpJgpAEBFvmuhNSXhCEH+huA11ZTXtyzi9EX/xy3LnmZZ1fpYihcxNteX8MCaV/n5R7/lxY3vYRJo7+V3IzJHTtqRV7R6d9cK6v+kVrrlsynmawYFyJ51/gif1/M3hdPa7j80sRc/zx7HKb3GcniP/cvT2GN6uW35v/igtP2UvcDHashVFXlF3+3p+py5Vyc0N1bUgFpEmF7unPXHSMu4zyhAgOxZ54/wer23Axftuip4n/gMjko/nDGphzI6dRADk8IzuNwTTT436+q209RFy+Yka0Lz0OScH89ZPL3npoaS9JYYP/MQebjcWfhhKGlkuPJOVDU/ABBDzi7PK5ob6fvc5xQgePNFU3vja5yqaB7QYYiRVHsihyX3Z2BiFockZHNIYjb9EjJJsDiwGhYsGP6IYyLYDOtug1S2pay5mvtXv8JHZSvDD08vFBsmM9WQNCzWf3Z2qbj0ginvAqeAeOKsib23TnmpojPXhybifkDOmxf0c3u8uYqejjIJtMuOEBYxsIoFq2FgEYt/WwweGzuN7Pg0cj++n52eSDa3sjU5M3nwpskvdspGPsM15Z+q3OJPQh6rcBbd3B1lu18oQFum63TjyaKVI3wmxyA6SZTDFRkKGtYy4rcPy737xU3vnlrRXHt8y+v6WTGYrSpdm8NWnazovQBWQyaV5BV9Ecpl2bMuyfJ5658NLKUnIt/FqXFMcb5rZ3eU536nALsje9YlWaa3aaiJb6CI4VBVmyFiVVWbiloNFZuKWlXFZghWVWwqWEWxIVhVeBjVlShWQZ4pzy+6Jhx5ehU4J3rw+Std5AmQNR2dZ/j96OwCmSocDnqaKg4AgbU47JPLz3ltW3eV2761BnsYlEyZWQqUAh935fqMovPHqenxl4dBZEfjVK9nN8GwA70MDf7jR0QKUhPjrlp/xis1e0s+HA4YBQgXu934sbnFuVhVjgAi3uPeM+IBXS8iSwxDny7NLfqkPBq5Rvcm923SC6asBEaA1GBw2YAB6W8FfB06S2Zh7hmmqf7JfUPOs5lGhyN9Fmu82Wyxum84u3/9dJke9cDI+5QCOAucloWGea3F7SksvWhO1JdYzyqacozPJ4v8Ye8AwSsqXVIABUdL+Dx3nDUxpzs+4SLBPqMAGbOvSKa5apnCoJaCf94weKI7ImTvifTC3HNF9V+qRMDTVEzD4FZM43kV/Y3iO0G8vovLL5zTbZ26TksYawEAsmZfmG263e+o6tifCCiyGGFmnGm8XZzv2hoNeQa88avUOk/98WCOQaRLDn6CWaUYP6J6PKIXBsLpAaVWa+LIlk5rzIm5AmQWOAermPMDsYYBcuLT2dFYiUn7JlGQ5QpvGSLzbXE9l2w765l9ys48Y/YVybhrTlD0FIFfqOphHZ0n8INhs51aet7rP8Ra5pgqQEaBczzie3vX1+2zE25hQGI2r//4EbO3fUZZh6Zj4gPWIPq1gbEMWK8qG1KTem1af8bj3b7GTPb8SxKpbRjhUxmp6EhRxitMBG3nqWpgcGLWSBRtNykkUILFdkZ57uvhu0+HQcwUwO/kYM5SNAlgfNpgllSux8Dgs58/QmKbEHOrqjezqGwFi8tWsrJ6897uSAV2gJQBO1WpEGEnSA2q9SrSINCsqs2GQTPgExX1iZqioqipChYRIwGIF0gwVRNEyAJ6o5oDkqOi2YHVUHbFJlbGpB3KsZkjOCtnElmOFBaULOfmZU+1F1WotRgypSS36P1Y1UNMFCCjYMpFirwIahMRvfvwC2VVzSbeLP6U3nE9ee/EB3d7bYW7huWVG1hVvYlV1ZtYXbOZmhh7HMVb7AxO6s3YtCEclX44E3oOJd7SPmxPcUMZpy26B4Czco5k3vYv1R/nV9wiclm5s/C1WMge9YGgjMLcW1X1H6iK3bDy0Ogr5ZTscdy4dBUAqfakPV6fbu/BydljODl7THBfWXM1xY1lbKkvp7ixnB2NlVR76qjy1FPlqafaXU+9r4kmn7tL6whaxCDFlkiWI5WsuFQyHSn0iktjSHIfhiTl0D8xq90Stx2R1iZk7mHJ/ZicNUZ+u+I53KbXruirmQW52WX5RY9Guz6ipgAtFsEPqal3ACRZ43l83DR+1tPv61/p8YdTS7F1vtOd6Ugh05HSuubeHmg2PXh8XtzqxW36F6VSVRTFbPnfEIM4i514w06c1R6R5W4SrQ4sYuBTk2pPA5cNPIU0exI3LH2Cem+TmOgjma7c3mXOot9Gq04gSiZhJ34w3ZpRmPui4q/8LEcKLx35m2DlA9S4/QqQakvqWiYh4jBsJNni6WlPRhDSHT3ok5BB34RM+idmBW0KMh0pJNniI7rWUYrVr9y1Xv+9/qznUF468g4yHf6JTFP1rnRX7osnfjA9ag9mtytA9vxLEleVrZiLcinAwMRsXp50F0OT+7Y7L/AKVaIzGlqwZTGnfPg7Tv/obrY2RGPUHUwJ3FtrsQ9L7ssrk+5iQGKLdZPqZavKVs4OJ/xrZ+hWBciZe2GGt7p+YcDOb0TKAF6adGeHS8cn2PyLStZHILbg3vhq51oeWPMqJialzdVMW/oETb6uLUvfGeo9/q/TXRfQzIlPZ+akOxmZcggAip7R3FSxMBoLSHebAvR644IB7sbmT2gx5zoucwQvTLyNtN284pMs/kKp8oQXWnVvVLnrueub59qZe/1Qt42Hvu3eYNMN3iY8LTH/km0/XRI4zZbE8xNv59iMloBrqkc2e+s/6V005ZDulKtbFCCrMHeU1+v+NLBo9Nl9JjFj3PXE72H9gH4t3sI/NnTvCOn/rXqR0uYqAP4wfGqwH+IqXsT7JcvCSHnPbG5zX/3iO/aMjrc4mDH+es7O8bvPKzrM4+PT7AJnty27EnEFyChwnuAzWaRKb4ArBp7Kn0devleDzIGJ/nD4NZ6GbvMcdm1ZHByNO7XXBJz9juOhUVcGvzzuXfUS5d3ksLqxfkdwO9jed4BVLPx51OVcPtC/QoxCjhdzcWbRlOO7Q66IKkBWYW4u4psPmoKgdx2Wz23DpoR07ZDknOD2iqrQonF3hip3PY+s9cevzIlP54/D/X6WWXGp3DfyUsCvfP9cG4EQ7x2womoT4B8lPCRx7+bstw/L445heS1u9ZqiJu9mufJCK8xOEDEFSHflTfOZFKjisImVv466Ui4ZcHLI149OHYTRIs7nFd+FfF2oPLF+DtUt/YvfHXYBSW3a4ZOzxnBy1hgAZm/9jFV7G27uAp9XfAvA0OS+OIzQAlteNvAUHhp5pVjFgioOn6orozD32kjKFREFSHfl3Y+aT4AaiVYHT024gTN6d2610HpvI9oS8fST8lWRvEfKm6spKvabCh6dcQSTs38afPquw/Oxtaxw8uwPb0c0/5KmqqAvoNHJqK5n5kzkyfE3kGCJA9RQU5/KKMiNmIdQ+CuHunJnoOY9AD3tybww8TdMSj+80+k8sOY1tCUw8sb6kr1P+nSClzctxG36e+DXDzqrw3Ny4tM5p49/BbYFpcvZVB85g6R521stwtfWbut0H+fojCN4YeLt9LT7TQoUvTfDlftMJNYPDksB+hY4e5qq1wP0sCXwyqS7OKIL/nuzij/mvZLgrKgCzNn6abj3FiRQAWNTBzM6LWh2gM9sP+j0q4GntF6zLSQz/pCYXdx6L82mhz+uernTaQxP6c/LR95J3wR/LE5VvWqhmM+FK1tYClCc79opIh+CvwP11c7OB4aeVfwx01e90vJLtoIuBHij+FNKm6rCvT++qdzAjqZKAM7q0xqdbGPJDo6/50au/dc/gvsGJGYzImUAAO/uWBJ23oF0NrR8AQj+MPoLSpczc1PnQwH0T8zi+Z/dGvyiEjTsTmHYTYDdZrsUpBLgD6tf1hc2vhfSdfXeJh789nXuXTXT7y6N1Fksej5ieRCgyXTzeARiDC+vajW6OTGrte3/9PuVVNbXsmjNN+0Wm5rccs6G+h1hTzP71OTRYMhXqbFjOTsQD+Gh7wr494b/dTq9v37nah3EUvl7uOUTtgJsO/e1LTaM00BqVFX+8X0hl37+NxaVruxw6rW0qYon18/l9EX38Mrmhf6igXIMJpfmzvqkwlm4AJEvAGYXf8YPdds7J9AufF/rj6uU5Ughy9HqPRbob/i3W5uC4Hq9ba7tKgVbFrM50JcQeWJbvutHw+Bc8Rur8MjaN7hp6ZMhzUWUNlVxzdePBQerBFk0GeOBsAQkQtPBO/JdX2YUOE8C8zVFBy+tWs+0pTNIsyUxrEc/MhzJNPk8rK/b9pPOlSCLLBYuL8kt2tBm792g75uY/HPtLGaMu77LsgWGlpOtoc2t9LC1nlcdxrB0g7eJp9cHHIxkZ5wl4R8AZXlFyzIKnMeB+S5o/4Wl37C4bDW/6DWO8/oezejUQe2MSTbU7+CN4o9xbfmYOm/wTfV5alLcWa4zXgl7TZ6ITTuW57uW5My9erS7sWK6wtWgKZWeuuD3708Q+cJQ4+8dRbyscBYuSC+YUgjkfVi6goWl33BS1uguyRV4C3lCXMLOra1uAKZ2eSEOHl03mwq336tLDO5u6xdQnu/6vs+sS8c1+eoeBi7xqFfe2v4lb23/EosYZMelEWfYKGmupN67i3mjyPNiT7ll/RnPR2S4NKIjgdvOeqahPL/oTmtKQh/DkCsFeU6QJYJ8D7JS4C1DjLsNQ8ZVOIsm7SncqcNuvw2hCuB3K54PdqQ6S5YjFYCd7lo85t4Xd27b8ewVl9alPOdu+yLYvAGf35A78pldz9k65aWKCuesy8SwTRBkpj9kjL+d39ZYwYb6He0qX0QWWMQ4tcJZdGXbdZrDpVsMD0pOnVkPPN/y1yW2nfvalszC3ItNZW69t8m4eemTvHbU738ylbo3xqUOoqjY//p8r2TpXgeoZrV8ssVb7Azr0TeULNqxpubH4GeeCKUOI965J5evFqvgS/vPu+jmhgbPcYJ5lCn0Fr/H8E5Ul2HIorK8onWhytAZ9mnn0LK8orczXVP+YCr3b6wv4a4Vz3W6P3B89ijiv7XT6HPz0qYFnNZrwm5XGv+uZkuwyToxa3TIQ7YBdrpruXnpUzSZbhC8qCU/1OieP/7y1UpgTstf1IhplLBQKM0rekCQNwE+LF3Bn7/tnPFsmi2Ji/pPBmBV9Sb+vKbj60uaqrhl+b8AvxHotYPO7FQ+tZ5Gblr2FNub/HEcDJHby/NdH8W6/PbGPq8AIqI4Ui4Vke8AXt38Ab9Z/u/g0G4oTBtyVnCE8rUtH3HT0ifbLWu7pHIdF372YDA+4S1DpzAoqXfI6e9oqmTqF39leWUgrK/MLMsreizWZRcKMXcNC5W+Bc4+jZjvgI4Ev0HlY2OndWhd0xFlzdVc/dWjrKvzuxc6thg0rvJ/5hk/jwObvyguH/gLbh+WG7Jca2uLufbrx4NGJoK8esih6b/qqlt5tNlvFADg0AJnSo2Yb6rqiQCDk3J4esJNIffWaz2N/GnNq7y1/Ut0kxf91l9Hxs/jSIyP467D8pnS99iQ5fmi4ntuXvZU8PtcRP5elld4ZzgLOUab/UoBAAa/faOjqn7bS6qaD377utuH5ZLX97iQ01hctoo/vv0fti31D0qdfekJ3HzEefSO7xnS9Q3eJh5fP4eXNy30jzMIKhi3lTsLH4l1+XSWyBm9R4mdr3zpu7Pg/FlffVuSAkxym14+LF3BlxVrGZ06iDT73v0KDknMwqiGxd/6zcP+c8FvyUgILcjYorKVXLdkBp+U+2M+CdJkGDK13FkU9sxcLNjnO4EdMV2mm+XOWbdaDDkN2ATwdeVacj+9j6d/eCukDqLF0qr7FmPvz0F5czW/Wf5vpi2ZEezpC/KBYIwsyysqiHWZdJX9rgnYlez5lyT6ahruV+UmUAv4DVPO73cCFxxyAun2jmNK7qiqZNozDzNm4CDudf5qt+l/X1vMzM0LeHvbl20USyoN9I6y/Fn75VPflv1eAQJkFOZOwNR/KwQnDWxi5fScCVxyyMmdCjQd8OWfuel9vtrZPrqriLgMu/3G0nP+G/UYRt3BAaMA4A8y9aHoFFPNW4Gj2h4bkXIIR6cP56gMf7Bpm9F+ELTW08gXO7/j8/JvWVS+im2NbWI6+WMWFVkM/hlqxM/9hQNKAdrSq8A50SvmLYo6A2sZBoi32BmfNoQj0w+n1tPApxVrWF29uQP7BakUkWftNuuMbee+tiXW99QdHLAKEKBP0cV9m31NV4Gersj4YAi43RWI0KAqi8XgTUtywsyWia0DlgNeAdrSf95FaU1NzSeZqqeAnOIPTCWmCEsVeU8M873U+D6fRiPG0EH2AXLevKBf/3kXdW3S/yAHOchBDnKQgxzkIAc5yEH2S/4fkse0irKS8uUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDUtMDdUMjA6MzA6NTArMDA6MDD/g7/1AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA1LTA3VDIwOjMwOjUwKzAwOjAwjt4HSQAAAABJRU5ErkJggg=="
                                                imageHeight={600}
                                                imageWidth={600}
                                                pixelGap={shatterImageAnimationOptions.pixelGap}
                                                pixelSize={shatterImageAnimationOptions.pixelSize}
                                                mouseRadius={shatterImageAnimationOptions.mouseRadius}
                                                friction={shatterImageAnimationOptions.friction}
                                                ease={shatterImageAnimationOptions.ease}
                                            />
                                        </div>
                                    </div>
                                ),
                                code:""
                            }
                        ]}
                    />
                </div>
            </div>

        </section>
    )
};

export default Components;