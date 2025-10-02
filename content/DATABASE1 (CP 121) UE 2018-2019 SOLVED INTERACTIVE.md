#### **Introduction to Database Systems - Exam**

**THE UNIVERSITY OF DODOMA**  
**COLLEGE OF INFORMATICS AND VIRTUAL EDUCATION**  
**SCHOOL OF INFORMATICS**

**UNDERGRADUATE UNIVERSITY EXAMINATIONS**  
**SECOND SEMESTER 2018/2019**

**CS 125: INTRODUCTION TO DATABASE SYSTEMS**  
**Date:** 01st July, 2019  
**Time Allocated:** 3 Hours

---

## **SECTION A (60 Marks)**

### **Question One**
*Choose the most correct answer and write its letter in the answer book provided: -*  
*[1 Mark Each]*

**i. Software that defines a database, stores the data, supports a query language, produces reports and creates data entry screens is a:**  
A. Data Definition Software  
B. Database management system (DBMS)  
C. Decision support system  
D. Relational database  

> [!Tip]- Answer (Click to show)
> **B. Database management system (DBMS)**



**ii. The separation of the data definition from the program is known as:**  
A. Data integrity  
B. Data dictionary  
C. Data independence  
D. Referential integrity  

> [!Tip]- Answer (Click to show)
> **C. Data independence**



**iii. In the client / server model, the database:**  
A. is downloaded to the client upon request  
B. is shared by both the client and server  
C. resides on the client side  
D. resides on the server side  

> [!Tip]- Answer (Click to show)
> **D. resides on the server side**



**iv. The database design that consists of multiple tables that are linked together through matching data stored in each table is called a:**  
A. Hierarchical database  
B. Network database  
C. Relational database  
D. Object oriented database  

> [!Tip]- Answer (Click to show)
> **C. Relational database**



**v. Which of the following items is not the advantage of a DBMS?**  
A. Improved ability to enforce standards  
B. Improved data consistency  
C. Local control over the data  
D. Minimal data redundancy  

> [!Tip]- Answer (Click to show)
> **C. Local control over the data**



**vi. In relational database model, after conceptually designing your database, the information contained in a single class would be stored in a:**  
A. Table  
B. Database  
C. Field  
D. Property  

> [!Tip]- Answer (Click to show)
> **A. Table**



**vii. With SQL, how do you select all records from a table named "Persons" where the value of the column "FirstName" is "Peter"?**  
A. SELECT [all] FROM Persons WHERE FirstName LIKE 'Peter'  
B. SELECT * FROM Persons WHERE FirstName<>'Peter'  
C. SELECT [all] FROM Persons WHERE FirstName='Peter'  
D. SELECT * FROM Persons WHERE FirstName='Peter'  

> [!Tip]- Answer (Click to show)
> **D. SELECT * FROM Persons WHERE FirstName='Peter'**



**viii. Given the basic ERD and relational models, which of the following is INCORRECT?**  
A. An attribute of an entity can have more than one value  
B. An attribute of an entity can be composite  
C. In a row of a relational table, an attribute can have more than one value  
D. In a row of a relational table, an attribute can have exactly one value or a NULL value  

> [!Tip]- Answer (Click to show)
> **C. In a row of a relational table, an attribute can have more than one value**



**ix. Which is TRUE about ORDER BY Clause as used in SQL:**  
A. Alters the order in which items are returned  
B. Aggregate records by the specified columns  
C. Filter the records if the condition specified is met  
D. Specifies the tables involved in a query  

> [!Tip]- Answer (Click to show)
> **A. Alters the order in which items are returned**



**x. Key to represent relationship between tables is called:**  
A. Primary key  
B. Secondary Key  
C. Foreign Key  
D. None of the mentioned  

> [!Tip]- Answer (Click to show)
> **C. Foreign Key**



**xi. What does SQL stand for?**  
A. Structured Question Language  
B. Structured Query Language  
C. Strong Question Language  
D. Structured Queue Language  

> [!Tip]- Answer (Click to show)
> **B. Structured Query Language**



**xii. The following is the property of a database system:**  
A. It is an integrated collection of logically related records.  
B. It consolidates separate files into a common pool of data records.  
C. Data stored in a database is independent of the application programs using it.  
D. All of the above.  

> [!Tip]- Answer (Click to show)
> **D. All of the above.**



**xiii. In the relational database modal, cardinality is termed as:**  
A. Number of tuples  
B. Number of attributes  
C. Number of tables  
D. Number of constraints  

> [!Tip]- Answer (Click to show)
> **A. Number of tuples**



**xiv. COUNT function when combined with DISTINCT in SQL will:**  
A. Return the values after count Null and repeating values in column  
B. Return the values after counting only not null and non-repeating values in a column  
C. Both A and B  
D. Return the values after counting all values in a column  

> [!Tip]- Answer (Click to show)
> **B. Return the values after counting only not null and non-repeating values in a column**



**xv. Which is NOT true about HAVING Clause as used in SQL?**  
A. Can be applied to group of columns that appear in GROUP BY Clause  
B. Can be applied to column(s) that appear in aggregate function  
C. Can be applied to the rows in the results set  
D. Can be applied to sorted columns  

> [!Tip]- Answer (Click to show)
> **D. Can be applied to sorted columns**

---

### **Question Two**
*Briefly discuss the following terms as used in Database System:*  
*[3 Marks Each]*

**a. Conceptual Schema**

> [!Tip]- Answer (Click to show)
> **Conceptual Schema is a high-level description of the entire database that hides the physical storage details. It describes what data is stored in the database and the relationships among those data, providing a community view of the database that is independent of any specific application.**



**b. Composite Key**

> [!Tip]- Answer (Click to show)
> **A composite key is a primary key that consists of two or more attributes that uniquely identify an entity instance. No subset of these attributes can uniquely identify the entity - all attributes in the composite key are required for unique identification.**



**c. Database**

> [!Tip]- Answer (Click to show)
> **A database is an organized collection of structured data stored electronically in a computer system. It is designed to efficiently store, retrieve, and manage data while ensuring data integrity, security, and consistency through a Database Management System (DBMS).**



**d. Derived Attribute**

> [!Tip]- Answer (Click to show)
> **A derived attribute is an attribute whose value is calculated or derived from other attributes in the database, rather than being stored directly. For example, age can be derived from date of birth, or total price can be derived from quantity and unit price.**



**e. Weak Entity**

> [!Tip]- Answer (Click to show)
> **A weak entity is an entity that cannot be uniquely identified by its own attributes alone and depends on another entity (strong entity) for its existence. It has a partial key and must participate in an identifying relationship with its owner entity.**

---

### **Question Three**

**a. With example differentiate between Data Definition Languages (DDL) and Data Manipulation Languages (DML) as applied in database systems.**  
*[5 Marks]*

> [!Tip]- Answer (Click to show)
> **DDL (Data Definition Language) is used to define and modify the database structure/schema. Examples: CREATE TABLE, ALTER TABLE, DROP TABLE.**  
> **DML (Data Manipulation Language) is used to manipulate data within the database objects. Examples: SELECT, INSERT, UPDATE, DELETE.**  
> **DDL works on database structure while DML works on database content.**



**b. Briefly explain three major steps of the database design (data modeling) process.**  
*[4 Marks]*

> [!Tip]- Answer (Click to show)
> **1. Conceptual Design: Creating a high-level conceptual data model (ER diagrams) that identifies entities, attributes, and relationships without implementation details.**  
> **2. Logical Design: Translating the conceptual model into a logical data model (relational schema) that can be implemented in a specific DBMS.**  
> **3. Physical Design: Implementing the logical design in a specific DBMS, considering storage structures, indexing, and performance optimization.**



**c. Briefly explain two types of participation constraints that you can have in an E-R model.**  
*[3 Marks]*

> [!Tip]- Answer (Click to show)
> **1. Total Participation: Every entity in the entity set must participate in the relationship (represented by double line). Example: Every student must be enrolled in at least one course.**  
> **2. Partial Participation: Not every entity in the entity set must participate in the relationship (represented by single line). Example: Not every employee must manage a department.**



**d. State three roles of View in a Database Management System?**  
*[3 Marks]*

> [!Tip]- Answer (Click to show)
> **1. Security: Restrict user access to specific columns or rows of underlying tables.**  
> **2. Simplicity: Hide complex queries and present users with simplified data structures.**  
> **3. Data Independence: Provide a consistent interface even when underlying table structures change.**

---

### **Question Four**

**a. A database approach addresses several problems and challenges associated with the traditional file-based approach. Using a DBMS to control how data is shared with different applications and users, through applications such as views, has a number of advantages. However, the implementation of a database approach has its own challenges, such as expense. Discuss the various costs associated with the implementation of a database approach.**  
*[6 Marks]*

> [!Tip]- Answer (Click to show)
> **1. Software Acquisition Cost: High cost of purchasing DBMS software licenses.**  
> **2. Hardware Upgrade Cost: Need for more powerful hardware (processors, memory, storage).**  
> **3. Personnel Cost: Hiring/training database administrators and specialists.**  
> **4. Conversion Cost: Expense of converting existing file-based systems to database systems.**  
> **5. Maintenance Cost: Ongoing costs for software updates, technical support, and system maintenance.**  
> **6. Training Cost: Training users and developers to work with the new database system.**



**b. With help of diagram explain the main objectives of the ANSI-SPARC architecture for a DBMS.**  
*[6 Marks]*

> [!Tip]- Answer (Click to show)
> **The ANSI-SPARC architecture has three levels:**  
> **1. External Level: User views that describe how different users see the data (multiple user views).**  
> **2. Conceptual Level: Community view that describes what data is stored and relationships (single conceptual schema).**  
> **3. Internal Level: Physical storage details describing how data is stored (single internal schema).**  
> **Main Objectives: Data Independence (separating user applications from physical storage), Multiple User Views, and Data Abstraction.**



**c. What are the roles of Application Program in ANSI-SPARC architecture in 3(b)?**  
*[3 Marks]*

> [!Tip]- Answer (Click to show)
> **1. Interface between users and the database system.**  
> **2. Translate user requests into database operations using embedded SQL or API calls.**  
> **3. Process retrieved data and present it in a user-friendly format.**  
> **4. Implement business logic and data validation rules.**

---

## **SECTION B (40 Marks)**

### **Question Five**

**a. Briefly explain any three types of integrity constraints in database system**  
*[3 Marks]*

> [!Tip]- Answer (Click to show)
> **1. Entity Integrity: Primary key cannot contain NULL values and must be unique.**  
> **2. Referential Integrity: Foreign key must either be NULL or match an existing primary key value in the referenced table.**  
> **3. Domain Integrity: Values in a column must be from a specified domain/data type and satisfy any constraints.**



**b. The following tables form part of a database held in a relational DBMS:**  
*Hotel(hotelNo, hotelName, city)*  
*Room(roomNo,type, hotelNo price)*  
*Booking(hotelNo, guestNo, dateFrom ,dateTo,roomNo)*  
*Guest(guestNo, guestName,guestAddress)*  

**i). Define Room relation in SQL so that every room is guaranteed to have price and the price values ranges between 40,000.00 and 100,000.00 respectively**  
*[3 Marks]*

> [!Tip]- Answer (Click to show)
> ```sql
> CREATE TABLE Room (
>     roomNo VARCHAR(10),
>     type VARCHAR(20),
>     hotelNo VARCHAR(10),
>     price DECIMAL(10,2) NOT NULL CHECK (price BETWEEN 40000.00 AND 100000.00),
>     PRIMARY KEY (roomNo, hotelNo),
>     FOREIGN KEY (hotelNo) REFERENCES Hotel(hotelNo)
> );
> ```



**ii). Define Booking relation in SQL such that *hotelNo* and *guestNo*, have the same values as in Hotel and Guest relations. Also ensures that when user modify the values in Hotel and Guest relations those values should be reflected in Booking relation or when the user delete the values in either Hotel or Guest relation the values in Booking relations should be set to NULL**  
*[5 Marks]*

> [!Tip]- Answer (Click to show)
> ```sql
> CREATE TABLE Booking (
>     hotelNo VARCHAR(10),
>     guestNo VARCHAR(10),
>     dateFrom DATE,
>     dateTo DATE,
>     roomNo VARCHAR(10),
>     PRIMARY KEY (hotelNo, guestNo, dateFrom),
>     FOREIGN KEY (hotelNo) REFERENCES Hotel(hotelNo) ON UPDATE CASCADE ON DELETE SET NULL,
>     FOREIGN KEY (guestNo) REFERENCES Guest(guestNo) ON UPDATE CASCADE ON DELETE SET NULL,
>     FOREIGN KEY (roomNo, hotelNo) REFERENCES Room(roomNo, hotelNo)
> );
> ```



**iii). Define Hotel relation such that the values for city are Dar es Salaam, Dodoma, Arusha or Singida**  
*[2 Marks]*

> [!Tip]- Answer (Click to show)
> ```sql
> CREATE TABLE Hotel (
>     hotelNo VARCHAR(10) PRIMARY KEY,
>     hotelName VARCHAR(50) NOT NULL,
>     city VARCHAR(20) CHECK (city IN ('Dar es Salaam', 'Dodoma', 'Arusha', 'Singida'))
> );
> ```



**iv). What will happen on Room relation when user try to run the following command:-**  
**INSERT INTO Room VALUES ('B15', 'SINGLE' 2, 50,000.00) while 2 does not exist in Hotel relation, assume integrity constraint has been enforced on Room relation?**  
*[3 Marks]*

> [!Tip]- Answer (Click to show)
> **The INSERT operation will fail due to referential integrity constraint violation. The system will reject the insertion because the hotelNo '2' does not exist in the parent Hotel table, and the foreign key constraint ensures that only valid hotel numbers can be inserted into the Room table.**



**v). The following SQL statement violates some rules for creating an updatable view. Carefully identify errors present and rewrite the SQL statement so that it correctly defines the updatable view.**  
*[4 Marks]*
```sql
CREATE VIEW GuestBooking(hotelNumber, guestName, guestAddress, roomNumber)
AS SELECT DISTINCT *
FROM Guest g, Booking b
WHERE g.guestNo = b.guestNo
```

> [!Tip]- Answer (Click to show)
> **Errors:**
> **1. Using DISTINCT makes the view non-updatable**
> **2. Using * (asterisk) with column aliases creates ambiguity**
> **3. Missing explicit column list in SELECT statement**
> 
> **Corrected Version:**
> ```sql
> CREATE VIEW GuestBooking AS
> SELECT b.hotelNo AS hotelNumber, g.guestName, g.guestAddress, b.roomNo AS roomNumber
> FROM Guest g, Booking b
> WHERE g.guestNo = b.guestNo;
> ```

---

### **Question Six**

*Use the given information to develop a database that will store information about journals. Each journal has a journal identification number and name. Each journal may have any number of issues (for example monthly issues or three-monthly issues etc). Each issue is identified by its number and date issued. Each issue contains a number of articles. The length in terms of number of words is kept for each article, together with the number of diagrams in the article. Each article may be written by one or more writers. The writer's name and address as well as fee paid to a writer for an article is also recorded. A writer may contribute as many articles to any journal.*

**a. Draw a complete ERD to represent the given information.**  
*[6 Marks]*

> [!Tip]- Answer (Click to show)
> **Entities and Relationships:**
> - **Journal** (journalID, journalName)
> - **Issue** (issueNo, issueDate, journalID) [Foreign Key: journalID references Journal]
> - **Article** (articleID, wordCount, diagramCount, issueNo) [Foreign Key: issueNo references Issue]
> - **Writer** (writerID, writerName, writerAddress)
> - **Writes** (articleID, writerID, fee) [Foreign Key: articleID references Article, writerID references Writer]
> 
> **Relationships:**
> - Journal (1) --- publishes --- (M) Issue
> - Issue (1) --- contains --- (M) Article
> - Article (M) --- written_by --- (M) Writer (via Writes relationship)



**b. From the ERD in a) draw the logical schema**  
*[4 Marks]*

> [!Tip]- Answer (Click to show)
> ```sql
> Journal (journalID PK, journalName)
> Issue (issueNo PK, issueDate, journalID FK references Journal(journalID))
> Article (articleID PK, wordCount, diagramCount, issueNo FK references Issue(issueNo))
> Writer (writerID PK, writerName, writerAddress)
> Writes (articleID FK references Article(articleID), writerID FK references Writer(writerID), fee, PRIMARY KEY (articleID, writerID))
> ```



**c. From the logical schema in (b) create any two data dictionaries**  
*[4 Marks]*

> [!Tip]- Answer (Click to show)
> **Journal Table Data Dictionary:**
> | Attribute | Data Type | Constraints | Description |
> |-----------|-----------|-------------|-------------|
> | journalID | VARCHAR(10) | PRIMARY KEY | Unique journal identifier |
> | journalName | VARCHAR(100) | NOT NULL | Name of the journal |
> 
> **Article Table Data Dictionary:**
> | Attribute | Data Type | Constraints | Description |
> |-----------|-----------|-------------|-------------|
> | articleID | VARCHAR(15) | PRIMARY KEY | Unique article identifier |
> | wordCount | INT | CHECK (wordCount > 0) | Number of words in article |
> | diagramCount | INT | CHECK (diagramCount >= 0) | Number of diagrams in article |
> | issueNo | VARCHAR(10) | FOREIGN KEY | Reference to containing issue |



**d. From the data dictionaries in (c) create any three physical schema**  
*[6 Marks]*

> [!Tip]- Answer (Click to show)
> ```sql
> CREATE TABLE Journal (
>     journalID VARCHAR(10) PRIMARY KEY,
>     journalName VARCHAR(100) NOT NULL
> );
> 
> CREATE TABLE Issue (
>     issueNo VARCHAR(10),
>     issueDate DATE NOT NULL,
>     journalID VARCHAR(10) NOT NULL,
>     PRIMARY KEY (issueNo, journalID),
>     FOREIGN KEY (journalID) REFERENCES Journal(journalID)
> );
> 
> CREATE TABLE Article (
>     articleID VARCHAR(15) PRIMARY KEY,
>     wordCount INT NOT NULL CHECK (wordCount > 0),
>     diagramCount INT NOT NULL CHECK (diagramCount >= 0),
>     issueNo VARCHAR(10) NOT NULL,
>     FOREIGN KEY (issueNo) REFERENCES Issue(issueNo)
> );
> ```

---

### **Question Seven**

*The University of Dar es Salaam has a booking system for its rooms. The system contains a relational database with information on events, organizers, rooms and room bookings. The tables are:*

**Event (eventID, type, duration)**  
**Organizer (organiserID, firstName, lastName, email)**  
**Room (roomID, capacity, projector, whiteBoard)**  
**Booking (eventID, organiserID, roomID, bookingDate, bookingStartTime)**  

*Where*  
*Primary keys are underline*  
*type is Lecture, Seminar or Laboratory;*  
*duration is the event planned duration given in whole hours; the maximum duration is 4 hours;*  
*capacity specifies the maximum number the room can accommodate; and*  
*Projector/whiteboard are Booleans (1 or 0) specifying whether the room has the said facilities;*

**Required:**  
*Write SQL statements to solve the following:*

**a. Add column *Sex* with data type *varchar* and size of 10 in the schema *Organizer*.**  
*[2 Marks]*

> [!Tip]- Answer (Click to show)
> ```sql
> ALTER TABLE Organizer ADD Sex VARCHAR(10);
> ```



**b. Write the query to delete *Booking* schema**  
*[1 Mark]*

> [!Tip]- Answer (Click to show)
> ```sql
> DROP TABLE Booking;
> ```



**c. Re-implement the schema **Booking** by enforcing all necessary integrity constraints available in the booking table**  
*[3 Marks]*

> [!Tip]- Answer (Click to show)
> ```sql
> CREATE TABLE Booking (
>     eventID VARCHAR(10),
>     organiserID VARCHAR(10),
>     roomID VARCHAR(10),
>     bookingDate DATE,
>     bookingStartTime TIME,
>     PRIMARY KEY (eventID, organiserID, roomID, bookingDate),
>     FOREIGN KEY (eventID) REFERENCES Event(eventID),
>     FOREIGN KEY (organiserID) REFERENCES Organizer(organiserID),
>     FOREIGN KEY (roomID) REFERENCES Room(roomID)
> );
> ```



**d. To upload data from file named **organizer.txt** located in C:\Users\CS125 in the schema **organizer***  
*[3 Marks]*

> [!Tip]- Answer (Click to show)
> ```sql
> BULK INSERT Organizer
> FROM 'C:\Users\CS125\organizer.txt'
> WITH (
>     FIELDTERMINATOR = ',',
>     ROWTERMINATOR = '\n'
> );
> ```



**e. Write the query to list all organizer details**  
*[2 Marks]*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT * FROM Organizer;
> ```



**f. Write the query to produce a list of rooms that have both a projector and a whiteboard**  
*[3 Marks]*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT roomID, capacity 
> FROM Room 
> WHERE projector = 1 AND whiteBoard = 1;
> ```



**g. Display a list of the organizers' first names and last names together with the total number of hours they have booked in February 2019.**  
*[3 Marks]*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT o.firstName, o.lastName, SUM(e.duration) AS totalHours
> FROM Organizer o
> JOIN Booking b ON o.organiserID = b.organiserID
> JOIN Event e ON b.eventID = e.eventID
> WHERE YEAR(b.bookingDate) = 2019 AND MONTH(b.bookingDate) = 2
> GROUP BY o.organiserID, o.firstName, o.lastName;
> ```



**h. For an event with eventID= 205, create a timetable (in chronological order) which includes the type of event and all bookings for the event including the beginning and end time of each activity.**  
*[3 Marks]*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT e.type, b.bookingDate, b.bookingStartTime, 
>        DATEADD(HOUR, e.duration, b.bookingStartTime) AS bookingEndTime,
>        r.roomID
> FROM Booking b
> JOIN Event e ON b.eventID = e.eventID
> JOIN Room r ON b.roomID = r.roomID
> WHERE b.eventID = '205'
> ORDER BY b.bookingDate, b.bookingStartTime;
> ```


---


**END OF EXAMINATION PAPER**
