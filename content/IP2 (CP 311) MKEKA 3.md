
# CP311 - Internet Programming and Applications II
## Examination Answers

---

**Question: What is the value displayed when the following is executed? Testscript.php?c=25**

```php
<?php
Function process($c,$d=25){
$retval = $c+$d=$_GET['C']
return $retval;
}
echo process[5.30];
?>
```
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> There are syntax errors in the provided PHP code. Let's correct them and analyze the code:
>
> ```php
> <?php
> function process($c, $d = 25) {
> $retval = $c + $d = $_GET['C']; // There's a syntax error in this line
> return $retval;
> }
> echo process(5.30);
> ?>
> ```
>
> 1. The function declaration should use parentheses ( ) instead of braces { }.
> 2. The assignment inside the function `$retval = $c + $d = $_GET['C'];` seems incorrect.
> 3. The `$_GET` array is being accessed incorrectly using single quotes. It should use double quotes or no quotes.
>
> Let's correct these issues and analyze the code:
>
> ```php
> <?php
> function process($c, $d = 25) {
> $retval = $c + $d; // corrected syntax for assignment
> return $retval;
> }
> echo process(5.30);
> ?>
> ```
>
> In this corrected code, the process function takes two parameters `$c` and `$d`, with a default value of 25 for `$d`. It then calculates the sum of `$c` and `$d`. When `echo process(5.30);` is executed, it calls the process function with the argument 5.30. Since PHP is loosely typed, it will consider 5.30 as a float. The function will then return the sum of 5.30 and 25, which is 30.30.
>
> Therefore, the value displayed will be **30.3**.

---

**Question: What is the output of the following PHP script?**

```php
<?php
$a = 4;
$b = 5;
$c = 7;
$d = 8;
$e = 1.0;
$f = $c + $d * 3;
$g = $f % 9;
$h = $b - $a + $c + 3;
$i = $h << $c;
$j = $i * $e;
print $j;
?>
```
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> Let's break down the PHP script and evaluate each line:
>
> 1. `$a = 4;`, `$b = 5;`, `$c = 7;` - Assigns integer values to variables `$a`, `$b`, and `$c`.
> 2. `$d = 8;`, `$e = 1.0;` - Assigns an integer value to variable `$d` and a float value to variable `$e`.
> 3. `$f = $c + $d * 3;` - Evaluates the expression `$c + ($d * 3)` and assigns the result to variable `$f`. `$d * 3` equals 24, and when added to `$c` (7), the result is **31**.
> 4. `$g = $f % 9;` - Finds the remainder of the division of `$f` by 9 and assigns it to `$g`. `$f` is 31, so the remainder of `31 % 9` is **4**.
> 5. `$h = $b - $a + $c + 3;` - Evaluates the expression `$b - $a + $c + 3` and assigns the result to `$h`. `5 - 4 + 7 + 3` equals **11**.
> 6. `$i = $h << $c;` - Shifts the bits of `$h` to the left by `$c` positions and assigns the result to `$i`. In binary representation, `$h` (11) is `1011`. Shifting it left by 7 positions results in `1011000000` in binary, which is **704** in decimal.
> 7. `$j = $i * $e;` - Multiplies `$i` by `$e` and assigns the result to `$j`. Since `$i` is 704 and `$e` is 1.0, the result is **704**.
> 8. `print $j;` - Prints the value of `$j`.
>
> Therefore, the output of the script will be: **704**

---

**Question: Evaluate the output of the following PHP script if the variables `$a`, `$b` and `$c` in order are assigned the following values at the declaration phase:**

a) False, true, false
b) true, false, true

```php
<?php
$string = "Hello world";
$a;
$b;
$c; //values should be assigned here
if ($a) {
    if ($b and !$c) {
        echo "Goodbye Cruel world!";
    } else if (!$b && !$c) {
        echo "Nothing here";
    } else {
        if (!$b) {
            if (!$a && (!$b and $c)) {
                echo "Hello, world!";
            } else {
                echo "Goodbye world!";
            }
        } else {
            echo "Not quite";
        }
    }
}
?>
```
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> **a) If `$a` is false, `$b` is true, and `$c` is false:**
>
> In this case, since `$a` is false, the execution enters the else block. Since `$b` is true, the execution goes into the inner else block. Since `$b` is false, the execution enters the innermost else block. Since `$a` is true and (`$b && $c`) evaluates to false, the execution echoes "Goodbye world!"
>
> **Output:** Goodbye world!
>
> **b) If `$a` is true, `$b` is false, and `$c` is true:**
>
> In this case, since `$a` is true, the execution enters the first if block. Since `$b` is false and `$c` is true, the execution enters the inner if block. Since `$c` is false, the execution does not echo anything.
>
> **Output:** (no output)
>
> Therefore, for scenario a) the output is **"Goodbye world!"**, and for scenario b) there is **no output**.

---

**Question: What will be the output of the following script:**

```php
<?php
$array = array(1,2,3,5,8,13,21,34,55);
$sum=0;
for($i=0; $i<5; $i++){
    $sum+= $array[$array[$i]];
}
echo $sum;
?>
```
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> In this script:
>
> 1. `$array` is an array containing several numbers.
> 2. `$sum` is initialized to 0.
> 3. The for loop iterates 5 times (from 0 to 4).
> 4. In each iteration, `$sum` is incremented by the value located at the index specified by the value at the current index of `$array`. This can lead to accessing values beyond the index of `$array`, resulting in undefined behavior.
> 5. Finally, the value of `$sum` is echoed.
>
> Now let's evaluate the loop:
>
> - When `$i` is 0, `$array[$i]` is 1. So, `$array[$array[$i]]` is `$array[1]`, which is **2**.
> - When `$i` is 1, `$array[$i]` is 2. So, `$array[$array[$i]]` is `$array[2]`, which is **3**.
> - When `$i` is 2, `$array[$i]` is 3. So, `$array[$array[$i]]` is `$array[3]`, which is **5**.
> - When `$i` is 3, `$array[$i]` is 5. So, `$array[$array[$i]]` is `$array[5]`, which is **13**.
> - When `$i` is 4, `$array[$i]` is 8. So, `$array[$array[$i]]` is `$array[8]`, which is **55**.
>
> Adding these values to `$sum`:
>
> **2 + 3 + 5 + 13 + 55 = 78**
>
> So, the output will be **78**.

---

**Question: Write a PHP code that processes the following form:**

```html
<fieldset>
    <legend>Registration Form</legend>
    <form action="abc.php" method="post" name="myForm">
        Name: <input type="text" name="name"><br>
        Password: <input type="text" name="lname"><br>
        NIN: <input type="text" name="nin"><br>
        <input type="submit" name='submit' value="submit">
    </form>
</fieldset>
```

**Your form should examine the name, password, and National Id Number (NIN) submitted, and verify that they are valid. A valid name is any non-empty string. A valid password is any string that is at least 6 characters long. A valid NIN contains 24 digits.**
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> Here's a PHP code snippet that processes the provided form:
>
> ```php
> <?php
> if ($_SERVER["REQUEST_METHOD"] == "POST") {
>
>     // Define validation functions
>     function isValidName($name) {
>         return !empty($name);
>     }
>
>     function isValidPassword($password) {
>         return strlen($password) >= 6;
>     }
>
>     function isValidNIN($nin) {
>         return strlen($nin) == 24 && ctype_digit($nin);
>     }
>
>     // Retrieve form data
>     $name = $_POST['name'];
>     $password = $_POST['lname'];
>     $nin = $_POST['nin'];
>
>     // Validate form data
>     $nameValid = isValidName($name);
>     $passwordValid = isValidPassword($password);
>     $ninValid = isValidNIN($nin);
>
>     // Check if all fields are valid
>     if ($nameValid && $passwordValid && $ninValid) {
>         echo "Form submitted successfully!";
>     } else {
>         echo "Form validation failed. Please check your input:<br>";
>         if (!$nameValid) echo "- Name cannot be empty.<br>";
>         if (!$passwordValid) echo "- Password must be at least 6 characters long.<br>";
>         if (!$ninValid) echo "- NIN must contain exactly 24 digits.<br>";
>     }
> }
> ?>
> ```
>
> In this code:
>
> 1. We check if the request method is POST to ensure that the form has been submitted.
> 2. We define three validation functions to check the validity of the name, password, and NIN.
> 3. We retrieve the form data using `$_POST`.
> 4. We validate each form field using the defined validation functions.
> 5. We display a success message if all fields are valid. Otherwise, we display an error message with specific information about the validation failures.
>
> You can include this PHP code in the "abc.php" file specified in the form's action attribute. Make sure to sanitize and validate the form data further if you plan to use it for any critical operations, such as database insertion.

---

**Question:**

**i) How do we comment PHP code in a PHP page?**
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> Comments in PHP can be added using two methods:
>
> **Single-line comments:** These are denoted by two forward slashes (//). Anything after // on the same line is considered a comment.
>
> **Multi-line comments:** These are enclosed within `/*` and `*/`. Anything between `/*` and `*/` is considered a comment, even if it spans multiple lines.
>
> **Example:**
> ```php
> // This is a single-line comment
>
> /*
> This is a multi-line comment.
> It can span multiple lines.
> */
> ```

---

**ii) What is the difference between POST method and GET method?**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> The main differences between the POST and GET methods in HTTP are:
>
> **POST method:** It sends data to the server in the HTTP request body. It is suitable for sending large amounts of data and is more secure as the data is not visible in the URL.
>
> **GET method:** It sends data to the server as part of the URL query string. It is suitable for sending small amounts of data, and the data is visible in the URL, which may pose security risks, especially when sensitive information is involved.

---

**iii) What is the difference between `$_FILES['user_file']['name']` and `$_FILES['user_file']['tmp_name']`?**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> The difference between `$_FILES['user_file']['name']` and `$_FILES['user_file']['tmp_name']` in PHP is:
>
> - **`$_FILES['user_file']['name']`**: It contains the original name of the uploaded file on the client's machine.
> - **`$_FILES['user_file']['tmp_name']`**: It contains the temporary filename of the file on the server. This is the file that needs to be moved to a permanent location on the server.

---

**iv) How can we capture an error during uploading files in PHP?**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> To capture errors during file uploads in PHP, you can use error handling techniques such as try-catch blocks or checking error codes returned by file upload functions like `move_uploaded_file()`. Additionally, you can use functions like `error_reporting()` and `ini_set()` to control the level of error reporting.

---

**v) How can we change the maximum size of a file to be uploaded in PHP?**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> To change the maximum size of a file to be uploaded in PHP, you can modify the `upload_max_filesize` directive in the php.ini configuration file. Alternatively, you can use the `ini_set()` function to set it dynamically within your PHP script.

---

**vi) HTTP is a stateless protocol. Explain.**
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> HTTP is a stateless protocol, which means that the server does not retain any information about previous requests made by the client. Each request from the client to the server is independent and isolated from previous requests.

---

**vii) Explain the two ways of introducing state in HTTP protocol.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> Two ways of introducing state in the HTTP protocol are:
>
> **Cookies:** Cookies are small pieces of data stored on the client's browser. They can be used to store information such as session IDs, user preferences, and shopping cart contents.
>
> **Sessions:** Sessions are server-side mechanisms for storing user-specific data across multiple HTTP requests. They typically use a unique session ID stored as a cookie on the client's browser to associate subsequent requests with the same session.

---

**viii) What is the difference between unset() and session_destroy() in PHP?**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> The difference between `unset()` and `session_destroy()` in PHP is:
>
> - **unset()**: It is used to unset a variable or an array of variables in PHP. It removes the variable from memory, but it does not destroy the entire session.
> - **session_destroy()**: It is used to destroy all data associated with the current session. It clears out all session variables and ends the session.

---

**ix) With the help of code segment explain the correct approach of using the setcookie() function.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> The correct approach of using the `setcookie()` function in PHP involves setting the cookie before any output is sent to the browser. This ensures that the header containing the cookie is sent before any content. Here's an example:
>
> ```php
> <?php
> // Set cookie before any output
> setcookie("user", "John", time() + 3600, "/");
> ?>
> <!DOCTYPE html>
> <html>
> <head>
>     <title>Cookie Example</title>
> </head>
> <body>
>     <h1>Cookie Example</h1>
>     <!-- Your HTML content -->
> </body>
> </html>
> ```

---

**x) Write a simple program to count the number of 'hits' on a webpage.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> Here's a simple program in PHP to count the number of hits on a webpage:
>
> ```php
> <?php
> $filename = "hit_count.txt";
>
> // Open the file for reading and get the current count
> $handle = fopen($filename, "r");
> $count = (int)fread($handle, filesize($filename));
> fclose($handle);
>
> // Increment the count
> $count++;
>
> // Open the file for writing and save the updated count
> $handle = fopen($filename, "w");
> fwrite($handle, $count);
> fclose($handle);
>
> // Display the count
> echo "Number of hits: " . $count;
> ?>
> ```

---

**xi) What is the difference between echo and print?**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> The difference between `echo` and `print` in PHP is minimal:
>
> - **echo**: It can take multiple parameters, does not return a value, and is slightly faster.
> - **print**: It can only take one argument, returns a value of 1, and is slower.

---

**xii) What is the difference between require() and include()?**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> The difference between `require()` and `include()` in PHP is:
>
> - **require()**: It includes and evaluates a specified file. If the file cannot be included, it produces a fatal error and halts the script execution.
> - **include()**: It includes and evaluates a specified file. If the file cannot be included, it produces a warning and continues script execution.

---

**Question: The following question use a database CS0219, table called users with the following structure: assume the table already has some data inside.**

```sql
CREATE TABLE users(
    RegNo VARCHAR(20) NOT NULL PRIMARY KEY,
    FirstName VARCHAR(20) NOT NULL,
    LastName VARCHAR(20) NOT NULL,
    SurName VARCHAR(20)
)
```

**i) Write a code to make connection between PHP and Database. servername = 127.0.0.1 user = root, password = ""**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
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
>     die("Connection failed: " . $conn->connect_error);
> }
> echo "Connected successfully";
> ?>
> ```

---

**ii) Write a PHP code to insert your details to the database (your RegNo, firstname, lastname, surname).**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
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
>     die("Connection failed: " . $conn->connect_error);
> }
>
> // Inserting data
> $sql = "INSERT INTO users (RegNo, FirstName, LastName, SurName)
>         VALUES ('Your_RegNo', 'Your_FirstName', 'Your_LastName', 'Your_SurName')";
>
> if ($conn->query($sql) == TRUE) {
>     echo "New record created successfully";
> } else {
>     echo "Error: " . $sql . "<br>" . $conn->error;
> }
>
> $conn->close();
> ?>
> ```

---

**iii) Write a PHP code to retrieve all users in the database and display their details on the browser.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
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
>     die("Connection failed: " . $conn->connect_error);
> }
>
> // Retrieving data
> $sql = "SELECT * FROM users";
> $result = $conn->query($sql);
>
> if ($result->num_rows > 0) {
>     // output data of each row
>     while($row = $result->fetch_assoc()) {
>         echo "RegNo: " . $row["RegNo"]. " - FirstName: " . $row["FirstName"]. " - LastName: " . $row["LastName"]. " - SurName: " . $row["SurName"]. "<br>";
>     }
> } else {
>     echo "0 results";
> }
>
> $conn->close();
> ?>
> ```

---

**iv) Write a PHP code to display all users sorted by first name in descending order.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
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
>     die("Connection failed: " . $conn->connect_error);
> }
>
> // Retrieving data sorted by first name in descending order
> $sql = "SELECT * FROM users ORDER BY FirstName DESC";
> $result = $conn->query($sql);
>
> if ($result->num_rows > 0) {
>     // output data of each row
>     while($row = $result->fetch_assoc()) {
>         echo "RegNo: " . $row["RegNo"]. " - FirstName: " . $row["FirstName"]. " - LastName: " . $row["LastName"]. " - SurName: " . $row["SurName"]. "<br>";
>     }
> } else {
>     echo "0 results";
> }
>
> $conn->close();
> ?>
> ```

---

**v) Write a PHP code to display all users whose surnames are starting with a letter "A".**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
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
>     die("Connection failed: " . $conn->connect_error);
> }
>
> // Retrieving data where surname starts with letter "A"
> $sql = "SELECT * FROM users WHERE SurName LIKE 'A%'";
> $result = $conn->query($sql);
>
> if ($result->num_rows > 0) {
>     // output data of each row
>     while($row = $result->fetch_assoc()) {
>         echo "RegNo: " . $row["RegNo"]. " - FirstName: " . $row["FirstName"]. " - LastName: " . $row["LastName"]. " - SurName: " . $row["SurName"]. "<br>";
>     }
> } else {
>     echo "0 results";
> }
>
> $conn->close();
> ?>
> ```

---

**Question:**

**a) Write PHP functions to accomplish each of the following tasks. Assume MySQL database server has been installed on the local machine and the improved version of php has been used.**

**i) Connect to the server with username root and password cive.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> function connectToServer() {
>     $servername = "localhost";
>     $username = "root";
>     $password = "cive";
>     $conn = new mysqli($servername, $username, $password);
>     if ($conn->connect_error) {
>         die("Connection failed: " . $conn->connect_error);
>     }
>     return $conn;
> }
> ?>
> ```

---

**ii) Select a database called CP311 to be used for queries.**
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> function selectDatabase($conn) {
>     $dbname = "CP311";
>     if ($conn->select_db($dbname) == false) {
>         die("Database selection failed: " . $conn->error);
>     }
> }
> ?>
> ```

---

**iii) Execute a query to select all rows and columns from the table called users.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> function selectAllFromUsers($conn) {
>     $sql = "SELECT * FROM users";
>     $result = $conn->query($sql);
>     if ($result->num_rows > 0) {
>         return $result;
>     } else {
>         echo "0 results";
>         return null;
>     }
> }
> ?>
> ```

---

**iv) Get the next row from a result set $results and assign to variable $row.**
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> function getNextRow($result) {
>     return $result->fetch_assoc();
> }
> ?>
> ```

---

**v) Close the database connection.**
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> function closeConnection($conn) {
>     $conn->close();
> }
> ?>
> ```

---

**Question: Make a web page that uses a SESSION to keep track how many times a user has viewed the page. The first time a particular user looks at the page, it should print something like "Number of views: 1". The second time the user looks at the page, it should print "Number of views: 2", and so on.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> Here's a simple PHP script that uses sessions to keep track of the number of times a user views the page:
>
> ```php
> <?php
> session_start();
>
> // Check if the session variable 'views' is set
> if (!isset($_SESSION['views'])) {
>     $_SESSION['views'] = 1; // If not set, initialize it to 1
> } else {
>     $_SESSION['views']++; // If set, increment it
> }
>
> // Print the number of views
> echo "Number of views: " . $_SESSION['views'];
> ?>
> ```
>
> You can create a webpage (e.g., "view_counter.php") and include this script. Each time a user visits the page, the script checks if the session variable 'views' is set. If it's not set, it initializes it to 1. If it's set, it increments it. Finally, it prints the number of views.
>
> Make sure that you have sessions enabled on your server and that you call `session_start()` at the beginning of your script to start or resume the session. This script will keep track of the number of views for each user session.

---

**Question: Write a simple PHP program to capture details from the form and display in a web. (First Name, Gender and comments).**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> Here's a simple PHP program to capture details from a form (First Name, Gender, and Comments) and display them on a webpage:
>
> **HTML Form (form.html):**
> ```html
> <!DOCTYPE html>
> <html>
> <head>
>     <title>Form Submission</title>
> </head>
> <body>
>     <h2>Form Submission</h2>
>     <form action="process_form.php" method="post">
>         <label for="fname">First Name:</label>
>         <input type="text" id="fname" name="fname" required><br><br>
>
>         <label for="gender">Gender:</label>
>         <input type="radio" id="male" name="gender" value="Male">
>         <label for="male">Male</label>
>         <input type="radio" id="female" name="gender" value="Female">
>         <label for="female">Female</label><br><br>
>
>         <label for="comments">Comments:</label><br>
>         <textarea id="comments" name="comments" rows="4" cols="50"></textarea><br><br>
>
>         <input type="submit" value="Submit">
>     </form>
> </body>
> </html>
> ```
>
> **PHP Processor (process_form.php):**
> ```php
> <!DOCTYPE html>
> <html>
> <head>
>     <title>Form Submission Result</title>
> </head>
> <body>
>     <h2>Form Submission Result</h2>
>     <?php
>     if ($_SERVER["REQUEST_METHOD"] == "POST") {
>         $fname = $_POST['fname'];
>         $gender = $_POST['gender'];
>         $comments = $_POST['comments'];
>
>         echo "First Name: $fname <br>";
>         echo "Gender: $gender <br>";
>         echo "Comments: $comments <br>";
>     }
>     ?>
> </body>
> </html>
> ```
>
> Save the HTML code in a file (e.g., "form.html"). This form captures the user's First Name, Gender, and Comments. Save the PHP code in a file named "process_form.php".
>
> When you fill out the form in "form.html" and submit it, the form data will be sent to "process_form.php". The PHP script will then retrieve the form data using `$_POST`, and display it on the webpage.

---

**Question: Modules are helpful for many sites that include sections of repeated code. Explain the following three functions, make the difference between them clear, include(), require(), require_once().**
*(6 Marks)*

> [!Tip]- Answer (Click to show)
> In PHP, `include()`, `require()`, and `require_once()` are used to include external PHP files into the current PHP script. They are especially useful for including reusable code, such as functions, classes, or configuration files, into multiple pages of a website.
>
> **1. include():**
>
> - `include()` includes and evaluates the specified file. If the file is not found or cannot be included for any reason, it generates a warning message but continues executing the script.
> - It is typically used when the file being included is not essential for the script to continue execution. If the included file is not found or fails to include, the script can still run.
>
> **2. require():**
>
> - `require()` includes and evaluates the specified file just like `include()`. However, if the file is not found or cannot be included, it generates a fatal error and halts the script execution.
> - It is typically used when the file being included is crucial for the script's functionality. If the included file is missing or fails to include, it's considered a critical error, and the script cannot continue running.
>
> **3. require_once():**
>
> - `require_once()` is similar to `require()`, but it checks if the file has already been included and, if so, it doesn't include it again.
> - It is particularly useful for including files containing function or class definitions that may be needed in multiple parts of a script. Using `require_once()` ensures that the file is included only once, preventing function/class redefinition errors.
>
> **Example Usage:**
> ```php
> // Using include()
> include('config.php'); // If config.php is not found or fails to include, a warning is generated, but the script continues executing
>
> // Using require()
> require('functions.php'); // If functions.php is not found or fails to include, a fatal error is generated, and script execution halts
>
> // Using require_once()
> require_once('constants.php'); // constants.php is included only once, even if this line is encountered multiple times in the script
> ```
>
> In summary, `include()` is used when the included file is not essential, `require()` is used when the included file is critical, and `require_once()` is used to ensure that a file is included only once to prevent redefinition errors.

---

**Question:**

**a) Explain the difference between Simple Object Access Protocol (SOAP) and Representational State Transfer (REST) web services.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **Difference between SOAP and REST web services:**
>
> **SOAP (Simple Object Access Protocol):**
>
> - SOAP is a protocol for exchanging structured information in the implementation of web services. It relies heavily on XML for message format and typically uses HTTP or SMTP for message transmission.
> - SOAP provides a standardized way of communication between applications over the network.
> - It supports more advanced security features and formal contracts through the use of Web Services Description Language (WSDL).
> - SOAP is often preferred in enterprise environments where formal contracts and security are critical.
>
> **REST (Representational State Transfer):**
>
> - REST is an architectural style for designing networked applications, often used in the context of web services development.
> - It emphasizes stateless communication between client and server, meaning each request from a client must contain all necessary information for the server to fulfill the request.
> - REST typically uses simple and lightweight data formats such as JSON or XML for data exchange, although it's not limited to these formats.
> - RESTful services are built around resources identified by URIs, and different HTTP methods (GET, POST, PUT, DELETE) are used to perform CRUD (Create, Read, Update, Delete) operations on these resources.
> - REST is simpler and more flexible compared to SOAP and is often favored for simpler applications or those that require high scalability and performance.
>
> In summary, the main differences between SOAP and REST web services lie in their architectural styles, message formats, communication protocols, and security features. SOAP is more formal and structured, while REST is simpler and more flexible.

---

**b) PHP is a weakly typed language, explain what this statement means as regards to PHP variables.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> In PHP, variables are weakly typed, which means that the type of a variable is not explicitly declared and can change dynamically based on the value assigned to it. This flexibility allows variables to hold values of different types throughout the execution of a script.
>
> For example, consider the following PHP code:
>
> ```php
> $var = "Hello";
> echo $var; // Outputs: Hello
>
> $var = 10;
> echo $var; // Outputs: 10
> ```
>
> In this code, the variable `$var` is first assigned a string value "Hello", and