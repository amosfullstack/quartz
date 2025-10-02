
#### **Introduction to Database Systems - Exam**

**THE UNIVERSITY OF DODOMA**  
**COLLEGE OF INFORMATICS AND VIRTUAL EDUCATION**  
**SCHOOL OF INFORMATICS**  

**UNDERGRADUATE UNIVERSITY EXAMINATIONS**  
**SECOND SEMESTER 2022/2023**  

**CP 121 : INTRODUCTION TO DATABASE SYSTEMS**  

**Time Allocated:** 3 Hours  



**INSTRUCTIONS:**

1. This paper consists of **seven** questions.  
2. Answer **all** questions in **Section A** and **any two** questions from **Section B**.  
3. All University of Dodoma examination regulations apply.

---

## **SECTION A: (40 MARKS)**
*Attempt ALL questions from this section*

### **Question One**
*Read each question carefully and choose the most correct response.*
*(1 Mark Each)*

**i. The Relational Database Management Systems (RDBMS) provides all but which of the following?**  
A. Facilities for creating and maintaining relational schema  
B. Automated conversion of ERD into relational schema  
C. Concurrency control via transaction management  
D. Facilities to manipulate data in relational schema  
E. Integrity checking that forbids data changes that would violet integrity  

> [!Tip]- Answer (Click to show)
> **B. Automated conversion of ERD into relational schema**



**ii. Given the basic ERD and relational models, which of the following is INCORRECT?**  
A. An attribute of an entity can have more than one value  
B. In a row of a relational table, an attribute can have more than one value  
C. An attribute of an entity can be composite  
D. In a row of a relational table, an attribute can have exactly one value or a NULL value  
E. Some entities in an entity set may not participate in the relationship.  

> [!Tip]- Answer (Click to show)
> **B. In a row of a relational table, an attribute can have more than one value**



**iii. Failure to specify cascading delete when enforcing referential integrity can cause what problem?**  
A. The primary key may no longer be unique in a given table  
B. The primary key values in the originating table will all change to default values.  
C. There will be no control over the creation of duplicate data  
D. A foreign key may reference a value in the originating table that no longer exists.  
E. All the records in a given table can be accidentally deleted  

> [!Tip]- Answer (Click to show)
> **D. A foreign key may reference a value in the originating table that no longer exists.**



**iv. The following activities of the database development life cycle are not arranged in order; which sequence arrange them logically?**  
I. Select a suitable DBMS for the database system.  
II. Conceptual, logical and physical database design  
III. Specifying the scope and boundaries of the database systems  
IV. Planning how the stages of the life cycle can be realized  
V. Collecting and analyzing the database requirements  

A. I, II, IV, V, and III  
B. IV, III, I, V, and II  
C. V, IV, III, II, and I  
D. IV, III, V, II, and I  
E. I, III, II, IV and V  

> [!Tip]- Answer (Click to show)
> **D. IV, III, V, II, and I**



**v. In relational database model, after conceptually designing your database, the information contained in a single class would be stored in a:**  
A. Field  
B. Attribute  
C. Database  
D. Table  
E. Key  

> [!Tip]- Answer (Click to show)
> **D. Table**



**vi. Basic form for assigning access statement in DBMS is**  
A. create `<privilegelist>`  
B. assign `<privilegelist>`  
C. assign&define`<privilegelist>`  
D. define `<privilegelist>`  
E. grant `<privilegelist>`  

> [!Tip]- Answer (Click to show)
> **E. grant `<privilegelist>`**



**vii. Which of the following constraints cannot be added to an existing table with the ADD Clause of the alter table command?**  
A. CHECK  
B. NOT NULL  
C. UNIQUE  
D. REFERENCES  
E. PRIMARY  

> [!Tip]- Answer (Click to show)
> **B. NOT NULL**



**viii. Count function in SQL returns the number of:**  
A. Values  
B. Distinct values  
C. Groups  
D. Rows  
E. Columns  

> [!Tip]- Answer (Click to show)
> **D. Rows**



**ix. Consider the statement: CREATE TABLE T1 AS SELECT * FROM Regions WHERE 1=2**  
A. There will be an error because of the impossible condition  
B. No table will be created because the condition return FALSE  
C. The table T1 will be created but no rows inserted because the condition return FALSE  
D. The table T1 will be created and every row in Regions inserted because condition return a NULL.  
E. The table T1 will be created and every row in Regions inserted because condition return a TRUE.  

> [!Tip]- Answer (Click to show)
> **C. The table T1 will be created but no rows inserted because the condition return FALSE**



**x. Which SQL command is used to eliminate duplicate records from a query result?**  
A. COMBINE  
B. DISTINCT  
C. GROUP BY  
D. TOP [ ]  
E. UNIQUE  

> [!Tip]- Answer (Click to show)
> **B. DISTINCT**

---

### **Question Two**
*Match the item in Column A with its corresponding item in Column B.*
*(1 Mark Each)*

| Column A                                                                                                                                                   | Column B                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| i. Data Definition Language (DDL)                                                                                                                          | A. Distributed database System                    |
| ii. Modifying the database by adding a record types or data items or deleting some data items.                                                             | B. Candidate key                                  |
| iii. Useful for the applications that have to query extremely large database or that have to process an extremely large number of transactions per second. | C. A sudent's GPA must be between 0.00 and 5.00   |
| iv. Most of the functions such as update, backup, query, control access and so on, are easier to accomplish.                                               | D. Parallel Database Systems                      |
| v. WHERE CustomerName LIKE %br%?                                                                                                                           | E. ALl students should have a registration number |
| vi. A set of one or more attributes that, taken collectively, allow identifying uniquely a tuple in the relation.                                          | F. ALTER, CREATE RELEASE                          |
| vii. At some point it can have more values.                                                                                                                | G. Logical data linkage                           |
| viii. General integrity constraints                                                                                                                        | H. Do not add an ORDER BY CLAUSE                  |
| ix. Creating additional access structure to improve the performance of the retrieval or update                                                             | I. Physical Data Independence                     |
| x. Multiple-row operators in sub-query                                                                                                                     | J. Super key.                                     |
|                                                                                                                                                            | K. Retrive customer names(s) ending with br.      |
|                                                                                                                                                            | L. Logical database schema                        |
|                                                                                                                                                            | M. Multivalued attribute                          |
|                                                                                                                                                            | N. Foreign Key                                    |
|                                                                                                                                                            | O. Primary Key                                    |
|                                                                                                                                                            | P. IN, ANY and ALL                                |
|                                                                                                                                                            | Q. Centralized Database System                    |
|                                                                                                                                                            | R. CHECK                                          |
|                                                                                                                                                            | S. IN, ANY and BETWEEN                            |
|                                                                                                                                                            | T. Retrieve customer names containing br.         |

> [!Tip]- Answer (Click to show)
> **i - F**  
> **ii - I**  
> **iii - D**  
> **iv - Q**  
> **v - T**  
> **vi - B**  
> **vii - M**  
> **viii - R**  
> **ix - G**  
> **x - P**

---

### **Question Three**
*Write T for the correct statement and F for the incorrect statement is your answer booklet provided.*
*(1 Mark Each)*

**a. In the relational database modal, cardinality is termed as the number of attribute.**

> [!Tip]- Answer (Click to show)
> **F**



**b. A database transaction is a logical unit of database operations that must be entirely completed or entirely abandoned.**

> [!Tip]- Answer (Click to show)
> **T**



**c. Database security is the mechanism that protects the database against intentional or accidental threats.**

> [!Tip]- Answer (Click to show)
> **T**



**d. A candidate key is a set of one or more attributes that can uniquely identify a record in a relation.**

> [!Tip]- Answer (Click to show)
> **T**



**e. A relation is in second normal form if every non-prime attribute is fully functionally dependent on every candidate key.**

> [!Tip]- Answer (Click to show)
> **T**

---

## **SECTION B: (60 MARKS)**
*Attempt THREE (3) out of FOUR (4) questions to this section*

### **Question Five**

**A database is to be developed that will support the university of Dodoma library in managing books and borrowers. Carefully read the information provided and use it to answer questions that follow.**

*The library provides books to borrowers. Each book is described by title, edition, and year of publication, and is uniquely identified using the ISBN. Each borrower is described by his or her name and address and is uniquely identified using a borrower number. The library provides one or more copies of each book and each copy is uniquely identified using a copy number, status indicating if the book is available for loan, and the allowable loan period for a given copy. A borrower may loan one or many books, and the date each book is loaned out and is returned is recorded. Loan number uniquely identifies each book loan.*

**a. Design an entity-relationship diagram that captures the above requirements stated.**  
*(6 Marks)*

> [!Tip]- Answer (Click to show)
> *From the data below and relationships, you can draw the ERD*
> **Entities and Relationships:**
> - **Book** (ISBN, title, edition, year_published)
> - **BookCopy** (copy_number, status, loan_period, ISBN) [Foreign Key: ISBN references Book]
> - **Borrower** (borrower_number, name, address)
> - **Loan** (loan_number, loan_date, return_date, borrower_number, copy_number) [Foreign Keys: borrower_number references Borrower, copy_number references BookCopy]
> 
> **Relationships:**
> - Book (1) --- has --- (M) BookCopy
> - Borrower (1) --- borrows --- (M) Loan
> - BookCopy (1) --- is_borrowed_in --- (M) Loan



**b. Based on the ERD in (a), develop a corresponding relational database schema, list tables with their attributes. For each table indicate the attribute(s) that makes a primary key also indicates foreign key whenever possible.**  
*(6 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> Book (ISBN PK, title, edition, year_published)
> BookCopy (copy_number PK, status, loan_period, ISBN FK references Book(ISBN))
> Borrower (borrower_number PK, name, address)
> Loan (loan_number PK, loan_date, return_date, borrower_number FK references Borrower(borrower_number), copy_number FK references BookCopy(copy_number))
> ```



**c. Choose only two tables from logical schema in (b) and create two data dictionaries.**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **Book Table Data Dictionary:**
> 
> | Attribute | Data Type | Constraints | Description |
> |-----------|-----------|-------------|-------------|
> | ISBN | VARCHAR(13) | PRIMARY KEY | International Standard Book Number |
> | title | VARCHAR(100) | NOT NULL | Book title |
> | edition | VARCHAR(20) | | Edition of the book |
> | year_published | INT | | Year of publication |
> 
> **Borrower Table Data Dictionary:**
> 
> | Attribute | Data Type | Constraints | Description |
> |-----------|-----------|-------------|-------------|
> | borrower_number | VARCHAR(10) | PRIMARY KEY | Unique borrower identifier |
> | name | VARCHAR(50) | NOT NULL | Borrower's full name |
> | address | VARCHAR(100) | | Borrower's address |



**d. From the data dictionaries in (c) create two physical schemas. Be certain to indicate entity integrity, referential integrity and domain integrity whenever possible.**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> CREATE TABLE Book (
>     ISBN VARCHAR(13) PRIMARY KEY,
>     title VARCHAR(100) NOT NULL,
>     edition VARCHAR(20),
>     year_published INT CHECK (year_published > 1500 AND year_published <= YEAR(GETDATE()))
> );
> 
> CREATE TABLE Borrower (
>     borrower_number VARCHAR(10) PRIMARY KEY,
>     name VARCHAR(50) NOT NULL,
>     address VARCHAR(100)
> );
> ```

---

### **Question Six**

*Consider the following relational schema. An employee can work in more than one department; the pct_time field of the Works relation shows the percentage of time that a given employee works in a given department.*  
*Emp(eid: Int, ename: varchar(40), DoB: Int, salary: float)*  
*Works(eid: Int, did: Int, pct_time: Int)*  
*Dep(did: Int, dname: varchar(40), budget: float, managereid: int)*  

**Using SQL answer the following questions:**

**a. Add a column eAddress with the data type varchar and size 30 in the schema Emp.**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> ALTER TABLE Emp ADD eAddress VARCHAR(30);
> ```



**b. Modify the data type of column DoB in schema Emp from int to date.**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> ALTER TABLE Emp ALTER COLUMN DoB DATE;
> ```



**c. Write a query to display employee names who are working in the department with did 10.**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT ename FROM Emp 
> WHERE eid IN (SELECT eid FROM Works WHERE did = 10);
> ```



**d. Give all employees with salary less than 500,000 shillings a 10 percent raise to their salary.**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> UPDATE Emp 
> SET salary = salary * 1.10 
> WHERE salary < 500000;
> ```



**e. Write a query to display the names of employees who are managers along with the departments they are managing.**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT e.ename, d.dname 
> FROM Emp e 
> JOIN Dep d ON e.eid = d.managereid;
> ```



**f. Print the name of employee whose salary exceeds the budget of all of the departments that he or she works in.**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT e.ename 
> FROM Emp e 
> WHERE e.salary > ALL (
>     SELECT d.budget 
>     FROM Dep d 
>     JOIN Works w ON d.did = w.did 
>     WHERE w.eid = e.eid
> );
> ```



**g. Find the managers who manage only departments with budgets greater than 1,000,000 shillings, but at least one department with budget less than 5,000,000.**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT e.ename 
> FROM Emp e 
> JOIN Dep d ON e.eid = d.managereid 
> GROUP BY e.eid, e.ename 
> HAVING MIN(d.budget) > 1000000 AND MAX(d.budget) < 5000000;
> ```

---

### **Question Seven**

**a. Briefly explain the main goal of database normalization when design the database.**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **The main goal of database normalization is to organize data to reduce redundancy and eliminate undesirable characteristics like Insertion, Update, and Deletion Anomalies. It involves dividing large tables into smaller, related tables and defining relationships between them to ensure data integrity and minimize data duplication.**



**b. Differentiate the following:**  
**i. First Database Normal form (1NF) and second Database Normal form (2NF).**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **1NF requires that all attributes contain atomic (indivisible) values and there are no repeating groups. 2NF requires that the table is in 1NF and all non-prime attributes are fully functionally dependent on the primary key (no partial dependencies).**



**ii. Second Database Normal form (2NF) and Third Database Normal form (3NF) if Insertion manually and Update normally.**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **2NF eliminates partial dependencies, while 3NF eliminates transitive dependencies. In terms of insertion and update: In 2NF, insertion anomalies may still occur if adding data about one entity requires data about another. In 3NF, update anomalies are minimized as changes to one attribute don't require changes to unrelated attributes.**



**c. An engineering consultancy firm supplies temporary specialized staff to higher companies in the country to work on their project for certain amount of time. The Table 1 lists the time spent by each of its company's employees at other companies to carry out projects. The National Insurance Number (NIN) is unique for every member of staff.**

*Table 1. Time Spent by Employee*

| NIN | Contrast No. | Hours | Employer Name | Company ID | Company Location |
|-----|-------------|-------|--------------|------------|-----------------|
| 616681IB | SC1025 | 172 | P. White | SC115 | BeiEan |
| 674315A | SC1025 | 48 | R. Press | SC114 | BeiEan |
| 322111B | SC1026 | 24 | P. Smith | SC23 | Bieger |
| 616681B | SC1026 | 24 | P. White | SC23 | Bieger |

**i. Find the Primary Key (PK) for this relation and explain your choice.**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **Composite Primary Key: (NIN, Contrast No.)**  
> **Explanation: Both NIN and Contrast No. are needed to uniquely identify each record since an employee (same NIN) can work on multiple contracts, and a contract can have multiple employees.**



**ii. Find fully functional dependencies on the PK and the partial functional dependencies on the PK.**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **Fully Functional Dependencies on (NIN, Contrast No.):**
> - (NIN, Contrast No.) → Hours
> 
> **Partial Functional Dependencies:**
> - NIN → Employer Name
> - Contrast No. → Company ID, Company Location



**iii. Normalize the table to 2NF.**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> **After 2NF Normalization:**
> 
> **Employee Table:**
> | NIN (PK) | Employer Name |
> |----------|--------------|
> | 616681IB | P. White |
> | 674315A | R. Press |
> | 322111B | P. Smith |
> | 616681B | P. White |
> 
> **Contract Table:**
> | Contrast No. (PK) | Company ID | Company Location |
> |------------------|------------|------------------|
> | SC1025 | SC115 | BeiEan |
> | SC1026 | SC23 | Bieger |
> 
> **Works Table:**
> | NIN (FK) | Contrast No. (FK) | Hours |
> |----------|------------------|-------|
> | 616681IB | SC1025 | 172 |
> | 674315A | SC1025 | 48 |
> | 322111B | SC1026 | 24 |
> | 616681B | SC1026 | 24 |

---

### **Question Eight**

**a. Database design is an important phase in Database Development Life Cycle (DBDLC). Imagine you are working in project to develop a database for BMH hospital. Being a part of the project start-up team, your manger has asked you to prepare a work plan that will identify the phases of the database design and include the following information for each phase.**  
*(12 Marks)*

> [!Tip]- Answer (Click to show)
> | Phase | Description | Key Issues Addressed | Inputs | Outputs |
> |-------|-------------|---------------------|--------|---------|
> | Requirements Analysis | Gathering and analyzing user requirements | Understanding user needs, scope definition | User interviews, business documents | Requirements specification document |
> | Conceptual Design | Creating high-level data model | Identifying entities, relationships, attributes | Requirements document | ER Diagram, Conceptual schema |
> | Logical Design | Translating conceptual model to relational model | Mapping ER to tables, normalization | ER Diagram | Logical schema, Data dictionary |
> | Physical Design | Implementing database in specific DBMS | Storage structures, indexing, security | Logical schema, DBMS specifications | Physical schema, SQL DDL statements |
> | Implementation | Creating database and loading data | Data conversion, application development | Physical schema, test data | Working database system |
> | Testing & Maintenance | Ensuring quality and ongoing support | Performance tuning, backup/recovery | Test cases, user feedback | Optimized system, maintenance plan |



**b. Assume another team leader for the BMH hospital database has brought the following schema that need to be implemented in RDBMS.**

*Patient (patientNo, paiName, paid\dab', DnB, Gender)*  
*Ward (wardNo, wardName, wardType, mOjBedu)*  
*Contains (patientNo, wardNo, admissionDate)*  
*Drug (drugNo, drugName, costPortUnit)*  
*Prescribed(patientNo,drugNo,unitPartDoy,wariDate,finishDate)*

**i. Implement prescribed table such that patientNo and drugNo have the same values as in Patient and Drug tables. Also ensures that when system administrator will modify either patientNo or drugNo or both the values should be reflected on prescribed table and when the administrator will try to delete patientNo or drugNo values in their parent tables the operation should fail. Lastly, ensure that the unit per day ranges from 1 to 3.**  
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> CREATE TABLE Prescribed (
>     patientNo VARCHAR(10),
>     drugNo VARCHAR(10),
>     unitPartDoy INT CHECK (unitPartDoy BETWEEN 1 AND 3),
>     wariDate DATE,
>     finishDate DATE,
>     PRIMARY KEY (patientNo, drugNo),
>     FOREIGN KEY (patientNo) REFERENCES Patient(patientNo) ON UPDATE CASCADE ON DELETE RESTRICT,
>     FOREIGN KEY (drugNo) REFERENCES Drug(drugNo) ON UPDATE CASCADE ON DELETE RESTRICT
> );
> ```

---

**ii. Implement Ward table such that the following SQL error will occurred Violation of UNIQUE KEY constraint 'UQ_Ward_5E5082657C5C2E0C'. Cannot insert duplicate key in object 'dbo.Ward', when user will try to insert the following records on ward table:- ('WOI', 'Male Ward', 'Private', 12) and ('WO2', 'Male Ward', 'General', 20).**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> CREATE TABLE Ward (
>     wardNo VARCHAR(10) PRIMARY KEY,
>     wardName VARCHAR(50) UNIQUE NOT NULL,
>     wardType VARCHAR(20),
>     mOjBedu INT
> );
> ```



---


**END OF EXAMINATION PAPER**