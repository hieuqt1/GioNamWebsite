import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme";
import Header from "../../PageSections/Header/Header";
import Footer from "../../PageSections/Footer/Footer";

export default function MediaPage() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Footer />
    </ThemeProvider>
  );
}
