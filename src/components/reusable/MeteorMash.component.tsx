import { useEffect, useRef, useState } from "react";

type ThemeTypes = "light"|"dark";
interface MeteorMashPropInterface{
    numOfMeteors?:number;
    trailLength?:number;
    trailLengthShrinkable?:number;
    trailThickness?:number;
    meteorCoreSize?:number;
    collisionDebriSize?:number;
    theme?:ThemeTypes;
    bgColor?:Record<ThemeTypes, string>;
    animateUntill?:boolean;
};
interface MeteorTrailInterface {
    index:number;
    x1:number;
    y1:number;
    trailLength:number;
    trailLengthShrinkable:number;
    color:string;
    dots:{
        index:number;
        x:number;
        y:number;
        size:number;
        color:string;
        opacity:number;
        speed:number;
    }[];
};

const NUM_OF_METEORS = 7;
const TRAIL_LENGTH = 20;
const TRAIL_LENGTH_SHRINKABLE = 60;
const TRAILS_THICKNESS = 3;
const METEOR_CORE_SIZE = 2.4;
const COLLISION_DEBRI_SIZE = 2;
const BG_COLOR = {light:"white", dark:"black"};

function MeteorMash({numOfMeteors=NUM_OF_METEORS, trailLength=TRAIL_LENGTH, trailLengthShrinkable=TRAIL_LENGTH_SHRINKABLE, trailThickness=TRAILS_THICKNESS, meteorCoreSize=METEOR_CORE_SIZE, collisionDebriSize=COLLISION_DEBRI_SIZE, theme="light", bgColor=BG_COLOR, animateUntill=true}:MeteorMashPropInterface) {
    const canvasRef = useRef<HTMLCanvasElement|null>(null);
    const [trails, setTrails] = useState<MeteorTrailInterface[]>([]);
    //const [e, setE] = useState<number>(0);
    

    useEffect(() => {
        const trailsArray:MeteorTrailInterface[] = [];        
        const maxHeight = (canvasRef.current?.parentElement?.clientHeight||400);
        const maxWidth = (canvasRef.current?.parentElement?.clientWidth||400);
        
        for (let c = 0; c < numOfMeteors; c++) {
            const x = Math.floor(Math.random()*((maxWidth/2)-(-(maxWidth))+1))+(-(maxWidth));
            const y = -(trailLength+trailLength+(c*100));
            trailsArray.push({
                index:c, x1:x, y1:y, trailLength, trailLengthShrinkable, color:"red",
                dots:[
                    {index:0, x:x+trailLength+maxHeight+(c*100), y:y+trailLength+maxHeight+(c*100), size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2},
                    {index:1, x:x+trailLength+maxHeight+(c*100), y:y+trailLength+maxHeight+(c*100), size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2},
                    {index:2, x:x+trailLength+maxHeight+(c*100), y:y+trailLength+maxHeight+(c*100), size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2},
                    {index:3, x:x+trailLength+maxHeight+(c*100), y:y+trailLength+maxHeight+(c*100), size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2},
                    {index:4, x:x+trailLength+maxHeight+(c*100), y:y+trailLength+maxHeight+(c*100), size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2},
                    {index:5, x:x+trailLength+maxHeight+(c*100), y:y+trailLength+maxHeight+(c*100), size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2},
                    {index:6, x:x+trailLength+maxHeight+(c*100), y:y+trailLength+maxHeight+(c*100), size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2},
                    {index:7, x:x+trailLength+maxHeight+(c*100), y:y+trailLength+maxHeight+(c*100), size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2},
                    {index:8, x:x+trailLength+maxHeight+(c*100), y:y+trailLength+maxHeight+(c*100), size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2},
                    {index:9, x:x+trailLength+maxHeight+(c*100), y:y+trailLength+maxHeight+(c*100), size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2},
                    {index:10, x:x+trailLength+maxHeight+(c*100), y:y+trailLength+maxHeight+(c*100), size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2},
                    {index:11, x:x+trailLength+maxHeight+(c*100), y:y+trailLength+maxHeight+(c*100), size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2},
                ]
            });
        }
        setTrails(trailsArray);
    }, []);

    useEffect(() => {
        if (!animateUntill) {
            console.log("animateUntill is false");
            return;
        }

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        if (!canvas.parentElement?.clientHeight) return;

        const maxHeight = canvas.parentElement.clientHeight;
        const maxWidth = canvas.parentElement.clientWidth;

        let animationFrame: number;
        const animateMeteorTails = () => {

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let trail of trails) {
                trail.x1+=2;
                trail.y1+=2;

                // shortening the trail length after covering certain height of the canvas
                if (trail.trailLengthShrinkable > -20 && trail.y1 >= maxHeight/2) {
                    const canvasPercentageFromHalf = Math.max(0, (((trail.y1+trail.trailLength+trail.trailLengthShrinkable) -  maxHeight/2) * 100) /  maxHeight/4);
                    const trailPercentage = (trail.trailLengthShrinkable*canvasPercentageFromHalf)/100;
                    
                    trail.trailLengthShrinkable-=trailPercentage;
                    trail.x1+=(trailPercentage);
                    trail.y1+=(trailPercentage);
                }

                // after trail hitting to the canvas bottom
                if (trail.y1+trail.trailLength+trail.trailLengthShrinkable >= maxHeight) {
                    const animateMeteorCollisionDebries = () => {
                        let angle:number=0;
                        
                        for (const dot of trail.dots) {
                            
                            // create random debries
                            // angle = theta*(Math.PI/180)
                            angle = (((dot.index/10)*(175-130))+130) * (Math.PI / 180);                            
                            
                            dot.x-= Math.cos(angle) * dot.speed;
                            dot.y-= Math.sin(angle) * dot.speed;
                            dot.opacity *= 0.94;

                            ctx.beginPath();
                            ctx.fillStyle = theme==="light"?`rgba(255, 106, 0,${dot.opacity})`:`rgba(209, 213, 220,${dot.opacity})`;
                            ctx.arc(dot.x+trail.trailLength-trail.trailLengthShrinkable+trail.trailLengthShrinkable, dot.y+trail.trailLength-trail.trailLengthShrinkable+trail.trailLengthShrinkable, dot.size, 0, 2*Math.PI, false)
                            ctx.fill();
                        }
                    }
                    animateMeteorCollisionDebries();
                }
                
                // after trail reaching bottom to the canvas
                if (trail.y1 >= (maxHeight+150)) {
                    const x = Math.floor(Math.random()*((maxWidth/2)-(-(maxWidth))+1))+(-(maxWidth));
                    const y = -(trailLength+trailLength);

                    trail.x1 = x;
                    trail.y1 = y;
                    trail.trailLength = trailLength;
                    trail.trailLengthShrinkable = trailLengthShrinkable;


                    trail.dots = [{index:0, x:x+trailLength+maxHeight, y:y+trailLength+maxHeight, size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2}];
                    trail.dots.push({index:1, x:x+trailLength+maxHeight, y:y+trailLength+maxHeight, size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2});
                    trail.dots.push({index:2, x:x+trailLength+maxHeight, y:y+trailLength+maxHeight, size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2});
                    trail.dots.push({index:3, x:x+trailLength+maxHeight, y:y+trailLength+maxHeight, size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2});
                    trail.dots.push({index:4, x:x+trailLength+maxHeight, y:y+trailLength+maxHeight, size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2});
                    trail.dots.push({index:5, x:x+trailLength+maxHeight, y:y+trailLength+maxHeight, size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2});
                    trail.dots.push({index:6, x:x+trailLength+maxHeight, y:y+trailLength+maxHeight, size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2});
                    trail.dots.push({index:7, x:x+trailLength+maxHeight, y:y+trailLength+maxHeight, size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2});
                    trail.dots.push({index:8, x:x+trailLength+maxHeight, y:y+trailLength+maxHeight, size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2});
                    trail.dots.push({index:9, x:x+trailLength+maxHeight, y:y+trailLength+maxHeight, size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2});
                    trail.dots.push({index:10, x:x+trailLength+maxHeight, y:y+trailLength+maxHeight, size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2});
                    trail.dots.push({index:11, x:x+trailLength+maxHeight, y:y+trailLength+maxHeight, size:(Math.random()*(collisionDebriSize-0.8))+0.8, color:"", opacity:10, speed:((Math.random())*(0.8-0.2))+0.2});
                }

                // meteor trail
                ctx.beginPath();                
                const gradient = ctx.createLinearGradient(trail.x1, trail.y1, trail.x1+trail.trailLength+trail.trailLengthShrinkable, trail.y1+trail.trailLength+trail.trailLengthShrinkable);
                gradient.addColorStop(0, theme==="light"?"white":"black");
                gradient.addColorStop(0.2, "rgba(255,255,0,1)");
                gradient.addColorStop(0.5, "rgba(255,165,0,1)");
                gradient.addColorStop(0.8, "rgba(255,69,0,0.8)");
                gradient.addColorStop(1, "oklch(74.6% 0.16 232.661)");
                
                ctx.moveTo(trail.x1, trail.y1);
                ctx.lineTo(trail.x1+trail.trailLength+trail.trailLengthShrinkable, trail.y1+trail.trailLength+trail.trailLengthShrinkable);
                ctx.lineWidth = trailThickness;
                ctx.strokeStyle = gradient;
                ctx.stroke();

                //ctx.tex

                // meteor core outer
                ctx.beginPath();
                ctx.fillStyle = `rgba(0, 191, 255, ${1+0.01+Math.sin(2 * Math.PI * 1 * ((trail.y1/100)))})`;
                ctx.arc(trail.x1+trail.trailLength+trail.trailLengthShrinkable+1, trail.y1+trail.trailLength+trail.trailLengthShrinkable+1, meteorCoreSize, 0, 2*Math.PI, false);
                ctx.fill();
                
                // meteor core inner
                ctx.beginPath();
                ctx.fillStyle = `rgba(255, 110, 70, ${trail.y1%2})`;
                ctx.arc(trail.x1+trail.trailLength+trail.trailLengthShrinkable+1, trail.y1+trail.trailLength+trail.trailLengthShrinkable+1, meteorCoreSize-0.4, 0, 2*Math.PI, false);
                ctx.fill();
            }

            animationFrame = requestAnimationFrame(animateMeteorTails);
        }
        animateMeteorTails();

        return() => {
            cancelAnimationFrame(animationFrame);
        };
    }, [trails, animateUntill]);
    

    return(
        <div className="relative w-full h-full overflow-hidden">
            <canvas ref={canvasRef} className={`absolute top-0 left-0 bg-[${bgColor[theme]}]`} >
            </canvas>                
        </div>
    )
}

export default MeteorMash;