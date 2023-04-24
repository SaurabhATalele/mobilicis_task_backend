# mobilicis_task_backend

This project is build to make the backend to fetch the data from the MongoDb database. This is an API for the data fetching using query.

## Libraries/databases used

`NodeJS` `ExpressJS` `Mongoose` `MongoDb`

## Working of the project

This project is an API which works on the post requests having a body as a query.
The database connected is the `mongodb` which is a `NO-SQL` database,
the library called `mongoose` is used to connect to the mongodb.
the database data feilds are specified in the `db.js` file.

After recieving the post request from the user, the application processes the bpdy of the request and make a call to the database to fetch the data. 
According to the response the data is returned to the user.

There are two types of methods:
1. To normally fetch the data.
2. To fetch the aggregate data.


