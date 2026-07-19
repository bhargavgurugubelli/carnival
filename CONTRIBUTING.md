# 🤝 Contributing to Carnival Cafe

First off, thank you for considering contributing to Carnival Cafe! It is people like you who make this template a fantastic starter resource for developers and restaurant owners alike.

By participating in this project, you agree to abide by our code of conduct and contribution guidelines.

---

## 🧭 How Can I Contribute?

### 1. Reporting Bugs
- Search existing issues to ensure the bug hasn't been reported yet.
- If it's a new issue, use the **Bug Report** template to submit it.
- Include clear reproduction steps, expected behavior, screenshots if visual, and your local browser environment.

### 2. Suggesting Enhancements & Features
- We love new ideas! If you want to suggest new components (e.g., booking calendars, map layouts, multi-page routing), please open an issue using the **Feature Request** template.
- Explain the utility of the feature and how it benefits the template ecosystem.

### 3. Submitting Pull Requests (PRs)
- PRs can be bug fixes, style improvements, features, or performance enhancements.
- Please follow the workflow outlined below to submit your code changes.

---

## 🛠️ Local Development Setup

To set up a local workspace for developing and testing your changes:

1. **Fork the Repository**: Click the "Fork" button on the top-right of the repository page.
2. **Clone your Fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/carnival.git
   cd carnival
   ```
3. **Add Upstream Remote**:
   ```bash
   git remote add upstream https://github.com/bhargavgurugubelli/carnival.git
   ```
4. **Install Dependencies**:
   ```bash
   npm install
   ```
5. **Start Dev Server**:
   ```bash
   npm run dev
   ```

---

## 🌿 Git Branching & Workflow

Always keep your `main` branch synced with the upstream repository:
```bash
git checkout main
git pull upstream main
```

When you are ready to make a change:
1. **Create a local branch**:
   ```bash
   git checkout -b feature/your-feature-name
   # OR
   git checkout -b bugfix/issue-description
   ```
2. **Commit your changes**:
   - Write clear, descriptive commit messages.
   - Example: `feat: add reservation modal popup` or `fix: correct layout displacement on mobile viewport`.
3. **Push changes to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
4. **Create a Pull Request**: Go to the original repository on GitHub, and click "New Pull Request" using your pushed branch.

---

## 🎨 Code Style Guidelines

To keep the template clean, high quality, and easy to read, please adhere to:

- **Component Structure**: Keep UI components inside `src/components` and custom hooks in `src/hooks`.
- **Styling**: Use utility classes in Tailwind CSS as configured in `tailwind.config.js`. Avoid writing ad-hoc raw CSS values. If a new color or font is required, add it as a design token in the Tailwind config.
- **Aesthetics & Performance**: Ensure that new features or style modifications match the dark espresso and gold theme. Avoid heavy animations that drop page FPS (maintain 60fps scrolling).
- **A11y (Accessibility)**: Use semantic HTML layout tags (`<header>`, `<section>`, `<article>`, `<button>`) and correct `aria-label` tags on buttons.

---

## 📋 Pull Request Checklist

Before submitting your PR, please make sure:
- [ ] Your code builds successfully (`npm run build`).
- [ ] No syntax errors or visual layout regressions are present.
- [ ] Your changes are fully responsive on mobile, tablet, and desktop screens.
- [ ] You have updated the `README.md` if your change introduces new customizations or dependencies.
