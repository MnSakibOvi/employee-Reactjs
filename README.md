# React User Management App

A user management application built with React.js, providing features for adding, viewing, and managing user data.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
  - [1. `App.tsx`](#1-apptsx)
  - [2. `AddUserForm.tsx`](#2-adduserformtsx)
  - [3. `Home.tsx`](#3-hometsx)
  - [4. `Navbar.tsx`](#4-navbartsx)
  - [5. `ViewDetails.tsx`](#5-viewdetailstsx)
  - [6. `ViewUser.tsx`](#6-viewusertsx)
- [Contributing](#contributing)


## Project Overview

This React.js project provides a user-friendly interface for managing users. It includes features such as adding new users, viewing user details, blocking/unblocking users, and deleting users. The application uses React Router for navigation and leverages local storage for persisting user data.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- Node.js: [Download and Install Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/MnSakibOvi/employee-Reactjs.git
    ```

2. Navigate to the project directory:

    ```bash
    cd employee-Reactjs
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

To run the project, use the following command:

```bash
npm start
```

This will start the development server, and you can view the app in your browser at [http://localhost:3000](http://localhost:3000).

## Project Structure

### 1. `App.tsx`

The `App.tsx` file serves as the main entry point for the application. It manages the overall structure and routing logic of the app, rendering the navigation bar and different pages based on the route.

### 2. `AddUserForm.tsx`

The `AddUserForm.tsx` file contains the component responsible for adding new users through a form. It manages user input fields, submits the form, updates local storage with new user data, and resets the form.

### 3. `Home.tsx`

The `Home.tsx` file represents the home page component. It displays a welcome message and an overview of the Company.

### 4. `Navbar.tsx`

The `Navbar.tsx` file includes the navigation bar component. It allows users to navigate between the home page, user view page, and the add user form.

### 5. `ViewDetails.tsx`

The `ViewDetails.tsx` file provides a component for viewing and editing user details. It handles the editing state, input changes, and saving modifications to the local storage.

### 6. `ViewUser.tsx`

The `ViewUser.tsx` file is the main component for viewing and managing users. It fetches user data from local storage and provides options to view details, block/unblock, and delete users. It also integrates the `ViewDetails` component for detailed user information.

## Contributing

If you would like to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request.


