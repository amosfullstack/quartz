	____

## Overview
- Aims to implement <span style="color:rgb(255, 255, 0)">all the concepts</span> that have been learned so far.
- You will learn about combining the <span style="color:rgb(255, 255, 0)">user Id </span> from the database and <span style="color:rgb(255, 255, 0)">session id</span>.
- You will learn abou <span style="color:rgb(255, 255, 0)">error handling</span>.
- You will learn about <span style="color:rgb(255, 255, 0)">form validation</span>.
- You will learn how to write <span style="color:rgb(255, 255, 0)">error messages</span> inside the form. Example in case of incorrect passwords.
- Learn how to organise the code into<span style="color:rgb(255, 255, 0)"> MVC pattern</span>. The MVC pattern is more important because it helps to organise the code into much more scalable way.

## Implementations

 a. Create includes folder.
- Any pure php file will be inside this folder.
                i. database connection. ie dbh.inc.php, that is a database handler.
                II.session configuration. ie config_session.inc.php
                - Make sure that sessions are well configured such that in case of hijacking it becomes imposible to access session data
                iii. signup handler.
                iv. login handler.
      - The file with database connection details can be included in other files when needed, with <span style="color:rgb(255, 255, 0)">require_once</span> 

   b. Lets think in the the MVC patern format.(Model ,View,Controller)
   - One file has function inside that are going to be used to connect to the database. Actually query the database.
   - Another file will be used to show data inside our website.
   - Another file contains the inputs or information that need to be run inside the website.
   
   <span style="color:rgb(255, 148, 148)">Model file:</span> will deal with only querying the database , ie adding data, deleteing data,submiting data.
                    :Basically it contains the very sensitive functions becaus they are interacting with our database.
                    : The only thing that is allowed to interact with this file is the <span style="color:rgb(255, 255, 0)">controller file.</span> 

<span style="color:rgb(255, 148, 148)">Controller file</span>   : The controller deals with handling the input from the user and then sending it to the                                     functions in the model

c. Form Validation:
- Because form validation includes taking user input and using it inside php, its code should be put inside controller file. 

<span style="color:rgb(0, 176, 80)">ENDED ON: Timestamp 0:57:46</span> 