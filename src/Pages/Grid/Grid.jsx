import React from 'react'

export default function Grid() {
    return (
        <div>
            <div className='grid grid-cols-4 gap-2'>
                <div className="bg-black  border border-red-700 p-10 col-span-2"></div>
                <div className="bg-red-300  border border-red-700 p-10"></div>
                <div className="bg-red-300  border border-red-700 p-10"></div>
                <div className="bg-red-300  border border-red-700 p-10"></div>
                <div className="bg-green-300  border border-red-700 p-10 row-span-2"></div>
                <div className="bg-red-300  border border-red-700 p-10"></div>
                <div className="bg-red-300  border border-red-700 p-10"></div>
                <div className="bg-red-300  border border-red-700 p-10"></div>
                <div className="bg-red-300  border border-red-700 p-10"></div>
                <div className="bg-red-300  border border-red-700 p-10"></div>
                <div className="bg-red-300  border border-red-700 p-10 col-span-4"></div>
                <div className="bg-yellow-300  border border-red-700 p-10 col-span-2 row-span-2"></div>
                <div className="bg-red-300  border border-red-700 p-10"></div>
                <div className="bg-red-300  border border-red-700 p-10"></div>
                <div className="bg-red-300  border border-red-700 p-10"></div>
                <div className="bg-pink-300  border border-red-700 p-10 row-span-8"></div>
                <div className="bg-red-300  border border-red-700 p-10"></div>
            </div>
            <div className='grid grid-cols-2 gap-2 md:grid-cols-4 xl:grid-cols-6'>
                <div className="bg-orange-400 p-10 border border-black"></div>
                <div className="bg-orange-400 p-10 border border-black"></div>
                <div className="bg-orange-400 p-10 border border-black"></div>
                <div className="bg-orange-400 p-10 border border-black"></div>
                <div className="bg-orange-400 p-10 border border-black"></div>
                <div className="bg-orange-400 p-10 border border-black"></div>
                <div className="bg-orange-400 p-10 border border-black"></div>
                <div className="bg-orange-400 p-10 border border-black"></div>
                <div className="bg-orange-400 p-10 border border-black"></div>
                <div className="bg-orange-400 p-10 border border-black"></div>
                <div className="bg-orange-400 p-10 border border-black"></div>
                <div className="bg-orange-400 p-10 border border-black"></div>
                <div className="bg-orange-400 p-10 border border-black"></div>
                <div className="bg-orange-400 p-10 border border-black"></div>
                <div className="bg-orange-400 p-10 border border-black"></div>
                <div className="bg-orange-400 p-10 border border-black"></div>
            </div>

        </div>
    )
}
