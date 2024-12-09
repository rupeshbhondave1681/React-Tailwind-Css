import React from 'react'
import './Column.css';
import Image from '../../monkey_image.jpg'
export default function Column() {
    return (
        <div>
            <div className='columns-2 gap-0'>
                <h1 className='bg-green-400'>Heading 1</h1>
                <h2 className='bg-orange-500'>Heading 2</h2>
                <h2 className='bg-blue-500'>Heading 3</h2>
                <h2 className='bg-yellow-500'>Heading 4</h2>
                <h2 className='bg-slate-500'>Heading 9</h2>
                {/* <h2 className='bg-red-500'>Heading 10</h2> */}
            </div>
            <div className='columns-4 gap-0'>
                <h1 className='bg-green-400'>Heading 1</h1>
                <h2 className='bg-orange-500'>Heading 2</h2>
                <h2 className='bg-blue-500'>Heading 3</h2>
                <h2 className='bg-yellow-500'>Heading 4</h2>
            </div>

            <div className='columns-12 gap-0'>
                <h1 className='bg-green-400'>Heading 1</h1>
                <h2 className='bg-orange-500'>Heading 2</h2>
                <h2 className='bg-blue-500'>Heading 3</h2>
                <h2 className='bg-yellow-500'>Heading 4</h2>
                <h1 className='bg-green-400'>Heading 5</h1>
                <h2 className='bg-orange-500'>Heading 6</h2>
                <h2 className='bg-slate-500'>Heading 7</h2>
                <h2 className='bg-yellow-500'>Heading 8</h2>
                <h2 className='bg-slate-500'>Heading 9</h2>
                <h2 className='bg-yellow-500'>Heading 10</h2>
                <h2 className='bg-slate-500'>Heading 11</h2>
                <h2 className='bg-yellow-500'>Heading 12</h2>
            </div>
            <div className='columns-1 lg:columns-4 md:columns-3 sm:columns-2  gap-0'>
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
            </div>
<h1 className='size-3  bg-slate-500 p-5 '>Below is Auto resizer</h1>
            <div className='columns-3xs '>
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
                <img src={Image} alt="" />
            </div>

        </div>

    )
}
