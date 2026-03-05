# cricket-statistics-react-springboot-jpa


A full-stack **Cricket Statistics Management** application built using **React** for the frontend and **Spring Boot** with **MySQL** for the backend. This project allows users to manage and view detailed cricket player statistics including matches, runs, wickets, averages, and more.

---

## 📚 Overview   
 
This system enables users (e.g., admins or analysts) to:
 
- Add, update, and delete cricket players and their stats  
- View all players and filter based on criteria 
- Persist data using a MySQL database  
- Interact via a clean, responsive UI    

--- 

## 🛠️ Tech Stack

### Frontend
- **React.js** – UI library
- **React Router** – Page navigation
- **Axios** – API requests
- **Tailwind CSS / Material UI** – UI styling
- **React Context / Redux** – (Optional) State management

### Backend
- **Spring Boot** – REST API development
- **Spring Data JPA** – ORM for database interaction
- **MySQL** – Relational database
- **Lombok** – Simplifies boilerplate code
- **Spring Security (optional)** – For authentication/authorization

---

## ✨ Features

- 🧑‍💼 **Player Management**: Add, view, update, and delete cricket player profiles
- 📊 **Stat Tracking**: Store runs, wickets, matches played, batting average, etc.
- 🔍 **Search/Filter**: Filter players by name, country, or stats
- 📂 **Backend APIs**: RESTful CRUD operations for player data
- 🌐 **Database Integration**: Persistent storage with MySQL
- 📱 **Responsive Design**: Works on mobile, tablet, and desktop

---

## 📁 Project Structure
```
Directory structure:
└── baladurgag24-cricket-statistics-react-springboot-jpa/
    ├── README.md
    ├── LICENSE.txt
    ├── Backend/
    │   ├── mvnw
    │   ├── mvnw.cmd
    │   ├── pom.xml
    │   └── src/
    │       ├── main/
    │       │   ├── java/
    │       │   │   └── com/
    │       │   │       └── example/
    │       │   │           └── demo/
    │       │   │               ├── Controller/
    │       │   │               │   └── CricController.java
    │       │   │               ├── Demo/
    │       │   │               │   └── CricinfoApplication.java
    │       │   │               ├── Exception/
    │       │   │               │   └── CricinfoNotFoundException.java
    │       │   │               ├── Model/
    │       │   │               │   └── Cricinfo.java
    │       │   │               ├── Repository/
    │       │   │               │   └── CricinfoRepository.java
    │       │   │               └── Service/
    │       │   │                   └── CricService.java
    │       │   └── resources/
    │       │       └── application.properties
    │       └── test/
    │           └── java/
    │               └── com/
    │                   └── example/
    │                       └── demo/
    │                           └── CricinfoApplicationTests.java
    └── Frontend/
        ├── package.json
        ├── public/
        │   └── index.html
        └── src/
            ├── App.css
            ├── App.js
            ├── index.css
            ├── index.js
            ├── serviceWorker.js
            ├── setupTests.js
            ├── components/
            │   ├── CreateCricinfoComponent.jsx
            │   ├── FooterComponent.jsx
            │   ├── HeaderComponent.js
            │   ├── ListCricinfoComponent.jsx
            │   ├── Login.jsx
            │   ├── Register.jsx
            │   ├── UpdateCricinfoComponent.jsx
            │   └── ViewCricinfoComponent.jsx
            └── services/
                └── CricinfoService.js
```
