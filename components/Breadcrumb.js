import React from 'react'
import Link from 'next/link'

function Breadcrumb() {
    return (
        <div className='container mx-auto w-full bg-white rounded-xl py-2 px-4 shadow-md'>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li>Destination</li>
                    <li>Add Document</li>
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumb