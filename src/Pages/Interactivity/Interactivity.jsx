import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import './Interactivity.css';
export default function Interactivity() {

    // Interactivity contains 
    // -hover
    // -Focus
    // -Active
    // -Group Hover
    return (
        <div className='interactivity flex'>
            <div className='hover'>
                <button className="hoverButton">Hover</button>
            </div>
            <div className="focus">
                <button className='focusButton'>Focus</button>
            </div>
            <div className="active">
                <button className='activeButton'>Active</button>
            </div>
            <div className="allInteractovity">
                <button className='button'>All Interactivity</button>
            </div>
        </div>
    )
}
