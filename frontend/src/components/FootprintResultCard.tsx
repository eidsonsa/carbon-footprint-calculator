import { FootprintResult } from "@/generated/graphql";
import { Stack } from "@mui/material";
import React, { FC } from "react";
import ResultCard from "./ResultCard";
import { getFootprintStatus } from "@/utils/status";

interface FootprintResultCardProps {
  result: FootprintResult;
}

const FootprintResultCard: FC<FootprintResultCardProps> = ({ result }) => {
  const { average, total } = result;
  const status = getFootprintStatus({ total, average });

  return (
    <Stack gap={4}>
      <ResultCard title="Average" number={average} emoji="🇺🇸" />
      <ResultCard title="Your result" number={total} status={status} />
    </Stack>
  );
};

export default FootprintResultCard;
