
# Database Management Systems Examination

## SECTION A: (40 MARKS)
*Attempt ALL questions in this section.*

### Question One
*Choose the most correct answer and write its letter*  
**(1 Mark Each)**

**i.** Which of the following is generally used for performing tasks like creating the structure of the relations, deleting relation?  
A. DML (Data Manipulation Language)  
B. Query  
C. Relational Schema  
D. DDL (Data Definition Language)  
E. OO  

**ii.** Which of the following refers to the number of tuples in a relation?  
A. Constraints  
B. Entity  
C. Column  
D. Cardinality  
E. None of the above  

**iii.** Which of the following is preserved in execution of transaction in isolation?  
A. Atomicity  
B. Isolation  
C. Consistency  
D. Durability  
E. Reliability  

**iv.** Which normalization form is based on the transitive dependency?  
A. 1NF  
B. 2NF  
C. 3NF  
D. BCNF  
E. 4NF  

**v.** Which of the following is not a key feature of OODBMS?  
A. Object identity  
B. Inheritance  
C. Normalization  
D. Encapsulation  
E. Polymorphism  

**vi.** Consider the transactions T1, T2, T3 with the following schedule S:  
S: T1: Read (X); T2: Read (Z); T1: Read (Z); T3: Read (X); T3: Read (Y); T1: Write (X); T3: Write (Y); T2: Read (Y); T2: Write (Z); T2: Write (Y);  
If the schedule S is serializable, the equivalent serial schedule is  
A. It cannot be decided  
B. T2, T1, T3  
C. T1, T2, T3  
D. T3, T2, T1  
E. T1, T3, T2  

**vii.** What is true about Thomas's Write rule?  
A. Thomas's Write rule provides lesser concurrency than time stamp order protocol  
B. Thomas's Write rule and time stamp order protocol provides same concurrency  
C. No comparison between Thomas's Write rule and time stamp order protocol  
D. Thomas's Write rule provides greater concurrency than time stamp order protocol  
E. None of the above  

**viii.** Consider the schedule:  
T1: R(X); T2: R(Y); T3: W(X); T2: R(X); T1: R(Y)  
The schedule T1 is  
A. Not conflict and not view serializable  
B. Conflict and view serializable  
C. Not conflict but view serializable  
D. Conflict but not view serializable  
E. None of the above  

**ix.** Problem of testing view serializable is  
A. P Problem  
B. NP Hard  
C. NP Problem  
D. NP Complete  
E. P Complete  

**x.** Consider the following scenario: T1 consists of 5 operations and T2 consists of 4 operations, then the number of concurrent schedules possible is  
A. 91  
B. 126  
C. 51.41  
D. None of the above  
E. 61  

---

### Question Two
*Matching Items Questions*  
**(1 Mark Each)**

| Item A | Item B |
|--------|--------|
| i. PROJECT ITEM | A. Standard for object model, OQL, OSL and Language binding |
| ii. System catalog | B. Reflexivity |
| iii. ODMG | C. Metadata |
| iv. cp224@udom.ac.tz | D. Open Distributed Management Group |
| v. If \( B \subseteq a \), then \( a \rightarrow B \) | E. Alphanumeric data |
| vi. Durability | F. Transitivity |
| vii. Atomicity | G. Yields all values for selected attributes |
| viii. Exclusive lock | H. Data dictionary |
| ix. Shared lock | I. Once the DBMS informs the user that a transaction has successfully completed, its effects should persist even if the system crashes before all its changes are reflected on disk. |
| x. Deadlock | J. Either all actions are carried out or none are. Users should not have to worry about the effect of incomplete transactions. |
| | K. Lock prohibits other users from reading the locked resource |
| | L. Lock allows other users to read the locked resource, but they cannot update it. |
| | M. Occurs when two transactions are each waiting on a resource that the other transaction holds |
| | N. Transaction is one that is atomic, consistent, isolated, and durable |
| | O. Created to enforce uniqueness, to facilitate sorting, and to enable fast retrieval by column values |
| | P. Denying others the ability to update a record until someone completes the update or releases the record. |
| | Q. Each transaction in a distributed database is treated as if it is the only one in the system. |

Answers :

| i   | ii  | iii | iv  | v   | vi  | vii | vii | ix  | x   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| G   | C   | A   | E   | V   | I   | J   | K   | L   | M   |

---

### Question Three
*Answer True or False*  
**(1 Mark Each)**

i. Concurrency control is the process of managing simultaneous execution of transactions in a shared database, to ensure the serializability of transactions.  
ii. Any number of transactions can hold shared lock on an item but Exclusive lock can be hold only by one transaction.  
iii. Shrinking Phase New Locks on items can be acquired and no locks are released  
iv. Growing Phase Locks are released and no new Locks are acquired  
v. Deadlock occurs when each transaction T in a set of two or more transactions is waiting for some item that is locked by some other transaction T in the set.  
vi. In Wound-wait If TS(Ti) < TS(Tj), then (Ti older than Tj) Ti is allowed to wait; otherwise (Ti younger than Tj) abort Ti (Ti dies) and restart it later with the same timestamp.  
vii. In Wait-Die: If TS(Ti) < TS(Tj), then (Ti older than Tj) abort Tj (Ti wounds Tj) and restart it later with the same timestamp; otherwise (Ti younger than TJ) Ti is allowed to wait.  
viii. Starvation occurs when a transaction cannot proceed for an indefinite period of time while other transactions in the system continue normally.  
ix. In Wound-Wait, an older transaction is allowed to wait on a younger transaction  
x. In wait-die a younger transaction is allowed to wait on an older one  

**Answer Key:**  

| i    | ii   | iii   | iv   | v    | vi    | vii  | viii | ix    | x     |
| ---- | ---- | ----- | ---- | ---- | ----- | ---- | ---- | ----- | ----- |
| TRUE | TRUE | FALSE | TRUE | TRUE | FALSE | TRUE | TRUE | FAKSE | FALSE |


---

### Question Four
**Answer the following questions:**

**a.** Check whether the given schedule S is conflict serializable or not  
S: R₁(A), R₂(A), R₁(B), R₂(B), R₃(B), W₁(A), W₂(B)  

**Solution:**  
- Conflicting operations: W₁(A) and R₂(A), W₂(B) and R₁(B)  
- Precedence graph:  
  - R₁(A) → R₂(A)  
  - R₁(B) → W₂(B)  
- No cycles in the precedence graph. Therefore, the schedule is **conflict serializable**.

**b.** Check whether the given schedule S is conflict serializable or not  
S: W₁(A), R₂(A), W₁(B), W₃(C), R₂(C), R₄(B), W₂(D), W₄(E), R₅(D), W₅(E)  

**Solution:**  
- Conflicting operations: W₁(A) and R₂(A), W₁(B) and R₂(C), W₁(B) and R₄(B), W₁(B) and R₂(C)  
- Precedence graph:  
  - W₁(A) → R₂(A)  
  - W₁(B) → R₂(C)  
  - W₁(B) → R₄(B)  
  - W₁(B) → R₂(C)  
- No cycles in the precedence graph. Therefore, the schedule is **conflict serializable**.

---

## SECTION B: (60 MARKS)
*Attempt THREE (3) out of FOUR (4) questions in this section.*

### Question Five
Suppose you are given a relation \( R = \{A, B, C, D, E, F, G, H\} \) with the following functional dependencies:  
F = {AC ->G, D-> EG, BC->D, CG->BD, ACD->B, CE->AG} 

Find the extraneous attribute from F.  
a. Find the canonical cover of F.

---

### Question Six
Answer each of the following questions briefly. The questions are based on the following schema:  
- suppliers (sid:integer, sname:string, address:string)  
- parts (pid:integer, pname:string, color:string)  
- catalog (sid:integer, pid:integer, cost:real)

**a.** Write the SQL statements to retrieve the names of all suppliers who supply parts in more than two different colors.

Answer:
```sql
SELECT sname
FROM suppliers s
JOIN catalog c ON s.sid = c.sid
JOIN parts p ON c.pid = p.pid
GROUP BY s.sname
HAVING COUNT(DISTINCT p.color) > 2;
```

**b.** Find the part(s) with the highest cost, along with the name(s) of the supplier(s) who supply them.

Answer:
```sql
SELECT p.pname, s.sname, c.cost
FROM parts p
JOIN catalog c ON p.pid = c.pid
JOIN suppliers s ON c.sid = s.sid
WHERE c.cost = (SELECT MAX(cost) FROM catalog);
```

**c.** List all parts that are supplied by all suppliers.

Answer:
```sql
SELECT pname
FROM parts p
WHERE NOT EXISTS (
    SELECT *
    FROM suppliers s
    WHERE NOT EXISTS (
        SELECT *
        FROM catalog c
        WHERE c.sid = s.sid AND c.pid = p.pid
    )
);
```

**d.** Retrieve the names of suppliers who supply all parts of a specific color (e.g., 'Red').

Answer:
```sql
SELECT sname
FROM suppliers s
WHERE NOT EXISTS (
    SELECT *
    FROM parts p
    WHERE p.color = 'Red' AND NOT EXISTS (
        SELECT *
        FROM catalog c
        WHERE c.sid = s.sid AND c.pid = p.pid
    )
);
```

**e.** Find the average cost of parts supplied by each supplier, along with the supplier name.

Answer:
```sql
SELECT s.sname, AVG(c.cost) AS avg_cost
FROM suppliers s
JOIN catalog c ON s.sid = c.sid
GROUP BY s.sname;
```

---

### Question Seven
Let T1 transfer $1500 from account A to account B, and T2 transfer 30% of the balance from account A to account B. Initial balance for account A and B are 1000 and 2000 respectively.

**a.** Write a serial schedule for transaction to transfer money from account A to account B


**b.** Draw a transaction table of schedule in (a) by considering, Consistent @commit, Inconsistent @transit and Inconsistent @commit.  

**c.** Prove that the database is consistent  

---

### Question Eight
**a.** Consider there are three transactions with 9, 10, 11 operations respectively, find:  
**i.** How many total number of schedules are possible?  

**Solution:**  
- Given 3 transactions with 9, 10, and 11 operations respectively.  
- Total schedules = \( (9 + 10 + 11)! = 30! \)  

**ii.** How many total number of serial schedules are possible?  

**Solution:**  
- Total serial schedules = \( 3! = 6 \)  

**iii.** How many total number of non-serial schedules are possible?  

**Solution:**  
- Total non-serial schedules = Total schedules - Serial schedules = \( 30! - 6 \)  

**b.** By using the swap method, make the following schedule from non-serial to serial schedule. Show all the steps necessary.  

**Table 1: concurrent to serial schedule**

| T1        | T2        |
| --------- | --------- |
| Read (A)  |           |
| Write (A) |           |
|           | Read (A)  |
|           | Write (A) |
| Read (B)  |           |
| Write (B) |           |
|           | Read (B)  |
|           | Write(B)  |

---

**END OF EXAMINATION PAPER**