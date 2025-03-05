const getSvgPathFromStroke = (stroke: number[][]): string => {
  if (!stroke.length) return '';

  const d = stroke.reduce<string[]>(
    (acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length];
      acc.push(`${x0},${y0}, ${(x0 + x1) / 2},${(y0 + y1) / 2}`);
      return acc;
    },
    []
  );

  return `M${d.join(' ')}`;
};

export { getSvgPathFromStroke };