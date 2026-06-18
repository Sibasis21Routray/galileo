import React from 'react'
import { serverDevopsData } from "../../data/servicesData";
import CommonServicePage from './CommonPage';

function ServerDevOps() {
  return (
    <CommonServicePage data={serverDevopsData} />
  )
}

export default ServerDevOps;
