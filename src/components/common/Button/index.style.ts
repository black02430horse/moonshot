import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../style/types';

type ButtonComponentStyleProps = StyledComponentProps & {type?: number} ;

export const ButtonComponentStyle = styled('div')<ButtonComponentStyleProps>(
  ({ theme, type}) => {

    const customTheme = theme as CustomTheme;
    return {
      fontWeight: customTheme.fontWeights.regular,
      fontSize: "16px",
      padding: "12px 18px" ,
      backgroundColor: type == 1 ? customTheme.colors.secondary10 : customTheme.colors.white,
      color: type == 1 ? customTheme.colors.white : customTheme.fontColors.primary00,
      border: type == 2 ? "1px solid #D0D5DD" : "none",
      borderRadius: "0.5rem",
      fontFamily: "Inter",
      cursor: "pointer",
      // display: 'inline-block',
      margin: "0.1rem",
      alignItems : "center",
      display: "flex",
      height: "max-content",
      justifyContent: "center"
    }
  }
)