import { css } from "styled-components";

export const theme = {
  colors: {
    focus: "#CEBEFE",
    background: "#F6F7F9",

    primary: {
      10: "#FFFFFF",
      20: "#D6E4FD",
      30: "#AEC8FC",
      40: "#85A8F8",
      50: "#658DF1",
      60: "#3563E9",
      70: "#264BC8",
      80: "#1A37A7",
      90: "#102587",
      100: "#0A196F",
    },

    secondary: {
      20: "#E0E9F4",
      30: "#C3D4E9",
      40: "#90A3BF",
      50: "#596780",
      60: "#1A202C",
      70: "#131825",
      80: "#0D121F",
      90: "#080C19",
      100: "#040815",
    },

    success: {
      20: "#F5FCD2",
      30: "#E8FAA6",
      40: "#D3F178",
      50: "#BCE455",
      60: "#9CD323",
      70: "#7FB519",
      80: "#659711",
      90: "#4C7A0B",
      100: "#3B6506",
    },

    danger: {
      20: "#FFE7D3",
      30: "#FFC8A6",
      40: "#FFA37A",
      50: "#FF7F59",
      60: "#FF4423",
      70: "#DB2719",
      80: "#B71112",
      90: "#930B16",
      100: "#7A0619",
    },

    warning: {
      20: "#FFF8D7",
      30: "#FFEFB0",
      40: "#FFE488",
      50: "#FFD96B",
      60: "#FFC73A",
      70: "#DBA32A",
      80: "#B7821D",
      90: "#936312",
      100: "#7A4D0B",
    },

    info: {
      20: "#DCF3FF",
      30: "#BAE5FF",
      40: "#98D3FF",
      50: "#7EC2FF",
      60: "#54A6FF",
      70: "#3D81DB",
      80: "#2A60B7",
      90: "#1A4393",
      100: "#102E7A",
    },
  },

  text: {
    xs: css`
      font-size: 0.75rem;
      line-height: normal;
    `,
    sm: css`
      font-size: 0.875rem;
      line-height: 140%;
    `,
    base: css`
      font-size: 1rem;
      line-height: 140%;
    `,
    lg: css`
      font-size: 1.125rem;
      line-height: 140%;
    `,
    "2lg": css`
      font-size: 1.25rem;
      line-height: 140%;
    `,
    xl: css`
      font-size: 1.5rem;
      line-height: 120%;
    `,
    "2xl": css`
      font-size: 2rem;
      line-height: 140%;
    `,
    "3xl": css`
      font-size: 2.25rem;
      line-height: 120%;
    `,
    "4xl": css`
      font-size: 2.5rem;
      line-height: 120%;
    `,
  },
} as const;
