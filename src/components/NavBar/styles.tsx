import * as React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { styled, Theme } from "@mui/system";

import { AppBar } from "@mui/material";

export const useNavBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    drawerLink: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
    },
    bar: {
      backgroundColor: "white",
      height: "64px",
      width: "100%",
      zIndex: "100",
    },
    appBar: {
      height: "64px",
      boxShadow: "none !important",
    },
    toolbar: {
      [theme.breakpoints.up("sm")]: {
        height: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        justifyContent: "space-between",
      },
    },
    menuButton: {
      display: "inline-flex !important",

      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    navButton: {
      margin: "10px 5px !important",
      textDecoration: " none !important",
      [theme.breakpoints.up("sm")]: {
        margin: "0 10px !important",
        fontSize: "1.4rem!important",
        fontWeight: "100!important",
        textTransform: "capitalize",
        color: "black",
        cursor: "pointer",
      },
    },
    mainLink: {
      alignItems: "center",
      display: "flex",
      textDecoration: "none !important",
    },
    title: {
      fontSize: "1.5rem !important",
      color: "gray",
      marginLeft: "10px !important",
      cursor: "pointer",
    },
    contentGenericLinks: {
      display: "flex",
    },
  })
);
//TODO: refactorizar, agregar a useStyle de arriba ya que descubri como usar los breakpoints en makestyles.
export const NavLinks = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginLeft: "90px",
    justifyContent: "space-between",
  },
}));
