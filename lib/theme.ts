import { createTheme, DEFAULT_THEME, MantineThemeOverride, mergeMantineTheme, rem } from "@mantine/core";

const rootTheme: MantineThemeOverride = createTheme({
  // IMPORTANT: Breakpoints also need to be defined in root /postcss.config.cjs file
  // Note that these are currently set to the Mantine DEFAULTS, only re-setting them here for increased visibility.
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em",
  },

  autoContrast: true,
  luminanceThreshold: 0.4,
  focusRing: "auto",
  defaultRadius: "lg",
  cursorType: "pointer",
  primaryColor: "danteRed",
  colors: {
    danteRed: [
      "#FDD5D3", // 0
      "#FCBCB9", // 1
      "#FBA39F", // 2
      "#FA8A85", // 3
      "#F9716A", // 4
      "#F85850", // 5 = danteRed
      "#CA4841", // 6
      "#9B3732", // 7
      "#6D2723", // 8
      "#3E1614", // 9
    ],
    danteGreen: [
      "#C6DEDE", // 0
      "#A3CBCB", // 1
      "#81B7B7", // 2
      "#5EA3A3", // 3
      "#3C9090", // 4
      "#197C7C", // 5 = danteGreen
      "#146565", // 6
      "#104E4E", // 7
      "#0B3636", // 8
      "#061F1F", // 9
    ],
    danteGrey: [
      "#FFFFFF", // 0
      "#F5F5F5", // 1
      "#E6E7E9", // 2
      "#E0E0E0", // 3
      "#D3D3D3", // 4
      "#CCCCCC", // 5
      "#3A3D40", // 6
      "#23262B", // 7
      "#1D1F21", // 8
      "#000000", // 9
    ],
    danteDeepGreen: [
      "#C7C7C8", // 0
      "#A5A5A6", // 1
      "#838485", // 2
      "#616264", // 3
      "#3F4142", // 4
      "#1D1F21", // 5 = danteDeepGreen
      "#18191B", // 6
      "#121315", // 7
      "#0D0E0E", // 8
      "#070808", // 9
    ],
    greyScale: [
      "#FFFFFF", // 0 = white
      "#F5F5F5", // 1 = danteLightGrey
      "#E6E7E9", // 2 = buttonWhite
      "#E0E0E0", // 3
      "#D3D3D3", // 4 = danteGrey
      "#CCCCCC", // 5
      "#3A3D40", // 6
      "#23262B", // 7 = buttonBlack
      "#1D1F21", // 8
      "#000000", // 9 = black
    ],
  },

  primaryShade: {
    light: 5,
    dark: 4,
  },

  spacing: {
    xs: rem(4),
    sm: rem(12),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
  }
});

export const customTheme = mergeMantineTheme(DEFAULT_THEME, rootTheme);
