#### **Introduction to Database Systems - Exam**

**THE UNIVERSITY OF DODOMA**  

**COLLEGE OF INFORMATICS AND VIRTUAL EDUCATION**  
**SCHOOL OF INFORMATICS**

**UNDERGRADUATE UNIVERSITY EXAMINATIONS**  
**SECOND SEMESTER 2017/2018**

**CS 125: INTRODUCTION TO DATABASE SYSTEMS**  
**Date:** 05th July, 2018  
**Time Allocated:** 3 Hours

---

## **SECTION A (60 Marks)**

### **Question One**
*Define the following terms as used in Database System*

**a) Database**

> [!Tip]- Answer (Click to show)
> **A database is an organized collection of structured data stored electronically in a computer system. It is designed to efficiently store, retrieve, and manage data while ensuring data integrity, security, and consistency through a Database Management System (DBMS).**



**b) Database Management System**

> [!Tip]- Answer (Click to show)
> **A Database Management System (DBMS) is software that defines a database, stores the data, supports a query language, produces reports, creates data entry screens, and manages how multiple users access and modify the data while maintaining data integrity and security.**



**c) Primary key**

> [!Tip]- Answer (Click to show)
> **A primary key is a column or set of columns in a table that uniquely identifies each row/record in that table. It must contain unique values and cannot contain NULL values. There can be only one primary key per table.**



**d) Foreign key**

> [!Tip]- Answer (Click to show)
> **A foreign key is a column or set of columns in a table that establishes a link between data in two tables. It references the primary key of another table, enforcing referential integrity by ensuring that the value in the foreign key column must match an existing value in the referenced primary key column.**



**e) Super key**

> [!Tip]- Answer (Click to show)
> **A super key is a set of one or more columns that can uniquely identify a row in a table. A primary key is a minimal super key - meaning it has no unnecessary columns. A table can have multiple super keys but only one primary key.**

---

### **Question Two**

**a) Differentiate the following terms**  
**i) First Database Normal form (1NF) and second Database Normal form (2NF)**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **1NF requires that all attributes contain atomic (indivisible) values and there are no repeating groups. 2NF requires that the table is in 1NF and all non-prime attributes are fully functionally dependent on the primary key (no partial dependencies).**



**ii) Insertion anomaly and Update anomaly**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **Insertion Anomaly: Inability to add data about one entity without including data about another entity. For example, cannot add a new department without having at least one employee.**  
> **Update Anomaly: Inconsistency that results from data redundancy when updating data. For example, changing a department name requires updating multiple employee records, and if not all are updated, data becomes inconsistent.**



**b) Briefly explain the main goal of database normalization when design the database**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **The main goal of database normalization is to organize data to reduce redundancy and eliminate undesirable characteristics like Insertion, Update, and Deletion Anomalies. It involves dividing large tables into smaller, related tables and defining relationships between them to ensure data integrity and minimize data duplication.**



**c) An engineering consultancy firm supplies temporary specialized staff to bigger companies in the country to work on their project for certain amount of time. The table below lists the time spent by each of the company's employees at other companies to carry out projects. The National Insurance Number (NIN) is unique for every member of staff.**  
*(3 Marks Each)*

| NIN | Contract No | Hours | Employee Name | Company ID | Company Location |
|-----|-------------|-------|---------------|------------|------------------|
| 616681B | SC1025 | 72 | P. White | SC115 | Belfast |
| 674315A | SC1025 | 48 | R. Press | SC115 | Belfast |
| 323113B | SC1026 | 24 | P. Smith | SC23 | Bangor |
| 616681B | SC1026 | 24 | P. White | SC23 | Bangor |

**i. Find the Primary Key (PK) for this relation and explain your choice**

> [!Tip]- Answer (Click to show)
> **Composite Primary Key: (NIN, Contract No)**  
> **Explanation: Both NIN and Contract No are needed to uniquely identify each record since an employee (same NIN) can work on multiple contracts, and a contract can have multiple employees.**



**ii. Find fully functional dependencies on the PK and the partial functional dependencies on the PK**

> [!Tip]- Answer (Click to show)
> **Fully Functional Dependencies on (NIN, Contract No):**
> - (NIN, Contract No) → Hours
> 
> **Partial Functional Dependencies:**
> - NIN → Employee Name
> - Contract No → Company ID, Company Location



**iii. Normalize the table to 2NF**

> [!Tip]- Answer (Click to show)
> **After 2NF Normalization:**
> 
> **Employee Table:**
> | NIN (PK) | Employee Name |
> |----------|---------------|
> | 616681B | P. White |
> | 674315A | R. Press |
> | 323113B | P. Smith |
> 
> **Contract Table:**
> | Contract No (PK) | Company ID | Company Location |
> |------------------|------------|------------------|
> | SC1025 | SC115 | Belfast |
> | SC1026 | SC23 | Bangor |
> 
> **Works Table:**
> | NIN (FK) | Contract No (FK) | Hours |
> |----------|------------------|-------|
> | 616681B | SC1025 | 72 |
> | 674315A | SC1025 | 48 |
> | 323113B | SC1026 | 24 |
> | 616681B | SC1026 | 24 |



**iv. Find the transitive dependencies on the 2NF tables**

> [!Tip]- Answer (Click to show)
> **In the Contract table, there is a transitive dependency:**
> - Contract No → Company ID → Company Location
> **This means Company Location is transitively dependent on Contract No through Company ID, which violates 3NF.**

---

### **Question Three**

**a) Define view as used in Database Management System.**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **A view is a virtual table based on the result-set of an SQL statement. It contains rows and columns, just like a real table, but the fields in a view are fields from one or more real tables in the database.**



**b) State three roles of View in a Database Management System?**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **1. Security: Restrict user access to specific columns or rows of underlying tables.**  
> **2. Simplicity: Hide complex queries and present users with simplified data structures.**  
> **3. Data Independence: Provide a consistent interface even when underlying table structures change.**



**c) In spite of the advantages of using a DBMS, there are a few situations in which such a system may involve unnecessary overhead costs that would not be incurred in traditional file processing. Briefly explain three factors that may lead to overhead costs in DBMS**  
*(6 Marks)*

> [!Tip]- Answer (Click to show)
> **1. High Initial Cost: Significant investment in DBMS software licenses, hardware upgrades, and specialized personnel training.**  
> **2. Complexity: DBMS are complex systems requiring skilled database administrators for installation, configuration, and maintenance.**  
> **3. Performance Overhead: Additional processing for transaction management, concurrency control, security checks, and data integrity enforcement can slow down simple operations compared to file systems.**

---

### **Question Four**
*Read the following scenario carefully and then answer the questions that follow:*

*The college of Informatics and Virtual Education has several departments. Each department is managed by a chair, and at least one professor. Professors must be assigned to one, but possibly more departments. At least one professor teaches one course, but a professor may be on sabbatical and not teach any course. Each course may be taught more than once by different professors. We know of the department name, the professor name, the professor employee id, the course names, the course schedule, the term/year that the course is taught, the departments the professor is assigned to, the department that offers the course.*

**a. Draw the ERD**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> *Use the data below to draw the ERD*
> **Entities:**
> - **Department** (deptID, deptName, chairID)
> - **Professor** (profID, profName, employeeID)
> - **Course** (courseID, courseName, schedule, termYear, deptID)
> - **Teaching** (profID, courseID, teachingInstance) [Relationship set]
> - **Assignment** (profID, deptID) [Relationship set for multiple department assignments]
> 
> **Relationships:**
> - Department (1) --- managed_by --- (1) Professor (as chair)
> - Department (1) --- offers --- (M) Course
> - Professor (M) --- assigned_to --- (M) Department (via Assignment)
> - Professor (M) --- teaches --- (M) Course (via Teaching)

---

**b. From the ERD above draw the logical schema**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> Department (deptID PK, deptName, chairID FK references Professor(profID))
> Professor (profID PK, profName, employeeID UNIQUE)
> Course (courseID PK, courseName, schedule, termYear, deptID FK references Department(deptID))
> Assignment (profID FK references Professor(profID), deptID FK references Department(deptID), PRIMARY KEY (profID, deptID))
> Teaching (profID FK references Professor(profID), courseID FK references Course(courseID), teachingInstance, PRIMARY KEY (profID, courseID, teachingInstance))
> ```



**c. From the logical schema above create at least data dictionaries**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **Department Table Data Dictionary:**
> | Attribute | Data Type | Constraints | Description |
> |-----------|-----------|-------------|-------------|
> | deptID | VARCHAR(10) | PRIMARY KEY | Unique department identifier |
> | deptName | VARCHAR(50) | NOT NULL | Name of the department |
> | chairID | VARCHAR(10) | FOREIGN KEY | Professor who chairs the department |
> 
> **Professor Table Data Dictionary:**
> | Attribute | Data Type | Constraints | Description |
> |-----------|-----------|-------------|-------------|
> | profID | VARCHAR(10) | PRIMARY KEY | Unique professor identifier |
> | profName | VARCHAR(50) | NOT NULL | Professor's full name |
> | employeeID | VARCHAR(15) | UNIQUE NOT NULL | Official employee identification number |



**d. From the data dictionaries above create at least two physical schema**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> CREATE TABLE Department (
>     deptID VARCHAR(10) PRIMARY KEY,
>     deptName VARCHAR(50) NOT NULL,
>     chairID VARCHAR(10),
>     FOREIGN KEY (chairID) REFERENCES Professor(profID)
> );
> 
> CREATE TABLE Professor (
>     profID VARCHAR(10) PRIMARY KEY,
>     profName VARCHAR(50) NOT NULL,
>     employeeID VARCHAR(15) UNIQUE NOT NULL
> );
> ```

---

## **SECTION B (40 Marks)**

### **Question Five**

**a. What is a data model? Briefly explain the two types of data model.**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **A data model is an abstract model that organizes data elements and standardizes how they relate to one another and to properties of the real world entities.**  
> **Two types:**  
> **1. Conceptual Data Model: High-level, user-oriented data model focusing on what data is required and how it should be organized (e.g., ER diagrams).**  
> **2. Physical Data Model: Low-level, implementation-oriented data model describing how data is stored in the database (e.g., tables, columns, indexes).**



**b. Define database schema and briefly explain three types of schema in a database.**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **Database schema is the structural design of a database that defines its organization, relationships, and constraints.**  
> **Three types:**  
> **1. Physical Schema: Describes how data is stored physically (files, indexes, storage).**  
> **2. Logical Schema: Describes the logical structure of the entire database (tables, relationships, constraints).**  
> **3. External Schema: Describes different user views of the database (subsets of the logical schema).**



**c. With examples, give two differences between DDL and DML.**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **1. Purpose: DDL defines database structure (CREATE, ALTER, DROP), while DML manipulates data within those structures (SELECT, INSERT, UPDATE, DELETE).**  
> **2. Transaction Control: DDL statements are auto-committed and cannot be rolled back, while DML statements can be part of transactions and rolled back.**  
> **Example: CREATE TABLE Employee (DDL) vs INSERT INTO Employee VALUES (DML).**



**d. Define the term "database integrity". How does database integrity differ from database security?**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **Database integrity refers to the accuracy, consistency, and reliability of data stored in a database, enforced through constraints and rules.**  
> **Difference: Integrity ensures data is correct and consistent (quality of data), while security protects data from unauthorized access and modification (protection of data). Integrity is about data quality; security is about data protection.**



**e. With the aid of a well-drawn diagram, point out three advantages of using ANSI/SPARK architecture over the 2-tier architecture.**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **ANSI/SPARC Three-Level Architecture Advantages:**
> **1. Data Independence: Separates user applications from physical storage, allowing changes at one level without affecting others.**
> **2. Multiple User Views: Different users can have customized views of the same data.**
> **3. Better Security: Access can be controlled at different levels (external, conceptual, internal).**
> 
> **Diagram:**
> ```
> External Level (User Views)
>       ↑
> Conceptual Level (Community View)
>       ↑
> Internal Level (Physical Storage)
> ```

---

### **Question Six**

*Given the following database schemas*  
*Emp(empno, Ename, Job, sal, deptno, mgr, comm, hiredate)*  
*Dept(deptno, dname, loc)*  
*Salgrade(grade, hisal, losal)*

*Required: Write SQL statements to solve the following*

**a. Make grade column to become a primary key in the schema Salgrade**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> ```sql
> ALTER TABLE Salgrade ADD PRIMARY KEY (grade);
> ```



**b. Add column grade with the data type number and size of 2 in the schema emp**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> ALTER TABLE Emp ADD grade NUMBER(2);
> ```



**c. Make grade column in the schema emp a foreign key from schema salgrade**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> ALTER TABLE Emp ADD FOREIGN KEY (grade) REFERENCES Salgrade(grade);
> ```

---

**d. Modify the data type of column deptno in schema dept from number (2) to varchar2(10)**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> ALTER TABLE Dept MODIFY deptno VARCHAR2(10);
> ```



**e. Write the query to display employee name and salary of all employees who are working in department number 10**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT Ename, sal FROM Emp WHERE deptno = 10;
> ```



**f. Display the manager number and the salary of the lowest paid employee for that manager. Exclude anyone whose manager is not known. Exclude any groups where the minimum salary is less than $1000. Sort the output in descending order of the salary.**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT mgr, MIN(sal) AS lowest_salary
> FROM Emp
> WHERE mgr IS NOT NULL
> GROUP BY mgr
> HAVING MIN(sal) >= 1000
> ORDER BY lowest_salary DESC;
> ```



**g. Display the employee name and employee number along with their manager's name and manager number. Label the columns Employee, Emp#, Manager, and Mgr# respectively.**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT e1.Ename AS "Employee", e1.empno AS "Emp#", 
>        e2.Ename AS "Manager", e1.mgr AS "Mgr#"
> FROM Emp e1
> LEFT JOIN Emp e2 ON e1.mgr = e2.empno;
> ```



**h. Display the name, salary and commission for all employees who earn commission. Sort data in descending order of salary and commission.**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT Ename, sal, comm
> FROM Emp
> WHERE comm IS NOT NULL AND comm > 0
> ORDER BY sal DESC, comm DESC;
> ```

---

### **Question Seven**

**a. List and explain any three types of integrity constraints in database system**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **1. Entity Integrity: Primary key cannot contain NULL values and must be unique for each record.**  
> **2. Referential Integrity: Foreign key must either be NULL or match an existing primary key value in the referenced table.**  
> **3. Domain Integrity: Values in a column must be from a specified domain/data type and satisfy any constraints (CHECK constraints).**



**b. Consider the following relational schema and answer each of the following questions briefly**  
*Emp(eid: integer, ename: string, age: integer, salary: real)*  
*Works(eid: integer, did: integer, pct_time: integer)*  
*Dept(did: integer, dname: string, budget: real, managerid: integer)*

**i). Give an example of a foreign key constraint that involves the Dept relation. What are the options for enforcing this constraint when a user attempts to delete a Dept tuple?**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **Foreign Key Constraint: managerid in Dept table references eid in Emp table.**  
> **Enforcement Options:**  
> **1. RESTRICT: Prevent deletion if referenced tuples exist**  
> **2. CASCADE: Delete all referencing tuples when parent is deleted**  
> **3. SET NULL: Set foreign key to NULL when parent is deleted**  
> **4. SET DEFAULT: Set foreign key to default value when parent is deleted**



**ii). Define the Dept relation in SQL so that every department is guaranteed to have a manager.**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> CREATE TABLE Dept (
>     did INTEGER PRIMARY KEY,
>     dname VARCHAR(50) NOT NULL,
>     budget REAL,
>     managerid INTEGER NOT NULL,
>     FOREIGN KEY (managerid) REFERENCES Emp(eid)
> );
> ```



**iii). Create updatable view from Emp relation that contains employees with salary greater than 100,000**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> CREATE VIEW HighSalaryEmployees AS
> SELECT eid, ename, age, salary
> FROM Emp
> WHERE salary > 100000;
> ```



**iv). Create a non-updatable view that combine Emp and Works relations with pct_time less than 4 hrs and age greater than 25**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> CREATE VIEW PartTimeSeniorEmployees AS
> SELECT e.eid, e.ename, e.age, e.salary, w.did, w.pct_time
> FROM Emp e
> JOIN Works w ON e.eid = w.eid
> WHERE w.pct_time < 4 AND e.age > 25;
> ```



**c. Briefly describe the five components of the DBMS environment**  
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> **1. Hardware: Computer systems, storage devices, and network infrastructure that run the DBMS.**  
> **2. Software: DBMS software, operating system, and application programs that interact with the database.**  
> **3. Data: The actual data stored in the database, including the database schema and user data.**  
> **4. Procedures: Instructions and rules that govern the design and use of the database.**  
> **5. People: Users, database administrators, system analysts, and application programmers who interact with the database system.**


---

**END OF EXAMINATION PAPER**
