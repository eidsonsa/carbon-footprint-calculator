"use client";

import { Typography, useTheme } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";
import Card from "./Card";

interface MenuCardProps {
  title: string;
  emoji: string;
  link: string;
}

const MenuCard: FC<MenuCardProps> = ({ title, emoji, link }) => {
  const { palette } = useTheme();

  return (
    <Link href={link} style={{ textDecoration: "none", cursor: "pointer" }}>
      <Card direction="row" justifyContent="space-between" p={4}>
        <Typography variant="h2" sx={{ color: palette.text.primary }}>
          {title}
        </Typography>
        <Typography variant="h2">{emoji}</Typography>
      </Card>
    </Link>
  );
};

export default MenuCard;
