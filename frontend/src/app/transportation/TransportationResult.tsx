"use client";

import { gql } from "@/generated";
import { TransportationFootprintInput } from "@/generated/graphql";
import React, { FC } from "react";
import { useSuspenseQuery } from "@apollo/client";
import FootprintResultCard from "@/components/FootprintResultCard";

interface TransportationResultProps {
  input: TransportationFootprintInput;
}

const GET_TRANSPORTATION_FOOTPRINT = gql(`
    query getTransportationFootprint($input: TransportationFootprintInput!) {
      transportationFootprint(input: $input) {
        average
        total
      }
    }
  `);

const TransportationResult: FC<TransportationResultProps> = ({ input }) => {
  const { data } = useSuspenseQuery(GET_TRANSPORTATION_FOOTPRINT, {
    variables: { input },
  });

  const { transportationFootprint } = data;

  return <FootprintResultCard result={transportationFootprint} />;
};

export default TransportationResult;
