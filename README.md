AI-Powered Ticketing System

A full-stack, event-driven ticketing system with AI-assisted ticket triage, role-based access, and automated notifications.

Features

User Authentication: Secure signup/login with JWT; role-based access (user, moderator, admin)

Event-Driven Workflows:

user/signup → sends welcome emails

ticket/created → AI ticket triage, priority assignment, moderator assignment, and email notifications

AI Integration: Google Gemini analyzes tickets → summary, priority, relevant skills, and helpful notes

Ticket Management: Create, read, update, delete tickets with role-based views

Database: MongoDB schemas for Users & Tickets

Frontend: React + protected routes for secure navigation

Deployment: Backend on Render, Frontend on Vercel

Tech Stack

Backend: Node.js, Express, MongoDB, JWT, Inngest

Frontend: React, React Router

AI: Google Gemini via Inngest Agent Kit

Email: Nodemailer + Mailtrap

Deployment: Render, Vercel

Installation

Clone the repository:

git clone https://github.com/your-username/ai-ticketing-system.git
cd ai-ticketing-system


Install dependencies:

npm install


Create a .env file with the following keys:

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


Start the server:

npm run dev


Frontend: Configure .env for API URL and start React app:

npm start

Usage

Sign up as a new user → triggers user/signup Inngest event

Create a ticket → triggers ticket/created Inngest event

AI automatically analyzes ticket, assigns priority & moderator, and sends email notification

License

MIT License

I can also draft a short “Project Overview” section with a flow diagram showing:

Signup → Inngest Event → AI Triage → Moderator Assignment → Email Notification

That makes the README more visual and recruiter-friendly.
