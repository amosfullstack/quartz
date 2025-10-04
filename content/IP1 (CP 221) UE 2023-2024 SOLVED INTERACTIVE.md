

#### **Internet Programming and Applications  - Exam**


**UNIVERSITY OF DODOMA**

**ACADEMIC YEAR  2023/2024**

---

## **SECTION A**
### **Question One: Multiple Choice**

**viii. Which of the following jQuery method is used to attach a handler to an event?**  
*(1 Mark)*

- A. unbind () method
- B. attach () method
- C. bind () method
- D. None of the above

> [!Tip]- Answer (Click to show)
> **C. bind () method**



**ix. $(this) in jQuery is used when:**  
*(1 Mark)*

- A. an HTML element references the entire document
- B. an HTML element references its own action
- C. an HTML element references the action of its parent element
- D. All of the above

> [!Tip]- Answer (Click to show)
> **B. an HTML element references its own action**



**x. Which type of JavaScript language is:**  
*(1 Mark)*

- A. Object-Oriented
- B. Object-Based
- C. Assembly-language
- D. High-level

> [!Tip]- Answer (Click to show)
> **B. Object-Based**

---

### **Question Two: Fill in the Blanks**

**a. ______ tag contain information about the author, copyright information, etc.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **`<footer>`**



**b. ______ tag can be used to mark up a conversation.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **`<dialog>`**



**c. ______ represents a measurement, such as disk usage.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **`<meter>`**



**d. ______ improve the performance of our websites by avoiding the need to download images off the network.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **`<canvas>`**



**e. ______ element represents a run of text in one document marked or highlighted for reference purposes.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **`<mark>`**



**f. ______ tag represents a section of the document intended for navigation.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **`<nav>`**



**g. ______ tag represents a piece of content that is only slightly related to the rest of the page.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **`<aside>`**



**h. ______ tag represents an independent piece of content of a document, such as a blog entry or newspaper.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **`<article>`**



**i. ______ tag represents a generic document or application. It can be used together with h1-h6 to indicate the document structure.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **`<section>`**



**j. ______ tag can be used to associate a caption together with some embedded content, such as a graphic or video.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **`<figure>`**

---

### **Question Three: True or False**

**a. JavaScript is a compiled language**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **False**



**b. With an external style sheet, you can change the look of an entire website by changing just one file.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **True**



**c. jQuery can be used to create AJAX applications.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **True**



**d. Using the Javascript const keyword to declare a variable ensures that it will not be reassigned within its scope.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **True**



**e. HTML is used to create the structure of a web page.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **True**



**f. jQuery is a replacement for JavaScript.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **False**



**g. Some browsers do not support images. In this case, the alt attribute can be used to create text that appears instead of the image.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **True**



**h. When a Web browser displays a table, it often adds extra space. To eliminate this space use the width attribute in the `<table>` and `<td>` tags.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **False**



**i. A font family is a set of fonts that have similar characteristics.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **True**



**j. jQuery Method Chaining allows us to run multiple jQuery methods (on the same element) within a single statement.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **True**

---

### **Question Four: CSS Rules**

**i. Make all text in the body of the document double the normal size and color the text red.**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```css
> body {
>   font-size: 2em;
>   color: red;
> }
> ```



**ii. Place a background image halfway down the page, tiling it horizontally. The image should remain in place as the user scrolls up or down.**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```css
> body {
>   background-image: url('your-image.jpg');
>   background-position: 50% 50%;
>   background-repeat: repeat-x;
>   background-attachment: fixed;
> }
> ```



**iii. All h1 and h2 elements in the web page should have the following styles applied: a padding of 0.5 ems, a dashed border style, and a margin of 0.5 ems.**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```css
> h1, h2 {
>   padding: 0.5em;
>   border: 1px dashed;
>   margin: 0.5em;
> }
> ```



**iv. Change the color of all elements with the "green-move" class to green, and shift them down 25 pixels and to the right 15 pixels.**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```css
> .green-move {
>   color: green;
>   position: relative;
>   top: 25px;
>   left: 15px;
> }
> ```



**v. Write a layout template that contains a header and two columns. Use division tags for each layout component, and use float to line up the columns side by side. Give each component a border and or a background color so you can see in which division tag you are.**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```css
> .div1 {
>   background-color: red;
>   float: left;
> }
> .div2 {
>   background-color: yellow;
>   float: left;
> }
> ```

---

### **Question Five: Pregnant Mothers Web Application**  

Assume you are a front-end developer and you are tasked to create a web application that stores information about pregnant mothers. The application needed to capture the following details about each pregnant mother: first name, middle name, surname, email address, and phone number. During the development process, the client added a requirement to also capture information about the pregnancy. Specifically, the application needed to determine whether the pregnancy was a twin or not. If the pregnancy was not a twin, the application should capture the gender and weight of the child. If the pregnancy was a twin, the application should capture the number of children (ie, the number of twins could be 2, 3, etc.). For a twin pregnancy, the application should capture the weight and gender of each child. So the number of input fields for gender and weight would depend on the number of twins. For example, if the number of twins is two, then the application should have two input fields each for the gender and weight of the two children.
You were asked to use HTML, CSS, and jQuery to create the form to capture all this information. You also needed to use JavaScript to validate the form, ensuring that no required field is left empty and that the data entered is valid. All fields should be mandatory except the middle name. 
*(20 Marks)*

> [!Tip]- Answer (Click to show)
> **HTML**
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
> <meta charset="UTF-8">
> <meta name="viewport" content="width=device-width, initial-scale=1.0">
> <title>Pregnancy Form</title>
> <link rel="stylesheet" href="styles.css">
> </head>
> <body>
> <div class="container">
> <h1>Mother's Information</h1>
> <form id="pregnancy-form">
>   <label>First Name:</label>
>   <input type="text" id="first-name" required>
>   <label>Middle Name (Optional):</label>
>   <input type="text" id="middle-name">
>   <label>Surname:</label>
>   <input type="text" id="surname" required>
>   <label>Email:</label>
>   <input type="email" id="email" required>
>   <label>Phone:</label>
>   <input type="tel" id="phone" required>
>   <label>Is this a twin pregnancy?</label>
>   <select id="twin-pregnancy" required>
>     <option value="">Select</option>
>     <option value="no">No</option>
>     <option value="yes">Yes</option>
>   </select>
>   <div id="single-pregnancy">
>     <label>Child Gender:</label>
>     <select id="child-gender" required>
>       <option value="">Select Gender</option>
>       <option value="male">Male</option>
>       <option value="female">Female</option>
>     </select>
>     <label>Child Weight (kg):</label>
>     <input type="number" id="child-weight" step="0.01" min="0" required>
>   </div>
>   <div id="twin-pregnancy-details" style="display:none;">
>     <label>Number of Children:</label>
>     <input type="number" id="number-of-twins" min="2" required>
>     <div id="twins-info"></div>
>   </div>
>   <button type="submit">Submit</button>
> </form>
> </div>
> <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
> <script src="script.js"></script>
> </body>
> </html>
> ```
> 
> **CSS**
> ```css
> body, container {
>   font-family: Arial, sans-serif;
>   margin: 0;
>   padding: 0;
> }
> .container {
>   width: 50%;
>   margin: 50px auto;
>   background: #fff;
>   padding: 20px;
>   border-radius: 8px;
>   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
> }
> label, input, select {
>   display: block;
>   width: 100%;
>   margin-bottom: 15px;
>   padding: 8px;
> }
> button {
>   padding: 10px;
>   width: 100%;
>   background: #28a745;
>   color: #fff;
>   border: none;
>   cursor: pointer;
> }
> ```
> 
> **JavaScript & jQuery**
> ```javascript
> $(document).ready(function() {
>   // Toggle pregnancy form sections based on twin selection
>   $('#twin-pregnancy').on('change', function() {
>     let isTwin = $(this).val() == 'yes';
>     $('#single-pregnancy').toggle(!isTwin);
>     $('#twin-pregnancy-details').toggle(isTwin);
>   });
> 
>   // Generate twin fields
>   $('#number-of-twins').on('input', function() {
>     let numberOfTwins = $(this).val();
>     let twinsFields = '';
> 
>     for (let i = 1; i <= numberOfTwins; i++) {
>       twinsFields += `
>       <label>Child ${i} Gender:</label>
>       <select required>
>         <option value="">Select Gender</option>
>         <option value="male">Male</option>
>         <option value="female">Female</option>
>       </select>
>       <label>Child ${i} Weight (kg):</label>
>       <input type="number" step="0.01" min="0" required>
>       `;
>     }
>     $('#twins-info').html(twinsFields);
>   });
> 
>   // Form validation
>   $('#pregnancy-form').on('submit', function(e) {
>     if (!this.checkValidity()) {
>       alert('Please fill out all required fields.');
>       e.preventDefault();
>     }
>   });
> });
> ```

---

### **Question Six: To-Do List Application**  

Imagine you are building a web application that allows users to create and manage their personal to-do lists. When a user click "Add" button, a function named "addTodoltem" should be called to allow user to add a new to-do item by entering a task description in an input field. When the user adds a new to-do item, it should be displayed in a table with id="list-items". Each to-do item in the list should have a checkbox to mark it as completed, and a "Delete" button. When the user clicks the checkbox for a to-do item, a function named "completeTask" should to called to visually indicated the task as completed (by adding a strikethrough to the text). When the user clicks the "Delete" button for a to-do item, the application should call a function "deleteltem" which confirm the deletion with the user before removing the item the from the list. Use DOM and BOM manipulations to implement the above functionalities. (20 Marks)

> [!Tip]- Answer (Click to show)
> **HTML**
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
> <meta charset="UTF-8">
> <meta name="viewport" content="width=device-width, initial-scale=1.0">
> <title>To-Do List</title>
> <style>
>   .completed {
>     text-decoration: line-through;
>   }
> </style>
> </head>
> <body>
> <h1>To-Do List</h1>
> <input type="text" id="taskDescription" placeholder="Enter a task">
> <button onclick="addTodoltem()">Add</button>
> <ul id="list-items"></ul>
> 
> <script>
> function addTodoltem() {
>   const task = document.getElementById('taskDescription').value;
>   if (!task) return alert('Enter a task!');
> 
>   const li = document.createElement('li');
>   li.innerHTML = `${task} <input type="checkbox" onclick="completeTask(this)"> <button onclick="deleteItem(this)">Delete</button>`;
>   document.getElementById('list-items').appendChild(li);
>   document.getElementById('taskDescription').value = "";
> }
> 
> function completeTask(checkbox) {
>   checkbox.parentElement.classList.toggle('completed');
> }
> 
> function deleteItem(button) {
>   if (confirm('Delete this task?')) {
>     button.parentElement.remove();
>   }
> }
> </script>
> </body>
> </html>
> ```

---

### **Question Seven: Car Gallery with jQuery**  

Mr. Siphael is selling his car online. He has taken several photos of the car's exterior and interior, and he wants to display them on a webpage so potential buyers can view the car. He would like the webpage to have a large main image area that displays the selected photo, and a set of thumbnail images that the user can click to update the main image. Write the necessary code in a file called 'car.js' that uses jQuery to implement the following functionality: • When the user clicks on a thumbnail image of the car's exterior, the large exterior shot should be displayed in the main image area (the image with the ID 'car'). • When the user clicks on a thumbnail image of the car's interior, the large interior shot should be displayed in the main image area.

> [!Tip]- Answer (Click to show)
> **HTML**
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>   <meta charset="UTF-8">
>   <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <title>Car Sale</title>
>   <link rel="stylesheet" href="styles.css">
> </head>
> <body>
>   <h1>Car for Sale</h1>
>   <div class="main-image">
>     <img id="car" src="images/exterior1.jpg" alt="Car Image" width="600">
>   </div>
>   <div class="thumbnails">
>     <h2>Exterior</h2>
>     <img class="thumbnail" data-type="exterior" data-src="images/exterior1.jpg" src="images/exterior1-thumb.jpg" alt="Exterior 1">
>     <img class="thumbnail" data-type="exterior" data-src="images/exterior2.jpg" src="images/exterior2-thumb.jpg" alt="Exterior 2">
>     <h2>Interior</h2>
>     <img class="thumbnail" data-type="interior" data-src="images/interior1.jpg" src="images/interior1-thumb.jpg" alt="Interior 1">
>     <img class="thumbnail" data-type="interior" data-src="images/interior2.jpg" src="images/interior2-thumb.jpg" alt="Interior 2">
>   </div>
> 
>   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
>   <script>
>     $(document).ready(function() {
>       $('.thumbnail').on('click', function() {
>         var newImageSrc = $(this).attr('data-src');
>         $('#car').attr('src', newImageSrc);
>       });
>     });
>   </script>
> </body>
> </html>
> ```

---

**END OF EXAMINATION PAPER**