"use client";

import TextFieldWithTitle from "@/components/TextFieldWithTitle";
import { HomeEnergyFootprintInput } from "@/generated/graphql";
import { ensureIsPositive, getLabel } from "@/utils/text";
import { CircularProgress, InputAdornment, Stack } from "@mui/material";
import React, { Suspense, useState } from "react";

import HomeEnergyResult from "./HomeEnergyResult";

const initialInput: HomeEnergyFootprintInput = {
  electricity: 0,
  fuelOil: 0,
  naturalGas: 0,
  propane: 0,
};

const HomeEnergyForm = () => {
  const [input, setInput] = useState<HomeEnergyFootprintInput>(initialInput);

  return (
    <Stack gap={4}>
      {Object.keys(initialInput).map((key) => (
        <TextFieldWithTitle
          key={key}
          title={`How much is your average monthly ${getLabel(key)} bill?`}
          type="number"
          placeholder="0"
          value={input[key as keyof HomeEnergyFootprintInput]}
          onChange={(event) =>
            setInput({ ...input, [key]: ensureIsPositive(+event.target.value) })
          }
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">$</InputAdornment>,
            },
          }}
        />
      ))}
      <Suspense fallback={<CircularProgress />}>
        <HomeEnergyResult input={input} />
      </Suspense>
    </Stack>
  );
};

export default HomeEnergyForm;
