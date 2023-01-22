import React from 'react'
import Link from 'next/link'

function TopDestination() {
    return (
        <div className="mt-12 bg-slate-900 py-4 lg:py-12">
            <div className="mt-8 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
                    <div className="p-2 flex justify-center">
                        <img src="/img/Museum-angkut-malang.jpg" className="rounded-xl w-full" />
                    </div>
                    <div className="lg:ml-8 p-4">
                        <h1 className="font-semibold text-xl text-white mt-4">Top Destination</h1>
                        <h1 className="font-bold text-3xl lg:text-6xl text-white mt-4">Museum Angkut</h1>
                        <p className="mt-8 text-white">Museum Angkut (in English as Transportation Museum) is a transport museum located in Batu, East Java, Indonesia
                            and located on hillside of Mount Panderman, part of Mount Kawi-Butak.
                            The museum has more than 300 collections of types of traditional to modern transportation.</p>
                        <div className="mt-8 lg:mt-12 flex">
                            <Link href="/detail/museum-angkut">
                                <div className="flex items-center justify-center px-4 py-2 border-[1px] border-white text-white hover:bg-white hover:text-slate-900 transition duration-300 rounded-lg font-medium text-lg cursor-pointer">See more</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopDestination