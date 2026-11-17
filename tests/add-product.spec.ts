import {test, expect} from '@playwright/test';
// test case untuk menambahkan produk baru ke aplikasi POS
test('Add Product', async ({ page }) => {
  // masuk kehalaman dashboard
  await page.goto('http://localhost:5173/product');

  await page.getByRole('button', { name: 'Tambah Produk' }).click();

  await page.goto('http://localhost:5173/product/add');

  await page.locator('input#productName').fill('Produk A');
  await page.locator('textarea#description').fill('ini produk A');
  await page.locator('select#vendor').selectOption({ index: 2 });
  await page.locator('input#sellPrice').fill('10000');
  await page.locator('input#stockQty').fill('50');

  await page.getByRole('button', { name: 'Simpan' }).click();


  await page.goto('http://localhost:5173/product');
  // tunggu hingga halaman produk muncul
await expect(page.locator('text=Produk A')).toBeVisible();


});