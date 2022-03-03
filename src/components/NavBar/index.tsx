import {
  AppBar,
  SwipeableDrawer,
  Toolbar,
  Typography,
  withStyles,
  IconButton,
} from "@mui/material";
import { Fragment, useState } from "react";
import CONSTANTS from "src/constants";
import Link from "next/link";
import { NavLinks, useNavBarStyles } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";

const { ROUTES } = CONSTANTS;

const NavBar = (): JSX.Element => {
  const [opened, setOpened] = useState(false);
  const classes = useNavBarStyles();

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
        className={classes.drawer}
      >
        `
        <div className={classes.drawerLink}>
          `
          <Link href={ROUTES.LOGIN}>
            <Typography className={classes.navButton}>Login</Typography>
          </Link>
          <Link href={ROUTES.REGISTER}>
            <Typography className={classes.navButton}>Register</Typography>
          </Link>
          <Link href={ROUTES.HOME}>
            <Typography className={classes.navButton}>Home</Typography>
          </Link>
          <Link href={ROUTES.ABOUTUS}>
            <Typography>About us</Typography>
          </Link>
        </div>
      </SwipeableDrawer>
      <div className={classes.bar}>
        <AppBar className={classes.appBar} color="transparent">
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Link href={ROUTES.HOME}>
              <div className={classes.mainLink}>
                <Typography className={classes.title}>EvenTrust.</Typography>
              </div>
            </Link>
            <NavLinks>
              <div className={classes.contentGenericLinks}>
                <Link href={ROUTES.HOME}>
                  <Typography className={classes.navButton}>Home</Typography>
                </Link>
                <Link href={ROUTES.ABOUTUS}>
                  <Typography className={classes.navButton}>
                    About us
                  </Typography>
                </Link>
              </div>
              <div className={classes.contentGenericLinks}>
                <Link href={ROUTES.LOGIN}>
                  <Typography className={classes.navButton}>Login</Typography>
                </Link>
                <Link href={ROUTES.REGISTER}>
                  <Typography className={classes.navButton}>
                    Register
                  </Typography>
                </Link>
              </div>
            </NavLinks>
          </Toolbar>
        </AppBar>
      </div>
    </Fragment>
  );
};

export default NavBar;
