# 💻 Backend | Marvel - Shop 
This project consists of the development of an online store. The main objective was the development of the backend code, combining the knowledge acquired in node + express technologies, in addition to mysql / sequelize. In our case, we also make the frontend using the Bootstrap framework and developing the entire interface in Single-Page Application (SPA).

## 🚧 Made a REST API for the following: 
- User registration using Bcrypt.
- User login + token + middleware.
- CRUD of the endpoints.
- "Many to Many" and other "One to Many" database relationships.
- Use of seeders.

## 🦾 Used technology 
- MySql2 with Sequelize and Express
- Multer
- Bcrypt + JWT
- Express Validator
- Cors
- Nodemon (Dev Dependency)
- Postman
- Workbench
- VsCode
- Git / GitHub
 
## 👾 Description of the utility of the project 

Upon entering the site you can see a homepage with a navigation bar to view the products, register or log in.

In the products section you have a sidebar to filter by category, price and sort by ascending or descending. Above the products you have a search engine to find the products by their name or description.

When you log in you can add each product to your shopping cart and then buy them, these are saved in your user as purchase orders. Likewise, in each product you can leave a review to evaluate it and that other users can trust in buying the same product.

# 📋 Pre requirements

1 - In order to start the project first make a clone:

> git clone (...)

2 - Once the project is cloned, you must install the necessary modules with npm:
> npm install

3 - You should rename the "config-example.json" file to "config.json" 
> Then edit the "development" fields with your "name", "password", "db name" and "secret word".

4 - Create Database
> sequelize db:create

5 - Database Migration
> sequelize db:migrate

6 - Running the Seeder
> sequelize db:seed:all

7 - The project is ready to start
> npm start

# 📷 Preview 

### SQL diagram 
![image](https://user-images.githubusercontent.com/105200893/200432655-b268e6de-aced-414a-8577-65138e638120.png)

### Home


### Sign Up


### Log In


### Products


### Modal Product


### User review


### User Dropdown


### My Orders


### My Cart


### Log Out


Pair Programing by [Alex Jiménez](https://github.com/radikalex) & [Federico Arévalo](https://github.com/Fede-Arevalo).
