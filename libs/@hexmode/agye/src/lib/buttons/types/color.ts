export const allColors = [ 'primary', 'secondary', 'warn', 'inherit' ] as const;

export type Color = (typeof allColors)[number];
