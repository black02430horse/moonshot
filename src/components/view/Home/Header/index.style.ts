import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../../style/types';
// import { Png1 } from '../../../../assets/image';

type HeaderViewStyleProps = StyledComponentProps & {} ;

export const HeaderViewStyle = styled('div')<HeaderViewStyleProps>(
  ({ theme }) => {

    const customTheme = theme as CustomTheme;
    return {
        '.main-padding': {
          padding: "0px 5%",
        },

        '.header-alert': {
          backgroundColor: customTheme.colors.secondary00,
          display: "flex",
          padding: "8px",
          justifyContent: "space-between",
          color: customTheme.colors.white,
          position: "sticky",
          
          

          '.header-icon': {
            cursor: "pointer"
          },

          '.text-group': {
            display: "flex",

            [customTheme.breakpoints.down("md")]: {
              display: "grid"
            }
          },

          '.header-text1': {
            fontWeight: customTheme.fontWeights.regular,
            marginRight: "1rem"
          },

          '.header-text2': {
            fontWeight: customTheme.fontWeights.light,
            marginRight: "0.5rem"
          }
          
        },

        '.header-menu': {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 0",
          
          '.auth-btn': {
            display: "flex",
            [customTheme.breakpoints.down("md")]: {
              display: "none"
            }
          },
          
          '.menu-btn': {
            display: "none",
            [customTheme.breakpoints.down("md")]: {
              display: "block"
            }
          },

          '.btn-group': {
            display: "flex",
            [customTheme.breakpoints.down("md")]: {
              display: "none",
            }
          }
        },
        
        '.header-logo': {
          cursor: "pointer",
          fontSize: "24px",
          fontWeight: customTheme.fontWeights.regular,
          display: "flex",
          alignItems: "center",
          marginRight: "1rem"
        },

        '.blog-container': {
          padding: "5%",
          textAlign: "center",
          fontFamily: customTheme.fonts.mainFont,
          gap: "24px",
          display: "grid",
          justifyContent: "center",
          
          '.email-btn': {
            display: "flex",
            gap: "12px",

            [customTheme.breakpoints.down("md")]: {
              display: "grid",
            }
          },
        },

        '.review-container': {
          padding: "24px 0",
          
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

        '.text-decoration-none': {
          textDecoration: "none"
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