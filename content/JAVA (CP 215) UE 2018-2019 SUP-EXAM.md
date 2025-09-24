#### Object Oriented Programming Exam - CP 215

THE UNIVERSITY OF DODOMA  
**COLLEGE OF INFORMATICS AND VIRTUAL EDUCATION**  
**Department of Computer Science and Engineering**

**UNDERGRADUATE SUPPLEMENTARY/SPECIAL EXAMINATION 2018/2019**

**CS 213: OBJECT ORIENTED PROGRAMMING IN JAVA**

**Date:** 28th October, 2019  
**Duration:** 3 hours  
**Start:** 03:30 PM  
**End:** 06:30 PM

**Instructions:**  
1. The examination consists of six (6) questions.  
2. Answer all questions from section A and two questions from section B  
3. All University of Dodoma examination regulations apply

---

## SECTION A (48 MARKS)

### Question One:

a) Considering a piece of code given below, create a construct for initializing properties of class B.  
*(5 Marks)*

```
class A:
    [B]
    public class b:
    [B]
    //
class B extends A:
    //
```

b) In the following program, called Compendicant, what is the value of each after executing each numbered line?  
*(5 Marks)*

```
public class Compendicant:
    private order version(original) error:
    String original = "software"
    String order version = new Compendicant("it");
    int index = original.indexOf(0);

    /*1*/  result.setChar(10, original.close(10));
    /*2*/  result.setChar(11, original.close(low(equal.length)));
    /*3*/  result.setFill("original.close(10));
    /*4*/  result.append(original.subscript() d);
    /*5*/  result.search("current.subscript(index, index=2): +");

    System.out.println(result);
```

---
### Question Two

Read carefully the following program then answer the questions that follow: - comments indicate where missing components of the program are to be placed.

```java
public class MainClass {
    public static void main(String[] args){
        // (2) print the greeting;
        // (3) construct a MyClass object called myObject
        // (4) update()
    }
}

class MyClass{
    // (1) definition of MyClass constructor
    public static void greeting(){
        // definition of greeting;
    }
    public void update(int num, String title){
        // definition of update
    }
    public void print(){
        // definition of print
    }
    private int numOfItems;
    private String reportTitle;
}
```

a. Suppose you are writing the definition of MyClass (line (1) above). Write a java statement(s) showing a constructor definition.
*(4 Marks)*

b. Suppose you wish to construct a MyClass object called myObject at line (3) above. Write a correct java statement that will do this.
*(4 Marks)*

c. Suppose you wish to call the method that prints the greeting, at line (2) above. Write a statement(s) which will call this method correctly.
*(4 Marks)*

d. Suppose you wish to call the update method at line (4) above. Write a correct java statement that will do this.
*(4 Marks)*

---

### Question Three

a) Identify and describe the error in the following program.
*(7 Marks)*

```java
import java.io.*;
class Parent {
    void message(){
        System.out.println("Parent");
    }
}

public class Child extends Parent {
    @Override
    void message() throws SQLException{
        System.out.println("Child");
    }
    
    public static void main(String[] args){
        Parent p = new Child();
        p.message();
    }
}
```

b) Indicate the output of the following program.
*(7 Marks)*

```java
public class Cive {
    int x = 0;
    
    int f(int x){
        return x * x;
    }
    
    int z = f(x+1);
    
    public static void main(String args[]){
        Cive c = new Cive();
        System.out.print(c.z);
    }
}
```


---

## SECTION B (60 MARKS)

### Question Four

a) Assume that you have a MySQL database named EmployeeDB running on localhost server and it has a table called EmployeeInfo with four columns: p_id, first_name, last_name and phone_number. Write a Java program that will establish JDBC connection to the database and query the database's EmployeeInfo table to display first name, last name and phone number of the employees. Exception handling is inevitable for database connectivity, therefore provide try-catch-finally block for exception handling where appropriate. Given the driver class is com.mysql.jdbc.Driver, the port number is 3306. Use root for both username and password.*(15 Marks)*

b) Write a java app that contains classes *Polygon*, *Rectangle*, *Triangle* and *myMain*. Class *Polygon* declares instance variables *height* and *width* and defines a method *setValues* for setting height and width values supplied by user. It should also define abstract method *area*. Class *Rectangle* extends class *Polygon* and implements method *area* for calculating and returning area of a rectangle. Class *Triangle* extends class *Polygon* and implements method *area* for calculating and returning area of a triangle. Class *myMain* defines main method, creates Rectangle and Triangle's objects and calls the methods for demonstrating their capabilities.*(15 Marks)*

---
## Question Five

a) Thoroughly read the following problem statement then answer the following questions:

You are required to create a Swing GUI application that will convert degree Celsius (°C) to degree Fahrenheit (°F). The application should have a JTextField labeled Celsius, another JTextField labeled Fahrenheit and a JButton named Convert. The application should allow a user to enter degree Celsius on its JTextField and whenever the user clicks Convert button, the application should convert degree Celsius to degree Fahrenheit and display it on Fahrenheit's JTextField.

Use the following formula in your conversion from Celsius (°C) to Fahrenheit (°F):  
**F = (°C × 9/5) + 32**

i. Use anonymous class in the implementation of event handling.*(15 Marks)*

ii. Use inner class in the implementation of event handling.*(15 Marks)*

---

## Question Six

a) Create a Java program for registering electorates. The program has to use the method called ageValidator for validating the age of the electorates. In case the age supplied is below 18 years, the method has to throw (using throw keyword) the custom exception called CiveException.*(15 Marks)*

b) Using Swing graphical user interface components, write a java program that accepts radius of a circle from the user and outputs area of the circle to the screen. User has to input the radius through input dialog window and the program has to output the area through the output dialog window. Use the following formula to calculate the area of a circle: area = 3.14 × radius × radius.*(15 Marks)*