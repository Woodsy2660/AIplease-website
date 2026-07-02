import { chromium } from "playwright";

const BASE = "http://localhost:3200";
const OUT = "/Users/nicholasbrighenti/aiplease-site/.qa-screenshots";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1000, height: 1000 } });
await page.goto(`${BASE}/contact?product=hrplease`, { waitUntil: "networkidle" });

// 1) Empty submit → should surface validation errors (no success).
await page.click('button[type="submit"]');
await page.waitForTimeout(300);
const errors = await page.locator('[role="alert"]').count();
const prefilled = await page.locator("#goal").inputValue();
console.log("validation errors shown:", errors);
console.log("hrplease prefill present:", /HRplease/.test(prefilled));

// 2) Fill valid + submit → success panel.
await page.fill("#name", "Alex Taylor");
await page.fill("#email", "alex@example.com.au");
await page.fill("#goal", "We want to automate dispatch.");
await page.click('button[type="submit"]');
await page.waitForTimeout(1200);
const success = await page.getByText("Enquiry received").count();
console.log("success panel shown:", success > 0);
await page.screenshot({ path: `${OUT}/contact-success.png` });

await browser.close();
console.log("done");
