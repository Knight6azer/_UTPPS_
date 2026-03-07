# Ujjwal Tiwari — Personal Portfolio

A modern, dark-themed portfolio website showcasing the journey of Ujjwal Tiwari as an Electronics & Computer Science Engineer and aspiring Data Scientist.

🔗 **Live:** [utpps.vercel.app](https://utpps.vercel.app/)

## ✨ Features

- **Dark Theme**: Full-site near-black aesthetic (`#0a0a0f`) with blue accent glows, matching hero to footer.
- **Animated Hero**: Typewriter role animation, glowing portrait, floating skill badges, particle dots, and stat counters.
- **GitHub Coding Activity Section** *(nav: "Coding Activity")*: GitHub stats card, streak widget, SVG donut chart of top languages by repo, animated language bar chart (pure CSS — no external API dependency), and animated skill proficiency bars — all sourced from the Knight6azer GitHub profile (11 public repos).
- **Technical Skills**: Categorized skill badges for Programming, Data Science, and Embedded Systems.
- **Professional Experience**: 3 internship cards with colored accent borders.
- **Project Showcase**: 9 featured projects linking to their GitHub repositories.
- **Certifications & Achievements**: 8+ certifications and key leadership awards.
- **Contact Form**: Integrated with **EmailJS** for direct messaging.
- **Fully Responsive**: Bootstrap 5 grid, `clamp()` typography, mobile-friendly navbar.

## 🗂 Sections

| # | Section | ID |
|---|---|---|
| 1 | Hero + About | `#about` |
| 2 | About Details | *(same flow as hero)* |
| 3 | Education | `#education` |
| 4 | Professional Experience | `#experience` |
| 5 | Key Projects | `#projects` |
| 6 | Technical Skills | `#skills` |
| 7 | Certifications & Achievements | `#certifications` |
| 8 | GitHub Coding Activity | `#coding-activity` |
| 9 | Contact | `#contact` |

## 🛠 Technology Stack

- **Frontend**: HTML5, CSS3 (custom dark design system), Vanilla JavaScript
- **Framework**: Bootstrap 5.3.2
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts — Inter
- **Contact**: EmailJS Browser SDK v3
- **GitHub Stats**: github-readme-stats, github-readme-streak-stats

## 🚀 Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Knight6azer/PPSlite.git
   ```
2. **Open `index.html`** directly in your browser — no build step required.

## ⚙️ Personalization

- **EmailJS**: Replace `User ID` and `Service ID` in the `<script>` block at the bottom of `index.html`.
- **GitHub username**: Update `Knight6azer` in the `#coding-activity` section and stats image URLs.
- **Profile photo**: Replace `ujjwal_photo.jpg` in the project root.
- **Links**: Update `href` attributes for LinkedIn, GitHub, and email throughout `index.html`.

## 📄 License

MIT License — open source and free to use.
