import React from 'react'
import { patientMetaData } from '../../common/data/patients'
import PatCard from './PatCard'
import './Patients.css'

const Patients = () => {

    const data = patientMetaData

    return (
        <div className="patients">
           <div className="p-0">
               <div className="portal">
                   <img src={require('../../assets/mobile-user.png')} alt="illustration"/>
               </div>
               <div className="p-intro">
                   <p className="page-title">Patient Portal designed for best radiology practices</p>
                   <p className='pg-info'>Customer convenience means offering your loyal clients choice. 
                   In addition to accessing results, completing forms, and appointment notifications, 
                   patients can also request exams online</p>
               </div>
           </div>
           <div className="p-1">
               <span className="page-title">Featured services</span>
               <div className="services">
                   {data.map((item) => {
                       return (
                        <PatCard key={item.id} item={item}/>
                       )
                   })}
                   
               </div>
           </div>
        </div>
    )
}

export default Patients
