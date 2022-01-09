import React from 'react'
import './Patients.css'

export default function PatCard({ item }) {
    return (
        <div className="pat-card">
            <div className="l-0">
            <div className="icon-wrapper">
                    <img src={item.icon} alt="icon" />
                </div>
            </div>
            <div className="l-1">
            <p className="org-title">{item.title}</p>
            <ol>
            {item.features.map((feature, index) => {
                return (
                    
                    <li key={index}><p className="org-info">
                    {feature}</p></li>
                
                )
            })}
            </ol>
           
            </div>
        </div>
    )
}
