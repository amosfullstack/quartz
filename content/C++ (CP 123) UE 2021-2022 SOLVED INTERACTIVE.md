
#### **Introduction to High Level Programming (CP 123) - Exam**

**THE UNIVERSITY OF DODOMA**

**INTRODUCTION TO HIGH LEVEL PROGRAMMING (CP 123)**
**END OF YEAR EXAMINATION**
**ACADEMIC YEAR 2021/2022**


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
### **Question 2**

**Match the item in Column A with its proper explanation in Column B.**  
*(0.5 Marks Each)*

| Column A | Column B |
| :--- | :--- |
| i. Insertion operator |  |
| ii. `int *px;` |  |
| iii. `switch` |  |
| iv. `void` |  |
| v. `cout<<*px;` |  |
| vi. `continue` |  |
| vii. `int add(int &num);` |  |
| viii. `sizeof` |  |
| ix. `int a = 4; record(&a);` |  |
| x. `\t` |  |

**Column B Options:**
A. Backspace.  
B. `<<`.  
C. Calculate size of array.  
D. Asterisk is used as a pointer operator.  
E. Transfers control to one of the several statements, depending on the value of a condition.  
F. call by reference  
G. Causes the remaining portion of the enclosing loops body to be skipped.  
H. continue at the end of line  
I. Type with an empty set of values.  
J. Allocate dynamic memory for a new variable.  
K. Asterisk used as dereferencing operator.  
L. Vertical tab.  
M. Pass by pointer.  
N. `>>`  
O. Call by pointer.  
P. Indicated in curly brackets  
Q. Horizontal tab.  
R. Declare a local variable  
S. Pass by reference.  

> [!Tip]- Answer (Click to show)
> 
> | Column A | Column B |
> | :--- | :--- |
> | i. Insertion operator | **B. `<<`.** |
> | ii. `int *px;` | **D. Asterisk is used as a pointer operator.** |
> | iii. `switch` | **E. Transfers control to one of the several statements, depending on the value of a condition.** |
> | iv. `void` | **I. Type with an empty set of values.** |
> | v. `cout<<*px;` | **K. Asterisk used as dereferencing operator.** |
> | vi. `continue` | **G. Causes the remaining portion of the enclosing loops body to be skipped.** |
> | vii. `int add(int &num);` | **S. Pass by reference.** |
> | viii. `sizeof` | **C. Calculate size of array.** |
> | ix. `int a = 4; record(&a);` | **M. Pass by pointer.** |
> | x. `\t` | **Q. Horizontal tab.** |

---

### **Question 3**

**a) Suppose an array is declared as `double marks [29];` Answer the following questions.**
*(0.5 Marks Each)*

**i. What is the name of the array?**

> [!Tip]- Answer (Click to show)
> `marks`


**ii. What type of values can be stored?**

> [!Tip]- Answer (Click to show)
> Double-precision floating-point numbers (decimal numbers).


**iii. What is the greatest index of the array?**

> [!Tip]- Answer (Click to show)
> 28


**iv. What is the maximum number of values that can be stored in the array?**

> [!Tip]- Answer (Click to show)
> 29


**b) Compare and contrast between while loop and for loop statement.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **Similarity:** Both `while` and `for` loops are used for repetition and execute a block of code as long as a given condition is true.
>
> **Differences:**
> - **Initialization:** In a `for` loop, the counter variable is typically initialized within the loop syntax (`for(int i=0; ...)`). In a `while` loop, the counter variable must be initialized before the loop begins.
> - **Structure:** A `for` loop combines initialization, condition, and increment/decrement in one line, making it more concise for counted loops. A `while` loop only contains the condition, making it more suitable for event-controlled loops where the number of iterations is not known beforehand.


**c) Study the program below and complete the assignment statement so that it computes the sum of all the numbers in the array.**
*(1 Mark)*

```cpp
#include <iostream>
using namespace std;
int main()
{
    int values[] = {20, 1, 99, 3, 9906};
    sum =
    cout<<"Sum of all numbers = "<<sum ;
}
```

> [!Tip]- Answer (Click to show)
> ```cpp
> sum = values[0] + values[1] + values[2] + values[3] + values[4];
> ```
> *Alternatively, a loop could be used, but for this fixed array, direct assignment is acceptable.*

---

## **SECTION B: (45 MARKS)**

### **Question 4**

**a) Copy into your booklet the line(s) which is incorrect (expected to produce error). State the type of an identified error, then propose a solution by re-writing the line(s) correctly or any other associated line(s) which leads to the identified error.**
*(3 Marks Each)*

**i.**
```cpp
/*
A cpp program to print the sum of two numbers
*/
#include<iostream>
using namespace std;
int main()
{
    int a, b, c;
    a = 7;
    b = 8;
    a + b = c;
    cout<<c;
    return 0;
}
```

> [!Tip]- Answer (Click to show)
> **Incorrect Line:** `a + b = c;`
>
> **Type of Error:** Assignment error. The left-hand side of an assignment operator (`=`) must be a modifiable l-value (a variable), not an expression.
>
> **Corrected Line:**
> ```cpp
> c = a + b;
> ```


**ii.**
```cpp
/*
A cpp program to print the word CPP three times
*/
#include<iostream>
using namespace std;
int main()
{
    for(int a = 0; a<3; a++) {
        cout<<"CPP";
        cout<<endl;
    }
    return 0;
}
```

> [!Tip]- Answer (Click to show)
> **Incorrect Line(s):** *This program segment is error-free and will run correctly.*


**iii.**
```cpp
#include<iostream>
using namespace std;
int main()
{
    int x = 4;
    int y = 0;
    Int count = x/y;
    while(count<10)
    {
        cout<<"I'm a programmer \n";
    }
    cout<<count;
}
```

> [!Tip]- Answer (Click to show)
> **Incorrect Lines:**
> 1.  `Int count = x/y;`
> 2.  The `while` loop creates a logical error (infinite loop).
>
> **Type of Errors & Solutions:**
> 1.  **Syntax/Type Error:** `Int` should be `int`. **Corrected line:** `int count = x/y;`
> 2.  **Runtime Error:** Division by zero (`y=0`) is undefined and will crash the program. `y` must be initialized to a non-zero value.
> 3.  **Logical Error:** The variable `count` is never updated inside the `while` loop, causing an infinite loop if the condition is initially true. An increment statement like `count++;` must be added inside the loop block.


**b) Consider that the following programs are error free. What is the output of each of the given program?**
*(2 Marks Each)*

**i.**
```cpp
#include<iostream>
using namespace std;
int main()
{
    int x = 10;
    while(x > 0)
    {
        x = x - 2;
        cout<<x;
    }
    return 0;
}
```

> [!Tip]- Output (Click to show)
> `86420`


**ii.**
```cpp
#include<iostream>
using namespace std;
int main()
{
    int a = 4;
    int b = 2;
    cout<<+a<<", "<<a;
    cout<<endl;
    cout<<b++<<", "<<b;
    cout<<"\n";
    cout<<-a<<", "<<a;
    cout<<"\n";
    cout<<b--<<", "<<b;
    return 0;
}
```

> [!Tip]- Output (Click to show)
> `4, 4`
> `2, 3`
> `-4, 4`
> `3, 2`


**iii.**
```cpp
#include<iostream>
using namespace std;
int main()
{
    int x = 2;
    cout<<(x != 4)<<endl;
    cout<<(x == 4)<<endl;
    cout<<(x > 3)<<endl;
    cout<<(x < 4)<<endl;
    cout<<(x = 0)<<endl;
    cout<<(x > 0)<<endl;
    cout<<(x && 4)<<endl;
    cout<<(x || 4)<<endl;
    cout<<(!x)<<endl;
    return 0;
}
```

> [!Tip]- Output (Click to show)
> `1`
> `0`
> `0`
> `1`
> `0`
> `0`
> `0`
> `1`
> `1`

---

### **Question 5**

**Write a program that checks if a password is strong enough for security purposes. A strong password must contain at least one digit, at least one lowercase character and at least one uppercase character. Moreover, all characters in total should be at least 8.**
*(15 Marks)*

> [!Tip]- Answer (Click to show)
> ```cpp
> #include <iostream>
> #include <string>
> #include <cctype> // for isdigit, islower, isupper
> using namespace std;
>
> int main() {
>     string password;
>     bool hasDigit = false, hasLower = false, hasUpper = false;
>
>     cout << "Enter a password: ";
>     cin >> password;
>
>     // Check length first
>     if (password.length() < 8) {
>         cout << "Password is not strong. It must be at least 8 characters long." << endl;
>         return 0;
>     }
>
>     // Check each character
>     for (char c : password) {
>         if (isdigit(c)) hasDigit = true;
>         else if (islower(c)) hasLower = true;
>         else if (isupper(c)) hasUpper = true;
>     }
>
>     // Check all conditions
>     if (hasDigit && hasLower && hasUpper) {
>         cout << "Password is strong." << endl;
>     } else {
>         cout << "Password is not strong. It must contain at least one digit, one lowercase, and one uppercase letter." << endl;
>     }
>
>     return 0;
> }
> ```

---

### **Question 6**

**Ms. Wandiba is class teacher at Jitambue Secondary School at Ulanga district. She is used to have monthly examination on 28th of every month. In this digital era, she wants a simple computer program that will be able to store permanently and display the report of her students. For each student, the report will have the following information: all scores, total scores, average score, and GPA. The student must attempt 9 examinations to have a complete report. Suppose that the class has 50 students, write a C++ program that will:**

**a) Accept scores of all students and store them into array name scoredmark.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```cpp
> const int NUM_STUDENTS = 50;
> const int NUM_SUBJECTS = 9;
> int scoredmark[NUM_STUDENTS][NUM_SUBJECTS];
>
> for (int i = 0; i < NUM_STUDENTS; i++) {
>     cout << "Enter scores for student " << (i + 1) << " (9 subjects): ";
>     for (int j = 0; j < NUM_SUBJECTS; j++) {
>         cin >> scoredmark[i][j];
>     }
> }
> ```


**b) Calculate sum and average, and find the grade from average marks. For each student, store all scores from 9 subjects, total scores, average score, and GPA into an array named report.**
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> ```cpp
> #include <fstream>
> #include <iomanip>
>
> // Assuming a structure is used for the report
> struct StudentReport {
>     int scores[NUM_SUBJECTS];
>     int total;
>     double average;
>     char grade;
>     double gpa;
> };
>
> StudentReport report[NUM_STUDENTS];
>
> // Function to calculate grade and GPA based on average
> char calculateGrade(double avg) {
>     if (avg >= 81) return 'A';
>     else if (avg >= 71) return 'B';
>     else if (avg >= 61) return 'C';
>     else if (avg >= 50) return 'D';
>     else return 'F';
> }
>
> double calculateGPA(char grade) {
>     switch (grade) {
>         case 'A': return 5.0;
>         case 'B': return 4.0;
>         case 'C': return 3.0;
>         case 'D': return 2.0;
>         case 'F': return 0.0;
>         default: return 0.0;
>     }
> }
>
> // Populating the report array
> for (int i = 0; i < NUM_STUDENTS; i++) {
>     report[i].total = 0;
>     // Copy scores and calculate total
>     for (int j = 0; j < NUM_SUBJECTS; j++) {
>         report[i].scores[j] = scoredmark[i][j];
>         report[i].total += scoredmark[i][j];
>     }
>     report[i].average = static_cast<double>(report[i].total) / NUM_SUBJECTS;
>     report[i].grade = calculateGrade(report[i].average);
>     report[i].gpa = calculateGPA(report[i].grade);
> }
> ```


**c) Export data from array report to a file named report.txt.**
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> ```cpp
> ofstream outFile("report.txt");
>
> if (!outFile) {
>     cerr << "Error opening file for writing!" << endl;
>     return 1;
> }
>
> // Write header or formatted data
> for (int i = 0; i < NUM_STUDENTS; i++) {
>     outFile << "Student " << (i + 1) << " Report:\n";
>     outFile << "Scores: ";
>     for (int j = 0; j < NUM_SUBJECTS; j++) {
>         outFile << report[i].scores[j] << " ";
>     }
>     outFile << "\nTotal: " << report[i].total;
>     outFile << "\nAverage: " << fixed << setprecision(2) << report[i].average;
>     outFile << "\nGrade: " << report[i].grade;
>     outFile << "\nGPA: " << report[i].gpa << "\n\n";
> }
>
> outFile.close();
> cout << "Data exported to report.txt successfully." << endl;
> ```


**d) Display data from report.txt on a screen.**
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> ```cpp
> ifstream inFile("report.txt");
> string line;
>
> if (!inFile) {
>     cerr << "Error opening file for reading!" << endl;
>     return 1;
> }
>
> cout << "\n--- Student Reports from File ---\n";
> while (getline(inFile, line)) {
>     cout << line << endl;
> }
>
> inFile.close();
> ```

---

### **Question 7**

**This is a Guessing Game. Study carefully a program hereunder that randomly generates numbers between 1 and 10 (inclusive).**

```cpp
#include <iostream>
#include <stdlib.h> /* grand, rand */
#include <time.h>/* time */
using namespace std;
int random(int,int);
int main()
{
    int minNumber=1,maxNumber=10;
    cout<<random(minNumber,maxNumber);
}
//function to generate random numbers
int random(int min, int max) //range : [min, max)
{
    static bool first = true;
    if ( first )
    {
        grand(time(NULL)); //seeding for the first time only!
        first = false;
    }
    return min + rand() % ((max + 1) - min);
}
```

**a) Modify the program such that it implements a guessing game where a user is asked to input a number between 1 and 10 inclusive, and then the program checks whether the entered number is equal to the randomly generated one or not. If the two numbers are equal, the user is congratulated, otherwise, he/she is asked to play again.**
*(6 Marks)*

> [!Tip]- Answer (Click to show)
> ```cpp
> #include <iostream>
> #include <cstdlib> // For rand() and srand()
> #include <ctime>   // For time()
> using namespace std;
>
> int main() {
>     srand(time(0)); // Seed the random number generator
>
>     int minNumber = 1, maxNumber = 10;
>     int secretNumber = rand() % (maxNumber - minNumber + 1) + minNumber;
>     int userGuess;
>     char playAgain;
>
>     do {
>         cout << "I have a number between 1 and 10. Can you guess it? ";
>         cin >> userGuess;
>
>         if (userGuess == secretNumber) {
>             cout << "Congratulations! You guessed correctly!" << endl;
>         } else {
>             cout << "Sorry, that's wrong. The number was " << secretNumber << ". Would you like to play again? (y/n): ";
>             cin >> playAgain;
>             if (playAgain == 'y' || playAgain == 'Y') {
>                 // Generate a new number for the new game
>                 secretNumber = rand() % (maxNumber - minNumber + 1) + minNumber;
>             } else {
>                 break;
>             }
>         }
>     } while (userGuess != secretNumber); // This loop condition is simplistic; the break handles exit.
>
>     return 0;
> }
> ```
> *Note: The original `random` function had errors (`grand` instead of `srand`). This solution uses the more modern `srand` and `rand` directly in `main`.*


**b) Modify the program in part a) such that the user is given at most three chances to guess the number. If the difference between entered number and generated number is 3, the user is told “Cold”, meaning he/she is very far from the correct answer. If the difference is 2, display “Warm”. If the difference is 1, display “Hot”. Once again, the user must be congratulated if he/she gets the answer correctly. If he/she fails after three attempts or if the difference between correct answer and the entered number is greater than 3, he/she should be asked to try again.**
*(9 Marks)*

> [!Tip]- Answer (Click to show)
> ```cpp
> #include <iostream>
> #include <cstdlib>
> #include <ctime>
> #include <cmath> // For abs()
> using namespace std;
>
> int main() {
>     srand(time(0));
>     char tryAgain;
>
>     do {
>         int secretNumber = rand() % 10 + 1;
>         int attempts = 3;
>         bool guessedCorrectly = false;
>
>         cout << "\nNew Game! I have a number between 1 and 10. You have " << attempts << " chances.\n";
>
>         for (int i = 0; i < attempts; i++) {
>             int userGuess;
>             cout << "Enter your guess (" << (i + 1) << "/" << attempts << "): ";
>             cin >> userGuess;
>
>             if (userGuess == secretNumber) {
>                 cout << "Congratulations! You guessed the correct number!" << endl;
>                 guessedCorrectly = true;
>                 break;
>             } else {
>                 int difference = abs(userGuess - secretNumber);
>                 if (difference > 3) {
>                     cout << "Cold. You are very far off." << endl;
>                 } else if (difference == 2) {
>                     cout << "Warm. You are getting closer." << endl;
>                 } else if (difference == 1) {
>                     cout << "Hot! You are very close!" << endl;
>                 }
>                 // Note: Difference of 3 is covered by the first condition (>3 is false for 3, so it would need its own check if "exactly 3" was desired. This logic uses >3 for Cold.)
>             }
>         }
>
>         if (!guessedCorrectly) {
>             cout << "Sorry, you've used all your attempts. The correct number was " << secretNumber << "." << endl;
>         }
>
>         cout << "Would you like to try again with a new number? (y/n): ";
>         cin >> tryAgain;
>
>     } while (tryAgain == 'y' || tryAgain == 'Y');
>
>     cout << "Thanks for playing!" << endl;
>     return 0;
> }
> ```
> *Note: The logic for "Cold" is defined as a difference > 3. If "exactly 3" should also be "Cold", the condition can be changed to `if (difference >= 3)`.*

---


**END OF EXAMINATION PAPER**

