# Budget Tracker App

A full-stack web application designed to help users manage and track their personal expenses efficiently. The application allows users to record their spending, view spending history, analyze spending categories, and connect with the application administrators. Built with a focus on simplicity and functionality, this project is ideal for learning full-stack development concepts and demonstrates the integration of backend and frontend technologies.

---

## Key Features
- **Record Spending**: Add detailed records of expenses with descriptions, amounts, and categories.
- **Spending History**: View a comprehensive list of all past spending, sortable by date.
- **Analytics**: Aggregate spending data to calculate total spending and analyze spending across categories.
- **User-Friendly Forms**: Simple and intuitive forms for inputting spending data.
- **Dynamic Updates**: Real-time deletion of spending records with a smooth user experience.

---

## Technologies Used
- **Frontend**: HTML, CSS, EJS (Embedded JavaScript Templates)
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Other Tools**: Axios for API requests, Postman for testing, Git for version control

---

## Project Walkthrough

### 1) Home Page
- Displays the latest spending record with its description, amount, category, and date.
- Shows total spending and a breakdown of spending by categories.
- Data is dynamically fetched from the MongoDB database.
![Home Page](<img width="1512" alt="home" src="https://github.com/user-attachments/assets/7543244d-12d1-4e86-bc59-44ae3f172dbd" />)

---

### 2) Add Spending Page
- Users can record a new spending entry by entering a description, amount, and selecting a category from a dropdown menu.
- Simple and user-friendly form with real-time validation.
![Add Spending Page](<img width="1512" alt="add" src="https://github.com/user-attachments/assets/d2b1c68e-f6ac-4853-85e6-255184120981" />)

---

### 3) History Page
- Displays all spending records in a reverse chronological order.
- Each record includes a description, amount, category, and date.
- Provides an option to delete individual records, dynamically removing them from the list and the database.
![History Page](<img width="1512" alt="history" src="https://github.com/user-attachments/assets/ab72f882-19c0-4e97-905e-2f3780e19aec" />)

---

### 4) Connect Page
- A simple form for users to reach out or provide feedback to the administrators.
- Captures user input and stores it securely in the database.
![Connect Page](<img width="1512" alt="connect" src="https://github.com/user-attachments/assets/5d712194-848f-4f7d-9828-fbb118479456" />)

---

## Future Enhancements
- **Authentication**: Add secure user registration and login to personalize data management.
- **Graphical Analytics**: Visualize spending trends using charts.
- **Budget Goals**: Allow users to set monthly or yearly spending limits and track progress.
- **Export Data**: Enable users to download spending history as a CSV or PDF.

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/budget-tracker.git
