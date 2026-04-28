import React from 'react'
import { apiIntegrationData } from "../../data/servicesData";
import CommonServicePage from './CommonPage';

function ApiIntegrations() {
  return (
    <CommonServicePage data={apiIntegrationData} />
  )
}

export default ApiIntegrations;
