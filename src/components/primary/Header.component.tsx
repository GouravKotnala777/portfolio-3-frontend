import { NavLink } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import { useEffect, useState } from "react";


function Header({screenWidth}:{screenWidth:number}) {
    const {theme, toggleTheme} = useTheme();
    const [isHeaderRaised, setIsHeaderRaised] = useState<boolean>(false);
    const [logoYPosition, setLogoYPosition] = useState<number>(0);
    

    function raiseHeaderHandler() {
        const currentScrollY = window.scrollY;
        if (currentScrollY >= 70) {
            setIsHeaderRaised(true);
        }
        else{
            setIsHeaderRaised(false);
        }
        if (currentScrollY < 264) {
            setLogoYPosition(-100); 
        }
        else if (currentScrollY >= 264 && currentScrollY < 422) {
            setLogoYPosition(((currentScrollY-262)/160)*100);
        }
        else{
            setLogoYPosition(100);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", raiseHeaderHandler);
        return() => window.removeEventListener("scroll", raiseHeaderHandler);
    }, []);

    if (!screenWidth) {
        return;   
    }
        
    return(
        <header className="bg-white dark:bg-neutral-900 fixed top-0 left-0 w-full pt-2 z-20">
            <div className="border-y border-neutral-100 dark:border-neutral-800 mx-2">
                <div className={`border-x border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto transition-all ease-in-out duration-500
                    ${isHeaderRaised&&"[box-shadow:0px_3px_20px_0.2px_var(--color-neutral-300)] dark:[box-shadow:0px_3px_20px_0.2px_var(--color-neutral-700)]"}
                `}>
                    <div className="flex justify-between items-center">
                        <div className="text-neutral-700 dark:text-neutral-200">
                            <div className="size-12 [box-shadow:0px_0px_1px_0px_#00000020_inset] dark:[box-shadow:0px_0px_1px_0px_#ffffff20_inset] bg-a rounded-full overflow-hidden relative">
                                <img src="gourav-kotnala1.png" alt="gourav-kotnala1.png" className={`z-2 absolute left-0 h-full w-full [box-shadow:0px_0px_1px_0px_#00000050] dark:[box-shadow:0px_0px_1px_0px_#ffffff50] rounded-full bg-linear-0 from-neutral-500 to-white dark:from-neutral-50 dark:to-neutral-500`}
                                    style={{
                                        top:`${100-logoYPosition}%`
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-6 text-neutral-700 dark:text-neutral-200">
                            {   screenWidth > 640 &&
                                [{name:"Portfolio", url:"/"}, {name:"Components", url:"/components"}, {name:"Projects", url:"/projects"}].map(({name, url}) => (
                                    <NavLink to={url}>{name}</NavLink>
                                ))
                            }
                            <button className="border border-neutral-100 dark:border-neutral-800 [box-shadow:0px_0px_2px_0.1px_var(--color-neutral-200)_inset] dark:[box-shadow:0px_0px_2px_0.1px_var(--color-neutral-700)_inset] py-1 my-2 px-3 rounded-2xl flex justify-between items-center gap-1">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"
                                        className="size-4 text-neutral-500 dark:text-neutral-400"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d={"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"} />
                                    </svg>
                                </span>
                                <span className="bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-300 [box-shadow:-2px_-2px_1px_0.1px_#00000010_inset] dark:[box-shadow:-2px_-2px_1px_0.1px_#ffffff10_inset] font-roboto rounded-sm p-1 [font-size:var(--text-xs)]">Ctrl</span>
                                <span className="bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-300 [box-shadow:-2px_-2px_1px_0.1px_#00000010_inset] dark:[box-shadow:-2px_-2px_1px_0.1px_#ffffff10_inset] font-roboto rounded-sm p-1 [font-size:var(--text-xs)]">K</span>
                            </button>

                            <button
                                onClick={toggleTheme}
                            >
                                {
                                    theme === "dark" ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                            <circle cx="12" cy="12" r="4"></circle>
                                            <path d="M12 3v1"></path>
                                            <path d="M12 20v1"></path>
                                            <path d="M3 12h1"></path>
                                            <path d="M20 12h1"></path>
                                            <path d="m18.364 5.636-.707.707"></path>
                                            <path d="m6.343 17.657-.707.707"></path>
                                            <path d="m5.636 5.636.707.707"></path>
                                            <path d="m17.657 17.657.707.707"></path>
                                        </svg>
                                }
                            </button>

                            {   screenWidth <= 640 &&
                                <button className="flex flex-col gap-1 p-3"
                                    onClick={() => {}}
                                >
                                    <span className="w-4 h-0.5 rounded-px bg-neutral-700 dark:bg-neutral-200"></span>
                                    <span className="w-4 h-0.5 rounded-px bg-neutral-700 dark:bg-neutral-200"></span>
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;