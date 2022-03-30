import { Box, Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
          Next.js example
        </Typography>
      </Box>

      <SerchBar></SerchBar>
    </div>
  );
};

export default Home;
