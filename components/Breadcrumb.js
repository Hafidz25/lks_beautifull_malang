import React from 'react'

function Breadcrumb() {
    return (
        <div className='container mx-auto w-full bg-white rounded-xl py-2 px-4 shadow-md'>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li>Destination</li>
                    <li>Add Document</li>
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumb