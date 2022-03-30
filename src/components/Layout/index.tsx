import { Fragment } from "react";
import NavBar from "../NavBar";
import {Container} from "@mui/material";
interface propsLayout {
  children: any;
}
const Layout = ({ children }: propsLayout) => {
  return (
    <Fragment>
      <header>
        <NavBar />
      </header>
        <Container maxWidth={"xl"}>
            {children}
        </Container>
    </Fragment>
  );
};

export default Layout;
