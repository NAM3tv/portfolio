# 🚀 Glavan Portfolio | Full-Stack Engineering Insights

A high-performance, developer-centric portfolio designed to showcase technical expertise through a **Problem/Solution** methodology. Built with the latest bleeding-edge web technologies to ensure speed, scalability, and a professional developer experience.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
* **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
* **Runtime & Deployment:** Docker (Multi-stage Standalone Build)
* **Animations:** Hardware-accelerated CSS transitions 
* **Integrations:** Cal.com (Scheduling), Microsoft Clarity (User Analytics)

---

## ✨ Key Features

* **Data-Driven Architecture:** All content (career history, projects, skills) is decoupled from the UI logic using centralized JSON files (`/data`). This allows for instant updates without modifying core components.
* **Problem/Solution Paradigm:** Project descriptions are structured to highlight the initial business challenge and the specific technical solution implemented, showcasing a results-oriented mindset.
* **Industrial-Grade Dockerization:** Optimized `Dockerfile` using multi-stage builds and the Next.js `standalone` output mode to generate ultra-lightweight production containers.
* **Performance First:** Zero layout shift (CLS) via `next/font` optimization and a minimal CSS footprint thanks to Tailwind 4's engine.
* **Type Safety:** Fully typed interfaces to ensure data consistency across the application and eliminate common runtime errors.

---

## 📦 Installation & Setup

### Prerequisites
* Node.js 20.x or higher
* Docker (Optional, for production deployment)

### Local Development
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/NAM3tv/portfolio.git](https://github.com/NAM3tv/portfolio.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```

### Production Build (Docker)
To build and run the optimized container:
```bash
docker build -t glavan-portfolio .
docker run -p 3000:3000 glavan-portfolio