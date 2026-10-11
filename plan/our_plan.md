# Implementation Plan: Economist Portfolio Website on GitHub Pages

## Goal Description
Build a modern, academic yet clean portfolio website for **Siwat Teimtad** (Economist) to be hosted on **GitHub Pages**. 
The website will feature a sleek dark mode design with JetBrains Mono typography, highlight the hero quote *"Master Economics, the Simple Way."*, incorporate the provided logo (`logan.png`), include contact info (`dx@outlook.com`), and showcase two comprehensive research essays (>1,000 words each) on:
1. *Key Economic Concepts of Economics in One Lesson (Henry Hazlitt, 1946)*
2. *Game Theory: Strategic Interactions, Equilibria, and Market Design*

---

## User Review Required
> [!NOTE]
> - **Multi-page Architecture**: The essays are structured as dedicated long-form reading pages (`hazlitt.html` and `game-theory.html`) linked seamlessly from the homepage cards, complete with reading progress bars, sticky headers, and back navigation.
> - **Logo**: `logan.png` located in `my_work/` will be integrated into the navigation header.

---

## Architecture & File Structure

```text
my_work/
├── plan/
│   └── our_plan.md           # This planning document
├── index.html                # Main landing page (Hero, About Me, Project Cards, Contact)
├── hazlitt.html              # Project 1: Hazlitt's Economics in One Lesson (1,000+ words)
├── game-theory.html          # Project 2: Game Theory & Strategic Economics (1,000+ words)
├── style.css                 # Global styling, dark theme, JetBrains Mono font, responsive layout
├── script.js                 # Reading progress bar, smooth scrolling, copy-to-clipboard contact
└── logan.png                 # Brand logo
```

---

## Proposed Changes & Specifications

### 1. Typography & Theme System (`style.css`)
- **Font**: Google Fonts `JetBrains Mono` (`wght@300;400;500;600;700`).
- **Color Tokens**:
  - Background: `#0d1117` (canvas) & `#161b22` (sections/cards).
  - Borders: `#30363d` (subtle separation).
  - Primary Accent: `#58a6ff` (terminal blue) & `#3fb950` (emerald).
  - Typography: `#f0f6fc` (headings), `#c9d1d9` (body), `#8b949e` (muted metadata).
- **Responsive Layout**: Flexbox navigation, CSS Grid for project cards, max-width prose container for 65–75 character optimal reading line lengths.

---

### 2. Main Page (`index.html`)
- **Header**: Navigation bar with `logan.png`, brand title, navigation anchors (`#projects`, `#about`, `#contact`).
- **Hero Section**:
  - Quote: *"Master Economics, the Simple Way."*
  - Name & Title: **Siwat Teimtad** — *Economist & Strategic Thinker*.
  - Call to action: "Explore Research" & "Get in Touch".
- **Projects Grid**:
  - Card 1: *Key economic concepts of Economics in One Lesson (Henry Hazlitt, 1946)* with abstract, word count tag (`1,200+ words`), and link to `hazlitt.html`.
  - Card 2: *Game Theory: Strategic Interactions, Equilibria, and Market Design* with abstract, word count tag (`1,200+ words`), and link to `game-theory.html`.
- **About Me Section**:
  - Biography outlining research philosophy in economics, market mechanisms, and strategic interactions.
  - Contact card featuring Name (**Siwat Teimtad**) and Email (**dx@outlook.com**) with a one-click copy button.
- **Footer**: Copyright, JetBrains Mono attribution, and GitHub Pages hosting tag.

---

### 3. Project 1: Hazlitt Essay (`hazlitt.html`)
**Word Count Target**: > 1,000 words.
**Key Sections**:
1. *Introduction & The Core Lesson*: Henry Hazlitt's foundational thesis—tracing long-run secondary consequences across all groups rather than immediate gains for special interests.
2. *The Broken Window Fallacy*: Analysis of Frédéric Bastiat's parable, the seen vs. the unseen, and modern destruction fallacies (disaster spending, stimulus illusions).
3. *Public Works & Taxation*: The economic reality of diverted resources; bridges and government projects evaluated against what taxpayers would have otherwise created.
4. *Tariffs, Subsidies, and the Mirage of Protectionism*: Special interest privilege vs. overall consumer welfare and international purchasing power.
5. *Price Controls & Minimum Wage Mandates*: The unintended consequences of artificial price ceilings and floors (shortages, black markets, disemployment of marginal laborers).
6. *The Inflation Mirage*: Monetary expansion as hidden taxation, the Cantillon effect, and purchasing power erosion.
7. *Conclusion & Synthesis*: Applying Hazlitt’s timeless lesson to contemporary economic policy.

---

### 4. Project 2: Game Theory Essay (`game-theory.html`)
**Word Count Target**: > 1,000 words.
**Key Sections**:
1. *Introduction*: The revolution of strategic interdependence in modern economics from von Neumann, Morgenstern, and John Nash.
2. *Foundational Concepts & Strategic Form Games*: Players, strategies, payoff matrices, dominant strategies, and Pareto efficiency.
3. *Nash Equilibrium*: Pure vs. mixed strategy equilibria; existence theorems and strategic stability.
4. *The Prisoner's Dilemma & Repeated Interactions*: Tragedy of individual rationality vs. collective welfare; infinite horizons, discount factors ($\delta$), and the Folk Theorem.
5. *Extensive Form Games & Backward Induction*: Sequential decision trees, subgame perfect Nash equilibria (SPNE), and credible vs. non-credible threats.
6. *Information Asymmetry & Signaling*: Spence's labor market signaling, Akerlof's lemons market, and adverse selection.
7. *Mechanism Design & Auction Theory*: Reverse game theory—engineering incentives, Vickrey (second-price) auctions, and practical applications in spectrum allocation and digital ad exchanges.
8. *Conclusion*: Game theory as the foundational grammar of modern microeconomic strategy.

---

### 5. Interactive JavaScript (`script.js`)
- **Reading Progress Bar**: Dynamic top bar on essay pages indicating scroll percentage.
- **Copy-to-Clipboard**: Copy button for `dx@outlook.com` with feedback toast ("Email copied!").
- **Smooth Navigation**: Accessible anchor links with offset compensation for the fixed header.

---

## Step-by-Step GitHub Pages Deployment Guide

1. **Local Repository Setup**:
   ```powershell
   cd C:\Users\Admin\Desktop\my_work
   git init
   git add .
   git commit -m "feat: portfolio site with Hazlitt and Game Theory research essays"
   ```

2. **Create Remote Repository on GitHub**:
   - Go to [GitHub](https://github.com/new).
   - Create a repository named `portfolio` (or `<your-username>.github.io`).
   - Set visibility to **Public**.

3. **Push to Remote**:
   ```powershell
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

4. **Activate GitHub Pages**:
   - Open repository **Settings** → **Pages**.
   - Under **Build and deployment**:
     - Source: `Deploy from a branch`
     - Branch: `main` / `/ (root)`
   - Click **Save**.
   - Live URL: `https://<your-username>.github.io/<repo-name>/`.

---

## Verification Plan

### Automated Verification
- Run a PowerShell word-count validation script to ensure both `hazlitt.html` and `game-theory.html` exceed the 1,000-word requirement.
- Verify asset paths (`logan.png`, `style.css`, `script.js`) resolve correctly without 404s.

### Manual Verification
- Verify typography: JetBrains Mono rendered correctly across all headings, code blocks, and body text.
- Verify dark mode contrast and mobile responsiveness.
- Verify one-click email copy functionality and navigation across pages.
