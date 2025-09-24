#### Object Oriented Programming Exam - CP 215

THE UNIVERSITY OF DODOMA  
**COLLEGE OF INFORMATICS AND VIRTUAL EDUCATION**  
**SCHOOL OF INFORMATICS**

**UNDERGRADUATE SUPPLEMENTARY/SPECIAL EXAMINATION 2017/2018**

**CS 213: OBJECT ORIENTED PROGRAMMING IN JAVA**

**Date:** 24th September, 2018  
**Time Allocated:** 3 Hours

**Instructions:**  
1. This examination consists of six (6) questions.  
2. Answer all questions from section A and two questions from section B.  
3. All University of Dodoma examination regulations apply.

---

## SECTION A (60 MARKS)

### Question One

a) What is the output of the program in Table 1?
*(12 Marks)*

**Table 1: Java program**
```java
public class Exceptions{
    public static void main(String[] args){
        String b[] = new String[3];
        try{
            System.out.println(b[1]);
            int x = 5/0;
        }catch(ArrayIndexOutOfBoundsException e){
            System.err.println("errorA");
        }catch(ArithmeticException ee){
            System.err.println("errorB");
        }
    }
}
```

b) The program in Table 2 has error(s). Identify and describe the error.
*(8 Marks)*

**Table 2: Java program**
```java
abstract class Student {
    public abstract double getPassMark();
}

class DiplomaStudent extends Student{
    private final double passMark;
    private final double diplomaPassMark;
    
    public DiplomaStudent(double passMark, double diplomaPassMark){
        this.passMark = passMark;
        this.diplomaPassMark = diplomaPassMark;
    }
    
    public double getDiplomaPassMark(){
        return diplomaPassMark;
    }
    
    public double getPassMark(){
        return passMark;
    }
}

public class EmployeeTest {
    public static void main(String args[]){
        Student employees = new DiplomaStudent(50.0, 60.0);
        System.out.printf("pass mark: %.2f%n", employees.getPassMark());
        System.out.printf("pass mark: %.2f%n", employees.getDiplomaPassMark());
    }
}
```

---

### Question Two

a) Write a method header for each of the following methods:
*(3 Marks Each)*

i. Method basket, which contains a String parameter called cup, and does not return any value.

ii. Method dodoma, which takes a double-precision, floating-point argument radius and returns a double-precision, floating-point result.

iii. Method smallest, which does not take any arguments but it returns an integer.

iv. Method instructions, which does not take any arguments and does not return a value.

v. Method intToFloat, which takes integer argument number and returns a float.

b) What will be the output of the program in Table 3?
*(5 Marks)*

**Table 3: Java program**
```java
public class Siri {
    public static void main(String args[]) {
        System.out.println("Was it a car or a cat I saw?".substring(22, 27));
    }
}
```

---

### Question Three

a) Write a simple java program to demonstrate the concept of constructors overloading. The program should consist of class called Student, instance variables named studentName, registrationNumber, Age and three constructors. Each constructor should be responsible to initialize one instance variable. Finally create a driver class (a class containing main method) to demonstrate the work of Student class.
*(15 Marks)*

b) What will be the output of the program in Table 4?
*(5 Marks)*

**Table 4: Java program**
```java
class A{}
class B extends A{}
class C extends B{}
class D extends C{}

public class Test{
    public static void main(String args[]){
        A a = new A();
        B b = new B();
        C c = new C();
        D d = new D();
        System.out.println(a instanceof D);
        System.out.println(a instanceof A);
        System.out.println(d instanceof A);
    }
}
```

---

## SECTION B (40 MARKS)

### Question Four

<span style="color:rgb(255, 148, 148)">QUESTION 4 MISSING</span> : <span style="color:rgb(0, 176, 80)">Submit if Available</span>
### Question Five
*(20 Marks)*

Write a program that uses an array of Shape references to objects of each concrete class in the hierarchy. The program should print a text description of the object to which each array element refers. Also, in the loop that processes all the shapes in the array, determine whether each shape is a TwoDimensionalShape or a ThreeDimensionalShape. If it's a TwoDimensionalShape, display its area. If it's a ThreeDimensionalShape, display its area and volume.

**Figure 1: Inheritance hierarchy**
![[inhertancediagramsup2018.png]]

---

### Question Six
*(20 Marks)*

a) Write a program called StudentMarks, which prompts a user for the number of students, reads that number from the keyboard, and assign it in an integer variable called numStudents. The program shall then prompt the user for the marks of each student and assign them in an integer array called marksArray. Your program shall check that the marks are in the range between 0 and 100.
*(10 Marks)*

b) Consider the classes Student and Address. Every student has an address, therefore the relationship between student and address is a Has-A relationship. But if you consider it in the reverse, it would not make any sense as it is not necessary for the Address to contain a Student. Write three java Classes to implement this relationship. Note that Address may contain street number, city and country while student class may have address, student name and student id.
*(10 Marks)*

---

**END OF EXAMINATION PAPER**