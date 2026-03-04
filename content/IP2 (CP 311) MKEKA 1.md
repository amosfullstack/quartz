
# CP311 - Internet Programming and Applications II
## Examination Answers

---

## QUESTION ONE

**Write PHP functions to accomplish each of the following tasks. Assume MySQL database server has been installed on the local machine and the improved version of php has been used.**

**i. Connect to the server with username root and password cive.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
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
> ```

**ii. Select a database called CP311 to be used for queries.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> function selectDB($conn) {
>     $dbname = "CP311";
>     $conn->select_db($dbname);
> }
> ```

**iii. Execute a query to select all rows and columns from the table called users.**
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> function selectAllUsers($conn) {
>     $sql = "SELECT * FROM users";
>     $result = $conn->query($sql);
>     return $result;
> }
> ```

**iv. Get the next row from a result set $results and assign to variable $row. Close the database connection.**
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> function getNextRow($result) {
>     $row = $result->fetch_assoc();
>     return $row;
> }
> 
> function closeConnection($conn) {
>     $conn->close();
> }
> ```
>
> *Note: Once you have selected the database, you can use the connection object to interact with the selected database, so you don't have to specify the database name for each query.*

---

## QUESTION TWO

**Root element real-estate will contain a sequence of sub-elements agencies, owners, properties and flats, all with an empty content.**

**i. Create an XML document for the above information**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> ```xml
> <?xml version="1.0" encoding="UTF-8"?>
> <real-estate>
>     <agencies></agencies>
>     <owners></owners>
>     <properties></properties>
>     <flats></flats>
> </real-estate>
> ```

**ii. Create an internal DTD for the XML document in (i). Ensure its validity.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> ```xml
> <?xml version="1.0" encoding="UTF-8"?>
> <!DOCTYPE real-estate [
>     <!ELEMENT real-estate (agencies, owners, properties, flats)>
>     <!ELEMENT agencies (EMPTY)>
>     <!ELEMENT owners (EMPTY)>
>     <!ELEMENT properties (EMPTY)>
>     <!ELEMENT flats (EMPTY)>
> ]>
> <real-estate>
>     <agencies></agencies>
>     <owners></owners>
>     <properties></properties>
>     <flats></flats>
> </real-estate>
> ```

**iii. Move the DTD in (ii) to an external file and validate the XML document again.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **External DTD file: real-estate.dtd**
> ```dtd
> <!ELEMENT real-estate (agencies, owners, properties, flats)>
> <!ELEMENT agencies (EMPTY)>
> <!ELEMENT owners (EMPTY)>
> <!ELEMENT properties (EMPTY)>
> <!ELEMENT flats (EMPTY)>
> ```
>
> **XML Document referencing external DTD:**
> ```xml
> <?xml version="1.0" encoding="UTF-8"?>
> <!DOCTYPE real-estate SYSTEM "real-estate.dtd">
> <real-estate>
>     <agencies></agencies>
>     <owners></owners>
>     <properties></properties>
>     <flats></flats>
> </real-estate>
> ```
>
> And then use an XML validator to validate the XML document again using the external DTD.

---

## QUESTION THREE

**Given the XML document below, define a DTD that validates Document 1.**
*(5 Marks)*

**Document 1:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<student>
    <firstName>Luca</firstName>
    <lastName>Rossi</lastName>
    <id>281283</id>
    <plan>
        <courses year="3">
            <course>
                <name>BSc.Computer Science</name>
                <shortName>BSc.CS</shortName>
                <record>
                    <grade>85</grade>
                    <date>13/06/2021</date>
                </record>
            </course>
            <course>
                <name>BSc.Business Information System</name>
                <shortName>BIS</shortName>
            </course>
        </courses>
    </plan>
</student>
```

> [!Tip]- Answer (Click to show)
> A DTD (Document Type Definition) is used to define the structure and elements of an XML document. Here is an example of a DTD that would validate the XML document above:
>
> ```dtd
> <!ELEMENT student (firstName, lastName, id, plan)>
> <!ELEMENT firstName (#PCDATA)>
> <!ELEMENT lastName (#PCDATA)>
> <!ELEMENT id (#PCDATA)>
> <!ELEMENT plan (courses)>
> <!ELEMENT courses (course+)>
> <!ATTLIST courses year CDATA #REQUIRED>
> <!ELEMENT course (name, shortName, record?)>
> <!ELEMENT name (#PCDATA)>
> <!ELEMENT shortName (#PCDATA)>
> <!ELEMENT record (grade, date)>
> <!ELEMENT grade (#PCDATA)>
> <!ELEMENT date (#PCDATA)>
> ```
>
> This DTD defines that the root element of the XML document must be "student", and it must contain exactly one "firstName", one "lastName", one "id" and one "plan" element. The "plan" element must contain exactly one "courses" element, which in turn must contain one or more "course" elements. Each "course" element must contain exactly one "name" and one "shortName" element, and optionally one "record" element. The "record" element must contain one "grade" and one "date" element.
>
> The attribute "year" of the "courses" element is also defined as CDATA and is required.

---

## QUESTION FOUR

**Explain the Bootstrap modal code below:**
*(5 Marks)*

```html
<div class="modal fade" id="ModalExample" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">See more of this awesome website by logging in</h4>
            </div>
            <div class="modal-body">
                <p class="lead text-xs-center">Create account or Sign in</p>
            </div>
            <div class="modal-footer">
                <!-- Empty footer -->
            </div>
        </div>
    </div>
</div>
```

> [!Tip]- Answer (Click to show)
> This code is an example of a Bootstrap modal. The modal is defined using a div element with an ID of "ModalExample" and a class of "modal fade". Within the modal, there are several other div elements for the modal's header, body, and footer. The header contains an h4 element with a class of "modal-title" and text "See more of this awesome website by logging in". The body contains a lead text-xs-center and two links: Create account and Sign in. The footer is empty in this case. To trigger this modal, you would need to create a button or a link that uses the data-toggle attribute set to "modal" and the data-target attribute set to "#ModalExample".

---

## QUESTION FIVE

**Write a PHP script to print configuration info and version.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> phpversion();
> phpinfo();
> ?>
> ```

---

## QUESTION SIX

**Explain the differences between echo and print in PHP.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> echo and print are both used to output data in PHP, but there are some subtle differences between the two:
>
> - echo is slightly faster than print because it doesn't return a value.
> - echo can take multiple parameters separated by commas, while print can only take one argument.
> - print always returns 1, so it can be used in expressions while echo cannot.

---

## QUESTION SEVEN

**Explain the difference between include() and require() in PHP.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> include() and require() are both used to include a file in a PHP script, but there are some differences between the two:
>
> - require generates a fatal error and stops the script execution if the file is not found, whereas include generates a warning and continues the script execution.
> - require_once and include_once will check if the file has already been included, and if so, not include (require) it again.

---

## QUESTION EIGHT

**What is the reason for writing <!DOCTYPE HTML> at the beginning of an HTML page?**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> The <!DOCTYPE> declaration is used to inform the web browser that the document is an HTML document and which version of HTML is being used. It is important to include this declaration at the beginning of an HTML page so that the browser knows how to properly interpret and display the content of the page. Without the <!DOCTYPE> declaration, the browser may not be able to properly display the page or may display it in an unexpected way.

---

## QUESTION NINE

**Which HTML tag is used to produce a horizontal line?**
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> `<hr>`

---

## QUESTION TEN

**HTTP is a stateless protocol. Explain.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> HTTP (Hypertext Transfer Protocol) is a stateless protocol, which means that it does not maintain any information or state about previous interactions between the client and server. Each request from a client to a server is treated as an independent transaction that is unrelated to any previous request.

---

## QUESTION ELEVEN

**Explain two ways of introducing state in the HTTP protocol.**
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> There are two main ways of introducing state into the HTTP protocol: cookies and sessions.
>
> **Cookies:** Cookies are small text files that are stored on the client's computer by the server. They are sent back to the server with every request, allowing the server to maintain information about the client's state. Cookies can be used to store information such as user preferences, login status, and shopping cart contents.
>
> **Sessions:** A session is a way for the server to maintain state about a particular client over multiple requests. The server assigns a unique session ID to each client, which is passed back to the server with each request. The server then uses this session ID to look up the client's state in a database or memory. This allows the server to maintain information about the client's state, such as login status and shopping cart contents.

---

## QUESTION TWELVE

**Explain the difference between unset() and session_destroy() in PHP.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> - **unset()** is used to remove specific variables from a session. Example: `unset($_SESSION['username']);`
> - **session_destroy()** is used to completely destroy the current session and remove all session data. Example: `session_destroy();`

---

## QUESTION THIRTEEN

**Explain how to use the setcookie() function correctly in PHP with an example.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> The setcookie() function is used to set a cookie on the client's browser. It takes several parameters, including the name of the cookie, the value of the cookie, and the expiration time of the cookie. Here is an example of how to use the setcookie() function correctly in PHP:
>
> ```php
> setcookie('username', 'JohnDoe', time() + (86400 * 30), "/");
> ```
>
> Here's the breakdown of the parameters passed to the setcookie() function:
> - **'username'**: the name of the cookie
> - **'JohnDoe'**: the value of the cookie
> - **time() + (86400 * 30)**: the expiration time of the cookie, in this case, it will expire in 30 days
> - **'/'**: the path on the server in which the cookie will be available, in this case, the entire domain

---

## QUESTION FOURTEEN

**Write PHP code to display all users sorted by firstname in descending order.**
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> $users = array(
>     array("firstname" => "John", "lastname" => "Doe"),
>     array("firstname" => "Jane", "lastname" => "Smith"),
>     array("firstname" => "Bob", "lastname" => "Johnson")
> );
> 
> // Sort the array by firstname in descending order
> usort($users, function($a, $b) {
>     return strcmp($b['firstname'], $a['firstname']);
> });
> 
> // Print the sorted array
> foreach ($users as $user) {
>     echo $user['firstname'] . ' ' . $user['lastname'] . '<br>';
> }
> ?>
> ```

---

## QUESTION FIFTEEN

**Write PHP code to print all users whose last name starts with the letter "A".**
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> $users = array(
>     array("firstname" => "John", "lastname" => "Doe"),
>     array("firstname" => "Jane", "lastname" => "Smith"),
>     array("firstname" => "Bob", "lastname" => "Adams"),
>     array("firstname" => "Mike", "lastname" => "Anderson")
> );
> 
> foreach ($users as $user) {
>     if (substr($user['lastname'], 0, 1) == 'A') {
>         echo $user['firstname'] . ' ' . $user['lastname'] . '<br>';
>     }
> }
> ?>
> ```

---

## QUESTION SIXTEEN

**Write a JavaScript function to validate an email address.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```javascript
> function validateEmail() {
>     var email = document.myForm.Email.value;
>     var atIndex = email.indexOf("@");
>     var dotIndex = email.lastIndexOf(".");
>     
>     if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
>         return false;
>     }
>     return true;
> }
> ```

---

## QUESTION SEVENTEEN

**Write a JavaScript function to validate a password with the following requirements:**
- At least 8 characters long
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character (!@#$%^&*)
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> ```javascript
> function validatePassword(password) {
>     // Check password length
>     if (password.length < 8) {
>         return "Password must be at least 8 characters long.";
>     }
>     
>     // Check for uppercase letter
>     let hasUpperCase = false;
>     for (let i = 0; i < password.length; i++) {
>         if (password[i] === password[i].toUpperCase() && isNaN(password[i])) {
>             hasUpperCase = true;
>             break;
>         }
>     }
>     if (!hasUpperCase) {
>         return "Password must contain at least one uppercase letter.";
>     }
>     
>     // Check for lowercase letter
>     let hasLowerCase = false;
>     for (let i = 0; i < password.length; i++) {
>         if (password[i] === password[i].toLowerCase() && isNaN(password[i])) {
>             hasLowerCase = true;
>             break;
>         }
>     }
>     if (!hasLowerCase) {
>         return "Password must contain at least one lowercase letter.";
>     }
>     
>     // Check for number
>     let hasNumber = false;
>     for (let i = 0; i < password.length; i++) {
>         if (!isNaN(password[i])) {
>             hasNumber = true;
>             break;
>         }
>     }
>     if (!hasNumber) {
>         return "Password must contain at least one number.";
>     }
>     
>     // Check for special character
>     let hasSpecialCharacter = false;
>     const specialCharacters = "!@#$%^&*";
>     for (let i = 0; i < password.length; i++) {
>         if (specialCharacters.indexOf(password[i]) !== -1) {
>             hasSpecialCharacter = true;
>             break;
>         }
>     }
>     if (!hasSpecialCharacter) {
>         return "Password must contain at least one special character.";
>     }
>     
>     // If all checks pass, return "valid"
>     return "valid";
> }
> ```

---

## QUESTION EIGHTEEN

**Write PHP code to count page visits using sessions.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> session_start();
> 
> if (!isset($_SESSION['count'])) {
>     $_SESSION['count'] = 1;
> } else {
>     $_SESSION['count']++;
> }
> ?>
> <html>
> <head>
>     <title>Count Visits</title>
> </head>
> <body>
>     <h2>You have visited this page <?php echo($_SESSION['count']); ?> times in this session</h2>
> </body>
> </html>
> ```

---

## QUESTION NINETEEN

**Write PHP code to count page visits using cookies.**
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> if (!isset($_COOKIE['count'])) {
>     echo "Welcome! This is the first time you have viewed this page.";
>     $cookie = 1;
>     setcookie("count", $cookie);
> } else {
>     $cookie = ++$_COOKIE['count'];
>     setcookie("count", $cookie);
>     echo "You have viewed this page " . $_COOKIE['count'] . " times.";
> }
> ?>
> <html>
> <head>
>     <title>PHP Code to Count Number of Visitors Using Cookies</title>
> </head>
> <body>
> </body>
> </html>
> ```

---

## QUESTION TWENTY

**Which HTML tag is used to insert the copyright symbol?**
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> The HTML entity code for the copyright symbol is `&copy;`. You can insert it into your HTML document by using the entity code within an HTML tag, such as a `<p>` or `<span>` tag:
>
> ```html
> <p>Copyright &copy; 2022 My Website</p>
> ```

---

## QUESTION TWENTY-ONE

**Explain the difference between POST method and GET method in HTML forms.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> - The **GET** method is used to request data from a server. GET requests can be cached and bookmarked. The data sent in a GET request is visible in the URL and can be cached, making it less secure.
> - The **POST** method is used to submit data to a server for further processing. POST requests cannot be cached or bookmarked. The data is sent in the request body, making it more secure than GET.
> - GET requests are less secure than POST requests because the data sent in a GET request is visible in the URL and can be cached.

---

## QUESTION TWENTY-TWO

**Explain the difference between $_FILES['user_file']['name'] and $_FILES['user_file']['tmp_name'] in PHP file uploads.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> - **$_FILES['user_file']['name']** refers to the original name of the file on the client's computer. For example, if the user selects a file named "image.jpg" to upload, $_FILES['user_file']['name'] will contain the value "image.jpg".
> - **$_FILES['user_file']['tmp_name']** refers to the temporary location of the file on the server after it has been uploaded. This is the location where the file is stored temporarily while it is being processed or moved to a permanent location.

---

## QUESTION TWENTY-THREE

**How can we capture an error during uploading of files in PHP?**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> In PHP, you can use the $_FILES global array to check for errors during file uploads. The $_FILES array contains an "error" key for each file being uploaded, which stores a numerical code representing the status of the upload. The following codes are the possible error codes:
>
> - **UPLOAD_ERR_OK (value 0)** - There is no error, the file uploaded with success.
> - **UPLOAD_ERR_INI_SIZE (value 1)** - The uploaded file exceeds the upload_max_filesize directive in php.ini.
> - **UPLOAD_ERR_FORM_SIZE (value 2)** - The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form.
> - **UPLOAD_ERR_PARTIAL (value 3)** - The uploaded file was only partially uploaded.
> - **UPLOAD_ERR_NO_FILE (value 4)** - No file was uploaded.
> - **UPLOAD_ERR_NO_TMP_DIR (value 6)** - Missing a temporary folder.
> - **UPLOAD_ERR_CANT_WRITE (value 7)** - Failed to write file to disk.
> - **UPLOAD_ERR_EXTENSION (value 8)** - A PHP extension stopped the file upload.
>
> You can check for these errors by using the error key of the $_FILES array, for example:
>
> ```php
> if ($_FILES['file']['error'] > 0) {
>     echo 'Error: ' . $_FILES['file']['error'] . '<br>';
> } else {
>     echo 'File uploaded successfully.';
> }
> ```

---

## QUESTION TWENTY-FOUR

**How can we change the maximum size of a file to be uploaded in PHP?**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> In PHP, you can change the maximum file size for uploads by editing the upload_max_filesize and post_max_size settings in your server's php.ini file.
>
> - **upload_max_filesize** is the maximum size of a single uploaded file.
> - **post_max_size** is the maximum size of all POST data that can be submitted in a single request. This value should be larger than upload_max_filesize because it also includes the size of other POST data, such as text fields.
>
> For example, to set the maximum upload file size to 8MB, you would set the following in your php.ini:
>
> ```
> upload_max_filesize = 8M
> post_max_size = 8M
> ```

---

## QUESTION TWENTY-FIVE

**Write a JavaScript function to validate that a field has exactly 24 numbers.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```javascript
> function validateNumberLength() {
>     var NIN = document.myForm.nin.value;
>     
>     if (isNaN(NIN) || NIN.length !== 24) {
>         alert("Please enter exactly 24 numbers.");
>         // Alternative
>         // document.myForm.nin.innerHTML = "Enter exactly 24 numbers";
>         return false;
>     }
>     return true;
> }
> ```

---

## QUESTION TWENTY-SIX

**Write a PHP script to add two numbers using an HTML form.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <!DOCTYPE html>
> <html>
> <head>
>     <title>Addition</title>
> </head>
> <body>
>     <form method="post">
>         First Number: <input type="text" name="number1"><br><br>
>         Second Number: <input type="text" name="number2"><br><br>
>         <input type="submit" name="submit" value="Add">
>     </form>
>     
>     <?php
>     if (isset($_POST['submit'])) {
>         $number1 = $_POST['number1'];
>         $number2 = $_POST['number2'];
>         $result = $number1 + $number2;
>         echo "The answer will be: " . $result;
>     }
>     ?>
> </body>
> </html>
> ```

---

## QUESTION TWENTY-SEVEN

**Write PHP code to convert an array to a string.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> $array = array("Welcome", "to", "GeeksforGeeks", "A", "Computer", "Science", "Portal");
> $string = implode(" ", $array);
> echo $string;
> ?>
> ```

---

## QUESTION TWENTY-EIGHT

**Write PHP code to create and display a cookie.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> $cookie_name = "user";
> $cookie_value = "Hassan Robert";
> setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
> ?>
> <html>
> <body>
> <?php
> if(!isset($_COOKIE[$cookie_name])) {
>     echo "Cookie named " . $cookie_name . " is not set!";
> } else {
>     echo "Cookie " . $cookie_name . " is set!<br>";
>     echo "Value is: " . $_COOKIE[$cookie_name];
> }
> ?>
> </body>
> </html>
> ```

---

## QUESTION TWENTY-NINE

**Write PHP code to check if cookies are enabled.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> setcookie("test_cookie", "test", time() + 3600, "/");
> ?>
> <html>
> <body>
> <?php
> if(count($_COOKIE) > 0) {
>     echo "Cookies are enabled.";
> } else {
>     echo "Cookies are disabled.";
> }
> ?>
> </body>
> </html>
> ```

---

## QUESTION THIRTY

**Write PHP code to delete a cookie.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> setcookie("cookie_test", "", time() - 3600, "/");
> ?>
> <!DOCTYPE html>
> <html>
> <head>
>     <title>Delete Cookie</title>
> </head>
> <body>
> <?php
> echo "Cookie deleted";
> ?>
> </body>
> </html>
> ```

---

## QUESTION THIRTY-ONE

**Write PHP code to start a session and create session variables.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> session_start();
> ?>
> <!DOCTYPE html>
> <html>
> <head>
>     <title>Session Example</title>
> </head>
> <body>
> <?php
> // Create session variables
> $_SESSION["favcolor"] = "green";
> $_SESSION["favanimal"] = "cat";
> echo "Session variables are set";
> ?>
> </body>
> </html>
> ```

---

## QUESTION THIRTY-TWO

**Write PHP code to retrieve and display session variables.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> session_start();
> ?>
> <!DOCTYPE html>
> <html>
> <head>
>     <title>Get Session Variables</title>
> </head>
> <body>
> <?php
> echo "Favourite color is " . $_SESSION["favcolor"] . "<br>";
> echo "Favourite Animal is " . $_SESSION["favanimal"];
> ?>
> </body>
> </html>
> ```

---

## QUESTION THIRTY-THREE

**Write PHP code to destroy a session.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> session_start();
> ?>
> <!DOCTYPE html>
> <html>
> <head>
>     <title>Destroy Session</title>
> </head>
> <body>
> <?php
> session_unset();
> session_destroy();
> echo "session destroyed";
> ?>
> </body>
> </html>
> ```

---

## QUESTION THIRTY-FOUR

**What are conventional web applications?**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> Conventional web applications are web-based software programs that are accessed through a web browser, typically using the HTTP or HTTPS protocol. They are built using a combination of client-side technologies, such as HTML, CSS, and JavaScript, and server-side technologies, such as PHP, Ruby on Rails, or Java.

---

## QUESTION THIRTY-FIVE

**What is a rich user interface (UI)?**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> A rich user interface (UI) is a type of user interface that provides a visually pleasing and interactive experience for the user. It generally includes elements such as graphics, animations, and interactive buttons and forms. Examples of web applications with rich UI are many modern web apps like Gmail, Discord, etc.

---

## QUESTION THIRTY-SIX

**What are the issues of conventional web applications?**
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> The issues of conventional web applications include:
>
> - Interruption of user operation
> - Loss of operational context during refresh
> - No instant feedback to user activities
> - Constrained by HTML

---

## QUESTION THIRTY-SEVEN

**What are Rich Internet Applications (RIAs)?**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> Rich Internet Applications are web-based applications that have the features and functionality of traditional desktop applications. They are built using a combination of web technologies such as HTML, CSS, and JavaScript, as well as additional technologies like Adobe Flash, Java, or Silverlight. RIAs typically have a more interactive and responsive user interface than conventional web applications, and can provide a more seamless experience for the user. RIAs can run on a wide range of devices, including desktops, laptops, and mobile devices. Examples of Rich Internet Applications include video-streaming platforms, online games, and collaborative tools.

---

## QUESTION THIRTY-EIGHT

**List some Rich Internet Application (RIA) technologies.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> Rich Internet Application (RIA) Technologies include:
>
> - Apple
> - Macromedia Flash
> - Java WebStart
> - DHTML
> - DHTML with Hidden IFrame
> - AJAX

---

## QUESTION THIRTY-NINE

**What is AJAX and what does it stand for?**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **AJAX** stands for **Asynchronous JavaScript and XML**. It is a web development technique used for creating interactive web applications that can send and receive data from a server asynchronously without interfering with the display and behavior of the existing page.

---

## QUESTION FORTY

**List some real-life examples of AJAX applications.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> Real-Life Examples of AJAX Apps:
>
> - Google Maps: http://maps.google.com/
> - Google Suggest: http://www.google.com/webhp?complete=1&hl=en
> - Gmail: http://gmail.com/
> - Yahoo Maps: http://maps.yahoo.com/

---

## QUESTION FORTY-ONE

**List some usage cases for AJAX.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> Usage cases for AJAX:
>
> - Real-time server-side input form data validation
> - Auto-completion
> - Master detail operation
> - Advanced GUI widgets and controls
> - Refreshing data
> - Simulating server-side notification

---

## QUESTION FORTY-TWO

**List the technologies used in AJAX.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> Technologies Used In AJAX:
>
> - Document Object Model (DOM)
> - JavaScript
> - CSS
> - XMLHttpRequest

---

## QUESTION FORTY-THREE

**What is XMLHttpRequest (XHR)?**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> XMLHttpRequest (XHR) is a JavaScript object that allows developers to make HTTP requests from web browsers without reloading the entire page. It is commonly used to send and receive data in web applications.

---

## QUESTION FORTY-FOUR

**List and explain the XMLHttpRequest (XHR) methods.**
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **XMLHttpRequest (XHR) Methods:**
>
> - **open("HTTP method", "URL", syn/asyn)** - Assigns HTTP method, destination URL, and mode (synchronous or asynchronous)
> - **send(content)** - Sends request including string or DOM object data
> - **abort()** - Terminates current request
> - **getAllResponseHeaders()** - Returns headers (labels + values) as a string
> - **getResponseHeader("header")** - Returns value of a given header
> - **setRequestHeader("label","value")** - Sets Request Headers before sending

---

## QUESTION FORTY-FIVE

**List and explain the XMLHttpRequest properties.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> **XMLHttpRequest Properties:**
>
> - **onreadystatechange** - Set with a JavaScript event handler that fires at each state change
> - **readyState** - Current status of request:
>   - 0 = uninitialized (object contains no data)
>   - 1 = loading (object currently loading its data)
>   - 2 = loaded (object has finished loading its data)
>   - 3 = interactive (user may interact, some data has been returned)
>   - 4 = complete (object has finished initializing)
> - **status** - HTTP Status returned from server:
>   - 200 = OK
>   - 400 = Bad Request
>   - 401 = Unauthorized
>   - 404 = Not found
>   - 500 = Internal server error
> - **responseText** - String version of data returned from the server
> - **responseXML** - XML document of data returned from the server
> - **statusText** - Status text returned from server

---

## QUESTION FORTY-SIX

**List the steps of Ajax operation.**
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **Steps of Ajax operation:**
>
> 1. A client event occurs
> 2. An XMLHttpRequest object is created
> 3. The XMLHttpRequest object is configured
> 4. The XMLHttpRequest object makes an async request
> 5. The ValidateServlet returns an XML document containing the result
> 6. The XMLHttpRequest object calls the callback() function and processes the result
> 7. The HTML DOM is updated

---

## QUESTION FORTY-SEVEN

**Write a PHP function to connect to a MySQL database using MySQLi.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> function connectToDatabase() {
>     $servername = "localhost";
>     $username = "username";
>     $password = "password";
>     
>     // Create connection
>     $conn = new mysqli($servername, $username, $password);
>     
>     // Check connection
>     if ($conn->connect_error) {
>         die("Connection failed: " . $conn->connect_error);
>     }
>     
>     return $conn;
> }
> ?>
> ```

---

## QUESTION FORTY-EIGHT

**Write a PHP function to select a database.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> function selectDatabase($conn, $dbname) {
>     $conn->select_db($dbname);
> }
> ?>
> ```

---

## QUESTION FORTY-NINE

**Write PHP code to execute a query and fetch all results.**
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> function executeQuery($conn, $sql) {
>     $result = $conn->query($sql);
>     
>     if ($result->num_rows > 0) {
>         $data = [];
>         while($row = $result->fetch_assoc()) {
>             $data[] = $row;
>         }
>         return $data;
>     } else {
>         return [];
>     }
> }
> ?>
> ```

---

## QUESTION FIFTY

**Write PHP code to close a database connection.**
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

*End of Examination Answers*