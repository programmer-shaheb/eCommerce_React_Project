import { createTheme } from "@mui/material/styles";

export const inputStyle = {
  outline: "none",
  border: "0px",
  padding: "0 8px",
  marginLeft: "4px",
  fontSize: "16px",
  width: "100%",
};

export const searchContainer = {
  border: "2px solid var(--color-search-border)",
  padding: "5px 20px",
  borderRadius: "4px",
  maxWidth: "700px",
  width: "100%",
  margin: "0 100px",
};

export const iconStyle = {
  fontSize: "30px",
  color: "var(--color-gray)",
  margin: "0 10px",
};

export const searchIcon = {
  color: "var(--color-gray)",
  fontSize: "26px",
};

export const badgetext = {
  color: "var(--color-gray)",
  marginLeft: "5px",
};

export const theme = createTheme({
  palette: {
    neutral: {
      main: "var(--color-primary)",
      contrastText: "var(--color-white)",
    },
  },
});
