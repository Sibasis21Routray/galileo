import React from 'react'
import { saasPlatformDevData } from "../../data/servicesData";
import CommonServicePage from './CommonPage';

function SaaSPlatforms() {
  return (
    <CommonServicePage data={saasPlatformDevData} />
  )
}

export default SaaSPlatforms;
