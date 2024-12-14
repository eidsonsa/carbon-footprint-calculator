import { Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import HomeButton from "./HomeButton";

interface BaseContainerProps {
  title: string;
  children: React.ReactNode;
  hideHomeButton?: boolean;
}

const BaseContainer: FC<BaseContainerProps> = ({
  title,
  children,
  hideHomeButton = false,
}) => {
  return (
    <Stack alignItems="center" direction="column" p={4} gap={4} mt={4}>
      {!hideHomeButton && <HomeButton />}
      <Typography variant="h2" textAlign="center">
        {title}
      </Typography>
      {children}
    </Stack>
  );
};

export default BaseContainer;
