import * as React from "react";
import { withStyles } from "@mui/styles";
import { AppBar } from "@mui/material";

export const AppBarCustomed = withStyles({
  root: {
    position: "inherit",
  },
})(AppBar);
