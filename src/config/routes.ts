import queryString from 'query-string';

export const PATHS = ['/', '/wallet/:id'] as const;

export const ROUTES = PATHS.reduce(
  function (result, item) {
    result[item] = item;
    return result;
  },
  {} as Record<RoutesPath, RoutesPath>,
);

export type ExtractRouteParams<T> = string extends T
  ? Record<string, string>
  : // eslint-disable-next-line @typescript-eslint/no-unused-vars
  T extends `${infer _Start}:${infer Param}/${infer Rest}`
  ? { [k in Param | keyof ExtractRouteParams<Rest>]: string }
  : // eslint-disable-next-line @typescript-eslint/no-unused-vars
  T extends `${infer _Start}:${infer Param}`
  ? { [k in Param]: string }
  : {};

export type RoutesPath = (typeof PATHS)[number];

export type PathParams<P extends RoutesPath> = ExtractRouteParams<P>;

export const buildUrl = <P extends RoutesPath>(path: P, params: PathParams<P>): string => {
  let ret: string = path;

  // Upcast `params` to be used in string replacement.
  const paramObj: { [i: string]: any } = params;

  for (const key of Object.keys(paramObj)) {
    if (key === 'query') {
      ret = ret?.replace(`:${key}`, queryString.stringify(paramObj[key]));
    } else {
      ret = ret?.replace(`:${key}`, paramObj[key]);
    }
  }

  return ret;
};
