import React from "react";
import "./Company.js";


export default function EmployeeCard({ employee }) {
  return (
    <div className="employee-card">
      <div className="photo">
        {employee.photo === "" ? (
          <img src={require("../../assets/user-default.png")} alt="profile" />
        ) : (
          <img src={employee.photo} alt="profile" />
        )}
      </div>
      <div className="employee-info">
        <p>{employee.name}</p>
        <p>{employee.title}</p>
      </div>
    </div>
  );
}
