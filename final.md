# Team Name: Endgame
### Team Members: Daniel Gwag, David Liau, Yun Tang (Denise), Michelle Yang

# Project Final Milestone

## Team Members and Contributions

### Daniel Gwag

* Contributed to overall back-end functionality, specifically connections to the Twilio API.
* Implemented much of medAll.handlebars and home.handlebars, as well as overview.js and medInfo.js.

### David Liau

* Worked all around, helping with database communication as well as handlebar files.
* Aided in implementing overview.handlebars, overview.js, as well as a few other handlebar files.
* Transitioned home page to display each weekday's medication.

### Denise Yun Tang

* Improved the design of the web app, renovating multiple .css files.
* Revamped much of the button features and background for consistency over the whole app.

### Michelle Yang

* Responsible for most of the back-end communication with Google Firebase.
* Helped set up database updates and retrieval, along with implementations of newMed.js, addMed.handlebars, 404.handlebars, and more pages.
* Introduced the concept of using handlebars for routing.

## List of all Source Code Files

### Handlebar Files
404.handlebars  
  - Displays a "Page not found" message  
  
addMed.handlebars  
  - Displays add medication page  
  
home.handlebars  
  - Displays home page  
  
index.handlebars  
  - Displays log-in page, with sign-up page option  
  
medInfo.handlebars  
  - Displays information for individual medication  
  
overview.handlebars  
  - Displays overview page, showing a week of medicine  
  
profile.handlebars  
  - Displays user profile page  
  
signup.handlebars  
  - Displays sign-up page  
  
header.handlebars
  - Partial that includes all necessary code for the header
  
footer.handlebars
  - Partial that includes all necessary code for the footer

### HTML Files
header.html
 - Outlines header information and imports necessary .css and .js files

footer.html
 - Includes navbar html for efficient inclusion
 
### JavaScript Files
home.js
 - JavaScript functionality for the home page, displaying medicine for a given day
 
medInfo.js
 - JavaScript functionality for the medInfo page, retrieves data from database and displays given medicine information

newMed.js
 - JavaScript functionality for the newMed page, adding in information and updating the database when the button is pressed
 
overview.js
 - JavaScript functionality for the overview page, providing all medicine over the week and allowing for redirection to home page
 
profile.js
 - JavaScript functionality for the profile page, importing all medicine related to the user
 
signup.js
 - JavaScript functionality for the user page, handles new user creation
 
app.js
 - Main JavaScript functionality handling necessary module requirements as well as setting up the environment
 
index.js
 - Handles main routing functionality as well as FireBase configuration
 
### CSS Files
style.css
 - Primary CSS formatting for the majority of the website, including backgrounds, buttons, and cards
 
## Google Slide Link
[Medilarm](https://docs.google.com/presentation/d/1J0QwBt-8_NaC1ZSOFMOepTxeFEpRSkRm9UihSf2RCQA/edit?usp=sharing)
