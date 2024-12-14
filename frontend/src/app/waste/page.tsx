import BaseContainer from "@/components/BaseContainer";
import WasteForm from "@/app/waste/WasteForm";
import React from "react";

const Waste = () => {
  return (
    <BaseContainer title="Waste Footprint Calculator">
      <WasteForm />
    </BaseContainer>
  );
};

export default Waste;
