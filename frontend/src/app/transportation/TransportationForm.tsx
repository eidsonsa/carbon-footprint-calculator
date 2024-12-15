"use client";

import Card from "@/components/Card";
import {
  MeasureType,
  TransportationFootprintInput,
  VehicleInfo,
} from "@/generated/graphql";
import {
  Button,
  CircularProgress,
  InputAdornment,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { Suspense, useState } from "react";
import TransportationResult from "./TransportationResult";

const initialVehicle: VehicleInfo = {
  measureType: MeasureType.Week,
  miles: 0,
  milesPerGaloon: 21.6,
};

const initialInput: TransportationFootprintInput = {
  vehicles: [initialVehicle],
};

const TransportationForm = () => {
  const [input, setInput] =
    useState<TransportationFootprintInput>(initialInput);

  const updateVehicleField = (
    index: number,
    field: keyof VehicleInfo,
    value: (typeof initialVehicle)[typeof field]
  ) => {
    setInput({
      vehicles: input.vehicles.map((v, i) =>
        i === index ? { ...v, [field]: value } : v
      ),
    });
  };

  const addVehicle = () => {
    setInput({
      vehicles: [...input.vehicles, initialVehicle],
    });
  };

  const removeVehicle = (index: number) => {
    setInput({
      vehicles: input.vehicles.filter((_, i) => i !== index),
    });
  };

  return (
    <Stack gap={4}>
      {input.vehicles.map((vehicle, index) => (
        <Card key={index}>
          <Typography variant="h4" alignSelf="center">
            Vehicle {index + 1}
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={2}
            justifyContent="space-between"
          >
            <Typography variant="h5">
              How many miles you drive per{" "}
              <ToggleButtonGroup
                color="primary"
                value={vehicle.measureType}
                exclusive
                onChange={(_, value) =>
                  updateVehicleField(index, "measureType", value)
                }
                sx={{ paddingX: 2 }}
              >
                {Object.values(MeasureType).map((measureType) => (
                  <ToggleButton key={measureType} value={measureType}>
                    {measureType}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
              with this vehicle?
            </Typography>
            <TextField
              type="number"
              placeholder="3"
              value={input.vehicles[index].miles}
              onChange={(event) =>
                updateVehicleField(index, "miles", +event.target.value)
              }
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">miles</InputAdornment>
                  ),
                },
              }}
            />
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={2}
            justifyContent="space-between"
          >
            <Typography variant="h5">
              What is the average gas mileage of this vehicle?
            </Typography>
            <TextField
              type="number"
              placeholder="21.6"
              value={input.vehicles[index].milesPerGaloon}
              onChange={(event) =>
                updateVehicleField(index, "milesPerGaloon", +event.target.value)
              }
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      miles per gallon
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Stack>
          {input.vehicles.length > 1 && (
            <Button variant="contained" onClick={() => removeVehicle(index)}>
              Remove vehicle
            </Button>
          )}
        </Card>
      ))}
      <Button variant="contained" onClick={addVehicle}>
        Add vehicle
      </Button>
      <Suspense fallback={<CircularProgress />}>
        <TransportationResult input={input} />
      </Suspense>
    </Stack>
  );
};

export default TransportationForm;
