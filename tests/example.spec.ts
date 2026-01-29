import { test, expect } from '@playwright/test';

test('addition flow from home page', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Go to Addition' }).click();
  await expect(page).toHaveURL(/\/addition$/);

  const firstNumber = Math.floor(Math.random() * 1000);
  const secondNumber = Math.floor(Math.random() * 1000);

  const result = firstNumber + secondNumber;

  await page.getByLabel('First number').fill(firstNumber.toString());
  await page.getByLabel('Second number').fill(secondNumber.toString());
  await page.getByRole('button', { name: 'Add' }).click();

  await expect(page.getByText(`Sum: ${result}`)).toBeVisible();
});
