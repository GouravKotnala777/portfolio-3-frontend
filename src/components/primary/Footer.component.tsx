

function Footer() {
    
    return(
        <footer className="bg-white group dark:bg-neutral-900 h-35 relative overflow-hidden py-2
            [box-shadow:0px_-20px_40px_30px_var(--color-neutral-100)_inset]
            dark:[box-shadow:0px_-20px_40px_30px_var(--color-neutral-800)_inset]
        ">
            <div className="h-50 w-min mx-auto">
                <div className="flex">
                    {
                        ["G","O","U","R","A","V"," ","K","O","T","N","A","L","A"].map((s) => (
                            s.trim() === "" ?
                            <div className="text-9xl inline-block">&nbsp;</div>
                            :
                            <div className="text-neutral-100 dark:text-neutral-800 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-all ease-in-out duration-1000 text-[12rem] h-20 w-20 font-coral-pixels relative">
                                <div className="absolute -top-20 left-0 h-full w-full">{s}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="h-full 
                    bg-[radial-gradient(ellipse_at_top,var(--color-sky-500),transparent_10%)]
                    bg-size-[100%_0%]
                    bg-top
                    bg-no-repeat
                    hover:bg-size-[600%_10%]
                    transition-all ease-in-out duration-400
                "></div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full">
                {
                    Array.from({length:100}).map((_, a) => (
                        a%2 === 0 ?
                        <div className="h-0.5 bg-white dark:bg-neutral-900"></div>
                        :
                        <div className="h-0.5"></div>
                    ))
                }
            </div>
        </footer>
    )
};

export default Footer;