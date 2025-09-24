
#### CP 224: Database Management Systems  
## Test One  
**Time allocated:** 45 Minutes  

**Registration #:** T......  
**Program:** ...... (e.g., CS)  
**Date:** 26/05/2025  

---

## Question One

A company plans to enhance the performance of its existing database system by reorganising the underlying file structures and implementing new indexing mechanisms. These changes are aimed at optimising data retrieval speeds, storage efficiency, and overall system responsiveness. As part of this upgrade, the database team must ensure that improvements to the physical storage layer do not disrupt the functionality of user-facing applications or compromise the integrity of the data access processes.

In this context, answer the following questions:

**a)** Explain the concept of physical data independence, and illustrate how this principle is relevant to the current upgrade plan involving changes at the storage and indexing level.

**b)** Describe how the Three-Schema Architecture facilitates such backend upgrades. Specifically, discuss how the separation of these layers ensures that physical changes can be made without altering the logical view of the data or requiring modifications to user applications.

**c)** Discuss the broader importance of data independence in a database system, particularly focusing on how it contributes to the long-term scalability, adaptability, and maintainability of the system as business needs evolve and technologies change.

---

## Question Two

Consider the University database schema, then answer the following question:

- **student** (<span style="color:rgb(255, 148, 148)">sid</span>, sname, major, age)  
- **course** (<span style="color:rgb(255, 148, 148)">course_no</span>, cname, dept, credits)  
- **enroll** (<span style="color:rgb(255, 148, 148)">sid</span>, <span style="color:rgb(255, 148, 148)">course_no</span>, semester, grade)  
- **instructor** (<span style="color:rgb(255, 148, 148)">iid</span>, iname, dept)  
- **teaches** (iid, course_no, semester)

NB: <span style="color:rgb(255, 148, 148)">red</span> means primary key

**a)** Write a relational algebra expression to find the names (sname) of students who are enrolled in both "Database Management Systems" and "Internet Programming Application I" in the same semester.

**b)** Write a relational algebra expression to retrieve the student IDs (sid) and names (sname) of students who have achieved a grade of 'A' in at least one course in the CSE department and at least one course in the IST department.

**c)** Write a relational algebra expression to find the course numbers (course_no) and names (cname) of courses offered in semester II but not enrolled by any students.

**d)** Write a relational algebra expression to find the instructor IDs (iid) and names (iname) who have taught all CSE department courses.  
**(4 Marks)**

**e)** Write a relational algebra expression to generate a report listing the names of students (sname), courses (cname), and instructors (iname) for all enrollments in the semester II where the course has exactly 10 credits and the student’s grade is ‘C’ or higher.  
**(4 Marks)**

---

## Question Three

Consider a relational database containing the relation orderDetails as shown in Table 1.

**Table 1: orderDetail relation**

| orderNumber | productName      | quantityOrdered | priceEach |
|-------------|------------------|-----------------|-----------|
| 1001        | Samsung TV       | 2               | 500.00    |
| 1002        | Sony Headphones  | 5               | 150.00    |
| 1003        | Epson Printer    | 1               | 300.00    |
| 1004        | Apple iPhone     | 3               | 900.00    |
| 1005        | LG Soundbar      | NULL            | 200.00    |
| 1006        | Sony PlayStation | 4               | NULL      |
| 1007        | Sony Headphones  | 2               | 150.00    |
| 1008        | Epson Printer    | 3               | 280.00    |
| 1009        | Sony Headphones  | 1               | 150.00    |
| 1010        | Samsung TV       | 1               | 520.00    |
| 1011        | Sony Headphones  | 4               | 145.00    |

Using the data in Table 1, answer the following questions:  
**(4 Marks Each)**

**a)** Write a DDL query to create the orderDetails table, ensuring the appropriate integrity constraints are included.

**b)** Write an INSERT query to insert all the tuples into a new relation orderQuantity, selecting only the productName and quantityOrdered attributes from orderDetail without using the VALUES keyword.

**c)** Write a query and its output to calculate the average price of each product from the orderDetails relation where the productName contains the substring 'son'.

**d)** Write a query to retrieve tuples including NULL values from the orderDetails relation on the priceEach less than, greater than, or equal to 200.

**e)** Write a query and its output, count the productName on the orderDetails table, group by productName.

---

**END OF TEST**