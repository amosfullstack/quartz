#### **Introduction to Database Systems - Exam**

**THE UNIVERSITY OF DODOMA**

**OFFICE OF THE DEPUTY VICE CHANCELLOR ACADEMIC, RESEARCH AND CONSULTANCY**

**COLLEGE OF INFORMATICS AND VIRTUAL EDUCATION**

**Department of Computer Science and Engineering Supplementary/Special Examination for the 2021/2022 Academic Year**

**Course Name:** Introduction to Database Systems  
**Paper Code Number:** CP 121  
**Date of Examination:** 13th October, 2022  
**Time:** 08:00 – 11:00  
**Duration:** 3 Hours  

---

## **SECTION A: (15 MARKS)**

### **Question One**
*Read each question carefully and choose the most correct response.*
*(0.5 Marks Each)*

**i. Which of the following items is not the advantage of a DBMS?**  
A. Minimal data redundancy  
B. Security management  
C. Improved ability to enforce standards  
D. Improved data consistency  
E. Local control over the data  

> [!Tip]- Answer (Click to show)
> **E. Local control over the data**



**ii. In relational database model, after conceptually designing your database, the information contained in a single class would be stored in a:**  
A. Field  
B. Attribute  
C. Database  
D. Table  
E. Keys  

> [!Tip]- Answer (Click to show)
> **D. Table**

\

**iii. Suppose you have two tables, Employee_1, and Employee_2. The Employee_1 table contains the records for three employees: Alice Juma, John Charles, and Anne McDonald. The Employee_2 table in other hand contains the records for employee John Charles and Mary Chen. Which SQL command operation will output Mary Chen only?**  
A. UNION  
B. Employee_1 (minus) Employee_2  
C. UNION ALL  
D. INTERSECTION  
E. Employee_2 (minus) Employee_1  

> [!Tip]- Answer (Click to show)
> **E. Employee_2 (minus) Employee_1**



**iv. For each attribute of relation, there is a set of permitted values, called ... of that attribute.**  
A. Schema  
B. Relation  
C. Set  
D. Null  
E. Domain  

> [!Tip]- Answer (Click to show)
> **E. Domain**



**v. Given the basic ERD and relational models, which of the following is INCORRECT?**  
A. An attribute of an entity can have more than one value  
B. In a row of a relational table, an attribute can have more than one value  
C. An attribute of an entity can be composite  
D. In a row of a relational table, an attribute can have exactly one value or a NULL value  
E. Some entities in an entity set may not participate in the relationship.  

> [!Tip]- Answer (Click to show)
> **B. In a row of a relational table, an attribute can have more than one value**



**vi. Basic form for assigning access statement in DBMS is**  
A. create `<privilegels>`  
B. assign `<privilegels>`  
C. assign&define`<privilegels>`
D. define `<privilegels>`  
E. grant `<privilegels>`  

> [!Tip]- Answer (Click to show)
> **E. grant `<privilegels>`**



**vii. Count function in SQL returns the number of:**  
A. Values  
B. Distinct values  
C. Groups  
D. Rows  
E. Columns  

> [!Tip]- Answer (Click to show)
> **D. Rows**



**viii. Which SQL command is used to eliminate duplicate records from a query result?**  
A. COMBINE  
B. DISTINCT  
C. GROUP BY  
D. TOP [ ]  
E. UNIQUE  

> [!Tip]- Answer (Click to show)
> **B. DISTINCT**



**ix. Failure to specify cascading delete when enforcing referential integrity can cause what problem?**  
A. The primary key may no longer be unique in a given table  
B. The primary key values in the originating table will all change to default values.  
C. There will be no control over the creation of duplicate data  
D. A foreign key may reference a value in the originating table that no longer exists.  
E. All the records in a given table can be accidentally deleted  

> [!Tip]- Answer (Click to show)
> **D. A foreign key may reference a value in the originating table that no longer exists.**



**x. Which is NOT true about HAVING Clause as used in SQL?**  
A. Can be applied to group of columns that appear in GROUP BY Clause  
B. Can be applied anywhere in database table  
C. Can be applied to column(s) that appear in aggregate function  
D. Can be applied to the rows in the results set  
E. Can be applied to sorted columns  

> [!Tip]- Answer (Click to show)
> **B. Can be applied anywhere in database table**

---

### **Question Two**
*Match the item in Column A with its corresponding item in Column B.*
*(0.5 Marks Each)*

| Column A | Column B |
| :--- | :--- |
| i. Useful for the applications that have to query extremely large database or that have to process an extremely large number of transactions per second. |  |
| ii. Most of the functions such as update, backup, query, control access and so on, are easier to accomplish. |  |
| iii. WHERE CustomerName LIKE '%br%' |  |
| iv. A set of one or more attributes that, taken collectively, allow identifying uniquely a tuple in the relation. |  |
| v. Each tuple is distinct; there are no duplicate tuples. |  |
| vi. General integrity constraints |  |
| vii. Modifying the database by adding a record types or data items or deleting some data items. |  |
| viii. Remove data redundancy. |  |
| ix. Creating additional access structure to improve the performance of the retrieval or update |  |
| x. Multiple-row operators in subquery |  |

**Column B Options:**
A. Distributed database System  
B. Candidate key  
C. A student's GPA must be between 0.00 and 5.00  
D. Parallel Database Systems  
E. All students should have a registration number  
F. Normalization  
G. Logical data independence  
H. Do not add an ORDER BY clause  
I. Physical Data Independence  
J. Super key  
K. Retrieve customer name(s) ending with br  
L. Logical database Schema  
M. Denormalization  
N. Foreign Key  
O. Primary key  
P. IN, ANY and ALL  
Q. Centralized Database System  
R. CHECK  
S. IN, ANY and BETWEEN  
T. Retrieve customer name(s) containing br  

> [!Tip]- Answer (Click to show)
> 
> | Column A | Column B |
> | :--- | :--- |
> | i. Useful for the applications that have to query extremely large database or that have to process an extremely large number of transactions per second. | **D. Parallel Database Systems** |
> | ii. Most of the functions such as update, backup, query, control access and so on, are easier to accomplish. | **Q. Centralized Database System** |
> | iii. WHERE CustomerName LIKE '%br%' | **T. Retrieve customer name(s) containing br** |
> | iv. A set of one or more attributes that, taken collectively, allow identifying uniquely a tuple in the relation. | **B. Candidate key** |
> | v. Each tuple is distinct; there are no duplicate tuples. | **O. Primary key** |
> | vi. General integrity constraints | **R. CHECK** |
> | vii. Modifying the database by adding a record types or data items or deleting some data items. | **I. Physical Data Independence** |
> | viii. Remove data redundancy. | **F. Normalization** |
> | ix. Creating additional access structure to improve the performance of the retrieval or update | **M. Denormalization** |
> | x. Multiple-row operators in subquery | **P. IN, ANY and ALL** |


---

### **Question Three**
*Consider the ER model given in Figure 1. This model represents the operations of a pharmacy chain. Please answer the following questions regarding this model*


![[Pasted image 20251002152954.png]]


**a. Can a pharmaceutical company have multiple phone numbers? If not, what do you need to do to allow this?**  
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> **No, based on the current ER model, a pharmaceutical company can have only one phone number. To allow multiple phone numbers, we need to change the Phone attribute from a simple attribute to a multivalued attribute or create a separate entity for Phone numbers.**



**b. If you delete from the database the pharmaceutical company that manufactures a drug, what happens to the drugs that the company manufactures? Justify your argument**  
*(1.5 Marks)*

> [!Tip]- Answer (Click to show)
> **Based on the current ER model, if we delete a pharmaceutical company, the drugs manufactured by that company would become orphaned records without a manufacturer. This violates referential integrity. To prevent this, we should implement referential integrity constraints with appropriate delete rules (CASCADE, SET NULL, or RESTRICT).**



**c. Modify the model in Figure 1, by redrawing another figure in your paper. What is your booklet so that you can represent the following:**  
*(2.5 Marks)*

**i. Each patient has to have one and only one primary physician. Each physician has at least one patient. We want to know at least the specialty and the date of entry into the profession of each physician.**

**ii. Instead of modeling only the fact that a patient takes certain drugs, model the fact that a patient takes certain drugs that are prescribed by a physician and the prescription date.**

> [!Tip]- Answer (Click to show)
> *Draw the ERD using the below data*
> **Modified ER Model:**
> - Add new entity: **Physician** (physicianID, name, specialty, entryDate)
> - Add relationship: **Patient** (1) --- has_primary --- (1) **Physician**
> - Modify relationship: Replace "Takes" relationship with **Prescription** relationship set connecting **Patient**, **Physician**, and **Drug** with attribute **prescriptionDate**
> - Add cardinality: Patient (M) --- prescribed_by --- (1) Physician
> - Add cardinality: Drug (M) --- prescribed_in --- (1) Prescription

---

## **SECTION B: (45 MARKS)**
*Attempt THREE (3) out of FOUR (4) questions in this section*

### **Question Four**

**A database is to be developed that will support Motor Vehicle Company to manage driving tests and licenses. Carefully read the information provided and use it to answer the questions.**

*The Motor Vehicle Company administers driving tests and issues driver's licenses. The company has many branches in Tanzania which are uniquely identified by their ID. Any person who wants a driver's license must first take a learner's exam at any Motor Vehicle Branch in any region in Tanzania. A person is also a driver. During the registration process, a driver must issue the following information (driver name, DOB, address, phone number, city). After registration the driver will be given an ID which is unique. If he/she fails the exam, he can take the exam again any time after a week of the failed exam date, at any branch. If he passes the exam, he is issued a license (type = learner's) with a unique license number. Exam which driver takes must contains the following information (exam type, exam score, exam date and exam ID (unique). A learner's license may contain a single restriction on it such that she/he cannot drive alone. The person may take his driver's exam at any branch any time before the learner's license expiry date (which is usually set at six months after the license issue date). If he passes the exam, the branch issues him a driver's license. A driver's license must also record is characterised with license no, license class, license expiry and driver's education,*

**a) Design an entity-relationship diagram that captures the above requirements stated.**  
*(5 Marks)*

> [!Tip]- Answer (Click to show)
> *Draw the ERD with the below data*
> **Entities:**
> - **Branch** (branchID, location, region)
> - **Driver** (driverID, name, DOB, address, phone, city)
> - **Exam** (examID, examType, examScore, examDate, driverID, branchID)
> - **License** (licenseNo, licenseType, issueDate, expiryDate, licenseClass, driverEducation, restriction, driverID, branchID)
> 
> **Relationships:**
> - Branch (1) --- administers --- (M) Exam
> - Driver (1) --- takes --- (M) Exam
> - Branch (1) --- issues --- (M) License
> - Driver (1) --- holds --- (M) License



**b) Based on the ERD in (a), develop a corresponding relational database schema, list tables with their attributes. For each table indicate the attribute(s) that makes a primary key also indicates foreign key whenever possible.**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> Branch (branchID PK, location, region)
> Driver (driverID PK, name, DOB, address, phone, city)
> Exam (examID PK, examType, examScore, examDate, driverID FK references Driver(driverID), branchID FK references Branch(branchID))
> License (licenseNo PK, licenseType, issueDate, expiryDate, licenseClass, driverEducation, restriction, driverID FK references Driver(driverID), branchID FK references Branch(branchID))
> ```



**c) Choose only two tables from logical schema in (b) and create two data dictionaries.**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **Driver Table Data Dictionary:**
> 
> | Attribute | Data Type | Constraints | Description |
> |-----------|-----------|-------------|-------------|
> | driverID | VARCHAR(10) | PRIMARY KEY | Unique driver identifier |
> | name | VARCHAR(50) | NOT NULL | Driver's full name |
> | DOB | DATE | NOT NULL | Date of birth |
> | address | VARCHAR(100) | | Physical address |
> | phone | VARCHAR(15) | | Contact number |
> | city | VARCHAR(30) | | City of residence |
> 
> **License Table Data Dictionary:**
> 
> | Attribute | Data Type | Constraints | Description |
> |-----------|-----------|-------------|-------------|
> | licenseNo | VARCHAR(15) | PRIMARY KEY | Unique license number |
> | licenseType | VARCHAR(20) | NOT NULL | Type of license |
> | issueDate | DATE | NOT NULL | Date issued |
> | expiryDate | DATE | NOT NULL | Expiry date |
> | licenseClass | VARCHAR(5) | | License class |
> | driverEducation | VARCHAR(50) | | Education completed |
> | restriction | VARCHAR(100) | | Driving restrictions |
> | driverID | VARCHAR(10) | FOREIGN KEY | Reference to driver |
> | branchID | VARCHAR(10) | FOREIGN KEY | Issuing branch |



**d) From the data dictionaries in (c) create two physical schemas. Be certain to indicate entity integrity, referential integrity and domain integrity whenever possible.**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> CREATE TABLE Driver (
>     driverID VARCHAR(10) PRIMARY KEY,
>     name VARCHAR(50) NOT NULL,
>     DOB DATE NOT NULL CHECK (DOB < GETDATE()),
>     address VARCHAR(100),
>     phone VARCHAR(15),
>     city VARCHAR(30)
> );
> 
> CREATE TABLE License (
>     licenseNo VARCHAR(15) PRIMARY KEY,
>     licenseType VARCHAR(20) NOT NULL CHECK (licenseType IN ('Learner', 'Driver')),
>     issueDate DATE NOT NULL,
>     expiryDate DATE NOT NULL CHECK (expiryDate > issueDate),
>     licenseClass VARCHAR(5),
>     driverEducation VARCHAR(50),
>     restriction VARCHAR(100),
>     driverID VARCHAR(10) NOT NULL,
>     branchID VARCHAR(10) NOT NULL,
>     FOREIGN KEY (driverID) REFERENCES Driver(driverID),
>     FOREIGN KEY (branchID) REFERENCES Branch(branchID)
> );
> ```

---

### **Question Five**

**a. Database design is an important phase in Database Development Life Cycle (DBDLC). Imagine you are working in project to develop a database for BMH hospital. Being a part of the project start-up team, your manger has asked you to prepare a work plan that will identify the phases of the database design and include the following information for each phase.**  
*(8 Marks)*

> [!Tip]- Answer (Click to show)
> | Phase | Description | Key Issues Addressed | Inputs | Outputs |
> |-------|-------------|---------------------|--------|---------|
> | Requirements Analysis | Gathering and analyzing user requirements | Understanding user needs, scope definition | User interviews, business documents | Requirements specification document |
> | Conceptual Design | Creating high-level data model | Identifying entities, relationships, attributes | Requirements document | ER Diagram, Conceptual schema |
> | Logical Design | Translating conceptual model to relational model | Mapping ER to tables, normalization | ER Diagram | Logical schema, Data dictionary |
> | Physical Design | Implementing database in specific DBMS | Storage structures, indexing, security | Logical schema, DBMS specifications | Physical schema, SQL DDL statements |
> | Implementation | Creating database and loading data | Data conversion, application development | Physical schema, test data | Working database system |
> | Testing & Maintenance | Ensuring quality and ongoing support | Performance tuning, backup/recovery | Test cases, user feedback | Optimized system, maintenance plan |



**b. Assume another team leader for the BMH hospital database has brought the following schema that need to be implemented and modified in RDBMS.**

*Patient (patientNo, patName, patAddr, DoB, Gender)*  
*Ward (wardNo, wardName, wardType, noOfBeds)*  
*Contains (patientNo, wardNo, admissionDate)*  
*Drug (drugNo, drugName, costPerUnit)*  
*Prescribed(patientNo,drugNo, unitsPerDay, startDate,finishedDate)*

**i. Assume *Contains* table has been created without specifying the primary and foreign keys. Write SQL commands that will add specific column as primary key and foreign keys respectively.**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> ALTER TABLE Contains 
> ADD PRIMARY KEY (patientNo, wardNo, admissionDate);
> 
> ALTER TABLE Contains 
> ADD FOREIGN KEY (patientNo) REFERENCES Patient(patientNo);
> 
> ALTER TABLE Contains 
> ADD FOREIGN KEY (wardNo) REFERENCES Ward(wardNo);
> ```



**ii. Implement *prescribed* table such that *patientNo* and *drugNo* have the same values as in Patient and Drug tables. Also ensures that when system administrator will modify either *patientNo* or *drugNo* or both the values should be reflected on *prescribed* table and when the administrator will try to delete patientNo or *drugNo* values in their parent tables the operation should fail. Lastly, ensure that the unit per day ranges from 1 to 3.**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> CREATE TABLE Prescribed (
>     patientNo VARCHAR(10),
>     drugNo VARCHAR(10),
>     unitsPerDay INT CHECK (unitsPerDay BETWEEN 1 AND 3),
>     startDate DATE,
>     finishedDate DATE,
>     PRIMARY KEY (patientNo, drugNo, startDate),
>     FOREIGN KEY (patientNo) REFERENCES Patient(patientNo) ON UPDATE CASCADE ON DELETE RESTRICT,
>     FOREIGN KEY (drugNo) REFERENCES Drug(drugNo) ON UPDATE CASCADE ON DELETE RESTRICT
> );
> ```



**iii. Assume the patient data are stored in external file named patientData.txt, under the path *C:\User\Desktop\bmh*. Write SQL command that will load the external file into Patient table.**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> BULK INSERT Patient
> FROM 'C:\User\Desktop\bmh\patientData.txt'
> WITH (
>     FIELDTERMINATOR = ',',
>     ROWTERMINATOR = '\n'
> );
> ```

---

### **Question Six**

*Consider the following relational schema. An employee can work in more than one department; the *pct_time* filed of the Works relation shows the percentage of time that a given employee works in a given department:*  
*Emp(eid: integer, ename: string, age: integer, salary: float)*  
*Works(eid: integer, did: integer, pct_time: integer)*  
*Dep(did: integer, dname: string, budget: float, manager_id: integer)*

**a. Find the department with the lowest budget.**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT dname 
> FROM Dep 
> WHERE budget = (SELECT MIN(budget) FROM Dep);
> ```



**b. Find the names of employees and their departments.**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT e.ename, d.dname 
> FROM Emp e 
> JOIN Works w ON e.eid = w.eid 
> JOIN Dep d ON w.did = d.did;
> ```



**c. Give all employees with salary less than 500,000 shilling a 10 percent raise of their salary.**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> UPDATE Emp 
> SET salary = salary * 1.10 
> WHERE salary < 500000;
> ```



**d. Find the name of employee who has worked for many hours in his/her department.**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT e.ename 
> FROM Emp e 
> JOIN Works w ON e.eid = w.eid 
> WHERE w.pct_time = (SELECT MAX(pct_time) FROM Works);
> ```



**e. Print the name of employee whose salary exceeds the budget of all of the departments that he or she works in.**  
*(3 Marks)*

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



**f. Find the managers who manage only departments with budgets greater than 1,000,000 shillings, but at least one department with budget less than 5,000,000.**  
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT e.ename 
> FROM Emp e 
> JOIN Dep d ON e.eid = d.manager_id 
> GROUP BY e.eid, e.ename 
> HAVING MIN(d.budget) > 1000000 AND MAX(d.budget) < 5000000;
> ```

---

### **Question Seven**

**a. Briefly explain how complex and expiring password mechanisms help to protect database in modern database systems.**  
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **Complex passwords prevent easy guessing through dictionary attacks by requiring combinations of uppercase, lowercase, numbers, and special characters. Expiring passwords force regular changes, reducing the risk of compromised credentials being used long-term. Both mechanisms work together to strengthen authentication security.**



**b. One of the main responsibilities of a database developer is to enforce the domain, entity and referential integrity constraints on database tables. Carefully study Table 1, 2 and 3 and use them to answer the questions that follow:**

*Table 1: Hotel Table*
*Table 2: Hotel_Package Table* 
*Table 3: Package Table*

**i. Write SQL commands to show how you would implement each of these constraints on Table 1, 2 and 3.**  
*(7 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> -- Hotel Table with constraints
> CREATE TABLE Hotel (
>     hotel_code VARCHAR(3) PRIMARY KEY,
>     hotel VARCHAR(50) NOT NULL,
>     resort VARCHAR(50) NOT NULL
> );
> 
> -- Package Table with constraints
> CREATE TABLE Package (
>     package_id INT PRIMARY KEY CHECK (package_id > 0),
>     catering VARCHAR(2) CHECK (catering IN ('SC', 'FB', 'HB')),
>     nights INT CHECK (nights > 0),
>     month VARCHAR(10) CHECK (month IN ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'))
> );
> 
> -- Hotel_Package Table with constraints
> CREATE TABLE Hotel_Package (
>     hotel_code VARCHAR(3),
>     package_id INT,
>     price DECIMAL(10,2) CHECK (price > 0),
>     PRIMARY KEY (hotel_code, package_id),
>     FOREIGN KEY (hotel_code) REFERENCES Hotel(hotel_code),
>     FOREIGN KEY (package_id) REFERENCES Package(package_id)
> );
> ```



**ii. Write two (2) SQL statements, one an INSERT and the other a DELETE/UPDATE that will test whether your referential integrity constraint in b (i) is working.**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> -- Test INSERT (should fail due to referential integrity)
> INSERT INTO Hotel_Package (hotel_code, package_id, price) 
> VALUES ('XYZ', 99, 200.00);
> 
> -- Test DELETE (should fail due to referential integrity)
> DELETE FROM Hotel WHERE hotel_code = 'ELB';
> ```



**iii. To hide the data in database the database administrator may use views. Write SQL command to create updatable view form the given tables. Note that the view should involve all tables.**  
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> CREATE VIEW HotelPackageView AS
> SELECT h.hotel_code, h.hotel, h.resort, 
>        hp.package_id, hp.price,
>        p.catering, p.nights, p.month
> FROM Hotel h
> JOIN Hotel_Package hp ON h.hotel_code = hp.hotel_code
> JOIN Package p ON hp.package_id = p.package_id;
> ```

---


**END OF EXAMINATION PAPER**
