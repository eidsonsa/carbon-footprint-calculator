import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const HomeButton = () => {
  return (
    <Link href="/">
      <Typography>🏠</Typography>
    </Link>
  );
};

export default HomeButton;
