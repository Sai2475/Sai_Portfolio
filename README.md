# Sai Sukumar — Personal Portfolio Website

> **AI/ML Engineer · Deep Learning Researcher · Builder**  
> B.Tech in CSE (AIML) at SRM Institute of Science and Technology · 2x IEEE Published Researcher · Associate Software Engineer (ASE) Offer at Accenture

A fast personal portfolio website engineered with clean semantic HTML5, a bespoke dark-mode editorial CSS design system, and a modular JavaScript data architecture.

---

## 🌟 Key Highlights & Design Decisions

- **Editorial & Cinematic Aesthetics**: Crafted with a near-black palette (`#090a0f`), warm ivory typography (`#f5f2eb`), restrained amber/orange accents (`#ff6f3c`), subtle technical grid lines, and corner registration marks.
- **Visual Hero Anchor**: Sai Sukumar's portrait is presented in an architectural frame with a status pill indicator, corner brackets, and warm rim lighting.
- **Peer-Reviewed IEEE Research Spotlight**: Dedicated showcase for both published IEEE papers:
  1. *Automated Breast Cancer Classification in Ultrasound Imaging Using Dense and Global Feature Fusion* (92.46% Validation Accuracy, IEEE Xplore: [11502589](https://ieeexplore.ieee.org/document/11502589))
  2. *A Hybrid Deep Learning Model for Potato Leaf Disease Classification using Transfer Learning and Attention Mechanism* (91.80% Classification Accuracy, IEEE Xplore: [11140741](https://ieeexplore.ieee.org/document/11140741))
- **Live Deployed AI Systems**:
  - **EstatePulse**: RAG-based real estate assistant (LangChain, ChromaDB, Hugging Face BGE embeddings, Groq LLM, Streamlit).
  - **GridScan**: F1 driver detection & profiling web app (OpenCV, LLaMA 3, Flask).
  - **DataWhiz**: Autonomous AI data analyst with sandboxed execution (LLaMA 3.3, Groq, Pandas, Plotly).
- **Interactive Capabilities**:
  - Category filters for deployed work (All, GenAI & RAG, Computer Vision).
  - Real-time search across the skills matrix.
  - 1-click clipboard copy for email (`saisanjay3000@gmail.com`) with instant toast feedback.
  - Interactive quick message dispatcher.
  - Accessible mobile drawer navigation.
- **Zero Fragile Dependencies**: Built entirely with pure standard Web standards (HTML5, Modern CSS, ES6 Modules). It will never break due to package lock drift, node version mismatch, or bundler deprecations.

---

## 📁 Repository Structure

```text
Sai_Portfolio/
├── index.html              # Main HTML5 entry document & SEO meta tags
├── css/
│   └── style.css           # Bespoke design system (tokens, grid, typography, components)
├── js/
│   ├── data.js             # Centralized portfolio data (edit everything here!)
│   └── main.js             # Dynamic DOM hydration, filters, search, and interactions
├── assets/
│   ├── sai-portrait.jpg    # High-resolution hero portrait
│   └── Sai_Sukumar_Resume.pdf # Downloadable resume PDF
├── package.json            # Lightweight dev scripts
└── README.md               # Documentation and hosting guide
```

---

## 🚀 Running Locally

You can preview the website locally using any standard static file server:

### Option 1: Using Python (Pre-installed)
```bash
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Using npm / npx
```bash
npm start
# or
npx serve .
```

### Option 3: VS Code / IDE Live Server
Simply right-click `index.html` in VS Code and select **"Open with Live Server"**.

---

## ✏️ Customizing Your Portfolio

All personal information, links, projects, and papers are separated cleanly into `js/data.js`. You do **not** need to touch `index.html` or `css/style.css` to update your details!

### 1. Updating Projects
Open `js/data.js` and edit or append objects to `PORTFOLIO_DATA.projects`:
```javascript
{
  id: "project-id",
  title: "Project Name",
  subtitle: "Short Subtitle",
  category: "GenAI & RAG",
  date: "Month Year",
  summary: "Brief description of the problem and solution...",
  techStack: ["Python", "PyTorch", "Docker"],
  highlights: ["Highlight 1", "Highlight 2"],
  pipeline: [
    { step: "01", label: "Data Ingestion" },
    { step: "02", label: "Model Inference" },
    { step: "03", label: "Web UI" }
  ],
  githubUrl: "https://github.com/Sai2475/repo",
  liveUrl: "https://demo.app/",
  statusText: "Live Demo"
}
```

### 2. Updating Research Papers
Edit `PORTFOLIO_DATA.publications` in `js/data.js` with new venues, citation links, or model architectures.

### 3. Replacing Your Portrait or Resume
- To update your photo: replace `assets/sai-portrait.jpg` with your new image.
- To update your resume: replace `assets/Sai_Sukumar_Resume.pdf` with your new resume PDF.

---

## 🌐 How to Host Your Portfolio

### 1. GitHub Pages (Recommended — 100% Free & Built-In)
Since this repository is already connected to `https://github.com/Sai2475/Sai_Portfolio`:

1. Commit and push your files to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete production portfolio website"
   git push origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** → **Pages** (under "Code and automation").
   - Under **Build and deployment**:
     - Source: **Deploy from a branch**
     - Branch: **`main`** / Folder: **`/ (root)`**
   - Click **Save**.
3. In ~60 seconds, your portfolio will be live at:
   `https://sai2475.github.io/Sai_Portfolio/`

*(Optional: You can also connect your own custom domain like `saisukumar.com` directly in GitHub Pages settings!)*

---

### 2. Vercel (Alternative)
1. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
2. Import `Sai_Portfolio`.
3. Framework Preset: **Other** (leave Root Directory as `./`).
4. Click **Deploy**. Vercel will deploy it in seconds with a free `.vercel.app` domain.

---

### 3. Netlify (Alternative)
1. Go to [netlify.com](https://netlify.com) and click **"Add new site"** → **"Import an existing project"**.
2. Select GitHub and choose `Sai_Portfolio`.
3. Publish directory: leave as root (`.`).
4. Click **Deploy site**.

---

## 📬 Contact & Profiles

- **Email**: [saisanjay3000@gmail.com](mailto:saisanjay3000@gmail.com)
- **LinkedIn**: [linkedin.com/in/sai-sukumar2407](https://www.linkedin.com/in/sai-sukumar2407/)
- **GitHub**: [github.com/Sai2475](https://github.com/Sai2475)
- **Location**: Chennai, Tamil Nadu, India
