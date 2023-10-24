import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../style/types';

type BlogComponentStyleProps = StyledComponentProps & { } ;

export const BlogComponentStyle = styled('div')<BlogComponentStyleProps>(
  ({ theme }) => {

    const customTheme = theme as CustomTheme;
    return {
      display: "grid",
      gap: "5px",

      '.blog-image': {
        borderRadius: "12px",
        width: "100%"
      },

      '.blog-creator': {
        color: customTheme.colors.secondary10,
        fontSize: "12px",
        fontFamily: customTheme.fonts.mainFont,
      fontWeight: customTheme.fontWeights.regular,
      },

      '.blog-title': {
        fontSize: "24px",
        fontFamily: customTheme.fonts.mainFont,
      fontWeight: customTheme.fontWeights.regular,
      },
      '.blog-btn-broup': {
        display: "flex",
        gap: "5px",
        cursor: "pointer",
        
      },

      '.blog-content': {
        fontSize: "14px",
        color: customTheme.fontColors.primary00,
        fontFamily: customTheme.fonts.mainFont,
      },

      '.tip-btn-group': {
        display: "flex",
        gap: "5px"
      }
    }
  }
)