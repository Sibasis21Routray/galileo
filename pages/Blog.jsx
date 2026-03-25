import React from 'react'
import IntroImage from '../src/components/common/IntroImage'
import Common from "../src/components/blogsSection/Common"
import SEO from '../src/SEO';

function Blog() {
  return (
    <div className="bg-white">
     
      {/* intro image*/}
      <IntroImage title="Blogs" imageUrl="/commonEntroImage.jpg" />
      <Common />
    </div>
  );
}

export default Blog