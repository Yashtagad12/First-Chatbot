# 🤖 First ChatBot – AI Assistant for CodingNepal

An AI-powered chatbot trained on **CodingNepal’s channel data**, designed to instantly answer questions about coding tutorials, web technologies, and the CodingNepal community.

---

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 📌 Overview

**First ChatBot** is built to serve learners of the CodingNepal YouTube channel. It leverages OpenAI’s API to provide instant, accurate answers about CodingNepal’s tutorials, technologies, and resources.

This project demonstrates how AI can be trained on domain-specific data to create a personalized assistant for a coding education platform.

---

## ✨ Features

- 💬 **Instant Q&A** – Answers questions about CodingNepal tutorials and content
- 📚 **Knowledge Base** – Covers HTML, CSS, JavaScript, ReactJS, PHP, and more
- 🎥 **Channel Awareness** – Provides insights about CodingNepal’s mission and creator messages
- ☕ **Support Integration** – Shares info about “Buy Me a Coffee” support page
- 🌍 **Accessible Learning** – Free, high-quality coding education for learners worldwide

---

## 🛠 Tech Stack

- **Frontend:** React / Vite, React Hooks
- **Styling:** CSS , Google Fonts API
- **AI Engine:** OpenAI API (Gemini API)
- **Version Control:** Git & GitHub

---

## 🚀 Installation

Clone the repository and install dependencies:

- NOTE:- Generate the api key from 'https://aistudio.google.com/app/api-keys'. After generating the free API key, just copy the it and paste it in the .env file, where the placeholder for api key is given (Make sure that not to leak the personal api key anywhere, even when fork is done for this repository.Just generate a new api key everytime to run the project on a new local device.)

```bash
git clone https://github.com/your-username/first-chatbot.git
cd first-chatbot
npm install
npm run dev
```

---

## 📂 Project Structure

```chatbot/
├── node_modules/          # Installed dependencies
├── public/
│   └── chatbot-icon.png   # Public assets (favicon, icons, etc.)
├── src/
│   ├── Components/        # React components for chatbot UI
│   │   ├── Chatboticon.jsx   # Chatbot icon component
│   │   ├── Chatform.jsx      # Chat input form component
│   │   └── ChatMessage.jsx   # Chat message display component
│   ├── App.jsx            # Root React component
│   ├── companyInfo.js     # Company-related data or helper functions
│   ├── index.css          # Global stylesheet
│   └── main.jsx           # Application entry point
├── .env                   # Environment variables
├── .gitignore             # Git ignore rules
├── eslint.config.js       # ESLint configuration
├── index.html             # Main HTML template
├── package-lock.json      # Dependency lock file
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
└── vite.config.js         # Vite configuration
```

---

## 🖼 Screenshots

<p align="center">
  <img src="chatbot/src/assets/Screenshorts/1.png" alt="chatbot Image" />
</p>

<p align="center">
  <img src="chatbot/src/assets/Screenshorts/2.png" alt="chatbot Image" />
</p>

<p align="center">
  <img src="chatbot/src/assets/Screenshorts/3.png" alt="chatbot Image" />
</p>

---

## 📜 License

This project is licensed under the MIT License – feel free to use and modify it.

---

## 📧 Contact

Created by Yash Tagad – inspired by CodingNepal.

---
