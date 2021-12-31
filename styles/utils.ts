import { BREAKPOINTS } from '@theme';

export const mediaQuery = (size: keyof typeof BREAKPOINTS) => {
  return (style: TemplateStringsArray | String) =>
    `@media screen and (min-width: ${BREAKPOINTS[size]}) {${style}}`
}

