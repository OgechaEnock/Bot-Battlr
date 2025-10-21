# Bot-Battlr
A mini web app to practice components, props, state, events, and data fetching in react

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##  Project Overview
This React application allows users to:
-  Browse through a list of available bots.
-  Enlist bots into their army.
-  Release bots from their army.
-  Permanently delete bots (from both the UI and database).
-  Enjoy an interactive and responsive Bootstrap UI.


## Core Features

**View All Bots** | Displays all available bots from the JSON server. |
**Enlist Bot** | Adds a bot to “Your Bot Army” without removing it from the main collection. |
 **Release Bot** | Removes a bot from the army list (but not from the database). |
 **Delete Bot** | Permanently deletes the bot from both frontend and backend (`db.json`). |
---

## 🛠️ Tech Stack

- **Frontend:** React.js (Hooks + Functional Components)
- **Styling:** Bootstrap 5
- **Backend:** JSON Server
- **Package Manager:** npm

---
## ⚙️ Setup Instructions

### 1️ Clone the repository
```bash
git clone https://github.com/OgechaEnock/Bot-Battlr
cd bot-battlr

### 1️ Clone the repository 

npm install

### 3 Start db.json server
npx json-server --watch db.json --port 8001

### 4 Start React App

npm start

