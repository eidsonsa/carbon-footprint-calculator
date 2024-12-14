"use client";

import { FootprintStatus } from "@/utils/status";
import { Typography, useTheme } from "@mui/material";
import React, { FC } from "react";
import Card from "./Card";

type ResultCardProps = {
  title: string;
  number: number;
} & ({ status: FootprintStatus } | { emoji: string });

const ResultCard: FC<ResultCardProps> = ({ title, number, ...props }) => {
  const theme = useTheme();

  const getEmoji = () => {
    if ("emoji" in props) {
      return props.emoji;
    }

    return props.status === "positive" ? "✔️" : "❌";
  };

  const getBorderColor = () => {
    if (!("status" in props)) {
      return theme.palette.grey[800];
    }

    return props.status === "positive"
      ? theme.palette.success.main
      : theme.palette.error.main;
  };

  return (
    <Card
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      borderColor={getBorderColor()}
    >
      <Typography variant="h4">
        {getEmoji()} {title}:
      </Typography>
      <Typography variant="h3" textAlign="center">
        {number} lbs of CO₂ per year
      </Typography>
    </Card>
  );
};

export default ResultCard;
