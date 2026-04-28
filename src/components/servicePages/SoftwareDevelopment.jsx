import React from 'react'
import { softwareDevelopmentData } from "../../data/servicesData";
import CommonServicePage from './CommonPage';

function SoftwareDevelopment() {
  return (
    <CommonServicePage data={softwareDevelopmentData} />
  )
}

export default SoftwareDevelopment