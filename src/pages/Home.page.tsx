import { useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import "../index.css";
import { NavLink } from "react-router-dom";
import { DATA } from "../utils/constants";
import useTheme from "../hooks/useTheme";
import TypingGame from "../components/games/TypingGame.component";

const ComponentsSectionLinks = [
    {
        componentIconPathD:"M12 2.182a1.636 1.636 0 1 0 0 3.273 1.636 1.636 0 0 0 0-3.273ZM8.182 3.818a3.818 3.818 0 1 1 2.002 3.36l-3.006 3.006c.125.23.226.474.3.725h9.044A3.82 3.82 0 0 1 24 12a3.818 3.818 0 0 1-7.478 1.092H7.478c-.098.33-.241.647-.425.939l2.917 2.917a3.818 3.818 0 1 1-1.442 1.644L5.41 15.47a3.818 3.818 0 1 1 .225-6.831l3.007-3.005a3.801 3.801 0 0 1-.46-1.817ZM18.546 12v.004a1.636 1.636 0 1 0 0-.008V12ZM3.818 10.364a1.636 1.636 0 1 0 0 3.272 1.636 1.636 0 0 0 0-3.272Zm6.546 9.818a1.636 1.636 0 1 1 3.272 0 1.636 1.636 0 0 1-3.272 0Z",
        url:"/#########",
        componentName:"Particles Vanishing Input",
        about:""
    },
    {
        componentIconPathD:"M12 2.182a1.636 1.636 0 1 0 0 3.273 1.636 1.636 0 0 0 0-3.273ZM8.182 3.818a3.818 3.818 0 1 1 2.002 3.36l-3.006 3.006c.125.23.226.474.3.725h9.044A3.82 3.82 0 0 1 24 12a3.818 3.818 0 0 1-7.478 1.092H7.478c-.098.33-.241.647-.425.939l2.917 2.917a3.818 3.818 0 1 1-1.442 1.644L5.41 15.47a3.818 3.818 0 1 1 .225-6.831l3.007-3.005a3.801 3.801 0 0 1-.46-1.817ZM18.546 12v.004a1.636 1.636 0 1 0 0-.008V12ZM3.818 10.364a1.636 1.636 0 1 0 0 3.272 1.636 1.636 0 0 0 0-3.272Zm6.546 9.818a1.636 1.636 0 1 1 3.272 0 1.636 1.636 0 0 1-3.272 0Z",
        url:"/#########",
        componentName:"Dia Scroller Navbar",
        about:""
    },
    {
        componentIconPathD:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
        url:"/#########",
        componentName:"Gooey Navbar",
        about:""
    },
    {
        componentIconPathD:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        url:"/#########",
        componentName:"Staggered String",
        about:""
    },
    {
        componentIconPathD:"M12 2.182a1.636 1.636 0 1 0 0 3.273 1.636 1.636 0 0 0 0-3.273ZM8.182 3.818a3.818 3.818 0 1 1 2.002 3.36l-3.006 3.006c.125.23.226.474.3.725h9.044A3.82 3.82 0 0 1 24 12a3.818 3.818 0 0 1-7.478 1.092H7.478c-.098.33-.241.647-.425.939l2.917 2.917a3.818 3.818 0 1 1-1.442 1.644L5.41 15.47a3.818 3.818 0 1 1 .225-6.831l3.007-3.005a3.801 3.801 0 0 1-.46-1.817ZM18.546 12v.004a1.636 1.636 0 1 0 0-.008V12ZM3.818 10.364a1.636 1.636 0 1 0 0 3.272 1.636 1.636 0 0 0 0-3.272Zm6.546 9.818a1.636 1.636 0 1 1 3.272 0 1.636 1.636 0 0 1-3.272 0Z",
        url:"/#########",
        componentName:"Fluid Navbar",
        about:""
    },
    {
        componentIconPathD:"M237.66,133.66l-96,96A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,13.66-5.66l96,96A8,8,0,0,1,237.66,133.66Z",
        url:"/#########",
        componentName:"Popup Navabr",
        about:""
    },
];


const TileBG = [
    "bg-gray-50",
    "bg-green-200",
    "bg-green-400",
    "bg-green-600",
    "bg-green-800"
];
const TileBGDark = [
    "dark:bg-gray-900",
    "dark:bg-green-700",
    "dark:bg-green-500",
    "dark:bg-green-300",
    "dark:bg-green-100"
];
//const MonthsName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const StackLogo = ["typescript.svg", "js.svg", "react.svg", "mongodb.svg", "git.svg", "motion.svg", "redux.svg", "tailwindcss.svg", "nodejs.svg"];

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type MonthMap = Contribution[][];
type GitHubYearTypes = "2031"|"2030"|"2029"|"2028"|"2027"|"2026"|"2025"|"2024"|"2023"|"2022"|"2021"|"2020"|"2019";
const gitHubYears:GitHubYearTypes[] = ["2031", "2030", "2029", "2028", "2027", "2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019"];

function groupByMonthAndWeek(data:{total:{[key:string]:number}; contributions:Contribution[];}|null):{totalContributions:{[key:string]:number}; allContributions:Contribution[][];} {
  let allContributions: MonthMap = [];
  let totalContributions:{[key:string]:number}|null = null;

  
  
  if (!data) {
    throw Error("aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  }

  data?.contributions.forEach((item, index) => {
    if ((index)%7 === 0) {
        allContributions[allContributions.length] = [item];
    }
    else{
        allContributions[allContributions.length-1].push(item);
    }
  });
  totalContributions = data.total;

  return {totalContributions, allContributions};
}


async function getGitHubContributions() {
    try {
        const res = await fetch("https://github-contributions-api.jogruber.de/v4/gouravkotnala777?y=2025", {
            method:"GET"
        });
        const data:{total:{[key:string]:number}; contributions:{date:string; count:number; level:number;}[];} = await res.json();
        return data;
    } catch (error) {
        console.log("contributions get nahi ho raha");
        console.log(error);        
    }
};
export function transformData(data:{total:{[key:string]:number}; contributions:{date:string; count:number; level:number;}[];}|null):{
    totalContributions: {
        [key: string]: number;
    };
    allContributions: {
        date: string;
        count: number;
        level: number;
    }[][];
} {
    try {
        let allContributions:{date:string; count:number; level:number;}[][] = [];
        let totalContributions:{[key:string]:number}|null = null;
        
        if (!data) {
            throw Error("Github Contribution Chart Data not found");
        }
        data.contributions.forEach(({date, count, level}) => {
            if (allContributions[Number(date.split("-")[1])]) {
                allContributions[Number(date.split("-")[1])].push({date, count, level});
            }
            else{
                allContributions[Number(date.split("-")[1])] = [{date, count, level}];
            }
        });

        totalContributions = data.total;
        return {totalContributions, allContributions};
        
    } catch (error) {
        throw Error("Github Contribution Chart Data not found");
    }
};


let sunGlassesTimer = 0;
function Prac({screenWidth}:{screenWidth:number;}) {
    const {theme} = useTheme();
    const [isDPHovering, setIsDPHovering] = useState<boolean>(false);
    const [isHighLightActive, setIsHighLightActive] = useState<boolean>(false);
    const [gitHubChartData, setGitHubChartData] = useState<MonthMap>([]);
    const [totalContributions, setTotalContributions] = useState<{[key:string]:number}|null>(DATA.total);
    const [gitHubYear, setGitHubYear] = useState<GitHubYearTypes>("2026");


    async function getGitHubContributionsHandler() {
        const data = await getGitHubContributions();
        //if (!data) return;

        const {totalContributions, allContributions} = groupByMonthAndWeek(DATA||data);
        setGitHubChartData(allContributions);
        setTotalContributions(totalContributions);
    }

    function activeSunGlassesPower() {
        clearTimeout(sunGlassesTimer);
        setIsDPHovering(true);
        sunGlassesTimer = setTimeout(() => {
            setIsHighLightActive(!isHighLightActive);
        }, 2000);
    };
    function disableSunGlassesPower() {
        setIsDPHovering(false);
        clearTimeout(sunGlassesTimer);
    };

    useEffect(() => {
        getGitHubContributionsHandler();
    }, []);

    return(
        <section className="flex mx-2 flex-col gap-10 relative min-h-screen font-roboto selection:bg-neutral-300 dark:selection:bg-neutral-600">
            <div className="absolute top-0 left-0 inset-0 border border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto"></div>

            {/* Hero Section */}
            <div className="bg-white dark:bg-neutral-900 border-y border-neutral-100 dark:border-neutral-800 h-70">
              <div className="max-w-3xl mx-auto h-full">

              </div>
            </div>

            {/* Profile Section */}
            <div className="bg-white dark:bg-neutral-900 border-y border-neutral-100 dark:border-neutral-800">
                <div className="max-w-3xl mx-auto flex relative">
                    <div className="w-(--dp-size) h-(--dp-size) [box-shadow:0px_0px_1px_0px_#00000020_inset] dark:[box-shadow:0px_0px_1px_0px_#ffffff20_inset] bg-a rounded-full overflow-hidden p-0.75 relative"
                        onMouseEnter={activeSunGlassesPower}
                        onMouseLeave={disableSunGlassesPower}
                    >
                        <div className="z-1 absolute top-0 left-0 h-full w-full text-white text-center content-center blur-md">
                            <div className="w-full h-full"
                                style={{
                                    background:`conic-gradient(from 90deg, ${theme==="light"?"var(--color-sky-600)":"var(--color-sky-400)"} var(--dp-bg-angle), ${theme==="light"?"#262626":"#f5f5f5"} 0%)`,
                                    ...(isDPHovering&&{animation:"circular-motion 2s ease-out"}),
                                }}
                            ></div>
                        </div>

                        <img src="download.png" alt="download.png" className={`z-3 absolute border-2 border-red-500 top-[43%] left-[52.1%] -translate-x-[50%] -translate-y-[50%] w-11 h-5 ${isHighLightActive?"opacity-100":"opacity-0"} transition-all ease-in-out duration-300`} />
                        <img src="gourav-kotnala1.png" alt="gourav-kotnala1.png" className="z-2 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-[95%] w-[95%] [box-shadow:0px_0px_1px_0px_#00000050] dark:[box-shadow:0px_0px_1px_0px_#ffffff50] rounded-full bg-linear-0 from-neutral-500 to-white dark:from-neutral-50 dark:to-neutral-500" />
                    </div>
                    <a href="https://en.wikipedia.org/wiki/India" className="w-(--flag-w) h-(--flag-h) absolute z-4">
                        <img src="indian-flag2.webp" alt="indian-flag2.webp" />
                    </a>

                    <div className="border-x border-neutral-100 dark:border-neutral-800 content-end">
                        <div className="border border-neutral-100 dark:border-neutral-800 [font-size:var(--text-sm)] text-neutral-200 dark:text-neutral-750 font-mono px-3 py-0 [display:var(--leaky-text-display)]">{theme === "light"?"text-3xl text-neutral-950 font-mono":"text-3xl text-neutral-800 font-medium"}</div>
                        <div className="border border-neutral-100 dark:border-neutral-800 text-neutral-950 dark:text-neutral-50 [font-size:var(--name-size)] font-(--name-weight) px-3 py-0">Gourav Kotnala</div>
                        <div className="border border-neutral-100 dark:border-neutral-800 text-lg text-neutral-600 dark:text-neutral-200 font-normal px-3 py-1">Full Stack Web Developer</div>
                    </div>
                </div>
            </div>

            {/* Para Section */}
            <div className="border-y border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 z-1">
                <div className={`border-x border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto ${isHighLightActive?"text-neutral-300 dark:text-neutral-700":"text-neutral-800 dark:text-neutral-300"} transition-all ease-in-out duration-300 [font-size:var(--text-md)] font-mono leading-8 tracking-wide px-3 py-2`}>
                    <p>
                        My name is <HighLight isHighLightActive={isHighLightActive}>Gourav Kotnala</HighLight>. I am <HighLight isHighLightActive={isHighLightActive}>24 years old</HighLight>. I am <HighLight isHighLightActive={isHighLightActive}>from Old Faridabad</HighLight>. I have completed my batcholar's of computer application <HighLight isHighLightActive={isHighLightActive}>(BCA) from Swami Vivekanand Subharti University in 2023</HighLight>. I am <HighLight isHighLightActive={isHighLightActive}>passionate about web development</HighLight> and I have been <HighLight isHighLightActive={isHighLightActive}>learning & building projects using MERN Stack</HighLight>. I am currently <HighLight isHighLightActive={isHighLightActive}>looking for an opportunity where I can</HighLight> looking for an opportunity where I can contribute to real-world projects and continue to <HighLight isHighLightActive={isHighLightActive}>improve my skills as full stack developer</HighLight>. 
                    </p>

                </div>
            </div>

            {/* Address and Contacts */}
            <div className="bg-white dark:bg-neutral-900 border-y border-neutral-100 dark:border-neutral-800 z-1">
                <div className="border-x border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto px-3 py-2">
                    <div>
                        <IconSpan
                            iconPathDArray={["m18 16 4-4-4-4", "m6 8-4 4 4 4", "m14.5 4-5 16"]}
                            para="Junior Full Stack Developer"
                        />
                    </div>
                    <div>
                        <IconSpan
                            iconPathDArray={["M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5", "M9 18h6", "M10 22h4"]}
                            para="4 years of hands on practice on MERN projects"
                        />
                    </div>
                    <div className={`grid ${screenWidth > 720?"grid-cols-2":"grid-cols-1"}`}>
                        <IconSpan
                            iconPathDArray={["M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"]}
                            circles={[{cx:12, cy:10, r:3}]}
                            para="Old Faridabad, Haryana, India"
                        />
                        <IconSpan
                            iconPathDArray={["M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"]}
                            para="+91 8882732859"
                        />
                        <IconSpan
                            iconPathDArray={["M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"]}
                            para="gouravkotnala777.github.io/portfolio-1"
                        />
                        <IconSpan
                            iconPathDArray={["M12 6v6l2-4"]}
                            circles={[{cx:12, cy:12, r:10}]}
                            para="18:19"
                        />
                        <IconSpan
                            iconPathDArray={["m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"]}
                            rect={[{x:2, y:4, width:20, height:16, rx:2}]}
                            para="gouravkotnala777@gmail.com"
                        />
                        <IconSpan
                            iconPathDArray={["M16 3h5v5", "m21 3-6.75 6.75"]}
                            circles={[{cx:10, cy:14, r:6}]}
                            para="he/him"
                        />
                    </div>
                </div>
            </div>


            {/* Social Media Links Section */}
            <div className="bg-white dark:bg-neutral-900 flex flex-col">
                <div className="">
                <div className="border border-neutral-100 dark:border-neutral-800 text-neutral-950 dark:text-neutral-50 px-3 py-0 [font-size:var(--text-xl)] [font-weight:var(--heading-weight)] max-w-3xl mx-auto">Connections</div>
                    <div className="border-y border-neutral-100 dark:border-neutral-800">
                        <div className={`max-w-3xl mx-auto flex ${screenWidth > 520?"flex-row justify-between items-center":"flex-col w-full"} gap-4`}>
                            <SocialLinks url="/twitter" id="@gouravkotnala" logoURL="x.webp" platform="X (formerly Twitter)" />
                            <SocialLinks url="https://github.com/gouravkotnala777" id="gouravkotnala777" logoURL="github.webp" platform="GitHub" />
                        </div>
                    </div>
                    <div className="">
                        <div className="max-w-3xl mx-auto flex justify-between items-center gap-4">
                            <div className="border-x border-neutral-100 dark:border-neutral-800 h-4 w-full"></div>
                            <div className="border-x border-neutral-100 dark:border-neutral-800 h-4 w-full"></div>
                        </div>
                    </div>
                    <div className="border-y border-neutral-100 dark:border-neutral-800">
                        <div className={`max-w-3xl mx-auto flex ${screenWidth > 520?"flex-row justify-between items-center":"flex-col w-full"} gap-4`}>
                            <SocialLinks url="https://www.linkedin.com/in/gourav-kotnala-003427295" id="gourav kotnala" logoURL="linkedin.webp" platform="LinkedIn" />
                            <SocialLinks url="https://www.linkedin.com/in/gourav-kotnala-003427295" id="gourav kotnala" logoURL="linkedin.webp" platform="LinkedIn" />
                        </div>
                    </div>
                    <div className="">
                        <div className="max-w-3xl mx-auto flex justify-between items-center gap-4">
                            <div className="border-x border-neutral-100 dark:border-neutral-800 h-4 w-full"></div>
                            <div className="border-x border-neutral-100 dark:border-neutral-800 h-4 w-full"></div>
                        </div>
                    </div>
                    <div className="border-y border-neutral-100 dark:border-neutral-800">
                        <div className={`max-w-3xl mx-auto flex ${screenWidth > 520?"flex-row justify-between items-center":"flex-col w-full"} gap-4`}>
                            <SocialLinks url="https://youtube.com" id="@gouravkotnala" logoURL="vite.svg" platform="YouTube" />
                            <SocialLinks url="https://youtube.com" id="@gouravkotnala" logoURL="vite.svg" platform="YouTube" />
                        </div>
                    </div>
                </div>
            </div>


            {/* About Section */}
            <div className="border-y border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 z-1">
                <div className="border-x border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto">
                    <div className="border border-neutral-100 dark:border-neutral-800 text-neutral-950 dark:text-neutral-50 px-3 py-0 [font-size:var(--text-xl)] [font-weight:var(--heading-weight)]">About</div>
                    <ul className="text-neutral-800 dark:text-neutral-300 tracking-wider [font-size:var(--text-md)] leading-8 list-disc marker:text-neutral-300 px-8 py-4">
                        <li><Strong>Design Engineer</Strong> with 3+ years of hands-on experience, with for pixel-perfect execution and Strong attention to small details.</li>
                        <li>Skilled in <Strong>React</Strong>, <Strong>TypeScript</Strong>, <Strong>MongoDB</Strong>, <Strong>ExpressJS</Strong> and micro interactions building high-quality, user-centric web applications.</li>
                        <li>Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.</li>
                        <li>Creator of many cool animated react components-</li>
                        <ul className="list-disc marker:text-neutral-300 px-8">
                            <li>A creative React <NavLink to="#######"><Strong hasUnderLine>Input</Strong></NavLink> component with cool vanishing content on pressing enter.</li>
                            <li><NavLink to="#######"><Strong hasUnderLine>Navbar</Strong></NavLink> with scroll-synced hover indicator.</li>
                            <li>A visually engaging <NavLink to="#######"><Strong hasUnderLine>Navbar</Strong></NavLink> with a fluid hover indicator.</li>
                        </ul>
                    </ul>
                </div>
            </div>

            {/* Typing Game */}
            <div className="border-y border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 w-full">
                <div className="max-w-3xl w-full mx-auto">
                    <TypingGame />
                </div>
            </div>

            {/* Github Contribution Chart Section */}
            <div className="bg-white dark:bg-neutral-900 border-y border-neutral-100 dark:border-neutral-800 relative">
                <div className="border border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto text-neutral-950 dark:text-neutral-50 [font-size:var(--text-xl)] [font-weight:var(--heading-weight)] px-3 py-0">GitHub Contributions</div>
                <GithubContributionChart totalContributions={totalContributions} gitHubChartData={gitHubChartData} gitHubYear={gitHubYear} setGitHubYear={setGitHubYear} />
            </div>


            {/* Stack Section */}
            <div className="border-y border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div className="max-w-3xl mx-auto">
                  <div className="border border-neutral-100 dark:border-neutral-800 text-neutral-950 dark:text-neutral-50 [font-size:var(--text-xl)] [font-weight:var(--heading-weight)] px-3 py-0">Stack</div>
                  <div className="flex justify-start items-center flex-wrap">
                      {
                          StackLogo.map((logo) => (
                              <div className="px-3 py-3">
                                  <img data-tooltip={logo.split(".")[0]} src={logo} alt={logo} className="w-10 h-10" />
                              </div>
                          ))
                      }
                  </div>
                </div>
            </div>


            {/* Components Section */}
            <div className="border-y border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div className="border border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto text-neutral-950 dark:text-neutral-50 [font-size:var(--text-xl)] [font-weight:var(--heading-weight)] px-3 py-0">Components</div>
                <div className="flex flex-col">
                    <div className="border-y border-neutral-100 dark:border-neutral-800">
                        <div className={`max-w-3xl mx-auto flex ${screenWidth > 520 ? "flex-row justify-between items-center":"flex-col"} gap-4`}>
                            <ComponentLinks url={ComponentsSectionLinks[0].url} componentIconPathD={ComponentsSectionLinks[0].componentIconPathD} componentName={ComponentsSectionLinks[0].componentName} about={ComponentsSectionLinks[0].about} isNew={true} />
                            <ComponentLinks url={ComponentsSectionLinks[1].url} componentIconPathD={ComponentsSectionLinks[1].componentIconPathD} componentName={ComponentsSectionLinks[1].componentName} about={ComponentsSectionLinks[1].about} />
                        </div>
                    </div>
                    <div className="">
                        <div className="max-w-3xl mx-auto flex justify-between items-center gap-4">
                            <div className="border-x border-neutral-100 dark:border-neutral-800 h-4 w-full"></div>
                            <div className="border-x border-neutral-100 dark:border-neutral-800 h-4 w-full"></div>
                        </div>
                    </div>
                    <div className="border-y border-neutral-100 dark:border-neutral-800">
                        <div className={`max-w-3xl mx-auto flex ${screenWidth > 520 ? "flex-row justify-between items-center":"flex-col"} gap-4`}>
                            <ComponentLinks url={ComponentsSectionLinks[2].url} componentIconPathD={ComponentsSectionLinks[2].componentIconPathD} componentName={ComponentsSectionLinks[2].componentName} about={ComponentsSectionLinks[2].about} />
                            <ComponentLinks url={ComponentsSectionLinks[3].url} componentIconPathD={ComponentsSectionLinks[3].componentIconPathD} componentName={ComponentsSectionLinks[3].componentName} about={ComponentsSectionLinks[3].about} isNew={true} />
                        </div>
                    </div>
                    <div className="">
                        <div className="max-w-3xl mx-auto flex justify-between items-center gap-4">
                            <div className="border-x border-neutral-100 dark:border-neutral-800 h-4 w-full"></div>
                            <div className="border-x border-neutral-100 dark:border-neutral-800 h-4 w-full"></div>
                        </div>
                    </div>
                    <div className="border-y border-neutral-100 dark:border-neutral-800">
                        <div className={`max-w-3xl mx-auto flex ${screenWidth > 520 ? "flex-row justify-between items-center":"flex-col"} gap-4`}>
                            <ComponentLinks url={ComponentsSectionLinks[4].url} componentIconPathD={ComponentsSectionLinks[4].componentIconPathD} componentName={ComponentsSectionLinks[4].componentName} about={ComponentsSectionLinks[4].about} />
                            <ComponentLinks url={ComponentsSectionLinks[5].url} componentIconPathD={ComponentsSectionLinks[5].componentIconPathD} componentName={ComponentsSectionLinks[5].componentName} about={ComponentsSectionLinks[5].about} />
                        </div>
                    </div>
                </div>
            </div>



            
            <style>
                {`
                    @property --dp-bg-angle{
                        syntax:'<percentage>';
                        initial-value:0%;
                        inherits:false;
                    }
                    @keyframes circular-motion {
                        0%{
                            --dp-bg-angle:0%;
                        }
                        100%{
                            --dp-bg-angle:100%;
                        }
                    }
                `}
            </style>
            


        </section>
    )
}

export default Prac;


function IconSpan({iconPathDArray, circles=[], rect=[], para}:{iconPathDArray:string[]; circles?:{cx:number; cy:number; r:number;}[]; rect?:{x:number; y:number; width:number; height:number; rx:number;}[]; para:string;}) {
    return(
        <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-200 [font-size:var(--text-md)] font-sans tracking-wide py-1">
            <div className="[box-shadow:0px_0px_1px_0px_#00000050_inset] dark:[box-shadow:0px_0px_1px_0px_#ffffff50_inset] rounded-[10px] relative size-7">
                <div className="text-neutral-500 dark:text-neutral-300 [box-shadow:0px_0px_1px_0px_#00000050] bg-neutral-100 dark:bg-neutral-800 rounded-lg absolute -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                        className="size-4"
                    >
                        {
                            iconPathDArray.map((iconPathD) => (
                                <path strokeLinecap="round" strokeLinejoin="round" d={iconPathD} />
                            ))
                        }

                        {
                            circles.map(({cx, cy, r}) => (
                                <circle cx={cx} cy={cy} r={r}></circle>
                            ))
                        }

                        {
                            rect.map(({x, y, width, height, rx}) => (
                                <rect x={x} y={y} width={width} height={height} rx={rx}></rect>
                            ))
                        }
                    </svg>
                </div>
            </div>
            <span>{para}</span>
        </div>
    )
};

function SocialLinks({logoURL, id, url, platform}:{logoURL:string; id:string; url:string; platform:string;}) {
    return(
        <a href={url} className="group border-x border-neutral-100 dark:border-neutral-800 flex justify-start items-center flex-1 gap-4 hover:bg-neutral-100 dark:hover:bg-neutral-900 z-1 px-3 py-2">
            <div className="">
                <img src={logoURL} alt={logoURL} className="h-12 w-12 rounded-xl group-hover:scale-110 transition-transform ease-in-out duration-300" />
            </div>
            <div className="flex flex-col">
                <span className={`text-neutral-800 dark:text-neutral-200 [font-size:var(--text-md)] font-semibold transition-all ease-in-out duration-300 group-hover:scale-110 group-hover:translate-x-2`}
                >{platform}</span>
                <span className="border border-neutral-900 dark:border-neutral-200 w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform ease-out duration-300 delay-100"></span>
                <span className={`text-neutral-600 dark:text-neutral-400 font-normal [font-size:var(--text-sm)]`}>{id}</span>
            </div>

            <style>
                {`
                    @property --dp-bg-anglea{
                        syntax:'<percentage>';
                        initial-value:0%;
                        inherits:false;
                    }
                    @keyframes circular-motionb {
                        0%{
                            --dp-bg-anglea:0%;
                        }
                        50%{
                            --dp-bg-anglea:100%;
                        }
                        100%{
                            --dp-bg-anglea:200%;
                        }
                    }
                `}
            </style>
        </a>
    )
};

function ComponentLinks({componentIconPathD, url, componentName, about, isNew}:{componentIconPathD:string; url:string; componentName:string; about?:string; isNew?:boolean;}) {
    return(
        <NavLink to={url} className="group border-x border-neutral-100 dark:border-neutral-800 flex justify-start items-center flex-1 gap-4 hover:bg-neutral-100 dark:hover:bg-neutral-900 z-1 px-3 py-2">
            <div className="[box-shadow:0px_0px_1px_0px_#00000050_inset] dark:[box-shadow:0px_0px_1px_0px_#ffffff50_inset] rounded-[10px] relative size-7">
                <div className="text-neutral-500 dark:text-neutral-200 [box-shadow:0px_0px_1px_0px_#00000050] dark:[box-shadow:0px_0px_1px_0px_#ffffff50] bg-neutral-100 dark:bg-neutral-800 rounded-lg absolute -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4">
                        <path d={componentIconPathD} fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-neutral-800 dark:text-neutral-200 [font-size:var(--text-md)] font-roboto font-semibold underline-offset-4 group-hover:underline">{componentName}</span>
                <span className="text-neutral-500 dark:text-neutral-300 font-normal [font-size:var(--text-sm)]">{about}</span>
            </div>
            {
                isNew&&
                    <div className="w-2 h-2 rounded-full relative">
                        <div className="rounded-full absolute top-0 left-0 bg-sky-500 animate-ping inset-0"></div>
                        <div className="rounded-full absolute top-0 left-0 bg-sky-500 animate-pulse inset-0"></div>
                    </div>
            }
        </NavLink>
    )
};

function Strong({children, hasUnderLine}:{children:ReactNode; hasUnderLine?:boolean;}) {

    return(
        <strong className={`${hasUnderLine&&"underline underline-offset-4"} font-medium text-neutral-950 dark:text-neutral-50`}>{children}</strong>
    )
};

function HighLight({children, isHighLightActive}:{children:ReactNode; isHighLightActive?:boolean;}) {

    return(
        <span className={`${isHighLightActive&&"bg-neutral-400 dark:bg-neutral-500"} text-neutral-800 dark:text-neutral-300 transition-all ease-in-out duration-300`}>{children}</span>
    )
};

function GithubContributionChart({totalContributions, gitHubChartData, gitHubYear, setGitHubYear}:{totalContributions:{[key:string]:number}|null; gitHubChartData:MonthMap; gitHubYear:GitHubYearTypes; setGitHubYear:Dispatch<SetStateAction<GitHubYearTypes>>}) {
    return(
        <div className="border-x border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto [font-size:var(--text-xs)] text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center">
                <div className="flex px-4 overflow-x-scroll thin_scrollbar">
                    {
                        
                        gitHubChartData.map((arr, index) => (
                            <div className="relative">
                                <div className="absolute -left-3 top-1">
                                    {
                                        (index-1)%4 === 0 &&
                                            <div className="">{new Date(arr[3]?.date).toLocaleString("en-US", {month:"short"})}</div>
                                    }
                                </div>
                                <div className="mt-7">
                                    {
                                        arr.map((day) => (
                                            <div data-tooltip={`${day.count} contributions on ${day.date}`} className={`w-3 h-3 p-1 m-0.5 rounded-xs [box-shadow:0px_0px_1px_1px_#00000020_inset] dark:[box-shadow:0px_0px_1px_1px_#ffffff20_inset]
                                                ${TileBG[day.level]
                                                }
                                                ${TileBGDark[day.level]
                                                }
                                                `}></div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="border-l border-b border-neutral-100 dark:border-neutral-800 overflow-x-hidden overflow-y-scroll h-34.5 w-22 thin_scrollbar">
                    <div className="flex flex-col py-4">
                        {
                            gitHubYears.map((year) => (
                                <div className={`w-full text-center mx-auto py-1 ${gitHubYear === year ? "bg-neutral-200 dark:bg-neutral-700 scale-120":"bg-white dark:bg-neutral-950 scale-100"} cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-transform ease-in-out duration-300`} onClick={() => {setGitHubYear(year)}}>{year}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center px-3 py-1">
                <div className="">
                    {totalContributions?.[gitHubYear]||0} contributions in {gitHubYear} on <Strong hasUnderLine><NavLink to="https://github.com/gouravkotnala777">GitHub</NavLink></Strong>.
                </div>
                <div className="flex justify-between items-center gap-1">
                    <div>Less</div>
                    <div className="flex gap-1">
                        {
                            [0,1,2,3,4].map((level) => (
                                <span className={`w-3 h-3 p-1 m-0.5 rounded-xs [box-shadow:0px_0px_1px_1px_#00000020_inset] dark:[box-shadow:0px_0px_1px_1px_#ffffff20_inset]
                                        ${TileBG[level]}
                                        ${TileBGDark[level]}
                                    `}></span>
                            ))
                        }
                    </div>
                    <div>More</div>
                </div>
            </div>
        </div>
    )
};