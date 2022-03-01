--> what technology we are using to make this project ?

 1. npx cra 

 2. Bootstrap : In bootstrap we need to connect 1 css file and 1 js file.

 3. fontawesome icons : 1 css file

 4. axios

 5. react-router-dom

 6. connect fontawesome cdn link to html page :



 --> After that we have to install the [Axios , and react-router-dom]

 1. why we need Axios setup ?
 --> we have to call the backend server for fetching data
 --> to make the backend connection with React-Application we want axios setup.

 2. why we need react-router-dom packeg?
 --> for run the link and all.
 --> these are the labrary of react.


---------------------------------------------------------------------------

component : 

1. navbar
2. contact-list
3. view-contact
4. edit-contact
5. add-contact

Services :  contact-services




-->For Backend<--
Here we are using ( json-server ) which is the backend server.

-->For Database<--
we are using (json file).

1. we have to create a file (db.json) all the deletion, updation are store in that file. [this is our database file]

2. we are creating a package.json

3. package.json -> npm init --yes 

API,s

GET all contacts : GET -> http://localhost:9000/contacts

Create a Contact : POST -> http://localhost:9000/contacts

Update a contacts : PUT -> http://localhost:9000/contacts/Id

GET a Single contact :  GET -> http://localhost:9000/contacts/Id

Delete a contact : DELETE -> http://localhost:9000/contacts/Id