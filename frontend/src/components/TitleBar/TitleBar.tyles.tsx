import { Box } from "@mui/material";
import { styled } from "@mui/system";
import sx from "@mui/system/sx";
import theme from "../../styles/theme";

export const TitleBarWrapper = styled(Box)(
  sx({
    height: "5rem",
    backgroundColor: theme.lightGrey,
    borderRadius: "20px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.45)",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 2rem",
    marginTop: "2rem",
  })
);

export const NavigateBack = styled(Box)(
  sx({
    width: "4rem",
    height: "4rem",
    backgroundColor: theme.lightGrey,
    borderRadius: "3rem",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.45)",
    position: "absolute",
    left: "1rem",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.darkGrey,
      transition: "all 0.2s ease-in-out",
    },
  })
);

export const TitleName = styled(Box)(
  sx({
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "0.5rem 0",
    marginLeft: "5rem",
  })
);

export const TitleDescription = styled(Box)(
  sx({
    fontSize: "1rem",
    fontWeight: "bold",
    margin: "0.5rem 0",
    marginLeft: "5rem",
  })
);
