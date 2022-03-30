import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#F72585",
    },
    secondary: {
      main: "#7209B7",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
