import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../style/types';
// import { Png1 } from '../../../../assets/image';

type SignUpViewStyleProps = StyledComponentProps & {} ;

export const SignUpViewStyle = styled('div')<SignUpViewStyleProps>(
  ({ theme }) => {

    const customTheme = theme as CustomTheme;
    return {
        padding: "30px 5%",

        '.main-container': {
          padding: "120px 15%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "30px",

          '.title': {
            textAlign: "center",
            fontFamily: "Smooch Sans",
            fontSize: "120px",
            fontWeight: 700,
            color: "#1C1C1C",
            lineHeight: 0.9
          },

          '.login-container': {
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }
        },

        '.image-container': {
          padding: "1% 5%",
          width: "100%",
          borderRadius: "40px",
          display: "block",

          [customTheme.breakpoints.down("lg")]: {
            display: "none"
          }
        },

        '.font-inter': {
          fontFamily: "Inter"
        },

        '.font-size-16': {
          fontSize: "16px"
        },

        '.font-size-12': {
          fontSize: "12px"
        },

        '.font-size-24px': {
          fontSize: "24px"
        },

        '.font-size-36px': {
          fontSize: "36px"
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

        '.font-poppin': {
          fontFamily: "Poppins"
        },

        '.text-center': {
          textAlign: "center"
        }
        
    }
  }
)