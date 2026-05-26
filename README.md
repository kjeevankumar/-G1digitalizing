# G1 Digitalizing — AI Engineering & Growth Systems

G1 Digitalizing is a premium engineering and growth agency. We build systems that automate operations, deploy AI, and scale your business to align directly with your revenue targets.

From custom machine learning integrations to high-conversion automated funnels and AI galleries, we engineer high-performance software and growth architectures for businesses, events, and scaling brands.

---

## 🚀 Core Capabilities

### 1. AI Deployment & Custom ML
* Custom machine learning integrations tailored to business workflows.
* Custom AI image galleries, interactive interfaces, and private processing systems.
* LLM integrations for intelligent agentic support and content generation.

### 2. Operations & Workflow Automation
* Elimination of manual overhead through custom system integration and APIs.
* Bespoke client inquiry and booking pipelines directly connected to sheets, CRMs, and messaging systems.
* Secure and fast auto-saving secure data layers with status tracking.

### 3. High-Performance Web Engineering
* Built on **React 19** and **Vite 8** for sub-second, blazing-fast load times.
* Standard-setting modern dark interface styled with vanilla **Tailwind CSS**.
* Liquid-smooth UX utilizing **Framer Motion** and **Lenis Scroll** for custom premium page physics.
* **SEO Optimized**: Fully integrated JSON-LD structured data for Google Rich Results, descriptive title/meta-tags, and semantic layouts.

### 4. Revenue & Growth Architectures
* Precision landing pages designed explicitly to capture high-value enterprise leads.
* Integrated smart forms with live connection status feedback and phone-formatting utilities.
* Structured B2B funnels aligning directly with your organic and paid acquisition efforts.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Core Framework** | React 19 | Enterprise-level reactive user interfaces |
| **Build Tool** | Vite 8 | Lightning-fast development & optimized tree-shaken production bundles |
| **Styling** | Tailwind CSS | Sleek, harmonized dark-mode aesthetic styling |
| **Animations** | Framer Motion | Smooth, organic transition physics and scroll reveals |
| **Scrolling** | Lenis Scroll | Unified custom smooth-scrolling experience across modern browsers |
| **SEO / Search** | JSON-LD & OpenGraph | Automated index optimization for premium organic visibility |

---

## 💻 Local Development

### 1. Clone the repository and install dependencies:
```bash
npm install
```

### 2. Run the development server locally:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build the production package:
```bash
npm run build
```
Vite will compile and optimize the assets into the `dist/` directory, ready to be served.

---

## 🌐 Deployment Configuration

This project is configured for automated, high-availability deployments.

### GitHub Pages (Automated Deployment)
We have configured a fully automated **GitHub Actions** CI/CD pipeline (`.github/workflows/deploy.yml`):
* Every push to the `main` branch automatically triggers a fresh production build.
* The built assets are compiled and pushed to the `gh-pages` branch.
* To activate: Go to your **GitHub Settings > Pages**, and set the Source Branch to `gh-pages`.

### Vercel Serverless Hosting
* Fully compatible with serverless routing through `vercel.json`.
* Single-page routing (`rewrites`) and asset cache headers are pre-configured.
* Every push to `main` instantly generates a live preview.
