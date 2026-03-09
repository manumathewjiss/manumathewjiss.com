# Manu Mathew Jiss — Portfolio

Personal portfolio website for **Manu Mathew Jiss**, AI Engineer & ML Researcher.

**Live site:** [manumathewjiss.com](https://manumathewjiss.com)

---

## Tech Stack

- **Framework:** Next.js 16 (Pages Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

---

## Project Structure

```
portfolio/
├── components/        # All UI components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Research.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/              # Content data files
│   ├── projects.ts
│   ├── research.ts
│   └── experience.ts
├── pages/             # Next.js pages
│   ├── _document.tsx
│   └── index.tsx
├── public/            # Static assets
│   └── profile.jpg    # Add your photo here
└── styles/
    └── globals.css
```

---

## Running Locally

```bash
# 1. Navigate to the portfolio folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Adding Your Profile Photo

1. Place your photo at `public/profile.jpg`
2. In `components/Hero.tsx`, replace the initials placeholder:

```tsx
// Find this block and replace with:
<img
  src="/profile.jpg"
  alt="Manu Mathew Jiss"
  className="w-full h-full object-cover"
/>
```

## Adding Your Resume

Place your resume PDF at `public/resume.pdf`. The "Download Resume" button will automatically work.

---

## Deploying to Vercel

### Option 1 — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 2 — GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Set **Root Directory** to `portfolio`
5. Framework preset: **Next.js** (auto-detected)
6. Click **Deploy**

---

## Connecting Your Domain (manumathewjiss.com)

1. In Vercel Dashboard → your project → **Settings → Domains**
2. Add `manumathewjiss.com` and `www.manumathewjiss.com`
3. Vercel will show you DNS records to add
4. In your domain registrar (GoDaddy, Namecheap, etc.):
   - Add an **A record**: `@` → `76.76.21.21`
   - Add a **CNAME record**: `www` → `cname.vercel-dns.com`
5. Wait 10–60 minutes for DNS propagation
6. Vercel automatically provisions an SSL certificate

---

## Customization

### Update Personal Info
Edit these files to update your content:
- `data/projects.ts` — project cards
- `data/research.ts` — research & publications
- `data/experience.ts` — work experience

### Update Social Links
Search for `manumathewjiss` across component files to update GitHub, LinkedIn, and Google Scholar URLs.

### Color Theme
The yellow accent color (`#F5C518`) is defined in `tailwind.config.js` as `accent`. Change it there to update the entire site theme.

---

## Build Commands

```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Create optimized production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

© 2026 Manu Mathew Jiss
