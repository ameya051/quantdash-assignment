import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const Contact = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
      }
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-violet-600 to-violet-800 text-white">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Content?
              </h2>
              <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                Join thousands of users who are already leveraging the power of AI to enhance their content.
              </p>
              <Button className="bg-white text-violet-600 hover:bg-blue-50" size="lg">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>
  )
}

export default Contact