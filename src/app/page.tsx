import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen" >
      <MaxWidthWrapper className='mb-0 mt-0  flex flex-col items-center justify-center text-center'>
        <div className='mx-auto mb-4  flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>
            Task Manager is now public!
          </p>
        </div>
        <h1 className='max-w-4xl mt-20 text-5xl font-bold md:text-6xl lg:text-4xl'>
          Welcome to the ultimate {' '}<span className='text-blue-600'>Task Manager</span>{' '} designed to streamline your daily workflow
        </h1>
        <p className='mt-5 mb-20 max-w-prose text-zinc-700 sm:text-lg'>
        Boost productivity, and help you stay organized like never before. Say goodbye to scattered to-do lists and missed deadlines Task Manger is your go-to solution for efficiently managing tasks across all facets of your life.
        </p>

        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5',
          })}
          href='/dashboard'
          target='_blank'>
          Get started{' '}
          <ArrowRight className='ml-2 h-5 w-5' />
        </Link>
      </MaxWidthWrapper>
    </main>
  )
}