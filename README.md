# movie-database

## Table of Contents
- [movie-database](#movie-database)
  - [Table of Contents](#table-of-contents)
  - [Technology Used](#technology-used)
  - [Description](#description)
  - [Usage](#usage)
  - [User Stories](#user-stories)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Assets](#assets)
  - [Notes](#notes)
  - [Learning Points](#learning-points)
  - [Author Info](#author-info)
    - [Megan Ellman](#megan-ellman)
  - [License](#license)

<br />

## Technology Used

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Node.js | [https://nodejs.org/en/](https://nodejs.org/en/) |
| Express.js | [https://expressjs.com/](https://expressjs.com/) |
| MySQL | [https://www.mysql.com/](https://www.mysql.com/) |
| MySQL2 | [https://www.npmjs.com/package/mysql2](https://www.npmjs.com/package/mysql2) |
| Insomnia | [https://insomnia.rest/download](https://insomnia.rest/download) |

<br />

## Description 

Movie Database is a REST API built with Node.js, Express.js, and MySQL. It allows users to create, retrieve, update, and delete movies and their associated reviews through API routes tested with Insomnia.

This project was built to practice designing relational database schemas, using joins in SQL, and implementing RESTful routes with Express.js. It provides a foundation for working with persistent data in full-stack applications.

<br/>

## Usage 

1. Clone the repository.
2. Create and seed the MySQL database using the provided schema and seeds files.
3. Run the server with `node server.js`.
4. Use Insomnia to test the following routes:
   - **POST** `/api/add-movie` → Adds a new movie.  
   - **GET** `/api/movies` → Returns a list of all movies.  
   - **DELETE** `/api/movie/:id` → Deletes a movie by ID.  
   - **GET** `/api/movie-reviews` → Returns all reviews with the associated movie name (using a join).  
   - **PUT** `/api/review/:id` → Updates a review for a specific movie.  

<br />

## User Stories

* As a user, I want to create a new database.  
* As a user, I want to store movie names and reviews in the database in two separate tables.  
* As a user, I want to see a list of all movies.  
* As a user, I want to be able to create and delete a movie.  
* As a user, I want to return a list of all the reviews and the associated movie name.  

<br />

## Acceptance Criteria

* It's done when `movie_db` is created and contains a `movies` and `reviews` table.  
* It's done when `movie_db` has been seeded with data.  
* It's done when the `/api/add-movie` route successfully adds a movie when tested using Insomnia. (POST)  
* It's done when the `/api/movies` route renders a list of all movies. (GET)  
* It's done when the `/api/movie/:id` route deletes a movie when tested using Insomnia. (DELETE)  
* It's done when the `/api/movie-reviews` route successfully gets all movies and the associated reviews. (GET, JOIN)  
* It's done when the `/api/review/:id` route successfully updates a review pertaining to a specific movie. (PUT)  

<br />

## Assets

Design the following database schema that contains two tables:

![The database schema includes a movies table and a reviews table, linked by the movie id.](./assets/image_1.png)

<br />

## Notes

To test your routes you will use Insomnia. If you have not already downloaded it, you will need to visit the [Insomnia download page](https://insomnia.rest/download) and do so.

Refer to the documentation:

- [Insomnia documentation on getting started](https://support.insomnia.rest/category/152-using-insomnia)  
- [Express.js documentation on routing](https://expressjs.com/en/guide/routing.html)  
- [MySQL documentation on joins](https://dev.mysql.com/doc/refman/8.0/en/join.html)  
- [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2)  

<br />

## Learning Points 

- Designed and implemented a relational database schema with two connected tables.  
- Practiced creating REST API routes for full CRUD operations.  
- Used SQL joins to retrieve related data across tables.  
- Gained experience testing APIs with Insomnia.  
- Applied asynchronous programming in Node.js with MySQL2.  

<br />

## Author Info

### Megan Ellman
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://megellman.github.io/portfolio/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/megan-ellman/)
[![github](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](https://github.com/megellman)

<br />

## License

[MIT](https://choosealicense.com/licenses/mit/)