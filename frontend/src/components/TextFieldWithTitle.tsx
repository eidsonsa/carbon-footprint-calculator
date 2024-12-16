import { Stack, TextField, TextFieldProps, Typography } from "@mui/material";
import React, { FC } from "react";

type TextFieldWithTitleProps = TextFieldProps & {
  title: string;
};

const TextFieldWithTitle: FC<TextFieldWithTitleProps> = ({
  title,
  ...props
}) => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      gap={2}
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="h5">{title}</Typography>
      <TextField {...props} />
    </Stack>
  );
};

export default TextFieldWithTitle;
