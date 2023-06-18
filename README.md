# Project Management App REST API

This is a Node.js backend project management application that provides RESTful APIs, built using TypeScript and MongoDB. The application is dockerized for easy deployment and scalability.

## Prerequisites

To run this project locally, you need to have the following installed:

- Node.js
- npm (Node Package Manager)
- Docker
- MongoDB

## Getting Started

1. **Clone the repository:**

   ```shell
   git clone https://github.com/your-username/project-management-app.git
   cd project-management-app
   ```

2. **Install the dependencies:**

   ```shell
   npm install
   ```

3. **Set up the environment variables:**

   Create a `.env` file in the root directory and provide the following environment variables:

   ```
   PORT=3000
   MONGODB_URI=<your_mongodb_connection_string>
   ```

4. **Start the application:**

   ```shell
   npm start
   ```

   The server will start running at `http://localhost:3000`.

## Docker Setup

1. **Build the Docker image:**

   ```shell
   docker build -t project-management-app .
   ```

2. **Run the Docker container:**

   ```shell
   docker run -p 3000:3000 -d project-management-app
   ```

   The server will start running inside a Docker container at `http://localhost:3000`.

## API Documentation

The following endpoints are available:

- `GET /projects`: Get a list of all projects
- `GET /projects/:id`: Get a project by ID
- `POST /projects`: Create a new project
- `PUT /projects/:id`: Update a project by ID
- `DELETE /projects/:id`: Delete a project by ID

For detailed information about the request and response payloads, please refer to the API documentation provided in the `docs` directory.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).