# Personal Portfolio Website

This is a full-stack Personal Portfolio Website built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Features
- **User Authentication**: Users can register, login, and access the portfolio.
- **Projects Page**: Admins can add and manage their portfolio projects.
- **Contact Us Page**: A form to get in touch.

## Technology Stack
- **Frontend**: React
- **Backend**: Node.js, Express.js, MongoDB, JWT for Authentication
- **Authentication**: JSON Web Tokens (JWT) for secure login and registration

## Installation

### Backend
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/portfolio-website.git
    cd portfolio-website/backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file and add the following:
    ```bash
    JWT_SECRET=yoursecretkey
    MONGO_URI=your-mongo-db-connection-string
    ```

4. Run the backend server:
    ```bash
    npm start
    ```

### Frontend
1. Go to the frontend folder:
    ```bash
    cd ../frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the frontend app:
    ```bash
    npm start
    ```

## Endpoints

### Authentication
- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Login to an existing account.

### Projects
- **GET** `/api/projects`: Fetch all projects.
- **POST** `/api/projects`: Create a new project.

### Contact Us
- **POST** `/api/contact`: Send a contact message.

## Environment Variables
- `JWT_SECRET`: Secret key for JWT encryption.
- `MONGO_URI`: MongoDB connection string.




