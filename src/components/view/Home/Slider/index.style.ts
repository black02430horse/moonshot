import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../../style/types';
// import { Png1 } from '../../../../assets/image';

type SliderViewStyleProps = StyledComponentProps & {} ;

export const SliderViewStyle = styled('div')<SliderViewStyleProps>(
  ({ theme }) => {

    const customTheme = theme as CustomTheme;
    return {
        '.main-padding': {
          padding: "0px 5%",
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