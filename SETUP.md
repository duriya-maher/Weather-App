# ⚡ QUICK SETUP GUIDE

## 📦 Installation Steps

### 1. Extract the ZIP file
Right-click the ZIP and extract it to a folder.

### 2. Open Terminal/Command Prompt

**Windows (PowerShell or CMD):**
```bash
cd C:\Users\dream\Downloads\weather-app-pixel-perfect-final\weather-app-pixel-perfect
```

**Mac/Linux:**
```bash
cd ~/Downloads/weather-app-pixel-perfect-final/weather-app-pixel-perfect
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```

The app will open automatically at `http://localhost:3000` 🚀

---

## ⚠️ IMPORTANT: 

**You MUST be inside the `weather-app-pixel-perfect` folder before running `npm install`!**

The package.json is located at:
```
weather-app-pixel-perfect-final/
  └── weather-app-pixel-perfect/    <-- Go here!
      ├── package.json               <-- This is what npm needs
      ├── vite.config.js
      ├── index.html
      └── src/
```

---

## 🐛 Troubleshooting

### Error: "Could not read package.json"
**Solution:** You're in the wrong directory. Use:
```bash
cd weather-app-pixel-perfect
```

### Error: "npm not found"
**Solution:** Install Node.js from https://nodejs.org/

### Port 3000 already in use
**Solution:** The app will automatically use port 3001

---

## ✅ Verify Installation

After `npm install`, you should see a `node_modules/` folder created.

Run `npm run dev` and the browser should open automatically!

---

## 📚 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

---

**Need help? Check README.md for full documentation!**
