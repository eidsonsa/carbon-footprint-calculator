"use client";

import { gql } from "@/generated";
import { WasteFootprintInput } from "@/generated/graphql";
import React, { FC } from "react";
import { useSuspenseQuery } from "@apollo/client";
import FootprintResultCard from "@/components/FootprintResultCard";

interface WasteResultProps {
  input: WasteFootprintInput;
}

const GET_WASTE_FOOTPRINT = gql(`
  query getWasteFootprint($input: WasteFootprintInput!) {
    wasteFootprint(input: $input) {
      average
      total
    }
  }
`);

const WasteResult: FC<WasteResultProps> = ({ input }) => {
  const { data } = useSuspenseQuery(GET_WASTE_FOOTPRINT, {
    variables: { input },
  });

  const { wasteFootprint } = data;

  return <FootprintResultCard result={wasteFootprint} />;
};

export default WasteResult;
