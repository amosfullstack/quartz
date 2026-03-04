
# CP311 - Internet Programming and Applications II
## Examination Answers

---

## QUESTION THREE

**a. HTTP is a stateless protocol. Explain.**
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> HTTP is a stateless protocol because it does not maintain any state or information between successive requests and responses.
>
> Each request sent to the server is considered independent of the previous requests, and the server treats each request as a new and separate transaction. As a result, HTTP does not remember any previous transactions or user interactions, and it cannot maintain any information about the client or its context.

**b. Explain the two ways to make HTTP a stateful protocol.**
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> There are two ways to make HTTP a stateful protocol: using cookies and sessions.
>
> **Cookies:** A cookie is a small piece of data that is stored on the client-side by the server. When a client sends a request to the server, it can include the cookie in the request header. The server can use the information stored in the cookie to maintain state between requests. For example, a website can use a cookie to remember a user's login information so that the user does not have to log in again for each subsequent request.
>
> **Sessions:** A session is a mechanism for maintaining state between requests on the server-side. When a client initiates a session, the server generates a unique identifier, which is stored as a cookie on the client-side. The server uses this identifier to associate the client with a specific session on the server-side, where it can store information about the client's state.

**c. Explain the differences between Simple Object Access Protocol (SOAP) and Representational State Transfer (REST) web services.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> SOAP and REST are two different web service architectures used for communicating between applications over the internet. The main differences between them are:
>
> - **Messaging format:** SOAP uses an XML-based messaging format, whereas REST typically uses JSON or XML.
> - **Service definition:** SOAP requires a specific service definition using Web Services Description Language (WSDL), whereas REST does not have a specific service definition.
> - **Transport protocol:** SOAP can use different transport protocols, including HTTP, SMTP, and TCP, whereas REST typically uses HTTP.
> - **Statelessness:** SOAP is a stateful protocol, whereas REST is a stateless protocol.
> - **Flexibility:** REST is more flexible than SOAP, as it allows clients to interact with the server in a variety of ways, including GET, POST, PUT, and DELETE, whereas SOAP only supports the POST method.

**d. PHP is "a weakly typed language". Explain what this statement means as regards to php variables.**
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> PHP is a weakly typed language, which means that the data type of a variable does not need to be explicitly defined. PHP can automatically determine the type of the variable based on its value. For example, a variable that contains the value "123" can be treated as an integer or a string depending on the context. This can sometimes lead to unexpected behavior and errors, as the same variable can be interpreted differently in different parts of the program. To avoid these issues, it is important to use proper type checking and data validation in PHP code.

---

## QUESTION FOUR

**You have been hired as a front end developer at one of the E-Commerce company. The first day of your work at the company you realize that company's website is not okay. You decided to use bootstrap framework to revamp the website to make it more attractive and user friendly. Among the features of the bootstrap you have decided to use are carousel and pagination. You have decided to divide the contents of the website into five pages ie. page1.html, page2.html, page3.html, page4.html and page5.html. Among the images that describe the company are image1.jpg, image2.jpg, image3.jpg, image4.jpg and image5.jpg. You thought it will be better if the images will be in a slide show. In your design show how you will use bootstrap carousel and pagination to create a slide show of the mentioned images and pagination of the mentioned pages respectively. Hint: use carousel-indicator class to show the captions of each slide, carousel-inner class to add slides to the carousel, carousel-control-prev and carousel-control-next class to allow the user to go back and forward between the slides.**
*(15 Marks)*

> [!Tip]- Answer (Click to show)
> ```html
> <!DOCTYPE html>
> <html>
> <head>
>     <title>My E-commerce website</title>
>     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
>     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
>     <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
>     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
> </head>
> <body>
> 
> <!-- Bootstrap Carousel -->
> <div id="myCarousel" class="carousel slide" data-ride="carousel">
>     <!-- Indicators -->
>     <ul class="carousel-indicators">
>         <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
>         <li data-target="#myCarousel" data-slide-to="1"></li>
>         <li data-target="#myCarousel" data-slide-to="2"></li>
>         <li data-target="#myCarousel" data-slide-to="3"></li>
>         <li data-target="#myCarousel" data-slide-to="4"></li>
>     </ul>
>     
>     <!-- The slideshow -->
>     <div class="carousel-inner">
>         <div class="carousel-item active">
>             <img src="image1.jpg" alt="Image 1">
>         </div>
>         <div class="carousel-item">
>             <img src="image2.jpg" alt="Image 2">
>         </div>
>         <div class="carousel-item">
>             <img src="image3.jpg" alt="Image 3">
>         </div>
>         <div class="carousel-item">
>             <img src="image4.jpg" alt="Image 4">
>         </div>
>         <div class="carousel-item">
>             <img src="image5.jpg" alt="Image 5">
>         </div>
>     </div>
>     
>     <!-- Left and right controls -->
>     <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
>         <span class="carousel-control-prev-icon"></span>
>     </a>
>     <a class="carousel-control-next" href="#myCarousel" data-slide="next">
>         <span class="carousel-control-next-icon"></span>
>     </a>
> </div>
> 
> <!-- Bootstrap Pagination -->
> <nav aria-label="Page navigation example">
>     <ul class="pagination justify-content-center">
>         <li class="page-item active"><a class="page-link" href="page1.html">Page 1</a></li>
>         <li class="page-item"><a class="page-link" href="page2.html">Page 2</a></li>
>         <li class="page-item"><a class="page-link" href="page3.html">Page 3</a></li>
>         <li class="page-item"><a class="page-link" href="page4.html">Page 4</a></li>
>         <li class="page-item"><a class="page-link" href="page5.html">Page 5</a></li>
>     </ul>
> </nav>
> 
> </body>
> </html>
> ```

---

## QUESTION FIVE

**a. Create an Ajax-based product catalog that obtains its data from JSON files located on the server. The data should be separated into four JSON files. The first file should be a summary file, containing a list of products. Each product should have a title, an image filename for a thumbnail image and a price. The second file should contain a list of descriptions for each product. The third file should contain a list of filenames for the full-size product images. The last file should contain a list of the thumbnail image file names. Each item in a catalogue should have a unique ID that should be included with the entries for that product in every file. Next, create an Ajax-enabled web page that displays the product information in a table. The catalog should initially display a list of product names with their associated thumbnail images and prices. When the mouse hovers over a thumbnail image, the larger product image should be displayed. When the user moves the mouse away from that image, the original thumbnail should be redisplayed. You should provide a button that the user can click to display the product description.**
*(7 Marks)*

> [!Tip]- Answer (Click to show)
> **Step 1: Create the JSON files**
>
> Create four JSON files, one for the product summary, one for the product description, one for the filenames of the full-size product images, and one for the thumbnail image filenames. Each item in the catalog should have a unique ID that should be included with the entries for that product in every file.
>
> **Summary.json**
> ```json
> {
>     "products": [
>         {
>             "id": "1",
>             "title": "Product 1",
>             "image": "thumbnail1.jpg",
>             "price": "$100"
>         },
>         {
>             "id": "2",
>             "title": "Product 2",
>             "image": "thumbnail2.jpg",
>             "price": "$200"
>         }
>     ]
> }
> ```
>
> **Descriptions.json**
> ```json
> {
>     "descriptions": [
>         {
>             "id": "1",
>             "description": "Description for product 1"
>         },
>         {
>             "id": "2",
>             "description": "Description for product 2"
>         }
>     ]
> }
> ```
>
> **FullSizeImages.json**
> ```json
> {
>     "images": [
>         {
>             "id": "1",
>             "image": "product1.jpg"
>         },
>         {
>             "id": "2",
>             "image": "product2.jpg"
>         }
>     ]
> }
> ```
>
> **ThumbnailImages.json**
> ```json
> {
>     "images": [
>         {
>             "id": "1",
>             "image": "thumbnail1.jpg"
>         },
>         {
>             "id": "2",
>             "image": "thumbnail2.jpg"
>         }
>     ]
> }
> ```
>
> **Step 2: Create the HTML/CSS layout**
>
> Create an HTML/CSS layout for the product catalog. The layout should include a table to display the product information, such as the product name, thumbnail image, and price.
>
> ```html
> <table id="product-table">
>     <thead>
>         <tr>
>             <th>Product Name</th>
>             <th>Thumbnail Image</th>
>             <th>Price</th>
>         </tr>
>     </thead>
>     <tbody id="product-list">
>         <!-- Product data will be loaded dynamically -->
>     </tbody>
> </table>
> ```
>
> **Step 3: Write the JavaScript code**
>
> Write the JavaScript code that will retrieve the data from the JSON files and populate the HTML table. Use AJAX to retrieve the data asynchronously from the server.
>
> ```javascript
> $(document).ready(function() {
>     // Load the summary JSON file
>     $.getJSON("Summary.json", function(summaryData) {
>         // Load the descriptions JSON file
>         $.getJSON("Descriptions.json", function(descData) {
>             // Load the full-size images JSON file
>             $.getJSON("FullSizeImages.json", function(fullSizeData) {
>                 // Load the thumbnail images JSON file
>                 $.getJSON("ThumbnailImages.json", function(thumbnailData) {
>                     // Loop through each product in the summary data
>                     $.each(summaryData.products, function(index, product) {
>                         // Get the corresponding description for this product
>                         var desc = descData.descriptions.find(function(desc) {
>                             return desc.id === product.id;
>                         }).description;
>                         
>                         // Get the corresponding full-size image for this product
>                         var fullSizeImage = fullSizeData.images.find(function(image) {
>                             return image.id === product.id;
>                         }).image;
>                         
>                         // Get the corresponding thumbnail image for this product
>                         var thumbnailImage = thumbnailData.images.find(function(image) {
>                             return image.id === product.id;
>                         }).image;
>                         
>                         // Create a new row for this product and add it to the table
>                         var row = $("<tr></tr>");
>                         row.append($("<td>" + product.title + "</td>"));
>                         row.append($("<td><img class='thumbnail' src='" + thumbnailImage + "' data-full-size='" + fullSizeImage + "'></td>"));
>                         row.append($("<td>" + product.price + "</td>"));
>                         $("#product-list").append(row);
>                     });
>                     
>                     // Add a hover event listener to the thumbnail images
>                     $(".thumbnail").hover(
>                         function() {
>                             // Show the full-size image
>                             var fullSizeImage = $(this).attr("data-full-size");
>                             $(this).attr("src", fullSizeImage);
>                         },
>                         function() {
>                             // Show the thumbnail image again
>                             var thumbnailImage = $(this).attr("src");
>                             $(this).attr("src", thumbnailImage);
>                         }
>                     );
>                     
>                     // Add a click event listener to the rows
>                     $("tr").click(function() {
>                         // Get the product ID from the row
>                         var id = $(this).find("td:first").text();
>                         // Show the product description
>                         var desc = descData.descriptions.find(function(desc) {
>                             return desc.id === id;
>                         }).description;
>                         alert(desc);
>                     });
>                 });
>             });
>         });
>     });
> });
> ```

**b. Write a PHP script that obtains a URL and its description from a user through html form and stores the information into a database using MySQL. Use URL and URLtable as the name of the database and table respectively. The first field of the table should contain an actual URL, and the second, which is named Description, should contain a description of the URL. Use www.udom.ac.tz as the first URL, and input UDOM as its description. The second URL should be www.ratiba.udom.ac.tz, and the description should be UDOM Time Table System. The third URL should be www.civeclassroom.udom.ac.tz, and its description should be CIVE digital classroom. The fourth URL should be www.civeipt.udom.ac.tz, and its description should be CIVE Industrial Practical Training. After each new URL is submitted, print the contents of the database in a table format. Use server side validation to make sure that the fields for URL and Description should accept empty values and should not contain spaces before and at the end.**
*(8 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> // Connect to the MySQL database
> $servername = "localhost";
> $username = "username";
> $password = "password";
> $dbname = "URL";
> 
> $conn = new mysqli($servername, $username, $password, $dbname);
> 
> // Check connection
> if ($conn->connect_error) {
>     die("Connection failed: " . $conn->connect_error);
> }
> 
> // Handle form submission
> if ($_SERVER["REQUEST_METHOD"] == "POST") {
>     // Get the URL and description from the form
>     $url = test_input($_POST["url"]);
>     $description = test_input($_POST["description"]);
>     
>     // Validate the input
>     if (empty($url) || empty($description)) {
>         echo "Both URL and description are required.";
>     } elseif (preg_match('/^\s+|\s+$/', $url) || preg_match('/^\s+|\s+$/', $description)) {
>         echo "URL and description should not contain spaces before and at the end.";
>     } else {
>         // Insert the URL and description into the database
>         $sql = "INSERT INTO URLtable (url, description) VALUES ('$url', '$description')";
>         if ($conn->query($sql) === TRUE) {
>             echo "New record created successfully";
>         } else {
>             echo "Error: " . $sql . "<br>" . $conn->error;
>         }
>     }
> }
> 
> // Function to sanitize and validate input
> function test_input($data) {
>     $data = trim($data);
>     $data = stripslashes($data);
>     $data = htmlspecialchars($data);
>     return $data;
> }
> 
> // Print the contents of the database in a table format
> $sql = "SELECT * FROM URLtable";
> $result = $conn->query($sql);
> 
> if ($result->num_rows > 0) {
>     echo "<table><tr><th>URL</th><th>Description</th></tr>";
>     while ($row = $result->fetch_assoc()) {
>         echo "<tr><td>" . $row["url"] . "</td><td>" . $row["description"] . "</td></tr>";
>     }
>     echo "</table>";
> } else {
>     echo "No results";
> }
> 
> $conn->close();
> ?>
> ```
>
> ```html
> <!DOCTYPE html>
> <html>
> <head>
>     <title>URL Input Form</title>
> </head>
> <body>
>     <h2>Enter URL and Description</h2>
>     <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
>         URL: <input type="text" name="url"><br><br>
>         Description: <input type="text" name="description"><br><br>
>         <input type="submit" name="submit" value="Submit">
>     </form>
> </body>
> </html>
> ```

---

## QUESTION SIX

**a. XML plays an important role in the current world of web development. It is completely beneficial for those who want to use web technology to distribute information across the web.**

**i. Create a web service in xml format which contain information of the students such as: Students first name, last name, RegNo, Age, Gender, Courses, and Program.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> Here is an example of a web service in XML format that contains information of students:
>
> ```xml
> <?xml version="1.0" encoding="UTF-8"?>
> <students>
>     <student>
>         <firstname>John</firstname>
>         <lastname>Doe</lastname>
>         <regno>123456</regno>
>         <age>20</age>
>         <gender>Male</gender>
>         <courses>
>             <course>Math</course>
>             <course>Science</course>
>             <course>History</course>
>         </courses>
>         <program>Bachelor of Science</program>
>     </student>
> </students>
> ```

**ii. Using PHP write a script that will read the XML web service in part (i) and display the results in a web browser in JSON format.**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> Here is an example of a PHP script that reads the XML web service from part (i) and displays the results in JSON format:
>
> ```php
> <?php
> $xml = simplexml_load_file('students.xml');
> $json = json_encode($xml);
> echo $json;
> ?>
> ```

**b. Suppose that there is a web service named adventure.php, located on your web server in the same directory as your code. This service outputs XML data describing a situation and options a player can pick (you can choose your own adventure style game). In this problem you will use Ajax to contact the web service (using a GET request), examine its XML data, and display the questions and options in the game. The XML data returned by the web service consists of an overall document element called adventure that contains a situation tag, an answers tag and an end tag. The answers tag contains a series of one or more answer elements inside it. The format of the XML matches the following.**


```xml
 <adventure>
     <situation>The dragon is looking at you</situation>
     <answers>
         <answer>run screaming</answer>
         <answer>draw your sword</answer>
        <answer>be very polite</answer>
        <answer>sneeze</answer>
     </answers>
     <end reason="ooh! The dragon accidentally stepped on you" />
 </adventure>
```

**Assume the code you are writing will go into adventure.js, linked from the following script.**

```html
 <body>
    <h1>Choose your own adventure</h1>
    <div id="container">
        <fieldset id="situation">
            <p id="situationparagraph"></p>
        </fieldset>
       <fieldset id="answer"></fieldset>
    </div>
</body>

```

**When the page loads send an AJAX request to the adventure.php service and pass it a parameter named situation with the value begin. Insert the questions you get back into the situationparagraph. Add a button to the answer fieldset for each answer tag you receive. Set these buttons so that if they are clicked your page will send an Ajax request to adventure.php with the situation parameter set to the text on the button. This request will return the same sort of data which should be dealt with in the same way. The buttons displayed should only ever be the current options, no old options should show. If instead of receiving XML back that contains a question tag you receive XML with an end tag, place the text of the reason attribute of the end tag in the situationparagraph and make sure no buttons are showing.**
*(9 Marks)*

> [!Tip]- Answer (Click to show)
> Here is an example of an AJAX script that contacts the adventure.php web service, examines its XML data, and displays the questions and options in the game:
>
> ```javascript
> $(document).ready(function() {
>     $.ajax({
>         type: "GET",
>         url: "adventure.php",
>         data: "situation=begin",
>         dataType: "xml",
>         success: function(xml) {
>             // find the situation tag and put its text into the paragraph
>             var situationText = $(xml).find('situation').text();
>             $("#situationparagraph").text(situationText);
>             
>             // find the answers and create a button for each one
>             var answers = $(xml).find('answers answer');
>             answers.each(function() {
>                 var answerText = $(this).text();
>                 var button = $('<button>').text(answerText);
>                 $("#answer").append(button);
>             });
>             
>             // when a button is clicked, send another AJAX request with the situation parameter set to the button text
>             $("#answer").on('click', 'button', function() {
>                 var buttonValue = $(this).text();
>                 $.ajax({
>                     type: "GET",
>                     url: "adventure.php",
>                     data: "situation=" + buttonValue,
>                     dataType: "xml",
>                     success: function(xml) {
>                         var situationText = $(xml).find('situation').text();
>                         $("#situationparagraph").text(situationText);
>                         
>                         // remove old buttons
>                         $("#answer").empty();
>                         
>                         // check if the XML has an end tag, and if it does, display the reason attribute in the paragraph
>                         var end = $(xml).find('end');
>                         if (end.length > 0) {
>                             var reasonText = end.attr('reason');
>                             $("#situationparagraph").text(reasonText);
>                         } else {
>                             // find the answers and create a button for each one
>                             var answers = $(xml).find('answers answer');
>                             answers.each(function() {
>                                 var answerText = $(this).text();
>                                 var button = $('<button>').text(answerText);
>                                 $("#answer").append(button);
>                             });
>                         }
>                     }
>                 });
>             });
>         }
>     });
> });
> ```

---

## QUESTION SEVEN

**The University of Dodoma through its College of Informatics and Virtual Education (CIVE) has decided to create a web system to manage the whole process of Industrial Practical Training (IPT). The system was developed using PHP and MySQL database. The system has two parts, which are source codes and database. The database part is hosted at the server with IP Address 192.168.10.10 and the source code is hosted at the server with IP Address 192.168.10.20.**
    
**After the system has been deployed it was observed that the performance was poor as the system loads very slowly especially when the information are retrieved from the server. It was observed that the problem was due to huge amount of data that are loaded from the server. As an expert in web development, you have been consulted to give your advice. In your advice you suggested AJAX technology to be used to load data from the server to the client side so as to improve performance. Assume you want to load the following information from the table student (FName, SName, Program, Gender and RegNo). Write a script hosted at the source code server to show how you connect to the database, load data from the server using AJAX and display to the client in a table format. Use JQuery methods to send the AJAX requests. Use the following credentials to access the database server: Udom_IPT as a database name, Password: 123_abc, username: udom_cive.**
*(15 Marks)*

> [!Tip]- Answer (Click to show)
> To improve the performance of the web system for managing Industrial Practical Training (IPT), we can use AJAX to load data from the server asynchronously. Here is a sample script to connect to the database, load data using AJAX and display it in a table format:
>
> **Client-side HTML with jQuery:**
> ```html
> <!-- Include the jQuery library -->
> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
> 
> <script>
> // Define the URL of the PHP script on the server that will handle the AJAX request
> var url = "http://192.168.10.20/load_data.php";
> 
> // Define the parameters to send to the server (none in this case)
> var params = {};
> 
> // Send the AJAX request to the server and handle the response
> $.ajax({
>     url: url,
>     type: "POST",
>     data: params,
>     dataType: "json",
>     success: function(data) {
>         // Display the data in a table
>         var table = "<table border='1'>";
>         table += "<tr><th>First Name</th><th>Last Name</th><th>Program</th><th>Gender</th><th>Registration Number</th></tr>";
>         $.each(data, function(i, item) {
>             table += "<tr>";
>             table += "<td>" + item.FName + "</td>";
>             table += "<td>" + item.SName + "</td>";
>             table += "<td>" + item.Program + "</td>";
>             table += "<td>" + item.Gender + "</td>";
>             table += "<td>" + item.RegNo + "</td>";
>             table += "</tr>";
>         });
>         table += "</table>";
>         $("#data").html(table);
>     },
>     error: function(jqXHR, textStatus, errorThrown) {
>         alert("Error loading data: " + textStatus + " " + errorThrown);
>     }
> });
> </script>
> 
> <!-- Display the data in a table -->
> <div id="data"></div>
> ```
>
> This script sends an AJAX request to a PHP script called load_data.php hosted on the source code server at IP address 192.168.10.20. The PHP script connects to the MySQL database using the credentials provided and retrieves the data from the student table. It then encodes the data as JSON and sends it back to the client. The client-side script receives the JSON data and uses jQuery to dynamically generate an HTML table and display the data in it.
>
> **Server-side Script: load_data.php**
> ```php
> <?php
> // Database connection details
> $db_host = "192.168.10.10";
> $db_name = "Udom_IPT";
> $db_user = "udom_cive";
> $db_pass = "123_abc";
> 
> // Connect to the database
> $conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
> 
> if ($conn->connect_error) {
>     die("Connection failed: " . $conn->connect_error);
> }
> 
> // Query the database to retrieve the data
> $result = $conn->query("SELECT FName, SName, Program, Gender, RegNo FROM student");
> 
> $data = array();
> while ($row = $result->fetch_assoc()) {
>     $data[] = $row;
> }
> 
> echo json_encode($data);
> 
> $conn->close();
> ?>
> ```
>
> This script connects to the MySQL database using the provided credentials, queries the student table to retrieve the data, and encodes the data as JSON before sending it back to the client. Note that this script should be hosted on the same server as the MySQL database, which has an IP address of 192.168.10.10 in this example.

---

*End of Examination Answers*