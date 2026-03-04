
# CP311 - Internet Programming and Applications II
## Continuous Assessment Registration System

---

**Question: The University of Dodoma wants to modify the continuous assessment (CA) registration form so that it appears like the one shown in figure 1. The course instructor can use it to register CA for more than two students by clicking the add Row button to append the row. The appended row may be deleted by clicking the delete Row button. You are required to create a form using XHTML, ajax and PHP. The submit button should save the information on the ca result table in the database udom_sr.**

**Table structure:**
**Tbl student(student_id,test_one,test_two)**
**Tbl_ca_results(student_id,test_one,test_two)**
*(15 Marks)*

> [!Tip]- Answer (Click to show)
> Here's an example of how you can create a CA registration form using XHTML, AJAX, and PHP:
>
> **CA Registration Form (ca_registration_form.php):**
>
> ```html
> <!DOCTYPE html>
> <html>
> <head>
>     <title>Continuous Assessment Registration Form</title>
>     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
>     <script>
>         $(document).ready(function(){
>             $("#addRow").click(function(){
>                 $("#caTable").append('<tr><td><input type="text" name="student_id[]" /></td><td><input type="text" name="test_one[]" /></td><td><input type="text" name="test_two[]" /></td><td><button type="button" class="deleteRow">Delete Row</button></td></tr>');
>             });
>
>             $("#caTable").on("click", ".deleteRow", function(){
>                 $(this).closest("tr").remove();
>             });
>
>             $("#submitForm").click(function(){
>                 $.ajax({
>                     type: "POST",
>                     url: "save_ca_results.php",
>                     data: $("#caForm").serialize(),
>                     success: function(response){
>                         alert(response);
>                         location.reload(); // Reload the page after submitting
>                     }
>                 });
>             });
>         });
>     </script>
> </head>
> <body>
>     <h2>Continuous Assessment Registration Form</h2>
>     <form id="caForm">
>         <table id="caTable">
>             <tr>
>                 <th>Student ID</th>
>                 <th>Test One</th>
>                 <th>Test Two</th>
>                 <th></th>
>             </tr>
>             <tr>
>                 <td><input type="text" name="student_id[]" /></td>
>                 <td><input type="text" name="test_one[]" /></td>
>                 <td><input type="text" name="test_two[]" /></td>
>                 <td></td>
>             </tr>
>         </table>
>         <button type="button" id="addRow">Add Row</button>
>         <button type="button" id="submitForm">Submit</button>
>     </form>
> </body>
> </html>
> ```
>
> **PHP Script to Save CA Results (save_ca_results.php):**
>
> ```php
> <?php
> // Connect to the database
> $servername = "localhost";
> $username = "username";
> $password = "password";
> $dbname = "udom_sr";
>
> $conn = new mysqli($servername, $username, $password, $dbname);
>
> if($conn->connect_error) {
>     die("Connection failed: " . $conn->connect_error);
> }
>
> // Prepare and execute SQL statement for each student's CA results
> $student_ids = $_POST['student_id'];
> $test_ones = $_POST['test_one'];
> $test_twos = $_POST['test_two'];
>
> for($i = 0; $i < count($student_ids); $i++) {
>     $student_id = $student_ids[$i];
>     $test_one = $test_ones[$i];
>     $test_two = $test_twos[$i];
>
>     $sql = "INSERT INTO Tbl_ca_results (student_id, test_one, test_two) VALUES ('$student_id', '$test_one', '$test_two')";
>
>     if ($conn->query($sql) !== TRUE) {
>         echo "Error: " . $sql . "<br>" . $conn->error;
>     }
> }
>
> $conn->close();
>
> echo "CA results saved successfully!";
> ?>
> ```
>
> This form allows the course instructor to register CA for multiple students by adding rows dynamically using AJAX. When the form is submitted, the CA results are saved to the database udom_sr in the Tbl_ca_results table. Make sure to replace "localhost", "username", "password", and "udom_sr" with your actual database credentials and database name.

---

## Arithmetic Practice Program

**QN2:**
**a) Computers are playing an increasing role in education, use XHTML, and JavaScript to write a program that will help an elementary school student learn multiplications. Use random function to produce two positive one digit integer, it should then display a question such as, how much is 4 times 9? The student then type the answer into a text field your program checks the student's answer if it is correct, display the string "very good" and generate a new question. If the answer is wrong, display the string "no please try again" and let the student try the same question again repeatedly until the student finally gets it right. A separate function should be used to generate each new question. This function should be called once when the script begins execution and each time the user answers the question correctly.**
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> Below is an implementation of the program in XHTML and JavaScript to help an elementary school student learn multiplications:
>
> ```html
> <!DOCTYPE html>
> <html xmlns="http://www.w3.org/1999/xhtml">
> <head>
>     <title>Multiplication Practice</title>
>     <script type="text/javascript">
>         var correctAnswer;
>
>         function generateQuestion() {
>             var num1 = Math.floor(Math.random() * 9) + 1; // Generate random number between 1 and 9
>             var num2 = Math.floor(Math.random() * 9) + 1; // Generate random number between 1 and 9
>             var operation = "times";
>             correctAnswer = num1 * num2;
>             document.getElementById("question").innerHTML = "How much is " + num1 + " " + operation + " " + num2 + "?";
>             document.getElementById("answer").value = "";
>             document.getElementById("answer").focus();
>             return correctAnswer;
>         }
>
>         function checkAnswer() {
>             var userAnswer = parseInt(document.getElementById("answer").value);
>             if (userAnswer === correctAnswer) {
>                 alert("Very good!");
>                 generateQuestion();
>             } else {
>                 alert("No, please try again.");
>             }
>         }
>     </script>
> </head>
> <body onload="generateQuestion()">
>     <h1>Multiplication Practice</h1>
>     <div id="question"></div>
>     <input type="text" id="answer" />
>     <button onclick="checkAnswer()">Check Answer</button>
> </body>
> </html>
> ```
>
> This program generates random multiplication questions for the student to answer. When the user submits an answer, it checks if the answer is correct or not and provides appropriate feedback.

---

**b) modify the program from question one to allow the user to pick the type of arithmetic problem he or she wishes to study. An option of 1 means addition problem only. 2 means subtraction problem only. 3 means multiplication problem only. 4 means division problem only and 5 means to execute randomly of all these types.**
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> Now, let's modify the program to allow the user to pick the type of arithmetic problem they wish to study:
>
> ```html
> <!DOCTYPE html>
> <html xmlns="http://www.w3.org/1999/xhtml">
> <head>
>     <title>Arithmetic Practice</title>
>     <script type="text/javascript">
>         var correctAnswer;
>
>         function generateQuestion() {
>             var num1, num2, operation, answer;
>             var operationType = document.getElementById("operationType").value;
>
>             if (operationType == "5") { // Random operation
>                 var randomOp = Math.floor(Math.random() * 4) + 1;
>                 operationType = randomOp.toString();
>             }
>
>             num1 = Math.floor(Math.random() * 9) + 1;
>
>             switch (operationType) {
>                 case "1": // Addition
>                     num2 = Math.floor(Math.random() * 9) + 1;
>                     operation = "+";
>                     correctAnswer = num1 + num2;
>                     break;
>                 case "2": // Subtraction
>                     num2 = Math.floor(Math.random() * num1) + 1; // Ensuring subtraction result is positive
>                     operation = "-";
>                     correctAnswer = num1 - num2;
>                     break;
>                 case "3": // Multiplication
>                     num2 = Math.floor(Math.random() * 9) + 1;
>                     operation = "*";
>                     correctAnswer = num1 * num2;
>                     break;
>                 case "4": // Division
>                     num2 = Math.floor(Math.random() * 9) + 1;
>                     // Ensure division results in integer
>                     num1 = num1 * num2;
>                     operation = "/";
>                     correctAnswer = num1 / num2;
>                     break;
>             }
>
>             document.getElementById("question").innerHTML = "How much is " + num1 + " " + operation + " " + num2 + "?";
>             document.getElementById("answer").value = "";
>             document.getElementById("answer").focus();
>             return correctAnswer;
>         }
>
>         function checkAnswer() {
>             var userAnswer = parseFloat(document.getElementById("answer").value);
>             if (userAnswer === correctAnswer) {
>                 alert("Very good!");
>                 generateQuestion();
>             } else {
>                 alert("No, please try again.");
>             }
>         }
>     </script>
> </head>
> <body onload="generateQuestion()">
>     <h1>Arithmetic Practice</h1>
>     <label for="operationType">Select operation type:</label>
>     <select id="operationType">
>         <option value="1">Addition</option>
>         <option value="2">Subtraction</option>
>         <option value="3">Multiplication</option>
>         <option value="4">Division</option>
>         <option value="5">Random</option>
>     </select>
>     <div id="question"></div>
>     <input type="text" id="answer" />
>     <button onclick="checkAnswer()">Check Answer</button>
> </body>
> </html>
> ```
>
> This modified version of the program allows the user to select the type of arithmetic operation they want to practice (addition, subtraction, multiplication, division, or random). Depending on the selected option, it generates questions accordingly.

---

## PHP Code Analysis

**QN3.**
**What is the value displayed when the following is executed? Assume that the code was executed using the following URL.**
**testscript.php?c=25**

```php
<?php
function process($c,$d=25){
    $retval=$c+$d=$_GET['C']
    Return $retval;
}
echo process(5.30);
?>
```
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> Let's break down the code and see what it does:
>
> ```php
> <?php
> function process($c,$d=25) {
>     $retval=$c+$d=$_GET['C']; // There's a syntax error in this line
>     Return $retval;
> }
> echo process(5.30);
> ?>
> ```
>
> 1. The code defines a function called `process` which takes two parameters, `$c` and `$d`. The second parameter `$d` has a default value of 25.
>
> 2. Inside the function, there's an assignment statement `$retval=$c+$d=$_GET['C'];`. However, there's a syntax error here. It seems like the intention is to add the value of `$c` to the value retrieved from the `$_GET` array, but the assignment to `$d` is unclear.
>
> 3. The function returns the value of `$retval`.
>
> 4. Finally, the function `process` is called with the argument 5.30, and the result is echoed out.
>
> Given the provided URL `testscript.php?c=25`, it seems that c is supposed to be a query parameter with a value of 25. However, the URL provided is incorrect and doesn't follow the standard format for passing query parameters. Assuming the correct URL is `testscript.php?c=25`, the value of `$_GET['c']` would be 25.
>
> Now, let's correct the syntax error and evaluate the function:
>
> ```php
> function process($c, $d=25) {
>     $retval = $c + $d; // corrected syntax
>     return $retval;
> }
> echo process(5.30);
> ```
>
> When `echo process(5.30);` is executed, it will call the process function with `$c` equal to 5.30 and the default value of `$d` (which is 25). So, the function will return the sum of 5.30 and 25, which is 30.30.
>
> Therefore, the value displayed will be **30.30**.

---

