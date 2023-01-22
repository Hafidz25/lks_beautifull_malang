import React from 'react'
import Link from 'next/link'

function Card({ props }) {
    console.log(props)
    return (
        <div className="card w-full bg-white shadow-xl rounded-2xl">
            <figure className='h-48'><img src={props.img} className='hover:scale-150 transition duration-300' /></figure>
            <div className="card-body bg-white rounded-b-2xl">
                <h2 className="card-title font-bold">{props.title}</h2>
                <p>{props.headline}</p>
                <div className="card-actions justify-end">
                    <Link href={`/detail/${props.slug}`}>
                        <div className='flex items-center justify-center py-2 px-4 border-[1px] border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition duration-300 cursor-pointer'>See more</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card