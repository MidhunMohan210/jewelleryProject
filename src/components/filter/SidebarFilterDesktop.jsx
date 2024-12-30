import React from "react";
import CategoryFilter from "./CategoryFilter";
import PricingFilter from "./PricingFilter";
import MaterialFilter from "./MaterialFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./Sizefilter";
import StatusFilter from "./StatusFilter";

function SidebarFilterDesktop() {
  return (
    <div className="px-6 z-0 w-full">
      <CategoryFilter />
      <PricingFilter />
      <MaterialFilter />
      <ColorFilter />
      <SizeFilter />
      <StatusFilter />
    </div>
  );
}

export default SidebarFilterDesktop;
