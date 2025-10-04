
#### **Internet Programming and Applications  - Exam**


**UNIVERSITY OF DODOMA**

**ACADEMIC YEAR  2022/2023**

---

### **QUESTION ONE**

**True or False**

**1. JavaScript can use either single or double quotes around its strings.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **True.** JavaScript allows both single (`'`) and double (`"`) quotes for strings.



**2. It is not possible to show images on a web page without the `<img>` tag.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **False.** Images can also be displayed using CSS (`background-image`), `<object>`, or `<iframe>`.



**3. JavaScript is the same as Java.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **False.** JavaScript and Java are distinct programming languages with different syntax and use cases.



**4. The Bootstrap grid system is based on 9 columns.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **False.** The Bootstrap grid system is based on 12 columns.



**5. When using class and id in a CSS the priority is given to class.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **False.** In CSS, the `id` selector has higher specificity than the `class` selector.



**6. In JavaScript, `window.prompt()` method return true or false value.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **False.** `window.prompt()` returns a string entered by the user, or `null` if canceled.



**7. JavaScript is case-sensitive.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **True.** JavaScript is case-sensitive (e.g., `variable` and `Variable` are different).



**8. jQuery is a Server scripting library.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **False.** jQuery is a client-side JavaScript library.



**9. Cards replace panels, thumbnails, and wells used in Bootstrap 3 and are essentially a contained group of content with a border and inner padding.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **True.** In Bootstrap 4+, cards replace panels, thumbnails, and wells.



**10. A big challenge with responsive design is finding a balance between the content needs for both mobile and desktop.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **True.** Responsive design must adapt content effectively across different screen sizes and capabilities.

---

### **QUESTION TWO**

**Predict the Output**

**a.**  
```html
<script>
  var x = 7;
  var y = 5;
  var z = 14;
  x = y;
  z = z % x;
  alert(y + z);
</script>
```

> [!Tip]- Answer (Click to show)
> **9**



**b.**  
```html
<script>
  var a = 1;
  a = a + 1;
  var b = "a is " + a;
  a = 5;
  alert(b);
</script>
```

> [!Tip]- Answer (Click to show)
> **a is 2**



**c.**  
```html
<script>
  var a = prompt("enter number", "31");
  var b = a + 5;
  var c = "b is " + b;
  alert(c);
</script>
```

> [!Tip]- Answer (Click to show)
> **b is 315**



**d.**  
```html
<script>
  var name = prompt("enter your name", "Albus Percival Wulfric Brian Dumbledore");
  if (name.length < 20)
    alert("Wow, that's quite a mouthful!");
</script>
```

> [!Tip]- Answer (Click to show)
> **No Output**



**e.**  
```html
<script>
  var s = "JavaScript is seldom used to write complete program";
  document.writeln(s.indexOf('w'));
  document.writeln("<br/>");
</script>
```

> [!Tip]- Answer (Click to show)
> **29**

---

### **QUESTION THREE**

**Write HTML5 Code**

**a. Image with caption**

> [!Tip]- Answer (Click to show)
> ```html
> <figure>
>   <img src="www.jpg" alt="World Wide Web">
>   <figcaption>World Wide Web</figcaption>
> </figure>
> ```



**b. Footer with copyright**

> [!Tip]- Answer (Click to show)
> ```html
> <footer>
>   <p style="background-color: black; text-align: center; color: white;">
>     Prepared by CP221 Instructors &copy; 2023
>   </p>
> </footer>
> ```



**c. Centered header**

> [!Tip]- Answer (Click to show)
> ```html
> <header>
>   <h1 style="background-color: black; text-align: center; color: white;">
>     Front Web Development
>   </h1>
> </header>
> ```



**d. Centered list**

> [!Tip]- Answer (Click to show)
> ```html
> <div style="list-style-position: inside; text-align: center;">
>   <ul>
>     <li>HTML5</li>
>     <li>CSS</li>
>     <li>JavaScript</li>
>     <li>jQuery</li>
>     <li>Bootstrap</li>
>   </ul>
> </div>
> ```



**e. Horizontal rule and centered list**

> [!Tip]- Answer (Click to show)
> ```html
> <hr>
> <div style="list-style-position: inside; text-align: center;">
>   <ul>
>     <li>HTML5</li>
>     <li>CSS</li>
>     <li>JavaScript</li>
>     <li>jQuery</li>
>     <li>Bootstrap</li>
>   </ul>
> </div>
> ```

---

### **QUESTION FOUR**

**jQuery Statements**

**a. Change background color of `#colorDiv` to green**

> [!Tip]- Answer (Click to show)
> ```javascript
> $("#colorDiv").css("background-color", "green");
> ```



**b. Change `src` of image with name `myImage` to `landscape.jpg`**

> [!Tip]- Answer (Click to show)
> ```javascript
> $("img[name='myImage']").attr("src", "landscape.jpg");
> ```

---

### **QUESTION FIVE**

**HTML Form and jQuery Table**

**a. Pet Information Form**

> [!Tip]- Answer (Click to show)
> ```html
> <!DOCTYPE html>
> <html>
> <head>
>   <title>Pet Information Form</title>
> </head>
> <body>
>   <form action="summary.html" method="post">
>     <label for="petName">Pet Name:</label>
>     <input type="text" id="petName" name="petName" required><br><br>
>     <label for="petType">Pet Type:</label>
>     <select id="petType" name="petType" required>
>       <option value="Dog">Dog</option>
>       <option value="Cat">Cat</option>
>       <option value="Bird">Bird</option>
>     </select><br><br>
>     <label for="petGreed">Is your pet greedy?</label>
>     <input type="checkbox" id="petGreed" name="petGreed" value="true" checked><br><br>
>     <input type="submit" value="Submit">
>   </form>
> </body>
> </html>
> ```



**b. jQuery Dynamic Table**

> [!Tip]- Answer (Click to show)
> ```html
> <!DOCTYPE html>
> <html>
> <head>
>   <title>CP 221 JQuery Coding</title>
>   <link rel="stylesheet" type="text/css" href="jql.css">
>   <script src="http://code.jquery.com/jquery-latest.js"></script>
>   <script>
>     $(document).ready(function() {
>       var data = [
>         ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'],
>         ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3'],
>         ['Row 3, Cell 1', 'Row 3, Cell 2', 'Row 3, Cell 3'],
>         ['Row 4, Cell 1', 'Row 4, Cell 2', 'Row 4, Cell 3'],
>         ['Row 5, Cell 1', 'Row 5, Cell 2', 'Row 5, Cell 3'],
>         ['Row 6, Cell 1', 'Row 6, Cell 2', 'Row 6, Cell 3'],
>         ['Row 7, Cell 1', 'Row 7, Cell 2', 'Row 7, Cell 3']
>       ];
>       var $table = $('#theTable');
>       data.forEach(function(row) {
>         var $tr = $('<tr>');
>         row.forEach(function(cell) {
>           $tr.append('<td>' + cell + '</td>');
>         });
>         $table.append($tr);
>       });
>     });
>   </script>
> </head>
> <body>
>   <table id="theTable" border="1"></table>
> </body>
> </html>
> ```

---

### **QUESTION SIX**

**To-Do List with Alternating Background**

> [!Tip]- Answer (Click to show)
> ```html
> <!DOCTYPE html>
> <html>
> <head>
>   <title>To-Do List</title>
>   <style>
>     .white-bg { background-color: white; }
>     .yellow-bg { background-color: yellow; }
>   </style>
> </head>
> <body>
>   <h1>My To Do List</h1>
>   <ul id="list"></ul>
>   <div>
>     <input type="text" id="item" name="search">
>     <button id="add">add</button>
>     <button id="remove">remove</button>
>   </div>
>   <script>
>     document.addEventListener('DOMContentLoaded', function() {
>       var list = document.getElementById('list');
>       var itemInput = document.getElementById('item');
>       var addButton = document.getElementById('add');
>       var removeButton = document.getElementById('remove');
>       var isWhiteBackground = true;
>       addButton.addEventListener('click', function() {
>         var itemText = itemInput.value.trim();
>         if (itemText != "") {
>           var itemWords = itemText.split(' ');
>           var listItem = document.createElement('li');
>           if (isWhiteBackground) {
>             listItem.className = 'white-bg';
>           } else {
>             listItem.className = 'yellow-bg';
>           }
>           isWhiteBackground = !isWhiteBackground;
>           itemWords.forEach(function(word) {
>             var anchor = document.createElement('a');
>             anchor.textContent = word;
>             anchor.href = '#';
>             listItem.appendChild(anchor);
>             listItem.appendChild(document.createTextNode(' '));
>           });
>           list.appendChild(listItem);
>           itemInput.value = '';
>         }
>       });
>       removeButton.addEventListener('click', function() {
>         var itemText = itemInput.value.trim().toLowerCase();
>         var listItems = list.getElementsByTagName('li');
>         for (var i = 0; i < listItems.length; i++) {
>           var listItem = listItems[i];
>           var anchors = listItem.getElementsByTagName('a');
>           var found = false;
>           for (var j = 0; j < anchors.length; j++) {
>             if (anchors[j].textContent.toLowerCase() === itemText) {
>               list.removeChild(listItem);
>               found = true;
>               break;
>             }
>           }
>           if (found) break;
>         }
>         itemInput.value = '';
>       });
>     });
>   </script>
> </body>
> </html>
> ```


--- 

### **QUESTION SEVEN

**Guessing Game**

> [!Tip]- Answer (Click to show)
> ```html
> <!DOCTYPE html>
> <html>
> <head>
>   <title>Guessing Game</title>
>   <style>
>     .low { color: blue; font-style: italic; }
>     .high { color: red; font-weight: bold; }
>   </style>
> </head>
> <body>
>   <h1>Guessing Game</h1>
>   <div>
>     <input id="number" type="text" size="16">
>     <button id="makeguess">Make Guess</button>
>     <span id="result"></span>
>   </div>
>   <p>Your past guesses:</p>
>   <ul id="guesses"></ul>
>   <script>
>     document.addEventListener('DOMContentLoaded', function() {
>       var randomNumber = Math.floor(Math.random() * 100) + 1;
>       var guessButton = document.getElementById('makeguess');
>       var guessInput = document.getElementById('number');
>       var resultSpan = document.getElementById('result');
>       var guessesList = document.getElementById('guesses');
>       var numTries = 0;
>       var gameOver = false;
>       guessButton.addEventListener('click', function() {
>         if (!gameOver) {
>           numTries++;
>           var guess = parseInt(guessInput.value);
>           var li = document.createElement('li');
>           li.textContent = guess;
>           if (guess === randomNumber) {
>             resultSpan.textContent = 'You got it right in ' + numTries + ' tries!';
>             guessButton.disabled = true;
>             gameOver = true;
>           } else if (guess < randomNumber) {
>             li.className = 'low';
>             resultSpan.textContent = 'Too low!';
>           } else {
>             li.className = 'high';
>             resultSpan.textContent = 'Too high!';
>           }
>           guessesList.appendChild(li);
>           guessInput.value = '';
>         }
>       });
>     });
>   </script>
> </body>
> </html>
> ```

---

### **QUESTION EIGHT**

**E-Commerce Website with Bootstrap**

> [!Tip]- Answer (Click to show)
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>   <meta charset="UTF-8">
>   <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <title>E-Commerce Website</title>
>   <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
> </head>
> <body>
>   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
>     <a class="navbar-brand" href="#">E-Commerce Company</a>
>   </nav>
>   <div class="container mt-4">
>     <div id="imageCarousel" class="carousel slide" data-ride="carousel">
>       <ol class="carousel-indicators">
>         <li data-target="#imageCarousel" data-slide-to="0" class="active"></li>
>         <li data-target="#imageCarousel" data-slide-to="1"></li>
>         <li data-target="#imageCarousel" data-slide-to="2"></li>
>         <li data-target="#imageCarousel" data-slide-to="3"></li>
>         <li data-target="#imageCarousel" data-slide-to="4"></li>
>       </ol>
>       <div class="carousel-inner">
>         <div class="carousel-item active">
>           <img src="image1.jpg" class="d-block w-100" alt="Image 1">
>           <div class="carousel-caption d-none d-md-block">
>             <h5>Image 1 Caption</h5>
>           </div>
>         </div>
>         <div class="carousel-item">
>           <img src="image2.jpg" class="d-block w-100" alt="Image 2">
>           <div class="carousel-caption d-none d-md-block">
>             <h5>Image 2 Caption</h5>
>           </div>
>         </div>
>         <div class="carousel-item">
>           <img src="image3.jpg" class="d-block w-100" alt="Image 3">
>           <div class="carousel-caption d-none d-md-block">
>             <h5>Image 3 Caption</h5>
>           </div>
>         </div>
>         <div class="carousel-item">
>           <img src="image4.jpg" class="d-block w-100" alt="Image 4">
>           <div class="carousel-caption d-none d-md-block">
>             <h5>Image 4 Caption</h5>
>           </div>
>         </div>
>         <div class="carousel-item">
>           <img src="image5.jpg" class="d-block w-100" alt="Image 5">
>           <div class="carousel-caption d-none d-md-block">
>             <h5>Image 5 Caption</h5>
>           </div>
>         </div>
>       </div>
>       <a class="carousel-control-prev" href="#imageCarousel" role="button" data-slide="prev">
>         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
>         <span class="sr-only">Previous</span>
>       </a>
>       <a class="carousel-control-next" href="#imageCarousel" role="button" data-slide="next">
>         <span class="carousel-control-next-icon" aria-hidden="true"></span>
>         <span class="sr-only">Next</span>
>       </a>
>     </div>
>     <ul class="pagination mt-4">
>       <li class="page-item"><a class="page-link" href="page1.html">1</a></li>
>       <li class="page-item"><a class="page-link" href="page2.html">2</a></li>
>       <li class="page-item"><a class="page-link" href="page3.html">3</a></li>
>       <li class="page-item"><a class="page-link" href="page4.html">4</a></li>
>       <li class="page-item"><a class="page-link" href="page5.html">5</a></li>
>     </ul>
>   </div>
>   <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
>   <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@1.16.1/dist/umd/popper.min.js"></script>
>   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
> </body>
> </html>
> ```