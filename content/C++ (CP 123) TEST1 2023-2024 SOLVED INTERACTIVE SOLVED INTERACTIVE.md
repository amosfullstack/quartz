
#### **Introduction to High Level Programming (CP 123) - Exam**

**CP 123: INTRODUCTION TO HIGH LEVEL PROGRAMMING LANGUAGE**

**TEST 1**  
**TIME: 40 Minutes**  
**15 MARKS**

*Choose the most correct answer and write its letter on the box provided at the end of the questions. Each question weighs 0.5 marks.*

---

**1. What is a program in computer science?**  
A. a planned series of events, a schedule  
B. a translated language that is easy for the computer to understand  
C. a sequence of instructions that specifies how to perform a computation  
D. a general process for solving a category of problems  

> [!Tip]- Answer (Click to show)
> **C. a sequence of instructions that specifies how to perform a computation**

---

**2. What is the function of the compiler?**  
A. It loads the program from its saved location and makes the computer execute it.  
B. It reads a high-level program and translates everything at once, before executing any of the commands.  
C. It translates the program from the low-level language you coded in to a high-level language that the computer can understand.  
D. It translates the program line-by-line, alternately reading lines and carrying out commands.  

> [!Tip]- Answer (Click to show)
> **B. It reads a high-level program and translates everything at once, before executing any of the commands.**

---

**3. What is the difference between source code and object code?**  
A. Source code can contain simple things like variables and values. Object code can contain more complex objects like data structures.  
B. Object code can contain simple things like variables and values. Source code can contain more complex objects like data structures.  
C. Object code is the code that your program is written in. Source code is the translated version of this code that the computer can understand.  
D. Source code is the code that your program is written in. Object code is the translated version of this code that the computer can understand.  

> [!Tip]- Answer (Click to show)
> **D. Source code is the code that your program is written in. Object code is the translated version of this code that the computer can understand.**

---

**4. What type of error would the following code cause? Assume you are trying to calculate the volume of a cylinder:**  
```cpp
int radius = 7;
int height = 8;
double volume = 3.14 * radius * height;
```  
A. syntax error  
B. run-time error  
C. semantic error  
D. logical error  

> [!Tip]- Answer (Click to show)
> **D. logical error**

---

**5. What type of error would the following generate? Assume you are trying to calculate the volume of a cylinder:**  
```cpp
int radius = 7;
int height = 8
double volume = 3.14 * r * r * height;
```  
A. syntax error  
B. run-time error  
C. semantic error  
D. no error  

> [!Tip]- Answer (Click to show)
> **A. syntax error**

---

**6. Which of the following is true about writing a program? (Three responses are correct)**  
A. The compiler ignores anything after //.  
B. There is no limit the number of statements you can put in main.  
C. Program execution begins at the first line of code.  
D. main is enclosed by squiggly brackets { }.  
E. The end of each statement is marked with a colon (:).  

> [!Tip]- Answer (Click to show)
> **A, B, D**

---

**7. What are the basic functions that appear in every programming language? (Four responses are correct)**  
A. math operations  
B. debugging  
C. input/output from the terminal and saved files  
D. testing for conditions  
E. repetition  

> [!Tip]- Answer (Click to show)
> **A, C, D, E**

---

**8. Which is true about programming languages? (Four responses are correct)**  
A. Low-level languages are only used for a few special applications.  
B. Programs written in low-level languages must be translated before they can be run.  
C. It's easier to program in a high-level language than a low-level language.  
D. Computers can only execute programs written in low-level languages.  
E. High-level languages can run on many different kinds of computers without an issue.  

> [!Tip]- Answer (Click to show)
> **A, C, D, E**

---

**9. How many types of variables can be created in C/C++ programs**  
A. 1  
B. 2  
C. 3  
D. 4  

> [!Tip]- Answer (Click to show)
> **C. 3** (Local, Global, Static)

---

**10. You were asked to parse through your program, what should this entail?**  
A. You should walk through your program line by line to make sure it's that your code doing what it is supposed to.  
B. You should search through your program for syntax errors.  
C. You should translate your program to object code.  
D. You should run your program and check for run-time errors.  

> [!Tip]- Answer (Click to show)
> **A. You should walk through your program line by line to make sure it's that your code doing what it is supposed to.**

---

**11. Global variables are created in:**  
A. ROM  
B. Cache  
C. Hard disk  
D. RAM  

> [!Tip]- Answer (Click to show)
> **D. RAM**

---

**12. Which of the following type of variables hold their data throughout the program executioner? (Two responses are correct)**  
A. Local  
B. Static  
C. Global  
D. Register  

> [!Tip]- Answer (Click to show)
> **B, C** (Static and Global)

---

**13. Variable has the following properties**  
A. Name  
B. Address  
C. Type  
D. Value  
E. Reference  

> [!Tip]- Answer (Click to show)
> **A, B, C, D**

---

**14. What is the output of this program?**  
```cpp
#include <iostream>
int main() {
    int x = 10;
    float x = 10.0;
    cout<<x;
    return 0;
}
```  
A. 10.1  
B. Compilations Error  
C. 10.0  
D. 10  

> [!Tip]- Answer (Click to show)
> **B. Compilations Error**

---

**15. What is the output of this program?**  
```cpp
#include <iostream>
int main() {
    int i, a;
    for(i = 0; i < 5; i++)
    {
        a = i;
    }
    cout<<a;
    return 0;
}
```  
A. Syntax error in declaration of a  
B. No errors, program will show the output 5  
C. Redeclaration of a in same scope throws error  
D. a is out of scope when cout is called  
E. No errors, program will show the output 0  

> [!Tip]- Answer (Click to show)
> **B. No errors, program will show the output 5**

---

**16. What is the output of this program?**  
```cpp
#include <iostream>
int main() {
    int p, q, r, s;
    p = 1;
    q = 2;
    r = p, q;
    s = (p, q);
    cout<<p <<q;
    return 0;
}
```  
A. p=1 q=1  
B. p=1 q=2  
C. p=2 q=2  
D. Invalid Syntax  

> [!Tip]- Answer (Click to show)
> **B. p=1 q=2**

---

**17. Which of the following is the correct syntax of including a user defined header files in C++?**  
A. `#include [userdefined]`  
B. `#include "userdefined"`  
C. `#include <userdefined.h>`  
D. `#include <userdefined>`  

> [!Tip]- Answer (Click to show)
> **B. #include "userdefined"**

---

**18. Which of the following is used for comments in C++?**  
A. /* comment */  
B. // comment */  
C. // comment  
D. both // comment or /* comment */  

> [!Tip]- Answer (Click to show)
> **D. both // comment or /* comment */**

---

**19. Which of the following user-defined header file extension used in c++?**  
A. hg  
B. cpp  
C. h  
D. hf  

> [!Tip]- Answer (Click to show)
> **C. h**

---

**20. Which of the following is a correct identifier in C++?**  
A. VAR_1234  
B. $var_name  
C. 7VARNAME  
D. 7var_name  

> [!Tip]- Answer (Click to show)
> **A. VAR_1234**

---

**21. What happens if the following C++ statement is compiled and executed?**  
```cpp
int *ptr = NULL;
delete ptr;
```  
A. The program is not semantically correct  
B. The program is compiled and executed successfully  
C. The program gives a compile-time error  
D. The program compiled successfully but throws an error during run-time  

> [!Tip]- Answer (Click to show)
> **B. The program is compiled and executed successfully**

---

**22. What will be the output of the following C++ code?**  
```cpp
#include <iostream>
#include <string>
using namespace std;
int main(int argc, char const *argv[]) {
    char s1[6] = "Hello";
    char s2[6] = "World";
    char s3[12] = s1 + " " + s2;
    cout<<s3;
    return 0;
}
```  
A. Hello  
B. World  
C. Error  
D. Hello World  

> [!Tip]- Answer (Click to show)
> **C. Error**

---

**23. What will be the output of the following C++ code?**  
```cpp
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;
int main() {
    string s = "spaces in text";
    s.erase(remove(s.begin(), s.end(), ' ', ), s.end() );
    cout << s << endl;
}
```  
A. spacesintext  
B. spaces in text  
C. spaces  
D. spaces in  

> [!Tip]- Answer (Click to show)
> **A. spacesintext**

---

**24. What is the value of p in the following C++ code snippet?**  
```cpp
#include <iostream>
using namespace std;
int main() {
    int p;
    bool a = true;
    bool b = false;
    int x = 10;
    int y = 5;
    p = ((x | y) + (a + b));
    cout << p;
    return 0;
}
```  
A. 12  
B. 0  
C. 2  
D. 16  

> [!Tip]- Answer (Click to show)
> **D. 16**

---

**25. Which of the following correctly declares an array in C++?**  
A. array[10];  
B. array array[10];  
C. int array;  
D. int array[10];  

> [!Tip]- Answer (Click to show)
> **D. int array[10];**

---

**26. Which is more effective while calling the C++ functions?**  
A. call by object  
B. call by pointer  
C. call by value  
D. call by reference  

> [!Tip]- Answer (Click to show)
> **D. call by reference**

---

**27. What will be the output of the following C++ program?**  
```cpp
#include <iostream>
#include <string>
#include <<string>
using namespace std;
int main(int argc, char const *argv[])
{
    const char *a = "Hello\0World";
    cout<<a;
    return 0;
}
```  
A. Hello  
B. World  
C. Error  
D. Hello World  

> [!Tip]- Answer (Click to show)
> **A. Hello**

---

**28. What will be the output of the following C++ code?**  
```cpp
#include <iostream>
using namespace std;
int main()
{
    int a = 5;
    float b;
    cout << sizeof(++a + b);
    cout << a;
    return 0;
}
```  
A. 2 5  
B. 4 5  
C. 4 6  
D. 2 6  

> [!Tip]- Answer (Click to show)
> **B. 4 5**

---

**29. Which of the following symbol is used to declare the preprocessor directives in C++?**  
A. $  
B. ^  
C. #  
D. *  

> [!Tip]- Answer (Click to show)
> **C. #**

---

**30. Which of the following is the address operator?**  
A. @  
B. #  
C. &  
D. %  

> [!Tip]- Answer (Click to show)
> **C. &**

---

**31. For inserting a new line in C++ program, which one of the following statements can be used?**  
A. \n  
B. \r  
C. \a  
D. \t  

> [!Tip]- Answer (Click to show)
> **A. \n**

---

**32. Using which of the following data type can 19.54 be represented?**  
A. Integer  
B. Double  
C. Character  
D. Boolean  

> [!Tip]- Answer (Click to show)
> **B. Double**

---

**33. Find the output of the following program.**  
```cpp
int main()
{
    int a = 10, b, c;
    b = a++;
    c = a;
    cout << a << " " << b << " " << c << endl;
}
```  
A. 10 11 11  
B. 11 11 11  
C. 11 10 11  
D. 10 10 10  

> [!Tip]- Answer (Click to show)
> **C. 11 10 11**

---

**34. Find the output of the following program.**  
```cpp
int main() {
    int a, b = 10;
    a = 95 / 10;
    cout << a << endl;
}
```  
A. 9  
B. 9.5  
C. 10  
D. 9.0  

> [!Tip]- Answer (Click to show)
> **A. 9**

---

**35. Find the output of the following program.**  
```cpp
int main() {
    int i = (1, 2, 3);
    cout << i << endl;
}
```  
A. 1  
B. 2  
C. 3  
D. Error  

> [!Tip]- Answer (Click to show)
> **C. 3**

---

**36. Find the output of the following program.**  
```cpp
int main() {
    cout << -10 - 10 -10;
}
```  
A. 0  
B. -30  
C. 30  
D. 20  

> [!Tip]- Answer (Click to show)
> **B. -30**

---

**37. How many times will the print statement be executed?**  
```cpp
int main() {
    int i = 0;
    label:
    cout << "Interviewbit";
    i++;
    if(i < 3){
        goto label;
    }
}
```  
A. 1 time  
B. 2 times  
C. 3 times  
D. Error  

> [!Tip]- Answer (Click to show)
> **C. 3 times**

---

**38. Fill in the missing pieces.** *(0.5 Marks Each)*  
```cpp
#include < ......(a) ......
using namespace ...... (b) ......
int ...... (c) ...... () {
    int age;
    cin>>...... (d) ......
    cout << "Hello, World!" << endl ...... (e) ......
    cout<<"My age is "<<age;
    return ...... (f) ......
}
```

> [!Tip]- Answer (Click to show)
> **(a) iostream**  
> **(b) std**  
> **(c) main**  
> **(d) age**  
> **(e) ;**  
> **(f) 0**