type Cls = string;
type ClsInput = Record<Cls, boolean> | Cls | undefined;
export function cls(...classNames: Array<ClsInput>) {
  return classNames
    .flatMap((input) => {
      if (typeof input !== 'object') return input;
      return Object.entries(input).map(([cls, isTrue]) => isTrue && cls);
    })
    .filter(Boolean)
    .join(' ')
    .trim();
}
