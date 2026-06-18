import React from 'react'
import { webAppDevData } from "../../data/servicesData";
import CommonServicePage from './CommonPage';

function WebApplications() {
  return (
    <CommonServicePage data={webAppDevData} />
  )
}

export default WebApplications;
