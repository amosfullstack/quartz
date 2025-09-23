
# Database Management System Exam - CP 224/CS 228

**University of Dodoma**  
College of Informatics and Virtual Education  
Department of Computer Science and Engineering  
End of Semester Two University Examination for the 2020/21 Academic Year  

**Course Name:** Database Management System  
**Paper Code Number:** CP 224/CS 228  
**Date of Examination:** Date 
**Time:** Time 
**Duration:** 3 Hours  
**Venue(s):** Venue
**Sitting Programme(s):** HIS2, CIS3, CS2, IS2, BIS2, SE2CE2, CE3, CNISE2 and CSDFE2

---

## INSTRUCTIONS TO CANDIDATES

1. This examination paper consists of **TWO (2) sections** with **SEVEN (7) questions** in **8 printed pages**.
2. Answer **all questions in Section A** and **THREE (3) questions in Section B**.
3. The total score for this examination is **60 points**. Marks are allocated at the end of each question.
4. **ALL responses** should be written in the answer book provided. Insert the examination paper into the answer book after the examination. Students should not take any examination paper(s) out of the examination room.
5. All regulations guiding the administration of university examinations apply.

---

## SECTION A: (15 MARKS)

### Question One
*Choose the most correct answer by indicating the letter corresponding to that answer.*  
**(0.5 Mark each)**

**i.** A tier in which database resides along with query processing languages is called  
a) Application tier  
b) Data tier  
c) Presentation tier  
d) Model tier  

**ii.** Functional dependencies are said to be used for  
a) Testing instances of relations  
b) Specify constraints on legal relations  
c) Both A and B  
d) Specifying Domain  

**iii.** Structure of multilevel indices are similar to  
a) Stack structures  
b) Array structures  
c) Hash structures  
d) Tree structures  

**iv.** A state of transaction, in which basic transaction operation starts is said to be  
a) Active state  
b) Partially committed state  
c) Committed state  
d) Execute state  

**v.** In concurrent transactions, deadlocks can be broken down by  
a) Committing one or more transactions  
b) Aborting one or more transactions  
c) Rolling back one or more transactions  
d) Terminating one or more transactions  

**vi.** A database architecture that is considered highly modifiable is known as  
a) ER database architecture  
b) Object based architecture  
c) 1 tier architecture  
d) Multi-tier architecture  

**vii.** DML statements are translated into query language with support of  
a) DML translator  
b) DML interpreter  
c) DML convertor  
d) DML compiler  

**viii.** Implementation of multiple data structures as part of physical system is made through component  
a) Storage manager  
b) Query processor  
c) Data manager  
d) Transaction manager  

**ix.** Data model describes design of database at level  
a) Physical level  
b) Logical level  
c) View level  
d) All of the Above  

**x.** A component of storage manager managing most critical part of database system is known to be  
a) Transaction manager  
b) Authorization and integrity manager  
c) File manager  
d) Buffer manager  

**Answer Key:**  

| I   | II  | III | IV  | V   | VI  | VII | VIII | IX  | X   |
| --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- |
| B   | C   | D   | A   | C   | D   | D   | A    | D   | D   |


---

### Question Two
*Match the items in **List A** by writing the correct letter from **List B***  
**(0.5 Mark each)**

**List A**
i) A collection of interrelated records is called a  
ii) The method of file organization in which data records in a file are arranged in a specified order according to key field is known as the  
iii) Unlike filters queries can be saved as in a database.  
iv) External database is  
v) ROLLBACK in a database is ______ statement.  
vi) Report generators are used to  
vii) The logical data structure with a one-to-many relationship is a  
viii) In a database, related fields are grouped to  
ix) The database environment has all the following components except  
x) Which database handles full text data, image, audio and video?  

**List B**
A. Database  
B. Database created using DBMS package  
C. Retrieve information from files  
D. Sequential access method  
E. Queuing method  
F. Graphics database  
G. DML  
H. Filters  
I. Transaction database  
J. Multimedia database  
K. Objects  
L. Tree  
M. Users  
N. Separate files  
O. File  
P. Data record  
Q. Chain  
R. Management information system  
S. Spreadsheet  
T. TCL  

**Answer Key:**  

| I   | II  | III | IV  | V   | VI  | VII | VIII | IX  | X   |
| --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- |
| A   | D   | K   | B   | T   | C   | L   | P    | N   | J   |


---

### Question Three
Consider the following classes of schedules: serializable, conflict-serializable, view-serializable, recoverable, avoids-cascading-aborts, and strict. For each of the following schedules, state which of the preceding classes it belongs to. If you cannot decide whether a schedule belongs in a certain class based on the listed actions, explain briefly. The actions are listed in the order they are scheduled and prefixed with the transaction name. If a commit or abort is not shown, the schedule is incomplete; assume that abort or commit must follow all the listed actions.  
**(0.5 Mark Each)**

i. T1: R(X), T2: R(X), T1: W(X), T2: W(X)  
ii. T1: W(X), T2: R(Y), T1: R(Y), T2: R(X)  
iii. T1: R(X), T2: R(Y), T3: W(X), T2: R(X), T1: R(Y)  
iv. T1: R(X), T1: R(Y), T1: W(X), T2: R(Y), T3: W(Y), T1: W(X), T2: R(Y)  
v. T1: R(X), T2: W(X), T1: W(X), T2: Abort, T1: Commit  
vi. T1: R(X), T2: W(X), T1: W(X), T2: Commit, T1: Commit  
vii. T1: W(X), T2: R(X), T1: W(X), T2: Abort, T1: Commit  
viii. T1: W(X), T2: R(X), T1: W(X), T2: Commit, T1: Commit  
ix. T1: W(X), T2: R(X), T1: W(X), T2: Commit, T1: Abort  
x. T2: R(X), T3: W(X), T3: Commit, T1: W(Y), T1: Commit, T2: R(Y), T2: W(Z), T2: Commit

---

## SECTION B: (45 MARKS)
*Attempt THREE (3) out of FOUR (4) questions in this section.*

### Question Four
Consider a database with objects \( X \) and \( Y \), assume that there are two transactions \( T1 \) and \( T2 \). Transaction \( T1 \) reads objects \( X \) and \( Y \) and then writes object \( X \). Transaction \( T2 \) reads objects \( X \) and \( Y \) and then writes objects \( X \) and \( Y \).  
**(4 Marks Each)**

a. Give an example schedule with actions of transactions \( T1 \) and \( T2 \) on objects \( X \) and \( Y \) that results in a write-read conflict.  
b. Give an example schedule with actions of transactions \( T1 \) and \( T2 \) on objects \( X \) and \( Y \) that results in a read-write conflict.  
c. Give an example schedule with actions of transactions \( T1 \) and \( T2 \) on objects \( X \) and \( Y \) that results in a write-write conflict.  
d. For each of the three schedules, show that Strict 2PL disallows the schedule.

---

### Question Five
SQL supports four isolation-levels and two access-modes, for a total of eight combinations of isolation-level and access-mode. Each combination implicitly defines a class of transactions; the following questions refer to these eight classes:  

a. Consider the four SQL isolation levels. Describe which of the phenomena can occur at each of these isolation levels: *dirty read*, *unrepeatable read*, *phantom problem*. **(3 Marks)**  
b. For each of the four isolation levels, give examples of transactions that could be run safely at that level. **(5 Marks)**  
c. Why does the access mode of a transaction matter? **(3 Marks)**  
d. Check whether schedule S is view serializable or not.  
S: R1(A); R3(D); W1(B); R2(B); W3(B); R4(B); W2(C); R5(C); W4(E); R5(E); R5(A) **(4 Marks)**

---

### Question Six
As a part of its project management database, the company wants to develop a scheduling system to store information about resources (employees), projects and bookings. The purpose of the system is to schedule employees to particular projects efficiently.  

For each employee, the following information is stored: Employee ID, First and Last name, Rank, salary and city. The system should also accept more than one phone number for each employee. Employee can make many bookings at different times. Employees are organized into Solution Sets(SS), each solution set has a head of the solution set or a supervisor, who is the resource owner for all employees in that SS. For each solution set we record the SS ID and the SS name. An employee can belong to only one solution set and one solution set constitutes many employees.  

The scheduling system also stores information about project. For each project, the following information is stored: Project ID, Project Name, Status, Location and Client name. Employee can works in more than one project as a part of the scheduling system and one project constitutes many employees. When a booking is requested for an employee, the employee is scheduled to work on a particular project, on a particular day for the specified amount of time. For each booking we also record current status. Many employees can make many bookings at a time.

a) Draw the ERD **(3 Marks)**  
b) Convert the above ERD into relational schemas **(3 Marks)**  
c) Translate the following in both relation algebra and SQL **(1 Mark each)**  
i. List all employee  
ii. List all project  
iii. List the ID of supervisor who supervises many employees than other supervisor  
iv. Find the name of employee who live in the same city as their supervisor  
v. List the name of employee who do not work in any project  
vi. List the names of all employees who works for "child abuse" project  
vii. Find the name of the employee with the maximum number of projects  
viii. List all booking which has been made by employee whose name is like Tina  
ix. Find the count number of employees in the solution Set. Id "12345SS"  
x. Find the name of the employee who earns more than any employee of child abuse project

---

### Question Seven
**a.** Consider the figure 1, which shows the inheritance of properties from super class to its subclasses, and show how these objects could be stored in a relational database by using three major strategies for mapping classes to a relation (i.e. Mapping each class to a relation, Map each subclasses to a relation and Map the hierarchy to a single relation). **(6 Marks)**

**Figure 1**

![[Pasted image 20250923054759.png]]


**b.** Consider the relation scheme \( R = \{E, F, G, H, I, J, K, L, M, N\} \) and the set of functional dependencies \(\{\{E, F\} \rightarrow \{G\}, \{F\} \rightarrow \{I, J\}, \{E, H\} \rightarrow \{K, L\}, K \rightarrow \{M\}, L \rightarrow \{N\} \) on \( R \).

i. Compute the following closure from the relation (R) above **(1 Mark each)**  
A. \(\{E, F, H\}^+\)  
B. \(\{E, F, H, K, L\}^+\)

ii. From the following, show which is the super key for \( R \) **(2 Marks)**  
A. \(\{E, F\}\)  
B. \(\{E, F, H\}\)  
C. \(\{E, F, H, K, L\}\)  
D. \(\{E\}\)

iii. List three DDL commands, provide their syntax and explain their meaning as far as DBMS is concerned. **(5 Marks)**

---

**END OF EXAMINATION PAPER**