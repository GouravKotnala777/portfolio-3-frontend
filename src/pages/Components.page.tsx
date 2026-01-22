

//interface ComponentsPropTypes{
//};

import { useState } from "react";
import Input from "../components/reusable/Input.component";
import Tab from "../components/reusable/Tab.component";
import { INPUT1_CODE, NAVBAR1_CODE } from "../utils/constants";
import useTheme from "../hooks/useTheme";
import CodeBlock from "../components/reusable/CodeBlock.component";
import Navbar1 from "../components/reusable/Navbar1.component";


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
    
    return(
        <section className=" flex flex-col gap-4 border-2 border-red-500 relative min-h-screen font-roboto selection:bg-neutral-300 dark:selection:bg-neutral-600 pt-30">
            <div className="absolute top-0 left-0 inset-0 border border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto"></div>

            <div className="border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 z-1">
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
                                            <Input theme={theme} setData={setData} />
                                        </div>
                                    </div>
                                ),
                                code:""
                            },
                            {
                                tabIconPath:CODE_ICON(),
                                tabName:"Code",
                                content:<CodeBlock code={INPUT1_CODE} language="jsx" />,
                                code:INPUT1_CODE
                            }
                        ]}
                    />
                </div>
            </div>

            
           
            <div className="border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 z-1">
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
                                            <Navbar1 navItems={NAVITEMS} padding="6px 12px" fontSize="18px" borderRadius="10px" previewGap="-60px" />
                                        </div>
                                    </div>
                                ),
                                code:""
                            },
                            {
                                tabIconPath:CODE_ICON(),
                                tabName:"Code",
                                content:<CodeBlock code={NAVBAR1_CODE} language="jsx" />,
                                code:NAVBAR1_CODE
                            }
                        ]}
                    />
                </div>
            </div>

            
           


        </section>
    )
};

export default Components;