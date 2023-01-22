import React from 'react'

function Testimonial() {
    return (
        <div>
            <section className="">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <h2 className="text-4xl font-bold">What people are saying?</h2>
                            <p className="dark:text-gray-400">What do people think about the city of Malang.</p>
                        </div>
                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className="p-6 shadow-xl bg-slate-50 rounded-lg">
                                        <p>Malang seems like a small city compared to Jakarta. Distance between destinations tends to be a lot shorter than the ones in Jakarta. A typical 1 hour trip is considered a daily/weekly commute for most Jakartans, but for most locals in Malang, an hour trip means you are going somewhere far away.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Nugroho</p>
                                                <p className="text-sm">Japan</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 shadow-xl bg-slate-50 rounded-lg">
                                        <p>I like being here because the air is fresh and the people are friendly.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Supri</p>
                                                <p className="text-sm">Thailand</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid content-center gap-4">
                                    <div className="p-6 shadow-xl bg-slate-50 rounded-lg">
                                        <p>Malang is overall cleaner than Jakarta. The streets are better maintained, and there's less pollution.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Slamet</p>
                                                <p className="text-sm">Germany</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 shadow-xl bg-slate-50 rounded-lg">
                                        <p>Malang foods in its original hometown are a lot better than the ones in Jakarta. The city's most iconic food is probably Baso Malang, which I really recommend to try, especially for your meat lovers. Apart from that, they also have their variation of Soto. Gado-gado in Malang taste a lot better than the ones in Jakarta. Then there's Peyek, a variation of Kerupuk. Oh, and they also have McDonald's and KFC as well, just in case you're wondering.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Yanto</p>
                                                <p className="text-sm">USA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial