🚀 AI-Powered Ticketing System

A full-stack, event-driven ticketing system with AI-assisted ticket triage, role-based access, and automated notifications.

✨ Features

🔐 User Authentication
Secure signup/login with JWT; role-based access (user, moderator, admin)

⚡ Event-Driven Workflows

user/signup → Sends welcome emails ✉️

ticket/created → AI ticket triage 🤖, priority assignment, moderator assignment, and email notifications

🧠 AI Ticket Analysis
Google Gemini analyzes tickets → summary, priority, relevant skills, and helpful notes

🎟️ Ticket Management
Create, read, update, delete tickets with role-based views

🗄️ Database
MongoDB schemas for Users & Tickets

💻 Frontend
React + protected routes for secure navigation

☁️ Deployment
Backend on Render, Frontend on Vercel

🛠️ Tech Stack

Backend: Node.js, Express, MongoDB, JWT, Inngest

Frontend: React, React Router

AI: Google Gemini via Inngest Agent Kit

Email: Nodemailer + Mailtrap

Deployment: Render, Vercel

⚙️ Installation

1. Clone the repository:
git clone https://github.com/your-username/ai-ticketing-system.git
cd ai-ticketing-system
2.Install dependencies:
npm install
3. Create a .env file with the following keys:
PORT=3000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
INNGEST_EVENT_KEY=<your-inngest-event-key>
INNGEST_SIGNING_KEY=<your-inngest-signing-key>
GEMINI_API_KEY=<your-google-gemini-key>
MAILTRAP_SMTP_HOST=<your-mailtrap-host>
MAILTRAP_SMTP_PORT=<your-mailtrap-port>
MAILTRAP_SMTP_USER=<your-mailtrap-user>
MAILTRAP_SMTP_PASS=<your-mailtrap-pass>
4. Start the backend:
   npm run dev
5. Frontend: Configure .env for API URL and start React app:
   npm start
   
🏃 Usage

1. Sign up → triggers user/signup Inngest event ✨
2. Create a ticket → triggers ticket/created event ⚡
3. Create a ticket → triggers ticket/created event ⚡
Summarizes ticket

Assigns priority

Determines related skills

Assigns a moderator

Sends notification email 📧

📈 Project Workflow Diagram

User Signup / Ticket Creation
          │
          ▼
   Inngest Event Triggered
          │
          ▼
     AI Ticket Analysis
          │
          ▼
  Moderator Assignment + Email Notification



