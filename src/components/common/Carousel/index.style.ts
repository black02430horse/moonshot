import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../style/types';

type CarouselComponentStyleProps = StyledComponentProps & {
  img: string;
 } ;

export const CarouselComponentStyle = styled('div')<CarouselComponentStyleProps>(
  ({ theme, img }) => {

    const customTheme = theme as CustomTheme;
    return {

      backgroundImage: `url(image/${img})`,
      // filter: "blur(5px)",
      backgroundSize: 'cover',
      width: 450,
      height: 600,
      position: "relative",

      '.blur-wrap': {
        position: "absolute",
        width: 450,
        height: 250,
        top: 350,
        left: 0,
        overflow: "hidden"
      },

      '.blur': {
        position: "absolute",
        top: -10,
        left: -10,
        bottom: -10,
        right: -10,
        backgroundImage: `url(image/${img})`,
        backgroundPosition: "0px -350px",
        // background-position: (($blur-width + $blur-offset - $img-width) / 2) (($blur-height + $blur-offset - $img-height) / 2);
        backgroundSize: 'cover',
        filter: "blur(10px)",
        
      },

      '.main-container': {
        position: "absolute",
        top: "350px",
        padding: "20px",
        display: "grid",
        gap: "20px",

        ".space-between-container": {
          display: "flex",
          justifyContent: "space-between"
        },

        ".star-group": {
          display: "flex",
          alignItems: "center"
        }
      },

      '.font-inter': {
        fontFamily: "Inter"
      },

      '.font-size-16': {
        fontSize: "20px"
      },

      '.font-size-14': {
        fontSize: "17px"
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

      '.color-white': {
        color: "white"
      },
    }
  }
)