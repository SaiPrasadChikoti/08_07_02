import testData from '../../test-data.json';
const { test, expect } = require('../../fixtures/walker_fixture.js');
const { heal } = require('../../fixtures/inline_healer.js');

test('TestOrder @regression @sanity', async ({ page }) => {
  // Navigate to application
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  // Username
  await heal(page, 'username field', 'visible', null,
    () => page.locator('input[aria-label="Enter your username or email address"]'));
  await heal(page, 'username field', 'fill', testData.enterYourUsernameOrEmail,
    () => page.locator('input[aria-label="Enter your username or email address"]'));
  await expect(page.locator('input[aria-label="Enter your username or email address"]')).toHaveValue(testData.enterYourUsernameOrEmail);

  // Continue
  await heal(page, 'continue button', 'visible', null,
    () => page.locator('button[aria-label="Continue"]'));
  await heal(page, 'continue button', 'click', null,
    () => page.locator('button[aria-label="Continue"]'));

  // Password
  await heal(page, 'password field', 'visible', null,
    () => page.locator('input[aria-label="Password"]'));
  await heal(page, 'password field', 'fill', testData.password,
    () => page.locator('input[aria-label="Password"]'));
  await expect(page.locator('input[aria-label="Password"]')).toHaveValue(testData.password);

  // Sign In
  await heal(page, 'sign in button', 'visible', null,
    () => page.locator('#next'));
  await heal(page, 'sign in button', 'click', null,
    () => page.locator('#next'));

  await page.waitForLoadState('domcontentloaded');

  // Client Selection
  await heal(page, 'client ab text', 'visible', null,
    () => page.locator('span').filter({ hasText: /^client AB$/ }).first());
  await heal(page, 'client ab text', 'click', null,
    () => page.locator('span').filter({ hasText: /^client AB$/ }).first());

  // Order Menu
  await heal(page, 'order link', 'visible', null,
    () => page.getByRole('link', {name: 'Order',exact: true}));
  await heal(page, 'order link', 'click', null,
    () => page.getByRole('link', {name: 'Order',exact: true}));

  await page.waitForTimeout(7000);

  // New Order
  await heal(page, 'new order button', 'visible', null,
    () => page.locator('[data-testid="order-list-new-button"]'));
  await heal(page, 'new order button', 'click', null,
    () => page.locator('[data-testid="order-list-new-button"]'));

  // Stop 1 Location
  await heal(page, 'stop 1 location dropdown', 'visible', null,
    () => page.locator('xpath=//form[@id="stop-1-content-location"]/div[1]/div[1]/div[1]/button[@type="button"]'));
  await heal(page, 'stop 1 location dropdown', 'click', null,
    () => page.locator('xpath=//form[@id="stop-1-content-location"]/div[1]/div[1]/div[1]/button[@type="button"]'));

  await heal(page, 'stop 1 location option', 'visible', null,
    () => page.locator('li[aria-label="Haldex Brake Products Corporation"]'));
  await heal(page, 'stop 1 location option', 'click', null,
    () => page.locator('li[aria-label="Haldex Brake Products Corporation"]'));

  // Stop 1 Date
  await heal(page, 'stop 1 choose date button', 'visible', null,
    () => page.locator('button[aria-label="Choose Date"]').first());
  await heal(page, 'stop 1 choose date button', 'click', null,
    () => page.locator('button[aria-label="Choose Date"]').first());

  await heal(page, 'stop 1 date', 'visible', null,
    () => page.locator('span').filter({ hasText: /^19$/ }).first());
  await heal(page, 'stop 1 date', 'click', null,
    () => page.locator('span').filter({ hasText: /^19$/ }).first());

  // Stop 1 Appointment Required
  await heal(page, 'stop 1 appointment required', 'check', null,
    () => page.locator('#stop-1-content-appointment-required'));
  await expect(page.locator('#stop-1-content-appointment-required')).toBeChecked();

  // Stop 2 Location
  await heal(page, 'stop 2 location dropdown', 'visible', null,
    () => page.locator('xpath=//form[@id="stop-2-content-location"]/div[1]/div[1]/div[1]/button[@type="button"]'));
  await heal(page, 'stop 2 location dropdown', 'click', null,
    () => page.locator('xpath=//form[@id="stop-2-content-location"]/div[1]/div[1]/div[1]/button[@type="button"]'));

  await heal(page, 'stop 2 location option', 'visible', null,
    () => page.locator('li[aria-label="Novapath Supply Chain Systems"]').first());
  await heal(page, 'stop 2 location option', 'click', null,
    () => page.locator('li[aria-label="Novapath Supply Chain Systems"]').first());

  await heal(page, 'stop 2 appointment required', 'check', null,
    () => page.locator('#stop-2-content-appointment-required'));
  await expect(page.locator('#stop-2-content-appointment-required')).toBeChecked();

  // Line Item Description
  await heal(page, 'line item description dropdown', 'visible', null,
    () => page.locator('xpath=//div[@id="line-item-num-1-content"]//button[@type="button"]'));
  await heal(page, 'line item description dropdown', 'click', null,
    () => page.locator('xpath=//div[@id="line-item-num-1-content"]//button[@type="button"]'));

  await heal(page, 'line item description option', 'visible', null,
    () => page.locator('li[aria-label="This is for testing"]'));
  await heal(page, 'line item description option', 'click', null,
    () => page.locator('li[aria-label="This is for testing"]'));

  // Handling
  await heal(page, 'handling input', 'visible', null,
    () => page.locator('#handling-0'));
  await heal(page, 'handling input', 'fill', testData.handlingInput,
    () => page.locator('#handling-0'));

  // Weight
  await heal(page, 'weight input', 'visible', null,
    () => page.locator('#weight-0'));
  await heal(page, 'weight input', 'fill', testData.weightInput,
    () => page.locator('#weight-0'));

  // Bill To
  await heal(page, 'bill to dropdown', 'visible', null,
    () => page.locator('xpath=//form[@id="bill-to-content-location"]/div[1]/div[1]/div[1]/button[@type="button"]'));
  await heal(page, 'bill to dropdown', 'click', null,
    () => page.locator('xpath=//form[@id="bill-to-content-location"]/div[1]/div[1]/div[1]/button[@type="button"]'));

  await heal(page, 'bill to option', 'visible', null,
    () => page.locator('li[aria-label="Novapath Supply Chain Systems"]').first());
  await heal(page, 'bill to option', 'click', null,
    () => page.locator('li[aria-label="Novapath Supply Chain Systems"]').first());

  // Direction
  await heal(page, 'direction dropdown', 'visible', null,
    () => page.locator('span[aria-label="Select Direction"]'));
  await heal(page, 'direction dropdown', 'click', null,
    () => page.locator('span[aria-label="Select Direction"]'));

  await heal(page, 'direction option', 'visible', null,
    () => page.locator('li[aria-label="Inbound"]'));
  await heal(page, 'direction option', 'click', null,
    () => page.locator('li[aria-label="Inbound"]'));

  // Billing Terms
  await heal(page, 'billing terms dropdown', 'visible', null,
    () => page.locator('span[aria-label="Select Billing Terms"]'));
  await heal(page, 'billing terms dropdown', 'click', null,
    () => page.locator('span[aria-label="Select Billing Terms"]'));

  await heal(page, 'billing terms option', 'visible', null,
    () => page.locator('li[aria-label="3rd Party"]'));
  await heal(page, 'billing terms option', 'click', null,
    () => page.locator('li[aria-label="3rd Party"]'));

  // Internal Notes
  await heal(page, 'internal notes textarea', 'visible', null,
    () => page.locator('#internal-notes'));
  await heal(page, 'internal notes textarea', 'fill', testData.stop1ContentInternalNotes,
    () => page.locator('#internal-notes'));
  await expect(page.locator('#internal-notes')).toHaveValue(testData.stop1ContentInternalNotes);

  // Customer Routed
  await heal(page, 'customer routed checkbox', 'check', null,
    () => page.locator('#customer-routed'));
  await expect(page.locator('#customer-routed')).toBeChecked();

  // Create Order
  await heal(page, 'create order button', 'visible', null,
    () => page.locator('button[aria-label="Create Order for client AB"]'));
  await heal(page, 'create order button', 'click', null,
    () => page.locator('button[aria-label="Create Order for client AB"]'));

  await page.waitForLoadState('domcontentloaded');
});