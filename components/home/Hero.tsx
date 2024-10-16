import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { AnimatedTooltip } from '../ui/animated-tooltip'
import { people } from '@/lib/constants'
import SparklesText from '../ui/sparkles-text'

const Hero = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-16 md:py-24 lg:py-32 xl:py-48 mt-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none max-w-[700px] mx-auto line-clamp-6 ">
              Transform Your Content <span><SparklesText text="with AI" className='text-violet-700' /></span>
            </h1>

            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 py-2">
              Generate reports, presentations, and quizzes from PDFs, PowerPoints, YouTube links, and web pages.
            </p>
            <div className="flex flex-row items-center justify-center mb-10 w-full py-2">
              <AnimatedTooltip items={people} />
            </div>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input className="max-w-lg flex-1 focus:border-violet-700 focus:ring focus:ring-violet-200 focus:ring-opacity-50" placeholder="Enter your email" type="email" />
              <Button type="submit" className='bg-gradient-to-r from-violet-600 to-violet-800 text-white'>Get Started</Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Start your free trial. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
