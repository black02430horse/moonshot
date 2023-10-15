import { StyledComponentProps, styled } from "@mui/material";

import { CustomTheme } from "../../../../style/types";
// import { Png1 } from '../../../../assets/image';

type FooterViewStyleProps = StyledComponentProps & {};

export const FooterViewStyle = styled("div")<FooterViewStyleProps>(
  ({ theme }) => {
    const customTheme = theme as CustomTheme;
    return {
      backgroundColor: customTheme.colors.secondary00,
      color: customTheme.colors.white,

      ".main-container": {
        padding: "5%",
        display: "flex",
        justifyContent: "space-between",
        [customTheme.breakpoints.down("md")]: {
          display: "grid",
        },
      },

      ".footer-logo": {
        cursor: "pointer",
        fontSize: "24px",
        fontWeight: customTheme.fontWeights.regular,
        display: "flex",
        alignItems: "center",
        fontFamily: "Inter",
        gap: "12px",
      },

      ".last-container": {
        padding: "2% 5%",
        display: "flex",
        justifyContent: "space-between",

        [customTheme.breakpoints.down("md")]: {
          display: "grid",
        },
      },

      ".divider": {
        backgroundColor: customTheme.colors.secondary10,
        height: "3px",
      },

      ".footer-text-title": {
        color: "#D6BBFB",
        fontSize: "14px",
      },

      ".font-inter": {
        fontFamily: "Inter",
      },

      ".font-size-16": {
        fontSize: "16px",
      },

      ".font-size-24px": {
        fontSize: "24px",
      },

      ".font-size-36px": {
        fontSize: "36px",
      },

      ".text-decoration-underline": {
        textDecoration: "underline",
      },

      ".color-secondary": {
        color: customTheme.colors.secondary00,
      },

      ".font-regular": {
        fontWeight: customTheme.fontWeights.regular,
      },

      ".font-bold": {
        fontWeight: customTheme.fontWeights.semibold,
      },

      ".color-grey": {
        color: customTheme.fontColors.primary00,
      },

      "color-olive": {
        color: "#E9D7FE",
      },
    };
  }
);
