#### **Introduction to Database Systems - Test 1**

### **TEST [25 Marks]**
**Time: 60 Minutes**

---

### **Question One**

The library provides books to borrowers. Each book is described by title, edition, and year of publication, and is uniquely identified using the ISBN. Each borrower is described by his or her name and address and is uniquely identified using a borrower number. The library provides one or more copies of each book and each copy is uniquely identified using a copy number, status indicating if the book is available for loan, and the allowable loan period for a given copy. A borrower may loan one or many books, and the date each book is loaned out and is returned is recorded. Loan number uniquely identifies each book loan.


**i. Draw a complete ERD to represent the given information.**
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> *Use the data below to draw the ERD*
> The ERD consists of four main entities:
> 1.  **BOOK:** Attributes: `ISBN` (Primary Key), `Title`, `Edition`, `PublicationYear`.
> 2.  **BOOK_COPY:** Attributes: `CopyNumber` (Primary Key), `Status`, `AllowableLoanPeriod`.
> 3.  **BORROWER:** Attributes: `BorrowerNumber` (Primary Key), `Name`, `Address`.
> 4.  **LOAN:** Attributes: `LoanNumber` (Primary Key), `LoanDate`, `ReturnDate`.
>
> **Relationships:**
> *   **BOOK – BOOK_COPY:** One-to-Many (1:N). One book can have multiple copies.
> *   **BORROWER – LOAN:** One-to-Many (1:N). One borrower can have many loans.
> *   **BOOK_COPY – LOAN:** One-to-Many (1:N). One copy can be part of many loans over time.



**ii. From the ERD in i) draw the logical schema**
*(4 Marks)*

> [!Tip]- Answer (Click to show)
> The logical schema is as follows:
>
> *   **BORROWER** (BorrowerNumber, Name, Address)
> *   **BOOK** (ISBN, Title, Edition, PublicationYear)
> *   **BOOK_COPY** (CopyNumber, Status, AllowableLoanPeriod, ISBN)
>     *   `ISBN` is a Foreign Key referencing `BOOK(ISBN)`
> *   **LOAN** (LoanNumber, LoanDate, ReturnDate, BorrowerNumber, CopyNumber)
>     *   `BorrowerNumber` is a Foreign Key referencing `BORROWER(BorrowerNumber)`
>     *   `CopyNumber` is a Foreign Key referencing `BOOK_COPY(CopyNumber)`



**iii. From the logical schema in (ii) create any two data dictionaries**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> **1. Data Dictionary for BORROWER**
> | Attribute Name | Data Type | Length | Constraint | Description |
> | :--- | :--- | :--- | :--- | :--- |
> | BorrowerNumber | INT | - | PRIMARY KEY | Unique identifier for a borrower |
> | Name | VARCHAR | 100 | NOT NULL | Full name of the borrower |
> | Address | VARCHAR | 255 | - | Physical address of the borrower |
>
> **2. Data Dictionary for LOAN**
> | Attribute Name | Data Type | Length | Constraint | Description |
> | :--- | :--- | :--- | :--- | :--- |
> | LoanNumber | INT | - | PRIMARY KEY | Unique identifier for a loan |
> | LoanDate | DATE | - | NOT NULL | Date the book was borrowed |
> | ReturnDate | DATE | - | - | Date the book was returned |
> | BorrowerNumber | INT | - | FOREIGN KEY | Links to the BORROWER table |
> | CopyNumber | INT | - | FOREIGN KEY | Links to the BOOK_COPY table |



**iv. From the data dictionaries in (iii) create any two-physical schema**
*(3 Marks)*

> [!Tip]- Answer (Click to show)
> **1. Physical Schema for BOOK**
> ```sql
> CREATE TABLE BOOK (
>     ISBN VARCHAR(20) PRIMARY KEY,
>     Title VARCHAR(255) NOT NULL,
>     Edition VARCHAR(50),
>     PublicationYear INT
> );
> ```
>
> **2. Physical Schema for LOAN**
> ```sql
> CREATE TABLE LOAN (
>     LoanNumber INT PRIMARY KEY,
>     LoanDate DATE NOT NULL,
>     ReturnDate DATE,
>     BorrowerNumber INT,
>     CopyNumber INT,
>     FOREIGN KEY (BorrowerNumber) REFERENCES BORROWER(BorrowerNumber),
>     FOREIGN KEY (CopyNumber) REFERENCES BOOK_COPY(CopyNumber)
> );
> ```

---

### **Question Two**

The following tables form part of a database held in a relational DBMS. This database has thousands of records.

**Patient** (_patientNo, patName, patAddr, DoB_)  
**Ward** (_wardNo, wardName, wardType, noOfBeds_)  
**Contains** (_patientNo, wardNo, admissionDate_)  
**Drug** (_drugNo, drugName, costPerUnit_)  
**Prescribed** (_patientNo, drugNo, unitsPerDay, startDate, finishDate_)

**Required:**  
Write SQL statements to solve the following:

**i. Add column Gender with data type varchar and size of 8 in the schema Patient.**
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> ```sql
> ALTER TABLE Patient ADD Gender VARCHAR(8);
> ```



**ii. Write Statement that will enter the following records in Ward schema. (W12, Watoto, Private and 10)**
*(1 Mark)*

> [!Tip]- Answer (Click to show)
> ```sql
> INSERT INTO Ward (wardNo, wardName, wardType, noOfBeds)
> VALUES ('W12', 'Watoto', 'Private', 10);
> ```



**iii. Assume the backup on Schema Contains has completed successfully. Write SQL statement to delete Contains schema from the database. Re-implement the schema Contain by enforcing all necessary integrity constraints available in the Contain table**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> -- Delete the table
> DROP TABLE Contains;
> 
> -- Re-create it with constraints
> CREATE TABLE Contains (
>     patientNo VARCHAR(10),
>     wardNo VARCHAR(10),
>     admissionDate DATE,
>     PRIMARY KEY (patientNo, admissionDate),
>     FOREIGN KEY (patientNo) REFERENCES Patient(patientNo),
>     FOREIGN KEY (wardNo) REFERENCES Ward(wardNo)
> );
> ```



**iv. Re-define Prescribed schema in SQL such that patientNo and drugNo, have the same values as in Patient and Drug relations. Also ensures that when user modify the values in Patient and Drug relations those values should be reflected in Prescribed relation or when the user try to delete the values in either Patient or Drug relation the query should fail.**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> CREATE TABLE Prescribed (
>     patientNo VARCHAR(10),
>     drugNo VARCHAR(10),
>     unitsPerDay INT,
>     startDate DATE,
>     finishDate DATE,
>     PRIMARY KEY (patientNo, drugNo, startDate),
>     FOREIGN KEY (patientNo) REFERENCES Patient(patientNo)
>         ON UPDATE CASCADE
>         ON DELETE RESTRICT,
>     FOREIGN KEY (drugNo) REFERENCES Drug(drugNo)
>         ON UPDATE CASCADE
>         ON DELETE RESTRICT
> );
> ```



**v. Write the query to produce a list of patient who have taken drug with number D12**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT DISTINCT p.patName
> FROM Patient p
> JOIN Prescribed pr ON p.patientNo = pr.patientNo
> WHERE pr.drugNo = 'D12';
> ```



**vi. List the patient names , ward name and DoB for patients who have been admitted on 08-02-2019**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT p.patName, w.wardName, p.DoB
> FROM Patient p
> JOIN Contains c ON p.patientNo = c.patientNo
> JOIN Ward w ON c.wardNo = w.wardNo
> WHERE c.admissionDate = '2019-02-08';
> ```



**vii. Write a query to display the total number of beds available in the Hospital**
*(2 Marks)*

> [!Tip]- Answer (Click to show)
> ```sql
> SELECT SUM(noOfBeds) AS TotalHospitalBeds
> FROM Ward;
> ```


---


**END OF EXAMINATION**