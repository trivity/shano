import React from "react";
import SEO from "@/components/SEO";
import { WasteHeader } from "@/components/sections/waste/WasteHeader";
import { AcceptedDeniedLists } from "@/components/sections/waste/AcceptedDeniedLists";
import { WasteTypesGrid } from "@/components/sections/waste/WasteTypesGrid";

export default function WasteGuidePage() {
  return (
    <div data-testid="waste-guide-page" className="pt-20">
      <SEO
        title="Waste Guide"
        description="What can and can't go in your skip bin. E-waste, green waste, and general waste guidelines from Shano's Skips in Port Augusta."
        path="/waste-guide"
      />
      <WasteHeader />
      <AcceptedDeniedLists />
      <WasteTypesGrid />
    </div>
  );
}
