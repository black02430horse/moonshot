import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../style/types';

type ButtonComponentStyleProps = StyledComponentProps & {type?: boolean} ;

export const ButtonComponentStyle = styled('div')<ButtonComponentStyleProps>(
  ({ theme, type}) => {

    const customTheme = theme as CustomTheme;
    return {
      fontWeight: customTheme.fontWeights.regular,
      fontSize: "16px",
      padding: "12px 18px" ,
      backgroundColor: type ? customTheme.colors.secondary10 : customTheme.colors.white,
      color: type ? customTheme.colors.white : customTheme.fontColors.primary00,
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