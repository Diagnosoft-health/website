import React from 'react'
import './Organization.css'

export default function OrgCard({ service }) {
    return (
    
        <div className="org-card">
            <div className="l-0">
                <div className="icon-wrapper">
                    <img src={service.icon} alt={service.title} />
                </div>
            </div>
            <div className="l-1">
                <p className="org-title">{service.title}</p>
                <p className="org-info">
                {service.text}
                </p>
            </div>
        </div>

       
    )
}
