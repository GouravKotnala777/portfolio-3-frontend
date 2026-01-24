import { NavLink } from "react-router-dom";

const StackLogo = ["typescript.svg", "js.svg", "react.svg", "mongodb.svg", "git.svg", "motion.svg", "redux.svg", "tailwindcss.svg", "nodejs.svg"];

function Projects() {
    return(
        <section className=" flex flex-col gap-10 relative min-h-screen font-roboto selection:bg-neutral-300 dark:selection:bg-neutral-600 pt-30">
            <div className="absolute top-0 left-0 inset-0 border border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto"></div>


            <div className="border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 z-1">
                <div className="border-x border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto gap-8">
                    <div className="flex">
                        <div className="w-[40%] content-center border border-neutral-100 dark:border-neutral-800
                            bg-[radial-gradient(circle,var(--color-neutral-100)_1px,transparent_1px)]
                            dark:bg-[radial-gradient(circle,var(--color-neutral-700)_0.5px,transparent_1px)]
                            bg-size-[14px_14px]
                        ">
                            <div className="
                                border border-neutral-100 dark:border-neutral-800
                                [background:radial-gradient(circle_at_0%_100%,var(--color-neutral-600)_30%,white_80%)]
                                dark:[background:radial-gradient(circle_at_100%_0%,var(--color-neutral-300)_20%,var(--color-neutral-900)_50%)]
                            ">
                                <img src="ecommerce.png" alt="ecommerce.png"
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="border-x w-[60%] border-neutral-100 dark:border-neutral-800 flex flex-col">
                            <div className="border-y border-neutral-100 dark:border-neutral-800 text-neutral-950 dark:text-neutral-50 font-medium text-3xl px-3">Ecommerce Web App</div>
                            <p className="border-y border-neutral-100 dark:border-neutral-800 text-neutral-600 dark:text-neutral-200 font-sans tracking-wider leading-relaxed [font-size:var(--text-md)] px-3 py-2 min-h-30">An Ecommerce website with few features like authentication/authorization, cart management, wishlist, user activities management, coupons/gifts management, user reference system, order management, admin chat support, product management, payment gateway and few more.</p>
                            <div className="border-y border-neutral-100 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 flex px-3 py-2 gap-6">
                                <NavLink to={`https://github.com/GouravKotnala777/Ecommerce-1-frontend`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="size-5 hover:scale-110 hover:opacity-50 transition-all ease-in-out duration-300">
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                    </svg>
                                </NavLink>

                                <NavLink to={`https://github.com/GouravKotnala777/Ecommerce-1-backend`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="size-5 hover:scale-110 hover:opacity-50 transition-all ease-in-out duration-300">
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                    </svg>
                                </NavLink>

                                <NavLink to={`https://ecommerce-1-frontend.vercel.app`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="size-5  hover:scale-110 hover:opacity-50 transition-all ease-in-out duration-300">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                </NavLink>

                            </div>
                            <div className="border-y border-neutral-100 dark:border-neutral-800 text-neutral-200 dark:text-neutral-700 font-mono text-sm px-3">Technologies</div>
                            <div className="border-y border-neutral-100 dark:border-neutral-800 flex items-center gap-3 px-3 py-1">
                                {
                                    StackLogo.map((logo) => (
                                        <div className="">
                                            <img data-tooltip={logo.split(".")[0]} src={logo} alt={logo} className="size-5" />
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 z-1">
                <div className="border-x border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto gap-8">
                    <div className="flex">
                        <div className="w-[40%] content-center border border-neutral-100 dark:border-neutral-800
                            bg-[radial-gradient(circle,var(--color-neutral-100)_1px,transparent_1px)]
                            dark:bg-[radial-gradient(circle,var(--color-neutral-700)_0.5px,transparent_1px)]
                            bg-size-[14px_14px]
                        ">
                            <div className="
                                border border-neutral-100 dark:border-neutral-800
                                [background:radial-gradient(circle_at_0%_100%,var(--color-neutral-600)_30%,white_80%)]
                                dark:[background:radial-gradient(circle_at_100%_0%,var(--color-neutral-300)_20%,var(--color-neutral-900)_50%)]
                            ">
                                <img src="acremate.png" alt="acremate.png"
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="border-x w-[60%] border-neutral-100 dark:border-neutral-800 flex flex-col">
                            <div className="border-y border-neutral-100 dark:border-neutral-800 text-neutral-950 dark:text-neutral-50 font-medium text-3xl px-3">Real-Estate Management</div>
                            <p className="border-y border-neutral-100 dark:border-neutral-800 text-neutral-600 dark:text-neutral-200 font-sans tracking-wider leading-relaxed [font-size:var(--text-md)] px-3 py-2 min-h-30">Manage your real estate sales and payments smoothly.</p>
                            <div className="border-y border-neutral-100 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 flex px-3 py-2 gap-6">
                                <NavLink to={`https://github.com/GouravKotnala777/Ecommerce-1-frontend`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="size-5 hover:scale-110 hover:opacity-50 transition-all ease-in-out duration-300">
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                    </svg>
                                </NavLink>

                                <NavLink to={`https://github.com/GouravKotnala777/Ecommerce-1-backend`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="size-5 hover:scale-110 hover:opacity-50 transition-all ease-in-out duration-300">
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                    </svg>
                                </NavLink>

                                <NavLink to={`https://ecommerce-1-frontend.vercel.app`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="size-5  hover:scale-110 hover:opacity-50 transition-all ease-in-out duration-300">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                </NavLink>

                            </div>
                            <div className="border-y border-neutral-100 dark:border-neutral-800 text-neutral-200 dark:text-neutral-700 font-mono text-sm px-3">Technologies</div>
                            <div className="border-y border-neutral-100 dark:border-neutral-800 flex items-center gap-3 px-3 py-1">
                                {
                                    StackLogo.map((logo) => (
                                        <div className="">
                                            <img data-tooltip={logo.split(".")[0]} src={logo} alt={logo} className="size-5" />
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        



        </section>
    )
};

export default Projects;