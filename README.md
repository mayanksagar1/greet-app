# Greeting API and Frontend Setup Guide

This project consists of a simple backend API built with Node.js and Express, and a frontend built with React, Vite, and Tailwind CSS. The frontend interacts with the backend API to display a greeting message.

## Project Structure
```
project-root/
│
├── backend/        # Node.js & Express Backend
│   └── server.js
│
├── frontend/       # React Frontend
│   └── src/
│       └── App.jsx
│
└── README.md
```

## Backend Setup

### Prerequisites
- Node.js and npm installed

### Installation
```bash
cd backend
npm install express cors dotenv
```

### Environment Variables
Create a `.env` file in the `backend` directory:
```
PORT=5000
```

### Running the Server
```bash
node server.js
```
The server will run on `http://localhost:5000` or the port specified in the `.env` file.

## Frontend Setup

### Prerequisites
- Node.js and npm installed

### Installation
```bash
cd frontend
npm install
```

### Environment Variables
Create a `.env` file in the `frontend` directory:
```
VITE_BACKEND_URL=http://localhost:5000
```

### Running the React App
```bash
npm run dev
```
The frontend will run on `http://localhost:5173` (Vite default port). Make sure your backend server is running before testing the frontend.

## Usage
1. Open the frontend in your browser.
2. Enter your name in the input field.
3. Click the **Get Greeting** button.
4. The response message from the backend will be displayed.

## Deployment

### Vercel Deployment
1. Push the frontend and backend code to separate GitHub repositories (or a monorepo).
2. Visit [Vercel](https://vercel.com/).
3. Import each repository and deploy them.
4. Update the frontend API endpoint in the `.env` file to match the deployed backend URL.

## API Endpoint
- `GET /api/greet?name=YourName`
- Response (Success):
  ```json
  { "message": "Hello, YourName! Welcome to Younglabs." }
  ```
- Response (Error):
  ```json
  { "error": "Name is required." }
  ```

## Dependencies
### Backend
- express
- cors
- dotenv

### Frontend
- react
- vite
- tailwindcss

## Notes
- Ensure CORS is enabled in your backend when deploying to production.
- Update API base URL in the frontend `.env` file when deploying to production.

