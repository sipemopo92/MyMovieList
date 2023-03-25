# MyMovieList

This application was created with the goal of providing an example of how to use Angular, Laravel, and JSON Web Token (JWT) to create a web application for movie search.

The application uses the OMDB database API to allow users to search for and view information about movies. In addition, users can register and log in to the application using JSON Web Token (JWT).

The application also allows users to save their favorite movies to their own database, so they can easily access them in the future.

The application's structure is divided into two parts: the frontend and the backend. The frontend was developed using Angular and offers an intuitive and user-friendly interface for movie search. The backend was developed using Laravel and provides authentication and management of favorite movies.

The application was developed for educational purposes and can be used as a basic example for creating more complex applications using Angular, Laravel, and JWT.


## System Requirements

Before you begin, make sure you have the following system requirements:

- Node.js 
- NPM 
- PHP
- Composer


## Installation

Follow the instructions below to install the application:

1. Clone the GitHub repository on your computer: `git clone https://github.com/sipemopo92/MyMovieList.git`
2. Open a terminal window in the project directory.
3. Install the backend dependencies: `composer install`
4. Create the `.env` file: `cp .env.example .env`
5. Generate the Laravel application key: `php artisan key:generate`
7. Configure the database settings in the .env file:
8. Create the database and seed it with sample data: `php artisan migrate`
9. Generate the JWT secret: `php artisan jwt:secret`
9. Install the frontend dependencies: `npm install`


## Running the app

Follow the instructions below to run the application:

1. Open two terminal windows in the project directory.
2. In one of the terminal windows, run the following command to start the Laravel development server: `php artisan serve`
3. In the other terminal window, run the following command to start the Angular development server: `ng serve`
4. Open your web browser and go to the following address: `http://localhost:4200`



## Conclusion

These are the instructions to install and try the web application with Angular frontend and Laravel backend on your computer. If you encounter any issues during the installation or running of the app, check the official documentation of Angular and Laravel or ask for help from the community.
