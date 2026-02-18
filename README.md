# ResqService

A full-stack mobile application with a **Java Spring Boot** backend and a **React Native (JavaScript)** frontend.

## Project Structure

```
resqService/
├── backend/                    # Java Spring Boot API
│   ├── pom.xml                 # Maven dependencies
│   └── src/main/java/com/resqservice/
│       ├── ResqServiceApplication.java
│       ├── config/             # Security, web configuration
│       ├── controller/         # REST controllers
│       ├── service/            # Business logic
│       ├── repository/         # Data access layer
│       ├── model/              # JPA entities
│       ├── dto/                # Data transfer objects
│       └── exception/          # Global error handling
├── frontend/                   # React Native mobile app
│   ├── package.json
│   ├── index.js
│   └── src/
│       ├── App.js              # App entry point
│       ├── navigation/         # React Navigation setup
│       ├── screens/            # Screen components
│       ├── components/         # Reusable UI components
│       ├── services/           # API client (Axios)
│       ├── hooks/              # Custom React hooks
│       ├── context/            # React Context providers
│       ├── constants/          # Theme, config constants
│       ├── utils/              # Helper utilities
│       └── assets/             # Images, fonts, etc.
└── README.md
```

## Prerequisites

- **Java 17+** and **Maven 3.8+**
- **Node.js 18+** and **npm**
- **React Native CLI** (`npm install -g react-native`)
- **Xcode** (for iOS) / **Android Studio** (for Android)

## Getting Started

### Backend

```bash
cd backend
./mvnw spring-boot:run
```

The API starts at `http://localhost:8080`. Verify with:

```bash
curl http://localhost:8080/api/health
```

The H2 database console is available at `http://localhost:8080/h2-console` (dev profile).

### Frontend

```bash
cd frontend
npm install

# iOS
npx react-native run-ios

# Android
npx react-native run-android
```

## Tech Stack

| Layer    | Technology                         |
| -------- | ---------------------------------- |
| Backend  | Java 17, Spring Boot 3.2, Maven   |
| Database | H2 (dev), PostgreSQL (prod)        |
| Frontend | React Native 0.74, JavaScript      |
| Nav      | React Navigation 6                 |
| HTTP     | Axios                              |

## API Endpoints

| Method | Path          | Description          |
| ------ | ------------- | -------------------- |
| GET    | `/api/health` | Service health check |
