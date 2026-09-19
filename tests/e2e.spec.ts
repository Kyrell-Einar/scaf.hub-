import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const routes = ['', 'downloads/', 'content/', 'development/', 'docs/', 'community/', 'about/', 'en/', 'es/'];

for (const route of routes) {
  test(`route ${route || 'home'} loads`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator('h1')).toHaveCount(1);
  });
}

test('mobile menu opens, closes and restores focus only when open', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('');
  const button = page.getByRole('button', { name: 'Menu' });
  await button.click();
  await expect(button).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(button).toHaveAttribute('aria-expanded', 'false');
  await expect(button).toBeFocused();
});

test('content filters update visible cards', async ({ page }) => {
  await page.goto('content/');
  const allCount = await page.locator('[data-gallery-item]').count();
  await page.getByRole('button', { name: 'Builds' }).click();
  const visible = page.locator('[data-gallery-item]:visible');
  expect(await visible.count()).toBeLessThan(allCount);
  await expect(page.locator('[data-gallery-count]')).not.toHaveText(String(allCount));
});

test('main pages pass automated accessibility scan', async ({ page }) => {
  for (const route of ['', 'downloads/', 'content/', 'development/', 'docs/', 'community/']) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  }
});

test('no broken internal navigation links on home', async ({ page, request }) => {
  await page.goto('');
  const hrefs = await page.locator('a[href^="/scaf.hub-"]').evaluateAll((links) => [...new Set(links.map((a) => (a as HTMLAnchorElement).href))]);
  for (const href of hrefs) {
    const response = await request.get(href);
    expect(response.status(), href).toBeLessThan(400);
  }
});
