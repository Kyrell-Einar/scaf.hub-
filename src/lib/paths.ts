export type Locale = 'pt' | 'en' | 'es';

export const to = (route = '') => {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  const clean = route.replace(/^\/+/, '');
  return `${base}${clean}`;
};

export const localizedTo = (locale: Locale, route = '') => {
  const clean = route.replace(/^\/+|\/+$/g, '');
  if (locale === 'pt') return to(clean ? `${clean}/` : '');
  return to(`${locale}/${clean ? `${clean}/` : ''}`);
};

export const localeFromPath = (pathname: string): Locale => {
  const relative = pathname.replace(import.meta.env.BASE_URL, '/');
  if (relative === '/en' || relative.startsWith('/en/')) return 'en';
  if (relative === '/es' || relative.startsWith('/es/')) return 'es';
  return 'pt';
};

export const routeFromPath = (pathname: string) => {
  let relative = pathname.replace(import.meta.env.BASE_URL, '').replace(/^\/+|\/+$/g, '');
  relative = relative.replace(/^(en|es)(\/|$)/, '');
  return relative;
};
