import styled from "@emotion/styled";
import sx from "@mui/system/sx";
import theme from "../../styles/theme";

export const ButtonWrapper = styled.div`
    align-items: center;
    width: 100%;
    margin: 1rem;
    text-align: right;
    float: right;
    padding-right: 10vh;
`;

// create xs custom for mui components
export const ButtonSx = sx({
    margin: "0.5rem",
    padding: "0.5rem",
    height: "3rem",
    width: "12rem",
    borderRadius: "2rem",
    backgroundColor: theme.button,
});