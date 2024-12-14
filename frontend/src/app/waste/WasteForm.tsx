"use client";

import { WasteFootprintInput, WasteType } from "@/generated/graphql";
import { getLabel } from "@/utils/text";
import {
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

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
      <Stack direction="row" gap={2}>
        <Typography variant="h5">
          How many people are in your household?
        </Typography>
        <TextField
          fullWidth
          type="number"
          placeholder="3"
          value={input.homeQuantity}
          onChange={(event) =>
            setInput({ ...input, homeQuantity: +event.target.value })
          }
        />
      </Stack>
      <Typography variant="h5">
        Which of the following products do you currently recycle in your
        household?
      </Typography>
      <FormGroup row sx={{ justifyContent: "space-between" }}>
        {Object.values(WasteType).map((wasteType) => (
          <FormControlLabel
            control={<Switch />}
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
      <WasteResult input={input} />
    </Stack>
  );
};

export default WasteForm;
