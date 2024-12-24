export type ColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600;

export interface ThemeColors {
  orange: {
    primary: string;
    secondary: string;
  };
  black: string;
  white: string;
  gray: Record<ColorShade, string>;
}

export interface Theme {
  colors: ThemeColors;
}