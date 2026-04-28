import React from 'react'
import { digitalGrowthData } from "../../data/servicesData";
import CommonServicePage from './CommonPage'; 
function DigitalGrowth() {
  return (
    <CommonServicePage data={digitalGrowthData} />
  )
}

export default DigitalGrowth