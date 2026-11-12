import puppeteer from "puppeteer";

const BASE = process.env.BASE_URL || "http://localhost:5199/soke-portofolio/";

const routes = [
  { path: "#/", expect: "soke's" },
  { path: "#/about", expect: "ABOUT ME" },
  { path: "#/projects", expect: "Building Management System" },
  { path: "#/projects/bms-rsud-ciawi", expect: "SYSTEM ARCHITECTURE" },
  { path: "#/projects/does-not-exist", expect: "NOT FOUND" },
  { path: "#/skills", expect: "Microcontroller" },
  { path: "#/resume", expect: "RESUME" },
  { path: "#/contact", expect: "syauqid46@gmail.com" },
  { path: "#/bogus-route", expect: "soke's" },
];

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--autoplay-policy=no-user-gesture-required"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

const errors = [];
page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
page.on("console", (m) => {
  if (m.type() === "error") errors.push(`console: ${m.text()}`);
});
page.on("requestfailed", (r) => errors.push(`reqfail: ${r.url()}`));

const results = [];
for (const r of routes) {
  errors.length = 0;
  await page.goto(BASE + r.path, { waitUntil: "networkidle2", timeout: 30000 });
  await new Promise((res) => setTimeout(res, 900));
  const text = await page.evaluate(() => document.body.innerText || "");
  const rootChildren = await page.evaluate(
    () => document.getElementById("root")?.childElementCount ?? -1
  );
  results.push({
    route: r.path,
    ok: text.includes(r.expect),
    rootChildren,
    textLen: text.length,
    errors: [...errors].slice(0, 3),
  });
}

await browser.close();

const failed = results.filter((r) => !r.ok || r.rootChildren < 1);
console.log(JSON.stringify({ results, failed: failed.length }, null, 2));
process.exit(failed.length ? 1 : 0);
