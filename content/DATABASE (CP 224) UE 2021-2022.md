#### Database Systems Examination

THE UNIVERSITY OF DODOMA
**OFFICE OF THE DEPUTY VICE CHANCELLOR ACADEMIC, RESEARCH AND CONSULTANCY**
COLLEGE OF INFORMATICS AND VIRTUAL EDUCATION  
Department of Computer Science and Engineering  
End of Semester Two University Examination for the 2021/2022 Academic Year  

---

**Course Name:** Database Management Systems  
**Paper Code Number:** CP 224/CS 228  
**Date of Examination:** 15th July, 2022  
**Time:** 15:30-18:30  
**Duration:** 3 Hours  
**Venue(s):** CIVE-AUDITORIUM & LRB 003D  
**Sitting Programme(s):** BSc. HRS, MTVA, CSI, BRS, SEI, CNISEI, ER, CSPFE26CE3

## SECTION A: (15 MARKS)

### Question One
Consider the following schema (the primary key for each relation is denoted by the underlined attribute), provide relation algebra expressions for the following queries:  
**(1 Mark Each)**

**Relations:** 
- lives (person-name, street, city)
- works (person-name, company-name, salary)
- located in (company-name, city)
- manages (person-name, manager-name)

**Queries:**
a. Find the name and city of all persons who work for ‘CRBD Bank’ and earn more than 500,000.  
b. Find names of all persons who live in the same city as the company they work for.  
c. Find names of all persons who do not work for CRDB Bank.  
d. Find names of all persons who live in the same city and on the same street as their manager.  
e. Find names of all persons who works for NMB Bank and CRDB Bank.

---

### Question Two
**a.** Explain in your own words or through an example the following terms: key attribute, derived attribute, multivalued attribute, entity-relationship model.  
**(2 Marks)**

**b.** Explain the strict two-phase locking protocol.  
**(3 Marks)**

---

### Question Three
Explain the following terms:  
**(1 Mark Each)**
a. blind write  
b. dirty read  
c. unrepeatable read  
d. recoverable schedule  
e. avoids-cascading-aborts schedule

---

## SECTION B: (45 MARKS)
*Attempt THREE (3) out of FOUR (4) questions in this section.*

### Question Four
Consider Table 1, then answer the following questions:

**Table 1: Details of patient dental appointments**

| staffNo | dentistName   | patientNo | patientName   | Appointment date time | surgeryNo |
|---------|---------------|-----------|---------------|----------------------|-----------|
| S1011   | Tony Smith    | P100      | Gillian White | 12-Aug-03 10:00      | S10       |
| S1011   | Tony Smith    | P105      | Jill Bell     | 13-Aug-03 12:00      | S15       |
| S1024   | Hellen Pearson| P108      | Ian MacKay    | 12-Sep-03 10:00      | S10       |
| S1024   | Helen Pearson | P108      | Ian MacKay    | 14-Sep-03 10:00      | S10       |
| S1032   | Robin Plevin  | P105      | Jill Bell     | 14-Oct-03 16:30      | S15       |
| S1032   | Robin Plevin  | P110      | John Walker   | 15-Oct-03 18:00      | S13       |

**a.** Table 1 is susceptible to update anomalies. Provide examples of insertion, deletion, and modification anomalies.  
**(6 Marks)**

**b.** Describe and illustrate the process of normalizing Table 1 to 3NF. State any assumptions you make about the data shown in this table.  
**(6 Marks)**

**c.** Write the relational algebra of the names of three dentists with the maximum number of surgeries.  
**(3 Marks)**

---

### Question Five
A database is being constructed to keep track of the teams, players, and games of the national intercollegiate football championship.

- For each football player the following information is recorded: SSN, name, address, birthday, and position he plays on the team, the number of years he is playing with the team.
- For each team that participates in the football championship the following information is recorded: name of the team, name of the coach, name of the university it represents, the rank of the team in the current season, number of games the team won and number of games the team lost in the current season.
- The database keeps information about the team coach. This information includes: SSN, name, address, age, number of years of coaching the current team, total number of years of coaching, number of times the team he/she lead won a championship.
- The following information is recorded about each game: the date and place of the event, winning team, and the result (the score) of the game.

**a.** Draw an E-R diagram for this database. Clearly, state any assumptions you make.  
**(6 Marks)**

**b.** Draw a relational schema diagram then specify entity integrity constraints and referential integrity constraints.  
**(5 Marks)**

**c.** Use the relational schema to write the following queries:

i. Find names of players coached by more than three coaches in the team.  
**(2 Marks)**

ii. Find names of coaches and their teams with the enormous number of wins in different games.  
**(2 Marks)**

---

### Question Six
**a.** Consider Figure 1. Check whether the given schedule S is view serializable or not.  
**(7 Marks)**

**Figure 1: Schedule One**

| T1   | T2   | T3   |
| ---- | ---- | ---- |
| R(A) |      |      |
|      | R(A) |      |
|      |      | W(A) |
| W(A) |      |      |

**b.** Check whether the schedule is conflict serializable and view serializable or not?  
S: R1(A); R2(A); R3(A); R4(A); W1(B); W2(B); W3(B); W4(B)  
**(8 Marks)**

---

### Question Seven
**a.** Consider Figure 2. Check whether the given schedule S is conflict serializable and recoverable or not.  
**(8 Marks)**

**Figure 2: Schedule Two**

| T1     | T2     | T3     | T4     |
| ------ | ------ | ------ | ------ |
|        | R(X)   |        |        |
|        |        | W(X)   |        |
|        |        | Commit |        |
| W(X)   |        |        |        |
| Commit |        |        |        |
|        | W(Y)   |        |        |
|        | R(Z)   |        |        |
|        | Commit |        |        |
|        |        |        | R(X)   |
|        |        |        | R(Y)   |
|        |        |        | Commit |

**b.** Consider Figure 3. Check whether the given schedule S is conflict serializable or not. If yes, then determine all the possible serialized schedules.  
**(7 Marks)**

**Figure 3: Schedule Three**

| T1   | T2   | T3   | T4   |
| ---- | ---- | ---- | ---- |
|      |      |      | R(A) |
|      | R(A) |      |      |
|      |      | R(A) |      |
| W(B) |      |      |      |
|      | W(A) |      |      |
|      |      | R(B) |      |
|      | W(B) |      |      |

---

**END OF EXAMINATION**