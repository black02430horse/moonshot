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
      fontSize: "12px",
      padding: "5px 8px" ,
      borderRadius: "8px",
      border: "1px solid #D0D5DD",
      fontFamily: "Inter",
      display: "flex",
      ':hover': {
        border: "1px solid #000000"
      },
      ':focus-within': {
        border: "2px solid #1976d2"
      },
      // width: "max-content",

      '.input': {
        fontFamily: "Inter",
        width: "100%"
      },

      '.icon-container': {
        marginRight: "5px"
      },

      '.helper-text': {
        fontFamily: "Inter",
        fontSize: "14px"
      } 
    }
  }
)