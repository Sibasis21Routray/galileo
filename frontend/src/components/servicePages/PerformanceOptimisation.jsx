import React from 'react'
import { performanceOptData } from "../../data/servicesData";
import CommonServicePage from './CommonPage';

function PerformanceOptimisation() {
  return (
    <CommonServicePage data={performanceOptData} />
  )
}

export default PerformanceOptimisation;
