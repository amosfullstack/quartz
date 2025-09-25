
#### Database Management Systems (CP 224) – Exam Mastery Roadmap 

This roadmap will guide you step by step to **master ADVANCED DBMS concepts** very fast and **pass exams with confidence**, while also building skills that are directly useful in real world systems.


### **1. Data Modeling with EER (Enhanced Entity-Relationship) Diagrams**

I. **Core Concepts**
- **EER Basics** : Entities, Attributes, Relationships : Extended Entity Relational Model, Make sure you understand it has added features you must know(eg generalization etc..)

- **Constraints** :  Disjoint vs. Overlapping, Participation (Total/Partial) : Understand how these constraints are drawn on the EER and which symbols are used

- **EER → Relational Mapping**  :  How to convert diagrams into normalized tables
    
**Goal**: Be able to **draw clean EER diagrams** and confidently **map them into relational tables**  (This is a very common exam question).

---

### **2. Relational Database Design & Normalization**

i. **Core Concepts**

**Functional Dependencies (FDs)** : Closure sets, Canonical covers 
- Understand the meaning of functional dependency
- Know the types of functional dependency
- Understand Canonical cover and how to find it, from a set of functional dependencies
- The Closure sets, what are they?<br>
    
**Normal Forms** : 1NF, 2NF, 3NF, BCNF (with anomalies explained)
- Be able to explain the conditions of all the normal forms
- Explain the anomalies that may oaccur in the databases<br>
       
**Decomposition** : Dependency preservation and Lossless join<br>
    
**Exam Tip**: Normalization is about spotting **data anomalies**. The more examples you practice, the faster you will recognize the patterns.

---

### **3. Relational Algebra & Query Optimization**

i. **Core Concepts**

**Basic Operations** : SELECT (σ), PROJECT (π), JOIN (⨝), UNION (∪), DIVISION (÷)
- Do much practice here, this question is in every exam
       
 **Advanced** : Aggregate functions, GROUP BY
- Lean to use the agregate functions

  **SQL ↔ Algebra Translation** : Converting queries into algebra expressions
- This question is in every Exam


ii. **Practical Learning**

- Convert **at least 10 SQL queries into algebra** (JOINs are exam favorite  questions)
- Practice **nested queries and multitable joins**<br>
    
**Note**: Relational algebra is the foundation of query optimization. If you can **convert SQL to algebra**, optimization questions become easy.

---

### **4. Transactions  Concurrency Control**

i. **Core Concepts**

**ACID Properties** : Atomicity, Consistency, Isolation, Durability
-  Be able to explain the meaning of transaction
- And why the ACID properties are important
      
**Schedules** : Serial vs. Non-serial execution
- Must know the Types of schedules and why are they called so.
- Be able to perfrom questions dealing with these schedules ie identifying serial and non serial just by seeing.
    
**Serializability** : Conflict and View serializability (via precedence graphs)
- Learn the meaning of conflict and view serializability
- Lean how to prove if the schedules are conflict or view serializable

ii. **Practical Learning**

- Draw **precedence graphs** to test for serializability
- Identify **recoverable vs. irrecoverable schedules**
- Analyze sample problems step by step
    

**Exam Focus**: Graph based serializability questions are guaranteed in most DBMS exams.

---

### **5. Recovery and SQL Transactions**

i. **Core Concepts**

- **Recovery Mechanisms** : Cascading rollbacks, Strict vs. Cascadeless schedules
- **SQL TCL Commands** : COMMIT, ROLLBACK, SAVEPOINT
- **Isolation Levels** : Read uncommitted, committed, repeatable, serializable
    

---

### **6. Object-Oriented Databases (OODBMS)**

i. **Core Concepts**

- **OO Principles in DB** : Encapsulation, Inheritance, Object Identity
- **ODMG Standards** : Object Definition Language (ODL) basics
- **OR Mapping** : Mapping classes to relational tables
    

I have not seen these questions in the Exams

---


### **4 Hour Study Plan**

- **Hour1** → EER + Relational Algebra
- **Hour 2** → Normalization + Functional Dependencies
- **Hour 3** → Transactions + Concurrency Control
- **Hour 4** → Recovery + OO Databases + Final Review
    
---

### **Exam Success Formula**

i. High Marks Topics

- Normalization (1NF → BCNF)
- Relational Algebra Queries
- Transaction Scheduling and Serializability
- EER Diagram Design and Mapping