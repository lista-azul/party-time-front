import {
  AppBar,
  SwipeableDrawer,
  Toolbar,
  Typography,
  withStyles,
} from "@mui/material";
import { Fragment, useState } from "react";
import CONSTANTS from "src/constants";
import Link from "next/link";
import { AppBarCustomed } from "./styles";

const { ROUTES } = CONSTANTS;

const NavBar = (): JSX.Element => {
  const [opened, setOpened] = useState(false);

  const toggleDrawer = () => {
    setOpened(!opened);
  };

  return (
    <Fragment>
      <SwipeableDrawer
        anchor="left"
        open={opened}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <Link href={ROUTES.HOME}>
          <a>
            <div>
              <span>Home</span>
            </div>
          </a>
        </Link>
        <Link href={ROUTES.ABOUTUS}>
          <a>
            <div>
              <span>About us</span>
            </div>
          </a>
        </Link>
      </SwipeableDrawer>
      <div>
        <AppBarCustomed color="transparent">
          <Toolbar>
            <Link href={ROUTES.HOME}>
              <a>
                <Typography variant="h6">home</Typography>
              </a>
            </Link>
            <Link href={ROUTES.ABOUTUS}>
              <a>
                <Typography variant="h6">About us</Typography>
              </a>
            </Link>
          </Toolbar>
        </AppBarCustomed>
      </div>
    </Fragment>
  );
};

export default NavBar;
