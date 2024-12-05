import React from 'react'
import image from '../../monkey_image.jpg';
import './Filters.css';
export default function Filters() {
  return (
    <div className='Filters'>
       <div className="blur">
       <h1>Blur Image</h1>
        <img alt='' className='' src={image} />
        <img alt='' className='blur-sm' src={image} />
        <img alt='' className='blur-md' src={image} />
        <img alt=''className='blur-3xl' src={image} />
       </div>


        <div className="brightness">
        <h1  className='mt-4'>Brightness image</h1>
        <img alt='' className='brightness-50' src={image} />
        <img alt='' className='brightness-75' src={image} />
        <img alt='' className='brightness-100' src={image} />
        <img alt='' className='brightness-200' src={image} />
        </div>

        <h1 className='mt-4'>Contrast image</h1>
        <img alt='' className='contrast-0' src={image} />
        <img alt='' className='contrast-50' src={image} />
        <img alt='' className='contrast-100' src={image} />
        <img alt='' className='contrast-200' src={image} />

        <h1 className='mt-4'>GreyScale image</h1>
        <img alt='' className='grayscale-0' src={image} />
        <img  alt='' className='grayscale-50' src={image} />
        <img alt='' className='grayscale-100' src={image} />
        <img  alt='' className='grayscale-200' src={image} />

      </div> 
  )
}
