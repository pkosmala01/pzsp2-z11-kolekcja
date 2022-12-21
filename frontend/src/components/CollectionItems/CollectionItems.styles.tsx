import sx from "@mui/system/sx";
import theme from "../../styles/theme";

// create xs custom for mui components
export const ButtonSx = sx({
    display: "flex",
    margin: "1rem 0",
    padding: "0.5rem",
    height: "3rem",
    width: {sm: "100%"},
    borderRadius: "2rem",
    backgroundColor: theme.btn,
    '&:hover': {
        background: theme.primary,
     },
});