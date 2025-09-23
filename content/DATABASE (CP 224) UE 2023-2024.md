# Database Management System Exam - CP 224

**University of Dodoma**  
College of Informatics and Virtual Education  
Department of Computer Science and Engineering  
End of Semester Two University Examination for the 2023/2024 Academic Year  

**Course Name:** Database Management System  
**Paper Code Number:** CP 224  
**Date of Examination:** 9th July, 2024  
**Time:** 08:00-11:00  
**Duration:** 3 Hours  
**Venue(s):** AUDITORIUM & LRB 002A  
**Sitting Programme(s):** BSc. HIS2, CS2, IS2, SE2, CNISE2, CSDFE2, CE2, MTA2, BIS2, BCom_IM2

---

## SECTION A: (40 MARKS)
*Attempt ALL questions in this section.*

### Question One
*Choose the most correct answer and write its letter.*  
**(1 Mark Each)**

**i.** Which of the following is not a key feature of OODBMS?  
A. Object identity  
B. Inheritance  
C. Normalization  
D. Encapsulation  
E. Polymorphism  

**ii.** Which of the following is generally used for performing tasks like creating the structure of the relations, deleting relation?  
A. DML (Data Manipulation Language)  
B. Query  
C. Relational Schema  
D. DDL (Data Definition Language)  
E. OO  

**iii.** Which normalization form is based on the transitive dependency?  
A. 1NF  
B. 2NF  
C. 3NF  
D. BCNF  
E. 4NF  

**iv.** R ∩ S is equivalent to  
A. \( R - (R - S) \)  
B. \( R - (S - R) \)  
C. \( (R - S) - R \)  
D. \( -((-R) \cup (-S)) \)  
E. RUS-R  

**v.** Which normal form removes partial dependency in a relational database?  
A. First Normal Form (1NF)  
B. Second Normal Form (2NF)  
C. Third Normal Form (3NF)  
D. Boyce-Codd Normal Form (BCNF)  
E. Fourth Normal Form (4NF)  

**vi.** What is the main goal of normalization in relational database design?  
A. Increase data redundancy  
B. Decrease data integrity  
C. Minimize data redundancy  
D. Maximize data complexity  
E. Minimize database size  

**vii.** If A ->B and B->A, what can be said about A and  B ?  
A. \( A \) is a subset of \( B \)  
B. \( B \) is a subset of \( A \)  
C. \( A \) and \( B \) are independent  
D. \( A \) and \( B \) are equivalent  
E. \( A \) and \( B \) are disjoint  

**viii.** If A ->B and B->C, which of the following is also true?  
A. A->C 
B. C->A
C. B->A
D. C->B
E. A->B

**ix.** What is the term for a blueprint used to define objects in an OODBMS?  
A. Schema  
B. Class  
C. Instance  
D. Record  
E. Relation  

**x.** Which concept allows objects to inherit attributes and methods from a more general class?  
A. Encapsulation  
B. Polymorphism  
C. Inheritance  
D. Normalization  
E. Referential Integrity  

---

### Question Two
*Write **True** for the correct statements and **False** for the incorrect statements in your answer booklet provided.*  
**(1 Mark Each)**

i. Concurrency control is the process of managing simultaneous execution of transactions in a shared database, to ensure the serializability of transactions.  
ii. R X S is the Cartesian product operation that defines a relation that is concatenated of every tuple of relation R with every tuple of relation S.  
iii. {Mandatory, or} indicate mandatory and nondisjoint participation.  
iv. The process of minimizing the difference between entities by identifying their common characteristics is known as generalization.  
v. In Wound-wait If TS(Ti) < TS(Tj), then (Ti older than Tj) Ti is allowed to wait; otherwise (Ti younger than Tj) abort Ti (Ti dies) and restart it later with the same timestamp.  
vi. If S and R two related relations, then  R X S is guaranteed to produce more tuples than R n S. 
vii. A distinct subgroup of occurrence of an entity type, which must be represented in a data model is called superclass.  
viii. In Wait-Die: If TS(Ti) < TS(Tj), then (Ti older than Tj) abort Tj (Ti wounds Tj) and restart it later with the same timestamp; otherwise (Ti younger than Tj) Ti is allowed to wait.  
ix. Mandatory participation specifies that every member of superclass must also be a member of subclass.  
x. R-S is the set difference operation that defines a relation consisting of the tuples that are in relation R but not in S.

---

### Question Three
*Match the item in Column A with its corresponding item in Column B.*  
**(1 Mark Each)**

| Column A                                             | Column B                                                                                                                                                                             |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| i. PROJECT                                           | A. Standard for object model, OQL, OSL and Language binding.                                                                                                                         |
| ii. SAVEPOINT                                        | B. Reflexivity                                                                                                                                                                       |
| iii. System catalog                                  | C. Implicitly matches columns by name and data type.                                                                                                                                 |
| iv. ODMG                                             | D. Metadata                                                                                                                                                                          |
| v. cp224@udom.ac.tz                                  | E. Open Distributed Management Group                                                                                                                                                 |
| vi. If (beta is subset alpha), then ( alpha ->beta ) | F. Alphanumeric data                                                                                                                                                                 |
| vii. Durability                                      | G. Restore the transaction state.                                                                                                                                                    |
| viii. Shared lock                                    | H. Transitivity                                                                                                                                                                      |
| ix. Deadlock                                         | I. Yields all values for selected attributes                                                                                                                                         |
| x. Natural Join                                      | J. Data dictionary                                                                                                                                                                   |
|                                                      | K. Once the DBMS informs the user that a transaction has successfully completed, its effects should persist even if the system crashes before all its changes are reflected on disk. |
|                                                      | L. Either all actions are carried out or none are. Users should not have to worry about the effect of incomplete transactions.                                                       |
|                                                      | M. Lock prohibits other users from reading the locked resource                                                                                                                       |
|                                                      | N. Lock allows other users to read the locked resource, but they cannot update it.                                                                                                   |
|                                                      | O. Occurs when two transactions are each waiting on a resource that the other transaction holds.                                                                                     |
|                                                      | P. Transaction is one that is atomic, consistent, isolated, and durable                                                                                                              |
|                                                      | Q. Created to enforce uniqueness, to facilitate sorting, and to enable fast retrieval by column values                                                                               |
|                                                      | R. Denying other the ability to update a record until someone completes the update or releases the record.                                                                           |
|                                                      | S. Each transaction in a distributed database is treated as if it is the only one in the system.                                                                                     |

---

### Question Four
Consider the following database schema about customers, items, and products. Carefully read the schema and answer the questions that follow:  

Customer(<span style="color:rgb(255, 148, 148)">CustomerID</span>, CName, fav_colour)  
Item(<span style="color:rgb(255, 148, 148)">ItemID</span>, <span style="color:rgb(255, 148, 148)">ProductID</span>, <span style="color:rgb(255, 148, 148)">CustomerID</span>, colour, date_sold)  
Product(<span style="color:rgb(255, 148, 148)">ProductID</span>, pName, cost, maker)  
Avail_Colours(<span style="color:rgb(255, 148, 148)">ProductID</span>, <span style="color:rgb(255, 148, 148)">colour</span>)

NB : <span style="color:rgb(255, 148, 148)">red</span> implies underlined.

**a.** Write a relational-algebra query to produce a list of customers (CustomerID, and CName) whose favorite colour (fav_colour) is green.  
**(2 Marks)**  

**b.** Suppose you execute the following commands against the database system schema for the colours database.  
```sql
Insert into Item (ItemID, ProductID, CustomerID, colour, date_sold) VALUES (1729, 23, 13, 'hot pink', '2020/01/20'). 
```
Is the tuple guaranteed to have been added to the table Item? Explain  
**(3 Marks)**  

**c.** Write a relational-algebra query to produce a list of products (ProductID, cost and pName) that come into colour orange.  
**(2 Marks)**  

**d.** Consider the following SQL query  
```sql
SELECT DISTINCT C.customerID, A.productID FROM Customer C, Available_Colours A WHERE C.fav_colour <> A.colour  
```
Write a corresponding relational-algebra query.  
**(3 Marks)**  

---

## SECTION B: (60 MARKS)
*Attempt any THREE (3) out of FOUR (4) questions in this section.*

### Question Five
**a.** Suppose the constructed ER diagram for the manufacturing company resulted in one relation given in Table 1.

**Table 1: Manufacturing company entity**

| Order ID | OrderDate | CustomerID | Customer Name | CustomerAddress | ProductID | ProductDescription | ProductProduct | ProductProductId | OrderIdOption Id |
|----------|-----------|------------|---------------|-----------------|-----------|-------------------|----------------|------------------|-----------------|
| 1006 | 09/06/2024 | 2 | Ujasi Furniture | Ng'ong'ora, Dodoma | 7 | DōtangTable | NaturalAsh | 8,000,000 | 2 |
| 1006 | 09/06/2024 | 2 | Ujasi Furniture | Ng'ong'ora, Dodoma | 5 | Winter'sDeck | Cherry | 3,250,000 | 2 |
| 1006 | 09/06/2024 | 2 | Ujasi Furniture | Ng'ong'ora, Dodoma | 4 | Entertainment Center | NaturalMagic | 0,500,000 | 1 |
| 1007 | 09/07/2024 | 5 | Makailu Gallery | Makailu, Dodoma | 11 | 4-DrDrawer | Oak | 3,000,000 | 4 |
| 1007 | 09/07/2024 | 5 | Makailu Gallery | Makailu, Dodoma | 4 | Entertainment Center | NaturalMagic | 6,500,000 | 3 |

**i.** Identify insertion, update and deletion anomaly in Table 1.  
**(3 Marks)**  

**ii.** Normalize Table 1 to 3NF.  
**(7 Marks)**  

**b.** Consider a relational schema \( R(w,x,y,z) \), and set of functional dependency as following.  
F : { x -> w, wz -> xy, y ->wxz } 
Find the canonical cover F_c.  

**c.** Consider the relation schema R(A, B, C, D, E)  with the functional dependencies F={A->B, AB->C, D->AE, C ->E} and G ={ A->BC, C->E, D->BC, E->D}.  

**i.** Determine whether the two sets F and G are equivalent. Explain your answer in detail.  
**(3 Marks)**  

**ii.** If a functional dependency E->D is inserted into \F , does it make your answer c (i) different?  
**(2 Marks)**  

---

### Question Six
A database to support a bookstore is to be developed. Carefully read the information provided and use it to answer the questions that follow.

The database will store information about books for sale. Each book has an ISBN, title, price and short description. Each book is published by a publisher in a certain publishing year. For each publisher, the database maintains the name, address and phone number. Each book is written by one or more authors. For each author, the database maintains his/her ID, name and a short introduction. Each book is stored in exactly one warehouse with a particular quantity. For each warehouse, the database maintains the warehouse name, the location and the phone number. Each book has one or more sellers, which may be either companies (corporate vendors) or individuals (individual vendors). For each company, the database maintains a name of the company, its address, its phone numbers (there could be more than one phone number, each with a number and a description) and its contact person. For each individual vendor, the database keeps a name, a phone number and an email address. A contact person whose company sells a book cannot be selling the same book as an individual vendor at the same time (he/she may sell other books as an individual seller).

**a.** Draw an Enhanced Entity-Relationship Diagram (EERD) that captures the stated requirements. Make sure you include superclass, subclasses and relationships.  
**(7 Marks)**  

**b.** Based on the EERD in (a), develop a corresponding relational database schema, list tables with their attributes. For each table indicate the attribute(s) that makes a primary key also indicates foreign key whenever possible.  
**(7 Marks)**  

**c.** Use the relational schema in (b) to write the following queries in SQL.  
**(3 Marks Each)**  

**i.** Produce a list of books (ISBN, title, price, and description) that are stored in ABL warehouse.  

**ii.** Produce the details of individual vendors along with the books (title) they are selling.

---

### Question Seven
Consider the following schedule involving three transactions, T1, T2, and T3. The operations are listed in the order they are executed. Carefully ready it and use it to answer the questions that follow:  

**Transactions:**  
- T1: R(A), W(A), R(B), W(B)  
- T2: R(B), W(B), R(C), W(C)  
- T3: R(C), W(C), R(A), W(A)  

**Schedule:**  
- T1: R(A)  
- T3: R(C)  
- T2: R(B)  
- T1: W(A)  
- T2: W(B)  
- T3: W(C)  
- T1: R(B)  
- T2: R(C)  
- T3: R(A)  
- T1: W(B)  
- T2: W(C)  
- T3: W(A)  

**a.** Construct the precedence graph for the given schedule.  
**(5 Marks)**  

**b.** Determine if the schedule is conflict serializable. Justify your answer with appropriate reasons.  
**(5 Marks)**  

**c.** If the schedule is conflict serializable, use the swapping technique to convert it into an equivalent serial schedule. Show all necessary steps.  
**(5 Marks)**  

**d.** Explain the significance of conflict serializability in ensuring the consistency of transactions in a database system.  
**(5 Marks)**  

---

### Question Eight
**a.** Briefly explain transaction state using a neat diagram.  
**(5 Marks)**  

**b.** Consider there are three transactions with 9, 10, 11 operations respectively, find:  
**(1 Mark Each)**  

**i.** How many total number of schedules are possible?  
**ii.** How many total number of serial schedules are possible?  
**iii.** How many total number of non-serial schedules are possible?  

**c.** Briefly describe four (4) concurrency problems in transactions.  
**(6 Marks)**  

**d.** By using the swap method, make the schedule in Table 1 from non-serial to serial schedule. Show all the steps necessary.  
**(6 Marks)**  

**Table 1: Schedule**

| T1        | T2        |
| --------- | --------- |
| Read (A)  |           |
| Write (A) |           |
|           | Read (A)  |
|           | Write (A) |
| Read (B)  |           |
| Write (B) |           |
|           | Read (B)  |
|           | Write (B) |

---

**END OF EXAMINATION PAPER**