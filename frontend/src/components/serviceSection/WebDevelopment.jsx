import React from 'react'
import CommonSection from './CommonSection';
import {webDevPageData} from "../../data/servicesData";
import SEO from '../../SEO';

function WebDevelopment() {

 
  return (
    <div>
      
      <CommonSection data={webDevPageData} />
    </div>
  );
}

export default WebDevelopment