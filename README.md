# Measurement Settings - React + Tailwind (Vite)

This small project recreates the Measurement Settings UI shown in the screenshots using React and Tailwind CSS. It uses local state (no API) for profiles and demonstrates add/edit/delete flows with a right-side form and modals.

Quick start (Windows PowerShell):

1. Install dependencies

```powershell
cd d:\internship
npm install
```

2. Run dev server

```powershell
npm run dev
```

3. Build

```powershell
npm run build
```

Deploy: Connect this repo to Vercel and it will detect the Vite app. Use the `build` script and `dist` output.

Files of interest:

- `src/components/MeasurementSettings.jsx` — main layout and coordination
- `src/components/ProfileList.jsx`, `ProfileItem.jsx` — left list
- `src/components/ProfileForm.jsx` — right-side Add/Edit form
- `src/components/Modal.jsx` — simple modal wrapper
- `src/data/sampleProfiles.js` — local data

Notes:

- Tailwind CSS is included via `postcss` and `tailwindcss` entries; run `npm install` to fetch them.
- The UI is intentionally simple and uses Tailwind utilities for layout.
