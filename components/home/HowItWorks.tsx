import React from 'react'
import { HoverEffect } from '../ui/card-hover-effect';

const HowItWorks = () => {
    const projects = [
        {
            title: "PDFs",
            description:
                "Upload your PDF and let our AI analyze and generate insights, summaries, or quizzes."
        },
        {
            title: "PowerPoint",
            description:
                "Transform your PowerPoint presentations into interactive learning materials or reports."
        },
        {
            title: "YouTube",
            description:
                "Extract key information from YouTube videos to create comprehensive summaries or quizzes."
        },
        {
            title: "Web Page",
            description:
                "Turn web pages into structured reports or presentations with our advanced AI technology.",
        },
    ];
    return (
        <section id='how-it-works' className="w-full py-12 md:py-24 lg:py-32 bg-violet-800 dark:bg-gray-800 mt-16 text-white">
            <div className="container px-4 md:px-6 mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                    How It Works
                </h2>
                <div className="max-w-5xl mx-auto">
                    <HoverEffect items={projects} />
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
