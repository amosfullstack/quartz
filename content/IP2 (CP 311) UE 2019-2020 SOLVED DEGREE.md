
# THE UNIVERSITY OF DODOMA

## COLLEGE OF INFORMATICS AND VIRTUAL EDUCATION

### DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING

---

## UNDERGRADUATE UNIVERSITY EXAMINATIONS

### FIRST SEMESTER 2019/2020

---

**Course Code:** CS 312

**Course Title:** INTERNET PROGRAMMING AND APPLICATIONS

**Date:** 17th February, 2020

**Time Allocated:** 3 Hours

**Start:** 11:45 AM

**End:** 14:45 PM

---

### INSTRUCTIONS:

1. This question paper consists of two sections: A and B
2. Answer ALL questions in section A and ANY Two questions from section B
3. All University of Dodoma Examination Regulations Apply

---

## SECTION A: (60 Marks)

### Question One

**Choose the correct answer for each of the following questions. (1 Mark Each)**

---

**I. Which is the correct way to link to an external stylesheet from a web page?**

A. `<link rel="stylesheet" type="text/css" src="styles.css">`

B. `<link rel="stylesheet" type="text/css" href="styles.css">`

C. `<style href="styles.css" type="text/css">`

D. `<style div{color:blue;} </style>`

> [!Tip]- Answer (Click to show)
> B. `<link rel="stylesheet" type="text/css" href="styles.css">`

---

**II. JavaScript is generally used as: -**

A. a client-side scripting language

B. a server-side scripting language

C. an application development language

D. an embedded language for mobile devices

> [!Tip]- Answer (Click to show)
> A. a client-side scripting language

---

**III. Which JavaScript function is used to open a small window for user input: -**

A. alert()

B. prompt()

C. document.write()

D. init()

> [!Tip]- Answer (Click to show)
> B. prompt()

---

**IV. Which property of a page element (eg a div) is used by JavaScript to alter the content of a page after it has loaded: -**

A. value

B. text

C. firstChild

D. innerHTML

> [!Tip]- Answer (Click to show)
> D. innerHTML

---

**V. Which JavaScript object is used to get data from a server in an AJAX transaction: -**

A. Navigator

B. ajaxObject

C. XMLHttpRequest

D. none of the above

> [!Tip]- Answer (Click to show)
> C. XMLHttpRequest

---

**VI. The JavaScript method used to obtain a reference to an element that has its id attribute set is: -**

A. getElementById()

B. element.getId()

C. document.getElementById()

D. getElementByTagName()

> [!Tip]- Answer (Click to show)
> C. document.getElementById()

---

**VII. Which function is used to place the content of another file into a web page?**

A. place()

B. insert()

C. select()

D. include()

> [!Tip]- Answer (Click to show)
> D. include()

---

**VIII. To maintain state in a web application values can be set in:-**

A. $_SESSION

B. $_REQUEST

C. $_GLOBALS

D. $_POST

> [!Tip]- Answer (Click to show)
> A. $_SESSION

---

**IX. A form has a text field: `<input type="text" name="phone"/>` When the form is submitted to a processing script, the text in this field can be found as the value of the variable:-**

A. $_SESSION['name']

B. $_POST['phone']

C. $name

D. $phone

> [!Tip]- Answer (Click to show)
> B. $_POST['phone']

---

**X. Which is not true of an XML document?**

A. It must have a root element

B. It must have a Schema approved by the W3C

C. All tags must be properly closed

D. The values of any attributes may be written in single quotes

> [!Tip]- Answer (Click to show)
> B. It must have a Schema approved by the W3C

---

### Question Two

**When dealing with files uploaded through HTTP, PHP stores references of them in the super global array. These files must be processed or moved from their temporary location during the lifetime of the PHP script execution or they will be automatically deleted. Write a PHP script to upload a file to a server. (10 Marks)**

> [!Tip]- Answer (Click to show)
> **HTML File: upload_form.html**
> ```html
> <!DOCTYPE html>
> <html>
> <head>
>     <title>File Upload Form</title>
> </head>
> <body>
>     <h2>Upload File</h2>
>     <form action="upload.php" method="post" enctype="multipart/form-data">
>         <label>Select file:</label>
>         <input type="file" name="fileToUpload" required>
>         <br><br>
>         <input type="submit" name="submit" value="Upload File">
>     </form>
> </body>
> </html>
> ```

> [!Tip]- Answer (Click to show)
> **PHP Script: upload.php**
> ```php
> <?php
> // upload.php - Handle file upload
> 
> // 1. Configuration
> $targetDir = "uploads/";               // Directory to store files
> $maxSize = 5 * 1024 * 1024;            // Maximum file size 5MB
> $allowedExt = ['jpg','jpeg','png','gif','pdf','doc','docx','txt']; // Allowed file types
> 
> // 2. Create directory if not exists
> if(!file_exists($targetDir)) mkdir($targetDir, 0777, true);
> 
> // 3. Check if form is submitted
> if(isset($_POST['submit'])) {
> 
>     // 3a. Check for file upload errors
>     if(isset($_FILES['fileToUpload']) && $_FILES['fileToUpload']['error'] == 0) {
> 
>         $fileName = $_FILES['fileToUpload']['name'];
>         $tmpPath  = $_FILES['fileToUpload']['tmp_name'];
>         $fileSize = $_FILES['fileToUpload']['size'];
>         $ext      = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
> 
>         // 3b. Validate file type
>         if(!in_array($ext, $allowedExt)) {
>             die("Error: Invalid file type. Allowed: " . implode(", ", $allowedExt));
>         }
> 
>         // 3c. Validate file size
>         if($fileSize > $maxSize) {
>             die("Error: File exceeds maximum size of " . ($maxSize/1024/1024) . "MB");
>         }
> 
>         // 3d. Generate unique file name to prevent overwrite
>         $newName = uniqid() . '_' . time() . '.' . $ext;
>         $dest = $targetDir . $newName;
> 
>         // 3e. Move file from temporary location
>         if(move_uploaded_file($tmpPath, $dest)) {
>             echo "File uploaded successfully!<br>";
>             echo "Original Name: " . htmlspecialchars($fileName) . "<br>";
>             echo "Saved As: " . $newName . "<br>";
>             echo "Size: " . round($fileSize/1024,2) . " KB<br>";
>             echo "Type: " . $_FILES['fileToUpload']['type'] . "<br>";
>         } else {
>             echo "Error: Failed to move uploaded file.";
>         }
> 
>     } else {
>         // 3f. Handle upload errors
>         $errors = [
>             1=>'Exceeds php.ini upload_max_filesize',
>             2=>'Exceeds HTML MAX_FILE_SIZE',
>             3=>'Partially uploaded',
>             4=>'No file uploaded',
>             6=>'Missing temp folder',
>             7=>'Failed to write to disk',
>             8=>'Stopped by PHP extension'
>         ];
>         $code = $_FILES['fileToUpload']['error'];
>         echo "Upload Error: " . ($errors[$code] ?? 'Unknown error');
>     }
> 
>     // 4. Debug info
>     echo "<br><small>Temp files: " . sys_get_temp_dir() . " (auto-deleted after script ends)</small>";
> }
> ?>
> ```

---

### Question Three

**Make a web page that uses a cookie to keep track of how many times a user has viewed the page. The first time a user views the page, it should print "Number of views: 1." The second time the user looks at the page, it should print "Number of views: 2," and so on. [10 Marks]**

> [!Tip]- Answer (Click to show)
> **PHP Script: view_counter.php**
> ```php
> <?php
> // 1. Cookie setup
> $cookieName = 'page_views';
> $cookieExpire = time() + (30*24*60*60); // 30 days
> 
> // 2. Check if cookie exists, increment or initialize
> if(isset($_COOKIE[$cookieName])){
>     $views = (int)$_COOKIE[$cookieName] + 1;
> } else {
>     $views = 1;
> }
> 
> // 3. Set/update cookie
> setcookie($cookieName, $views, $cookieExpire, '/');
> 
> // 4. Handle reset
> if(isset($_POST['reset'])){
>     setcookie($cookieName, '', time()-3600, '/');
>     header("Location: ".$_SERVER['PHP_SELF']);
>     exit;
> }
> ?>
> <!DOCTYPE html>
> <html>
> <head>
>     <title>Page View Counter</title>
> </head>
> <body>
>     <h2>Page View Counter</h2>
>     <p>Number of views: <?php echo $views; ?></p>
> 
>     <?php
>     if($views == 1) echo "<p>Welcome! This is your first visit.</p>";
>     elseif($views == 2) echo "<p>Welcome back! This is your second visit.</p>";
>     else echo "<p>Thank you for visiting $views times!</p>";
>     ?>
> 
>     <form method="post">
>         <button type="submit" name="reset">Reset Counter</button>
>     </form>
> </body>
> </html>
> ```
> **Key Points for Exams**
> i. Uses `$_COOKIE` to track visits.
> ii. Initializes cookie if first visit, increments on subsequent visits.
   iii. Cookie lasts **30 days**.
   iv. Displays **dynamic message** depending on visit count.
   iv. Includes a **reset button** that deletes the cookie.

---

### Question Four

**I. Write a CSS rule that changes the color of all elements containing attribute id="Green-Move" to green and shift them down 25 pixels and right 15 pixels. [5 Marks]**

> [!Tip]- Answer (Click to show)
> ```css
> /* CSS rule for element with id="Green-Move" */
> #Green-Move {
>     color: green;
>     position: relative;
>     top: 25px;
>     left: 15px;
> }
> ```
>
> **Explanation:**
> - `#Green-Move` selects the element with the specific ID
> - `color: green;` changes text color to green
> - `position: relative;` allows the element to be shifted from its normal position
> - `top: 25px;` moves the element down by 25 pixels
> - `left: 15px;` moves the element right by 15 pixels

---

**II. Write a layout template that contains two columns. Use divs for each layout component, and use float to line up the columns side by side. Give each component a border and/ or a background color so you can see where your divs are. [5 Marks]**

> [!Tip]- Answer (Click to show)
> **HTML & CSS for Two-Column Layout:**
> ```html
> <!DOCTYPE html>
> <html>
> <head>
>     <title>Two-Column Layout</title>
>     <style>
>         * {
>             box-sizing: border-box;
>             margin: 0;
>             padding: 0;
>         }
>         
>         body {
>             font-family: Arial, sans-serif;
>             padding: 20px;
>             background-color: #f0f0f0;
>         }
>         
>         .container {
>             max-width: 1200px;
>             margin: 0 auto;
>             overflow: hidden; /* Clear floats */
>         }
>         
>         .header {
>             background-color: #4CAF50;
>             color: white;
>             padding: 20px;
>             text-align: center;
>             border: 2px solid #2E7D32;
>             margin-bottom: 10px;
>         }
>         
>         .column {
>             float: left;
>             padding: 15px;
>             min-height: 300px;
>             border: 2px solid #333;
>         }
>         
>         .left-column {
>             width: 30%;
>             background-color: #2196F3;
>             color: white;
>             border-color: #0D47A1;
>         }
>         
>         .right-column {
>             width: 70%;
>             background-color: #FF9800;
>             color: white;
>             border-color: #BF360C;
>         }
>         
>         .footer {
>             background-color: #9C27B0;
>             color: white;
>             padding: 15px;
>             text-align: center;
>             border: 2px solid #4A148C;
>             margin-top: 10px;
>             clear: both; /* Clear the float */
>         }
>         
>         /* Clearfix for container */
>         .container::after {
>             content: "";
>             display: table;
>             clear: both;
>         }
>     </style>
> </head>
> <body>
>     <div class="container">
>         <div class="header">
>             <h2>Two-Column Layout Demo</h2>
>         </div>
>         
>         <div class="column left-column">
>             <h3>Left Column (30%)</h3>
>             <p>This is the left column with a blue background.</p>
>             <p>Width: 30% using float: left</p>
>         </div>
>         
>         <div class="column right-column">
>             <h3>Right Column (70%)</h3>
>             <p>This is the right column with an orange background.</p>
>             <p>Width: 70% using float: left</p>
>         </div>
>         
>         <div class="footer">
>             <p>Footer - cleared both floats</p>
>         </div>
>     </div>
> </body>
> </html>
> ```

---

**III. Several divs have a class of even. Write a style rule (as it would appear in an external stylesheet) that gives each of these black text on a red background using 14px sans-serif font, and the borders should be 1 pixel solid black lines all around. [5 Marks]**

> [!Tip]- Answer (Click to show)
> ```css
> /* External stylesheet rule for divs with class "even" */
> div.even {
>     color: black;
>     background-color: red;
>     font-family: sans-serif;
>     font-size: 14px;
>     border: 1px solid black;
> }
> ```
>
> **Alternative (if targeting all elements with class "even", not just divs):**
> ```css
> .even {
>     color: black;
>     background-color: red;
>     font-family: sans-serif;
>     font-size: 14px;
>     border: 1px solid black;
> }
> ```

---

**IV. Write an SQL script to create a table called users in a database, with the following fields (assume the specific database has already been accessed) id, which is the primary key and value is provided by the database server. username, which has an appropriate string format. password, with a format specific for the SHA encryption algorithm. reg_date, with an appropriate date format. [5 Marks]**

> [!Tip]- Answer (Click to show)
> ```sql
> -- SQL script to create users table
> CREATE TABLE users (
>     id INT AUTO_INCREMENT PRIMARY KEY,
>     username VARCHAR(50) NOT NULL UNIQUE,
>     password CHAR(60) NOT NULL,  -- SHA-256 produces 64 chars, SHA-512 produces 128 chars, but 60 is common for bcrypt
>     reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
> ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
> ```
>
> **Alternative with more specific data types:**
> ```sql
> CREATE TABLE users (
>     id INT(11) NOT NULL AUTO_INCREMENT,
>     username VARCHAR(50) NOT NULL,
>     password VARCHAR(255) NOT NULL,  -- Flexible for various hash algorithms
>     reg_date DATETIME NOT NULL,
>     PRIMARY KEY (id),
>     UNIQUE KEY unique_username (username)
> ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
> ```

---

**V. Which PHP functions are used to achieve the following with a MySQL database server on the local machine. [2.5 Marks Each]**

**a. Connect to the server with username root and password carrot2go**

> [!Tip]- Answer (Click to show)
> **Using MySQLi (Object-Oriented):**
> ```php
> <?php
> $conn = new mysqli("localhost", "root", "carrot2go");
> 
> // Check connection
> if ($conn->connect_error) {
>     die("Connection failed: " . $conn->connect_error);
> }
> echo "Connected successfully";
> ?>
> ```
>
> **Using MySQLi (Procedural):**
> ```php
> <?php
> $conn = mysqli_connect("localhost", "root", "carrot2go");
> 
> // Check connection
> if (!$conn) {
>     die("Connection failed: " . mysqli_connect_error());
> }
> echo "Connected successfully";
> ?>
> ```
>
> **Using PDO:**
> ```php
> <?php
> try {
>     $conn = new PDO("mysql:host=localhost", "root", "carrot2go");
>     // Set PDO error mode to exception
>     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
>     echo "Connected successfully";
> } catch(PDOException $e) {
>     echo "Connection failed: " . $e->getMessage();
> }
> ?>
> ```

**b. Select a database called ad006 to be used for queries**

> [!Tip]- Answer (Click to show)
> **Using MySQLi (Object-Oriented):**
> ```php
> <?php
> // After connection
> $conn->select_db("ad006");
> ```
>
> **Using MySQLi (Procedural):**
> ```php
> <?php
> // After connection
> mysqli_select_db($conn, "ad006");
> ```
>
> **Or selecting database during initial connection:**
> ```php
> <?php
> // Connect and select database in one step
> $conn = new mysqli("localhost", "root", "carrot2go", "ad006");
> ```
>
> **Using PDO (specify database in DSN):**
> ```php
> <?php
> $conn = new PDO("mysql:host=localhost;dbname=ad006", "root", "carrot2go");
> ?>
> ```

---

## SECTION B (40 Marks)

### Attempt ANY TWO questions from this section.

---

### Question Five

**The University of Dodoma has asked you to create a program that allows prospective students to provide feedback about their campus visit. Your program should contain a form with text boxes for a name, address and email. Provide checkboxes that allow prospective students to indicate what they liked most about the campus. The checkboxes should include: student, location, campus, atmosphere, dorm rooms and sports. Also, provide radio buttons that ask the prospective student how they became interested in the University. Provide radio buttons with the following options: Friends, Television, Internet and Other. Finally, provide a text area for additional comments, a submit button and a reset button. Write a complete HTML document for the feedback form and a PHP script to process the form and display the submitted data. [20 Marks]**

> [!Tip]- Answer (Click to show)
> **HTML File: feedback_form.html**
> ```html
> <!DOCTYPE html>
> <html>
> <head>
>     <title>UDOM Campus Visit Feedback</title>
> </head>
> <body>
>     <h2>UDOM Campus Visit Feedback</h2>
>     <form action="process_feedback.php" method="POST">
>         <!-- Personal Information -->
>         <label>Full Name: <input type="text" name="name" required></label><br><br>
>         <label>Address: <input type="text" name="address" required></label><br><br>
>         <label>Email: <input type="email" name="email" required></label><br><br>
> 
>         <!-- Campus Features (Checkboxes) -->
>         <p>What did you like most about the campus? (Check all that apply)</p>
>         <label><input type="checkbox" name="likes[]" value="Student Life"> Student Life</label>
>         <label><input type="checkbox" name="likes[]" value="Location"> Location</label>
>         <label><input type="checkbox" name="likes[]" value="Campus"> Campus</label>
>         <label><input type="checkbox" name="likes[]" value="Atmosphere"> Atmosphere</label>
>         <label><input type="checkbox" name="likes[]" value="Dorm Rooms"> Dorm Rooms</label>
>         <label><input type="checkbox" name="likes[]" value="Sports"> Sports</label><br><br>
> 
>         <!-- Interest Source (Radio Buttons) -->
>         <p>How did you become interested in UDOM?</p>
>         <label><input type="radio" name="interest" value="Friends" required> Friends</label>
>         <label><input type="radio" name="interest" value="Television"> Television</label>
>         <label><input type="radio" name="interest" value="Internet"> Internet</label>
>         <label><input type="radio" name="interest" value="Other"> Other</label><br><br>
> 
>         <!-- Additional Comments -->
>         <label>Additional Comments:<br>
>         <textarea name="comments" rows="5" cols="50"></textarea></label><br><br>
> 
>         <input type="submit" value="Submit">
>         <input type="reset" value="Reset">
>     </form>
> </body>
> </html>
> ```

> [!Tip]- Answer (Click to show)
> **PHP Script: process_feedback.php**
> ```php
> <?php
> if($_SERVER["REQUEST_METHOD"] == "POST"){
>     // Sanitize inputs
>     $name = htmlspecialchars($_POST['name']);
>     $address = htmlspecialchars($_POST['address']);
>     $email = htmlspecialchars($_POST['email']);
>     $interest = htmlspecialchars($_POST['interest']);
>     $comments = !empty($_POST['comments']) ? htmlspecialchars($_POST['comments']) : "No comments";
>     $likes = !empty($_POST['likes']) ? $_POST['likes'] : [];
> 
>     echo "<h2>Feedback Submitted</h2>";
>     echo "<p><strong>Full Name:</strong> $name</p>";
>     echo "<p><strong>Address:</strong> $address</p>";
>     echo "<p><strong>Email:</strong> $email</p>";
> 
>     echo "<p><strong>What did you like:</strong> ";
>     if(!empty($likes)){
>         echo implode(", ", array_map('htmlspecialchars', $likes));
>     } else {
>         echo "No selections made";
>     }
>     echo "</p>";
> 
>     echo "<p><strong>How did you become interested:</strong> $interest</p>";
>     echo "<p><strong>Additional Comments:</strong> $comments</p>";
> 
>     echo '<p><a href="feedback_form.html">Submit Another Response</a></p>';
> } else {
>     echo '<p>No data received. Please fill out the <a href="feedback_form.html">feedback form</a>.</p>';
> }
> ?>
> ```

---

### Question Six

**I. Write a PHP script to get the PHP version and configuration information [2 Marks]**

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> // Method 1: Using phpinfo() function - displays complete PHP information
> phpinfo();
> ?>
> ```


---

**II. What is the difference between echo and print? [2 Marks]**

> [!Tip]- Answer (Click to show)
> **Differences between echo and print in PHP:**
>
> | Feature | echo | print |
> |---------|------|-------|
> | **Return Value** | No return value | Returns 1 (can be used in expressions) |
> | **Multiple Parameters** | Can accept multiple parameters: `echo $a, $b, $c;` | Can only accept one parameter |
> | **Speed** | Slightly faster (no return value) | Slightly slower (returns a value) |
> | **Syntax** | `echo $variable;` or `echo $a, $b;` | `print $variable;` |
> | **Usage in Expressions** | Cannot be used in expressions | Can be used in expressions: `$result = print "hello";` |
> | **Parentheses** | Optional: `echo("hello")` or `echo "hello"` | Optional: `print("hello")` or `print "hello"` |
>
> **Examples:**
> ```php
> <?php
> // echo examples
> echo "Hello World";
> echo "Hello", " ", "World";  // Multiple parameters
> 
> // print examples
> print "Hello World";
> $result = print "Hello World";  // Returns 1
> 
> // print in expression
> (print "Hello") && (print " World");
> ?>
> ```

---

**III. Describe the differences between client/server interactions in traditional web applications and client/server interactions in Ajax web applications. [5 Marks]**

> [!Tip]- Answer (Click to show)
> **Differences between Traditional and AJAX Web Applications:**
>
> | Aspect | Traditional Web Applications | AJAX Web Applications |
> |--------|------------------------------|----------------------|
> | **Page Updates** | Full page refresh for every user interaction | Partial page updates - only specific parts of the page are refreshed |
> | **User Experience** | Noticeable delays with page reloads, flickering, and interrupted user flow | Smooth, continuous interaction without page reloads |
> | **Data Transfer** | Entire HTML page is sent from server to client | Only necessary data (JSON/XML) is transferred, reducing bandwidth |
> | **Server Processing** | Server generates complete HTML page each request | Server processes request and returns only data, not presentation |
> | **Synchronization** | Synchronous requests - user must wait for response | Asynchronous requests - user can continue interacting |
> | **Network Traffic** | Higher bandwidth usage due to full page reloads | Lower bandwidth usage, only minimal data exchanged |
> | **Responsiveness** | Less responsive, especially with multiple interactions | Highly responsive, feels like a desktop application |
> | **State Management** | State often lost between requests, requires sessions/cookies | Client can maintain state more effectively |
> | **JavaScript Dependency** | Can function without JavaScript (basic forms) | Requires JavaScript to be enabled |
> | **Development Complexity** | Simpler, straightforward request-response cycle | More complex, requires handling asynchronous callbacks |
> | **Bookmarking** | URLs change with each page, easily bookmarkable | Single-page apps may have bookmarking challenges |
> | **SEO** | Content easily indexed by search engines | May require special considerations for SEO |
> | **Examples** | Traditional form submissions, page-to-page navigation | Google Maps, Gmail, Facebook infinite scroll |

---

**IV. Modules are helpful for many sites that include sections of repeated code. Explain the following three functions, make the differences between them clear: include(), require(), require_once(). [5 Marks]**

> [!Tip]- Answer (Click to show)
> **include(), require(), and require_once() Functions:**
>
> ```php
> <?php
> // Example usage
> include 'header.php';
> require 'config.php';
> require_once 'database.php';
> ?>
> ```
>
> **Detailed Comparison:**
>
> | Feature | include() | require() | require_once() |
> |---------|-----------|-----------|----------------|
> | **Error Handling** | Produces a warning (E_WARNING) if file not found | Produces a fatal error (E_COMPILE_ERROR) if file not found | Same as require() - fatal error if file not found |
> | **Script Execution** | Script continues execution even if file is missing | Script stops execution if file is missing | Script stops execution if file is missing |
> | **Multiple Inclusion** | Can include same file multiple times | Can include same file multiple times | Ensures file is included only once |
> | **Use Case** | Optional files (templates, optional components) | Critical files (configuration, database connections) | Critical files that should not be loaded twice (class definitions, functions) |
> | **Performance** | Slightly slower if file not found (continues searching) | Similar to include | Slightly slower due to check if file was already included |
> | **Return Value** | Returns TRUE on success, FALSE on failure | Returns TRUE on success, FALSE on failure (but script stops) | Returns TRUE on success, FALSE on failure |
>
> **Example Scenario:**
> ```php
> <?php
> // config.php - critical file
> require 'config.php';  // If missing: Fatal error, script stops
> 
> // header.php - optional template
> include 'header.php';  // If missing: Warning, but page continues
> 
> // database.php - critical class definition that should only be loaded once
> require_once 'database.php';  // If already included, skip
> require_once 'database.php';  // This line will be ignored
> 
> echo "This will run even if header.php is missing, but not if config.php is missing.";
> ?>
> ```

---

**V. Consider the following associative array**

```php
<?php
$ManUarray = array(
    "Rashford" => 23,
    "Pogba" => 24,
    "Degea" => 22,
    "Martial" => 25
);
?>
```

**a. Write PHP code to add a new element with the key "Wan-Bisaka" and value 24. [3 Marks]**

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> $ManUarray = array(
>     "Rashford" => 23,
>     "Pogba" => 24,
>     "Degea" => 22,
>     "Martial" => 25
> );
> 
> // Method 1: Direct assignment
> $ManUarray["Wan-Bisaka"] = 24;
> 
> // Method 2: Using array_push with key-value pair (Note: array_push doesn't work with associative keys)
> // $ManUarray = array_merge($ManUarray, array("Wan-Bisaka" => 24));
> 
> // Method 3: Using array_merge
> $ManUarray = array_merge($ManUarray, ["Wan-Bisaka" => 24]);
> 
> // Display the updated array
> echo "<pre>";
> print_r($ManUarray);
> echo "</pre>";
> ?>
> ```

**b. Write PHP code to remove the element with the key "Pogba". [3 Marks]**

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> $ManUarray = array(
>     "Rashford" => 23,
>     "Pogba" => 24,
>     "Degea" => 22,
>     "Martial" => 25
> );
> 
> // Add new element first (as per part a)
> $ManUarray["Wan-Bisaka"] = 24;
> 
> // Method 1: Using unset() - Most common
> unset($ManUarray["Pogba"]);
> 
> // Method 2: Using array_diff_key (removes by key)
> // $ManUarray = array_diff_key($ManUarray, ["Pogba" => 0]);
> 
> // Method 3: Using array_filter
> // $ManUarray = array_filter($ManUarray, function($key) {
> //     return $key != "Pogba";
> // }, ARRAY_FILTER_USE_KEY);
> 
> // Display the updated array after removal
> echo "<h3>Array after adding Wan-Bisaka and removing Pogba:</h3>";
> echo "<pre>";
> print_r($ManUarray);
> echo "</pre>";
> 
> // Check if element exists
> if (!isset($ManUarray["Pogba"])) {
>     echo "Pogba has been successfully removed from the array.";
> }
> ?>
> ```

---

## END OF EXAMINATION PAPER