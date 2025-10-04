
#### **Internet Programming and Applications  - Test**

**CP 221: Internet Programming and Applications I**  
**TEST ONE (20 Marks)**  
**11th May 2022**  
**Time: 60 Minutes**

---

### **QUESTION ONE**  
**Write a simple HTML5 page with the title “Simple CSS example”. The body of the page should contain a single paragraph with the text “Hello”. The text should have the “color” property set to “green”. An internal style sheet should be used to define an appropriate style that can be applied to the paragraph.**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <title>Simple CSS example</title>
>     <style>
>         p {
>             color: green;
>         }
>     </style>
> </head>
> <body>
>     <p>Hello</p>
> </body>
> </html>
> ```

---

### **QUESTION TWO**  
**Write a program that does basic arithmetic. Display a form with text box inputs for two operands and a `<select>` menu to choose an operation: addition, subtraction, multiplication, or division. Use a JavaScript function to validate the inputs to make sure that they are numeric and appropriate for the chosen operation. The processing function should display the operands, operator, and the result. For example, if the operands are 4 and 2 and the operation is multiplication, the processing function should display something like “4 * 2 = 8”.**  
*(7 Marks)*

> [!Tip]- Answer (Click to show)
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <title>Basic Arithmetic Calculator</title>
>     <script>
>         function calculate() {
>             let num1 = document.getElementById('num1').value;
>             let num2 = document.getElementById('num2').value;
>             let operator = document.getElementById('operator').value;
>             let resultDiv = document.getElementById('result');
> 
>             // Validate inputs
>             if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
>                 alert('Please enter valid numbers');
>                 return;
>             }
> 
>             num1 = parseFloat(num1);
>             num2 = parseFloat(num2);
>             let result;
> 
>             // Perform calculation based on operator
>             switch(operator) {
>                 case '+':
>                     result = num1 + num2;
>                     break;
>                 case '-':
>                     result = num1 - num2;
>                     break;
>                 case '*':
>                     result = num1 * num2;
>                     break;
>                 case '/':
>                     if (num2 === 0) {
>                         alert('Division by zero is not allowed');
>                         return;
>                     }
>                     result = num1 / num2;
>                     break;
>                 default:
>                     alert('Invalid operator');
>                     return;
>             }
> 
>             // Display result
>             resultDiv.innerHTML = `${num1} ${operator} ${num2} = ${result}`;
>         }
>     </script>
> </head>
> <body>
>     <h2>Basic Arithmetic Calculator</h2>
>     <form onsubmit="event.preventDefault(); calculate();">
>         <input type="text" id="num1" placeholder="First number" required>
>         <select id="operator" required>
>             <option value="+">Addition</option>
>             <option value="-">Subtraction</option>
>             <option value="*">Multiplication</option>
>             <option value="/">Division</option>
>         </select>
>         <input type="text" id="num2" placeholder="Second number" required>
>         <button type="submit">Calculate</button>
>     </form>
>     <div id="result"></div>
> </body>
> </html>
> ```

---

### **QUESTION THREE**  
**Dodoma Shoppers Parking System charges a 500 Tsh. minimum fee to park for up to three hours. The Parking charges an additional 200 Tsh. Per hour in excess of three hours. The maximum charges for any given 24-hour period is 2000 Tsh. Assume that no car parks for longer than 24 hours at a time. Write a script that calculates and display the parking charges for each customer who parked a car in this parking yesterday. You should input from the user the hours parked for each customer. The program should display the charge for the current customer and should calculate and display the running total of yesterday's receipts. The program should use the Javascript function calculateCharges to determine the charge for each customer. Use a text input field to obtain the input from the user. Use a JavaScript to validate the inputs to make sure that they are valid.**  
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <title>Parking Charges Calculator</title>
>     <script>
>         let totalReceipts = 0;
> 
>         function calculateCharges() {
>             let hours = document.getElementById('hours').value;
>             let resultDiv = document.getElementById('result');
>             let totalDiv = document.getElementById('total');
> 
>             // Validate input
>             if (isNaN(hours) || hours === '' || hours < 0 || hours > 24) {
>                 alert('Please enter a valid number of hours between 0 and 24');
>                 return;
>             }
> 
>             hours = parseFloat(hours);
>             let charge;
> 
>             // Calculate charge
>             if (hours <= 3) {
>                 charge = 500;
>             } else {
>                 charge = 500 + (hours - 3) * 200;
>             }
> 
>             // Apply maximum charge
>             if (charge > 2000) {
>                 charge = 2000;
>             }
> 
>             // Update running total
>             totalReceipts += charge;
> 
>             // Display results
>             resultDiv.innerHTML = `Charge for ${hours} hours: ${charge} Tsh`;
>             totalDiv.innerHTML = `Running total of yesterday's receipts: ${totalReceipts} Tsh`;
> 
>             // Clear input field
>             document.getElementById('hours').value = '';
>         }
>     </script>
> </head>
> <body>
>     <h2>Dodoma Shoppers Parking System</h2>
>     <form onsubmit="event.preventDefault(); calculateCharges();">
>         <label for="hours">Enter hours parked:</label>
>         <input type="text" id="hours" placeholder="Hours (0-24)" required>
>         <button type="submit">Calculate Charge</button>
>     </form>
>     <div id="result"></div>
>     <div id="total"></div>
> </body>
> </html>
> ```

---

**END OF TEST**