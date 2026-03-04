
# THE UNIVERSITY OF DODOMA

## COLLEGE OF INFORMATICS AND VIRTUAL EDUCATION

### DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING

---

## NON-DEGREE UNIVERSITY EXAMINATIONS

### FIRST SEMESTER 2019/2020

---

**Course Code:** CS 0219

**Course Title:** Internet Programming and Applications

**Date:** 17th February, 2020

**Start:** 11:45 AM

**End:** 14:45 PM

**Time Allocated:** 3 Hours

---

### INSTRUCTIONS:

1. This question paper consists of two sections: A and B.
2. Answer ALL questions in section A and ANY Two questions from section B.
3. All University of Dodoma examination regulations apply.

---

## SECTION A: (60 Marks)

### Question One

**(4 Marks Each)**

---

**i. Write a PHP script to get the PHP version and configuration information.**

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> //Display complete PHP information
> phpinfo();
> ?>
> 
> 
> ```

---

**ii. What is the difference between echo and print?**

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
> ?>
> ```

---

**iii. What is the difference between require() and include()?**

> [!Tip]- Answer (Click to show)
> **Differences between require() and include():**
>
> | Feature | include() | require() |
> |---------|-----------|-----------|
> | **Error Handling** | Produces a warning (E_WARNING) if file not found | Produces a fatal error (E_COMPILE_ERROR) if file not found |
> | **Script Execution** | Script continues execution even if file is missing | Script stops execution immediately if file is missing |
> | **Use Case** | Optional files (templates, headers, footers) | Critical files (configuration, database connections) |
> | **Return Value** | Returns TRUE on success, FALSE on failure | Returns TRUE on success, FALSE on failure (but script stops) |
>
> **Example:**
> ```php
> <?php
> // If header.php is missing, warning shown but page continues
> include 'header.php';
> echo "This will still display even if header.php is missing.";
> 
> // If config.php is missing, fatal error and script stops
> require 'config.php';
> echo "This will NOT display if config.php is missing.";
> ?>
> ```

---

**iv. What is the reason of writing <!DOCTYPE HTML> at the beginning of an HTML page?**

> [!Tip]- Answer (Click to show)
> The `<!DOCTYPE HTML>` declaration serves the following purposes:
>
> 1. **Document Type Declaration**: It tells the web browser which version of HTML the page is written in.
>
> 2. **Standards Mode Activation**: It triggers "standards mode" in browsers, ensuring the page is rendered according to web standards rather than in "quirks mode" (which mimics older browser behavior).
>
> 3. **Consistent Rendering**: It helps ensure consistent rendering across different browsers by preventing them from falling back to compatibility modes.
>
> 4. **Validation**: It allows HTML validators to check the document against the correct specification.
>
> 5. **HTML5 Declaration**: `<!DOCTYPE html>` is the simplified declaration for HTML5, making it easy to remember and use.
>
> Without this declaration, browsers may render the page in "quirks mode," leading to inconsistent display and layout issues.

---

**v. Which html tag is used to produce a horizontal line on a webpage?**

> [!Tip]- Answer (Click to show)
> The `<hr>` tag (horizontal rule) is used to produce a horizontal line on a webpage.
>
> **Example:**
> ```html
> <p>This is text above the line.</p>
> <hr>
> <p>This is text below the line.</p>
> ```
>

---

### Question Two



**i. HTTP is a stateless protocol. Explain. [2 Marks]**

> [!Tip]- Answer (Click to show)
> HTTP being a stateless protocol means that each request from a client to a server is treated as an independent, isolated transaction that is unrelated to any previous request. The server does not retain any information or memory about the client's state between requests.
>
> **Key characteristics:**
> - After sending a response, the server forgets everything about that interaction
> - Each request must contain all information needed for the server to understand and process it
> - No built-in mechanism to link multiple requests from the same user
> - This design simplifies server implementation but creates challenges for features like shopping carts or user logins
>
> **Analogy:** It's like talking to someone who forgets your previous conversation every time you speak, so you have to reintroduce yourself and context with every sentence.

---

**ii. Explain the two ways of introducing state in HTTP protocol. [3 Marks]**

> [!Tip]- Answer (Click to show)
> The two main ways to introduce state (make HTTP stateful) are:
>
> **1. Cookies:**
> - Small text files stored on the client's browser
> - Automatically sent to the server with each HTTP request
> - Can store user preferences, session identifiers, etc.
> - Example:
>   ```php
>   setcookie("username", "John", time() + 3600); // Set cookie
>   echo $_COOKIE["username"]; // Retrieve cookie
>   ```
>
> **2. Sessions:**
> - Server-side storage of user data
> - Unique session ID is generated and typically stored in a cookie
> - Data persists across multiple requests during a user's visit
> - More secure than cookies for sensitive data
> - Example:
>   ```php
>   session_start();
>   $_SESSION["user_id"] = 123; // Store in session
>   echo $_SESSION["user_id"]; // Retrieve from session
>   ```
>
> **Other methods (additional):**
> - **URL Rewriting**: Passing state information in URL parameters
> - **Hidden Form Fields**: Storing state in hidden input fields

---

**iii. What is the difference between unset() and session_destroy() in php? [3 Marks]**

> [!Tip]- Answer (Click to show)
> **Differences between unset() and session_destroy():**
>
> | Feature | unset() | session_destroy() |
> |---------|---------|-------------------|
> | **Purpose** | Destroys specific variables | Destroys entire session |
> | **Scope** | Works on individual session variables or any PHP variable | Destroys all data associated with the current session |
> | **Effect on Session Array** | Removes specific keys from `$_SESSION` array | Destroys the entire `$_SESSION` array |
> | **Session File** | Does not delete the session file on server | Deletes the session file on server |
> | **Cookie** | Does not affect session cookie | Does not delete session cookie (only server data) |
> | **Usage Example** | `unset($_SESSION['username']);` | `session_destroy();` |
>
> **Example:**
> ```php
> <?php
> session_start();
> 
> // Set session variables
> $_SESSION['username'] = 'John';
> $_SESSION['role'] = 'admin';
> 
> // unset() - removes only username
> unset($_SESSION['username']); // $_SESSION['role'] still exists
> 
> // session_destroy() - removes all session data
> session_destroy(); // Entire session is destroyed
> 
> // Note: After session_destroy(), you still need to unset the cookie
> setcookie(session_name(), '', time() - 3600, '/'); // Delete session cookie
> ?>
> ```

---

**iv. With the help of code segment explain the correct approach of using the setcookie() function. [3 Marks]**

NB: You can use one example

> [!Tip]- Answer (Click to show)
> **setcookie() Function Syntax and Usage:**
>
> ```php
> setcookie(name, value, expire, path, domain, secure, httponly);
> ```
>
> **Parameters:**
> - `name`: Cookie name (required)
> - `value`: Cookie value (optional)
> - `expire`: Expiration timestamp (optional, time() + seconds)
> - `path`: Server path where cookie is available (optional)
> - `domain`: Domain where cookie is available (optional)
> - `secure`: Send only over HTTPS (optional)
> - `httponly`: Accessible only via HTTP protocol (optional)
>
> **Examples:**
>
> ```php
> <?php
> // Example 1: Simple cookie that expires in 1 hour
> setcookie("username", "JohnDoe", time() + 3600, "/");
> 
> // Example 2: Cookie with all parameters
> setcookie(
>     "user_preferences",     // Cookie name
>     "dark_mode=1;lang=en", // Cookie value
>     time() + (86400 * 30),  // Expire in 30 days
>     "/",                     // Available in entire domain
>     ".example.com",         // Available on all subdomains
>     true,                    // Send only over HTTPS
>     true                     // HTTP only (not accessible via JavaScript)
> );
> 
> // Example 3: Setting cookie and retrieving it
> // Set cookie
> $cookie_name = "user";
> $cookie_value = "John Doe";
> setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
> ?>
> <!DOCTYPE html>
> <html>
> <body>
> 
> <?php
> // Check if cookie exists and retrieve it
> if(isset($_COOKIE[$cookie_name])) {
>     echo "Cookie '" . $cookie_name . "' is set!<br>";
>     echo "Value: " . $_COOKIE[$cookie_name];
> } else {
>     echo "Cookie named '" . $cookie_name . "' is not set!";
> }
> 
> // Example 4: Delete a cookie (set expiration in the past)
> setcookie("username", "", time() - 3600, "/");
> ?>
> 
> </body>
> </html>
> ```
>
> **Important Notes:**
> - `setcookie()` must be called before any HTML output
> - Cookies are part of the HTTP header, so they must be sent before any actual content
> - Always check if cookies are enabled on the client browser

---

**v. Write a simple program to count the number of 'hits' on a webpage. [4 Marks]**

NB: Choose one method that is suitable for you.

> [!Tip]- Answer (Click to show)
> **Method 1: Using a Text File (Simple Page Counter)**
>
> ```php
> <?php
> // counter.php
> session_start();
> 
> // Define counter file
> $counter_file = "hit_counter.txt";
> 
> // Check if counter file exists, if not create it with initial value 0
> if (!file_exists($counter_file)) {
>     file_put_contents($counter_file, "0");
> }
> 
> // Read current count
> $hits = (int)file_get_contents($counter_file);
> 
> // Increment count
> $hits++;
> 
> // Save new count
> file_put_contents($counter_file, $hits);
> ?>
> 
> <!DOCTYPE html>
> <html>
> <head>
>     <title>Page Hit Counter</title>
>     <style>
>         body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
>         .counter { font-size: 48px; color: #4CAF50; }
>     </style>
> </head>
> <body>
>     <h1>Welcome to Our Website</h1>
>     <p>This page has been viewed</p>
>     <div class="counter"><?php echo $hits; ?></div>
>     <p>times</p>
> </body>
> </html>
> ```
>
> **Method 2: Using Session (Unique Visitor Counter)**
>
> ```php
> <?php
> // unique_counter.php
> session_start();
> 
> $counter_file = "unique_hits.txt";
> 
> if (!file_exists($counter_file)) {
>     file_put_contents($counter_file, "0");
> }
> 
> // Check if this is a new visit for this session
> if (!isset($_SESSION['visited'])) {
>     // Mark as visited
>     $_SESSION['visited'] = true;
>     
>     // Read current count
>     $hits = (int)file_get_contents($counter_file);
>     
>     // Increment and save
>     $hits++;
>     file_put_contents($counter_file, $hits);
> } else {
>     // Already counted this session
>     $hits = (int)file_get_contents($counter_file);
> }
> ?>
> 
> <!DOCTYPE html>
> <html>
> <head>
>     <title>Unique Visitor Counter</title>
>     <style>
>         body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
>         .counter { font-size: 48px; color: #2196F3; }
>     </style>
> </head>
> <body>
>     <h1>Unique Visitor Counter</h1>
>     <p>Total unique visits:</p>
>     <div class="counter"><?php echo $hits; ?></div>
>     <p><?php echo isset($_SESSION['visited']) ? 'Welcome back!' : 'Welcome first-time visitor!'; ?></p>
> </body>
> </html>
> ```
>
> **Method 3: Using Database (Production-ready)**
>
> ```php
> <?php
> // database_counter.php
> session_start();
> 
> // Database connection
> $conn = new mysqli("localhost", "root", "", "test_db");
> 
> if ($conn->connect_error) {
>     die("Connection failed: " . $conn->connect_error);
> }
> 
> // Create table if not exists
> $conn->query("CREATE TABLE IF NOT EXISTS page_hits (
>     id INT AUTO_INCREMENT PRIMARY KEY,
>     page_url VARCHAR(255) NOT NULL,
>     hit_count INT DEFAULT 0,
>     last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
> )");
> 
> $current_page = basename($_SERVER['PHP_SELF']);
> 
> // Check if page exists in database
> $result = $conn->query("SELECT hit_count FROM page_hits WHERE page_url = '$current_page'");
> 
> if ($result->num_rows > 0) {
>     $row = $result->fetch_assoc();
>     $hits = $row['hit_count'];
>     
>     // Increment if not counted in this session
>     if (!isset($_SESSION['hit_' . $current_page])) {
>         $hits++;
>         $conn->query("UPDATE page_hits SET hit_count = $hits WHERE page_url = '$current_page'");
>         $_SESSION['hit_' . $current_page] = true;
>     }
> } else {
>     // First hit for this page
>     $hits = 1;
>     $conn->query("INSERT INTO page_hits (page_url, hit_count) VALUES ('$current_page', 1)");
>     $_SESSION['hit_' . $current_page] = true;
> }
> 
> $conn->close();
> ?>
> 
> <!DOCTYPE html>
> <html>
> <head>
>     <title>Database Page Counter</title>
>     <style>
>         body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
>         .counter { font-size: 48px; color: #FF9800; }
>     </style>
> </head>
> <body>
>     <h1>Page Hit Counter (Database)</h1>
>     <p>This page has been viewed</p>
>     <div class="counter"><?php echo $hits; ?></div>
>     <p>times</p>
> </body>
> </html>
> ```

---

### Question Three

---

**i. What HTML tag is used to insert a copyright symbol in a web page? [3 Marks]**

> [!Tip]- Answer (Click to show)
> The copyright symbol (©) can be inserted using:
>
> **Method 1: HTML Entity**
> ```html
> &copy;  <!-- Outputs: © -->
> ```
>
> **Method 2: Numeric Entity**
> ```html
> &#169;  <!-- Outputs: © -->
> ```
>
> **Method 3: Direct Unicode Character**
> ```html
> ©  <!-- If your editor supports Unicode -->
> ```
>
> **Complete Example:**
> ```html
> <!DOCTYPE html>
> <html>
> <body>
>     <footer>
>         <p>&copy; 2020 University of Dodoma. All rights reserved.</p>
>         <p>&#169; 2020 College of Informatics and Virtual Education.</p>
>     </footer>
> </body>
> </html>
> ```

---

**ii. How do we comment HTML code in an HTML page? [2 Marks]**

> [!Tip]- Answer (Click to show)
> HTML comments are written using the following syntax:
>
> ```html
> <!-- This is an HTML comment -->
> ```
>
> **Rules and Examples:**
> ```html
> <!DOCTYPE html>
> <html>
> <head>
>     <title>HTML Comments Example</title>
>     <!-- This is a comment in the head section -->
> </head>
> <body>
>     <!-- Main content starts here -->
>     <h1>Welcome</h1>
>     
>     <!-- 
>         This is a multi-line comment
>         It can span multiple lines
>         Very useful for documentation
>     -->
>     <p>This paragraph is visible.</p>
>     
>     <!-- <p>This paragraph is commented out and won't display</p> -->
>     
>     <!--[if IE]>
>         <p>This is a conditional comment for Internet Explorer</p>
>     <![endif]-->
>     
>     <!-- End of main content -->
> </body>
> </html>
> ```
>
> **Important Notes:**
> - Comments are not displayed in the browser
> - Comments can be used to document your code
> - Comments can be used to temporarily disable code
> - Comments cannot be nested

---

**iii. How do we comment PHP code in a PHP page? [2 Marks]**

> [!Tip]- Answer (Click to show)
> PHP supports three types of comments:
>
> **1. Single-line comments (//)**
> ```php
> <?php
> // This is a single-line comment
> echo "Hello World"; // This is an inline comment
> ?>
> ```
>
> **2. Single-line comments (#)**
> ```php
> <?php
> # This is also a single-line comment (shell-style)
> echo "Hello World"; # Another inline comment
> ?>
> ```
>
> **3. Multi-line comments (/* */)**
> ```php
> <?php
> /*
>     This is a multi-line comment
>     It can span multiple lines
>     Useful for longer explanations
> */
> echo "Hello World";
> 
> /*
>     You can also "comment out" blocks of code
>     echo "This won't run";
>     $x = 10 + 5;
> */
> ?>
> ```
>
> **Complete Example:**
> ```php
> <?php
> // Initialize variables
> $name = "John"; # User's name
> $age = 25;      // User's age
> 
> /*
>     This function calculates the user's birth year
>     based on their age and current year
> */
> function getBirthYear($age) {
>     $currentYear = date("Y"); // Get current year
>     return $currentYear - $age; // Calculate and return
> }
> 
> // Display user information
> echo "Name: " . $name . "<br>";  // Output name
> echo "Birth Year: " . getBirthYear($age) . "<br>";  // Output birth year
> ?>
> ```

---

**iv. What is the difference between POST method and GET method? [3 Marks]**

> [!Tip]- Answer (Click to show)
> **Differences between GET and POST methods:**
>
> | Feature | GET Method | POST Method |
> |---------|------------|-------------|
> | **Data Visibility** | Data visible in URL (as query string) | Data not visible in URL |
> | **Security** | Less secure - data exposed in URL | More secure - data in request body |
> | **Data Length** | Limited (max 2048 characters) | No practical limit |
> | **Bookmarking** | Can be bookmarked | Cannot be bookmarked |
> | **Back Button** | Safe to resubmit | May cause duplicate form submission warning |
> | **Data Type** | Only ASCII characters | Any data type (binary, text, etc.) |
> | **Cache** | Can be cached | Cannot be cached |
> | **History** | Parameters saved in browser history | Parameters not saved in history |
> | **Use Cases** | Search forms, non-sensitive data | Login forms, file uploads, sensitive data |
> | **Idempotent** | Yes (same request same result) | No (can modify server state) |
>
> **Examples:**
> ```html
> <!-- GET method -->
> <form method="get" action="search.php">
>     <input type="text" name="query">
>     <input type="submit">
> </form>
> <!-- URL becomes: search.php?query=php -->
>
> <!-- POST method -->
> <form method="post" action="login.php">
>     <input type="text" name="username">
>     <input type="password" name="password">
>     <input type="submit">
> </form>
> <!-- Data not visible in URL -->
> ```

---

**v. What is the difference between $_FILES['user_file']['name'] and $_FILES['user_file']['tmp_name']? [3 Marks]**

> [!Tip]- Answer (Click to show)
> **Differences between $_FILES['user_file']['name'] and $_FILES['user_file']['tmp_name']:**
>
> | Feature | $_FILES['user_file']['name'] | $_FILES['user_file']['tmp_name'] |
> |---------|------------------------------|-----------------------------------|
> | **Meaning** | Original filename on client's computer | Temporary filename on server |
> | **Location** | Client-side (user's computer) | Server-side (temporary directory) |
> | **Purpose** | For display, storing original name | For processing, moving the file |
> | **Persistence** | Only exists during script execution | Temporary file exists until script ends |
> | **Security** | Can be spoofed (contains only name) | Contains actual server path to uploaded file |
> | **Example Value** | `"photo.jpg"` | `"/tmp/phpYzdqkD"` |
> | **Usage** | Save original filename to database | Move file to permanent location |
>
> **Example:**
> ```php
> <?php
> if (isset($_FILES['user_file'])) {
>     // Original filename from user's computer
>     $original_name = $_FILES['user_file']['name'];
>     echo "Original filename: " . $original_name . "<br>";
>     
>     // Temporary filename on server
>     $temp_location = $_FILES['user_file']['tmp_name'];
>     echo "Temporary location: " . $temp_location . "<br>";
>     
>     // Move from temp location to permanent location
>     $permanent_location = "uploads/" . $original_name;
>     if (move_uploaded_file($temp_location, $permanent_location)) {
>         echo "File successfully uploaded to: " . $permanent_location;
>     }
> }
> ?>
> ```

---

**vi. How can we capture an error during uploading files in php? [3 Marks]**

> [!Tip]- Answer (Click to show)
> **Methods to capture file upload errors in PHP:**
>
> ```php
> <?php
> // Method 1: Check the error code
> if (isset($_FILES['user_file'])) {
>     $file = $_FILES['user_file'];
>     
>     // Check for errors
>     if ($file['error'] > 0) {
>         // Error codes and messages
>         switch ($file['error']) {
>             case UPLOAD_ERR_INI_SIZE: // 1
>                 $error = "File exceeds upload_max_filesize in php.ini";
>                 break;
>             case UPLOAD_ERR_FORM_SIZE: // 2
>                 $error = "File exceeds MAX_FILE_SIZE in HTML form";
>                 break;
>             case UPLOAD_ERR_PARTIAL: // 3
>                 $error = "File was only partially uploaded";
>                 break;
>             case UPLOAD_ERR_NO_FILE: // 4
>                 $error = "No file was uploaded";
>                 break;
>             case UPLOAD_ERR_NO_TMP_DIR: // 6
>                 $error = "Missing temporary folder";
>                 break;
>             case UPLOAD_ERR_CANT_WRITE: // 7
>                 $error = "Failed to write file to disk";
>                 break;
>             case UPLOAD_ERR_EXTENSION: // 8
>                 $error = "File upload stopped by extension";
>                 break;
>             default:
>                 $error = "Unknown upload error";
>         }
>         echo "Upload Error: " . $error;
>     } else {
>         echo "File uploaded successfully!";
>     }
> }
> ?>
>
> <!-- HTML Form with MAX_FILE_SIZE -->
> <form method="post" enctype="multipart/form-data">
>     <input type="hidden" name="MAX_FILE_SIZE" value="1048576"> <!-- 1MB max -->
>     <input type="file" name="user_file">
>     <input type="submit">
> </form>
> ```
>
> **Method 2: Try-catch with custom error handling:**
> ```php
> <?php
> try {
>     if ($_FILES['user_file']['error'] !== UPLOAD_ERR_OK) {
>         throw new Exception("Upload failed with error code: " . $_FILES['user_file']['error']);
>     }
>     
>     // Process file
>     if (!move_uploaded_file($_FILES['user_file']['tmp_name'], "uploads/" . $_FILES['user_file']['name'])) {
>         throw new Exception("Failed to move uploaded file");
>     }
>     
>     echo "File uploaded successfully!";
>     
> } catch (Exception $e) {
>     echo "Error: " . $e->getMessage();
> }
> ?>
> ```

---

**vii. How can we change the maximum size of a file to be uploaded in PHP? [2 Marks]**

> [!Tip]- Answer (Click to show)
> **Methods to change maximum file upload size:**
>
> **1. Modify php.ini (Server-wide setting):**
> ```ini
> ; Open php.ini and change these values
> upload_max_filesize = 20M
> post_max_size = 25M
> max_execution_time = 300
> max_input_time = 300
> memory_limit = 128M
> ```
>
> **2. Using .htaccess (Apache servers):**
> ```apache
> php_value upload_max_filesize 20M
> php_value post_max_size 25M
> php_value max_execution_time 300
> php_value max_input_time 300
> ```
>
> **3. Using ini_set() in PHP script (Runtime):**
> ```php
> <?php
> // Set at runtime (may not work on all servers)
> ini_set('upload_max_filesize', '20M');
> ini_set('post_max_size', '25M');
> ini_set('max_execution_time', '300');
> ?>
> ```
>
> **4. HTML Form level (Client-side hint):**
> ```html
> <form enctype="multipart/form-data" method="post">
>     <input type="hidden" name="MAX_FILE_SIZE" value="20971520"> <!-- 20MB -->
>     <input type="file" name="user_file">
> </form>
> ```
>
> **Check current settings:**
> ```php
> <?php
> echo "upload_max_filesize: " . ini_get('upload_max_filesize') . "<br>";
> echo "post_max_size: " . ini_get('post_max_size') . "<br>";
> echo "max_execution_time: " . ini_get('max_execution_time') . " seconds<br>";
> ?>
> ```

---

### Question Four

**Examine the code in Figure 1, answer the following questions. [7 Marks]**

**Figure 1:**
```html
<!DOCTYPE html>
<html>
<head>
    <h1>Welcome to College of Informatics and Virtual Education</h1>
    <link src="mypage.css" type="text/css" rel="stylesheet"/>
</head>
<body>
    <p id="parg">For Department of computer science and Engineering</p>
    <ul>
        <li>BSc.In Computer Science</li>
        <li>BSc.In Software Engineering</li>
    </ul>
    For Department of Electronics and Telecommunication Engineering
    <ol>
        <li>BSc.In Telecommunication Engineering</li>
        <li>Diploma in Telecommunication</li>
        <li>Diploma in Computer Networks</li>
    </ol>
</body>
</html>
```

---

**i. There are three (3) errors in the HTML code. Identify them and suggest corrections. [3 Marks]**

> [!Tip]- Answer (Click to show)
> **Error 1: Heading tag in head section**
> - **Error:** `<h1>` tag is placed inside the `<head>` section
> - **Correction:** Move the `<h1>` tag to the `<body>` section
> - **Corrected code:**
>   ```html
>   <head>
>       <link src="mypage.css" type="text/css" rel="stylesheet"/>
>   </head>
>   <body>
>       <h1>Welcome to College of Informatics and Virtual Education</h1>
>   ```
>
> **Error 2: Missing `<title>` tag in head section**
> - **Error:** No `<title>` tag in the head section (required for valid HTML)
> - **Correction:** Add a title tag in the head section
> - **Corrected code:**
>   ```html
>   <head>
>       <title>CIVE Department</title>
>       <link src="mypage.css" type="text/css" rel="stylesheet"/>
>   </head>
>   ```
>
> **Error 3: DOCTYPE syntax error**
> - **Error:** `<!DOCTYPE html>` is correct, but the closing `</DOCTYPE html>` at the end is wrong
> - **Correction:** Remove the closing `</DOCTYPE html>` tag at the bottom
> - DOCTYPE is not an HTML tag, it's a declaration that doesn't need closing
>
> **Corrected HTML:**
> ```html
> <!DOCTYPE html>
> <html>
> <head>
>     <title>CIVE Department</title>
>     <link src="mypage.css" type="text/css" rel="stylesheet"/>
> </head>
> <body>
>     <h1>Welcome to College of Informatics and Virtual Education</h1>
>     <p id="parg">For Department of computer science and Engineering</p>
>     <ul>
>         <li>BSc.In Computer Science</li>
>         <li>BSc.In Software Engineering</li>
>     </ul>
>     For Department of Electronics and Telecommunication Engineering
>     <ol>
>         <li>BSc.In Telecommunication Engineering</li>
>         <li>Diploma in Telecommunication</li>
>         <li>Diploma in Computer Networks</li>
>     </ol>
> </body>
> </html>
> ```

---

**ii. Write a CSS rule to set the page's background to light blue. [2 Marks]**

> [!Tip]- Answer (Click to show)
> ```css
> /* Method 1: Using body selector */
> body {
>     background-color: lightblue;
> }
>
> /* Method 2: Using html selector */
> html {
>     background-color: lightblue;
> }
>
> /* Method 3: Using universal selector */
> * {
>     background-color: lightblue;
> }
>
> /* Method 4: With color name or hex code */
> body {
>     background-color: #ADD8E6;  /* Light blue hex code */
> }
> ```

---

**iii. Write CSS code to set the text color of list items to red. [2 Marks]**

> [!Tip]- Answer (Click to show)
> ```css
> /* Target all list items in both ordered and unordered lists */
> li {
>     color: red;
> }
>
> /* Or more specifically: */
> ul li, ol li {
>     color: red;
> }
>
> /* With multiple properties */
> li {
>     color: red;
>     font-weight: bold;
> }
> ```

---

## SECTION B (40 Marks)

### Attempt ANY TWO questions from this section.

---

### Question Five

**Write a PHP code that processes the following form:**

```html
<fieldset>
    <legend>Registration Form</legend>
    <form action="abc.php" method="post" name="myForm">
        Name : <input type="text" name="name"><br>
        Password: <input type="text" name="password"><br>
        NIN: <input type="text" name="nin"><br>
        <input type="submit" name="submit" value="submit">
    </form>
</fieldset>
```

**Your code should examine the name, password, and National Id Number (NIN) submitted, and verify that they are valid. A valid name is any non-empty string. A valid password is any string that is at least 6 characters long. A valid NIN contains exactly 24 digits. [20 Marks]**

> [!Tip]- Answer (Click to show)
> **Complete PHP Processor: abc.php**
>
> ```php
> <?php
> // Start session to store messages or data if needed
> session_start();
> ?>
>
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Registration Form Processor</title>
>     <style>
>         * {
>             box-sizing: border-box;
>             margin: 0;
>             padding: 0;
>         }
>         
>         body {
>             font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
>             background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
>             min-height: 100vh;
>             padding: 20px;
>         }
>         
>         .container {
>             max-width: 600px;
>             margin: 0 auto;
>             background-color: white;
>             border-radius: 15px;
>             padding: 30px;
>             box-shadow: 0 10px 30px rgba(0,0,0,0.2);
>         }
>         
>         h1 {
>             color: #333;
>             margin-bottom: 20px;
>             text-align: center;
>         }
>         
>         fieldset {
>             border: 2px solid #667eea;
>             border-radius: 10px;
>             padding: 20px;
>             margin-bottom: 20px;
>         }
>         
>         legend {
>             color: #667eea;
>             font-weight: bold;
>             padding: 0 10px;
>         }
>         
>         .form-group {
>             margin-bottom: 15px;
>         }
>         
>         label {
>             display: block;
>             margin-bottom: 5px;
>             font-weight: 600;
>             color: #555;
>         }
>         
>         input[type="text"],
>         input[type="password"] {
>             width: 100%;
>             padding: 10px;
>             border: 2px solid #e0e0e0;
>             border-radius: 5px;
>             font-size: 16px;
>         }
>         
>         input[type="text"]:focus,
>         input[type="password"]:focus {
>             outline: none;
>             border-color: #667eea;
>         }
>         
>         input[type="submit"] {
>             background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
>             color: white;
>             border: none;
>             padding: 12px 30px;
>             border-radius: 5px;
>             font-size: 16px;
>             cursor: pointer;
>             width: 100%;
>         }
>         
>         input[type="submit"]:hover {
>             transform: scale(1.02);
>         }
>         
>         .error {
>             color: #f44336;
>             font-size: 14px;
>             margin-top: 5px;
>         }
>         
>         .success {
>             background-color: #4CAF50;
>             color: white;
>             padding: 15px;
>             border-radius: 5px;
>             margin-bottom: 20px;
>         }
>         
>         .result-table {
>             width: 100%;
>             border-collapse: collapse;
>             margin-top: 20px;
>         }
>         
>         .result-table th {
>             background-color: #667eea;
>             color: white;
>             padding: 10px;
>             text-align: left;
>         }
>         
>         .result-table td {
>             padding: 10px;
>             border-bottom: 1px solid #e0e0e0;
>         }
>         
>         .back-link {
>             display: inline-block;
>             margin-top: 20px;
>             color: #667eea;
>             text-decoration: none;
>         }
>         
>         .back-link:hover {
>             text-decoration: underline;
>         }
>     </style>
> </head>
> <body>
>     <div class="container">
>         <h1>📝 Registration Form Processor</h1>
>         
>         <?php
>         // Check if form was submitted
>         if (isset($_POST['submit'])) {
>             
>             // Initialize error array
>             $errors = [];
>             $validated_data = [];
>             
>             // Get form data and sanitize
>             $name = isset($_POST['name']) ? trim($_POST['name']) : '';
>             $password = isset($_POST['password']) ? $_POST['password'] : '';
>             $nin = isset($_POST['nin']) ? trim($_POST['nin']) : '';
>             
>             // 1. Validate Name (non-empty string)
>             if (empty($name)) {
>                 $errors['name'] = "Name cannot be empty.";
>             } elseif (strlen($name) < 2) {
>                 $errors['name'] = "Name must be at least 2 characters long.";
>             } elseif (!preg_match("/^[a-zA-Z\s]+$/", $name)) {
>                 $errors['name'] = "Name can only contain letters and spaces.";
>             } else {
>                 $validated_data['name'] = htmlspecialchars($name);
>             }
>             
>             // 2. Validate Password (at least 6 characters)
>             if (empty($password)) {
>                 $errors['password'] = "Password cannot be empty.";
>             } elseif (strlen($password) < 6) {
>                 $errors['password'] = "Password must be at least 6 characters long.";
>             } elseif (!preg_match("/^(?=.*[A-Za-z])(?=.*\d)/", $password)) {
>                 $errors['password'] = "Password must contain at least one letter and one number.";
>             } else {
>                 // Don't store actual password, store masked version
>                 $validated_data['password'] = str_repeat('•', strlen($password));
>                 // In real application, you would hash the password
>                 // $hashed_password = password_hash($password, PASSWORD_DEFAULT);
>             }
>             
>             // 3. Validate NIN (exactly 24 digits)
>             if (empty($nin)) {
>                 $errors['nin'] = "NIN cannot be empty.";
>             } elseif (!ctype_digit($nin)) {
>                 $errors['nin'] = "NIN must contain only digits.";
>             } elseif (strlen($nin) != 24) {
>                 $errors['nin'] = "NIN must be exactly 24 digits long. You entered " . strlen($nin) . " digits.";
>             } else {
>                 // Format NIN for display (group digits)
>                 $validated_data['nin'] = chunk_split($nin, 4, ' ');
>             }
>             
>             // Display results
>             if (empty($errors)) {
>                 // All validations passed
>                 echo "<div class='success'>";
>                 echo "✅ Registration successful! All fields are valid.";
>                 echo "</div>";
>                 
>                 echo "<h3>Validated Data:</h3>";
>                 echo "<table class='result-table'>";
>                 echo "<tr><th>Field</th><th>Value</th></tr>";
>                 echo "<tr><td><strong>Name</strong></td><td>" . $validated_data['name'] . "</td></tr>";
>                 echo "<tr><td><strong>Password</strong></td><td>" . $validated_data['password'] . "</td></tr>";
>                 echo "<tr><td><strong>NIN</strong></td><td>" . $validated_data['nin'] . "</td></tr>";
>                 echo "</table>";
>                 
>                 // In a real application, you would save to database here
>                 /*
>                 $conn = new mysqli("localhost", "username", "password", "database");
>                 $hashed_password = password_hash($password, PASSWORD_DEFAULT);
>                 $stmt = $conn->prepare("INSERT INTO users (name, password, nin) VALUES (?, ?, ?)");
>                 $stmt->bind_param("sss", $name, $hashed_password, $nin);
>                 $stmt->execute();
>                 */
>                 
>             } else {
>                 // Display errors
>                 echo "<div style='background-color: #ffebee; color: #c62828; padding: 20px; border-radius: 5px; margin-bottom: 20px;'>";
>                 echo "<h3>❌ Validation Errors:</h3>";
>                 echo "<ul>";
>                 foreach ($errors as $field => $error) {
>                     echo "<li><strong>" . ucfirst($field) . ":</strong> " . $error . "</li>";
>                 }
>                 echo "</ul>";
>                 echo "</div>";
>                 
>                 // Display the form again with submitted values
>                 displayForm($name, $password, $nin, $errors);
>             }
>             
>         } else {
>             // Display empty form for first time
>             displayForm('', '', '', []);
>         }
>         
>         // Function to display the form
>         function displayForm($name, $password, $nin, $errors) {
>             ?>
>             <fieldset>
>                 <legend>Registration Form</legend>
>                 <form action="abc.php" method="post" name="myForm">
>                     <div class="form-group">
>                         <label for="name">Name:</label>
>                         <input type="text" id="name" name="name" value="<?php echo htmlspecialchars($name); ?>">
>                         <?php if (isset($errors['name'])): ?>
>                             <div class="error"><?php echo $errors['name']; ?></div>
>                         <?php endif; ?>
>                     </div>
>                     
>                     <div class="form-group">
>                         <label for="password">Password:</label>
>                         <input type="password" id="password" name="password" value="<?php echo htmlspecialchars($password); ?>">
>                         <?php if (isset($errors['password'])): ?>
>                             <div class="error"><?php echo $errors['password']; ?></div>
>                         <?php endif; ?>
>                         <small style="color: #666;">Minimum 6 characters</small>
>                     </div>
>                     
>                     <div class="form-group">
>                         <label for="nin">NIN (24 digits):</label>
>                         <input type="text" id="nin" name="nin" value="<?php echo htmlspecialchars($nin); ?>" maxlength="24" pattern="\d{24}">
>                         <?php if (isset($errors['nin'])): ?>
>                             <div class="error"><?php echo $errors['nin']; ?></div>
>                         <?php endif; ?>
>                         <small style="color: #666;">Exactly 24 digits, no spaces</small>
>                     </div>
>                     
>                     <input type="submit" name="submit" value="Register">
>                 </form>
>             </fieldset>
>             
>             <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
>                 <h4>Validation Rules:</h4>
>                 <ul style="margin-left: 20px; color: #666;">
>                     <li>Name: Non-empty string (letters and spaces only)</li>
>                     <li>Password: At least 6 characters (must contain at least one letter and one number)</li>
>                     <li>NIN: Exactly 24 digits</li>
>                 </ul>
>             </div>
>             <?php
>         }
>         ?>
>         
>         <div style="text-align: center; margin-top: 20px;">
>             <a href="javascript:history.go(0)" class="back-link">↻ Reset Form</a>
>         </div>
>     </div>
> </body>
> </html>
> ```

---

### Question Six

**Use Figure 1 in Question Four to answer the following questions:**

---

**i. Write a CSS rule that makes heading level one to be 36 large and color to be red. [3 Marks]**

> [!Tip]- Answer (Click to show)
> ```css
> /* Target the h1 element */
> h1 {
>     font-size: 36px;
>     color: red;
> }
> ```
>
> **Alternative using different units:**
> ```css
> h1 {
>     font-size: 36pt;  /* Using points */
>     color: #FF0000;   /* Hex code for red */
> }
> ```
>
> **If you need to be more specific:**
> ```css
> body h1 {
>     font-size: 36px;
>     color: red;
> }
> ```

---

**ii. Write a CSS rule that will change the background color of the page to be blue. [3 Marks]**

> [!Tip]- Answer (Click to show)
> ```css
> /* Target the body element */
> body {
>     background-color: blue;
> }
> ```
>
> **Alternative methods:**
> ```css
> /* Using hex code */
> body {
>     background-color: #0000FF;
> }
>
> /* Using RGB */
> body {
>     background-color: rgb(0, 0, 255);
> }
>
> /* Using universal selector */
> * {
>     background-color: blue;
> }
> ```

---

**iii. Write the CSS rule to place the image as a background color of the page. Assume the image is labeled "cive.png". [3 Marks]**

> [!Tip]- Answer (Click to show)
> ```css
> /* Set image as background */
> body {
>     background-image: url('cive.png');
> }
> ```
>
> **With additional properties:**
> ```css
> body {
>     background-image: url('cive.png');
>     background-repeat: no-repeat;        /* Don't repeat the image */
>     background-position: center;         /* Center the image */
>     background-size: cover;              /* Cover the entire page */
>     background-attachment: fixed;        /* Fixed background */
> }
> ```
>
> **Shorthand property:**
> ```css
> body {
>     background: url('cive.png') no-repeat center center fixed;
>     background-size: cover;
> }
> ```

---

**iv. Write a CSS rule to make the background color of the paragraph yellow, arial, bold. [3 Marks]**

> [!Tip]- Answer (Click to show)
> ```css
> /* Target the paragraph with id="parg" */
> #parg {
>     background-color: yellow;
>     font-family: Arial, sans-serif;
>     font-weight: bold;
> }
> ```
>
> **If targeting all paragraphs:**
> ```css
> p {
>     background-color: yellow;
>     font-family: Arial, sans-serif;
>     font-weight: bold;
> }
> ```

---

**v. How will the page look after adding the following CSS rule? [3 Marks]**

```css
* {
    color: green;
}
```

> [!Tip]- Answer (Click to show)
> **Explanation of `* { color: green; }`:**
>
> The universal selector `*` selects all elements on the page. Therefore, this rule will set the text color of **every element** to green.
>
> **Effect on the page:**
> - The heading "Welcome to College of Informatics and Virtual Education" will be green
> - The paragraph text will be green
> - All list items in both unordered and ordered lists will be green
> - Even the plain text "For Department of Electronics and Telecommunication Engineering" (which is not wrapped in any tag) will be green because it inherits the color from the body
> - Any other text on the page will be green
>
> **Visual representation:**
> ```
> Welcome to College of Informatics and Virtual Education (green)
>
> For Department of computer science and Engineering (green)
>   • BSc.In Computer Science (green)
>   • BSc.In Software Engineering (green)
>
> For Department of Electronics and Telecommunication Engineering (green)
>   1. BSc.In Telecommunication Engineering (green)
>   2. Diploma in Telecommunication (green)
>   3. Diploma in Computer Networks (green)
> ```
>
> **Note:** This rule does not affect background colors, borders, or other non-text properties - only the color of text.

---

**vi. Write a CSS rule to change the text color of the ordered list to be green. [5 Marks]**

> [!Tip]- Answer (Click to show)
> **Method 1: Target the ordered list directly:**
> ```css
> ol {
>     color: green;
> }
> ```
>
> **Method 2: Target list items within ordered list:**
> ```css
> ol li {
>     color: green;
> }
> ```
>
> **Method 3: Using class or ID (if assigned):**
> ```css
> /* If the ol had an id like <ol id="programs-list"> */
> #programs-list {
>     color: green;
> }
>
> /* or with class */
> .programs {
>     color: green;
> }
> ```
>
> **Method 4: More specific selector:**
> ```css
> body ol {
>     color: green;
> }
> ```
>
> **Complete CSS with additional styling:**
> ```css
> /* Style the ordered list */
> ol {
>     color: green;
>     font-weight: bold;
>     list-style-type: decimal;  /* Ensure numbers are displayed */
> }
>
> /* Style only the list items within ordered list */
> ol li {
>     color: green;
>     margin-bottom: 5px;
> }
>
> /* Different color for different levels (if nested) */
> ol li {
>     color: green;
> }
>
> ol ol li {
>     color: lightgreen;  /* Nested lists get lighter green */
> }
> ```

---

### Question Seven

**The following question use a database CS0219, table called users with the following structure: Assume the table already has some data inside.**

```sql
CREATE TABLE users (
    RegNo VARCHAR(20) NOT NULL PRIMARY KEY,
    FirstName VARCHAR(20) NOT NULL,
    LastName VARCHAR(20) NOT NULL,
    Surname VARCHAR(20)
);
```

---

**i. Write a code to make connection between PHP and Database. Servername=127.0.0.1, User=root, password="". [4 Marks]**

> [!Tip]- Answer (Click to show)
> **Method 1: MySQLi (Object-Oriented)**
> ```php
> <?php
> // Database connection parameters
> $servername = "127.0.0.1";
> $username = "root";
> $password = "";
> $database = "CS0219";
>
> // Create connection
> $conn = new mysqli($servername, $username, $password, $database);
>
> // Check connection
> if ($conn->connect_error) {
>     die("Connection failed: " . $conn->connect_error);
> }
> echo "Connected successfully";
> ?>
> ```
>
> **Method 2: MySQLi (Procedural)**
> ```php
> <?php
> $conn = mysqli_connect("127.0.0.1", "root", "", "CS0219");
>
> if (!$conn) {
>     die("Connection failed: " . mysqli_connect_error());
> }
> echo "Connected successfully";
> ?>
> ```
>
> **Method 3: PDO (PHP Data Objects)**
> ```php
> <?php
> try {
>     $conn = new PDO("mysql:host=127.0.0.1;dbname=CS0219", "root", "");
>     // Set PDO error mode to exception
>     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
>     echo "Connected successfully";
> } catch(PDOException $e) {
>     echo "Connection failed: " . $e->getMessage();
> }
> ?>
> ```
>
> **Complete connection script with error handling:**
> ```php
> <?php
> // config.php
> $servername = "127.0.0.1";
> $username = "root";
> $password = "";
> $dbname = "CS0219";
>
> // Create connection
> $conn = new mysqli($servername, $username, $password, $dbname);
>
> // Check connection
> if ($conn->connect_error) {
>     error_log("Connection failed: " . $conn->connect_error);
>     die("Database connection error. Please try again later.");
> }
>
> // Set charset to UTF-8
> $conn->set_charset("utf8");
>
> // echo "Connected successfully"; // Comment out in production
> ?>
> ```

---

**ii. Write a PHP code to insert your details to the database (Your RegNo, first name, last name and surname). [4 Marks]**

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> // Include database connection
> require_once 'config.php'; // Assuming connection code is in config.php
>
> // Your personal details
> $regNo = "CS/123/2020";  // Replace with your actual registration number
> $firstName = "John";      // Replace with your first name
> $lastName = "Doe";        // Replace with your last name
> $surname = "Smith";       // Replace with your surname
>
> // Method 1: Using MySQLi (Object-Oriented) with prepared statement (Recommended)
> $stmt = $conn->prepare("INSERT INTO users (RegNo, FirstName, LastName, Surname) VALUES (?, ?, ?, ?)");
> $stmt->bind_param("ssss", $regNo, $firstName, $lastName, $surname);
>
> if ($stmt->execute()) {
>     echo "New record created successfully. RegNo: " . $regNo;
> } else {
>     echo "Error: " . $stmt->error;
> }
>
> $stmt->close();
>
> // Method 2: Using MySQLi (Object-Oriented) without prepared statement
> /*
> $sql = "INSERT INTO users (RegNo, FirstName, LastName, Surname) 
>         VALUES ('$regNo', '$firstName', '$lastName', '$surname')";
>
> if ($conn->query($sql) === TRUE) {
>     echo "New record created successfully";
> } else {
>     echo "Error: " . $sql . "<br>" . $conn->error;
> }
> */
>
> // Method 3: Using PDO
> /*
> try {
>     $sql = "INSERT INTO users (RegNo, FirstName, LastName, Surname) 
>             VALUES (:regNo, :firstName, :lastName, :surname)";
>     $stmt = $conn->prepare($sql);
>     $stmt->execute([
>         ':regNo' => $regNo,
>         ':firstName' => $firstName,
>         ':lastName' => $lastName,
>         ':surname' => $surname
>     ]);
>     echo "New record created successfully";
> } catch(PDOException $e) {
>     echo "Error: " . $e->getMessage();
> }
> */
>
> // Close connection
> $conn->close();
> ?>
> ```

---

**iii. Write a PHP code to retrieve all users in the database and display their details on the browser. [6 Marks]**

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> // Include database connection
> require_once 'config.php';
> ?>
>
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Users List - CS0219 Database</title>
>     <style>
>         * {
>             box-sizing: border-box;
>             margin: 0;
>             padding: 0;
>         }
>         
>         body {
>             font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
>             background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
>             min-height: 100vh;
>             padding: 20px;
>         }
>         
>         .container {
>             max-width: 1000px;
>             margin: 0 auto;
>             background-color: white;
>             border-radius: 15px;
>             padding: 30px;
>             box-shadow: 0 10px 30px rgba(0,0,0,0.2);
>         }
>         
>         h1 {
>             color: #333;
>             margin-bottom: 20px;
>             text-align: center;
>         }
>         
>         h1 span {
>             color: #667eea;
>         }
>         
>         .table-container {
>             overflow-x: auto;
>             border-radius: 10px;
>             box-shadow: 0 5px 15px rgba(0,0,0,0.1);
>         }
>         
>         table {
>             width: 100%;
>             border-collapse: collapse;
>             background-color: white;
>         }
>         
>         th {
>             background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
>             color: white;
>             font-weight: 600;
>             padding: 15px;
>             text-align: left;
>             font-size: 14px;
>             text-transform: uppercase;
>             letter-spacing: 0.5px;
>         }
>         
>         td {
>             padding: 12px 15px;
>             border-bottom: 1px solid #e0e0e0;
>             color: #555;
>         }
>         
>         tr:hover {
>             background-color: #f8f9fa;
>         }
>         
>         .stats {
>             background-color: #f8f9fa;
>             padding: 15px;
>             border-radius: 10px;
>             margin-bottom: 20px;
>             text-align: center;
>             font-size: 16px;
>         }
>         
>         .badge {
>             background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
>             color: white;
>             padding: 5px 15px;
>             border-radius: 20px;
>             font-size: 14px;
>         }
>         
>         .no-data {
>             text-align: center;
>             padding: 40px;
>             color: #999;
>             font-style: italic;
>         }
>         
>         .footer {
>             margin-top: 20px;
>             text-align: center;
>             color: #666;
>             font-size: 12px;
>         }
>     </style>
> </head>
> <body>
>     <div class="container">
>         <h1>CS0219 <span>Users Database</span></h1>
>         
>         <?php
>         // Method 1: Using MySQLi (Object-Oriented)
>         $sql = "SELECT RegNo, FirstName, LastName, Surname FROM users ORDER BY RegNo";
>         $result = $conn->query($sql);
>         
>         // Display statistics
>         if ($result) {
>             $totalUsers = $result->num_rows;
>             echo "<div class='stats'>";
>             echo "<span class='badge'>Total Users: " . $totalUsers . "</span>";
>             echo "</div>";
>         }
>         
>         // Check if there are results
>         if ($result && $result->num_rows > 0) {
>             echo "<div class='table-container'>";
>             echo "<table>";
>             echo "<thead>";
>             echo "<tr>";
>             echo "<th>Reg No</th>";
>             echo "<th>First Name</th>";
>             echo "<th>Last Name</th>";
>             echo "<th>Surname</th>";
>             echo "</tr>";
>             echo "</thead>";
>             echo "<tbody>";
>             
>             // Output data of each row
>             while($row = $result->fetch_assoc()) {
>                 echo "<tr>";
>                 echo "<td><strong>" . htmlspecialchars($row['RegNo']) . "</strong></td>";
>                 echo "<td>" . htmlspecialchars($row['FirstName']) . "</td>";
>                 echo "<td>" . htmlspecialchars($row['LastName']) . "</td>";
>                 echo "<td>" . htmlspecialchars($row['Surname'] ?? 'N/A') . "</td>";
>                 echo "</tr>";
>             }
>             
>             echo "</tbody>";
>             echo "</table>";
>             echo "</div>";
>         } else {
>             echo "<div class='no-data'>";
>             echo "No users found in the database.";
>             echo "</div>";
>         }
>         
>         // Method 2: Alternative using while loop with fetch_array
>         /*
>         echo "<h3>Alternative Display Method:</h3>";
>         $result = $conn->query($sql);
>         if ($result->num_rows > 0) {
>             echo "<ul>";
>             while($row = $result->fetch_array(MYSQLI_ASSOC)) {
>                 echo "<li>" . $row['RegNo'] . " - " . $row['FirstName'] . " " . $row['LastName'] . "</li>";
>             }
>             echo "</ul>";
>         }
>         */
>         
>         // Method 3: Using PDO
>         /*
>         try {
>             $stmt = $conn->query("SELECT RegNo, FirstName, LastName, Surname FROM users");
>             $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
>             
>             if (count($users) > 0) {
>                 echo "<table>";
>                 echo "<tr><th>RegNo</th><th>FirstName</th><th>LastName</th><th>Surname</th></tr>";
>                 foreach($users as $row) {
>                     echo "<tr>";
>                     echo "<td>" . htmlspecialchars($row['RegNo']) . "</td>";
>                     echo "<td>" . htmlspecialchars($row['FirstName']) . "</td>";
>                     echo "<td>" . htmlspecialchars($row['LastName']) . "</td>";
>                     echo "<td>" . htmlspecialchars($row['Surname'] ?? 'N/A') . "</td>";
>                     echo "</tr>";
>                 }
>                 echo "</table>";
>             } else {
>                 echo "0 results";
>             }
>         } catch(PDOException $e) {
>             echo "Error: " . $e->getMessage();
>         }
>         */
>         
>         // Close connection
>         $conn->close();
>         ?>
>         
>         <div class="footer">
>             <p>© 2020 College of Informatics and Virtual Education - University of Dodoma</p>
>             <p>Database: CS0219 | Table: users</p>
>         </div>
>     </div>
> </body>
> </html>
> ```

---

**iv. What is the importance of the Primary Key in the users table? [3 Marks]**

> [!Tip]- Answer (Click to show)
> **Importance of Primary Key in the users table:**
>
> 1. **Uniqueness**: Ensures each record (student) has a unique RegNo, preventing duplicate entries.
>
> 2. **Fast Data Retrieval**: Primary keys are automatically indexed, making searches by RegNo very fast.
>
> 3. **Data Integrity**: Prevents insertion of NULL or duplicate values in the RegNo field.
>
> 4. **Relationship Building**: Enables linking to other tables (e.g., courses, grades) through foreign keys.
>
> 5. **Automatic Sorting**: Data is typically stored in primary key order for efficient access.
>
> 6. **Record Identification**: Provides a reliable way to identify, update, or delete specific students.
>
> 7. **Constraint Enforcement**: Enforces entity integrity by ensuring every row is uniquely identifiable.
>
> **Example of primary key benefits:**
> ```sql
> -- Fast lookup by RegNo
> SELECT * FROM users WHERE RegNo = 'CS/123/2020'; -- Very fast due to primary key index
>
> -- This would fail because RegNo must be unique
> INSERT INTO users (RegNo, FirstName) VALUES ('CS/123/2020', 'Another'); -- Error!
> ```

---

## END OF EXAMINATION PAPER