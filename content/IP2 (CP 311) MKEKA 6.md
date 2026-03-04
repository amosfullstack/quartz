
# CP311 - Internet Programming and Applications II
## Employee Management System

---

**Question:**
**iv) Display employee information in a tabular format and provide a hyperlink to update that employee's information. When the user clicks Edit Info, the employee's information should be updated.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> **Click on the "Edit info" link To Edit Employee's Information**
>
> | Emp No | Emp Name | Update Details |
> |--------|----------|----------------|
> | 1 | George | [Edit Info](#) |
> | 2 | John | [Edit Info](#) |
> | 3 | Kevin | [Edit Info](#) |
>
> **PHP Code to Display Employee Information with Edit Links:**
>
> ```php
> <?php
> // Assume $employeeData is an array containing employee information fetched from the database
> foreach ($employeeData as $employee) {
>     echo "<tr>";
>     echo "<td>".$employee['empno']."</td>";
>     echo "<td>".$employee['eFname']." ".$employee['eLname']."</td>";
>     echo "<td><a href='update_employee.php?empno=".$employee['empno']."'>Edit Info</a></td>";
>     echo "</tr>";
> }
> ?>
> ```

---

**i) Display the employee information in tabular format:**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **SQL Query:**
> ```sql
> SELECT * FROM Employee;
> ```
>
> **HTML Table Output:**
>
> | empno | eFname | eLname | eEmail | post | salary |
> |-------|--------|--------|--------|------|--------|
> | 1 | Steven | Jobs | jobs@gmail.com | Manager | 100000 |
> | 2 | John | Stewart | jstewart@hotmail.com | President | 200000 |
> | 3 | Kevin | Yondani | kyondani@yaoo.com | Manager | 210000 |
> | 4 | Tom | Jerry | tojerry@hotmail.com | CEO | 200000 |
> | 5 | Rachel | Kyonzo | kyonzo@yahoo.com | Accounts | 100000 |

---

**ii) HTML form to insert employee details into the database using Bootstrap:**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Add Employee</title>
>     <!-- Bootstrap CSS -->
>     <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
> </head>
> <body>
>     <div class="container">
>         <h2>Add Employee</h2>
>         <form action="insert_employee.php" method="POST">
>             <div class="form-group">
>                 <label for="empno">Employee Number:</label>
>                 <input type="number" class="form-control" id="empno" name="empno">
>             </div>
>             <div class="form-group">
>                 <label for="eFname">First Name:</label>
>                 <input type="text" class="form-control" id="eFname" name="eFname">
>             </div>
>             <div class="form-group">
>                 <label for="eLname">Last Name:</label>
>                 <input type="text" class="form-control" id="eLname" name="eLname">
>             </div>
>             <div class="form-group">
>                 <label for="eEmail">Email:</label>
>                 <input type="email" class="form-control" id="eEmail" name="eEmail">
>             </div>
>             <div class="form-group">
>                 <label for="post">Post:</label>
>                 <input type="text" class="form-control" id="post" name="post">
>             </div>
>             <div class="form-group">
>                 <label for="salary">Salary:</label>
>                 <input type="number" class="form-control" id="salary" name="salary">
>             </div>
>             <button type="submit" class="btn btn-primary">Submit</button>
>         </form>
>     </div>
> </body>
> </html>
> ```

---

**iii) HTML form with dropdown box filled with employee numbers:**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```html
> <div class="form-group">
>     <label for="employeeSelect">Select Employee:</label>
>     <select class="form-control" id="employeeSelect" name="employeeSelect">
>         <?php
>         // Assume $employees is an array containing employee numbers fetched from the database
>         foreach ($employees as $employee) {
>             echo "<option value='$employee'>$employee</option>";
>         }
>         ?>
>     </select>
> </div>
> ```

---

## HTML Validation

**Question: The HTML document below won't validate and would generate errors and warnings in the W3C validator. However it is possible to make 5 modifications to the HTML to make it pass validation.**

**Each validation may result in multiple text "changes" to the HTML document, but it is considered one modification because it is addressing the same root problem. Indicate the 5 modifications we need in order to make it pass validation.**

```html
<!DOCTYPE html>
<head>
<html>Welcome to college of Informatics and Virtual Education</h1>
<link src="mypage.css" type="text/css" rel="stylesheet"/>
</head>
<body>
<p>For Department of computer science and Engineering</p>
<ul>
<li> Bsc. In computer Science</li>
<li> Bsc. In Software Engineering</li>
</ul>
For Department of Electronics and Telecommunication Engineering
<ul>
<li> Bsc. In Telecommunication Engineering</li>
<li> Diploma in Telecommunication</li>
<li> Diploma in Computer Networks</li>
</ul>
</body>
<!DOCTYPE html>
```
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> Here are the 5 modifications needed to make the HTML document pass validation:
>
> **1. Change `<link src="mypage.css" type="text/css" rel="stylesheet"/>` to `<link href="mypage.css" type="text/css" rel="stylesheet">`:**
> - Change `src` attribute to `href`
> - Remove self-closing `/` at the end of the `<link>` tag
>
> **2. Change `<head>` to `<head>`:**
> - Correct the opening tag of the `<head>` element (add missing opening tag)
>
> **3. Change `<body>` to `<body>`:**
> - Correct the opening tag of the `<body>` element (add missing opening tag)
>
> **4. Change `</li>` to `</li>`:**
> - Remove the space between `<` and `/` in closing `</li>` tags
>
> **5. Change `</!DOCTYPE html>` to `</html>`:**
> - Correct the closing tag of the `<html>` element
>
> **After applying these modifications, the HTML document should pass validation. Below is the corrected version:**
>
> ```html
> <!DOCTYPE html>
> <html>
> <head>
>     <title>Welcome to college of Informatics and Virtual Education</title>
>     <link href='mypage.css' type='text/css' rel='stylesheet'>
> </head>
> <body>
>     <h1>Welcome to college of Informatics and Virtual Education</h1>
>     <p>For Department of computer science and Engineering</p>
>     <ul>
>         <li>Bsc. In computer Science</li>
>         <li>Bsc. In Software Engineering</li>
>     </ul>
>     <p>For Department of Electronics and Telecommunication Engineering</p>
>     <ul>
>         <li>Bsc. In Telecommunication Engineering</li>
>         <li>Diploma in Telecommunication</li>
>         <li>Diploma in Computer Networks</li>
>     </ul>
> </body>
> </html>
> ```

---

## Form Validation with JavaScript

**Question: Given the HTML file below with a form captioned "Registration Form". Write an external JavaScript file and name it CS312.js which will do the following:**

**i) modify the given HTML file by providing a link to the external JavaScript.**
**ii) if the user tries to submit the form with one of the fields empty, an alert should be raised telling him/her to fill the field.**
**iii) if the user tries to submit the form with invalid email or password, an alert should be raised telling him/her to fill the form with valid data.**
**iv) modify the given HTML file by calling a JavaScript function that validates the HTML form.**
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> **External JavaScript File (CS312.js):**
>
> ```javascript
> // Function to validate the form
> function validateForm() {
>     // Get form fields
>     var name = document.forms["regForm"]["name"].value;
>     var email = document.forms["regForm"]["email"].value;
>     var password = document.forms["regForm"]["password"].value;
>
>     // Check if any field is empty
>     if (name == "" || email == "" || password == "") {
>         alert("All fields must be filled out");
>         return false;
>     }
>
>     // Validate email format
>     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
>     if (!emailPattern.test(email)) {
>         alert("Please enter a valid email address");
>         return false;
>     }
>
>     // Validate password (at least 6 characters)
>     if (password.length < 6) {
>         alert("Password must be at least 6 characters long");
>         return false;
>     }
>
>     return true;
> }
> ```
>
> **Modified HTML File with Link to External JavaScript:**
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Registration Form</title>
>     <!-- Link to external JavaScript file -->
>     <script src="CS312.js"></script>
> </head>
> <body>
>     <h2>Registration Form</h2>
>     <form name="regForm" onsubmit="return validateForm()" method="post">
>         <label for="name">Name:</label>
>         <input type="text" id="name" name="name"><br><br>
>
>         <label for="email">Email:</label>
>         <input type="text" id="email" name="email"><br><br>
>
>         <label for="password">Password:</label>
>         <input type="password" id="password" name="password"><br><br>
>
>         <input type="submit" value="Submit">
>     </form>
> </body>
> </html>
> ```

---

## Page View Counter with Cookies

**Question: Make a web page that uses a cookie to keep track of how many times a user has viewed the page. The first time a particular user looks at the page, it should print something like "Number of views:1" The second time the user looks at the page, it should print "Number of views: 2" and so on.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> You can achieve this using JavaScript to handle cookies and update the view count. Below is an example of a simple HTML page that does this:
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>View Count Tracker</title>
> </head>
> <body>
>     <h1>View Count Tracker</h1>
>     <p id="viewCount"></p>
>
>     <script>
>         // Function to set a cookie
>         function setCookie(cname, cvalue, exdays) {
>             var d = new Date();
>             d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
>             var expires = "expires="+d.toUTCString();
>             document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
>         }
>
>         // Function to get a cookie
>         function getCookie(cname) {
>             var name = cname + "=";
>             var decodedCookie = decodeURIComponent(document.cookie);
>             var ca = decodedCookie.split(';');
>             for(var i = 0; i < ca.length; i++) {
>                 var c = ca[i];
>                 while (c.charAt(0) == ' ') {
>                     c = c.substring(1);
>                 }
>                 if (c.indexOf(name) == 0) {
>                     return c.substring(name.length, c.length);
>                 }
>             }
>             return "";
>         }
>
>         // Function to check if cookie exists and update view count
>         function checkCookie() {
>             var user = "user"; // You can change this to any identifier you prefer
>             var views = getCookie(user);
>             if (views != "") {
>                 views = parseInt(views) + 1;
>             } else {
>                 views = 1;
>             }
>             setCookie(user, views, 365); // Cookie expires in 365 days
>             document.getElementById("viewCount").innerHTML = "Number of views: " + views;
>         }
>
>         // Call the checkCookie function when the page loads
>         window.onload = function() {
>             checkCookie();
>         }
>     </script>
> </body>
> </html>
> ```
>
> This code sets a cookie with the name "user" to keep track of the number of views. It retrieves the value of the cookie, increments it by 1, and updates the cookie with the new value each time the page is loaded. Finally, it displays the view count on the webpage.

---

## Database and Table Creation

**Question:**
**A) Write an SQL script to create a table called users in a database, with the following fields (assume the specific database has already been accessed).**
- **id, which is the primary key and value is provided by the database server.**
- **Username, which has an appropriate string format.**
- **password, with a format specific for the SHA encryption algorithm.**
- **reg_date, with an appropriate date format.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> Certainly! Below is an SQL script to create a table called users with the specified fields:
>
> ```sql
> CREATE TABLE IF NOT EXISTS users (
>     id INT AUTO_INCREMENT PRIMARY KEY,
>     username VARCHAR(255) NOT NULL,
>     password CHAR(40) NOT NULL, -- Assuming SHA encryption results in 40 characters
>     reg_date DATE NOT NULL
> );
> ```
>
> **Explanation:**
>
> - **`id INT AUTO_INCREMENT PRIMARY KEY`**: This creates an auto-incrementing primary key field named `id`, which uniquely identifies each record in the table.
>
> - **`username VARCHAR(255) NOT NULL`**: This defines a field named `username` to store usernames of up to 255 characters. The `NOT NULL` constraint ensures that every record must have a username.
>
> - **`password CHAR(40) NOT NULL`**: This defines a field named `password` to store passwords. The `CHAR(40)` data type is suitable for storing hashed passwords generated using SHA encryption (assuming SHA-1 which produces 40 characters). The `NOT NULL` constraint ensures that every record must have a password.
>
> - **`reg_date DATE NOT NULL`**: This defines a field named `reg_date` to store registration dates. The `DATE` data type is used to store dates. The `NOT NULL` constraint ensures that every record must have a registration date.
>
> You can execute this SQL script in your database management tool or interface to create the `users` table with the specified fields.

---

**B) Which PHP functions are used to achieve the following with a MySQL database server on the local machine.**

**i) connect the server with username root and password carrot2go.**
**ii) select a database called ad006 to be used for queries.**
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **i) Connect the server with username root and password carrot2go:**
>
> **MySQLi:**
> ```php
> <?php
> $mysqli = new mysqli("localhost", "root", "carrot2go");
> if ($mysqli->connect_error) {
>     die("Connection failed: ". $mysqli->connect_error);
> }
> ?>
> ```
>
> **PDO:**
> ```php
> <?php
> try {
>     $pdo = new PDO('mysql:host=localhost', 'root', 'carrot2go');
> } catch(PDOException $e) {
>     echo "Connection failed: ". $e->getMessage();
>     die();
> }
> ?>
> ```
>
> **ii) Select a database called ad006 to be used for queries:**
>
> **MySQLi:**
> ```php
> <?php
> $mysqli->select_db('ad006');
> ?>
> ```
>
> **PDO:**
> ```php
> <?php
> $pdo->exec('USE ad006');
> ?>
> ```
>
> These functions establish a connection to the MySQL database server, select the specified database, and handle errors appropriately. You can use either MySQLi or PDO, depending on your preference and project requirements.

---

## PHP Configuration and Array Operations

**Question:**
**A) write a PHP script to get the PHP version and configuration information.**
**B) what is the difference between echo and print.**
**C) Describe the difference between client/server interactions in traditional web applications and client/server interactions in Ajax web applications.**
**D) Consider the following associative array:**
```php
<?php
$ManU = array (
    'Rashford' => '25',
    'Pogba' => '24',
    'Degea' => '22',
    'Martial' => '25'
);
?>
```
**i) write a PHP script to add new element with the key "Wan-Bisaka" and value "24".**
**ii) write PHP code to remove the element with the key "Pogba".**
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> **A) PHP script to get the PHP version and configuration information:**
>
> ```php
> <?php
> // Get PHP version
> echo "PHP Version: ". phpversion(). "<br>";
>
> // Get PHP configuration information
> phpinfo();
> ?>
> ```
>
> **B) Difference between echo and print:**
>
> - **echo**: It can take multiple parameters, and it doesn't return a value. It's faster than print. It's commonly used to output strings or variables.
> - **print**: It can only take one parameter, and it returns 1, so it can be used in expressions. It's slower than echo.
>
> **C) Difference between client/server interactions in traditional web applications and client/server interactions in Ajax web applications:**
>
> - **Traditional web applications**: In traditional web applications, each user action typically triggers a full page reload. The client sends a request to the server, which processes the request and generates a complete HTML page in response. This entire page is then sent back to the client and displayed in the browser.
>
> - **Ajax web applications**: In Ajax web applications, asynchronous requests are made to the server from the client-side JavaScript code. These requests are typically XMLHttpRequests (XHR), which allow data to be sent and received in the background without interfering with the user's interaction with the page. The server processes these requests and returns data (usually in JSON or XML format) instead of entire HTML pages. The client-side JavaScript then updates the DOM dynamically based on the received data, without requiring a full page reload.
>
> **D) PHP script to add a new element with the key 'Wan-Bisaka' and value '24', and to remove the element with the key 'Pogba':**
>
> ```php
> <?php
> $ManU = array (
>     'Rashford' => '25',
>     'Pogba' => '24',
>     'Degea' => '22',
>     'Martial' => '25'
> );
>
> // Add new element
> $ManU['Wan-Bisaka'] = '24';
>
> // Remove element
> unset($ManU['Pogba']);
>
> // Print the updated array
> print_r($ManU);
> ?>
> ```
>
> **This will output:**
> ```
> Array
> (
>     [Rashford] => 25
>     [Degea] => 22
>     [Martial] => 25
>     [Wan-Bisaka] => 24
> )
> ```

---

## File Upload and JavaScript Functions

**Question:**
**A) With the help of PHP and XHTML write script that can be used to upload and extract a zipped file in the server.**
**B) write a JavaScript function that will make sure the form text box contain numbers only, in case user type a character which is not a number the function must delete the number.**
**C) using XHTML and JavaScript code, build a web page with two text boxes. Make it so that when you change the USD field, the proper conversion to Tsh is written into the Tsh. Box and vise versa. [1 USD is 1700Tsh.] A sample output is shown below:**

**Currency converter**
| USD | Tsh. |
|-----|------|
| 1 | 1700 |
*(15 Marks)*

> [!Tip]- Answer (Click to show)
> **A) PHP script to upload and extract a zipped file on the server:**
>
> ```php
> <?php
> if ($_SERVER["REQUEST_METHOD"] == "POST") {
>     $targetDir = "uploads/";
>     $targetFile = $targetDir . basename($_FILES["fileToUpload"]["name"]);
>     $uploadOk = 1;
>     $fileType = strtolower(pathinfo($targetFile,PATHINFO_EXTENSION));
>
>     // Check if file is a zip file
>     if($fileType != "zip") {
>         echo "Only ZIP files are allowed.";
>         $uploadOk = 0;
>     }
>
>     // Check if $uploadOk is set to 0 by an error
>     if ($uploadOk == 0) {
>         echo "Sorry, your file was not uploaded.";
>     } else {
>         // Upload file
>         if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $targetFile)) {
>             echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.<br>";
>
>             // Extract zip file
>             $zip = new ZipArchive;
>             if ($zip->open($targetFile) === TRUE) {
>                 $zip->extractTo($targetDir);
>                 $zip->close();
>                 echo "File extracted successfully.";
>             } else {
>                 echo "Extraction failed.";
>             }
>         } else {
>             echo "Sorry, there was an error uploading your file.";
>         }
>     }
> }
> ?>
> ```
>
> **XHTML Form for File Upload:**
>
> ```html
> <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
> <html xmlns="http://www.w3.org/1999/xhtml">
> <head>
>     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
>     <title>Upload ZIP File</title>
> </head>
> <body>
>     <h2>Upload a ZIP file</h2>
>     <form action="upload.php" method="post" enctype="multipart/form-data">
>         <input type="file" name="fileToUpload" id="fileToUpload" />
>         <input type="submit" value="Upload" name="submit" />
>     </form>
> </body>
> </html>
> ```
>
> **B) JavaScript function that will make sure the form text box contains numbers only:**
>
> ```html
> <!DOCTYPE html>
> <html>
> <head>
>     <title>Number Only Text Box</title>
>     <script>
>         function allowNumbers(event) {
>             var charCode = event.keyCode;
>             if (charCode < 48 || charCode > 57) {
>                 event.preventDefault();
>                 var textBox = event.target;
>                 var newValue = textBox.value.replace(/[^0-9]/g, "");
>                 textBox.value = newValue;
>             }
>         }
>     </script>
> </head>
> <body>
>     <input type="text" onkeydown="allowNumbers(event)" placeholder="Enter numbers only">
> </body>
> </html>
> ```
>
> **C) Currency Converter Web Page:**
>
> ```html
> <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
> <html xmlns="http://www.w3.org/1999/xhtml">
> <head>
>     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
>     <title>Currency Converter</title>
>     <script>
>         function convertCurrency(source) {
>             var usdBox = document.getElementById('usd');
>             var tshBox = document.getElementById('tsh');
>             var exchangeRate = 1700; // 1 USD = 1700 Tsh
>
>             if (source == 'usd') {
>                 var usdValue = parseFloat(usdBox.value);
>                 if (!isNaN(usdValue)) {
>                     tshBox.value = usdValue * exchangeRate;
>                 } else {
>                     tshBox.value = '';
>                 }
>             } else if (source == 'tsh') {
>                 var tshValue = parseFloat(tshBox.value);
>                 if (!isNaN(tshValue)) {
>                     usdBox.value = tshValue / exchangeRate;
>                 } else {
>                     usdBox.value = '';
>                 }
>             }
>         }
>     </script>
> </head>
> <body>
>     <h2>Currency Converter</h2>
>     <table border="1">
>         <tr>
>             <th>USD</th>
>             <th>Tsh.</th>
>         </tr>
>         <tr>
>             <td><input type="number" id="usd" oninput="convertCurrency('usd')" step="any" /></td>
>             <td><input type="number" id="tsh" oninput="convertCurrency('tsh')" step="any" /></td>
>         </tr>
>     </table>
> </body>
> </html>
> ```

---

## Credit Limit Checker

**Question: Develop a JavaScript program that will determine whether a department-store customer has exceeded the credit limit on charge account. For each customer, the following facts are available.**

**a) account number.**
**b) balance at the beginning of the month.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> ```javascript
> function checkCreditLimit(accountNumber, balance, creditLimit) {
>     // Calculate new balance
>     var newBalance = balance - creditLimit;
>
>     // Check if new balance is less than zero
>     if (newBalance < 0) {
>         console.log("Account Number: " + accountNumber);
>         console.log("Balance at the beginning of the month: " + balance);
>         console.log("Credit Limit: " + creditLimit);
>         console.log("Exceeded credit limit.");
>     } else {
>         console.log("Account Number: " + accountNumber);
>         console.log("Balance at the beginning of the month: " + balance);
>         console.log("Credit Limit: " + creditLimit);
>         console.log("Credit limit not exceeded.");
>     }
> }
>
> // Example usage
> var accountNumber = 123456;
> var balance = 1000;
> var creditLimit = 500;
>
> checkCreditLimit(accountNumber, balance, creditLimit);
> ```
>
> This program defines a function `checkCreditLimit` that takes three parameters: `accountNumber`, `balance`, and `creditLimit`. It calculates the new balance by subtracting the credit limit from the balance. If the new balance is less than zero, it indicates that the credit limit has been exceeded. Otherwise, it indicates that the credit limit has not been exceeded.
>
> You can call this function with the account number, balance, and credit limit of each customer to determine if they have exceeded their credit limit.

---

## PHP, JavaScript, and MySQL Tips

**Question:**
**A) how can we get the browser properties using PHP.**
**B) how can we increase the execution time of a PHP script.**
**C) how can we optimize or increase the speed of MySQL select query.**
**D) how can I know that a variable is a number or not using a JavaScript.**
**E) how can we send email using JavaScript.**
**F) how can we know the number of days between two given dates using PHP.**
*(12 Marks)*

> [!Tip]- Answer (Click to show)
> **A) To get the browser properties using PHP:**
>
> ```php
> <?php
> $browser = $_SERVER['HTTP_USER_AGENT'];
> echo "Browser: ". $browser;
> ?>
> ```
>
> **B) To increase the execution time of a PHP script:**
>
> ```php
> <?php
> set_time_limit(60); // Set maximum execution time to 60 seconds
> ?>
> ```
>
> **C) To optimize or increase the speed of a MySQL SELECT query:**
>
> - Use indexes on columns involved in WHERE, ORDER BY, GROUP BY, or JOIN clauses.
> - Use LIMIT to restrict the number of rows returned, especially when dealing with large datasets.
> - Avoid using SELECT * and only select the columns you actually need.
> - Use EXPLAIN to analyze and optimize query execution plans.
>
> **D) To check if a variable is a number or not using JavaScript:**
>
> ```javascript
> var x = "123";
> if (isNaN(x)) {
>     console.log("Variable is not a number");
> } else {
>     console.log("Variable is a number");
> }
> ```
>
> **E) How to send email using JavaScript:**
>
> JavaScript alone cannot send email directly. You would typically need to use a server-side language like PHP to send email. However, you can use JavaScript to make an AJAX request to a server-side script that handles email sending. Here's a basic example using AJAX and PHP:
>
> ```javascript
> var xhr = new XMLHttpRequest();
> xhr.open("POST", "send_email.php", true);
> xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
> xhr.onreadystatechange = function() {
>     if (xhr.readyState === 4 && xhr.status === 200) {
>         console.log(xhr.responseText);
>     }
> };
> var emailData = "to=recipient@example.com&subject=Test&body=This is a test email.";
> xhr.send(emailData);
> ```
>
> In `send_email.php`, you would handle the email sending logic using PHP's `mail()` function or a library like PHPMailer.
>
> **F) To know the number of days between two given dates using PHP:**
>
> ```php
> <?php
> $date1 = new DateTime('2022-01-01');
> $date2 = new DateTime('2022-01-10');
> $interval = $date1->diff($date2);
> echo "Number of days: " . $interval->days;
> ?>
> ```
>
> This will output: `Number of days: 9`, indicating that there are 9 days between the two dates.

---

## PHP Variable Variable and Array Access

**Question:**
**A) what is the output of the following script:**
```php
<?
$a="b";
$b=20;
$a=11;
echo $$a;
?>
```
**B) what will be the output of the following script:**
```php
<?php
define('FOO',10);
$array = array(10 => FOO, 'FOO' => 20);
print $array[$array[FOO] + $array['FOO']];
?>
```
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **A) Output of the first script:**
>
> 1. `$a="b"`: This assigns the string 'b' to the variable `$a`.
> 2. `$b=20`: This assigns the value 20 to the variable `$b`.
> 3. `$a=11`: This reassigns the value 11 to the variable `$a`.
> 4. `echo $$a`: This is a variable variable. It means it will try to find the variable whose name is the value of `$a` (`$a` contains 'b' at this point), so it will try to find `$b`. Hence, it will output the value of `$b`, which is 20.
>
> **So, the output of the script will be: `20`**
>
> **B) Output of the second script:**
>
> 1. `define('FOO',10)`: This defines a constant named FOO with a value of 10.
> 2. `$array = array(10 => FOO, 'FOO' => 20)`: This creates an array with keys 10 and 'FOO', and their corresponding values are the constant FOO (10) and 20, respectively.
> 3. `print $array[$array[FOO] + $array['FOO']]`: This will try to access the value at the key that results from adding the value of the constant FOO to the value of the key 'FOO' in the array. So, it's equivalent to accessing `$array[10+20]`, which is `$array[30]`. There's no key 30 in the array, so it will output nothing.
>
> **So, the output of the script will be: nothing (or an undefined index notice)**

---

## DTD, CSS, JavaScript Objects, and XML Advantages

**Question:**
**i) what is the document type definition (DTD)? What DTD do you generally use? Why? What are the pros and cons.**
**ii) write a snippet of CSS that will display a paragraph in blue in older browser, red in newer browser, green in IE6, and black in IE7.**
**iii) with the help of code segment, describe three different ways that can be used to create a JavaScript object.**
**iv) explain two advantages of using XML.**
*(15 Marks)*

> [!Tip]- Answer (Click to show)
> **i) Document Type Definition (DTD):**
>
> The Document Type Definition (DTD) is a set of rules that define the structure and the legal elements and attributes of an XML document. It defines the document structure, the allowable elements, and the relationships between them. DTDs are commonly used to validate XML documents against a predefined structure.
>
> **The DTD I generally use is XHTML Transitional.** This DTD allows for the use of deprecated elements and attributes (those that are no longer recommended), as well as newer elements and attributes. It strikes a balance between backward compatibility and support for modern web standards.
>
> **Pros of using a DTD:**
> - Ensures document validity: DTDs define the structure of XML documents, helping ensure that documents adhere to a predefined schema.
> - Provides documentation: DTDs serve as documentation for XML documents, outlining the allowed elements and attributes.
>
> **Cons of using a DTD:**
> - Limited expressiveness: DTDs have limited expressiveness compared to other schema languages like XML Schema or Relax NG.
> - Verbosity: DTD syntax can be verbose and difficult to read for complex documents.
>
> **ii) CSS snippet to display a paragraph in different colors based on browser:**
>
> ```css
> /* Blue in older browsers */
> p {
>     color: blue; /* Default color for older browsers */
> }
>
> /* Red in newer browsers */
> @media not all and (-webkit-min-device-pixel-ratio:0) { /* Webkit browsers */
>     p {
>         color: red;
>     }
> }
>
> @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) { /* IE 10+ */
>     p {
>         color: red;
>     }
> }
>
> /* Green in IE6 */
> * html p {
>     color: green;
> }
>
> /* Black in IE7 */
> *:first-child+html p {
>     color: black;
> }
> ```
>
> **iii) Three different ways to create a JavaScript object:**
>
> **1. Object literal notation:**
> ```javascript
> var person = {
>     firstName: "John",
>     lastName: "Doe",
>     age: 30,
>     fullName: function() {
>         return this.firstName + " " + this.lastName;
>     }
> };
> ```
>
> **2. Constructor function:**
> ```javascript
> function Person(firstName, lastName, age) {
>     this.firstName = firstName;
>     this.lastName = lastName;
>     this.age = age;
>     this.fullName = function() {
>         return this.firstName + " " + this.lastName;
>     };
> }
> var person1 = new Person('John', 'Doe', 30);
> ```
>
> **3. Object.create() method:**
> ```javascript
> var obj = Object.create(null); // Create an object with null prototype
> obj.key1 = value1;
> obj.key2 = value2;
> // Other key-value pairs
> ```
>
> **iv) Advantages of using XML:**
>
> 1. **Platform and language independent:** XML is a language-independent data format, which means it can be used across different platforms and programming languages. This makes it highly interoperable.
>
> 2. **Self-descriptive and human-readable:** XML documents are self-descriptive, meaning they contain metadata about their structure and content. Additionally, XML syntax is human-readable, making it easier for developers to understand and work with.
>
> These advantages make XML a popular choice for data interchange between different systems and for representing structured data in a readable and portable format.

---

## PHP String Functions and Array Storage

**Question:**
**a) what is the value displayed when the following is executed:**
```php
<?php
$email = 'cs312@gmail.com';
$user = strstr($email,'@',true);
echo $user;
?>
```
**b) what is the output of the following php script:**
```php
<?php
$val1 = 42;
if (is_numeric($val1)){
    echo "Integer";
} else{
    echo "Not Integer";
}
$val2 = '42';
if (is_numeric($val2)){
    echo "Integer";
} else{
    echo "Not Integer";
}
?>
```
**c) what happens when a form submitted to a php script contains two elements with the same name?**
**d) how would you store an array in a cookie?**
**e) by default, php stores session data in?**
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> **a) Output of the first script:**
>
> The code snippet contains a syntax error. The correct syntax for using strstr function is with parentheses, not curly braces. Here's the corrected version:
>
> ```php
> <?php
> $email = 'cs312@gmail.com';
> $user = strstr($email, '@', true);
> echo $user;
> ?>
> ```
>
> The output of this code will be: **cs312**
>
> The `strstr` function finds the first occurrence of the '@' character in the string `$email` and returns all characters before it.
>
> **b) Output of the provided PHP script:**
>
> The output will be: **IntegerInteger**
>
> **Explanation:**
> - For `$val1 = 42;`, `is_numeric($val1)` returns true because 42 is a numeric value (an integer). Therefore, it outputs "Integer".
> - For `$val2 = '42';`, `is_numeric($val2)` also returns true because '42' is a numeric string. Therefore, it also outputs "Integer".
>
> **c) When a form submitted to a PHP script contains two elements with the same name:**
>
> When a form submitted to a PHP script contains two elements with the same name, PHP will process them as an array. The values will be stored in an array with the same name. For example, if two form elements have the name "example[]", PHP will create an array named "example" containing the submitted values.
>
> **d) To store an array in a cookie in PHP:**
>
> You need to serialize the array before setting it in the cookie, and then unserialize it when retrieving it. Here's an example:
>
> ```php
> <?php
> // Array to be stored in cookie
> $array = array("apple", "banana", "orange");
>
> // Serialize the array
> $serialized_array = serialize($array);
>
> // Set cookie
> setcookie("my_cookie", $serialized_array, time() + 3600); // Cookie expires in 1 hour
>
> // Retrieve cookie and unserialize
> $retrieved_array = unserialize($_COOKIE["my_cookie"]);
>
> // Use the retrieved array
> print_r($retrieved_array);
> ?>
> ```
>
> **e) By default, PHP stores session data in:**
>
> By default, PHP stores session data in **files on the server's filesystem**. The session data is stored in a temporary directory specified by the `session.save_path` directive in the PHP configuration file (php.ini).

---

## AJAX Questions

**Question One: With example explain how AJAX works.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> **How AJAX Works:**
>
> AJAX (Asynchronous JavaScript and XML) is a technology used to create interactive web applications by exchanging data with a web server asynchronously, without interfering with the current page's content. Here's an example of how AJAX works:
>
> Suppose you have a webpage with a button, and when the user clicks the button, you want to retrieve some data from the server without refreshing the entire page.
>
> 1. User clicks a button on the webpage.
> 2. JavaScript event handler is triggered, which initiates an XMLHttpRequest (XHR) object.
> 3. The XHR object sends an HTTP request to the server asynchronously, usually to a specific URL.
> 4. The server processes the request and returns a response, typically in JSON or XML format.
> 5. The XHR object receives the response from the server.
> 6. JavaScript code processes the response and updates the webpage content dynamically without refreshing the entire page.
>
> **Example:**
>
> ```javascript
> // Create XMLHttpRequest object
> var xhr = new XMLHttpRequest();
>
> // Configure it: GET-request for the URL /data
> xhr.open('GET', '/data', true);
>
> // Set up callback function when request completes
> xhr.onload = function() {
>     if (xhr.status == 200) {
>         // Process the response and update the page
>         document.getElementById('result').innerHTML = xhr.responseText;
>     }
> };
>
> // Send the request
> xhr.send();
> ```

---

**Question Two: Write a code to show how to fetch and display data using AJAX with PHP and Database.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> Here's an example code to fetch and display data using AJAX with PHP and a MySQL database:
>
> **HTML file (index.html):**
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <title>AJAX Example</title>
>     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
>     <script>
>     $(document).ready(function(){
>         $("#fetchDataBtn").click(function(){
>             $.ajax({
>                 url: "fetch_data.php",
>                 type: "GET",
>                 success: function(response){
>                     $("#dataContainer").html(response);
>                 }
>             });
>         });
>     });
>     </script>
> </head>
> <body>
>     <button id="fetchDataBtn">Fetch Data</button>
>     <div id="dataContainer"></div>
> </body>
> </html>
> ```
>
> **PHP file (fetch_data.php):**
> ```php
> <?php
> // Database connection
> $conn = mysqli_connect("localhost", "username", "password", "database");
>
> // Check connection
> if (!$conn) {
>     die("Connection failed: " . mysqli_connect_error());
> }
>
> // Fetch data from database
> $sql = "SELECT * FROM your_table_name";
> $result = mysqli_query($conn, $sql);
>
> // Display data
> if (mysqli_num_rows($result) > 0) {
>     while($row = mysqli_fetch_assoc($result)) {
>         echo $row['column_name'] . "<br>";
>     }
> } else {
>     echo "0 results";
> }
>
> mysqli_close($conn);
> ?>
> ```

---

**Question Three: Write a code to show how to fetch and display data using AJAX with JQuery.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> Here's an example code to fetch and display data using AJAX with jQuery:
>
> **HTML file (index.html):**
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <title>AJAX Example</title>
>     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
>     <script>
>     $(document).ready(function() {
>         $("#fetchDataBtn").click(function() {
>             $.get("fetch_data.php", function(response) {
>                 $("#dataContainer").html(response);
>             });
>         });
>     });
>     </script>
> </head>
> <body>
>     <button id="fetchDataBtn">Fetch Data</button>
>     <div id="dataContainer"></div>
> </body>
> </html>
> ```
>
> **PHP file (fetch_data.php) remains the same as above.**

---

**Question Four: Write a code to show how to fetch and display data using AJAX with XML.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> Here's an example code to fetch and display data using AJAX with XML:
>
> **HTML file (index.html):**
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <title>AJAX Example</title>
>     <script>
>     function fetchData() {
>         var xhr = new XMLHttpRequest();
>         xhr.onreadystatechange = function() {
>             if (xhr.readyState == 4 && xhr.status == 200) {
>                 var xmlDoc = xhr.responseXML;
>                 var dataNodes = xmlDoc.getElementsByTagName("data");
>                 var dataContainer = document.getElementById("dataContainer");
>                 dataContainer.innerHTML = "";
>                 for (var i = 0; i < dataNodes.length; i++) {
>                     var nodeValue = dataNodes[i].childNodes[0].nodeValue;
>                     var para = document.createElement("p");
>                     para.textContent = nodeValue;
>                     dataContainer.appendChild(para);
>                 }
>             }
>         };
>         xhr.open("GET", "fetch_data.xml", true);
>         xhr.send();
>     }
>     </script>
> </head>
> <body>
>     <button onclick="fetchData()">Fetch Data</button>
>     <div id="dataContainer"></div>
> </body>
> </html>
> ```
>
> **XML file (fetch_data.xml):**
> ```xml
> <?xml version="1.0" encoding="UTF-8"?>
> <root>
>     <data>John</data>
>     <data>Doe</data>
>     <data>Alice</data>
>     <data>Bob</data>
> </root>
> ```
>
> In this example, clicking the "Fetch Data" button triggers the `fetchData()` function, which sends an AJAX request to fetch the XML file. The XML response is then parsed, and the data is displayed dynamically on the webpage.

---

## File Filtering with PHP

**Question: Write the PHP code for a web page that filters lines of text from a file. The page should contain a short form with a text box where the user can type a word. The page also displays the current contents of the file text.txt as a pre-formatted block. The form submits back to the same page, filter.php as a POST request when the word is submitted. Your code should examine the contents of text.txt and remove any lines from the file that contain the given word. Case-insensitively. Write the changes to the file so that any future viewings of the page will see the changes. You can write just the code dealing with the page's body. You don't need to output a head section or a complete page.**

**Match the exact word, not other words than contain it as a substring for example, if user submits the word "me" you would filter out lines containing the word "me" but not lines that contain a word such as "men" or "game".**

**If the user makes a POST but somehow does not submit the query parameter for the word, or if the word they submit does not consist entirely of upper/lowercase letters, issue an HTTP 400 error and do not display the rest of the page. Use the browser's default styling.**
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> Here's the PHP code for the web page that filters lines of text from a file based on user input:
>
> ```php
> <?php
> // Check if form submitted
> if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['word'])) {
>     // Validate input
>     $word = $_POST['word'];
>     if (!ctype_alpha($word)) {
>         http_response_code(400); // Bad Request
>         exit;
>     }
>
>     // Read contents of the file into an array
>     $lines = file('text.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
>
>     // Filter lines containing the given word (case-insensitive) as a whole word
>     $filteredLines = array_filter($lines, function($line) use ($word) {
>         // Use regex to match whole word only
>         return !preg_match('/\b' . preg_quote($word, '/') . '\b/i', $line);
>     });
>
>     // Write filtered lines back to the file
>     file_put_contents('text.txt', implode(PHP_EOL, $filteredLines));
>
>     // Redirect to prevent form resubmission
>     header("Location: " . $_SERVER['PHP_SELF']);
>     exit;
> }
>
> // Display current contents of the file
> echo "<pre>";
> echo file_get_contents('text.txt');
> echo "</pre>";
> ?>
>
> <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
>     <label for="word">Enter word to filter:</label>
>     <input type="text" id="word" name="word">
>     <button type="submit">Submit</button>
> </form>
> ```

---

## AJAX Database Access Step-by-Step

**Question: AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page. Step by Step show how you can access information from the database using AJAX and PHP.**

**Step One: Create a table called Users with information (Id, Name, Email, Gender and Age).**
**Step Two: Create an interface where user can insert information to the users table.**
**Step Three: Create a Php file that will process the information entered by the user through the interface.**
**Step Four: Create a function that will receive data sent from the server and will update the section (eg. Div etc) of the same web page you have created in Step Two.**
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> **Step One: Create a table called Users with information (Id, Name, Email, Gender and Age)**
>
> ```sql
> CREATE TABLE Users (
>     Id INT AUTO_INCREMENT PRIMARY KEY,
>     Name VARCHAR(50),
>     Email VARCHAR(50),
>     Gender ENUM('Male', 'Female'),
>     Age INT
> );
> ```
>
> **Step Two: Create an interface where user can insert information to the users table.**
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <title>User Information</title>
>     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
>     <script>
>     $(document).ready(function() {
>         $("#submitBtn").click(function() {
>             var name = $("#name").val();
>             var email = $("#email").val();
>             var gender = $("#gender").val();
>             var age = $("#age").val();
>
>             $.ajax({
>                 url: "process_info.php",
>                 type: "POST",
>                 data: {name: name, email: email, gender: gender, age: age},
>                 success: function(response){
>                     $("#result").html(response);
>                 }
>             });
>         });
>     });
>     </script>
> </head>
> <body>
>     <label for="name">Name:</label>
>     <input type="text" id="name"><br>
>
>     <label for="email">Email:</label>
>     <input type="text" id="email"><br>
>
>     <label for="gender">Gender:</label>
>     <select id="gender">
>         <option value="Male">Male</option>
>         <option value="Female">Female</option>
>     </select><br>
>
>     <label for="age">Age:</label>
>     <input type="number" id="age"><br>
>
>     <button id="submitBtn">Submit</button>
>
>     <div id="result"></div>
> </body>
> </html>
> ```
>
> **Step Three: Create a PHP file that will process the information entered by the user through the interface (process_info.php).**
>
> ```php
> <?php
> // Connect to database
> $servername = "localhost";
> $username = "username";
> $password = "password";
> $dbname = "database";
>
> $conn = new mysqli($servername, $username, $password, $dbname);
>
> // Check connection
> if ($conn->connect_error) {
>     die("Connection failed: ". $conn->connect_error);
> }
>
> // Insert data into database
> $name = $_POST['name'];
> $email = $_POST['email'];
> $gender = $_POST['gender'];
> $age = $_POST['age'];
>
> $sql = "INSERT INTO Users (Name, Email, Gender, Age) VALUES ('$name', '$email', '$gender', $age)";
>
> if ($conn->query($sql) === TRUE) {
>     echo "Record inserted successfully";
> } else {
>     echo "Error: " . $sql . "<br>" . $conn->error;
> }
>
> $conn->close();
> ?>
> ```
>
> **Step Four: Create a function that will receive data sent from the server and will update the section (e.g., div) of the same web page you have created in Step Two.**
>
> In the HTML file above, the `success` callback function in the AJAX request receives the data sent from the server and updates the `#result` div with the response. This demonstrates how to update a section of the web page without reloading the entire page.
>
> This code demonstrates how to insert user information into a database using AJAX and PHP. You can further enhance it by adding error handling and validation.

---

## PHP Programs: Factorial, Calculator, Array to String

**QUESTION ONE: Write a PHP program to find factorial of a number using recursive function. What is Recursive Function?**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> A recursive function is a function that calls itself.
>
> ```php
> <?php
> // Function to calculate factorial recursively
> function factorial($n) {
>     if ($n <= 1) {
>         return 1;
>     } else {
>         return $n * factorial($n - 1);
>     }
> }
>
> // Test the function
> $num = 5;
> echo "Factorial of $num is: " . factorial($num);
> ?>
> ```
>
> **Explanation:**
> - The `factorial()` function takes an integer `$n` as input and calculates its factorial recursively.
> - **Base case:** If `$n` is less than or equal to 1, the factorial is 1.
> - **Recursive case:** Otherwise, the factorial of `$n` is calculated by multiplying `$n` with the factorial of `$n - 1`.

---

**QUESTION TWO: Write a simple calculator program in PHP using switch case Operations:**
- **Addition**
- **Subtraction**
- **Multiplication**
- **Division**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> // Function to perform arithmetic operations
> function calculate($num1, $num2, $operator) {
>     switch ($operator) {
>         case '+':
>             return $num1 + $num2;
>         case '-':
>             return $num1 - $num2;
>         case '*':
>             return $num1 * $num2;
>         case '/':
>             if ($num2 != 0) {
>                 return $num1 / $num2;
>             } else {
>                 return "Cannot divide by zero";
>             }
>         default:
>             return "Invalid operator";
>     }
> }
>
> // Test the function
> $num1 = 10;
> $num2 = 5;
> $operator = '+';
> echo "Result of $num1 $operator $num2 is: " . calculate($num1, $num2, $operator);
> ?>
> ```
>
> **Explanation:**
> - The `calculate()` function takes two numbers `$num1` and `$num2`, and an operator `$operator` as input and performs arithmetic operations based on the operator using a switch case statement.
> - The function returns the result of the operation or an error message if the operator is invalid or division by zero occurs.

---

**QUESTION THREE: Write a PHP program that convert Array to String Instructions:**
- **Create a form that accept name as well as colors.**
- **After submission, form data will be sent to another page.**
- **Display select colors (as a list) and user name.**
- **Note: User name & colors selection is mandatory.**
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> **HTML Form (index.html):**
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <title>Array to String Conversion</title>
> </head>
> <body>
>     <form action="convert.php" method="post">
>         <label for="name">Enter your name:</label>
>         <input type="text" id="name" name="name" required><br><br>
>
>         <label for="colors">Select your favorite colors:</label><br>
>         <select id="colors" name="colors[]" multiple required>
>             <option value="red">Red</option>
>             <option value="blue">Blue</option>
>             <option value="green">Green</option>
>             <option value="yellow">Yellow</option>
>         </select><br><br>
>
>         <button type="submit">Submit</button>
>     </form>
> </body>
> </html>
> ```
>
> **PHP File (convert.php):**
>
> ```php
> <?php
> if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['name']) && isset($_POST['colors'])) {
>     $name = $_POST['name'];
>     $colors = implode(', ', $_POST['colors']);
>     echo "Hello, $name! Your favorite colors are: $colors.";
> } else {
>     http_response_code(400);
>     echo "Bad Request";
> }
> ?>
> ```
>
> **Explanation:**
> - The HTML form (index.html) collects user's name and favorite colors.
> - The form data is submitted to convert.php.
> - In convert.php, the `implode()` function is used to convert the array of colors into a comma-separated string.
> - If the form is submitted with all required data, the script echoes a message displaying the user's name and selected colors. Otherwise, it returns a 400 Bad Request error.

---

