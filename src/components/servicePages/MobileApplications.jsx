import React from 'react'
import { mobileAppDevData } from "../../data/servicesData";
import CommonServicePage from './CommonPage';

function MobileApplications() {
  return (
    <CommonServicePage data={mobileAppDevData} />
  )
}

export default MobileApplications;
