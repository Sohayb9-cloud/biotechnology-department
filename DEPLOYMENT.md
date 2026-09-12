# Deploying with VS Code + GitHub Pages

## Local test
- Open the folder in VS Code.
- Install the Live Server extension if desired.
- Right-click `index.html` → Open with Live Server.

## GitHub
### Option A — Browser upload
- Create a GitHub repository named `biotechnology-department`.
- Make it Public.
- Upload the contents of this folder (not the outer folder itself).
- Ensure `index.html` is at repository root.

### Option B — Git
```bash
git init
git add .
git commit -m "Initial Biotechnology Department website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/biotechnology-department.git
git push -u origin main
```

### GitHub Pages
Repository → Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/ (root)` → Save.

## Important
Before official publication:
- Replace the placeholder institutional email.
- Add only verified current faculty data.
- Add laboratory names only when officially verified.
- Add projects/research files only with publication permission.
- Review every Arabic translation with a fluent academic Arabic reviewer.
- Replace concept illustrations with official photographs where appropriate.
