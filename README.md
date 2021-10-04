### Software Engineer Candidate Coding Challenge
###### Completed by Vladimir Malcevic
----

###### Executing the project
Please make sure to have the most recent version of node installed.
- Run the following lines of code in the root directory after extracting the project to ensure code runs without errors.
    - `rm -rf node_modules`
    - `npm install -g npm@latest`
    - `npm i core-util-is`

----
Notes Regarding Submission:
- Written in JavaScript using NodeJS
    - Modules used are nodemon and express
- Start from root directory `npm test`

##### Usage of API:
- display
    - GET
    - https://localhost4000/zipcode/display

- has
    - GET
    - https://localhost4000/zipcode/display/:id

- insert
    - PUT
    - https://localhost4000/zipcode/insert/:id

- delete
    - DELETE
    - https://localhost4000/zipcode/delete/:id

##### Notes
Due to the time constraint, I focused on creating the API as a proof of concept and thus has elements that would be improved upon before production. These include:
1. Storing the array of zipcodes in a database and not as a global variable
2. Extensive user input checking
3. More informative user error messages on incorrect user input
