"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: {
    primary: {
      main: "#607d8b",
    },
    background: {
      default: "#cfd8dc",
    },
  },
});

export default theme;
