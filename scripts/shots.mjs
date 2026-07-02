import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = "http://localhost:3200";
const OUT = "/Users/nicholasbrighenti/aiplease-site/.qa-screenshots";
mkdirSync(OUT, { recursive: true });

const routes = [
  ["home", "/"],
  ["services", "/services"],
  ["service-pillar", "/services/strategy-foresight"],
  ["work", "/work"],
  ["work-detail", "/work/freight-dispatch-copilot"],
  ["about", "/about"],
  ["projects", "/projects"],
  ["hrplease", "/projects/hrplease"],
  ["contact", "/contact"],
  ["privacy", "/privacy"],
  ["terms", "/terms"],
];

const viewports = [
  ["desktop", 1440, 900],
  ["mobile", 375, 812],
];

// Mobile shots only for the most layout-sensitive pages.
const mobilePages = new Set([
  "home",
  "services",
  "service-pillar",
  "work",
  "about",
  "projects",
  "hrplease",
  "contact",
]);

async function waitForServer() {
  for (let i = 0; i < 90; i++) {
    try {
      const res = await fetch(BASE);
      const body = await res.text();
      // Confirm this is OUR site, not another app on the port.
      if (res.ok && /aiplease/i.test(body)) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error("aiplease dev server did not come up on " + BASE);
}

await waitForServer();

const browser = await chromium.launch();
for (const [vp, w, h] of viewports) {
  const context = await browser.newContext({
    viewport: { width: w, height: h },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  for (const [name, route] of routes) {
    if (vp === "mobile" && !mobilePages.has(name)) continue;
    await page.goto(`${BASE}${route}`, { waitUntil: "networkidle", timeout: 60000 });
    // Force scroll-reveal end-state so the static capture shows final layout
    // regardless of in-view animation timing. (Capture-only; not the live site.)
    await page.addStyleTag({
      content:
        "*{opacity:1 !important; transform:none !important; animation:none !important; transition:none !important;}",
    });
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${OUT}/${name}-${vp}.png`, fullPage: true });
    console.log(`shot ${name}-${vp}`);
  }
  await context.close();
}
await browser.close();
console.log("done");
