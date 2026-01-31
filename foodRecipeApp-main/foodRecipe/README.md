# Food Blogs (foodRecipe)

Simple MERN-style recipe app (Express backend + React frontend).

## Quick start

Prerequisites:
- Node.js and npm
- MongoDB running (Windows service name: `MongoDB`)

Start backend:

```powershell
cd "c:\Users\gracy\Downloads\foodRecipeApp-main\foodRecipeApp-main\foodRecipe\backend"
npm install
npm run dev
```

Start frontend:

```powershell
cd "c:\Users\gracy\Downloads\foodRecipeApp-main\foodRecipeApp-main\foodRecipe\frontend\food-blog-app"
npm install
npm run dev
```

Open: http://localhost:5173 (frontend) — backend API: http://localhost:5000

## Environment
Copy or create `.env` in the `backend` folder with:

```
PORT=5000
CONNECTION_STRING="mongodb://localhost:27017/foodRecipe"
SECRET_KEY="your_secret"
```

## Notes
- `node_modules` should be ignored; they were removed from the repo.
- If you accidentally commit large files, I can help purge history (BFG / git filter-repo).

---
README created and pushed.
