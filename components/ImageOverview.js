import React from 'react'

function ImageOverview() {
    return (
        <div className='mt-8 container mx-auto w-full py-2 px-4'>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                <div>
                    <img src='/img/Kayutangan-Malang.jpg' className='rounded-xl w-full h-auto shadow-sm' />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <img src='/img/kayutangan-1.jpeg' className='rounded-xl w-full h-full shadow-md' />
                    <img src='/img/kayutangan-2.jpg' className='rounded-xl w-full h-full shadow-md' />
                    <img src='/img/kayutangan-3.jpg' className='rounded-xl w-full h-full shadow-md' />
                    <img src='/img/kayutangan-4.jpeg' className='rounded-xl w-full h-full shadow-md' />
                </div>
            </div>
        </div>
    )
}

export default ImageOverview