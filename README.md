## 🏛️ RESTful API "Book Manager"

**Book Manager** is a backend-focused RESTful API designed to manage books records that support basic CRUD operations.

This project is built using a **feature-based architecture**, where each business domain is modularized into its own isolated feature module, improving scalability, maintainability, and clarity.

---

### 🧱 Architecture: Feature-Based

Instead of separating by technical layer globally (controllers, services, routes, etc.), this project organizes code by **feature/modules**:

```
/src
    /db
    /middlewares
    /modules
        /clients
            client.controller.js
            client.service.js
            client.repository.js
            client.route.js
        /alas-hak
        /address
        /auth
```

Each feature encapsulates:

- Controller layer (HTTP handling)
- Service layer (business logic)
- Repository layer (database abstraction)
- Routes definition

This approach:

- Makes the system scalable as features grow
- Reduces tight coupling between domains
- Improves maintainability
- Encourages clean domain boundaries

---

### 🚀 Features

- 🔐 Authentication & authorization using JWT
- :book: Books management (CRUD)

---

### 🛠️ Tech Stack

- Node.js
- Express.js (Web Framework)
- Sequelize (ORM)
- MySQL (Database)
- RESTful API

---

### 🎯 What This Project Demonstrates

- Feature-based modular backend architecture
- Proper async handling
- Repository & service layer separation
- Clean error propagation pattern
- Real-world relational database modeling

## ⚙️ How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/FarlanFadillah/Book-Manager.git
cd Book-Manager
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env.development` file in the root directory:

```env
PORT=3030
JWT_KEY=mdB1oxv8QTgmeb18NifHqBc7BAFcyi3mt2QWjDQBSnH
DB_USER=your username
DB_PASS=your database password
DB_NAME=database name
DB_HOST=localhost
DB_CLIENT=mysql
DB_PORT=3306
```

Make sure to adjust the values based on your environment.

---

### 4️⃣ Run Database Migration

```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### 5️⃣ Start the Server

```bash
npm start
```

---

### 6️⃣ API Testing

You can test the API using:

- Postman
- Insomnia
- Thunder Client (VS Code extension)

Default base URL:

```
http://localhost:your_server_port
```

---

# 🌐 How to Use the REST API

## 📌 Base URL

```bash
http://localhost:your_server_port/api/v1****
```

---

## 🔐 1. Authentication

Before accessing protected routes, you need to authenticate.

---

### Login

**POST** `/auth/login`

```json
{
    "username": "admin",
    "password": "12345"
}
```

Response:

```json
{
    "success": true,
    "message": "You have successfully logged in.",
    "token": "your_jwt_token_here"
}
```

---

## 🔑 Using Protected Routes

For endpoints that require authentication, include the JWT token in the header:

```
Authorization: Bearer your_jwt_token_here
```

# 📖 API Design Principles

This API follows:

- RESTful resource naming
- Proper HTTP methods (GET, POST, PUT, DELETE)
- JSON request & response format
- JWT-based authentication
- Structured error handling
