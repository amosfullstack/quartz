

### **Question 1**
**Underline the line(s) which is incorrect (expected to produce error). State the type of error and then propose a solution by re-writing the line correctly, or any other line(s) associated to the incorrect line(s).**

**a.**
```cpp
#include<iostream>
using namespace std;
int main()
{
    int x,y;
    x = 7; y=8;
    if(x=y)
    {
        cout<<"They are equal\n";
    }
    else{
        cout<<"They are not equal";
        cout<<endl;
    }
}
```

> [!Tip]- Answer (Click to show)
> **Incorrect Line:** `if(x=y)`
>
> **Type of Error:** Logical Error (Assignment instead of comparison)
>
> **Corrected Line:**
> ```cpp
> if(x == y)
> ```



**b.**
```cpp
#include<iostream>
using namespace std;
int main()
{
    int x = 10;
    int y = 15;
    int ii = y%x
    cout<<n;
}
}
```

> [!Tip]- Answer (Click to show)
> **Incorrect Lines:**
> 1. `int ii = y%x` (Missing semicolon)
> 2. `cout<<n;` (Variable `n` is not declared)
> 3. Extra closing brace `}`
>
> **Type of Errors:** Syntax Error, Semantic Error
>
> **Corrected Lines:**
> ```cpp
> int ii = y % x;
> cout << ii;
> ```
> *And remove the extra closing brace*



**c.**
```cpp
#include<iostream>
using namespace std;
int main()
{
    int x = 4;
    int y = 0;
    int count = x/y;
    while(count<10)
    {
        cout<<"I'm a programmer\n";
    }
    cout<<count;
}
```

> [!Tip]- Answer (Click to show)
> **Incorrect Line:** `int count = x/y;`
>
> **Type of Error:** Runtime Error (Division by zero)
>
> **Corrected Line:** Initialize `y` to a non-zero value before division.
> ```cpp
> int y = 1; // or any other non-zero value
> int count = x / y;
> ```



**d.**
```cpp
#include<iostream>
using namespace std;
int Main()
{
    int a = 10;
    for(i, a >= 0; a = a-1)
    {
        cout << a;
        cout << " ";
    }
    return 0;
}
```

> [!Tip]- Answer (Click to show)
> **Incorrect Lines:**
> 1. `int Main()` (Should be `main`)
> 2. `for(i, a >= 0; a = a-1)` (Variable `i` not declared; incorrect for loop structure)
>
> **Type of Errors:** Syntax Error, Semantic Error
>
> **Corrected Lines:**
> ```cpp
> int main()
> {
>     int a = 10;
>     for(; a >= 0; a = a-1)
>     {
>         cout << a;
>         cout << " ";
>     }
>     return 0;
> }
> ```



**e.**
```cpp
/*A cpp program to print the word CPP three times */
#include<iostream>
using namespace std;
int main()
{
    for(int a = 0; a < 3; a++) ;
    {
        cout << "CPP";
        cout << endl;
    }
    return 0;
}
```

> [!Tip]- Answer (Click to show)
> **Incorrect Line:** `for(int a = 0; a < 3; a++) ;` (Extraneous semicolon)
>
> **Type of Error:** Logical Error (Loop body is empty due to semicolon)
>
> **Corrected Line:**
> ```cpp
> for(int a = 0; a < 3; a++)
> ```



**f.**
```cpp
/*A cpp program to print the sum of two numbers */
#include<iostream>
using namespace std;
int main()
{
    int a, b, c;
    a = 7;
    b = 8;
    a + b = c;
    cout << c;
    return 0;
}
```

> [!Tip]- Answer (Click to show)
> **Incorrect Line:** `a + b = c;`
>
> **Type of Error:** Semantic Error (Invalid assignment)
>
> **Corrected Line:**
> ```cpp
> c = a + b;
> ```

---

### **Question 2**
**Consider that the following programs are error free program. What are the outputs of these programs?**

**a.**
```cpp
#include<iostream>
using namespace std;
int main()
{
    int a = 4;
    int b = 2;
    cout<<++a<<", "<<a;
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
> `5, 5`
> `2, 3`
> `-5, 5`
> `3, 2`



**b.**
```cpp
#include<iostream>
using namespace std;
int main()
{
    int a = 4;
    int b = 2;
    int c = a + b;
    int d = a - b;
    int e = a * b;
    float f = a / b;
    int g = a % b;
    cout<<"The number: ";
    cout<<a<<b;
    cout<<c<<d<<e<<f<<g;
    return 0;
}
```

> [!Tip]- Output (Click to show)
> `The number: 426220`



**c.**
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



**d.**
```cpp
#include<iostream>
using namespace std;
int main()
{
    int x, y, *p, *q;
    x = 7; y = 8;
    p = &x; q = &y;
    cout<<*p<<*q<<endl;
    int *pq = p;
    p = q;
    q = pq;
    cout<<*p<<*q<<"\n";
    return 0;
}
```

> [!Tip]- Output (Click to show)
> `78`
> `87`



**e.**
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



**f.**
```cpp
#include<iostream>
using namespace std;
int main()
{
    int i = 1;
    for(; i < 10; i++)
    {
        cout<<i;
        i = i + 1;
    }
    return 0;
}
```

> [!Tip]- Output (Click to show)
> `13579`



### **Question 3**
**What is the output of the following piece of code?**

```cpp
//A program to know the operational of a while loop
#include<iostream>
using namespace std;
int main()
{
    //Variable initialization
    int sum = 0;
    
    //Data processing
    for(int i = 0; i<10; i++)
    {
        if(i%2 == 0)
        {
            sum = sum + i;
        }
    }
    //Data output
    cout<<"Jumla ya nanba: "<<sum;
    return 0;
}
```

> [!Tip]- Output (Click to show)
> `Jumla ya nanba: 20`

---

### **Question 4**
**Use switch case technique to write a program to print the name of all east Africa countries. For example, to print Tanzania, a user should enter the character T which is the first character of the name Tanzania. Consider the countries like Tanzania, Uganda, Kenya, Rwanda, and Sudan.**

> [!Tip]- Answer (Click to show)
> ```cpp
> #include <iostream>
> using namespace std;
> 
> int main() {
>     char choice;
>     
>     cout << "Enter the first letter of an East African country (T, U, K, R, S): ";
>     cin >> choice;
>     
>     switch(choice) {
>         case 'T':
>         case 't':
>             cout << "Tanzania" << endl;
>             break;
>         case 'U':
>         case 'u':
>             cout << "Uganda" << endl;
>             break;
>         case 'K':
>         case 'k':
>             cout << "Kenya" << endl;
>             break;
>         case 'R':
>         case 'r':
>             cout << "Rwanda" << endl;
>             break;
>         case 'S':
>         case 's':
>             cout << "Sudan" << endl;
>             break;
>         default:
>             cout << "Invalid choice! Please enter T, U, K, R, or S." << endl;
>     }
>     
>     return 0;
> }
> ```

---

### **Question 5**
**Use for loop, and array technique to write a program to capture, store and print the first name of your ten close relatives.**

> [!Tip]- Answer (Click to show)
> ```cpp
> #include <iostream>
> #include <string>
> using namespace std;
> 
> int main() {
>     const int NUM_RELATIVES = 10;
>     string relatives[NUM_RELATIVES];
>     
>     // Capture names
>     cout << "Enter the first names of your 10 close relatives:" << endl;
>     for(int i = 0; i < NUM_RELATIVES; i++) {
>         cout << "Relative " << (i + 1) << ": ";
>         cin >> relatives[i];
>     }
>     
>     // Print names
>     cout << "\nNames of your close relatives:" << endl;
>     for(int i = 0; i < NUM_RELATIVES; i++) {
>         cout << relatives[i] << endl;
>     }
>     
>     return 0;
> }
> ```


---


**END OF EXAMINATION PAPER**