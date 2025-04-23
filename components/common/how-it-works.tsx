import {ReactNode} from 'react';
import {BrainCircuit, FileOutput, FileText} from 'lucide-react';
type Step = {
    icon:ReactNode;
    label: string;
    description: string;
};
const steps: Step[] = [
    {
        icon: <FileText size={64} strokeWidth={1.5}/>,
        label: 'Upload Your PDF',
        description: 'Simply Drag and Drop your PDF document or click to upload'
    },
    {
        icon: <BrainCircuit size={64} strokeWidth={1.5}/>,
        label: 'AI Analysis',
        description: 'Our Advanced AI processes and analyzes your document instantly'
    },
    {
        icon: <FileOutput size={64} strokeWidth={1.5}/>,
        label: 'Get Summary',
        description: 'Receive a clear, concise summary of your document in seconds'
    },
];
export default function HowItWorksSection() {
    return (
        <section className="relative overflow-hidden bg-gray-50">
            <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold uppercase text-red-600">How It Works</h2>
                    <h3 className="text-3xl font-bold text-black-600">Just 3 Steps, 1 brainy summary — no coffee required.</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
                    {steps.map((step, idx) => (
                        <StepItem key={idx} {...step}/>
                    ))}
                </div>
            </div>
        </section>
    );
}
function StepItem({icon, label, description}: Step) {
    return <div className='relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-rose-500 transition-colors group w-full'>
        <div className='flex flex-col gap-4 h-full'>
            <div className='flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-linear-to-br from-rose-500/10 to-transparent group-hover:from-rose-500/20 transition-colors'>
                <div className='text-rose-500'>{icon}</div>
            </div>
            <div className='flex flex-col lex-1 gap-1 justify-between'>
                <h4 className='text-center font-bold text-xl'>{label}</h4>
                <p className='text-center text-gray-600 text-small'>{description}</p>
            </div>
        </div>
    </div>
}