// import Link from 'next/link';
import NavLink from './nav-link';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SignedOut, UserButton } from '@clerk/nextjs';
import { SignedIn } from '@clerk/nextjs';
export default function Header() {
    // const isLoggedIn = false;
  return (
    <nav className="container flex justify-between items-center py-4 lg:py-8 px-2 mx-auto">
        <div className="flex lg:flex-1">
            <NavLink href="/" className="flex items-center gap-1">
                <FileText className='w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transition duration-250 ease-in-out'/>
                <span className='font-extrabold lg:text-xl text-gray-900'>Snapsuma</span>
            </NavLink>
        </div>

        <div className='flex lg:justify-center gap-4 lg:gap-12 lg: items-center'>
            <NavLink href="/#pricing">Pricing</NavLink>
            <SignedIn>
                <NavLink href="/dashboard">Your Sumas</NavLink>
            </SignedIn>
        </div>

        <div className='flex lg:justify-end lg:flex-1'>
            <SignedIn>
                <div>
                    <NavLink href="/upload">Upload a PDF</NavLink>
                    <div>Pro</div>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </SignedIn>
            <SignedOut>
            <NavLink href="/sign-in">Sign IN</NavLink>
            </SignedOut>  
        </div>
    </nav>
  );
}
