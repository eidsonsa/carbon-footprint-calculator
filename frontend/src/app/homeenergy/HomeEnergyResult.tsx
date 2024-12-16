"use client";

import FootprintResultCard from "@/components/FootprintResultCard";
import { gql } from "@/generated";
import { HomeEnergyFootprintInput } from "@/generated/graphql";
import { useSuspenseQuery } from "@apollo/client";
import React, { FC } from "react";

interface HomeEnergyResultProps {
  input: HomeEnergyFootprintInput;
}

const GET_HOME_ENERGY_FOOTPRINT = gql(`
    query getHomeEnergyFootprint($input: HomeEnergyFootprintInput!) {
      homeEnergyFootprint(input: $input) {
        average
        total
      }
    }
  `);

const HomeEnergyResult: FC<HomeEnergyResultProps> = ({ input }) => {
  const { data } = useSuspenseQuery(GET_HOME_ENERGY_FOOTPRINT, {
    variables: { input },
  });

  const { homeEnergyFootprint } = data;

  return <FootprintResultCard result={homeEnergyFootprint} />;
};

export default HomeEnergyResult;
