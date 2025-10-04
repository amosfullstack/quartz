
**CP221: IP 1**  
**TEST ONE 2024**

---

### **Question One**  
**Write a program that displays, validates, and processes a form intended for user registration. User registration captures the following details: username, password, gender (Male or Female), marital status (Single or Married), and preferences (Music, football, netball, volleyball). The form should be validated to prevent submission of empty fields.**

> [!Tip]- Answer (Click to show)
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>User Registration</title>
> </head>
> <body>
>     <form id="registrationForm">
>         <label for="username">Username:</label>
>         <input type="text" id="username" name="username" required><br><br>
>         
>         <label for="password">Password:</label>
>         <input type="password" id="password" name="password" required><br><br>
>         
>         <label for="gender">Gender:</label>
>         <input type="radio" id="male" name="gender" value="Male" required> Male
>         <input type="radio" id="female" name="gender" value="Female" required> Female<br><br>
>         
>         <label for="maritalStatus">Marital Status:</label>
>         <input type="radio" id="single" name="maritalStatus" value="Single" required> Single
>         <input type="radio" id="married" name="maritalStatus" value="Married" required> Married<br><br>
>         
>         <label for="preferences">Preferences:</label><br>
>         <input type="checkbox" id="music" name="preferences" value="Music"> Music<br>
>         <input type="checkbox" id="football" name="preferences" value="Football"> Football<br>
>         <input type="checkbox" id="netball" name="preferences" value="Netball"> Netball<br>
>         <input type="checkbox" id="volleyball" name="preferences" value="Volleyball"> Volleyball<br><br>
>         
>         <button type="submit">Register</button>
>     </form>
>     
>     <script>
>         document.getElementById('registrationForm').addEventListener('submit', function(event) {
>             const username = document.getElementById('username').value;
>             const password = document.getElementById('password').value;
>             const gender = document.querySelector('input[name="gender"]:checked');
>             const maritalStatus = document.querySelector('input[name="maritalStatus"]:checked');
>             const preferences = document.querySelectorAll('input[name="preferences"]:checked');
> 
>             if (!username || !password || !gender || !maritalStatus || preferences.length == 0) {
>                 event.preventDefault();
>                 alert('Please fill all the fields.');
>             } else {
>                 alert('Form submitted successfully.');
>             }
>         });
>     </script>
> </body>
> </html>
> ```

---

### **Question Two**  
**Write the CSS rules that do the following:**

**a) Round the corners of the button with class="button" to 2px**

> [!Tip]- Answer (Click to show)
> ```css
> .button {
>     border-radius: 2px;
> }
> ```



**b) Add black shadows to the button with type="button" to 2px**

> [!Tip]- Answer (Click to show)
> ```css
> button[type="button"] {
>     box-shadow: 2px 2px 2px black;
> }
> ```



**c) Remove an element with id="element"**

> [!Tip]- Answer (Click to show)
> ```css
> #element {
>     display: none;
> }
> ```

---

### **Question Three**

**a) Write a JavaScript function, which receives an array of numbers as an argument and returns the product of the numbers in the array.**

> [!Tip]- Answer (Click to show)
> ```javascript
> function productOfArray(numbers) {
>     let product = 1;
>     for (let i = 0; i < numbers.length; i++) {
>         product *= numbers[i];
>     }
>     return product;
> }
> ```



**b) Use the JavaScript Document Object Model (DOM) to create a paragraph and add it to the HTML document body. The paragraph displays the message "Welcome to programming".**

> [!Tip]- Answer (Click to show)
> ```javascript
> const paragraph = document.createElement('p');
> paragraph.innerHTML = 'Welcome to programming';
> document.body.appendChild(paragraph);
> ```



**c) Write a JavaScript function that deletes an HTML element with id="item" from the document when an HTML button with id="button" is clicked.**

> [!Tip]- Answer (Click to show)
> ```javascript
> document.getElementById('button').onclick = function() {
>     const item = document.getElementById('item');
>     item && item.parentNode.removeChild(item);
> };
> ```



**d) Write a JavaScript function that receives two numbers from a user through Browser Object Model (BOM) popups and displays the summation of the numbers through BOM popups.**

> [!Tip]- Answer (Click to show)
> ```javascript
> function sumTwoNumbers() {
>     const num1 = parseFloat(prompt('Enter the first number:'));
>     const num2 = parseFloat(prompt('Enter the second number:'));
>     alert('The sum is: '+ (num1 + num2));
> }
> ```

---

**END OF TEST**