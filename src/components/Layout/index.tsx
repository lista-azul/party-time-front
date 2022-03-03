import { Fragment } from "react";
import NavBar from "../NavBar";
interface propsLayout {
  children: any;
}
const Layout = ({ children }: propsLayout) => {
  return (
    <Fragment>
      <header>
        <NavBar />
      </header>
      {children}
    </Fragment>
  );
};

export default Layout;
