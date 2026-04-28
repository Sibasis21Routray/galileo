import React from 'react'
import { securityMonitoringData } from "../../data/servicesData";
import CommonServicePage from './CommonPage';

function SecurityMonitoring() {
  return (
    <CommonServicePage data={securityMonitoringData} />
  )
}

export default SecurityMonitoring;
