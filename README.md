# Design for your Home — AI-Enhanced Interior Design Portfolio

A high-fidelity, conversion-focused landing page for an interior design studio. This version elevates the traditional portfolio into a functional web application by integrating a custom AI Design Assistant and a live backend for lead generation.

🔗 **Live Demo:** [https://design-for-your-home.vercel.app/](https://design-for-your-home.vercel.app/)

## 🚀 Key Features

- **AI Design Assistant**: A custom-integrated tool that allows users to describe room ideas and receive instant feasibility and mood analysis via a Python/FastAPI backend.
- **Live Lead Generation**: A fully functional contact form connected to a Render-hosted API, handling real-time data submission and user feedback.
- **Dynamic Service Grid**: A modern 2x2 card layout with custom iconography and hover effects.
- **Enhanced Gallery Interaction**: Custom Lightbox logic for high-resolution project viewing.
- **Performance Optimized**: Built with vanilla technologies to ensure a perfect Lighthouse score and sub-second load times.

## 🛠 Tech Stack

- **Frontend**: Semantic HTML5, CSS3 (Custom Properties & Grid), Vanilla JavaScript.
- **Backend Integration**: RESTful API communication using the Fetch API.
- **AI Backend**: Custom Python/FastAPI service hosted on Render, utilizing Large Language Models for design analysis.
- **Deployment**: Vercel (Frontend) and Render (Backend).

## 📂 Project Structure

`assets/
css/style.css # Modularized design tokens and component styles
js/main.js # Consolidated logic for UI and API interactions
images/ # Optimized project assets
index.html # Clean, SEO-optimized structure
`

## 📖 Case Study: From Portfolio to Platform

### The Challenge

Modern interior design clients seek engagement, not just a static gallery. The studio needed a way to provide immediate value to visitors before the first consultation.

### The Solution

I transformed a standard portfolio into an interactive experience by:

1. **Adding AI Engagement**: Implemented an "AI Design Assistant" to lower the barrier to entry for potential clients.
2. **Standardizing Styles**: Removed all inline CSS to follow the "Separation of Concerns" principle, making the codebase maintainable and professional.
3. **Live API Connection**: Replaced simulated form submissions with a live backend, ensuring the studio never misses a lead.

### Outcome

A professional-grade, full-stack portfolio that demonstrates both design sensibility and modern technical proficiency.
