"use client"

import { VelocityScroll } from "@/components/ui/scroll-based-velocity"
import { motion, useScroll, useSpring } from "framer-motion"
import Hero from "@/components/home/Hero"
import Header from "@/components/home/Header"
import KeyFeatures from "@/components/home/KeyFeatures"
import Footer from "@/components/home/Footer"
import { MarqueeDemo } from "@/components/home/Testimonial"
import HowItWorks from "@/components/home/HowItWorks"
import Contact from "@/components/home/Contact"

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (<>
    <motion.div className="progress-bar fixed top-0 left-0 right-0 z-50" style={{ scaleX }} />
    <div className="min-h-screen pt-2">
      <Header />
      <main>
        <Hero />
        <VelocityScroll text="GENERATE REPORTS, PRESENTATIONS, AND QUIZZES FROM PDFS, POWERPOINTS, YOUTUBE LINKS, AND WEB PAGES" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-violet-700" />
        <HowItWorks />
        <KeyFeatures />
        <MarqueeDemo />
        <Contact />
      </main>
      <Footer />
    </div></>
  )
}
