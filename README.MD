## Registration form with file upload option

- forwards the entered user details and uploaded file to the selected email (Just a basic authentication; Can be implemented with OAuth 1.0 or OAuth 2.0)

Details :
- [X] Used Bootstrap
- [X] Angular Frontend
- [X] Express NodeJs Backend
- [X] Multer library to upload the file to local
- [X] NodeMailer library to send a mail with entered data and uploaded file


### Important config details

* MongoDB connection url string should be provided inside server.js file inside the backend folder
* Provide the email details inside the nodemailer functionality where placeholder email is placed along with password with added user forward email details as I've just implemented this with basic authentication 

### Project Installation and Running the application

- Backend Server
> * Go to backend folder and run the command `npm install`
> * If nodemon is installed, you can run `nodemon server.js` command or
> * use standard nodejs command i.e. `node server.js` to start the backend server 
> * now your should start running at ```http://localhost:3000/```

- Frontend 
> * Go inside reg-form folder and run the command npm install
> * now run the command `ng server -o`
> * go to the web browser and enter the url ```http://localhost:4200/```
> * you should now be able to move through the project as needed. 
> * Home page is dummy page, Register is the page where the registration form is present i.e. at ```http://localhost:4200/register``` and 
> * Jobs is the place where you can see the list of registered users at ```http://localhost:4200/userlist```

