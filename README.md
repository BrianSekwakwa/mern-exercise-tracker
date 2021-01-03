<h2>Exercise Tracker</h2>

A react application that tracks your exercises and the duration of how long you plan to exercise for. 

Example of the application can be viewed here: <a href="https://trackyourexercises.netlify.app/" target="_blank">Exercise Tracker</a>


<h2>Exercise Tracker</h2>

This is the server side code for "Exercise Tracker" application

<h3>APIs</h3>

GET
- / - Welcome page to our server
- /users - get all users from our database
- /exercises - get all exercises of our users
- /exercises/:id - get one exercise based on its id

POST
- /users/add - Create a new user
- /exercises/add - Create a new exercises based on user

PATCH
- /exercises/update/:id - Update an existing exercises with new information

DELETE
- /exercise/:id - Delete a exercise by id from our database
