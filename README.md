#  Bot-Battlr

A mini web app built to practice **React components**, **props**, **state**, **events**, and **data fetching** | powered by **React** and **JSON Server**.

---

##  Project Overview

This React application allows users to:

-  Browse through a list of available bots  
-  Enlist bots into their army  
-  Release bots from their army  
-  Permanently delete bots (from both UI and database)  
-  Enjoy an interactive and responsive **Bootstrap** interface  

---

##  Core Features

- **View All Bots** | Displays all available bots from the JSON server |
- **Enlist Bot** | Adds a bot to “Your Bot Army” without removing it from the main collection |
- **Release Bot** | Removes a bot from the army list (but not from the database) |
- **Delete Bot** | Permanently deletes the bot from both frontend and backend (`db.json`) |

---

##  Tech Stack

- **Frontend:** React.js  
- **Styling:** Bootstrap 5  
- **Backend:** JSON Server  
- **Package Manager:** npm  

---

##  Setup Instructions

### 1️ Clone the Repository

git clone https://github.com/OgechaEnock/Bot-Battlr.git

cd bot-battlr

### 2 Install Dependencies
npm install

### 3 Start the JSON Server
npx json-server --watch db.json --port 8001

### 4 Start the React App
npm start
