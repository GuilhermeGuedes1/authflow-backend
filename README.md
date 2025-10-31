# AuthFlow Backend

AuthFlow Backend is a **Node.js API** built to handle **secure user authentication**.  
It follows a clean and modular architecture, using **JWT** for authentication, **bcrypt** for password encryption, and **Joi** for input validation.

This project was designed to be a **scalable and production-ready backend**, serving as the foundation for the AuthFlow fullstack application.

---

## 🚀 Features

- 🔐 User Sign Up with validation  
- 🔑 User Login with JWT token generation  
- 🔒 Protected routes with middleware authentication  
- 🧮 Password hashing using bcrypt  
- ✅ Schema validation with Joi  
- 🗄️ MongoDB integration via Mongoose  
- ⚙️ Environment variables with dotenv  
- 🧠 Centralized error handling  
- 🧱 Clean folder structure (controllers, routers, middlewares)

---

## 🧱 Tech Stack

| Layer | Technology |
|--------|-------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB (Mongoose) |
| Validation | Joi |
| Authentication | JWT (jsonwebtoken) |
| Encryption | bcrypt |
| Configuration | dotenv |

---

## 📂 Project Structure

```
backend/
│
├── src/
│   ├── controllers/         # Business logic (home, signIn, signUp)
│   │   ├── home-controller.js
│   │   ├── signIn-controller.js
│   │   └── signUp-controller.js
│   ├── routers/             # API routes
│   │   ├── home-router.js
│   │   ├── signIn-router.js
│   │   └── signUp-router.js
│   ├── models/              # Mongoose models (User schema)
│   │   └── userSchema.js
│   ├── db/                  # MongoDB connection
│   │   └── connectDb.js
│   ├── userValidation/      # Joi validation schemas
│   │   └── userValidation.js
│   ├── middlewares/         # Auth and error handling middleware
│   │   └── authMiddleware.js
│   ├── app.js               # Express app setup
│   └── server.js            # Server configuration
│
├── .env                     # Environment variables
├── .gitignore               # Ignored files and folders
├── package.json             # Dependencies and scripts
└── README.md                # Documentation
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/GuilhermeGuedes1/authflow-backend.git

# Navigate to the folder
cd authflow-backend

# Install dependencies
npm install
```

Create a `.env` file in the root directory and add your environment variables:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the server:
```bash
npm start
```

Server will run on `http://localhost:5000`.

---

## 🔗 API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|-----------|--------------|----------------|
| POST | `/signup` | Register a new user | ❌ |
| POST | `/signin` | Login and receive JWT token | ❌ |
| GET | `/home` | Access protected home route | ✅ |

---

## 🧠 Roadmap

- [x] Sign Up and Login with validation  
- [x] JWT-based route protection  
- [x] Clean error handling  
- [ ] Password reset and recovery  
- [ ] OAuth (Google login) integration  
- [ ] Unit testing with Jest  

---

## 💡 About the Project

**AuthFlow** is a fullstack authentication project by [Guilherme Guedes](https://github.com/GuilhermeGuedes1),  
created to learn and apply real-world concepts of **authentication**, **API design**, and **clean backend architecture** using Node.js and Express.

---

## 🧩 Related Repositories

- 🖥️ **Frontend:** [AuthFlow Frontend](https://github.com/GuilhermeGuedes1/authflow-frontend)
