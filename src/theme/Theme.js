// theme.js
import { BorderColor } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  primary: {
    main: "#80cbc4", // Customize primary color
  },
  secondary: {
    main: "#607d8b", // Customize secondary color
  },
  chip1: {
    main: "#43a047", // Example custom color
  },
  chip2: {
    main: "#ef6c00", // Example custom color
  },
  chip3: {
    main: "#0277bd", // Example custom color
  },
  chip4: {
    main: "#ef6c00", // Example custom color
  },
  borders: {
    default: '1px solid #9c27b0',
    primary: '4px solid #009688',
    secondary: '1px solid #dc004e',
    error: '1px solid #f44336',
  },
  border: { main: "#0277bd" },
  typography: {
    h5: {
      fontWeight: "bold",
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: "italic",
    },
  },
});

export const darkTheme = createTheme({
  typography: {
    h5: {
      fontWeight: "bold",
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: "italic",
    },
  },
  palette: {
    mode: "dark",
  },
  primary: {
    main: "#80cbc4", // Customize primary color
  },
  secondary: {
    main: "#607d8b", // Customize secondary color
  },
  chip1: {
    main: "#9c27b0", // Example custom color
  },
  chip2: {
    main: "#009688", // Example custom color
  },
  chip3: {
    main: "#ef6c00", // Example custom color
  },
  chip4: {
    main: "#9c27b0", // Example custom color
  },
  border: { main: "#ef6c00" },
  borders: {
    default: '1px solid #dc004e',
    primary: '2px solid #1976d2',
    secondary: '1px solid #dc004e',
    error: '1px solid #f44336',
  },
});

const theme = createTheme({
  typography: {
    h5: {
      fontWeight: "bold",
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: "italic",
    },
  },
  palette: {
    primary: {
      main: "#80cbc4", // Customize primary color
    },
    secondary: {
      main: "#607d8b", // Customize secondary color
    },
    chip1: {
      main: "#43a047", // Example custom color
    },
    chip2: {
      main: "#ef6c00", // Example custom color
    },
    chip3: {
      main: "#0277bd", // Example custom color
    },
  },
});

export default theme;
