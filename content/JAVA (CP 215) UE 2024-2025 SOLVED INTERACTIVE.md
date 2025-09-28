#### Object Oriented Programming Exam - CP 215

**THE UNIVERSITY OF DODOMA**
**COLLEGE OF INFORMATICS AND VIRTUAL EDUCATION**
**Department of Computer Science and Engineering**

**End of Semester One University Examination for the 2024/2025 Academic Year**

*   **Course Name:** Object Oriented Programming in Java
*   **Paper Code Number:** CP 215
*   **Date of Examination:** 27th February, 2025
*   **Time:** 11:45 – 14:45
*   **Duration:** 3 Hours
*   **Venue(s):** AUDITORIUM, EDU-LR1, CHAS_Library_1
*   **Sitting Programme(s):** BSc.SE2, HIS2, IS2, IDIT2, MTA2, CS2, CNISE2, CSDFE2, TE2, DCBE2, CE2, BIS2&BED ICT2.

---

## **SECTION A: (40 MARKS)**
*Answer ALL questions in this section.*

### **Question One** (1 Mark Each)
*Read each question carefully and choose the most correct response.*

**i.** Defining a class so that the implementation of the data and methods of the class are not known to the programmers who use the class is called:
- A. Data Binding
- B. Polymorphism
- C. Encapsulation
- D. Inheritance
- E. Composition

> [!Tip]- Answer (Click to show)
> **C. Encapsulation**



**ii.** If a local variable of a method `shop()` belonging to a class called Walmart has the same name as a data member of Walmart, which value is used when `shop()` is executing?
- A. the local variable’s
- B. the class variable’s
- C. the data member’s
- D. this would cause a compiler error
- E. both local variable’s and data member’s

> [!Tip]- Answer (Click to show)
> **A. the local variable’s**



**iii.** What will be printed?

```java
public class Quest {
    public Quest() { }
    public void display( String goal, String days, int adj ) {
        System.out.println( "I am on a "+adj+" quest for the " +goal+" in "+days+" days." );
    }
    public static void main( String[] args ) {
        String adj = "perilous", goal = "sticky wicket";
        int days = 3;
        Quest q = new Quest();
        q.display( adj, goal, days );
    }
}
```

- A. I am on a perilous quest for the 3 days.
- B. I am on a sticky wicket quest for the perilous in 3 days.
- C. I am on a perilous quest for the sticky wicket in 3 days.
- D. I am on a 3 quest for the perilous in sticky wicket days.
- E. I am on a perilous quest for the 3 in sticky wicket days.

> [!Tip]- Answer (Click to show)
> **B. I am on a sticky wicket quest for the perilous in 3 days.** (The arguments are passed in the order `adj, goal, days`, which correspond to the parameters `goal, days, adj`.)



**iv.** Complete the following Java statement to allow the instance of the Scanner class to read keyboard input.
`Scanner keyboard = new Scanner(______);`
- A. System.out
- B. System.in
- C. System.keyboard
- D. System.input
- E. System

> [!Tip]- Answer (Click to show)
> **B. System.in**



**v.** Which subclass of Throwable is an exception checked at compile time?
- A. NullPointerException
- B. RuntimeException
- C. IOException
- D. ArrayIndexOutOfBoundsException
- E. ArithmeticException

> [!Tip]- Answer (Click to show)
> **C. IOException**



**vi.** Which of the following is NOT part of a method signature?
- A. The method name
- B. The return type
- C. The number of parameters
- D. The parameter types
- E. Method body

> [!Tip]- Answer (Click to show)
> **E. Method body**



**vii.** What will be printed when the program is executed?
```java
public class Test {
    private static final int value = 5;
    public static void main( String[] args ) {
        int total, value = 4;
        total = value + value; // 4+4=8
        total = total + someMethod( total ); // 8 + 5 = 13
        System.out.println( total );
    }
    public static int someMethod( int val ) {
        return value; // Refers to the static final variable 'value' which is 5
    }
}
```
- A. 13
- B. 0
- C. 16
- D. 15
- E. No output.

> [!Tip]- Answer (Click to show)
> **A. 13**



**viii.** What will be printed when the following program is executed?

```java
class CP215 {
    public static void main(String[] args) {
        String str = "149";
        System.out.println(str + str + 3); // String concatenation: "149" + "149" + "3"
        int num = Integer.parseInt(str); // Convert string to int 149
        System.out.println(num + 3); // Integer addition: 149 + 3
    }
}
```
- A. 301 and 152
- B. 149+149+3 and 152
- C. 1491493 and 152
- D. 1491493 and 1493
- E. 1491493 and 149+3

> [!Tip]- Answer (Click to show)
> **C. 1491493 and 152**



**ix.** Given the following piece of code. What will be printed?

```java
1. class subException extends Exception{ }
2. class subSubException extends subException{ }
3. public class cc { void doStuff() throws SubException() { } // Typo & syntax error
4. class cc2 extends cc { void doStuff() throws SubSubException { } }
5. class cc3 extends cc { void doStuff() throws Exception { }} // Broader exception
6. class cc4 extends cc { void doStaff(int x)throws Exception { }} // Different method
7. class cc5 extends cc { void doStuff ()} // Missing exception, body
```
- A. Compilation succeeds and nothing is printed
- B. Compilation fails due to an error on line 3
- C. Compilation fails due to an error on line 5
- D. Compilation fails due to an error on line 6
- E. Compilation fails due to an error on line 7

> [!Tip]- Answer (Click to show)
> **B. Compilation fails due to an error on line 3** (Syntax error: `throws SubException()` should be `throws subException`)



**x.** Given the following class and usage thereof, which of the labeled lines are incorrect?
```java
public class Exam1 {
    private final int aQuandry;
    public Exam1( int quandry ) {
        I: aQuandry = quandry; // Valid: final variable can be initialized in constructor
    }
}
// ... In some other class, in some method:
II: Exam1 exam = new Exam1(); // Error: No default constructor
III: exam.aQuandry = 42; // Error: private and final field
IV: Exam1 = new Exam1( 99 ); // Error: Missing variable name
```
- A. I, II
- B. III, IV
- C. II, III, IV
- D. II, III
- E. I, II, III, IV

> [!Tip]- Answer (Click to show)
> **C. II, III, IV**

---

### **Question Two** (1 Mark Each)
*Write True for the correct statement and False for the incorrect statement.*

a. When an integer array is constructed with the new operator, the array's cells are initialized to zero regardless of whether the array is a field.
> [!Tip]- Answer (Click to show)
> **True**

b. If no exception arises in the try block, code in the finally clause is executed, and the next statement after try statement is executed.
> [!Tip]- Answer (Click to show)
> **True**

c. An interface can contain fields. Each field in an interface is implicitly public, static and final.
> [!Tip]- Answer (Click to show)
> **True**

d. Consider the statement `M extends Y`. this implies that M is class and Y is an interface or D is an interface like Y.
> [!Tip]- Answer (Click to show)
> **False** (A class uses `extends` for a superclass and `implements` for an interface.)

e. If one of the statements causes an exception that is not caught in any catch block, the other statements in try block are skipped, finally clause is executed, and then exception is passed to the caller of this method.
> [!Tip]- Answer (Click to show)
> **True**

f. The keyword `throw` is used in method signature to declared exception explicitly.
> [!Tip]- Answer (Click to show)
> **False** (The keyword `throws` is used in the method signature.)

g. A programmer defined class has no superclass unless the class is defined explicitly to extend a superclass.
> [!Tip]- Answer (Click to show)
> **False** (If no explicit superclass is defined, the class implicitly extends `Object`.)

h. A class that implements an interface must implement each method defined in the interface. If not, the class must be declared abstract.
> [!Tip]- Answer (Click to show)
> **True**

i. Abstract classes are typically used to construct object of a particular class type whereas interface are typically used to define operations appropriate to a class type.
> [!Tip]- Answer (Click to show)
> **False** (Abstract classes *cannot* be instantiated. They are used as incomplete blueprints.)

j. The `executeUpdate()` method is used to perform DML statements in JDBC.
> [!Tip]- Answer (Click to show)
> **True**

---

### **Question Three**

**a.** What happen when several catch blocks match the type of the thrown object? *(2 Marks)*

> [!Tip]- Answer (Click to show)
> The **first** catch block that matches the type of the thrown object or a supertype of it is executed. Subsequent catch blocks are skipped. The catch blocks must be ordered from the most specific (subclass) to the most general (superclass), otherwise, a compilation error occurs.

**b.** Read the following 2-dimension array declaration, and use it to answer the questions that follow. *Note your code segment should include the part of the code that perform the specified task. Also in all cases, do not hardcode the length of your array.*
`int [][] myArray = {{6,7,10,1,5},{67,9,7,50}, {10,20,30,40},{3,5,3} {2,1}};`

**i.** Write a code segment that print the average of the array values. *(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```java
> int total = 0;
> int count = 0;
> for (int i = 0; i < myArray.length; i++) {
>     for (int j = 0; j < myArray[i].length; j++) {
>         total += myArray[i][j];
>         count++;
>     }
> }
> double average = (double) total / count;
> System.out.println("Average: " + average);
> ```

**ii.** Write a code segment to find out the row with the maximum sum. *(4 Marks)*

> [!Tip]- Answer (Click to show)
> ```java
> int maxSum = Integer.MIN_VALUE;
> int maxRowIndex = -1;
> for (int i = 0; i < myArray.length; i++) {
>     int rowSum = 0;
>     for (int j = 0; j < myArray[i].length; j++) {
>         rowSum += myArray[i][j];
>     }
>     if (rowSum > maxSum) {
>         maxSum = rowSum;
>         maxRowIndex = i;
>     }
> }
> System.out.println("Row with max sum is index: " + maxRowIndex + " with sum: " + maxSum);
> ```


**iii.** Write a code segment to determine if all elements are positive. *(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```java
> boolean allPositive = true;
> outerLoop: // Label for the outer loop
> for (int i = 0; i < myArray.length; i++) {
>     for (int j = 0; j < myArray[i].length; j++) {
>         if (myArray[i][j] <= 0) {
>             allPositive = false;
>             break outerLoop; // Break out of both loops
>         }
>     }
> }
> System.out.println("All elements positive? " + allPositive);
> ```

---

### **Question Four**

**a.** For each of the following piece of code briefly explain what does it do. *(1 Mark Each)*

**i.** Assume the following method call is in an overridden *earning* method in a subclass:
`super.earnings( )`

> [!Tip]- Answer (Click to show)
> This calls the `earnings()` method of the superclass from within the subclass. It is typically used to get the base part of the earnings calculation before adding subclass-specific components.

**ii.** Assume the following line of code appears as the first statement in a constructor’s body:
`super(firstArgument, secondArgument);`

> [!Tip]- Answer (Click to show)
> This explicitly calls a superclass constructor that takes two arguments. It must be the first statement in the subclass constructor and is used to initialize the inherited part of the object.

**b.** Consider the following classes and the main program to test these classes, where print is used to abbreviate System.out.println;

![[Pasted image 20250928191104.png]]

The main method of a tester class for the above classes

![[Pasted image 20250928191242.png]]

**i. Will line 1 and 2 compile successfully? Briefly explain. (2 Mark)**

> [!Tip]- Answer Summary (Click to show)
> 
> *   **Line 1 (`new A();`)**: Likely **No**. If class `A` extends `B`, and `B`'s constructor is not default (or if `C` is missing), compilation fails.
> *   **Line 2 (`new E();`)**: Likely **No**. For the same reason as above, if the inheritance chain (`E`->`F`->`D`->...?) is broken or has constructor issues, it will fail.
> *   **Explanation**: The provided code snippet has significant structural problems (e.g., class `B` extending `C` which is defined later, class `F` extending an undefined `D`, misplaced braces). A correct hierarchy is needed for successful compilation.
>
>



**ii. If line 3 compiles successfully, write down and explain the output. (2 Marks)**

> [!Tip]- Answer (Click to show)
>
>**Assumption for demonstration**: If we had `C c = new E();` and the hierarchy was `E` -> `F` -> `C`, and methods were overridden...
>**Output would be**: `"F.bm"`. The actual object type is `E`, which inherits `bm()` from `F`. The variable type `C` determines which method can be called, but the object's type (`E`) determines the actual implementation executed (dynamic binding).


**iii. State if Line 6 compiles. If yes, write down and explain the output. (2 Marks)**

> [!Tip]- Answer (Click to show)
> 
> **Line 6 (`((F)o).em();`)**: This compiles **only if** the variable `o` can be cast to `F`. If `o` actually references an `E` object (which *is* an `F`), it will run and print `"F.em"`. If `o` references an object not compatible with `F`, a `ClassCastException` is thrown at runtime.

**iv. State if Line 8 compiles. If yes, write down and explain the output. If no, suggest a fix using type casting. (2 Marks)**

> [!Tip]- Answer (Click to show)
> 
> **Line 8 (`o.dm();`)**: This will **not compile**. The reference type `Object` does not have a `dm()` method.
> **Fix using casting**: `((E)o).dm();` This cast tells the compiler that the object referenced by `o` is actually of type `E` (or a subclass), which has a `dm()` method. If the cast is valid, it will call `E`'s `dm()` method and print `"E.dm"`.


---

## **SECTION B: (60 MARKS)**
*Attempt any **THREE (3)** out of **FOUR (4)** questions provided.*

### **Question Five** (20 Marks)

**a.** What will be printed when the following code is executed? *(3 Marks)*

```java
class B{
    public void p(double i){
        System.out.println(i*2);
    }
}
class A extends B{
    public void p(double i){
        System.out.println(i);
    }
}
public class Test{
    public static void main(String []args){
        A a = new A();
        a.p(5);   // 5.0 (int promoted to double, A's method called)
        a.p(5.0); // 5.0 (A's method called)
    }
}
```

> [!Tip]- Answer (Click to show)
> **Output:**
> ```
> 5.0
> 5.0
> ```

**b.** The following code segment contain an error, carefully observe the code and write the correct line(s) of code into your answer booklet and write the output when the `m(3)`. *(3 Marks)*

```java
public class B{
    public static double m(int x) {
        int y = x;
        try{
            System.out.println(1);
            y = 5/x;                    // Line A: x=3, no exception
            System.out.println(2);       // Missing semicolon - ERROR
            return 5/(x+2);
        } catch (NullPointerException e) {
            System.out.println(3);
            y = 5/(x+1);
            System.out.println(4);
        }
        System.out.println(5);
        y= 4/x;
        System.out.println(6);
        return 1/x;
    }
}
```

> [!Tip]- Answer (Click to show)
> **Error:** Missing semicolon `;` after `System.out.println(2)`.
> **Corrected Line:** `System.out.println(2);`
> **Output for `m(3)` after correction:**
> ```
> 1
> 2
> ```
> (The method returns `5/(3+2) = 1.0` from the try block.)

**c.** What will be printed when the following code is executed? *(3 Marks)*

```java
public class Demo {
    public static void main(String[] args) {
        m(new GraduateStudent()); // Output: "Student"
        m(new Student());         // Output: "Student"
        m(new Person());          // Output: "Person"
        m(new Object());          // Output: java.lang.Object@<hashcode>
    }
    public static void m(Object x) {
        System.out.println(x.toString());
    }
}
class GraduateStudent extends Student { }
class Student extends Person {
    public String toString() {
        return "Student";
    }
}
class Person {
    public String toString() {
        return "Person";
    }
}
```

> [!Tip]- Answer (Click to show)
> **Output:**
> ```
> Student
> Student
> Person
> java.lang.Object@<some_hashcode>
> ```


**d.** Define a structure that can represent Animals. Animals have two behaviors; they can `speak()` and they can `move()`. By default, when an animal moves, the text ”This animal moves forward” is displayed. By default, when an animal speaks, the text ”This animal speaks” is displayed. A general Animal should not be able to be instantiated. Define also two classes, Goose and Lynx, that are Animals. Both Goose and Lynx behave such that where ”animal” is displayed in `speak()` or `move()`, ”goose” or ”lynx” is displayed by the appropriate classes. Finally, any instance of Goose can `fly()`, just as any Flying object can. An Airplane is also a Flying object. Define the Airplane class such that it is Flying and make sure that any instance of Goose is also Flying. The specific behaviors when instances of either class `fly()` are of your choice. Instances of either Goose or Airplane should be able to be stored in a variable of type Flying.
*(11 Marks)*

> [!Tip]- Answer (Click to show)
> ```java
> // Abstract class Animal
> abstract class Animal {
>     public void move() {
>         System.out.println("This animal moves forward");
>     }
>     public void speak() {
>         System.out.println("This animal speaks");
>     }
> }
> 
> // Flying interface
> interface Flying {
>     void fly();
> }
> 
> // Goose class
> class Goose extends Animal implements Flying {
>     @Override
>     public void move() {
>         System.out.println("The goose waddles forward.");
>     }
>     @Override
>     public void speak() {
>         System.out.println("The goose honks.");
>     }
>     @Override
>     public void fly() {
>         System.out.println("The goose flies south for the winter.");
>     }
> }
> 
> // Lynx class
> class Lynx extends Animal {
>     @Override
>     public void move() {
>         System.out.println("The lynx prowls silently.");
>     }
>     @Override
>     public void speak() {
>         System.out.println("The lynx growls.");
>     }
> }
> 
> // Airplane class
> class Airplane implements Flying {
>     @Override
>     public void fly() {
>         System.out.println("The airplane engages its jets and takes off.");
>     }
> }
> 
> // Demonstration
> public class TestPolymorphism {
>     public static void main(String[] args) {
>         Flying[] flyingThings = new Flying[2];
>         flyingThings[0] = new Goose();
>         flyingThings[1] = new Airplane();
> 
>         for (Flying flier : flyingThings) {
>             flier.fly(); // Polymorphic call to fly()
>         }
>     }
> }
> ```

---

### **Question Six** (20 Marks)

Create an inheritance hierarchy that a university might use to represent its members. Design a class named Person, which encapsulates private instances such as name, address, phone number, and email address. From this class, derive two specific subclasses: Student and Employee. The Student class should include a constant representing the student's class status, which can be one of four values: certificate, diploma, undergraduate, or postgraduate. The Employee class, on the other hand, should contain attributes for office location, salary, and a reference hire date of type Date. The Date class consisting of private members day, month, and year components. Further, extend the Employee class to create two additional subclasses: Faculty and Staff. The Faculty subclass should include attributes for office hours and academic rank, while the Staff subclass should have a title attribute. Ensure that each class overrides the toString method to display its class name along with the person's name. Finally, develop a test program that instantiates objects for Person, Student, Employee, Faculty, and Staff, and subsequently invokes their respective toString() methods to demonstrate the functionality of your design. All values should be supplied from keyboard.

*(20 Marks)*

> [!Tip]- Answer Outline (Click to show)
> ```java
> import java.util.Scanner;
> 
> // 1. Person Class (Base)
> class Person {
>     private String name, address, phoneNumber, email;
>     public Person(String name, String address, String phone, String email) {
>         this.name = name; this.address = address; this.phoneNumber = phone; this.email = email;
>     }
>     @Override
>     public String toString() { return "Person[name=" + name + "]"; }
>     // Getters and Setters...
> }
> 
> // 2. Student Class
> class Student extends Person {
>     public static final String CERTIFICATE = "Certificate";
>     public static final String DIPLOMA = "Diploma";
>     public static final String UNDERGRADUATE = "Undergraduate";
>     public static final String POSTGRADUATE = "Postgraduate";
>     private final String classStatus;
>     public Student(String name, String address, String phone, String email, String status) {
>         super(name, address, phone, email);
>         this.classStatus = status;
>     }
>     @Override
>     public String toString() { return "Student[name=" + getName() + ", status=" + classStatus + "]"; }
> }
> 
> // 3. Date Class
> class Date {
>     private int day, month, year;
>     public Date(int day, int month, int year) { this.day = day; this.month = month; this.year = year; }
>     @Override
>     public String toString() { return day + "/" + month + "/" + year; }
> }
> 
> // 4. Employee Class
> class Employee extends Person {
>     private String office;
>     private double salary;
>     private Date hireDate;
>     public Employee(String name, String address, String phone, String email, String office, double salary, Date hireDate) {
>         super(name, address, phone, email);
>         this.office = office; this.salary = salary; this.hireDate = hireDate;
>     }
>     @Override
>     public String toString() { return "Employee[name=" + getName() + "]"; }
> }
> 
> // 5. Faculty Class
> class Faculty extends Employee {
>     private String officeHours, rank;
>     public Faculty(String name, String address, String phone, String email, String office, double salary, Date hireDate, String hours, String rank) {
>         super(name, address, phone, email, office, salary, hireDate);
>         this.officeHours = hours; this.rank = rank;
>     }
>     @Override
>     public String toString() { return "Faculty[name=" + getName() + "]"; }
> }
> 
> // 6. Staff Class
> class Staff extends Employee {
>     private String title;
>     public Staff(String name, String address, String phone, String email, String office, double salary, Date hireDate, String title) {
>         super(name, address, phone, email, office, salary, hireDate);
>         this.title = title;
>     }
>     @Override
>     public String toString() { return "Staff[name=" + getName() + "]"; }
> }
> 
> // 7. Test Program
> public class UniversityTest {
>     public static void main(String[] args) {
>         Scanner scanner = new Scanner(System.in);
> 
>         // Input for a Person
>         System.out.println("Enter Person details (name, address, phone, email):");
>         Person person = new Person(scanner.nextLine(), scanner.nextLine(), scanner.nextLine(), scanner.nextLine());
> 
>         // Input for a Student
>         System.out.println("Enter Student details (name, address, phone, email, status):");
>         Student student = new Student(scanner.nextLine(), scanner.nextLine(), scanner.nextLine(), scanner.nextLine(), scanner.nextLine());
> 
>         // Input for an Employee (including Date)
>         System.out.println("Enter Employee details (name, address, phone, email, office, salary, hireDate(d m y)):");
>         Employee employee = new Employee(scanner.nextLine(), scanner.nextLine(), scanner.nextLine(), scanner.nextLine(), scanner.nextLine(), scanner.nextDouble(), new Date(scanner.nextInt(), scanner.nextInt(), scanner.nextInt()));
>         scanner.nextLine(); // consume newline
> 
>         // Input for Faculty and Staff similarly...
>         // ... (Creation of Faculty and Staff objects would follow the same pattern)
> 
>         // Demonstrate toString()
>         System.out.println(person);
>         System.out.println(student);
>         System.out.println(employee);
>         // System.out.println(faculty);
>         // System.out.println(staff);
> 
>         scanner.close();
>     }
> }
> ```

---

### **Question Seven** (20 Marks)

You are required to implement a Java program for an advanced online recruitment system. First, define an interface named JobPortal with methods for posting jobs (postJob), retrieving job listings (getJobListings), applying for jobs (applyForJob), filtering jobs (filterJobs), and matching applicants to jobs (matchApplicants). Then, the JobPosting and Applicant classes are created with relevant attributes and constructors. Two classes, LinkedInPortal and UniversityJobBoard, implement the JobPortal interface, each with specific implementations for filterJobs() and matchApplicants() based on their respective platforms.

Finally, create a RecruitmentSystem class to store job postings, interact with different JobPortal implementations polymorphically, utilize all interface methods, and provide functionalities such as adding new job portals, sending notifications to applicants, and generating reports on job application statistics. The program must demonstrate effective use of polymorphism and implement all the required functionalities for job filtering, applicant matching, and system management.
(20 Marks)*

> [!Tip]- Answer Outline (Click to show)
> ```java
> import java.util.*;
> 
> // 1. JobPortal Interface
> interface JobPortal {
>     void postJob(JobPosting job);
>     List<JobPosting> getJobListings();
>     void applyForJob(Applicant applicant, String jobId);
>     List<JobPosting> filterJobs(String criteria);
>     List<Applicant> matchApplicants(JobPosting job);
> }
> 
> // 2. Supporting Classes (JobPosting, Applicant)
> class JobPosting {
>     private String jobId, title, description, company, location;
>     // Constructor, Getters, Setters...
> }
> 
> class Applicant {
>     private String applicantId, name, skills, experience;
>     // Constructor, Getters, Setters...
> }
> 
> // 3. LinkedInPortal Implementation
> class LinkedInPortal implements JobPortal {
>     private List<JobPosting> jobs = new ArrayList<>();
>     @Override
>     public void postJob(JobPosting job) { jobs.add(job); }
>     @Override
>     public List<JobPosting> getJobListings() { return new ArrayList<>(jobs); }
>     @Override
>     public void applyForJob(Applicant applicant, String jobId) {
>         System.out.println(applicant.getName() + " applied for job " + jobId + " via LinkedIn.");
>     }
>     @Override
>     public List<JobPosting> filterJobs(String criteria) {
>         // Filter logic based on criteria (e.g., location, title)
>         List<JobPosting> result = new ArrayList<>();
>         for (JobPosting job : jobs) {
>             if (job.getTitle().toLowerCase().contains(criteria.toLowerCase()) || job.getLocation().toLowerCase().contains(criteria.toLowerCase())) {
>                 result.add(job);
>             }
>         }
>         return result;
>     }
>     @Override
>     public List<Applicant> matchApplicants(JobPosting job) {
>         // Simple matching logic (e.g., skill match)
>         List<Applicant> allApplicants = new ArrayList<>(); // Would be populated from a database
>         List<Applicant> matches = new ArrayList<>();
>         // ... matching algorithm ...
>         return matches;
>     }
> }
> 
> // 4. UniversityJobBoard Implementation
> class UniversityJobBoard implements JobPortal {
>     private List<JobPosting> jobs = new ArrayList<>();
>     // ... Implement all interface methods with university-specific logic ...
>     @Override
>     public List<JobPosting> filterJobs(String criteria) {
>         // Maybe filter for entry-level or internship roles
>         List<JobPosting> result = new ArrayList<>();
>         for (JobPosting job : jobs) {
>             if (job.getTitle().toLowerCase().contains("intern") || job.getTitle().toLowerCase().contains("graduate")) {
>                 result.add(job);
>             }
>         }
>         return result;
>     }
>     @Override
>     public List<Applicant> matchApplicants(JobPosting job) {
>         // Match based on student status or recent graduation
>         List<Applicant> matches = new ArrayList<>();
>         // ... matching algorithm ...
>         return matches;
>     }
>     // ... other interface methods ...
> }
> 
> // 5. RecruitmentSystem Class
> class RecruitmentSystem {
>     private List<JobPortal> portals = new ArrayList<>();
>     private List<JobPosting> allJobs = new ArrayList<>();
>     private List<Applicant> allApplicants = new ArrayList<>();
> 
>     public void addJobPortal(JobPortal portal) { portals.add(portal); }
>     public void postJobToAllPortals(JobPosting job) {
>         allJobs.add(job);
>         for (JobPortal portal : portals) { portal.postJob(job); }
>     }
>     public void demonstratePolymorphism() {
>         for (JobPortal portal : portals) {
>             List<JobPosting> filtered = portal.filterJobs("Software"); // Polymorphic call
>             System.out.println("Filtered jobs from " + portal.getClass().getSimpleName() + ": " + filtered.size());
>         }
>     }
>     // Methods for sending notifications, generating reports...
> }
> 
> // 6. Main class to test the system
> public class RecruitmentDemo {
>     public static void main(String[] args) {
>         RecruitmentSystem system = new RecruitmentSystem();
>         system.addJobPortal(new LinkedInPortal());
>         system.addJobPortal(new UniversityJobBoard());
> 
>         JobPosting job1 = new JobPosting("J1", "Software Engineer", "Develop software", "Tech Corp", "CityA");
>         system.postJobToAllPortals(job1);
> 
>         system.demonstratePolymorphism();
>     }
> }
> ```

---

### **Question Eight** (20 Marks)

Figure 1 shows a schematic representation of Payable interface, Invoice, Employee and SalariedEmployee classes.

![[javaUE2024payable.png]]

*(Figure 1: Relationship between interface Payable, class Invoice, Employee and SalariedEmployee.)*

Use the following information to write an application to determine payments for employees and invoices. You are required to create interface Payable, which contains method getPaymentAmount that returns a double amount that must be paid for an object of any class that implements the interface. Method getPaymentAmount is a general-purpose method to be implemented by classes that implements interface Payable. After declaring Payable interface, define class Invoice and Employee, such that they implement interface Payable. Classes Invoice and Employee both represent things for which the company must be able to calculate a payment amount. Both classes implement the interface Payable, so that a program can invoke method getPaymentAmount on Invoice objects and Employee objects. Class Invoice represents a simple invoice that contains billing information for only one kind of part. The class declares private instance variables partNumber, partDescription, quantity and pricePerItem. Class Invoice also contains a constructor, get methods and a toString method that returns a String representation of an Invoice object. The class Employee contains employee's firstName, lastName, and employeeID. It also contains a constructor for initialization of instance variable and a toString method for returning its string representation. Salaried employee is paid a fixed weekly salary regardless of the number of hours worked. Therefore, SalariedEmployee class should contain a unique variable called salary, a constructor, a toString method for returning its string representation. Include main method to test your application.
*(20 Marks)*

> [!Tip]- Answer Outline (Click to show)
> ```java
> // 1. Payable Interface
> interface Payable {
>     double getPaymentAmount();
> }
> 
> // 2. Invoice Class
> class Invoice implements Payable {
>     private String partNumber, partDescription;
>     private int quantity;
>     private double pricePerItem;
>     public Invoice(String partNum, String desc, int qty, double price) {
>         partNumber = partNum; partDescription = desc; quantity = qty; pricePerItem = price;
>     }
>     @Override
>     public double getPaymentAmount() { return quantity * pricePerItem; }
>     @Override
>     public String toString() { return "Invoice[part=" + partNumber + ", amount=" + getPaymentAmount() + "]"; }
>     // Getters...
> }
> 
> // 3. Employee Class
> class Employee implements Payable {
>     private String firstName, lastName, employeeID;
>     public Employee(String first, String last, String id) {
>         firstName = first; lastName = last; employeeID = id;
>     }
>     @Override
>     public double getPaymentAmount() { return 0.0; } // Generic employee, no specific payment
>     @Override
>     public String toString() { return "Employee[name=" + firstName + " " + lastName + ", ID=" + employeeID + "]"; }
>     // Getters...
> }
> 
> // 4. SalariedEmployee Class
> class SalariedEmployee extends Employee {
>     private double salary;
>     public SalariedEmployee(String first, String last, String id, double weeklySalary) {
>         super(first, last, id);
>         salary = weeklySalary;
>     }
>     @Override
>     public double getPaymentAmount() { return salary; }
>     @Override
>     public String toString() { return "SalariedEmployee[" + super.toString() + ", salary=" + salary + "]"; }
> }
> 
> // 5. Test Application
> public class PayableTest {
>     public static void main(String[] args) {
>         Payable[] payables = new Payable[4];
>         payables[0] = new Invoice("123", "Brakes", 4, 99.99);
>         payables[1] = new SalariedEmployee("John", "Doe", "E01", 1500.0);
>         payables[2] = new Invoice("456", "Tire", 2, 149.95);
>         payables[3] = new SalariedEmployee("Jane", "Smith", "E02", 1600.0);
> 
>         for (Payable payable : payables) {
>             System.out.printf("%s Payment Due: $%.2f%n", payable, payable.getPaymentAmount());
>         }
>     }
> }
> ```

---
**END OF EXAMINATION PAPER**