# Dev Stack

Dev Stack is a responsive technology stack builder built with React and TypeScript. It allows developers to explore popular development technologies and create their own stack by adding or removing technologies based on their needs.

## 🔗 Live Website

[Visit Dev Stack](https://dev-stack-blue.vercel.app/)

## 📂 GitHub Repository

[View Repository](https://github.com/jonaedjoshim/Ph-Assignment-05-dev-stack)

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Toastify
- React Icons
- Lucide React
- JSON

## ✨ Features

- Explore popular development technologies from categories such as Frontend, Backend, Database, Language, Styling, and DevOps.
- Build a custom technology stack by adding technologies, removing individual items, or clearing the entire stack.
- Fully responsive interface with loading states, duplicate protection, and toast notifications for stack actions.

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/jonaedjoshim/Ph-Assignment-05-dev-stack.git
```

Go to the project directory:

```bash
cd Ph-Assignment-05-dev-stack
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## 📖 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML like markup inside JavaScript. It is used in React because it makes UI components easier to write, read, and understand.

### 2. What is the difference between props and state?

Props are values passed from a parent component to a child component. State is data managed inside a component that can change over time and update the UI.

### 3. What does the useState hook do, and where did you use it in this project?

The `useState` hook stores data that can change while the application is running. In this project, I used it for selected technologies, technology data, loading state, error state, the mobile navigation menu, and the active navigation link.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects after a component renders. I used it to fetch the technology data from the local JSON file when the Technology section loads for the first time.

### 5. Why does every item in a .map() list need a unique key prop?

A unique `key` helps React identify each item in a list. This allows React to efficiently determine which item has been added, removed, or updated.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different UI based on a condition. In this project, the Your Stack section shows an empty-state message when no technology is selected. When technologies are added, it displays the selected technologies and the Remove All button instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component through props. A child can communicate back to the parent by calling a function passed through props. In this project, `TechnologySection` passes technology data and handler functions to components such as `TechnologyCard` and `StackSidebar`.

## 📱 Responsive Design

Dev Stack is designed to work across different screen sizes:

- Mobile: single-column technology layout with a responsive hamburger navigation.
- Tablet: two-column technology layout.
- Desktop: three-column technology grid with the Your Stack panel displayed beside it.

## 📦 Technology Data

Technology information is stored in a separate JSON file and loaded into the application using `fetch()` inside a `useEffect` hook. Each technology contains information such as its name, category, description, icon, rating, difficulty, and badge.

## 🔔 Toast Notifications

React Toastify is used to provide feedback when:

- A technology is added to the stack.
- A user tries to add the same technology again.
- A technology is removed.
- All technologies are removed from the stack.

## 👨‍💻 Author

Developed by [Jonaed Jashim](https://github.com/jonaedjoshim)