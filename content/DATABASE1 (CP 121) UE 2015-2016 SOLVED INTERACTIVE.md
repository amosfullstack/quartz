
#### **Introduction to Database Systems - Exam**

**THE UNIVERSITY OF DODOMA**  
**COLLEGE OF INFORMATICS AND VIRTUAL EDUCATION**  
**SCHOOL OF INFORMATICS**

**UNDERGRADUATE UNIVERSITY EXAMINATIONS**  
**SECOND SEMESTER 2015/2016**

**CS 125: INTRODUCTION TO DATABASE SYSTEMS**  
**Date:** 18th July 2016  
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



### **Question Three**
*Write TRUE for the correct statement and FALSE for the incorrect statement*

**a. A database is a collection of related data.**

> [!Tip]- Answer (Click to show)
> **TRUE**



**b. Data independence allows for changes in the physical storage without affecting the application programs.**

> [!Tip]- Answer (Click to show)
> **TRUE**



**c. A primary key can contain NULL values.**

> [!Tip]- Answer (Click to show)
> **FALSE**



**d. The relational model represents data as relations or tables.**

> [!Tip]- Answer (Click to show)
> **TRUE**

---

**e. DML statements are used to define the database structure.**

> [!Tip]- Answer (Click to show)
> **FALSE**

---

**f. The project operation is a binary operation that returns its argument relation with certain attributes left out.**

> [!Tip]- Answer (Click to show)
> **FALSE**



**g. Any relation that is not part of the logical model, but is made visible to a user as a virtual relation is called a view.**

> [!Tip]- Answer (Click to show)
> **TRUE**



**h. A user must guarantee that his or her transaction does not corrupt data or insert nonsense in the database.**

> [!Tip]- Answer (Click to show)
> **TRUE**



**i. Multimedia, relational, hypertext, network and object-oriented are all conventional data models.**

> [!Tip]- Answer (Click to show)
> **TRUE**



**j. View are defined by using DML statements.**

> [!Tip]- Answer (Click to show)
> **FALSE**

---

### **Question Four**
*Given two relations \( R1 \) and \( R2 \), where \( R1 \) contains N1 tuples, \( R2 \) contains N2 tuples, and \( N2 > N1 > 0 \), give the minimum and maximum possible sizes (in tuples) for the resulting relation produced by each of the following relational algebra expressions. In each case, state any assumptions about the schemas for \( R1 \) and \( R2 \) needed to make the expression meaningful:*  
*[2.5 Marks Each]*

**(i) \( R1 \cup R2 \)**

> [!Tip]- Answer (Click to show)
> **Assumption: R1 and R2 must be union-compatible (same attributes).**  
> **Minimum: max(N1, N2)**  
> **Maximum: N1 + N2**



**(ii) \( R1 \cap R2 \)**

> [!Tip]- Answer (Click to show)
> **Assumption: R1 and R2 must be union-compatible (same attributes).**  
> **Minimum: 0**  
> **Maximum: min(N1, N2)**



**(iii) \( R1 - R2 \)**

> [!Tip]- Answer (Click to show)
> **Assumption: R1 and R2 must be union-compatible (same attributes).**  
> **Minimum: 0**  
> **Maximum: N1**



**(iv) \( R1 \times R2 \)**

> [!Tip]- Answer (Click to show)
> **Assumption: R1 and R2 must have disjoint attribute sets.**  
> **Minimum: N1 × N2**  
> **Maximum: N1 × N2**

---

### **Question Five**

**a. List six drawbacks associated with file processing systems.**  
*[3 Marks]*

> [!Tip]- Answer (Click to show)
> **1. Data Redundancy and Inconsistency**  
> **2. Difficulty in Accessing Data**  
> **3. Data Isolation**  
> **4. Integrity Problems**  
> **5. Atomicity Problems**  
> **6. Concurrent Access Anomalies**



**b. Mention six strengths of using DBMS.**  
*[3 Marks]*

> [!Tip]- Answer (Click to show)
> **1. Data Independence**  
> **2. Efficient Data Access**  
> **3. Data Integrity and Security**  
> **4. Data Administration**  
> **5. Concurrent Access**  
> **6. Reduced Application Development Time**



**c. Mention eight areas where database systems are applicable.**  
*[4 Marks]*

> [!Tip]- Answer (Click to show)
> **1. Banking**  
> **2. Airlines**  
> **3. Universities**  
> **4. Credit Card Transactions**  
> **5. Telecommunication**  
> **6. Finance**  
> **7. Sales**  
> **8. Human Resources**  
> **9. Manufacturing**  
> **10. Healthcare**

---

### **Question Six**
*Define the following concepts as applied in Database Systems*  
*[2 Marks Each]*

**a. Database transaction.**

> [!Tip]- Answer (Click to show)
> **A database transaction is a logical unit of database operations that must be entirely completed or entirely abandoned. It follows the ACID properties (Atomicity, Consistency, Isolation, Durability).**



**b. Referential integrity.**

> [!Tip]- Answer (Click to show)
> **Referential integrity is a constraint that ensures that a foreign key value in one table must either be NULL or match an existing primary key value in the referenced table.**



**c. Data model.**

> [!Tip]- Answer (Click to show)
> **A data model is an abstract model that organizes data elements and standardizes how they relate to one another and to properties of the real world entities.**



**d. Data independence.**

> [!Tip]- Answer (Click to show)
> **Data independence is the separation of data definitions from the application programs that use the data, allowing changes to data storage and organization without affecting the application programs.**



**e. Cardinality of a relation.**

> [!Tip]- Answer (Click to show)
> **Cardinality of a relation refers to the number of tuples (rows) in a relation (table).**

---

## **SECTION B (40 Marks)**

### **Question Seven**

**Consider a shop for flowers on the World Wide Web. It offers a selection of different bouquets (bunches of flowers) described in the table "Flowers". The table "Customer" contains information about customers. Next, there is a table with information about orders and recipients (to whom the flowers should be delivered).**

**i. Print the name of "Loyal customers" and the total amount of money they have spent. (Loyal customers are those that have spent over $300).**  
*[4 Marks]*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT c.customer_name, SUM(o.amount) AS total_spent
> FROM Customer c
> JOIN Orders o ON c.customer_id = o.customer_id
> GROUP BY c.customer_id, c.customer_name
> HAVING SUM(o.amount) > 300;
> ```



**ii. Print the name of customers that prefer mailing their flowers directly rather than send them to local flower shops (based on only the current deliveries).**  
*[5 Marks]*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT DISTINCT c.customer_name
> FROM Customer c
> JOIN Orders o ON c.customer_id = o.customer_id
> JOIN Delivery d ON o.order_id = d.order_id
> WHERE d.delivery_type = 'direct_mail';
> ```

---

### **Question Eight**
*Read the following scenario carefully and then answer the question that follows.*

**UPS prides itself on having up-to-date information on the processing and current location of each shipped item. To do this, UPS relies on a company-wide information system. Shipped items are the heart of the UPS product tracking information system. Shipped items can be characterized by item number (unique), weight, dimensions, insurance amount, destination, and final delivery date. Shipped items are received into the UPS system at a single retail center. Retail centers are characterized by their type, uniqueID, and address. Shipped items make their way to their destination via one or more standard UPS transportation events (i.e., flights, truck deliveries). These transportation events are characterized by a unique scheduleNumber, a type (e.g, flight, truck), and a deliveryRoute.**

**a. Draw the complete ERD**  
*[12 Marks]*

> [!Tip]- Answer (Click to show)
> *Use the data below to DRAW the ERD*
> **Entities:**
> - **ShippedItem** (itemNo PK, weight, dimensions, insuranceAmount, destination, finalDeliveryDate, retailCenterID FK)
> - **RetailCenter** (retailCenterID PK, type, address)
> - **TransportationEvent** (scheduleNumber PK, type, deliveryRoute)
> - **ItemTransport** (itemNo FK, scheduleNumber FK, sequence) [Relationship set]
> 
> **Relationships:**
> - RetailCenter (1) --- receives --- (M) ShippedItem
> - ShippedItem (M) --- transported_by --- (M) TransportationEvent (via ItemTransport)



**b. From the ERD in (a) above draw the corresponding logical schemas**  
*[6 Marks]*

> [!Tip]- Answer (Click to show)
> ```sql
> RetailCenter (retailCenterID PK, type, address)
> ShippedItem (itemNo PK, weight, dimensions, insuranceAmount, destination, finalDeliveryDate, retailCenterID FK references RetailCenter(retailCenterID))
> TransportationEvent (scheduleNumber PK, type, deliveryRoute)
> ItemTransport (itemNo FK references ShippedItem(itemNo), scheduleNumber FK references TransportationEvent(scheduleNumber), sequence, PRIMARY KEY (itemNo, scheduleNumber))
> ```



**c. From the Logical schema in (b) above draw the corresponding Data dictionaries**  
*[6 Marks]*

> [!Tip]- Answer (Click to show)
> **ShippedItem Table Data Dictionary:**
> | Attribute | Data Type | Constraints | Description |
> |-----------|-----------|-------------|-------------|
> | itemNo | VARCHAR(15) | PRIMARY KEY | Unique item identifier |
> | weight | DECIMAL(8,2) | NOT NULL | Item weight |
> | dimensions | VARCHAR(20) | | Item dimensions |
> | insuranceAmount | DECIMAL(10,2) | | Insurance value |
> | destination | VARCHAR(100) | NOT NULL | Delivery destination |
> | finalDeliveryDate | DATE | | Scheduled delivery date |
> | retailCenterID | VARCHAR(10) | FOREIGN KEY | Receiving retail center |
> 
> **RetailCenter Table Data Dictionary:**
> | Attribute | Data Type | Constraints | Description |
> |-----------|-----------|-------------|-------------|
> | retailCenterID | VARCHAR(10) | PRIMARY KEY | Unique center identifier |
> | type | VARCHAR(20) | | Type of retail center |
> | address | VARCHAR(100) | NOT NULL | Physical address |



**d. From the Data dictionaries in (c) above create the corresponding physical schema**  
*[6 Marks]*

> [!Tip]- Answer (Click to show)
> ```sql
> CREATE TABLE RetailCenter (
>     retailCenterID VARCHAR(10) PRIMARY KEY,
>     type VARCHAR(20),
>     address VARCHAR(100) NOT NULL
> );
> 
> CREATE TABLE ShippedItem (
>     itemNo VARCHAR(15) PRIMARY KEY,
>     weight DECIMAL(8,2) NOT NULL CHECK (weight > 0),
>     dimensions VARCHAR(20),
>     insuranceAmount DECIMAL(10,2) CHECK (insuranceAmount >= 0),
>     destination VARCHAR(100) NOT NULL,
>     finalDeliveryDate DATE,
>     retailCenterID VARCHAR(10) NOT NULL,
>     FOREIGN KEY (retailCenterID) REFERENCES RetailCenter(retailCenterID)
> );
> 
> CREATE TABLE TransportationEvent (
>     scheduleNumber VARCHAR(15) PRIMARY KEY,
>     type VARCHAR(20) NOT NULL,
>     deliveryRoute VARCHAR(50)
> );
> 
> CREATE TABLE ItemTransport (
>     itemNo VARCHAR(15),
>     scheduleNumber VARCHAR(15),
>     sequence INT,
>     PRIMARY KEY (itemNo, scheduleNumber),
>     FOREIGN KEY (itemNo) REFERENCES ShippedItem(itemNo),
>     FOREIGN KEY (scheduleNumber) REFERENCES TransportationEvent(scheduleNumber)
> );
> ```

---

**END OF EXAMINATION PAPER**
