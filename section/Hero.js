import React from 'react'

function Hero() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/img/alun-alun-tugu-malang-1.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Beautifull Malang</h1>
                    <p className="mb-5 text-lg font-normal">Explore incredible things to do
                        around Malang.</p>
                    <div className="flex justify-center">
                        <button className="flex justify-center items-center px-4 py-2 border-2 rounded-lg font-medium  border-white hover:bg-white hover:text-black transition duration-300">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero