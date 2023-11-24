import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta/client'

function Navbar() {
    return (
        <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
            <MaxWidthWrapper >
                <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                    <Link
                        href='/'
                        className='flex z-40 font-semibold'>
                        <span>Task Manger</span>
                    </Link>
                    <div className='hidden items-center space-x-4 sm:flex'>
                        <>
                            <Link
                                href='/dashboard'
                                className={buttonVariants({
                                    variant: 'ghost',
                                    size: 'sm',
                                })}>
                                 Get started{''}
                                <ArrowRight className='ml-1.5 h-5 w-5' />
                            </Link>
                            <SignedOut>
                                <SignInButton mode='modal'>
                                    <button className={buttonVariants({
                                        variant: 'ghost',
                                        size: 'sm',
                                    })}>
                                        Sign in
                                    </button>
                                </SignInButton>
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar