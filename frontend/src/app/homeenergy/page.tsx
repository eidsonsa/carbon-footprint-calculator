import BaseContainer from "@/components/BaseContainer";
import React from "react";

import HomeEnergyForm from "./HomeEnergyForm";

const HomeEnergy = () => {
  return (
    <BaseContainer title="Home Energy Footprint Calculator">
      <HomeEnergyForm />
    </BaseContainer>
  );
};

export default HomeEnergy;
