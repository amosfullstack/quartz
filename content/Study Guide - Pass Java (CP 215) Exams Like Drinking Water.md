#### Roadmap: **Object-Oriented Programming in Java (OOP in Java)**

Follow this roadmap step by step and you will find yourself being a master at Java in one day. You will find out that Java is very simple just like drinking water.
### **Step 1. Java Basics (Foundation)**
Start with the basic syntax.
- **Syntax and Structure** : Every Java program has a `class` and a `main()` method (entry point).
- **Data Types** : `int`, `double`, `char`, `boolean`, `String`.
- **Operators** : `+`, `-`, `*`, `/`, `%`, logical (`&&`, `||`).
- **Control Flow**  : `if-else`, `switch`, loops (`for`, `while`, `do-while`).  

    NB: Without basics, you can’t understand OOP code.
    
---

### **Step 2. Classes and Objects (Core of OOP)**
   Learn how to create java classes.
- **Class** :A blueprint that defines attributes (fields) + behaviors (methods).
- **Object** : A real instance created from a class using `new`.
- Understant the components/ building blocks of the Java class ie attributes,methods,constructors, getters and setters.   

**Class Example :**

```java
class Student {
   String name;
   void display() { System.out.println(name); }
}
Student s1 = new Student();
```

NB : Classes/objects = foundation of Java.

---

### **Step 3. Encapsulation (Data Hiding)**

Learn how data is hiden from users, and they are able to access only what is needed. Eg you can't edit your bank balance. The users cant access and modify sensitive system data.

- **Definition** : Wrapping variables + methods in a class, restricting direct access.    
- **How** : Use `private` fields + `public` getters/setters.
    
**Encapsulated class Example :**
```java
class Bank {
   private double balance;
   public void setBalance(double b) { balance = b; }
   public double getBalance() { return balance; }
}
```

NB: Encapsulation Protects data, ensures controlled access.

---

### **Step 4. Inheritance (Code Reuse)**

Learn how to implement inheritance and its importance in OOP.

- **Definition** : One class inherits properties/methods of another.
- **Keyword** : `extends`.
- **Types** : Single, Multilevel, Hierarchical (Java does not allow multiple inheritance with classes).
    
**Example of Inheritance: **
```java
class Animal { void sound() { } }
class Dog extends Animal { void sound() { System.out.println("Bark"); } }
```

NB : Inheritance Promotes code reuse, builds hierarchy.

---

### **Step 5. Polymorphism (Many Forms)**

Learn how the methods can be multipurposed in java.

- **Definition** :  Same method name, different behavior.
    
- **Types** : 
    - **Compile-time** → _Method Overloading_ (same name, different parameters).
    - **Run-time** → _Method Overriding_ (subclass redefines parent method).
        
**Polymorphism Example:**
```java
class Shape { void draw() { } }
class Circle extends Shape { void draw() { System.out.println("Circle"); } }
```

 NB: Polymorphism increases flexibility, reduces code duplication.

---

### **Step 6. Abstraction (Hiding Details)**

Learn how abstraction is implemented in Java.

- **Definition** : Showing only essential details, hiding implementation.
- **How** → `abstract` classes and `interfaces`.
    

#### **Abstract Class**

- Can have abstract methods + concrete methods.
- Abstract methods are methods that are declared without the body.
    
**Example of Abstract Class:**
```java
abstract class Shape { //Abstract Class

   abstract void draw();  //Abstract method
   
   }
class Circle extends Shape { 

    void draw() { System.out.println("Circle");//Overriding abstract method
    
    } 
 
 }
```

#### **Interface**

- A contract (all methods are abstract by default).
- A class `implements` an interface.
    
**Example:**
```java
interface Animal { //An Interface
    void sound();  //Abstract method
    
    }
class Dog implements Animal { //Class implementing interface
    public void sound() { 
       System.out.println("Bark"); 
       } 
  }
```

NB: Interface allows multiple inheritance and enforces structure.

(PERFORM THE QUESTION OF Interface Payable it is always in Exams)

---

### **Step 7. Constructors (Object Initialization)**

Learn how the constructor is created in the class.
Lean how to instantiate an Object from a class using a constructor.

- **Definition** : Special method with same name as class.
    
- **Types of constructors** : (Learn them)
    - Default → No parameters.
    - Parameterized → Accepts values.
        
**Constructor Example :**
```java
class Student {
   String name;
   Student(String n) { name = n; }
}
```

NB : Constructor Saves time in setting initial values.

---

### **Step 8. Access Modifiers (Control Access)**

Learn how to set the accessibility of objects in Java.
- **public** : Visible everywhere.
- **private** : Only inside the same class.
- **protected** : Same package + subclasses.
- **default** → Same package only.  


    NB : Access modifiers Controls scope and security of code.
    
---

### **Step 9. Exception Handling (Error Management)**

Learn how to handle errors in the Java Programe
- **Definition** : Handling runtime errors gracefully.
- **Keywords** → `try`, `catch`, `finally`, `throw`, `throws`.
    
**Example :**
```java
try {
   int x = 5/0;
} catch(Exception e) {
   System.out.println("Error: " + e);
}
```

NB : Exceptions Prevents program crashes, ensures reliability.

---

### **Step 10. Core Keywords**
Frequently Asked in Exams

- **static** : Belongs to class, not instance.
- **final** : Constant (variable), cannot override (method), cannot extend (class).
- **this** : Refers to current object.
- **super** : Refers to parent class (constructor/method).