import React from 'react'
import { FeaturesSectionDemo } from '../ui/key-features'

const KeyFeatures = () => {
    return (
        <section id="features" className="py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-violet-700">
                    Key Features
                </h2>
                <FeaturesSectionDemo />
            </div>
        </section>
    )
}

export default KeyFeatures