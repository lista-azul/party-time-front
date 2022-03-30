import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

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
          Next.js example
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
