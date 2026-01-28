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
//const StackLogo = ["typescript.svg", "js.svg", "react.svg", "mongodb.svg", "git.svg", "motion.svg", "redux.svg", "tailwindcss.svg", "nodejs.svg"];

type CommitSummary = {
  sha: string;
  message: string;
  date: string;
  url: string;
};

type CommitDetails = {
  additions: number;
  deletions: number;
  total: number;
  files: {
    filename: string;
    additions: number;
    deletions: number;
  }[];
};
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


async function getGitHubContributions({year}:{year:GitHubYearTypes}) {
    try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/gouravkotnala777?y=${year}`, {
            method:"GET"
        });
        const data:{total:{[key:string]:number}; contributions:{date:string; count:number; level:number;}[];} = await res.json();
        console.log({data1:data});
        return data;
    } catch (error) {
        console.log("contributions get nahi ho raha");
        console.log(error);        
    }
};
async function getRecentGitHubCommits():Promise<CommitSummary[]|undefined> {
    try {
        const commitsRes = await fetch("https://api.github.com/repos/GouravKotnala777/portfolio-3-frontend/commits?per_page=4", {
            method:"GET"
        });
        const commits:CommitSummary[] = await commitsRes.json();
        console.log({commits});

        return commits.map((c:any) => ({
            sha: c.sha,
            message: c.commit.message,
            date: c.commit.author.date,
            url: c.url,
        }));
    } catch (error) {
        console.log("recent commits get nahi ho rahe");
        console.log(error);        
    }
};

export async function fetchCommitDetails(url: string):Promise<CommitDetails> {
  const res = await fetch(url, {
    method:"GET"
  });
  const data = await res.json();

  return {
    additions: data.stats.additions,
    deletions: data.stats.deletions,
    total: data.stats.total,
    files: data.files.map((f: any) => ({
      filename: f.filename,
      additions: f.additions,
      deletions: f.deletions,
    })),
  };
}

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
    const [gitHubYear, setGitHubYear] = useState<GitHubYearTypes>("2025");
    const [commits, setCommits] = useState<CommitSummary[]>([
        {date:"01-01-2025", message:"Lorem ipsum dolor sit amet.", sha:"sha1", url:"dasdhasjdhakdj"},
        {date:"02-01-2025", message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti?", sha:"sha2", url:"dasdhasjdhakdj"},
        {date:"03-01-2025", message:"Lorem ipsum dolor sit.", sha:"sha3", url:"dasdhasjdhakdj"},
        {date:"04-01-2025", message:"Lorem, ipsum dolor sit amet consectetur adipisicing.", sha:"sha4", url:"dasdhasjdhakdj"}
    ]);
    const [details, setDetails] = useState<Record<string, CommitDetails>>({
        "sha1":{additions:1,deletions:4, files:[{additions:1,deletions:4,filename:"sadasdasd"}],total:5},
        "sha2":{additions:8,deletions:3, files:[{additions:8,deletions:3,filename:"sadasdasd"}],total:8},
        "sha3":{additions:2,deletions:1, files:[{additions:2,deletions:1,filename:"sadasdasd"}],total:3},
        "sha4":{additions:2,deletions:4, files:[{additions:2,deletions:4,filename:"sadasdasd"}],total:6},
    });




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
        getGitHubContributions({year:gitHubYear}).then((data) => {
            if (!data) {
                console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
                throw Error("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
            }
            const {totalContributions, allContributions} = groupByMonthAndWeek(data);
            setGitHubChartData(allContributions);
            setTotalContributions(totalContributions);
        }).catch((err) => {
            console.log(err);
        });

    }, [gitHubYear]);


    useEffect(() => {
        getRecentGitHubCommits().then((data) => {
            if(data){
                setCommits(data);

                data.forEach((c) => {
                    fetchCommitDetails(c.url)
                    .then((d) => {
                        console.log({d});
                        
                        setDetails((prev) => ({ ...prev, [c.sha]: d }));
                    });
                })
            }
        });
    }, []);

    //const loadDetails = async (commit: CommitSummary) => {
    //    if (details[commit.sha]) return;

    //    setLoadingSha(commit.sha);
    //    const data = await fetchCommitDetails(commit.url);
        
    //    setLoadingSha(null);
    //};

    // loadDetails nahi call kar rahe hai call karna padega

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

                        <img src="download.png" alt="download.png" className={`z-3 absolute top-[43%] left-[52.1%] -translate-x-[50%] -translate-y-[50%] w-11 h-5 ${isHighLightActive?"opacity-100":"opacity-0"} transition-all ease-in-out duration-300`} />
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
                            <SocialLinks url="/twitter" id="@gouravkotnala" logoURL={connections[0]} platform="X (formerly Twitter)" />
                            <SocialLinks url="https://github.com/gouravkotnala777" id="gouravkotnala777" logoURL={connections[1]} platform="GitHub" />
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
                            <SocialLinks url="https://www.linkedin.com/in/gourav-kotnala-003427295" id="gourav kotnala" logoURL={connections[2]} platform="LinkedIn" />
                            <SocialLinks url="https://youtube.com" id="@gouravkotnala" logoURL={connections[3]} platform="YouTube" />
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
                            <SocialLinks url="https://youtube.com" id="@gouravkotnala" logoURL={connections[4]} platform="YouTube" />
                            <SocialLinks url="https://youtube.com" id="@gouravkotnala" logoURL={connections[5]} platform="YouTube" />
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

            {/* Github Commit Details */}
            <div className="bg-white dark:bg-neutral-900 border-y border-neutral-100 dark:border-neutral-800 z-1">
                <div className="border-x border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto flex justify-between">
                    <div className="border-r border-neutral-100 dark:border-neutral-800 w-[70%] p-3 mr-2">
                        <div className="text-neutral-700 dark:text-neutral-200 text-md font-medium flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-activity text-accent">
                                <path d="M3 12h4l3 8l4 -16l3 8h4"></path>
                            </svg>
                            <span>Recent Commits</span>
                        </div>
                        <div className="text-neutral-600 dark:text-neutral-300 font-mono text-sm my-1 flex flex-col">
                            {
                                commits.map((c) => (
                                    <span className="text-nowrap truncate mt-0.5">{c.message}</span>
                                ))
                            }
                        </div>
                        <a href="https://github.com/GouravKotnala777" className="text-neutral-600 dark:text-neutral-300 text-xs font-light my-2 underline hover:no-underline underline-offset-2">View on GitHub</a>
                    </div>
                    <div className="border-l border-neutral-100 dark:border-neutral-800 w-[30%] text-right font-mono p-3 ml-2">
                        <div className="text-neutral-700 dark:text-neutral-200 text-md font-medium">
                            <div>[info]</div>
                        </div>
                        <div className="text-neutral-600 dark:text-neutral-300 flex flex-col text-sm my-2">
                            {
                                commits.map((c) => (
                                    <div className="flex justify-end items-center gap-1 mt-0.5">
                                        <span className="w-10 text-green-500 dark:text-green-700">+{details[c.sha]?.additions}</span>
                                        <span className="shrink-0">/</span>
                                        <span className="w-10 text-red-500 dark:text-red-700 text-left">-{details[c.sha]?.deletions}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="text-neutral-600 dark:text-neutral-300 font-sans text-xs font-light my-1">000000</div>
                    </div>
                </div>
            </div>


            {/* Stack Section */}
            <div className="border-y border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div className="max-w-3xl mx-auto">
                  <div className="border border-neutral-100 dark:border-neutral-800 text-neutral-950 dark:text-neutral-50 [font-size:var(--text-xl)] [font-weight:var(--heading-weight)] px-3 py-0">Stack</div>
                  <div className="flex justify-start items-center flex-wrap">
                      {
                          StackLogo.map((logo) => (
                              <div className="relative w-10 h-10 m-3 [box-shadow:0px_0px_1px_0px_var(--color-neutral-200)_inset] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-700)_inset] rounded-lg hover:[box-shadow:0px_0px_1px_0.1px_var(--color-sky-300)_inset] transition-all ease-in-out duration-300">
                                <div className="absolute top-[50%] left-[50%] p-0.5 -translate-x-[50%] -translate-y-[50%] w-[90%] h-[90%] [box-shadow:0px_0px_1px_0px_var(--color-neutral-400)] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-500)] rounded-md hover:[box-shadow:0px_0px_1px_0.1px_var(--color-sky-300)] transition-all ease-in-out duration-300">
                                    {logo}
                                </div>
                              </div>
                          ))
                        //  StackLogo.map((logo) => (
                        //      <div className="px-3 py-3">
                        //          <img data-tooltip={logo.split(".")[0]} src={logo} alt={logo} className="w-10 h-10" />
                        //      </div>
                        //  ))
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

const StackLogo = [
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630" stroke-width="0">
        <rect height="630" width="630" rx="62" className="fill-transparent"></rect>
        <path className="fill-neutral-800 dark:fill-neutral-100" d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"></path>
    </svg>,

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="">
        <rect height="512" width="512" rx="50" className="fill-transparent"></rect>
        <path className="fill-neutral-800 dark:fill-neutral-100" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"></path>
    </svg>,

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 26 26" className="">
        <path className="fill-neutral-800 dark:fill-neutral-100" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"></path>
    </svg>,

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0.7 0.4 22 22" className="text-neutral-800 dark:text-neutral-200">
        <circle cx="12" cy="11.245" r="1.785" className="fill-neutral-800 dark:fill-neutral-100"></circle>
        <path className="fill-neutral-800 dark:fill-neutral-100" d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z"></path>
        <path className="fill-neutral-800 dark:fill-neutral-100" d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z"></path>
        <path className="fill-neutral-800 dark:fill-neutral-100" d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z"></path>
        <path className="fill-neutral-800 dark:fill-neutral-100" d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="">
        <path className="fill-neutral-800 dark:fill-neutral-100" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 22 22" className="">
        <path className="fill-neutral-800 dark:fill-neutral-100" d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 0 1-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 0 1-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1 27 27" className="">
        <path className="fill-neutral-800 dark:fill-neutral-100" d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1.4 27 27" className="">
        <path className="fill-neutral-800 dark:fill-neutral-100" d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 27 27" className="">
        <path className="fill-neutral-800 dark:fill-neutral-100" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-150 -200 1455 1300" className="">
        <path className="fill-neutral-800 dark:fill-neutral-100" d="M577.344 0L1154.69 1000H0L577.344 0Z"></path>
    </svg>

];

function IconSpan({iconPathDArray, circles=[], rect=[], para}:{iconPathDArray:string[]; circles?:{cx:number; cy:number; r:number;}[]; rect?:{x:number; y:number; width:number; height:number; rx:number;}[]; para:string;}) {
    return(
        <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-200 [font-size:var(--text-md)] font-sans tracking-wide py-1">
            <div className="[box-shadow:0px_0px_1px_0px_var(--color-neutral-200)_inset] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-700)_inset] rounded-[10px] relative size-7">
                <div className="text-neutral-500 dark:text-neutral-300 [box-shadow:0px_0px_1px_0px_var(--color-neutral-400)] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-500)] bg-neutral-100 dark:bg-neutral-800 rounded-lg absolute -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] p-1">
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

const connections = [
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -20 140 130" strokeWidth="6" stroke-linecap="round" stroke-linejoin="round" className="fill-none">
        <path className="stroke-neutral-800 dark:stroke-neutral-200" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="0.9" stroke-linecap="round" stroke-linejoin="round" className="fill-none">
        <path className="stroke-neutral-800 dark:stroke-neutral-200" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.1" stroke-linecap="round" stroke-linejoin="round" className="fill-none">
        <rect className="stroke-neutral-800 dark:stroke-neutral-200" width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path className="stroke-neutral-800 dark:stroke-neutral-200" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line className="stroke-neutral-800 dark:stroke-neutral-200" x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="0.9" stroke-linecap="round" stroke-linejoin="round" className="fill-none">
        <path className="stroke-neutral-800 dark:stroke-neutral-200" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225z"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.8 -1 26 26" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" className="fill-none">
        <path className="stroke-neutral-800 dark:stroke-neutral-200" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
    </svg>

]

function SocialLinks({logoURL, id, url, platform}:{logoURL:ReactNode; id:string; url:string; platform:string;}) {
    return(
        <a href={url} className="group border border-neutral-100 dark:border-neutral-800 flex justify-start items-center flex-1 gap-4 hover:bg-neutral-100 dark:hover:bg-neutral-900 z-1 px-3 py-2">
            <div className="">
                <div className="relative w-10 h-10 m-3 [box-shadow:0px_0px_1px_0px_var(--color-neutral-200)_inset] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-700)_inset] rounded-lg group-hover:scale-110 transition-transform ease-in-out duration-300">
                    <div className="absolute top-[50%] left-[50%] p-0.5 -translate-x-[50%] -translate-y-[50%] w-[90%] h-[90%] [box-shadow:0px_0px_1px_0px_var(--color-neutral-400)] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-500)] rounded-md">
                        {logoURL}
                    </div>
                </div>
                {/*<div className="border border-neutral-800 w-10 h-10 p-1">
                    {logoURL}
                </div>*/}
                
                {/*<img src={logoURL} alt={logoURL} className="h-12 w-12 rounded-xl " />*/}
            </div>
            <div className="flex flex-col">
                <span className={`text-neutral-800 dark:text-neutral-200 [font-size:var(--text-md)] font-semibold transition-all ease-in-out duration-300 group-hover:scale-110 group-hover:translate-x-2`}
                >{platform}</span>
                <span className="border border-neutral-900 dark:border-neutral-200 w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform ease-out duration-300 delay-100"></span>
                <span className={`text-neutral-600 dark:text-neutral-400 font-normal [font-size:var(--text-sm)]`}>{id}</span>
            </div>
        </a>
    )
};

function ComponentLinks({componentIconPathD, url, componentName, about, isNew}:{componentIconPathD:string; url:string; componentName:string; about?:string; isNew?:boolean;}) {
    return(
        <NavLink to={url} className="group border-x border-neutral-100 dark:border-neutral-800 flex justify-start items-center flex-1 gap-4 hover:bg-neutral-100 dark:hover:bg-neutral-900 z-1 px-3 py-2">
            <div className="[box-shadow:0px_0px_1px_0px_var(--color-neutral-200)_inset] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-700)_inset] rounded-[10px] relative size-7">
                <div className="text-neutral-500 dark:text-neutral-200 [box-shadow:0px_0px_1px_0px_var(--color-neutral-400)] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-500)] bg-neutral-100 dark:bg-neutral-800 rounded-lg absolute -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] p-1">
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
            <div className="h-50 flex justify-between">
                <div className="border-r border-neutral-100 dark:border-neutral-800 mr-2 w-[88%]">
                    <div className="min-h-max flex px-4 overflow-x-scroll thin_scrollbar">
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
                                                <div data-tooltip={`${day.count} contributions on ${day.date}`} className={`[width:var(--size-git-tile)] [height:var(--size-git-tile)] p-1 m-0.5 rounded-xs [box-shadow:0px_0px_1px_1px_#00000020_inset] dark:[box-shadow:0px_0px_1px_1px_#ffffff20_inset]
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
                    <div className="flex justify-between items-center px-3 py-1">
                        <div className="">
                            {totalContributions?.[gitHubYear]||0} contributions in {gitHubYear} on <Strong hasUnderLine><NavLink to="https://github.com/gouravkotnala777">GitHub</NavLink></Strong>.
                        </div>
                        <div className="flex justify-between items-center gap-1">
                            <div>Less</div>
                            <div className="flex gap-1">
                                {
                                    [0,1,2,3,4].map((level) => (
                                        <span className={`[width:var(--size-git-tile)] [height:var(--size-git-tile)] p-1 m-0.5 rounded-xs [box-shadow:0px_0px_1px_1px_#00000020_inset] dark:[box-shadow:0px_0px_1px_1px_#ffffff20_inset]
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
                
                <div className="border-l border-b border-neutral-100 dark:border-neutral-800 overflow-x-hidden overflow-y-scroll max-w-24 w-[24%] thin_scrollbar relative">
                    <div className="w-full h-13 sticky -top-4 left-0 z-1 blur-sm bg-white dark:bg-neutral-900"></div>
                    <div className="flex flex-col py-4 z-0">
                        {
                            gitHubYears.map((year) => (
                                <div className={`w-full text-center mx-auto py-1 ${gitHubYear === year ? "bg-neutral-200 dark:bg-neutral-700 scale-120":"bg-white dark:bg-neutral-950 scale-100"} cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-transform ease-in-out duration-300`} onClick={() => {setGitHubYear(year)}}>{year}</div>
                            ))
                        }
                    </div>
                    <div className="w-full h-13 sticky -bottom-4 left-0 z-1 blur-sm white-500 dark:bg-neutral-900"></div>
                </div>
            </div>
        </div>
    )
};