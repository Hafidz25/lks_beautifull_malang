import Card from '@/components/Card'
import React from 'react'

function TrendingTour({ props }) {
    return (
        <div className="mt-12">
            <div className="flex justify-center">
                <h1 className="font-bold text-4xl text-slate-900">Trending Tours</h1>
            </div>
            <div className="mt-8 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full justify-items-center px-4 lg:px-2">
                    {props.map((data) => (
                        <Card props={data} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrendingTour