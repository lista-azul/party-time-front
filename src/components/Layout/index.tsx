import {Fragment, useEffect, useState} from "react";
import NavBar from "../NavBar";
import {Container} from "@mui/material";
import EventService from "src/services/eventService";
import {Event} from "src/interfaces/event"
interface propsLayout {
  children: any;
}
const Layout = ({ children }: propsLayout) => {
    const [events, setEvents] = useState<Event[]>([]);
    const getEvents = async ()=>{
        let response =await EventService.getEventsMock();
        setEvents(response)
    }
    useEffect(() => {
        getEvents()
    }, []);

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
