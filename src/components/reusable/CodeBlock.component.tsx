
import { useEffect, useRef } from "react";
import Prism from "prismjs";
import "../../prism-custom-theme.css";
import "prismjs/components/prism-jsx";


interface CodeBlockPropTypes{
    code:string;
    language:string;
};

function GenerateLines ({code}:{code:string}) {
    return (
        <>
            {code.split("\n").map((_, i) => (
            <div key={i} className="leading-6">
                {i+1}
            </div>
            ))}
        </>
    )
};

function CodeBlock({code, language}:CodeBlockPropTypes) {
    const preRef = useRef<HTMLElement|null>(null);

    useEffect(() => {
        if (!preRef.current) return;

        Prism.highlightElement(preRef.current);
    }, [code]);

    return(
        <div className="flex max-h-75 [font-size:var(--text-sm)] overflow-auto rounded-bl-md thin_scrollbar">
  
            {/* Line numbers */}
            <div className="h-full select-none sticky top-0 left-0 text-right pr-4 pl-3 pb-4 bg-neutral-200 text-neutral-500 dark:bg-neutral-800">
                <GenerateLines code={code} />
            </div>

            {/* Code */}
            <pre className="">
                <code
                    ref={preRef}
                    className={`language-${language} whitespace-pre leading-6`}
                >
                    {code}
                </code>
            </pre>
        </div>
    )
};

export default CodeBlock;