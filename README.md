# GitHub Portfolio Project

A simple and responsive GitHub portfolio website for showcasing your starred repositories. This project dynamically fetches starred repositories using the GitHub API, displaying their names, descriptions, and the top language used. Each project card links directly to the GitHub repository, making it easy for visitors to explore your work.

## Technologies Used

- **Frontend**:
  - Angular 
  - Bootstrap
  - HTML
  - CSS
- **Backend** (API calls to GitHub):
  - GitHub API for fetching repository data

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/shreeka/your-portfolio-repo.git
   cd your-portfolio-repo
   ```

2. Install dependencies (Make sure you have Node.js and npm installed):
    ```bash
    npm install
    ```
3. Open `src/constants.ts` and set your GitHub username:  
    ```
    export const GITHUB_USERNAME = 'your-username';
    ```
   
4. Run the development server:
    ```bash
    ng serve
    ```
5. Open the application in your browser:
    http://localhost:4200

## License
This project is licensed under the MIT License. See the LICENSE file for details.


