#### Database Management System Exam - CP 224

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

## **SECTION A (40 MARKS)**

### **Question One**  
*Choose the most correct answer.*

**x.** Which of the following is true regarding conflict serializability?  
- A. View serializability is stricter  
- B. Conflict serializability allows dirty reads  
- C. Conflict serializability requires precedence graph  
- D. View serializability does not guarantee recoverability  
- E. View serializability includes more schedules than conflict serializability  

> [!Tip]- Answer (Click to show)
> **E. View serializability includes more schedules than conflict serializability**

---

### **Question Two**  
*Write True for correct statement and False for incorrect statement.*  
*(1 Mark Each)*

**i.** If a schedule contains a cycle in its precedence graph, it cannot be conflict-serializable.  

> [!Tip]- Answer (Click to show)
> **True**


**ii.** A schedule that preserves the same read-from and final-write relationships as a serial schedule is view-serializable.  

> [!Tip]- Answer (Click to show)
> **True**


**iii.** Every schedule that follows the basic two-phase locking protocol is conflict-serializable and deadlock-free.  

> [!Tip]- Answer (Click to show)
> **False**


**iv.** Strict 2PL holds all exclusive locks until the transaction commits or aborts, thus preventing cascading rollbacks.  

> [!Tip]- Answer (Click to show)
> **True**


**v.** In relational algebra, the natural join operation can be simulated using a Cartesian product followed by a selection and a projection.  

> [!Tip]- Answer (Click to show)
> **True**


**vi.** In SQL, the GROUP BY clause filters rows before the WHERE clause is applied.

> [!Tip]- Answer (Click to show)
> **False**


**vii.** A schedule that is view-serializable but not conflict-serializable can still cause inconsistent data if executed without proper concurrency control.  

> [!Tip]- Answer (Click to show)
> **True**


**viii.** In the timestamp ordering protocol, if a transaction issues a read on data already written by a newer transaction, it is rolled back.  

> [!Tip]- Answer (Click to show)
> **True**


**ix.** Two schedules are view-equivalent if they perform the same writes in the same order, regardless of read operations.  

> [!Tip]- Answer (Click to show)
> **False**


**x.** Pushing selections down in a relational algebra expression tree can reduce the size of intermediate results and improve query performance. 

> [!Tip]- Answer (Click to show)
> **True**


---

### **Question Three**  
*Match the term in column A with its correct term in column B.*  
*(1 Mark Each)*

**Column A**  
i. A schedule where no transaction reads or writes dirty data from another uncommitted transaction.  
ii. A situation in which transactions wait indefinitely due to circular wait for locks.  
iii. A schedule that cannot be rendered into any conflict-equivalent serial schedule, but preserves the same read and final writes.  
iv. A method in which a transaction must lock all data items before releasing any locks.  
v. Relational algebra operator used to extract rows that satisfy a given predicate.  
vi. Relational algebra operator represented by a greek letter sigma
vii. A protocol that assigns a proper timestamp to each transaction to determine serializability.  
viii. The SQL clause used to group rows sharing a property for aggregation.  
ix. In conflict serializability, this type of conflict exists between write and read operations of different transactions on the same data item.  
x. A schedule where operations of different transactions are interleaved, but the final outcome is equivalent to some serial schedule.  

**Column B**  
- A. Cascadeless schedule  
- B. Deadlock  
- C. View serializable  
- D. Two-phase locking  
- E. Selection  
- F. σ (sigma)  
- G. Timestamp ordering protocol  
- H. GROUP BY  
- I. Read-write conflict  
- J. Conflict serializable  
- K. View equivalence  
- L. Dirty read  
- M. Phantom read  
- N. Predicate pushdown  
- O. Recovery manager  

> [!Tip]- Answer (Click to show)
> i. **A. Cascadeless schedule**  
> ii. **B. Deadlock**  
> iii. **C. View serializable**  
> iv. **D. Two-phase locking**  
> v. **E. Selection**  
> vi. **F. σ (sigma)**  
> vii. **G. Timestamp ordering protocol**  
> viii. **H. GROUP BY**  
> ix. **I. Read-write conflict**  
> x. **J. Conflict serializable****

---

### **Question Four**

Consider the schema below:  
- **employee**(employee-name, street, email, city)  
- **works**(employee-name, company-name, salary)  
- **company**(company-name, city)  
- **managers**(employee-name, manager-name)  

**a.** Write an SQL DDL statement for the tables of this database, including the referential integrity constraints that should hold.  
*(3 Marks)*  

> [!Tip]- Answer (Click to show)
> ```sql
> CREATE TABLE employee (
>     employee_name VARCHAR(50) PRIMARY KEY,
>     street VARCHAR(100),
>     email VARCHAR(100),
>     city VARCHAR(50)
> );
> 
> CREATE TABLE company (
>     company_name VARCHAR(50) PRIMARY KEY,
>     city VARCHAR(50)
> );
> 
> CREATE TABLE works (
>     employee_name VARCHAR(50),
>     company_name VARCHAR(50),
>     salary DECIMAL(10,2),
>     PRIMARY KEY (employee_name, company_name),
>     FOREIGN KEY (employee_name) REFERENCES employee(employee_name),
>     FOREIGN KEY (company_name) REFERENCES company(company_name)
> );
> 
> CREATE TABLE managers (
>     employee_name VARCHAR(50),
>     manager_name VARCHAR(50),
>     PRIMARY KEY (employee_name, manager_name),
>     FOREIGN KEY (employee_name) REFERENCES employee(employee_name),
>     FOREIGN KEY (manager_name) REFERENCES employee(employee_name)
> );
> ```


**b.** Write the SQL to retrieve the names and emails of all employees who work in the same city as their company but earn more than the average salary of all employees in that company.  
*(3 Marks)*  
> [!Tip]- Answer (Click to show)
> ```sql
> SELECT e.employee_name, e.email
> FROM employee e
> JOIN works w ON e.employee_name = w.employee_name
> JOIN company c ON w.company_name = c.company_name
> WHERE e.city = c.city
> AND w.salary > (
>     SELECT AVG(salary)
>     FROM works w2
>     WHERE w2.company_name = w.company_name
> );
> ```


**c.** Write the SQL to find the names of employees who are managed by someone living in a different city, and both the employee and the manager work for the same company.  
*(4 Marks)*  

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT e.employee_name
> FROM employee e
> JOIN managers m ON e.employee_name = m.employee_name
> JOIN employee mgr ON m.manager_name = mgr.employee_name
> JOIN works we ON e.employee_name = we.employee_name
> JOIN works wmgr ON mgr.employee_name = wmgr.employee_name
> WHERE e.city <> mgr.city
> AND we.company_name = wmgr.company_name;
> ```

---

## **SECTION B (60 MARKS)**  
*Attempt any **THREE (3)** out of **FOUR (4)** questions provided.*

### **Question Five**  
*(20 Marks)*

A database system implements Timestamp Ordering (TO) Protocol for concurrency control, where each transaction Tᵢ is assigned a unique timestamp TS(Tᵢ) at its start. Assume the database contains two data items X and Y, and two concurrent transactions T1 and T2 with timestamps TS(T1) = 5 and TS(T2) = 10.

The read and write timestamps of all data items are initially zero:  
- RT(X) = 0, WT(X) = 0  
- RT(Y) = 0, WT(Y) = 0  

The operations of the transactions are as follows:  
- T1: R(X) → W(Y)  
- T2: W(X) → R(Y)  

**a.** Explain the rules of the basic Timestamp Ordering Protocol, including how it ensures serializability.  
*(5 Marks)*  

> [!Tip]- Answer (Click to show)
> The Timestamp Ordering Protocol ensures serializability by assigning unique timestamps to transactions and enforcing timestamp order on conflicting operations:
> 1. **Read Rule**: A read request from Tᵢ is granted if TS(Tᵢ) ≥ WT(X), otherwise aborted
> 2. **Write Rule**: A write request from Tᵢ is granted if TS(Tᵢ) ≥ RT(X) and TS(Tᵢ) ≥ WT(X), otherwise aborted
> 3. If an operation is granted, update RT(X) or WT(X) to max(current, TS(Tᵢ))
> This ensures transactions execute as if they occurred in timestamp order.

**b.** Apply the TO protocol rules step by step for the above operations and determine whether any transaction(s) will be aborted. Justify each step by showing the timestamp comparisons and updates to RT and WT.  
*(10 Marks)*  

> [!Tip]- Answer (Click to show)
> 1. **T1: R(X)** - TS(T1)=5 ≥ WT(X)=0 → **Granted**, RT(X) = max(0,5) = 5
> 2. **T2: W(X)** - TS(T2)=10 ≥ RT(X)=5 and ≥ WT(X)=0 → **Granted**, WT(X) = max(0,10) = 10
> 3. **T1: W(Y)** - TS(T1)=5 ≥ RT(Y)=0 and ≥ WT(Y)=0 → **Granted**, WT(Y) = max(0,5) = 5
> 4. **T2: R(Y)** - TS(T2)=10 ≥ WT(Y)=5 → **Granted**, RT(Y) = max(0,10) = 10
> **No transactions aborted** - All operations satisfied TO rules.


**c.** Suppose the system switches to Thomas' Write Rule, an optimized version of the TO protocol. Re-evaluate your answer in (b) and determine how this would change the outcome. Would any transaction be allowed instead of being aborted? Explain.  
*(5 Marks)*  

> [!Tip]- Answer (Click to show)
> **Thomas' Write Rule** modifies the write rule: If TS(Tᵢ) < RT(X), abort Tᵢ; if TS(Tᵢ) < WT(X), ignore the write (write is obsolete).  
> In our scenario:
> - All operations would still be granted as in basic TO
> - No changes to outcome since all timestamps satisfy conditions
> - Thomas' rule would only change behavior if a transaction with older timestamp tried to write an item already written by a newer transaction

---

### **Question Six**  
*(20 Marks)*

The University of Dodoma database consists of the following schemas:  
**Student**(StudentID, Name, Major, Year)  
**Enrollment**(StudentID, CourseID, Grade)  
**Course**(CourseID, Title, Department, Credits)  
**Teacher**(InstructorID, Name, Department)  
**Instruction**(InstructorID, CourseID, Semester, Year)  

![[Pasted image 20250928201512.png]]

**a.** Write a subquery to find the names of students who are majoring in the same department as Dr. Smith.  
*(2 Marks)*  

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT Name
> FROM Student
> WHERE Major = (
>     SELECT Department 
>     FROM Teacher 
>     WHERE Name = 'Dr. Smith'
> );
> ```


**b.** Write the correlated subquery to find the names of students who have enrolled in all courses offered by the Computer Science department.  
*(3 Marks)*  
![[Pasted image 20250928201941.png]]


> [!Tip]- Answer (Click to show)
> ```sql
> SELECT s.Name
> FROM Student s
> WHERE NOT EXISTS (
>     SELECT c.CourseID
>     FROM Course c
>     WHERE c.Department = 'Computer Science'
>     AND NOT EXISTS (
>         SELECT e.StudentID
>         FROM Enrollment e
>         WHERE e.StudentID = s.StudentID
>         AND e.CourseID = c.CourseID
>     )
> );
> ```


**c.** Write an SQL query and its resulting table to list each department along with the average grade received by students in its courses.  
*(5 Marks)*  

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT c.Department, AVG(e.Grade) AS AverageGrade
> FROM Course c
> JOIN Enrollment e ON c.CourseID = e.CourseID
> GROUP BY c.Department;
> ```
> 

**Result Table:**

| Department       | AverageGrade |
| ---------------- | ------------ |
| Computer Science | 84.0         |
| Mathematics      | 90.0         |
| Physics          | 60.0         |



**d.** Write a query to find the name of the student with the highest average grade across all their courses.  
*(3 Marks)*  

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT s.Name, AVG(e.Grade) AS AvgGrade
> FROM Student s
> JOIN Enrollment e ON s.StudentID = e.StudentID
> GROUP BY s.StudentID, s.Name
> ORDER BY AvgGrade DESC
> LIMIT 1;
> ```

---


**TO BE CONTINUED...**