import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import SerchBar from "src/components/search";

const Home: NextPage = () => {
  return (
      <div className={styles.container}>
      <Box
        sx={{ my: 4 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Party-Time
        </Typography>
      </Box>

      <SerchBar/>
    </div>
  );
};

export default Home;
