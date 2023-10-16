import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../style/types';

type InputComponentStyleProps = StyledComponentProps & { 
  width?: number;
} ;

export const InputComponentStyle = styled('div')<InputComponentStyleProps>(
  ({ theme, width}) => {

    const customTheme = theme as CustomTheme;
    return {
      fontWeight: customTheme.fontWeights.regular,
      fontSize: "16px",
      padding: "6px 14px" ,
      borderRadius: "8px",
      border: "1px solid #D0D5DD",
      fontFamily: "Inter",
      display: "flex",
      // width: "max-content",

      '.input': {
        fontFamily: "Inter",
        width: "100%"
      },

      '.helper-text': {
        fontFamily: "Inter",
        fontSize: "14px"
      } 
    }
  }
)