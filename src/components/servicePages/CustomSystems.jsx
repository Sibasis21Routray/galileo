import React from 'react'
import { customSystemsData } from "../../data/servicesData";
import CommonServicePage from './CommonPage';

function CustomSystems() {
  return (
    <CommonServicePage data={customSystemsData} />
  )
}

export default CustomSystems;
