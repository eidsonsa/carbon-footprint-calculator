"use client";

import { Stack, StackProps, useTheme } from "@mui/material";
import React, { FC } from "react";

const Card: FC<StackProps> = ({ children, sx, ...props }) => {
  const theme = useTheme();

  return (
    <Stack
      gap={2}
      border="4px solid"
      borderRadius={3}
      borderColor={theme.palette.primary.light}
      p={2}
      sx={{ ...sx }}
      {...props}
    >
      {children}
    </Stack>
  );
};

export default Card;
