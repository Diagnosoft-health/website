import React from 'react'
import { employees } from '../../common/data/team'
import './Company.css'
import EmployeeCard from './EmployeeCard'

const Company = () => {
    return (
        <div className="company">
            <div className="c-0">
                <div className="mission">
                    <img src={require('../../assets/mission.png')} alt="mission" />
                    <span className="page-title">Our mission</span>
                    <p>To revolutionize healthcare experience 
                        through streamlining the process from 
                        consultation to prescription</p>
                </div>
                <div className="vision">
                <img src={require('../../assets/telescope.png')} alt="vision" />
                    <span className="page-title">Our vision</span>
                    <p>To become the leading AI healthcare solutions provider in africa
                        and Asia. Helping alleviate the problem of access to healthcare in those regions.
                    </p>
                </div>
            </div>
            <div className="c-1">
                <span className="page-title">Meet the team</span>
                <div className="team">
                    {employees.map((employee) => {
                        return(
                            <EmployeeCard key={employee.id} employee={employee} />
                        )  
                    })}
                   
                </div>
            </div>
        </div>
    )
}

export default Company
