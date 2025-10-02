
#### **Introduction to High Level Programming (CP 123) - Exam**

**THE UNIVERSITY OF DODOMA**

**INTRODUCTION TO HIGH LEVEL PROGRAMMING (CP 123)**
**END OF YEAR EXAMINATION**
**ACADEMIC YEAR 2023/2024**


**INSTRUCTIONS TO CANDIDATES**

1.  This examination paper consists of **TWO** sections: **SECTION A** and **SECTION B**.
2.  Answer **ALL** questions in **SECTION A**.
3.  In **SECTION B**, attempt **THREE (3)** questions out of the **FOUR (4)** provided.
4.  The total marks for this paper are **100**.
5.  All questions must be answered in the answer booklet provided.
6.  Write your **Student ID Number** clearly on every sheet of your answer booklet.
7.  Silent, non-programmable calculators are permitted.
8.  **No communication devices are allowed.**


**TIME ALLOWED: THREE (3) HOURS**

---


## **SECTION A [40 Marks]**
*Answer all questions in this section*

### **Question One: [10 Marks]**
*Select the letter with the most correct answer [1 Mark Each]*

**I. By default how the value are passed in C++?**  
a. call by value  
b. call by reference  
c. call by pointer  
d. call by object  

> [!Tip]- Answer (Click to show)
> **a. call by value**



**II. A function that is called by itself, either directly or indirectly is called as**  
a. Super function  
b. Recursive function  
c. Main function  
d. None of the above  

> [!Tip]- Answer (Click to show)
> **b. Recursive function**



**III. Iteration uses a repetition structure whereas recursion uses**  
a. Sorting structure  
b. Selection structure  
c. Controlling structure  
d. All of the above  

> [!Tip]- Answer (Click to show)
> **b. Selection structure**



**IV. A graphical representation of an algorithm is called as**  
a. Pseudocode  
b. Flow chart  
c. Flow lines  
d. Flow structure  

> [!Tip]- Answer (Click to show)
> **b. Flow chart**



**V. Which one is not a valid identifier?**  
a. rdd2  
b. x (5)  
c. _DATE_  
d. A3O  

> [!Tip]- Answer (Click to show)
> **b. x (5)**



**VI. Where does the return statement returns the execution of the program?**  
a. main function  
b. caller function  
c. same function  
d. block function  

> [!Tip]- Answer (Click to show)
> **b. caller function**



**VII. In recursion, the condition for which the function will stop calling itself is ______**  
a. Best case  
b. General case  
c. Base case  
d. There is no such condition  

> [!Tip]- Answer (Click to show)
> **c. Base case**



**VIII. What is the correct way to assign the pointer p to the address of x?**  
a. *p=&x  
b. p=%x  
c. p=&x  
d. None of the above  

> [!Tip]- Answer (Click to show)
> **c. p=&x**



**IX. Which looping process is best used when the number of iterations is known?**  
a. for  
b. while  
c. do ... while  
d. all looping processes require that the iterations be known  

> [!Tip]- Answer (Click to show)
> **a. for**



**X. Which of these best describes an array?**  
a. A data structure that shows a hierarchical behavior  
b. Container of objects of similar types  
c. Arrays are immutable once initialized  
d. Array is not a data structure  

> [!Tip]- Answer (Click to show)
> **b. Container of objects of similar types**

---

### **Question Two: [10 Marks]**
*Carefully read the following and write TRUE for the correct sentence and FALSE for the incorrect sentence. [1 Mark Each]*

**I. There is no stand-alone else statement in C++. Every else has a related if.**

> [!Tip]- Answer (Click to show)
> **TRUE**



**II. C++ data types fall into the following three categories: simple, structured, and pointers.**

> [!Tip]- Answer (Click to show)
> **TRUE**



**III. The preprocessor command # include `<iostream>` instructs the preprocessor to include the header file iostream in the program.**

> [!Tip]- Answer (Click to show)
> **TRUE**



**IV. Including a sēmicolon before statement1 in a two-way selection creates a syntax error.**

> [!Tip]- Answer (Click to show)
> **FALSE**



**V. It is possible that the body of a do ... while loop may not execute at all.**

> [!Tip]- Answer (Click to show)
> **FALSE**



**VI. If a C++ function does not use parameters, parentheses around the empty parameter list are not required.**

> [!Tip]- Answer (Click to show)
> **FALSE**



**VII. A function can return a value of type array.**

> [!Tip]- Answer (Click to show)
> **FALSE**



**VIII. Parameters allow you to use different values each time the function is called.**

> [!Tip]- Answer (Click to show)
> **TRUE**



**IX. Arrays can be passed as parameters to a function either by value or by reference.**

> [!Tip]- Answer (Click to show)
> **FALSE**



**X. In C++, pointer variables are declared using the word pointer.**

> [!Tip]- Answer (Click to show)
> **FALSE**

---

### **Question Three: [20 Marks]**

**I. A program runs without any errors being reported but outputs results that are wrong, what type of error is likely to have caused this?**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **Logical Error**



**II. What is the major difference between a while statement and a do-while statement?**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **The while statement checks the condition at the beginning of the loop, so the loop body may not execute at all if the condition is initially false. The do-while statement checks the condition at the end of the loop, so the loop body always executes at least once.**



**III. Write C++ statements to do the following:**  
*(2 Marks Each)*

**a. Declare an array alpha of 15 components of type int.**

> [!Tip]- Answer (Click to show)
> ```cpp
> int alpha[15];
> ```



**b. Set the value of the fifth component of the array alpha to 35.**

> [!Tip]- Answer (Click to show)
> ```cpp
> alpha[4] = 35;
> ```



**c. Set the value of the ninth component of the array alpha to the sum of the sixth and thirteenth components of the array alpha.**

> [!Tip]- Answer (Click to show)
> ```cpp
> alpha[8] = alpha[5] + alpha[12];
> ```



**d. Set the value of the fourth component of the array alpha to three times the value of the eighth component minus 57.**

> [!Tip]- Answer (Click to show)
> ```cpp
> alpha[3] = 3 * alpha[7] - 57;
> ```



**IV. Write a program that prompts the user to input three numbers. The program should then output the largest number.**  
*(6 Marks)*

> [!Tip]- Answer (Click to show)
> ```cpp
> #include <iostream>
> using namespace std;
> 
> int main() {
>     int num1, num2, num3;
>     
>     cout << "Enter three numbers: ";
>     cin >> num1 >> num2 >> num3;
>     
>     int largest = num1;
>     
>     if (num2 > largest) {
>         largest = num2;
>     }
>     if (num3 > largest) {
>         largest = num3;
>     }
>     
>     cout << "The largest number is: " << largest << endl;
>     
>     return 0;
> }
> ```

---

## **SECTION B [60 Marks]**
*Answer any THREE questions in this section*

### **Question Four: [20 Marks]**

**I. Rewrite the following as a for loop.**  
*(5 Marks)*
```cpp
int i = 0, value = 0;
while (i <= 20)
{
    if (i % 2 == 0 && i <= 10)
        value = value + i * i;
    else if (i % 2 == 0 && i > 10)
        value = value + i;
    else
        value = value - i;
    i = i + 1;
}
cout << "value = " << value << endl;
```

> [!Tip]- Answer (Click to show)
> ```cpp
> int value = 0;
> for (int i = 0; i <= 20; i++)
> {
>     if (i % 2 == 0 && i <= 10)
>         value = value + i * i;
>     else if (i % 2 == 0 && i > 10)
>         value = value + i;
>     else
>         value = value - i;
> }
> cout << "value = " << value << endl;
> ```



**II. Rewrite the following as a do ... while loop.**  
*(5 Marks)*
```cpp
int i = 0, value = 0;
while (i <= 20)
{
    if (i % 2 == 0 && i <= 10)
        value = value + i * i;
    else if (i % 2 == 0 && i > 10)
        value = value + i;
    else
        value = value - i;
    i = i + 1;
}
cout << "value = " << value << endl;
```

> [!Tip]- Answer (Click to show)
> ```cpp
> int i = 0, value = 0;
> do
> {
>     if (i % 2 == 0 && i <= 10)
>         value = value + i * i;
>     else if (i % 2 == 0 && i > 10)
>         value = value + i;
>     else
>         value = value - i;
>     i = i + 1;
> } while (i <= 20);
> cout << "value = " << value << endl;
> ```



**III. Use the conditional operator to rewrite the following if ... else statement.**  
*(5 Marks)*
```cpp
if (a < b)
{
    a = b;
}
else
{
    a = -b;
}
```

> [!Tip]- Answer (Click to show)
> ```cpp
> a = (a < b) ? b : -b;
> ```



**IV. Use iterative method to rewrite the following recursive function.**  
*(5 Marks)*
```cpp
int factorial(int n)
{
    if (n > 1)
        return n * factorial(n - 1);
    else
        return 1;
}
```

> [!Tip]- Answer (Click to show)
> ```cpp
> int factorial(int n)
> {
>     int result = 1;
>     for (int i = 1; i <= n; i++)
>     {
>         result = result * i;
>     }
>     return result;
> }
> ```

---

### **Question Five: [20 Marks]**
*What is the output of the following programs/ code fragments?*  
*[4 Marks Each]*

**I.**
```cpp
#include <iostream>
#include <conio>
void main()
{
    int list[10] = {1,2,3,4,5,6,7,8,9,10};
    cout << "list[6] = " << list[6] << endl;
    cout << "list[0] + list[9] = " << (list[0] + list[9]) << endl;
    cout << "list[7] - list[3] = " << (list[7] - list[3]) << endl;
    cout << "list[4] * list[1] = " << (list[4] * list[1]) << endl;
    getch();
}
```

> [!Tip]- Answer (Click to show)
> ```
> list[6] = 7
> list[0] + list[9] = 11
> list[7] - list[3] = 4
> list[4] * list[1] = 10
> ```



**II.**
```cpp
#include <iostream>
#include <conio>
void main()
{
    int *p;
    int x = 37;
    cout << "x = " << x << endl;
    p = &x;
    cout << "*p = " << *p << ", x = " << x << endl;
    *p = 58;
    cout << "*p = " << *p << ", x = " << x << endl;
    cout << "Value of x = " << x << endl;
    getch();
}
```

> [!Tip]- Answer (Click to show)
> ```
> x = 37
> *p = 37, x = 37
> *p = 58, x = 58
> Value of x = 58
> ```



**III.**
```cpp
#include <iostream>
#include <conio>
void funOne(int a, int& b, char V);
void funTwo(int& x, int y, char& w);

void main()
{
    int num1, num2;
    char ch;
    num1 = 10;
    num2 = 15;
    ch = 'A';
    cout << "Inside main: num1 = " << num1 << ", num2 = " << num2 << ", and ch = " << ch << endl;
    funOne(num1, num2, ch);
    cout << "After funOne: num1 = " << num1 << ", num2 = " << num2 << ", and ch = " << ch << endl;
    funTwo(num2, 25, ch);
    cout << "After funTwo: num1 = " << num1 << ", num2 = " << num2 << ", and ch = " << ch << endl;
    getch();
}

void funOne(int a, int& b, char v)
{
    int one;
    one = a;
    a++;
    b = b * 2;
    v = 'B';
    cout << "Inside funOne: a = " << a << ", b = " << b << ", v = " << v << ", and one = " << one << endl;
}

void funTwo(int& x, int y, char& w)
{
    x++;
    y = y * 2;
    w = 'G';
    cout << "Inside funTwo: x = " << x << ", y = " << y << ", and w = " << w << endl;
}
```

> [!Tip]- Answer (Click to show)
> ```
> Inside main: num1 = 10, num2 = 15, and ch = A
> Inside funOne: a = 11, b = 30, v = B, and one = 10
> After funOne: num1 = 10, num2 = 30, and ch = A
> Inside funTwo: x = 31, y = 50, and w = G
> After funTwo: num1 = 10, num2 = 31, and ch = G
> ```



**IV.**
```cpp
#include <iostream>
#include <math>
#include <conio>
void main()
{
    cout << "floor(-37.4) = " << floor(-37.4) << endl;
    cout << "ceil(-37.4) = " << ceil(-37.4) << endl;
    cout << "pow(2,4) = " << pow(2,4) << endl;
    cout << "abs(-17) = " << abs(-17) << endl;
    getch();
}
```

> [!Tip]- Answer (Click to show)
> ```
> floor(-37.4) = -38
> ceil(-37.4) = -37
> pow(2,4) = 16
> abs(-17) = 17
> ```



**V.**
```cpp
#include <iostream>
#include <conio>
int fib(int fTerm, int sTerm, int pos)
{
    if(pos == 1)
        return fTerm;
    else if(pos == 2)
        return sTerm;
    else
        return fib(fTerm, sTerm, pos - 1) + fib(fTerm, sTerm, pos - 2);
}

void main()
{
    cout << "The fibonacci number at position 4 is " << fib(3, 7, 4) << endl;
    getch();
}
```

> [!Tip]- Answer (Click to show)
> ```
> The fibonacci number at position 4 is 10
> ```

---

### **Question Six: [20 Marks]**
*What is wrong with the following programs/ code fragments?*  
*[5 Marks Each]*

**I.**
```cpp
include <iostream>
void main () {
    int a, b;
    bool found;
    cout << "Enter two integers: ";
    cin >> a >> b;
    if a > a * b && 10 < b
    Found = 2 * a > b;
    else
    {
    found = 2 * a < b;
    if (found)
    a = 3;
    if (true)
    {
    b = 0;
    a = 1;
    c = 2;
    }
    }
    getch();
}
```

> [!Tip]- Answer (Click to show)
> **Multiple Errors:**
> 1. Missing `#` in `include`
> 2. `if` condition missing parentheses
> 3. `Found` should be `found` (case sensitivity)
> 4. Variable `c` used without declaration
> 5. Missing semicolon after `Found = 2 * a > b`

---

**II.**
```cpp
#include <iostream>
#include <conio>
const int N = 2,137;
void main
{
    int a, b, c, d;
    a = 3;
    b = 5;
    c = c + d;
    N = a + c;
    For (i = 3; i <= N; i++)
    {
        cout << i;
        i = i + 1;
    }
    getch();
}
```

> [!Tip]- Answer (Click to show)
> **Multiple Errors:**
> 1. Invalid constant declaration with comma
> 2. Missing parentheses `()` after `main`
> 3. Variables `c` and `d` used uninitialized
> 4. Attempt to modify constant `N`
> 5. `For` should be `for` (case sensitivity)
> 6. Variable `i` not declared

---

**III.**
```cpp
#include <iostream>
#include <conio>
void main()
{
    int count = 1, total;
    While (count <= 10);
    {
        total += count;
        Count++;
    }
    cout << "total = " << total << endl;
    getch();
}
```

> [!Tip]- Answer (Click to show)
> **Multiple Errors:**
> 1. `While` should be `while` (case sensitivity)
> 2. Extraneous semicolon after while condition
> 3. Variable `total` used uninitialized
> 4. `Count` should be `count` (case sensitivity)

---

**IV.**
```cpp
# include<iostream>
void main()
{
    int SomeVariable = 5;
    cout << "SomeVariable: " << SomeVariable << "\n";
    int *pVar = & SomeVariable;
    pVar = 9;
    cout << "SomeVariable: " << *pVar << "\n";
}
```

> [!Tip]- Answer (Click to show)
> **Multiple Errors:**
> 1. Space between `#` and `include`
> 2. Assigning integer value 9 to pointer variable `pVar` instead of using `*pVar = 9;`
> 3. After incorrect assignment, `*pVar` will cause undefined behavior

---

### **Question Seven: [20 Marks]**

**I. Write a program that prompts the user to input three numbers. The program should then output the numbers in ascending order.**  
*(6 Marks)*

> [!Tip]- Answer (Click to show)
> ```cpp
> #include <iostream>
> using namespace std;
> 
> int main() {
>     int num1, num2, num3;
>     
>     cout << "Enter three numbers: ";
>     cin >> num1 >> num2 >> num3;
>     
>     // Sort the numbers
>     if (num1 > num2) {
>         swap(num1, num2);
>     }
>     if (num1 > num3) {
>         swap(num1, num3);
>     }
>     if (num2 > num3) {
>         swap(num2, num3);
>     }
>     
>     cout << "Numbers in ascending order: " << num1 << " " << num2 << " " << num3 << endl;
>     
>     return 0;
> }
> ```



**II. By using a recursive function write a program that computes the sum of numbers from 1 to n.**  
*(6 Marks)*

> [!Tip]- Answer (Click to show)
> ```cpp
> #include <iostream>
> using namespace std;
> 
> int sumUpToN(int n) {
>     if (n == 1) {
>         return 1;
>     } else {
>         return n + sumUpToN(n - 1);
>     }
> }
> 
> int main() {
>     int n;
>     cout << "Enter a positive integer n: ";
>     cin >> n;
>     
>     if (n <= 0) {
>         cout << "Please enter a positive integer." << endl;
>     } else {
>         int result = sumUpToN(n);
>         cout << "Sum of numbers from 1 to " << n << " is: " << result << endl;
>     }
>     
>     return 0;
> }
> ```



**III. Write a C++ program that prompts the user to input the elapsed time for an event in seconds. The program then outputs the elapsed time in hours, minutes, and seconds.**  
*(8 Marks)*

> [!Tip]- Answer (Click to show)
> ```cpp
> #include <iostream>
> using namespace std;
> 
> int main() {
>     int totalSeconds;
>     
>     cout << "Enter the elapsed time in seconds: ";
>     cin >> totalSeconds;
>     
>     int hours = totalSeconds / 3600;
>     int remainingSeconds = totalSeconds % 3600;
>     int minutes = remainingSeconds / 60;
>     int seconds = remainingSeconds % 60;
>     
>     cout << "Elapsed time: " << hours << ":" << minutes << ":" << seconds << endl;
>     
>     return 0;
> }
> ```

---


**END OF EXAMINATION PAPER**
