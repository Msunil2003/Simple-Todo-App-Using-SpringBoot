# Spring Boot To-Do List Application

A simple **To-Do List web application** built with **Java Spring Boot**, **MongoDB**, and a modern **HTML/CSS/JS frontend**.  

This project demonstrates a **full-stack application** with a REST API backend and a clean, responsive frontend.

---

## Features

- Add new to-do tasks  
- Mark tasks as completed/incomplete  
- Delete tasks  
- Data persistence using **MongoDB**  
- Modern and responsive UI  

---

## Tech Stack

| Layer          | Technology                        |
|----------------|----------------------------------|
| Backend        | Java, Spring Boot, Spring Data MongoDB |
| Database       | MongoDB                           |
| Frontend       | HTML, CSS, JavaScript (Fetch API) |
| Build Tool     | Maven (with Maven Wrapper)        |
| IDE            | VS Code                          |

---

## Project Structure

todo/
├── src/
│ ├── main/java/com/example/todo/
│ │ ├── controller/TodoController.java
│ │ ├── model/Todo.java
│ │ ├── repository/TodoRepository.java
│ │ └── TodoApplication.java
│ ├── main/resources/
│ │ ├── application.properties
│ │ └── static/
│ │ ├── index.html
│ │ ├── style.css
│ │ └── app.js
│ └── test/java/com/example/todo/
│ └── TodoApplicationTests.java
├── .gitignore
├── mvnw / mvnw.cmd
├── pom.xml
└── README.md


## Prerequisites

- Java JDK 17 or higher
- Maven (or use Maven Wrapper included)
- MongoDB (local or cloud e.g., MongoDB Atlas)
- VS Code (with Java & Spring Boot extensions)

---

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/<your-username>/todo-springboot.git
cd todo-springboot


Run MongoDB

Local: Make sure MongoDB server is running on mongodb://localhost:27017

Cloud: Update spring.data.mongodb.uri in application.properties

Run the Spring Boot application

Using Maven Wrapper (Windows):

.\mvnw spring-boot:run


Or using Maven:

mvn spring-boot:run


Open the frontend
In your browser, go to:

http://localhost:8080/index.html


| Method | URL               | Description       |
| ------ | ----------------- | ----------------- |
| GET    | `/api/todos`      | Get all todos     |
| POST   | `/api/todos`      | Create a new todo |
| PUT    | `/api/todos/{id}` | Update a todo     |
| DELETE | `/api/todos/{id}` | Delete a todo     |


The tests include:

Create, Read, Update, Delete operations on the To-Do API

Uses MockMvc for simulating HTTP requests


Modern To-Do List UI


![Alt text](screenshots/todo-ui.png)


This `README.md` covers:  
- Project description  
- Features  
- Tech stack  
- Folder structure  
- Setup instructions  
- API endpoints  
- Testing instructions  