import { test, expect } from '@playwright/test';
// test case untuk login ke aplikasi POS
test('Login POS', async ({ page }) => {
  // masuk kehalaman login
  await page.goto('http://localhost:5173/login');

  // isi form login dengan email dan password
  await page.locator('input#email').fill('ozzi@example.com');
  await page.locator('input#password').fill('password123');

  // klik tombol login
  await page.locator('button[type="submit"]').click();

  // tunggu hingga halaman dashboard muncul
  await expect(page).toHaveURL('http://localhost:5173/dashboard');
});

