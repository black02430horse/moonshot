import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../../style/types';
// import { Png1 } from '../../../../assets/image';

type CarouselViewStyleProps = StyledComponentProps & {} ;

export const CarouselViewStyle = styled('div')<CarouselViewStyleProps>(
  ({ theme }) => {

    const customTheme = theme as CustomTheme;
    return {
        padding: "0 5% 48px 5%",
        bgColor: "#F9FAFB",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",


        
        [customTheme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center"
        },

        ".head-container": {
          display: "grid",
          gap: "12px",
        },

        ".btn-group": {
          display: 'flex',
          gap: "12px",
          flexDirection: "row",

          [customTheme.breakpoints.down("md")]: {
            flexDirection: "column-reverse"
          },
        },

        '.font-inter': {
          fontFamily: "Inter"
        },

        '.font-size-16': {
          fontSize: "16px"
        },

        '.font-size-24px': {
          fontSize: "24px"
        },

        '.font-size-36px': {
          fontSize: "36px"
        },

        '.text-decoration-underline': {
          textDecoration: "underline"
        },

        '.color-secondary': {
          color: customTheme.colors.secondary00
        },

        '.font-regular': {
          fontWeight: customTheme.fontWeights.regular
        },

        '.font-bold': {
          fontWeight: customTheme.fontWeights.semibold
        },

        '.color-grey': {
          color: customTheme.fontColors.primary00
        },
        
    }
  }
)