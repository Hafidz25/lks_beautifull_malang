import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

const Detail = () => {
    const router = useRouter()
    const { slug } = router.query

    if (slug == "kayutangan") {
        return (
            <div className='mt-8'>
                <Head>
                    <title>Beautiful Malang - Kayutangan</title>
                    <link rel="icon" href="/img/logo-beautifulmalang.jpg" />
                </Head>
                {/* Breadcrumb */}
                <div className='container mx-auto w-full bg-white rounded-xl py-2 px-4 shadow-md'>
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li><Link href='/'>Home</Link></li>
                            <li>Destination</li>
                            <li>Kayutangan</li>
                        </ul>
                    </div>
                </div>
                {/* Image Overview */}
                <div className='mt-8 container mx-auto w-full py-2 px-4'>
                    <div className='grid grid-cols-1 gap-2 lg:gap-4 lg:grid-cols-2'>
                        <div>
                            <img src='/img/Kayutangan-Malang.jpg' className='rounded-xl w-full h-auto shadow-sm' />
                        </div>
                        <div className='grid grid-cols-2 gap-2 lg:gap-4'>
                            <img src='/img/kayutangan-1.jpeg' className='rounded-xl w-full h-full shadow-md' />
                            <img src='/img/kayutangan-2.jpg' className='rounded-xl w-full h-full shadow-md' />
                            <img src='/img/kayutangan-3.jpg' className='rounded-xl w-full h-full shadow-md' />
                            <img src='/img/kayutangan-4.jpeg' className='rounded-xl w-full h-full shadow-md' />
                        </div>
                    </div>
                </div>
                {/* Article Overview */}
                <div className='mt-8 container mx-auto w-full py-2 px-4'>
                    <div className='p-6 bg-white shadow-md rounded-xl'>
                        <h1 className='text-3xl font-semibold text-slate-900 text-center'>Kayutangan Heritage</h1>
                        <p className='text-slate-900 mt-4'>
                            Kampung Kayutangan merupakan suatu kawasan dengan bangunan heritage berarsitektur kolonial Belanda, mulai dari rumah tinggal, rumah makan, sekolah, pertokoan, maupun perkantoran (Astrini W. dkk, 2015). Meskipun dilindungi oleh Kebijakan Pemerintah Daerah Tingkat II Kotamadya Malang Nomor SK/104/U/II’80, bangunan-bangunan kuno bernilai heritage di Kampung Kayutangan kini hanya tersisa sedikit akibat adanya perubahan dan pembongkaran selama ini. Kebijakan yang ada kemudian diperkuat dan diubah menjadi Perda No. 10 Tahun 1989 yang mengatur tentang larangan merubah atau membongkar bangunan bernilai heritage, agar tidak menghilangkan ciri atau karakter visual lama Kampung Kayutangan yang menganut aliran Nieuwe Bouwen.
                            Kampung Kayutangan memiliki sejarah yang dikelaskan menjadi beberapa periode berdasarkan perbedaan perkembangan kawasan. Pada periode pertama pra-Indiscche (sebelum tahun 1800), Kampung  Kayutangan merupakan perkampungan yang dihubungkan oleh jalan setapak. Periode selanjutnya adalah saat masuknya Belanda (tahun 1800-1940), dimana jalan-jalan besar mulai dibangun dan Kampung Kayutangan berkembang menjadi kawasan perekonomian di Kota Malang.
                        </p>
                    </div>
                </div>
                {/* Facilities */}
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
                {/* Review */}
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
                        <div className="flex items-center justify-center mt-4 mb-4">
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
    } else if (slug == "pantai-balekambang") {
        return (
            <div className='mt-8'>
                <Head>
                    <title>Beautiful Malang - Pantai Balekambang</title>
                    <link rel="icon" href="/img/logo-beautifulmalang.jpg" />
                </Head>
                {/* Breadcrumb */}
                <div className='container mx-auto w-full bg-white rounded-xl py-2 px-4 shadow-md'>
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li><Link href='/'>Home</Link></li>
                            <li>Destination</li>
                            <li>Pantai Balekambang</li>
                        </ul>
                    </div>
                </div>
                {/* Image Overview */}
                <div className='mt-8 container mx-auto w-full py-2 px-4'>
                    <div className='grid grid-cols-1 gap-2 lg:gap-4 lg:grid-cols-2'>
                        <div>
                            <img src='/img/PANTAI-BALEKAMBANG-1248x703.jpg' className='rounded-xl w-full h-full shadow-sm' />
                        </div>
                        <div className='grid grid-cols-2 gap-2 lg:gap-4'>
                            <img src='/img/pantai-balekambang-1.jpg' className='rounded-xl w-full h-full shadow-md' />
                            <img src='/img/pantai-balekambang-2.jpg' className='rounded-xl w-full h-full shadow-md' />
                            <img src='/img/pantai-balekambang-3.jpg' className='rounded-xl w-full h-full shadow-md' />
                            <img src='/img/pantai-balekambang-4.jfif' className='rounded-xl w-full h-full shadow-md' />
                        </div>
                    </div>
                </div>
                {/* Article Overview */}
                <div className='mt-8 container mx-auto w-full py-2 px-4'>
                    <div className='p-6 bg-white shadow-md rounded-xl'>
                        <h1 className='text-3xl font-semibold text-slate-900 text-center'>Pantai Balekambang</h1>
                        <p className='text-slate-900 mt-4'>
                            Pantai Balekambang adalah sebuah pantai di pesisir selatan yang terletak di tepi Samudra Indonesia secara administratif masuk wilayah Dusun Sumber Jambe, Desa Srigonco, Kecamatan Bantur, Kabupaten Malang, Jawa Timur dan merupakan salah satu wisata di Kabupaten Malang sejak 1985 hingga kini. Daya tarik Balekambang utamanya tentu panorama alam, gelombang ombak yang memanjang hampir dua kilometer, serta hamparan pasir nan luas. Area pasir putih terlihat bersih dari sampah maupun kotoran sehingga cukup nyaman bagi pengunjung untuk bermain dan berolahraga. Bahkan tak jarang di pantai ini menjadi tempat latihan sejumlah klub sepak bola seperti Arema dan Persema.
                        </p>
                    </div>
                </div>
                {/* Facilities */}
                <div className='mt-8 container mx-auto w-full py-2 px-4'>
                    <div className='p-6 bg-white shadow-md rounded-xl'>
                        <h1 className='text-3xl font-semibold text-slate-900 text-center'>Facilities</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-full mt-8'>
                            <img src='/img/pantai-balekambang-fasilitas-1.jpeg' className='w-full lg:h-64 rounded-xl' />
                            <img src='/img/pantai-balekambang-fasilitas-2.jpg' className='w-full lg:h-64 rounded-xl' />
                            <img src='/img/pantai-balekambang-fasilitas-3.jpg' className='w-full lg:h-64 rounded-xl' />
                        </div>
                    </div>
                </div>
                {/* Review */}
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
                        <div className="flex items-center justify-center mt-4 mb-4">
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
    } else if (slug == "kampung-warna-warni") {
        return (
            <div className='mt-8'>
                <Head>
                    <title>Beautiful Malang - Kampung Warna Warni</title>
                    <link rel="icon" href="/img/logo-beautifulmalang.jpg" />
                </Head>
                {/* Breadcrumb */}
                <div className='container mx-auto w-full bg-white rounded-xl py-2 px-4 shadow-md'>
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li><Link href='/'>Home</Link></li>
                            <li>Destination</li>
                            <li>Kampung Warna Warni</li>
                        </ul>
                    </div>
                </div>
                {/* Image Overview */}
                <div className='mt-8 container mx-auto w-full py-2 px-4'>
                    <div className='grid grid-cols-1 gap-2 lg:gap-4 lg:grid-cols-2'>
                        <div>
                            <img src='/img/akses-menuju-kampung-warna-warni-jodipan-malang.jpg' className='rounded-xl w-full h-full shadow-sm' />
                        </div>
                        <div className='grid grid-cols-2 gap-2 lg:gap-4'>
                            <img src='/img/kampung-warna-1.jpg' className='rounded-xl w-full h-full shadow-md' />
                            <img src='/img/kampung-warna-2.jpg' className='rounded-xl w-full h-full shadow-md' />
                            <img src='/img/kampung-warna-3.jpg' className='rounded-xl w-full h-full shadow-md' />
                            <img src='/img/kampung-warna-4.jpg' className='rounded-xl w-full h-full shadow-md' />
                        </div>
                    </div>
                </div>
                {/* Article Overview */}
                <div className='mt-8 container mx-auto w-full py-2 px-4'>
                    <div className='p-6 bg-white shadow-md rounded-xl'>
                        <h1 className='text-3xl font-semibold text-slate-900 text-center'>Kampung Warna Warni</h1>
                        <p className='text-slate-900 mt-4'>
                            Kampung Warna Warni Jodipan menjadi salah satu tempat wisata unik dan favorit di Kota Malang. Rumah-rumah di Kampung Jodipan ini di cat warna-warni. Terlihat indah dan menjunjung tinggi nilai seni. Sudut-sudut kampung dihiasi dengan berbagai warna yang elok dipandang. Warna cerah dan terang sangat memikat perhatian setiap pengunjung.
                            Spot-spot menarik yang instagramable bisa kamu temukan saat berkunjung ke Kampung Warna Warni Jodipan. Kamu bisa mengabadikan momen selama di kampung wisata ini dengan bidikan kamera.
                            Berkunjung bersama keluarga ke Kampung Warna Warni Jodipan sangat cocok. Bersama pasangan agar semakin romantis juga menjadi opsi untuk kamu.
                            Inspirasi baru bisa kamu dapatkan saat berkunjung ke Kampung Jodipan. Kemudian inspirasi tersebut kamu realisasikan di rumah atau di kampung halaman.
                        </p>
                    </div>
                </div>
                {/* Facilities */}
                <div className='mt-8 container mx-auto w-full py-2 px-4'>
                    <div className='p-6 bg-white shadow-md rounded-xl'>
                        <h1 className='text-3xl font-semibold text-slate-900 text-center'>Facilities</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-full mt-8'>
                            <img src='/img/kampung-warna-fasilitas-1.jpg' className='w-full lg:h-64 rounded-xl' />
                            <img src='/img/kampung-warna-fasilitas-2.jpg' className='w-full lg:h-64 rounded-xl' />
                            <img src='/img/kampung-warna-fasilitas-3.jpg' className='w-full lg:h-64 rounded-xl' />
                        </div>
                    </div>
                </div>
                {/* Review */}
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
                        <div className="flex items-center justify-center mt-4 mb-4">
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
    } else if (slug == "museum-angkut") {
        return (
            <div className='mt-8'>
                <Head>
                    <title>Beautiful Malang - Museum Angkut</title>
                    <link rel="icon" href="/img/logo-beautifulmalang.jpg" />
                </Head>
                {/* Breadcrumb */}
                <div className='container mx-auto w-full bg-white rounded-xl py-2 px-4 shadow-md'>
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li><Link href='/'>Home</Link></li>
                            <li>Destination</li>
                            <li>Museum Angkut</li>
                        </ul>
                    </div>
                </div>
                {/* Image Overview */}
                <div className='mt-8 container mx-auto w-full py-2 px-4'>
                    <div className='grid grid-cols-1 gap-2 lg:gap-4 lg:grid-cols-2'>
                        <div>
                            <img src='/img/museum-angkut.jpg' className='rounded-xl w-full h-full shadow-sm' />
                        </div>
                        <div className='grid grid-cols-2 gap-2 lg:gap-4'>
                            <img src='/img/museum-angkut-1.jpg' className='rounded-xl w-full h-full shadow-md' />
                            <img src='/img/museum-angkut-2.jpg' className='rounded-xl w-full h-full shadow-md' />
                            <img src='/img/museum-angkut-3.jpg' className='rounded-xl w-full h-full shadow-md' />
                            <img src='/img/museum-angkut-4.jpg' className='rounded-xl w-full h-full shadow-md' />
                        </div>
                    </div>
                </div>
                {/* Article Overview */}
                <div className='mt-8 container mx-auto w-full py-2 px-4'>
                    <div className='p-6 bg-white shadow-md rounded-xl'>
                        <h1 className='text-3xl font-semibold text-slate-900 text-center'>Museum Angkut</h1>
                        <p className='text-slate-900 mt-4'>
                            Museum Angkut merupakan museum transportasi dan tempat wisata modern yang terletak di Kota Batu, Jawa Timur, sekitar 20 km dari Kota Malang. Museum ini terletak di kawasan seluas 3,8 hektar di lereng Gunung Panderman dan memiliki lebih dari 300 koleksi jenis angkutan tradisional hingga modern. Museum ini terbagi dalam beberapa zona yang didekorasi dengan setting landscape model bangunan dari benua Asia, Eropa hingga Amerika. Di Zona Sunda Kelapa dan Batavia yang merupakan Replika Pelabuhan Sunda Kelapa, dihiasi oleh beberapa alat transportasi kuno seperti becak dan miniatur kapal. Zona Eropa juga di setting seakan-akan berada di jalanan kota-kota di Prancis dengan mobil-mobil kuno Eropa.
                            Selain mobil-mobil kuno, salah satu koleksi terbarunya adalah Mobil listrik Tucuxi milik mantan menteri Dahlan Iskan yang sebelumnya pernah mengalami kecelakaan di sebuah lereng gunung di Magetan saat baru diujicobakan. Di museum ini juga terdapat wahana Flight Simulator yang terletak di lantai 3 gedung museum.
                        </p>
                    </div>
                </div>
                {/* Facilities */}
                <div className='mt-8 container mx-auto w-full py-2 px-4'>
                    <div className='p-6 bg-white shadow-md rounded-xl'>
                        <h1 className='text-3xl font-semibold text-slate-900 text-center'>Facilities</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-full mt-8'>
                            <img src='/img/museum-angkut-fasilitas-1.jpg' className='w-full lg:h-64 rounded-xl' />
                            <img src='/img/museum-angkut-fasilitas-2.jpg' className='w-full lg:h-64 rounded-xl' />
                            <img src='/img/museum-angkut-fasilitas-3.jpg' className='w-full lg:h-64 rounded-xl' />
                        </div>
                    </div>
                </div>
                {/* Review */}
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
                        <div className="flex items-center justify-center mt-4 mb-4">
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


}

export default Detail