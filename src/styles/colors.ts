import { hsl } from 'polished';

export type PaletteColorLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type GradientLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const white = ({ pure }: { pure?: boolean } = {}) =>
  pure ? hsl(0, 0, 1.0) : hsl(230, 0.15, 0.95);

export const black = ({ pure }: { pure?: boolean } = {}) =>
  pure ? hsl(0, 0, 0.0) : hsl(320, 0.15, 0.15);

export const gray = (level: PaletteColorLevel = 5) =>
  hsl(220, 0.25, level * 0.1);

export const obsiBluePurple = ({
  gradientLevel = 0
}: {
  gradientLevel?: GradientLevel;
}) => hsl(230 + ((320 - 230) * gradientLevel) / 10, 0.3, 0.5);
