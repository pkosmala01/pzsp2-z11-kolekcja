import styled from "@emotion/styled";
import sx from "@mui/system/sx";
import theme from "../../styles/theme";

// create xs custom for mui components
export const ButtonSx = sx({
    margin: "1rem",
    padding: "0.5rem",
    height: "3rem",
    width: "100%",
    borderRadius: "2rem",
    backgroundColor: theme.button,
});