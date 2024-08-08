import React, { useState } from "react";
import AppNavBar from "../components/AppNavBar";
import { Box, Container, createTheme, CssBaseline, Stack } from "@mui/material";
import FirstSection from "../components/FirstSection";
import { ThemeProvider } from "@mui/material/styles";

import { lightTheme, darkTheme } from "../theme/Theme";
import SecondSection from "../components/SecondSection";
import Thirdsection from "../components/Thirdsection";
import FourthSection from "../components/FourthSection";
import FifthSection from "../components/FifthSection";

const Landingpage = () => {
  const [themeMode, setThemeMode] = useState(false);

  // const theme = createTheme({
  //     palette: {
  //         mode: 'dark' //( themeMode === true ? 'dark' : 'light'),
  //     },
  // });

  const toggleTheme = () => {
    setThemeMode(!themeMode);
  };

  const baseTheme = themeMode ? darkTheme : lightTheme;

  // Override the base theme with dynamic values
  const theme = createTheme({
    ...baseTheme,
    palette: {
      ...baseTheme.palette,
      primary: {
        ...baseTheme.primary,
      },

      secondary: {
        ...baseTheme.secondary,
      },
      chip1: {
        ...baseTheme.chip1,
      },
      chip2: {
        ...baseTheme.chip2,
      },
      chip3: {
        ...baseTheme.chip3,
      },

      chip4: {
        ...baseTheme.chip4,
      },
border: {
        ...baseTheme.border,
      },
      borders: {
        ...baseTheme.borders,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container 
        sx={{ p: { xs: "0", md: "0", sm: "2" ,lg:"2"} }}
       
      >
        <Stack
          spacing={0} // This sets the vertical spacing between components
          sx={{
            width: "100%",
            p: 0, // padding inside the stack
          }}
        >
          <Box className="headerctrl appnavbar" sx={{ position: { xs: "fixed", md: "relative", sm: "fixed" ,lg:"relative"} }} >
            <AppNavBar className="ctrlnavbar" theme={themeMode} toggleTheme={toggleTheme} />
          </Box>
          <Box className="contentscroll">
            <FirstSection />

            <SecondSection />
            <Thirdsection />
            <FourthSection />
            <FifthSection />
          </Box>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default Landingpage;
