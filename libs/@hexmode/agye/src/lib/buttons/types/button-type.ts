export const allButtonTypes = [ 'button', 'submit' ] as const;
export type ButtonType = typeof allButtonTypes[number];
