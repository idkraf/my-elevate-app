# 🏠 My Elevate App

A real estate web app built with **Next.js 15**, **TypeScript**, **Firebase**, and **Tailwind CSS**.

This README includes all helper steps and setup.

---

## 📦 Project Structure

```
my-elevate-app/
├── public/
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── components/         # Header, Footer, Hero, PropertyCard, Gallery, etc.
│   ├── pages/              # index.tsx, about.tsx, contact.tsx, properties/, blog/
│   ├── styles/             # globals.css, Home.module.css, Property.module.css
│   ├── lib/                # firebase.ts (config & init)
│   └── utils/              # formatDate.ts
├── .env.local              # Environment variables (keep secret!)
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

🚀 Getting Started
git clone https://github.com/idkraf/my-elevate-app.git
cd my-elevate-app

# Install dependencies
npm install

```
git clone https://github.com/idkraf/my-elevate-app.git
cd my-elevate-app
```

# Install dependencies
```
npm install
```

✨ Tailwind CSS Setup
If you don’t have tailwind.config.js, run:
```
npx tailwindcss init -p
```

Edit tailwind.config.js:
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

In src/styles/globals.css add:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

🔥 Firebase Setup
- Place your Firebase config in src/lib/firebase.ts.
- Use .env.local (do NOT commit this file):

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
# etc.
```
- Tip: Use Firestore collections like /properties, /blogs, /settings.

🧰 ESLint & Prettier
Run ESLint:
```
npm run lint
```

Format code with Prettier:
```
npm run format
```

If you need to (re)init ESLint:
```
npm init @eslint/config@latest
```

🧼 Clear npm cache & reinstall (if needed)
```
npm cache clean --force
rd /s /q node_modules        # or: Remove-Item -Recurse -Force node_modules
del package-lock.json
npm install
```

🛠 Dev Scripts
```
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Lint the code
npm run format    # Format the code
```

✅ Notes & Tips
- Use next/link instead of <a> to fix lint errors.
- Use next/image instead of <img> for better optimization.
- Replace any types in state & utils with proper types.
- Avoid both app/ and pages/ folders to prevent route conflicts.
- Always keep .env.local out of git.


🔥 Firebase Import Data
- Make import.js
```
const admin = require("firebase-admin");
const fs = require("fs");

// Load JSON data
const data = JSON.parse(fs.readFileSync("seed-data.json", "utf8"));

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(require("./serviceAccountKey.json")),
});

const db = admin.firestore();

// Import properties
async function importData() {
  try {
    // Import properties
    for (const [id, prop] of Object.entries(data.properties)) {
      await db.collection("properties").doc(id).set(prop);
      console.log(`Imported property: ${id}`);
    }

    // Import blogs
    for (const [id, blog] of Object.entries(data.blogs)) {
      await db.collection("blogs").doc(id).set(blog);
      console.log(`Imported blog: ${id}`);
    }

    // Import settings (single document)
    await db.collection("settings").doc("main").set(data.settings);
    console.log(`Imported settings`);

    console.log("✅ Import complete!");
  } catch (error) {
    console.error("❌ Import failed:", error);
  }
}

importData();
```

- make serviceAccountKey.json From Firebase → Project settings → Service accounts → Generate new private key.
```
{
  "type": "",
  "project_id": "",
  "private_key_id": "",
  .....
  "universe_domain": ""
}
```

- make seed-data.json (example)
```
{
  "properties": {
    "prioryHouse": {
      "title": "Priory House",
      "description": "Luxury apartments in Birmingham",
      "location": "Birmingham, UK",
      "priceFrom": 250000,
      "priceTo": 500000,
      "thumbnail": "/images/prioryhouse.jpeg",
      "gallery": [
        "/images/prioryhouse.jpeg",
        "/images/prioryhouse.jpeg"
      ],
      "features": [
        "1 & 2 bedroom apartments",
        "Parking available",
        "Gym"
      ],
      "status": "available",
      "createdAt": { "_seconds": 1710000000, "_nanoseconds": 0 }
    }
  },
  "blogs": {
    "newProjectLaunch": {
      "title": "New Project Launch",
      "content": "Detailed blog content here...",
      "thumbnail": "/images/prioryhouse.jpeg",
      "createdAt": { "_seconds": 1710000000, "_nanoseconds": 0 }
    }
  },
  "settings": {
    "siteTitle": "Elevate Property Group",
    "heroImage": "https://example.com/images/hero.jpg",
    "contactEmail": "info@example.com",
    "socials": {
      "facebook": "https://facebook.com/elevateproperty",
      "instagram": "https://instagram.com/elevateproperty"
    }
  }
}
```

- run the import data
```
node import.js
```
