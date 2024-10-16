'use client'
import { Menu, Sparkles, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { navOptions } from '@/lib/constants'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="px-4 lg:px-32 h-16 flex items-center justify-between fixed top-0 w-screen bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-blue-100 dark:border-blue-800">
        <div className='container flex items-center justify-between mx-auto'>
          <Link className="flex items-center justify-center" href="#">
            <Sparkles className="h-6 w-6 text-violet-600" />
            <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-violet-800">abcxyz</span>
          </Link>
          <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
            {
              navOptions.map((item) => <Link
                key={item.href}
                className="text-sm font-medium hover:text-violet-600 transition-colors"
                href={item.href}>
                {item.name}
              </Link>)
            }
          </nav>
          <Button className="ml-4 bg-gradient-to-r from-violet-600 to-violet-800 text-white" size="sm">
            Sign Up
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="ml-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

      </header>
      {
        isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 z-40 p-4 border-b md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {
                navOptions.map((item) => <Link key={item.href} className="text-sm font-medium hover:text-violet-600 transition-colors" href={item.href} onClick={() => setIsMenuOpen(false)} >{item.name}</Link>)
              }
            </nav>
          </motion.div>
        )
      }</>

  )
}

export default Header
