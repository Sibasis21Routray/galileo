import React from 'react'
import { analyticsTrackData } from "../../data/servicesData";
import CommonServicePage from './CommonPage';

function AnalyticsTracking() {
  return (
    <CommonServicePage data={analyticsTrackData} />
  )
}

export default AnalyticsTracking;
