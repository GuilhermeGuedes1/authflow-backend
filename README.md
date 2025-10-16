# 🧩 AuthFlow Backend

AuthFlow Backend is a **Node.js API** designed for secure user authentication.  
It follows a **clean architecture**, using **JWT** for authentication, **bcrypt** for password encryption, and **Joi** for input validation.  
The goal is to provide a **scalable and professional backend structure** ready for production use.

---

## 🚀 Features

- 🔐 User **Sign Up** with validation  
- 🔑 User **Login** with JWT token generation  
- 🧮 Password hashing using **bcrypt**  
- ✅ Schema validation with **Joi**  
- 🗄️ Database connection with **Mongoose**  
- ⚙️ Environment variables using **dotenv**  
- 🧠 Centralized error handling  
- 🧱 Clean architecture with controllers, routes, and middlewares  

---

## 🧱 Tech Stack

| Layer | Technology |
|:------|:------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB with Mongoose |
| Validation | Joi |
| Authentication | JWT (jsonwebtoken) |
| Encryption | bcrypt |
| Config | dotenv |

---

## 📂 Project Structure

```bash
backend/
│
├── src/
│   ├── controllers/         # Business logic (auth, user, etc.)
│   │   └── authController.js
│   ├── routes/              # API routes
│   │   └── authRoutes.js
│   ├── middlewares/         # Custom middlewares (auth, error handling)
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── models/              # Mongoose models (User schema)
│   │   └── userModel.js
│   ├── database/            # MongoDB connection
│   │   └── connect.js
│   ├── validations/         # Joi validation schemas
│   │   └── userValidation.js
│   ├── app.js               # Express app setup
│   └── server.js            # Server configuration
│
├── .env                     # Environment variables
├── .gitignore               # Ignored files and folders
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

---

## ⚙️ Installation & Setup

Follow the steps below to set up the project locally.

### 1. Clone the repository
```bash
git clone https://github.com/devgui/authflow-backend.git
cd authflow-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the root directory and add the following:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the project
If using **nodemon**:
```bash
npm run dev
```

Otherwise:
```bash
node server.js
```

---

## 🔐 API Endpoints

| Method | Endpoint | Description | Auth Required |
|:--------|:----------|:-------------|:---------------|
| `POST` | `/home/sign-up` | Register a new user | ❌ No |
| `POST` | `/home/sign-in` | Authenticate user and return JWT token | ❌ No |
| `GET` | `/home` |

---

## 🧠 Example JSON Requests

### 🔸 Sign Up
```json
POST /signup
{
  "name": "Guilherme Guedes",
  "email": "guilherme@example.com",
  "password": "123456"
}
```

### 🔸 Login
```json
POST /login
{
  "email": "guilherme@example.com",
  "password": "123456"
}
```


## 🧩 Project Goals

- Demonstrate clean backend architecture  
- Apply authentication best practices  
- Showcase branch management and semantic commits  
- Serve as the backend for a fullstack authentication app (React frontend coming soon)

---

## 🧠 Future Improvements

- 🔄 Refresh token system  
- 🔑 Password reset with email verification  
- 👤 Role-based access control (admin/user)  
- 🪶 Improved error logging  
- ⚛️ Frontend integration using React  

---

## 🧑‍💻 Author

**Guilherme Guedes**  
- [GitHub](https://github.com/GuilhermeGuedes1)  
- [LinkedIn](https://www.linkedin.com/in/dev-guilherme-guedes/)

---

## 🪪 License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute it with attribution.

---

## ✨ Quote

> “Clean code, clear structure, and secure authentication — building solid foundations for scalable web applications.”
