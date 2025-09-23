
# Database Management Systems Exam - CS 216

**University of Dodoma**  
College of Informatics and Virtual Education  
School of Informatics  

**Undergraduate University Examinations**  
First Semester 2017/2018  
**CS 216: Database Management Systems**  

**Date:** 1st March, 2018  
**Time Allocated:** 3 Hours  

---

## Instructions:

1. This question paper consists of two sections: A and B
2. Answer **ALL questions in Section A** and **ANY three questions from Section B**. Question Five is compulsory
3. All University of Dodoma examination regulations apply.

---

## SECTION A (40 Marks)

### Question One

**a.** Why would you choose a database system instead of simply storing data in operating system files? Mention 5 reasons  
(5 Marks)

**b.** What is the main difference between ERD and a data model? Discuss the importance of data modeling  
(2 Marks)

**c.** Mention three reasons, why client/server architecture becomes so prevalent in the business world?  
(3 Marks)

**d.** With the help of clear diagram, explain the three-schema architecture of the database  
(4 Marks)

---

### Question Two

**a.** Explain two main differences between Discretionary Access Control and Mandatory Access Control, in relation to DBMS security  
(4 Marks)

**b.** A country wide school board wants to create a distributed database students information. Describe how this can be achieved (designed). How would it be different if they wanted a centralized system?  
(4 Marks)

---

### Question Three

**a.** What is meant by the concurrent execution of database transactions in a multiuser system? Discuss why concurrency control is needed, and give one informal example  
(3 Marks)

**b.** Describe Two-Phase Locking Techniques and explain how it guarantees serializability  
(3 Marks)

**c.** With the help of precedence graph, state whether the following schedule S in Figure 1, is serializable, or not conflict serializable.  
(3 Marks)

**Figure 1: Schedule S**

| T1       | T2       |
| -------- | -------- |
| read(A)  |          |
| write(A) |          |
|          | read(A)  |
|          | write(A) |
| read(B)  |          |
|          | read(B)  |
| write(B) |          |
|          | write(B) |

---

### Question Four

Study the employee database in Table 1 and attempt the following questions. Primary keys are underlined(<span style="color:rgb(255, 148, 148)">red</span>)

**Table 1: Employee database**
- Employee (<span style="color:rgb(255, 148, 148)">employee-name</span>, street, city)
- Works (<span style="color:rgb(255, 148, 148)">employee-name</span>, <span style="color:rgb(255, 148, 148)">company-name</span>, salary)
- Company (<span style="color:rgb(255, 148, 148)">company-name</span>, city)
- Manages (<span style="color:rgb(255, 148, 148)">employee-name</span>, <span style="color:rgb(255, 148, 148)">manager-name)</span>

**a.** Translate each of the following query in relation algebra  
(2 Marks Each)

i. Find all employees in the database who live in the same cities and on the same streets as do their managers.
ii. Find all employees in the database who do not work for First Bank Corporation.

**b.** For each relation algebra expression in a) suggest a plan to efficiently evaluate the query. Show all your workings  
(2 Marks Each)

---

## SECTION B (60 Marks)

### Question Five
Read the following scenario and answer questions that follow.

Dodoma Company prides itself of having up-to-date information on the processing and current location of each shipped item. To do this, Dodoma Company relies on a company-wide information system. Shipped items are the heart of the Dodoma company product tracking information system (DCTIS). Shipped items can be characterized by item number (unique), weight, dimensions, insurance amount, destination, and final delivery date. Shipped items are received into the DCTIS at a single retail center. Retail centers are characterized by their type, unique, and address. Shipped items make their way to their destination via one or more standard DCTIS transportation events (i.e., flights, truck deliveries). These transportation events are characterized by a unique schedule Number, a type (e.g., flight, truck), and a delivery Route.

**a.** Draw the ERD of Dodoma company product tracking information system  
(5 Marks)

**b.** Translate the ERD in (a) into relational schemas  
(5 Marks)

**c.** Translate the following query using SQL  
(2 Marks Each)

i. List all items  
ii. List items shipped via flight  
iii. Find the total number of items shipped via truck  
iv. Add a new retail center to this database  
v. Change the name of attribute delivery root to DR  
vi. List the weight of items delivered via the same delivered root  
vii. List the type of retail center which received more items than the retail center of Dodoma  
viii. List the type of retail center which doesn't receive any item  
ix. Grant all privilege to the administrator of this database  
x. Take away the select privilege to the administrator to table shipped items

---

### Question Six

**a.** What is a schedule (history)? Define the concepts of recoverable, cascadeless, and compare them in terms of their recoverability.  
(5 Marks)

**b.** What is a serial schedule? What is a serializable schedule? Why a serial schedule is considered correct? Why a serializable schedule is considered correct?  
(4 Marks)

**c.** The following represents the sequence of events in a schedule involving transactions T1, T2, T3, T4 and T5 requesting various lock. A, B, C, D, E, F are items in the database.

i. DT2 : Read B  
ii. T4 : Read D  
iii. T2 : Read E  
iv. T2 : Write E  
v. T3 : Read F  
vi. T2 : Read F  
vii. T1 : Read C  
viii. T5 : Read A  
ix. T5 : Write A  
x. T5: COMMIT  
xi. T1 : Read E  
xii. T5 : Read C  
xiii. T3 : Read A  
xiv. T5 : Write C  
xv. T2 : Write F  

Draw a wait-for-graph for the data above and find whether the transactions are in a deadlock  
(6 Marks)

---

### Question Seven

**a.** What is normalization?  

**b.** The following relation schema can be used to register information on the repayments on micro loans:  
Repayment (borrower_id, name_address, loan ID, loanamount, requestdate, repayment_date, request_amount)  

A borrower is identified with a unique borrower_id, and has only one address. Borrowers can have multiple simultaneous loans, but they always have different request dates. The borrower can make multiple repayments on the same day, but not more than one repayment per loan per day.

**i.** Explain in which normal form this is  
(2 Marks)

**ii.** This relation is susceptible to update anomalies. Provide examples of insertion, deletion, and modification anomalies.  
(6 Marks)

**iii.** Normalize the table to 3NF  
(6 Marks)

---

### Question Eight

**a.** When is it preferable to use a dense index rather than a sparse index?  
(2 Marks)

**b.** What is the difference between a primary index and a secondary index?  
(2 Marks)

**c.** Construct B+-tree for the following set of key values: (2, 3, 5, 7, 11, 17, 19, 23, 29, 31) for the cases where the number of pointers that will fit in one node is Four (n=4).  
(6 Marks)

**d.** For each B+-tree in c) above show the form of the tree after each of the following series of operations:  
i. Insert 9  
ii. Insert 10  
iii. Insert 8  
iv. Delete 23  
v. Delete 19  
(1 Mark Each)

---

**END OF EXAMINATION**