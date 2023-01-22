import Breadcrumb from '@/components/Breadcrumb'
import ImageOverview from '@/components/ImageOverview'
import React from 'react'

function detail1() {
    return (
        <div className='mt-8'>
            <Breadcrumb />
            <ImageOverview />

            <div className='mt-8 container mx-auto w-full py-2 px-4'>
                <div className='p-6 bg-white shadow-md rounded-xl'>
                    <h1 className='text-3xl font-semibold text-slate-900 text-center'>Kayutangan Heritage</h1>
                    <p className='text-slate-900 mt-4'>
                        Kampung Kayutangan merupakan suatu kawasan dengan bangunan heritage berarsitektur kolonial Belanda, mulai dari rumah tinggal, rumah makan, sekolah, pertokoan, maupun perkantoran (Astrini W. dkk, 2015). Meskipun dilindungi oleh Kebijakan Pemerintah Daerah Tingkat II Kotamadya Malang Nomor SK/104/U/II’80, bangunan-bangunan kuno bernilai heritage di Kampung Kayutangan kini hanya tersisa sedikit akibat adanya perubahan dan pembongkaran selama ini. Kebijakan yang ada kemudian diperkuat dan diubah menjadi Perda No. 10 Tahun 1989 yang mengatur tentang larangan merubah atau membongkar bangunan bernilai heritage, agar tidak menghilangkan ciri atau karakter visual lama Kampung Kayutangan yang menganut aliran Nieuwe Bouwen.
                        Kampung Kayutangan memiliki sejarah yang dikelaskan menjadi beberapa periode berdasarkan perbedaan perkembangan kawasan. Pada periode pertama pra-Indiscche (sebelum tahun 1800), Kampung  Kayutangan merupakan perkampungan yang dihubungkan oleh jalan setapak. Periode selanjutnya adalah saat masuknya Belanda (tahun 1800-1940), dimana jalan-jalan besar mulai dibangun dan Kampung Kayutangan berkembang menjadi kawasan perekonomian di Kota Malang.
                    </p>
                </div>
            </div>

            <div className='mt-8 container mx-auto w-full py-2 px-4'>
                <div className='p-6 bg-white shadow-md rounded-xl'>
                    <h1 className='text-3xl font-semibold text-slate-900 text-center'>Facilities</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-full mt-8'>
                        <img src='/img/kayutangan-fasilitas-1.jpg' className='w-full lg:h-64 rounded-xl' />
                        <img src='/img/kayutangan-fasilitas-2.jpg' className='w-full lg:h-64 rounded-xl' />
                        <img src='/img/kayutangan-fasilitas-3.jpeg' className='w-full lg:h-64 rounded-xl' />
                    </div>
                </div>
            </div>

            <div className='container mx-auto mt-8 w-full py-2 px-4'>
                <div className='p-6 bg-white shadow-md rounded-xl'>
                    <h1 className='text-3xl font-semibold text-slate-900 text-center'>Review</h1>
                    <div className="flex w-full justify-center items-center mt-4">
                        <svg aria-hidden="true" className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <p className="ml-2 text-sm lg:text-lg font-medium text-gray-900 dark:text-white">4.95 out of 5</p>
                    </div>
                    <p className="text-sm text-center font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
                    <div className="flex items-center justify-center mt-4">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">5 star</span>
                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                            <div className="h-5 bg-yellow-400 rounded" style={{ width: "70%" }}></div>
                        </div>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">70%</span>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">4 star</span>
                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                            <div className="h-5 bg-yellow-400 rounded" style={{ width: "17%" }}></div>
                        </div>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">17%</span>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">3 star</span>
                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                            <div className="h-5 bg-yellow-400 rounded" style={{ width: "8%" }}></div>
                        </div>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">8%</span>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">2 star</span>
                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                            <div className="h-5 bg-yellow-400 rounded" style={{ width: "4%" }}></div>
                        </div>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">4%</span>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">1 star</span>
                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                            <div className="h-5 bg-yellow-400 rounded" style={{ width: "1%" }}></div>
                        </div>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">1%</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default detail1