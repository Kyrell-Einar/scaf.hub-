import type { APIRoute } from 'astro';
import { updates } from '../data/updates';
import { releases } from '../data/releases';
import { localizableRoutes } from '../i18n';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const origin = new URL('/scaf.hub-/', site).toString().replace(/\/$/, '');
  const mainRoutes = ['', 'downloads', 'content', 'development', 'docs', 'community', 'about'];
  const urls = [
    ...mainRoutes.map((route) => `${origin}/${route ? route + '/' : ''}`),
    ...updates.map((item) => `${origin}/updates/${item.slug}/`),
    ...releases.map((item) => `${origin}/releases/${item.slug}/`),
    ...(['en','es'] as const).flatMap((lang) => localizableRoutes.map((route) => `${origin}/${lang}/${route ? route + '/' : ''}`))
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
