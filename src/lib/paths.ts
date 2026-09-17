export const to = (route = '') => {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  const clean = route.replace(/^\/+/, '');
  return `${base}${clean}`;
};
