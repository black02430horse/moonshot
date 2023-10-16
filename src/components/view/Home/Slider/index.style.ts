import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../../style/types';
// import { Png1 } from '../../../../assets/image';

type SliderViewStyleProps = StyledComponentProps & {} ;

export const SliderViewStyle = styled('div')<SliderViewStyleProps>(
  ({ theme }) => {

    const customTheme = theme as CustomTheme;
    return {
        padding: "96px 5%",
        bgColor: "#F9FAFB",
        // display: "grid",
        // gap: "64px",

        '.header': {
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "2rem",

          '.header-btn': {
            display: "block",
            [customTheme.breakpoints.down("sm")]: {
              display: "none",
            }
          }
        },

        '.card-array-container': {
          width: '100%',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          display: 'flex',
        },

        '.footer-btn': {
          display: "none",
          [customTheme.breakpoints.down("sm")]: {
            display: "block",
          }
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