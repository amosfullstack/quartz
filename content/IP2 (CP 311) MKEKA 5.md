
# CP311 - Internet Programming and Applications II
## Practical Examples and Solutions

---

## AJAX with MySQL Example

**Step One: Create a MySQL Database and Users Table**
*(Database Setup)*

> [!Tip]- Answer (Click to show)
> ```sql
> CREATE DATABASE ajax_demo;
> USE ajax_demo;
>
> CREATE TABLE Users (
>     Id INT AUTO_INCREMENT PRIMARY KEY,
>     Name VARCHAR(255),
>     Email VARCHAR(255),
>     Gender VARCHAR(10),
>     Age INT
> );
> ```

---

**Step Two: Create an HTML Interface (index.html)**
*(Frontend Form)*

> [!Tip]- Answer (Click to show)
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>AJAX Demo</title>
> </head>
> <body>
>     <h2>User Information</h2>
>     <form id="userForm">
>         <label for="name">Name:</label>
>         <input type="text" id="name" name="name" required><br>
>
>         <label for="email">Email:</label>
>         <input type="email" id="email" name="email" required><br>
>
>         <label for="gender">Gender:</label>
>         <select id="gender" name="gender" required>
>             <option value="Male">Male</option>
>             <option value="Female">Female</option>
>         </select><br>
>
>         <label for="age">Age:</label>
>         <input type="number" id="age" name="age" required><br>
>
>         <button type="button" onclick="addUser()">Add User</button>
>     </form>
>
>     <div id="result"></div>
>
>     <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
>     <script src="script.js"></script>
> </body>
> </html>
> ```

---

**Step Three: Create a PHP File to Process Form Data (process.php)**
*(Server-side Processing)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> $servername = "your_database_server";
> $username = "your_database_username";
> $password = "your_database_password";
> $dbname = "ajax_demo";
>
> $conn = new mysqli($servername, $username, $password, $dbname);
>
> if ($conn->connect_error) {
>     die("Connection failed: " . $conn->connect_error);
> }
>
> if ($_SERVER["REQUEST_METHOD"] == "POST") {
>     $name = $_POST["name"];
>     $email = $_POST["email"];
>     $gender = $_POST["gender"];
>     $age = $_POST["age"];
>
>     $sql = "INSERT INTO Users (Name, Email, Gender, Age) VALUES ('$name', '$email', '$gender', '$age')";
>
>     if ($conn->query($sql) == TRUE) {
>         echo "User added successfully";
>     } else {
>         echo "Error: " . $sql . "<br>" . $conn->error;
>     }
> }
>
> $conn->close();
> ?>
> ```

---

**Step Four: Create a JavaScript File to Handle AJAX (script.js)**
*(AJAX Request Handling)*

> [!Tip]- Answer (Click to show)
> ```javascript
> function addUser() {
>     var formData = $("#userForm").serialize();
>
>     $.ajax({
>         type: "POST",
>         url: "process.php",
>         data: formData,
>         success: function(response) {
>             $("#result").html(response);
>             // You can add additional logic here to update the page as needed.
>         },
>         error: function(error) {
>             console.log("Error: " + error);
>         }
>     });
> }
> ```

---

## File Upload in PHP

**Question: When dealing with files uploaded through HTTP, PHP stores references to them in the super global array. These files must be processed or moved from their temporary location during the lifetime of the PHP script execution or they will be automatically deleted. Write a PHP script to upload a file to a server.**
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> **HTML Form (index.html)**
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>File Upload</title>
> </head>
> <body>
>     <h2>File Upload</h2>
>     <form action="upload.php" method="post" enctype="multipart/form-data">
>         <label for="file">Choose a file:</label>
>         <input type="file" name="file" id="file" required>
>         <br>
>         <button type="submit" name="submit">Upload File</button>
>     </form>
> </body>
> </html>
> ```
>
> **PHP File for File Upload (upload.php)**
> ```php
> <?php
> // Check if the form was submitted
> if($_SERVER["REQUEST_METHOD"] == "POST") {
>
>     // Check if the file was uploaded without errors
>     if (isset($_FILES["file"]) && $_FILES["file"]["error"] == 0) {
>
>         // Define the directory where the file will be stored
>         $targetDir = "uploads/";
>
>         // Get the file name and create a unique name to avoid overwriting
>         $originalFileName = basename($_FILES["file"]["name"]);
>         $uniqueFileName = uniqid() . "_" . $originalFileName;
>         $targetFileName = $targetDir . $uniqueFileName;
>
>         // Move the file from the temporary location to the specified directory
>         if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFileName)) {
>             echo "File uploaded successfully. File path: " . $targetFileName;
>         } else {
>             echo "Error uploading file.";
>         }
>     } else {
>         echo "Error: " . $_FILES["file"]["error"];
>     }
> } else {
>     echo "Invalid request method.";
> }
> ?>
> ```
>
> **Explanation:**
>
> 1. The HTML form uses the `enctype="multipart/form-data"` attribute to allow file uploads.
> 2. The PHP script checks if the form was submitted using the POST method.
> 3. It checks if the file was uploaded without errors (`$_FILES["file"]["error"] == 0`).
> 4. It specifies the target directory where the file will be stored (in this example, "uploads/").
> 5. It generates a unique filename to avoid overwriting existing files.
> 6. The `move_uploaded_file` function is used to move the file from its temporary location to the specified directory.
> 7. The script outputs a message indicating whether the file upload was successful or not.
>
> Make sure to create the "uploads" directory in the same location as your PHP script, and ensure that it has the necessary permissions for file uploads. Additionally, consider implementing further security measures, such as checking file types, file size limits, and handling potential security risks associated with file uploads.

---

## Session Cookies in PHP

**Question: If no expiration time is explicitly set for cookies, what happens?**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> If no expiration time is explicitly set for cookies, the cookie will be treated as a **session cookie**. A session cookie is a type of cookie that is temporary and is stored only for the duration of the user's session on the website. The cookie is deleted when the user closes their web browser or when the session ends (determined by the web server).
>
> **Characteristics of Session Cookies:**
>
> 1. **Temporary Storage:** Session cookies are stored in the browser's memory and are not persisted on the user's device after the browser is closed.
>
> 2. **Expiration:** Since no explicit expiration time is set, the cookie will be considered a session cookie. The server determines the expiration of the session, and typically, session cookies expire when the user closes their browser.
>
> 3. **Stateful Information:** Session cookies are often used to store session-specific information, such as user authentication tokens or temporary data related to the user's interaction with the website.
>
> 4. **Security Considerations:** While session cookies can be convenient for managing user sessions, it's essential to handle sensitive information securely. For example, if a session cookie contains user authentication information, proper security measures should be implemented to protect against session hijacking or other security threats.
>
> If you need a cookie to persist beyond the user's session, you can set an explicit expiration time using the `expires` attribute or the `max-age` attribute when creating the cookie. This allows the cookie to persist on the user's device for a specified duration.
>
> **Example of setting an explicit expiration time for a cookie:**
> ```php
> setcookie("example_cookie", "value", time() + 3600, "/"); // expires in 1 hour
> ```
> In this example, `time() + 3600` sets the expiration time to one hour in the future. Adjust the value as needed based on your requirements.

---

## Default Parameter Values in Functions

**Question: Under what circumstance it is impossible to assign a default value to a parameter while declaring a function?**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> In most programming languages that support default parameter values in function declarations, you can typically assign default values to parameters under various circumstances. However, there are some scenarios and language-specific situations where it might be challenging or impossible to assign default values. Here are a few common cases:
>
> **1. Positional Constraints:**
>
> **2. Dynamic Values:** If the default value requires a dynamic computation or depends on the result of another function call, it might not be possible to set it directly in the function declaration. For example, if you want to set a default value based on the current date and time, you may need to calculate it inside the function body.
>
> **3. Evaluation Order:**
>
> The order of evaluation of default values may vary across programming languages. If the default value of one parameter depends on the value of another parameter, and the order of evaluation is not guaranteed, it might be tricky to achieve the desired behavior.
>
> **4. Complex Expressions:**
>
> If the default value involves complex expressions or statements, some languages might limit what you can include in the default value assignment.
>
> **5. Language Limitations:**
>
> Some programming languages may have specific restrictions on default values. For example, certain languages might only allow constant expressions as default values.
>
> **6. Syntax Constraints:**
>
> The syntax of the programming language might impose constraints on where and how default values can be specified. If the language syntax doesn't support default values in function declarations, you won't be able to use them.
>
> It's important to refer to the documentation of the specific programming language you are using to understand the rules and limitations regarding default parameter values. If you encounter situations where setting default values in the parameter declaration is not feasible, you may need to use alternative strategies, such as checking for null or undefined values within the function body and assigning default values programmatically.

---

## JSON Format Overview

**Question:**
**i. Overview of JSON format (what is it, why do we need it, how to create objects in JSON, what is the structure of JSON, JSON and Arrays etc).**
**ii. Using codes, show the similarities between JSON and XML.**
**iii. Using codes, show how you can convert JSON string to array of JSON objects using JavaScript.**
**iv. Using codes, show how you can convert XML data into JSON using PHP.**
*(15 Marks)*

> [!Tip]- Answer (Click to show)
> **i. Overview of JSON Format:**
>
> **What is JSON:**
>
> JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is often used to transmit data between a server and web application as an alternative to XML.
>
> **Why Do We Need JSON:**
> - Lightweight and easy to read.
> - Supports complex data structures, including nested objects and arrays.
> - Widely supported across various programming languages.
> - Efficient for data interchange in web development.
>
> **How to Create Objects in JSON:**
>
> JSON data consists of key-value pairs. Objects in JSON are enclosed in curly braces `{}`, and key-value pairs are separated by commas.
>
> **Example:**
> ```json
> {
>     "name": "John Doe",
>     "age": 30,
>     "city": "New York"
> }
> ```
>
> **Structure of JSON:**
>
> - **Objects:** Enclosed in curly braces `{}`, containing key-value pairs.
> - **Arrays:** Enclosed in square brackets `[]`, containing ordered lists of values.
> - **Values:** Can be strings, numbers, objects, arrays, booleans (true/false), or null.
> - **Keys:** Must be strings enclosed in double quotes.
>
> **JSON and Arrays:**
>
> Arrays in JSON are similar to arrays in JavaScript. They can contain multiple values of any type, including objects and other arrays.
>
> **Example of JSON with an array:**
> ```json
> {
>     "name": "John Doe",
>     "age": 30,
>     "hobbies": ["reading", "swimming", "coding"]
> }
> ```
>
> **ii. Similarities between JSON and XML (with code examples):**
>
> **JSON Example:**
> ```json
> {
>     "person": {
>         "name": "John Doe",
>         "age": 25,
>         "city": "New York"
>     }
> }
> ```
>
> **XML Example:**
> ```xml
> <person>
>     <name>John Doe</name>
>     <age>25</age>
>     <city>New York</city>
> </person>
> ```
>
> **Similarities:**
> - Both are human-readable text formats.
> - Both support hierarchical data structures.
> - Both can be parsed and used by many programming languages.
> - Both are self-describing (data is described within the format).
>
> **iii. Convert JSON string to array of JSON objects using JavaScript:**
>
> ```javascript
> // JSON string
> var jsonString = '[{"name":"John","age":25},{"name":"Jane","age":30}]';
>
> // Convert JSON string to array of JSON objects
> var jsonArray = JSON.parse(jsonString);
>
> // Accessing elements
> console.log(jsonArray[0].name); // Output: John
> console.log(jsonArray[1].age);  // Output: 30
> ```
>
> **iv. Convert XML data into JSON using PHP:**
>
> ```php
> <?php
> // Sample XML data
> $xmlData = '<?xml version="1.0" encoding="UTF-8"?>
> <root>
>     <person>
>         <name>John Doe</name>
>         <age>25</age>
>     </person>
>     <person>
>         <name>Jane Doe</name>
>         <age>30</age>
>     </person>
> </root>';
>
> // Convert XML to JSON
> $xmlObject = simplexml_load_string($xmlData);
> $jsonString = json_encode($xmlObject);
> $jsonArray = json_decode($jsonString, true); // true for associative array
>
> // Display the resulting JSON
> echo json_encode($jsonArray, JSON_PRETTY_PRINT);
> ?>
> ```
>
> In this example, `simplexml_load_string` is used to parse the XML data, `json_encode` is used to convert the XML object to a JSON string, and `json_decode` is used to convert the JSON string to a PHP associative array. The `true` parameter in `json_decode` ensures that the result is an associative array rather than an object. Finally, `json_encode` is used to display the resulting JSON in a readable format.

---

## JSON and JavaScript Objects

**Question:**
**i. Introduction to JSON.**
**ii. Explore JavaScript Objects (what is JS Objects, how can you Display JS objects in browsers, feel free to use DOM).**
**iii. How to use JSON Objects (show how JSON can be used to fetch data from the web server and display in a web browser).**
**iv. JSON stringify and Parse methods (With Examples show how these two methods works)**
*(15 Marks)*

> [!Tip]- Answer (Click to show)
> **i. Introduction to JSON:**
>
> **JSON (JavaScript Object Notation):**
> - JSON is a lightweight data interchange format.
> - It is easy for humans to read and write, and easy for machines to parse and generate.
> - Often used to transmit data between a server and a web application.
> - Consists of key-value pairs, similar to JavaScript objects.
>
> **ii. Explore JavaScript Objects:**
>
> **JavaScript Objects:**
>
> In JavaScript, an object is a collection of key-value pairs. Objects can contain primitive data types, other objects, and functions. Objects in JavaScript are dynamic, allowing properties to be added or removed.
>
> **Display JS Objects in Browsers (using DOM):**
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Display JavaScript Objects</title>
> </head>
> <body>
>     <script>
>         // JavaScript object
>         var person = {
>             name: "John Doe",
>             age: 30,
>             city: "New York"
>         };
>
>         // Displaying object properties using DOM
>         for (var key in person) {
>             if (person.hasOwnProperty(key)) {
>                 var paragraph = document.createElement("p");
>                 paragraph.textContent = key + ": " + person[key];
>                 document.body.appendChild(paragraph);
>             }
>         }
>     </script>
> </body>
> </html>
> ```
>
> **iii. How to Use JSON Objects:**
>
> **Fetching and Displaying JSON Data from a Web Server:**
>
> ```javascript
> // Using JSON to fetch data from a web server
> fetch("https://api.example.com/data")
>     .then(response => response.json())
>     .then(data => {
>         // Display data in the browser
>         var outputDiv = document.getElementById("output");
>         outputDiv.innerHTML = "Name: " + data.name + "<br>Age: " + data.age + "<br>City: " + data.city;
>     })
>     .catch(error => console.error("Error fetching data:", error));
> ```
>
> In this example, the `fetch` function is used to make a request to a web server that returns JSON data. The `response.json()` method is used to parse the JSON data, and the result is then displayed in the browser.
>
> **iv. JSON stringify and parse Methods:**
>
> **JSON.stringify:** The `JSON.stringify` method converts a JavaScript object or value to a JSON string.
>
> ```javascript
> var person = {name: "John Doe", age: 30, city: "New York"};
> var jsonString = JSON.stringify(person);
> console.log(jsonString);
> // Output: '{"name":"John Doe","age":30,"city":"New York"}'
> ```
>
> **JSON.parse:** The `JSON.parse` method parses a JSON string and returns a JavaScript object.
>
> ```javascript
> var jsonString = '{"name":"John Doe","age":30,"city":"New York"}';
> var person = JSON.parse(jsonString);
> console.log(person.name);
> // Output: 'John Doe'
> ```
>
> These methods are useful for converting data between JavaScript objects and JSON strings. `stringify` is used when you want to send data to a server or store it, while `parse` is used when you receive JSON data and need to work with it in your JavaScript code.

---

## Simple Calculator Interface

**Question: Create user interface for a simple calculator. The Interface should have a title (Simple calculator), Buttons for simple mathematical operations (+,-,*,/), icon, Button to clear the calculator, Edit Texts(numbers) for accepting the user inputs, Text View for displaying the answer, a nice background color.**
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Simple Calculator</title>
>     <style>
>         body {
>             background-color: #f0f0f0;
>             font-family: Arial, sans-serif;
>             text-align: center;
>             margin: 50px;
>         }
>
>         #calculator {
>             width: 300px;
>             margin: auto;
>             padding: 20px;
>             background-color: #fff;
>             border-radius: 10px;
>             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
>         }
>
>         input, button {
>             margin: 5px;
>             padding: 10px;
>             font-size: 16px;
>         }
>
>         input[type="text"], input[type="number"] {
>             width: 100%;
>             box-sizing: border-box;
>             padding: 10px;
>             margin: 5px 0;
>         }
>
>         #result {
>             margin-top: 10px;
>             font-size: 20px;
>             font-weight: bold;
>         }
>     </style>
> </head>
> <body>
>     <div id="calculator">
>         <h2>Simple Calculator</h2>
>         <input type="text" id="input1" placeholder="Enter number">
>         <input type="text" id="input2" placeholder="Enter number">
>         <div>
>             <button onclick="add()">+</button>
>             <button onclick="subtract()">-</button>
>             <button onclick="multiply()">*</button>
>             <button onclick="divide()">/</button>
>         </div>
>         <input type="number" id="result" readonly>
>         <button onclick="clearCalculator()">Clear</button>
>     </div>
>
>     <script>
>         function add() {
>             var num1 = parseInt(document.getElementById('input1').value);
>             var num2 = parseInt(document.getElementById('input2').value);
>             document.getElementById('result').value = num1 + num2;
>         }
>
>         function subtract() {
>             var num1 = parseInt(document.getElementById('input1').value);
>             var num2 = parseInt(document.getElementById('input2').value);
>             document.getElementById('result').value = num1 - num2;
>         }
>
>         function multiply() {
>             var num1 = parseInt(document.getElementById('input1').value);
>             var num2 = parseInt(document.getElementById('input2').value);
>             document.getElementById('result').value = num1 * num2;
>         }
>
>         function divide() {
>             var num1 = parseInt(document.getElementById('input1').value);
>             var num2 = parseInt(document.getElementById('input2').value);
>             document.getElementById('result').value = num1 / num2;
>         }
>
>         function clearCalculator() {
>             document.getElementById('input1').value = "";
>             document.getElementById('input2').value = "";
>             document.getElementById('result').value = "";
>         }
>     </script>
> </body>
> </html>
> ```

---

## Address Book XML with DTD

**Question: A simple address book. One wishes to design an address book in XML. For each entry of the address book, one wants to store the following information:**
- **The person name**
- **Home address**
- **Telephone number (can be more just one)**
- **E-mail address (it can be more e-mail addresses)**
- **Birth date**

**To do list:**
1. **Write a DTD for the address book.**
2. **Write a valid XML file with at least two entries that must illustrate all the possibilities of writing data.**
3. **Put all in a file and save as addressBook.xml.**
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> **DTD for Address Book (addressBook.dtd):**
>
> ```dtd
> <!ELEMENT addressBook (entry+)>
> <!ELEMENT entry (name, address, telephone*, email*, birthdate?)>
> <!ELEMENT name (#PCDATA)>
> <!ELEMENT address (#PCDATA)>
> <!ELEMENT telephone (#PCDATA)>
> <!ELEMENT email (#PCDATA)>
> <!ELEMENT birthdate (#PCDATA)>
> <!ATTLIST entry id ID #REQUIRED>
> ```
>
> In this DTD:
> - `addressBook` is the root element and contains one or more `entry` elements.
> - Each `entry` has the following child elements: `name`, `address`, zero or more `telephone` elements, zero or more `email` elements, and an optional `birthdate` element.
> - The `entry` element has an attribute `id` with type `ID` which is required and must be unique within the document.
>
> **Valid XML File (addressBook.xml):**
>
> ```xml
> <?xml version="1.0" encoding="UTF-8"?>
> <!DOCTYPE addressBook SYSTEM "addressBook.dtd">
>
> <addressBook>
>     <entry id="1">
>         <name>John Doe</name>
>         <address>123 Main St, Cityville</address>
>         <telephone>123-456-7890</telephone>
>         <telephone>987-654-3210</telephone>
>         <email>john.doe@example.com</email>
>         <email>john@example.org</email>
>         <birthdate>1990-05-15</birthdate>
>     </entry>
>
>     <entry id="2">
>         <name>Jane Smith</name>
>         <address>456 Oak St, Townsville</address>
>         <telephone>555-123-4567</telephone>
>         <email>jane.smith@example.com</email>
>         <birthdate>1985-08-20</birthdate>
>     </entry>
> </addressBook>
> ```
>
> In this XML file:
> - The `addressBook` element is the root element.
> - Two `entry` elements represent two entries in the address book, each with a unique `id` attribute.
> - Each entry contains information such as `name`, `address`, one or more `telephone` numbers, one or more `email` addresses, and an optional `birthdate`.
>
> Please make sure that the `addressBook.dtd` file is in the same directory as the `addressBook.xml` file, or you can adjust the `SYSTEM` identifier in the `DOCTYPE` declaration to specify the correct path.

---

## Car Details XML

**Question One: Create a well-formed XML document containing details of a car like: id, company name, model, engine and mileage.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> ```xml
> <?xml version="1.0" encoding="UTF-8"?>
> <carDetails>
>     <car>
>         <id>1</id>
>         <companyName>Toyota</companyName>
>         <model>Camry</model>
>         <engine>2.5L V6</engine>
>         <mileage>30 mpg</mileage>
>     </car>
>     <car>
>         <id>2</id>
>         <companyName>Honda</companyName>
>         <model>Accord</model>
>         <engine>1.5L Turbocharged Inline-4</engine>
>         <mileage>35 mpg</mileage>
>     </car>
> </carDetails>
> ```
>
> This XML document is well-formed as it follows the basic rules of XML, such as having a single root element (`carDetails`), properly nested elements, and correct opening and closing tags.

---

**Question Two: Create a valid XML document containing details of a car like: id, company name, model, engine and mileage using DTD.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> **DTD for Car Details (carDetails.dtd):**
>
> ```dtd
> <!ELEMENT carDetails (car+)>
> <!ELEMENT car (id, companyName, model, engine, mileage)>
> <!ELEMENT id (#PCDATA)>
> <!ELEMENT companyName (#PCDATA)>
> <!ELEMENT model (#PCDATA)>
> <!ELEMENT engine (#PCDATA)>
> <!ELEMENT mileage (#PCDATA)>
> ```
>
> **XML Document with DTD (carDetailsWithDTD.xml):**
>
> ```xml
> <?xml version="1.0" encoding="UTF-8"?>
> <!DOCTYPE carDetails SYSTEM "carDetails.dtd">
> <carDetails>
>     <car>
>         <id>1</id>
>         <companyName>Toyota</companyName>
>         <model>Camry</model>
>         <engine>2.5L V6</engine>
>         <mileage>30 mpg</mileage>
>     </car>
>     <car>
>         <id>2</id>
>         <companyName>Honda</companyName>
>         <model>Accord</model>
>         <engine>1.5L Turbocharged Inline-4</engine>
>         <mileage>35 mpg</mileage>
>     </car>
> </carDetails>
> ```
>
> - The DTD defines the structure of the XML document.
> - The `carDetails` element contains one or more `car` elements.
> - Each `car` element contains elements for `id`, `companyName`, `model`, `engine`, and `mileage`.
> - The XML document includes a `DOCTYPE` declaration pointing to the DTD file.

---

## Student Grade Program

**Question One: Write a program to check student grade based on marks Conditions:**
- **If marks are 60% or more, grade will be First Division.**
- **If marks between 45% to 59%, grade will be Second Division.**
- **If marks between 33% to 44%, grade will be Third Division.**
- **If marks are less than 33%, student will be Fail.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Student Grade Checker</title>
> </head>
> <body>
>     <script>
>         function calculateGrade(marks) {
>             if (marks >= 60) {
>                 return "First Division";
>             } else if (marks >= 45 && marks <= 59) {
>                 return "Second Division";
>             } else if (marks >= 33 && marks <= 44) {
>                 return "Third Division";
>             } else {
>                 return "Fail";
>             }
>         }
>
>         // Example usage
>         var studentMarks = 75;
>         var result = calculateGrade(studentMarks);
>         console.log("Student Grade:", result);
>     </script>
> </body>
> </html>
> ```

---

## Day of the Week Program

**Question Two: Write a program to show day of the week (for example: Monday) based on numbers using switch/case statements. Conditions:**
- **You can pass 1 to 7 number in switch.**
- **Day 1 will be considered as Monday.**
- **If number is not between 1 to 7, show invalid number in default.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Day of the Week</title>
> </head>
> <body>
>     <script>
>         function getDayOfWeek(dayNumber) {
>             switch (dayNumber) {
>                 case 1:
>                     return "Monday";
>                 case 2:
>                     return "Tuesday";
>                 case 3:
>                     return "Wednesday";
>                 case 4:
>                     return "Thursday";
>                 case 5:
>                     return "Friday";
>                 case 6:
>                     return "Saturday";
>                 case 7:
>                     return "Sunday";
>                 default:
>                     return "Invalid Number";
>             }
>         }
>
>         // Example usage
>         var dayNumber = 3;
>         var dayOfWeek = getDayOfWeek(dayNumber);
>         console.log("Day of the Week:", dayOfWeek);
>     </script>
> </body>
> </html>
> ```

---

## Array to String Conversion

**Question Three: Write a PHP program that converts Array to String. Instructions:**
- **Create a form that accept name as well as colors.**
- **After submission, form data will be sent to another page.**
- **Display selected colors (as a list) and user name.**
- **Note: User name & colors selection is mandatory.**
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> **Form Page (form.html):**
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Array to String Conversion</title>
> </head>
> <body>
>     <form action="process.php" method="post">
>         <label for="name">Name:</label>
>         <input type="text" name="name" required>
>
>         <label for="colors">Select Colors:</label>
>         <select name="colors[]" multiple required>
>             <option value="red">Red</option>
>             <option value="green">Green</option>
>             <option value="blue">Blue</option>
>         </select>
>
>         <input type="submit" value="Submit">
>     </form>
> </body>
> </html>
> ```
>
> **Processing Page (process.php):**
> ```php
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Array to String Conversion - Result</title>
> </head>
> <body>
>     <?php
>     if($_SERVER["REQUEST_METHOD"] == "POST") {
>         $name = $_POST["name"];
>         $colors = $_POST["colors"];
>
>         echo "<p>Name: $name</p>";
>         echo "<p>Selected Colors:</p>";
>         echo "<ul>";
>         foreach ($colors as $color) {
>             echo "<li>$color</li>";
>         }
>         echo "</ul>";
>     }
>     ?>
> </body>
> </html>
> ```
>
> In the example above, the HTML form (form.html) accepts the user's name and allows them to select multiple colors. When the form is submitted, the data is sent to process.php, where it is displayed with the selected colors as a list. The `[]` in the name attribute of the select element allows multiple selections to be submitted as an array.

---

## Factorial Using Recursive Function

**Question One: Write a PHP program to find factorial of a number using recursive function.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Factorial Calculator</title>
> </head>
> <body>
>     <?php
>     function calculateFactorial($number) {
>         if ($number == 0 || $number == 1) {
>             return 1;
>         } else {
>             return $number * calculateFactorial($number - 1);
>         }
>     }
>
>     // Example usage
>     $number = 5;
>     $factorial = calculateFactorial($number);
>     echo "Factorial of $number is: $factorial";
>     ?>
> </body>
> </html>
> ```
>
> **What is Recursive Function?**
>
> A recursive function is a function that calls itself.
>
> **Recursive Function Explanation:**
>
> A recursive function is a function that calls itself. In the example, `calculateFactorial` is a recursive function that calculates the factorial of a number. The base case checks if the number is 0 or 1, in which case the factorial is 1. Otherwise, the function calls itself with a decremented number.

---

## Simple Calculator with Switch Case

**Question Two: Write a simple calculator program in PHP using switch case Operations:**
- **Addition**
- **Subtraction**
- **Multiplication**
- **Division**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Simple Calculator</title>
> </head>
> <body>
>     <?php
>     function calculate($num1, $num2, $operation) {
>         switch ($operation) {
>             case 'add':
>                 return $num1 + $num2;
>             case 'subtract':
>                 return $num1 - $num2;
>             case 'multiply':
>                 return $num1 * $num2;
>             case 'divide':
>                 if ($num2 != 0) {
>                     return $num1 / $num2;
>                 } else {
>                     return "Cannot divide by zero";
>                 }
>             default:
>                 return "Invalid operation";
>         }
>     }
>
>     // Example usage
>     $num1 = 10;
>     $num2 = 5;
>     $operation = 'add'; // Change the operation as needed
>     $result = calculate($num1, $num2, $operation);
>     echo "Result of $num1 $operation $num2 is: $result";
>     ?>
> </body>
> </html>
> ```
>
> **Calculator Program Explanation:**
>
> The program defines a function `calculate` that takes two numbers and an operation as parameters. The switch statement checks the operation and performs the corresponding calculation. Example usage calculates the result of the operation and displays it. Operations supported: Addition, Subtraction, Multiplication, and Division.

---

## XML Student Web Service

**Question: XML plays an important role in the current world of web development. It is completely beneficial for those who want to use web technology to distribute information across the web. You have been asked to write a web application that will read data from the web service in XML file and display them in a web browser.**

**Step One: Create a web service in xml format. The XML web service should contain information of the students such as: Students first name, last name, Reg#, Age, Gender, Courses, and Program.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> **Step One: Create a Web Service in XML Format (students.xml)**
>
> ```xml
> <?xml version="1.0" encoding="UTF-8"?>
> <students>
>     <student>
>         <firstName>John</firstName>
>         <lastName>Doe</lastName>
>         <regNumber>12345</regNumber>
>         <age>22</age>
>         <gender>Male</gender>
>         <courses>
>             <course>Mathematics</course>
>             <course>Physics</course>
>             <course>Computer Science</course>
>         </courses>
>         <program>Engineering</program>
>     </student>
>     <student>
>         <firstName>Jane</firstName>
>         <lastName>Smith</lastName>
>         <regNumber>67890</regNumber>
>         <age>21</age>
>         <gender>Female</gender>
>         <courses>
>             <course>History</course>
>             <course>English</course>
>             <course>Psychology</course>
>         </courses>
>         <program>Arts</program>
>     </student>
> </students>
> ```

---

**Step Two: Write the PHP code that will read the XML document and display the results in a web browser.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> **Step Two: PHP Code to Read and Display Data in a Web Browser (display_students.php)**
>
> ```php
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Student Information</title>
>     <style>
>         table {
>             width: 100%;
>             border-collapse: collapse;
>             margin-top: 20px;
>         }
>         th, td {
>             border: 1px solid #ddd;
>             padding: 8px;
>             text-align: left;
>         }
>         th {
>             background-color: #f2f2f2;
>         }
>     </style>
> </head>
> <body>
>     <?php
>     // Load XML file
>     $xmlFile = 'students.xml';
>     $xml = simplexml_load_file($xmlFile);
>
>     // Check if XML is loaded successfully
>     if ($xml === false) {
>         die('Error loading XML file.');
>     }
>
>     // Display student information in a table
>     echo '<h2>Student Information</h2>';
>     echo '<table>';
>     echo '<tr>';
>     echo '<th>First Name</th>';
>     echo '<th>Last Name</th>';
>     echo '<th>Registration Number</th>';
>     echo '<th>Age</th>';
>     echo '<th>Gender</th>';
>     echo '<th>Courses</th>';
>     echo '<th>Program</th>';
>     echo '</tr>';
>
>     foreach ($xml->student as $student) {
>         echo '<tr>';
>         echo '<td>' . $student->firstName . '</td>';
>         echo '<td>' . $student->lastName . '</td>';
>         echo '<td>' . $student->regNumber . '</td>';
>         echo '<td>' . $student->age . '</td>';
>         echo '<td>' . $student->gender . '</td>';
>         echo '<td>' . implode(', ', (array)$student->courses->course) . '</td>';
>         echo '<td>' . $student->program . '</td>';
>         echo '</tr>';
>     }
>     echo '</table>';
>     ?>
> </body>
> </html>
> ```
>
> **Explanation:**
>
> The PHP code uses the `simplexml_load_file` function to load the XML file (`students.xml`). It then iterates through each `<student>` element in the XML and displays the student information in an HTML table. The `implode` function is used to join the courses into a comma-separated string for display.
>
> To use this application, place both the `students.xml` file and the `display_students.php` file in the same directory on your web server. Access the `display_students.php` file in a web browser to see the student information displayed in a tabular format.

---

*End of Practical Examples and Solutions*