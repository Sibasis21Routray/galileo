import React from 'react'
import { funnelsData } from "../../data/servicesData";
import CommonServicePage from './CommonPage';

function FunnelsLandingPages() {
  return (
    <CommonServicePage data={funnelsData} />
  )
}

export default FunnelsLandingPages;
