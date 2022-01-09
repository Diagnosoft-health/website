import React from 'react'
import './Footer.css'
export default function Footer() {
    const d = new Date();
let year = d.getFullYear();
    return (
        <div className='footer'>
            <span>Copyright {year} Diagnosoft Healthcare Limited</span>
            <span>Made with <i className="bi bi-heart-fill"></i> in kenya</span>
        </div>
    )
}
