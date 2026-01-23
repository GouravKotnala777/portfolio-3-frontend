import { useRef, useState, type MouseEvent } from "react";

const particles:{pX:number; pY:number; vX:number; vY:number; pSize:number; potential:number;}[] = []

function Prac() {
    const canvasRef = useRef<HTMLCanvasElement|null>(null);
    const textRef = useRef<HTMLDivElement|null>(null);
    const parentRef = useRef<HTMLDivElement|null>(null);
    const [text, setText] = useState<string>("Full Stack Web Developer");

    function onClickHandler(e:MouseEvent<HTMLButtonElement>) {
        textAnimation();
        
    };

    function textAnimation() {
        setText((prev) => prev.slice(0, prev.length-1));
        if (text.length !== 0) {
            requestAnimationFrame(textAnimation);
        }
        else{
            createParticles();
        }
    };

    const createParticles = () => {
        const canvas = canvasRef.current;
        const parent = parentRef.current;
        if (!canvas) return;
        if (!parent) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        //ctx.beginPath();
        //ctx.arc(400, 400, 10, 0, 2*Math.PI);
        //ctx.fillStyle = "red";
        //ctx.fill();

        const canvasWidth = parent.clientWidth;
        const canvasHeight = parent.clientHeight;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        //canvas.width = canvasWidth;
        //canvas.height = canvasHeight;
        
        console.log({canvasWidth, canvasHeight});
        

        for (let p = 0; p < 10; p++) {
            const pX = (canvasWidth+(Math.random()*canvasWidth));
            const pY = (canvasHeight+(Math.random()*canvasHeight));
            const vX = Math.random() - 0.5;
            const vY = Math.random() - 0.5;
            const pSize = 2;
            const potential = 2;

            const newParticle = {pX, pY, vX, vY, pSize, potential}

            //console.log(newParticle);
            
            particles.push(newParticle);
        }

        const animateParticles = () => {
            particles.forEach(({pX, pY, vX, vY, pSize, potential}) => {
                pX += vX;
                pY += vY;
                potential -= 0.5;

                console.log("BBBBBBBBBBBBBBBBBBB");
                

                ctx.beginPath();
                ctx.arc(pX, pY, pSize, 0, Math.PI*2);
                ctx.fillStyle = "red";
                ctx.fill();
            });

            if (particles.some((p) => p.potential > 0)) {
                //requestAnimationFrame(animateParticles);
                console.log("Running....");
            }
            else{
                console.log("STOPPED");
            }

        };

        animateParticles();

    }

    return(
        <section className="border-2 border-red-500 w-screen h-screen flex justify-center items-center">
            <div ref={parentRef} className="border border-violet-500 h-15 w-100 relative">
                <div ref={textRef} className="border border-blue-500 h-full w-max text-gray-300 text-2xl content-center">{text}</div>
                <canvas ref={canvasRef} className="border-2 border-green-500 h-full w-full absolute top-0 left-0"></canvas>
            </div>

            <button className="border border-neutral-200 rounded-lg px-3 py-2 text-neutral-200 hover:bg-neutral-600 cursor-pointer"
                onClick={onClickHandler}
            
            >Click</button>
        </section>
    )    
};

export default Prac;