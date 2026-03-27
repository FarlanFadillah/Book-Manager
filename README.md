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
        /auth
        /books
            book.controller.js
            book.service.js
            book.repository.js
            book.route.js
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

As the seeding process progresses, it will create a user and store it in the database.
You can use these credentials to log in and obtain a JWT token,
allowing you to access the book route.
You can change these credentials by changing the seed file inside the ./src/db folder.

```json
{
    "username": "admin",
    "password": "12345"
}
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
http://localhost:your_server_port/api/v1
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

## :book: 2. Books

### Adding a Book

**POST** `/books`

```json
{
    "title": "Norwegian Wood",
    "author": "Haruki Murakami",
    "year": 1987
}
```

Response:

```json
{
    "success": true,
    "message": "Book added successfully",
    "data": {
        "id": 17,
        "title": "Norwegian Wood",
        "author": "Haruki Murakami",
        "year": 1987
    }
}
```

### Update a Book

**PUT** `/books/:id`

```json
{
    "title": "Norwegian Wood",
    "author": "Haruki Murakami",
    "year": 1987
}
```

Response:

```json
{
    "success": true,
    "message": "Book updated successfully"
}
```

### Delete a Book

**DELETE** `/books/:id`

Response:

```json
{
    "success": true,
    "message": "Book deleted successfully"
}
```

### Get a Book by ID

**GET** `/books/:id`

Response:

```json
{
    "success": true,
    "data": {
        "id": 17,
        "title": "1Q84",
        "author": "Haruki Murakami",
        "year": 2009
    }
}
```

### Get a list of Book

**GET** `/books?page=1&limit=3`

```json
{
    "success": true,
    "data": [
        {
            "id": 1,
            "title": "1984",
            "author": "George Orwell",
            "year": 1949
        },
        {
            "id": 2,
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "year": 1925
        },
        {
            "id": 3,
            "title": "The Alchemist",
            "author": "Paulo Coelho",
            "year": 1988
        }
    ],
    "meta": {
        "page": 1,
        "total_count": 17,
        "total_page": 6,
        "per_page": 3,
        "links": {
            "next": "/api/v1/books?page=2&limit=3&",
            "self": "/api/v1/books?page=1&limit=3&",
            "prev": null,
            "last": "/api/v1/books?page=6&limit=3&"
        }
    }
}
```

for filtering you can use one or more of the query parameters, such as :
title, author, yearFrom, yearTo

List of books published from 1925 to 2000
**GET** `/books?page=1&limit=10&yearFrom=1925&yearTo=2000`

List of books by author F. Scott Fitzgerald
**GET** `/books?page=1&limit=10&author=F. Scott Fitzgerald`

List of books with titles that contain the word "The"
**GET** `/books?page=1&limit=10&title=The`

You can also combine all of these query parameters to get more specific books.

# 📖 API Design Principles

This API follows:

- RESTful resource naming
- Proper HTTP methods (GET, POST, PUT, DELETE)
- JSON request & response format
- JWT-based authentication
- Structured error handling
