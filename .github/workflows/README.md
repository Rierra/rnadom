# Automated Deployment Setup

This workflow automatically deploys your site to Hostinger whenever you push to the `main` or `master` branch.

## Setup Instructions

### 1. Push your code to GitHub
If you haven't already, initialize git and push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Get your Hostinger FTP credentials
- Log into your Hostinger control panel
- Go to **Files** → **FTP Accounts** (or **File Manager**)
- Note down:
  - FTP Host (usually `ftp.yourdomain.com` or an IP)
  - FTP Username
  - FTP Password
  - FTP Directory (usually `/public_html` or `/domains/yourdomain.com/public_html`)

### 3. Add GitHub Secrets
1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add these three secrets:

   - **Name:** `HOSTINGER_FTP_HOST`
     **Value:** Your FTP host (e.g., `ftp.laurapascualconcierge.com`)
   
   - **Name:** `HOSTINGER_FTP_USER`
     **Value:** Your FTP username
   
   - **Name:** `HOSTINGER_FTP_PASSWORD`
     **Value:** Your FTP password

### 4. Update the server directory (if needed)
Edit `.github/workflows/deploy.yml` and change the `server-dir` line if your Hostinger directory is different from `/public_html/`.

### 5. Test it!
- Make a change to your code
- Commit and push:
  ```bash
  git add .
  git commit -m "Test deployment"
  git push
  ```
- Go to **Actions** tab in GitHub to watch the deployment
- Your site should update automatically! 🎉

## Manual Deployment
You can also trigger deployments manually from the **Actions** tab → **Deploy to Hostinger** → **Run workflow**.
