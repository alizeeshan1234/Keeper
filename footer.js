import React from 'react'
import './index.css';

const date = new Date();
const year = date.getFullYear();

export function Footer(){
    return (
        <footer>
       <h1 className='footer'>Copyright © {year}</h1>
       </footer>
    )
}