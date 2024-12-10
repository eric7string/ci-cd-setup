# Coding Quiz

A full-stack web application for creating and taking quizzes, featuring Cypress component tests and continuous deployment to Render. This project uses React for the front-end, an Express server for the back-end, and MongoDB Atlas for data storage.

## 🚀 Features

* **User Authentication**: Secure login and signup system.
* **Dynamic Quizzes**: Create, save, and take dynamic quizzes.
* **Component Testing**: Cypress component tests integrated for quality assurance.
* **CI/CD Pipeline**: Automated testing and deployment workflows using GitHub Actions.
* **MongoDB Integration**: Cloud-based database for storing quiz data.
* **Responsive Design**: Optimized for mobile and desktop devices.

## 🛠️ Tech Stack

### Front-End:
* **React**: Interactive UI components.
* **Vite**: Fast and optimized development environment.

### Back-End:
* **Express.js**: RESTful API services.
* **Node.js**: JavaScript runtime environment.

### Database:
* **MongoDB Atlas**: Cloud database for data persistence.

### Testing:
* **Cypress**: Automated component tests.
* **Vitest**: Testing utilities for Cypress.

### CI/CD:
* **GitHub Actions**: Continuous integration and deployment workflows.
* **Render**: Automated deployment for hosting the application.

## 📂 Project Structure

```
.
├── client/             # Front-end source code
├── server/             # Back-end source code
├── cypress/            # Cypress tests
├── .github/workflows/  # GitHub Actions workflows
└── README.md           # Project documentation
```

## ⚙️ Installation

### Prerequisites
* Node.js (>= 18.x)
* MongoDB Atlas account

### Steps
1. Clone the repository:
```bash
git clone https://github.com/eric7string/ci-cd-setup.git
cd ci-cd-setup
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   * **MongoDB URI**: Add your MongoDB connection string to `server/.env`:
```makefile
MONGO_URI=<your-mongo-uri>
```

4. Seed the database:
```bash
npm run seed
```

5. Start the application:
```bash
npm run develop
```

## 🚦 Usage

### Development
Run the application locally:
```bash
npm run develop
```
* Front-end: `http://localhost:5173`
* Back-end: `http://localhost:3001`

### Screenshots
![Quiz Start](/screenshots/start.png)
*Quiz Start*

![Quiz Questions](/screenshots/quiz.png)
*Quiz Questions*

![Quiz Results](/screenshots/results.png)
*Quiz Results*

![GitHub Workflow](/screenshots/workflow.png)
*GitHub Workflow*

![Cypress Test](/screenshots/cypress.png)
*Cypress Test*

![Render Deploy](/screenshots/render.png)
*Render Deploy*



### Production
Access the deployed application at [THIS URL](https://ci-cd-setup-xkox.onrender.com)

## 🧪 Testing

### Cypress Component Tests
Run tests locally:
```bash
npm run test-component
```

Open Cypress in interactive mode:
```bash
npm run test-gui
```

### CI/CD
* Cypress tests automatically run on Pull Requests targeting `develop`.
* Deployment to Render is triggered when `develop` is merged into `main`.

## 🚀 Deployment
This application is deployed on Render. To trigger a manual deployment, push changes to the `main` branch or use the Deploy Hook provided in Render settings.

## 🤝 Contributing
1. Fork the repository.
2. Create a feature branch:
```bash
git checkout -b feature/new-feature
```

3. Commit your changes:
```bash
git commit -m "Add new feature"
```

4. Push to the branch:
```bash
git push origin feature/new-feature
```

5. Open a Pull Request targeting the `develop` branch.

## 📝 License
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 📧 Contact
For questions or feedback, feel free to reach out [HERE](emn531@gmail.com)
