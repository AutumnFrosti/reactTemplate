declare module 'styled-components' {
    export interface Theme {
      primaryColor: string;
      secondaryColor: string;
      fontSize: string;
    }
  
    export function createGlobalStyle(
      css: TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): GlobalStyleComponent<{}, Theme>;
  
    export function css(
      first: TemplateStringsArray | CSSObject | InterpolationFunction<Theme>,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation;
  }
  