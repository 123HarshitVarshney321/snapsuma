import { ArrowRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";


export default function Page() {
    return (
        <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:py-28 transition-all animate-in lg:px-12 max-w-7xl">
            
                <div className="flex group">
                    <div className="relative p-[2px] overflow-hidden rounded-full bg-gradient-to-r from-rose-200 via-rose-400 to-rose-500 animate-gradient-x">
                        <Badge variant={'secondary'} className="relative px-6 py-2 text-base font-medium bg-white rounded-full hover:bg-rose-500/20  transition-colors duration-300">
                            <Sparkles className="h-6 w-6 mr-2 text-rose-600 animate-pulse"/>
                            <p className="text-base text-rose-600">AI-Powered Content Creation</p>
                        </Badge>
                    </div>
                </div>
                <h1 className="font-bold py-6 text-center">
                 Start Uploading{' '}
                    <span className="relative inline-block">
                        <span className="relative z-10 px-2">Your PDF's</span>
                        <span className="absolute inset-0 bg-rose-500/20 -rotate-2 rounded-lg transform -skew-y-1" aria-hidden="true"></span>
                    </span>{' '}
                    
                </h1>

                <h2 className="text-lg sm:text-xl text-center lg:text-2xl px-4 lg:px-0 lg:max-w-4xl text-gray-600">Upload your doc, take a walk – AI’s got this 🧠✨</h2>
            
        </section>
    );
}