import { NavLink } from "react-router-dom";
import useTheme from "../../hooks/useTheme";


function Header() {
    const {theme, toggleTheme} = useTheme();
    
    return(
        <div className="bg-white dark:bg-neutral-900 fixed top-0 left-0 w-full pt-2 z-20">
            <div className="border-y border-neutral-100 dark:border-neutral-800">
                <div className="border-x border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto ">
                    <div className="flex justify-between items-center p-3">
                        <div className="text-neutral-700 dark:text-neutral-200">Logo</div>
                        <div className="flex items-center gap-6 text-neutral-700 dark:text-neutral-200">
                            {
                                ["Portfolio", "Components", "Blog"].map((navitem) => (
                                    <NavLink to={"#######"}>{navitem}</NavLink>
                                ))
                            }
                            <button className="border border-neutral-100 dark:border-neutral-700 [box-shadow:0px_0px_1px_0.1px_#00000010_inset] dark:[box-shadow:0px_0px_1px_0.1px_#ffffff10_inset] py-1 px-3 rounded-2xl flex justify-between items-center gap-1">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"
                                        className="size-4 text-neutral-500 dark:text-neutral-400"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d={"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"} />
                                    </svg>
                                </span>
                                <span className="bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-300 [box-shadow:-2px_-2px_1px_0.1px_#00000010_inset] dark:[box-shadow:-2px_-2px_1px_0.1px_#ffffff10_inset] font-roboto rounded-sm p-1 text-xs">Ctrl</span>
                                <span className="bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-300 [box-shadow:-2px_-2px_1px_0.1px_#00000010_inset] dark:[box-shadow:-2px_-2px_1px_0.1px_#ffffff10_inset] font-roboto rounded-sm p-1 text-xs">K</span>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;