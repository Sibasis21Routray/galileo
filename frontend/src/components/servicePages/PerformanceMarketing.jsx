import React from 'react'
import { perfMarketingData } from "../../data/servicesData";
import CommonServicePage from './CommonPage';

function PerformanceMarketing() {
  return (
    <CommonServicePage data={perfMarketingData} />
  )
}

export default PerformanceMarketing;
