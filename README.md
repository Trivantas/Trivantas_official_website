# Trivantas Official Website

A full-stack web application for Trivantas B2B industrial solutions, featuring an interactive product catalog, custom quotation and inquiry forms, interactive customer chatbot, and a secure admin dashboard.

---

## Project Structure

```text
Trivantas_official_website-main/
├── frontend/                # React + Vite + Tailwind CSS + TypeScript frontend
│   ├── src/                 # Application source code
│   │   ├── assets/          # Product and component images
│   │   ├── components/      # UI components & customer chatbot
│   │   ├── data/            # Product specifications and catalog data
│   │   ├── hooks/           # Custom React hooks
│   │   ├── pages/           # Page views & Admin dashboard
│   │   └── lib/             # Utility helpers
│   ├── public/              # Static assets, PDFs, and icons
│   ├── index.html           # HTML template
│   ├── vite.config.ts       # Vite configuration
│   ├── tailwind.config.ts   # Tailwind configuration
│   ├── package.json         # Frontend dependencies and scripts
│   └── .env.example         # Frontend environment template
│
├── backend/                 # Node.js + Express + MongoDB backend
│   ├── config/              # Database connection
│   ├── controllers/         # Request controllers
│   ├── middleware/          # JWT authentication middleware
│   ├── models/              # Mongoose data models
│   ├── routes/              # Express API routes
│   ├── utils/               # Email service (Nodemailer)
│   ├── server.js            # Express server entry point
│   ├── package.json         # Backend dependencies and scripts
│   └── .env.example         # Backend environment template
│
├── .env.example             # Master environment template
├── package.json             # Root monorepo scripts
└── README.md
```

---

## Getting Started

### 1. Installation

Install dependencies for both frontend and backend:

```bash
# Option A: From root (recommended)
npm run install:all

# Option B: Individually
cd frontend && npm install
cd ../backend && npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory (or use `.env` inside `frontend/` and `backend/`):

```bash
cp .env.example .env
```

Fill in your MongoDB connection URI, JWT secret, admin credentials, and SMTP details.

### 3. Running in Development

You can run both frontend and backend concurrently from the root directory:

```bash
# Start both frontend and backend
npm run dev

# Or run frontend only
npm run dev:frontend

# Or run backend only
npm run dev:backend
```

- **Frontend URL**: `http://localhost:8080` (or `http://localhost:5173`)
- **Backend API URL**: `http://localhost:5000`

### 4. Production Build

To build the frontend for production:

```bash
# From root
npm run build

# Or directly in frontend
cd frontend
npm run build
```
