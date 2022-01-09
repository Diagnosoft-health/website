import React from 'react'
import './Header.css'

export default function Mobile({ closeMobileMenu, clickMenu }) {
    return (
        <>
            <ul className={clickMenu ? "mobile-list open" : "mobile-list"}>
            <li>
              <a href="#patients" onClick={ closeMobileMenu }>for patients</a>
            </li>
            <li>
              <a href="#organization" onClick={ closeMobileMenu }>for organization</a>
            </li>
            <li>
              <a href="#company" onClick={ closeMobileMenu }>company</a>
            </li>
            <li>
              <a href="#contact" onClick={ closeMobileMenu }>contact</a>
            </li>
          </ul>
        </>
    )
}
