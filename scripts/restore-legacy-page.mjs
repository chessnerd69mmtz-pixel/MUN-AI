import fs from "node:fs";
import path from "node:path";

// The historical "legacy/part*.b64" archive is a ZIP split into base64 chunks.
// Older startup logic incorrectly passed those ZIP bytes to gunzip, which made
// every npm dev/build/start command fail before Next.js could render.
//
// The complete legacy UI is now restored under public/munai/ and is loaded by
// app/page.tsx. Keep this script as a safe compatibility check for old launchers.
const root = process.cwd();
const page = path.join(root, "app", "page.tsx");
const legacyUi = path.join(root, "public", "munai", "index.html");

if (!fs.existsSync(page)) {
  throw new Error("MUN AI startup check failed: app/page.tsx is missing.");
}
if (!fs.existsSync(legacyUi)) {
  throw new Error("MUN AI startup check failed: public/munai/index.html is missing.");
}

console.log("MUN AI UI assets verified; skipping legacy archive reconstruction.");
