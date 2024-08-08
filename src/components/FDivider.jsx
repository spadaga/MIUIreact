import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Icon from "@mui/material/Icon";
import { blue, red } from "@mui/material/colors"; // Import colors from Material-UI

export default function FDivider() {
  return (
    <Card
      variant="outlined"
      sx={{
        p: 4,
        pt: 2,
        pb: 1,
        borderRadius: 10,

        borderColor:  (theme) => theme.palette.border.main
      }}
    >
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontWeight: {
                xs: "600", // Extra small screens
                sm: "700", // Small screens
                md: "800", // Medium screens and up
              },

              fontSize: {
                xs: "1.25rem", // Extra small screens
                sm: "1.5rem", // Small screens
                md: "2rem", // Medium screens and up
              },
              lineHeight: {
                xs: "1.2", // Extra small screens
                sm: "1.4", // Small screens
                md: "1.5", // Medium screens and up
              },
              whiteSpace: {
                xs: "nowrap", // White space for extra-small devices
                sm: "nowrap", // White space for small devices and up
                md: "nowrap", // White space for medium devices and up
              },
            }}
          >
            LEARN AI DEVELOPMENT
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            <ShareOutlinedIcon
              sx={{
                fontSize: 30,
                color: blue[500],
              }}
            />
          </Typography>
        </Stack>
        <Typography
          color="text.secondary"
          className="gradienttext"
          variant="body2"
          sx={{
            fontWeight: {
              xs: "800", // Extra small screens
              sm: "800", // Small screens
              md: "800", // Medium screens and up
            },

            fontSize: {
              xs: "2rem !important", // Extra small screens
              sm: "2rem !important", // Extra small screens
              md: "2.5rem !important", // Extra small screens
            },
            pb: {
              xs: "10px", // Extra small screens
              sm: "10px", // Small screens
              md: "10px", // Medium screens and up
            },
            lineHeight: {
              xs: "1", // Extra small screens
              sm: "1", // Small screens
              md: "1", // Medium screens and up
            },

            whiteSpace: {
              xs: "normal !important", // Extra small screens
              sm: "normal !important", // Small screens
              md: "normal !important", // Medium screens and up
            },

            overflow: "hidden !important",
            textOverflow: "ellipsis !important",
          }}
        >
          Post Graduate Programme in Data Science
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 1 }}>
        <Typography gutterBottom variant="body2">
          Select type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip
            color="primary"
            label="Download"
            size="small"
            sx={{
              backgroundColor: (theme) => theme.palette.chip1.main,
              p: 2,
              color: "white",
            }}
          />
          <Chip
            label="Apply"
            size="Apply"
            sx={{
              backgroundColor: (theme) => theme.palette.chip2.main,
              p: 2,
              color: "white",
            }}
          />
          <Chip
            label="Export"
            size="Export"
            sx={{
              backgroundColor: (theme) => theme.palette.chip3.main,
              p: 2,
              color: "white",
            }}
          />
        </Stack>
      </Box>
    </Card>
  );
}
