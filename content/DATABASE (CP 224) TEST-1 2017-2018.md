#### Test 1 Questions 2017-2018

### Question One

**i.** With the help of diagram, describe the three-schema architecture. Why do we need mappings between schema levels?  
**ii.** What is the difference between logical data independence and physical data independence?  
**iii.** With the help of clear diagram, discuss the differences between centralized databases and distributed databases

### Question Two

As a part of its project management database, the company wants to develop a scheduling system to store information about resources (employees), projects and bookings. The purpose of the system is to schedule employees to a particular project's efficiently. For each employee, the following information is stored: Employee ID, First and Last name, Rank, and salary. The system should also accept more than one phone number for each employee. Employee can make many bookings at different times. Employees are organized into solution sets, each solution set has a head of the solution set or a supervisor, who is the resource owner for all employees in that SS. For each solution set we record the SS ID and the SS name. An employee can belong to only one solution set and one solution set constitutes many employees. The scheduling system also stores information about project. For each project, the following information is stored: Project ID, Status, Location and Client name. Employee can works in more than one project as a part of the scheduling system and one project constitutes many employees. When a booking is requested for an employee, the employee is scheduled to work on a particular project, on a particular day for the specified amount of time. For each booking we also record current status. Many employees can make many bookings at a time.

**i.** Draw the ERD  
**ii.** Convert the above ERD into relational schemas  
**iii.** Translate the following in relation algebra and SQL  

1. List all employee  
2. List all project  
3. List the ID of supervisor who supervises many employees than other supervisor  
4. Find the name of employee who live in the same city as their supervisor  
5. List the name of employee who do not work in any project  
6. List the names of all employees who works for "child abuse" project  
7. Find the name of the employee with the maximum number of projects  
8. List all booking which has been made by employee whose name is like Tina  
9. Find the average number of employees in the solution Set id "12345SS"  
10. Find the name of the employee who earns more than any employee of child abuse project