import React, { useState } from "react";

import "./ProductTabs.css";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("reviews");

  const tabs = [
    {
      id: "details",
      label: "Product Details",
    },
    {
      id: "reviews",
      label: "Rating & Reviews",
    },
    {
      id: "faq",
      label: "FAQs",
    },
  ];

  return (
    <div className="product-tabs">

      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`product-tab ${
            activeTab === tab.id ? "active" : ""
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}

    </div>
  );
};

export default ProductTabs;