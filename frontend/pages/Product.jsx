import React, { useEffect, useState } from "react";
import { ProductDetails } from "../src/components/productSection/ProductDetails";
import FeatureSection from "../src/components/productSection/FeatureSection";
import { KeyBenefitsSection } from "../src/components/productSection/KeyBenefitsSection";
import { useLocation } from "react-router-dom";
import { ourProducts } from "../src/data/ProductPageData";
import Faq from "../src/components/productSection/FaqSection";
import FeedoraPlatform from "../src/components/productSection/custom/feedora/FeedoraPlatforms";
import FutureFeaturesSection from "../src/components/productSection/custom/feedora/FutureFeaturesSection";
import { BookDemo } from "../src/components/productSection/BookDemo";
import SEO from "../src/SEO";

function Product() {
  const location = useLocation();
  const [productData, setProductData] = useState();

  useEffect(() => {
    const subPath = location.pathname
      .replace(/^\/product\/?/, "")
      .toLowerCase();

    if (!subPath) {
      // console.log("No subpath — you're on the main product page.");
      return;
    }

    const matchedProduct = ourProducts.find(
      (product) => product.slug.toLowerCase() === subPath
    );

    if (matchedProduct) {
      // console.log("Matched product:", matchedProduct);
      setProductData(matchedProduct);
      // console.log("Product Data:", matchedProduct);
    } else {
      console.log("No matching product found for:", subPath);
    }
  }, [location.pathname]);

  return (
    <div>
    {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-[#29f67a]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150" />
      </div>
      {!productData && <div className="text-black h-screen"></div>}

      {productData && (
        <div className="py- px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black">
          <ProductDetails productData={productData.productHeadingSection} />
          <FeatureSection productData={productData.featureSection} />
          {productData.platformIntegratins && (
            <FeedoraPlatform
              platformIntegratins={productData.platformIntegratins}
            />
          )}
          {productData.upcomingFeatures && (
            <FutureFeaturesSection
              upcomingFeatures={productData.upcomingFeatures}
            />
          )}

          {/* <KeyBenefitsSection productData={productData.productBenefits} />   */}
          {/* <BookDemo/> */}
          <Faq productData={productData.faqSection} />
        </div>
      )}
    </div>
  );
}

export default Product;
