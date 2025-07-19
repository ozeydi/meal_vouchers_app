# Meal Voucher Manager

A simple Node.js + TypeScript backend app to manage employee meal vouchers, connected to MongoDB Atlas.

---

## Features

- Express server setup with TypeScript
- MongoDB Atlas connection
- Basic project structure and config

---

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- MongoDB Atlas account with a cluster and connection string

### Installationxxx

1. Clone the repo:

```bash
git clone https://github.com/ozeydi/meal_vouchers_app.git
cd meal-vouchers-app
```

2. Install dependencies:

```bash
npm install
```

3. Setup environment variables:

- Create a .env file in the root directory:

```bash
PORT=3000
MONGO_URI=your_mongodb_connection_string_here
```

Replace your_mongodb_connection_string_here with your actual MongoDB Atlas connection string.

4. Running the app

```bash
npm run dev
```

The server will start on http://localhost:3000 and connect to MongoDB Atlas.
