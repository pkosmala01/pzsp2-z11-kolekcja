import { styled, experimental_sx as sx } from "@mui/system";
import {
  Box as BoxMui,
  Stack as StackMui,
  Typography as TypographyMui,
} from "@mui/material";

import theme from "../../styles/theme";

export const Box = styled(BoxMui)(
  sx({
    margin: 0,
    backgroundColor: theme.primary,
    borderBottomLeftRadius: "1vw",
    borderBottomRightRadius: "1vw",
    height: "9vh",
  })
);

export const Typography = styled(TypographyMui)(
  sx({
    color: theme.fontLight,
  })
);

export const BoxTypography = styled(BoxMui)(
  sx({
    display: "flex",
    justifyContent: "center",
  })
);

export const StackNav = styled(StackMui)(
  sx({
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    spacing: "2",
  })
);
