import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../../style/types';
import { BlogPng } from '../../../../assets/image';

type HeaderViewStyleProps = StyledComponentProps & {} ;

export const HeaderViewStyle = styled('div')<HeaderViewStyleProps>(
  ({ theme }) => {

    const customTheme = theme as CustomTheme;
    return {
        '.header-alert': {
          backgroundColor: customTheme.colors.secondary00,
          display: "flex",
          padding: "8px",
          justifyContent: "space-between",
          color: customTheme.colors.white,
          
          

          '.header-icon': {
            cursor: "pointer"
          },

          '.text-group': {
            display: "flex",
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
          padding: "18px 5%",
          
          '.auth-btn': {
            display: "flex"
          },
          
          '.menu-btn': {
            display: "none"
          },

          '.btn-group': {
            display: "flex"
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
            gap: "12px"
          },
        },

        '.review-container': {
          padding: "24px 5%",
          
          '.image-container': {
            borderRadius: "12px"
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

        '@media(max-width: 900px)': {
          '.header-alert': {
            '.text-group': {
              display: "grid",
            },
          },

          '.header-menu': {
            
            '.auth-btn':{
              display: "none"
            },
            
            '.menu-btn':{
              display: "block"
            },

            '.btn-group': {
              display: "none"
            }
          },

          '.blog-container': {
            '.email-btn': {
              display: "grid",
              gap: "12px"
            },
          },
        }
        
    }
  }
)