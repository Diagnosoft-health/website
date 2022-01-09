import React from "react";
import { organizationData } from "../../common/data/organization";
import "./Organization.css";
import OrgCard from "./OrgCard";

const Organization = () => {
  const services = organizationData;

  return (
    <div className="organization">
        <div className="org-ttl">
      <span className="page-title">
        Comprehensive RIS platform that provides 
        a complete solution for medical
        entreprises
      </span>
      </div>
      <div className="services">
        {services.map((service) => {
          return <OrgCard key={service.id} service={service} />;
        })}
      </div>
    </div>
  );
};

export default Organization;
