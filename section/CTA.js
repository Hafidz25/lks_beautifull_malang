import React from 'react'

function CTA() {
    return (
        <div>
            <section className="bg-white mt-12 p-4">
                <div className="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between bg-slate-900 rounded-xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-white xl:text-4xl">
                        Join us and get the update from anywhere
                    </h2>

                    <div className="mt-8 lg:mt-0">
                        <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                            <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address" />

                            <button className="px-4 py-2 font-bold rounded-lg bg-white text-slate-900 hover:bg-slate-200 transition duration-200">
                                Get Started
                            </button>
                        </div>

                        <p className="mt-3 text-sm text-gray-300">Attention! Offer expires in 30 days. Make sure not to miss this opportunity</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CTA