"use client";

import { WasteFootprintInput, WasteType } from "@/generated/graphql";
import { ensureIsPositive, getLabel } from "@/utils/text";
import {
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React, { Suspense, useState } from "react";
import TextFieldWithTitle from "@/components/TextFieldWithTitle";

import WasteResult from "./WasteResult";

const initialInput: WasteFootprintInput = {
  homeQuantity: 1,
  recicled: [],
};

const WasteForm = () => {
  const [input, setInput] = useState<WasteFootprintInput>(initialInput);

  const handleProductUpdate = (wasteType: WasteType, checked: boolean) => {
    if (checked) {
      setInput({
        ...input,
        recicled: [...input.recicled, wasteType],
      });
    } else {
      setInput({
        ...input,
        recicled: input.recicled.filter((waste) => waste !== wasteType),
      });
    }
  };

  return (
    <Stack gap={4}>
      <TextFieldWithTitle
        title="How many people are in your household?"
        fullWidth
        type="number"
        placeholder="3"
        value={input.homeQuantity}
        onChange={(event) =>
          setInput({
            ...input,
            homeQuantity: ensureIsPositive(+event.target.value),
          })
        }
      />
      <Typography variant="h5">
        Which of the following products do you currently recycle in your
        household?
      </Typography>
      <FormGroup row sx={{ justifyContent: "space-between" }}>
        {Object.values(WasteType).map((wasteType) => (
          <FormControlLabel
            control={<Switch name={wasteType} />}
            label={getLabel(wasteType)}
            color="secondary"
            key={wasteType}
            value={input.recicled.includes(wasteType)}
            onChange={(_event, checked) =>
              handleProductUpdate(wasteType, checked)
            }
          />
        ))}
      </FormGroup>
      <Suspense fallback={<CircularProgress />}>
        <WasteResult input={input} />
      </Suspense>
    </Stack>
  );
};

export default WasteForm;
