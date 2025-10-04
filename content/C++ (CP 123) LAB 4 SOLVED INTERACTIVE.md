---
title: "Lab 4 - Loop, Selection, and Array Practice"
module: "Programming Fundamentals"
lab_number: 4
academic_year: "2024-2025"
date_created: 2024-10-05
author: 
tags:
  - lab-work
  - programming
  - loops
  - selection
  - arrays
  - academic-tracking
  - student-project
  - problem-solving
description: "Lab exercise focusing on loops, selection statements, and arrays through an academic performance tracking system project"
difficulty: "Beginner"
estimated_completion_time: 60
programming_concepts:
  - "Loop structures"
  - "Conditional statements"
  - "Array manipulation"
  - "Function definition"
  - "Data processing"
  - "Grade calculation"
learning_objectives:
  - "Implement loops for data processing"
  - "Use selection statements for grade categorization"
  - "Work with arrays to store student data"
  - "Calculate averages and apply grading scales"
  - "Format and display program output"
---


**LAB WORK 4: PRACTICE LOOP, SELECTION, and ARRAY (if any)**

Ngunguto, a high school student with a keen interest in programming, found himself inspired during a computer science class project. His teacher challenged the students to create a tool that could help with academic performance tracking. Motivated by this challenge, Ngunguto decided to develop a program that would calculate and display the average scores and corresponding grades for five of his classmates based on their performance in four subjects: Mathematics, Science, English, and History.

To begin, Ngunguto gathered the scores of his classmates, ensuring he had accurate data for each subject. He structured the data in a clear format, creating a list that included the names of the students and their respective scores. This organization was crucial, as it would allow him to efficiently process the information later.

Next, Ngunguto set about writing the program. He started by defining a function that would calculate the average score for each student. To make the program user-friendly, he included comments to explain each part of the code. He implemented a grading scale that would categorize the average scores: an A for scores between 90 and 100, a B for 80 to 89, a C for 70 to 79, a D for 60 to 69, and an F for scores below 60.

After coding the logic, Ngunguto ran several tests with sample data to ensure the program worked correctly. He was thrilled to see that it not only calculated the averages accurately but also determined the correct grades for each student. To enhance the output, he formatted the results to display each student’s name, average score, and corresponding grade neatly.

Encouraged by his success, Ngunguto decided to present his project to the class. During his presentation, he explained the process he followed, the challenges he faced, and how he overcame them. His classmates were impressed with the program's functionality, and many expressed interests in using it for their own academic tracking.

This project not only solidified Ngunguto's programming skills but also fostered a sense of collaboration among his peers. They discussed potential improvements, such as adding features for tracking progress over time or incorporating a graphical user interface. Inspired by the feedback, Ngunguto felt motivated to continue enhancing the program, turning it into a valuable tool for academic success. Through this experience, he learned the importance of data management, problem-solving, and the power of technology in education.


---

### Solution Implementation

**Write a complete C++ program that solves Ngunguto's problem.**

> [!Tip]- Solution Code (Click to show)
> ```cpp
> #include <iostream>
> #include <string>
> #include <iomanip>
> using namespace std;
> 
> int main() {
>     // Student data: names and scores for 4 subjects
>     string names[5] = {"Alice", "Bob", "Charlie", "Diana", "Ethan"};
>     int scores[5][4] = {
>         {85, 92, 78, 88},  // Alice's scores
>         {72, 68, 75, 80},  // Bob's scores
>         {95, 89, 92, 96},  // Charlie's scores
>         {58, 62, 65, 60},  // Diana's scores
>         {45, 52, 48, 55}   // Ethan's scores
>     };
>     
>     string subjects[4] = {"Mathematics", "Science", "English", "History"};
>     
>     cout << "STUDENT ACADEMIC PERFORMANCE REPORT" << endl;
>     cout << "================================================" << endl;
>     
>     // Process each student using a loop
>     for (int i = 0; i < 5; i++) {
>         int total = 0;
>         
>         // Calculate total score using a loop
>         for (int j = 0; j < 4; j++) {
>             total += scores[i][j];
>         }
>         
>         // Calculate average score
>         double average = total / 4.0;
>         
>         // Determine grade using selection statements
>         char grade;
>         if (average >= 90) {
>             grade = 'A';
>         } else if (average >= 80) {
>             grade = 'B';
>         } else if (average >= 70) {
>             grade = 'C';
>         } else if (average >= 60) {
>             grade = 'D';
>         } else {
>             grade = 'F';
>         }
>         
>         // Display results
>         cout << "Student: " << names[i] << endl;
>         cout << "  Subjects: ";
>         for (int j = 0; j < 4; j++) {
>             cout << subjects[j] << "=" << scores[i][j];
>             if (j < 3) cout << ", ";
>         }
>         cout << endl;
>         cout << fixed << setprecision(2);
>         cout << "  Average Score: " << average << endl;
>         cout << "  Grade: " << grade << endl;
>         cout << "--------------------------------" << endl;
>     }
>     
>     return 0;
> }
> ```


**Explain how loops are used in this C++ program.**

> [!Tip]- Answer (Click to show)
> **Loops are used in this C++ program in three ways:**
> 1. **Outer for-loop**: `for (int i = 0; i < 5; i++)` - iterates through each student
> 2. **Inner for-loop**: `for (int j = 0; j < 4; j++)` - calculates total score by summing all subjects
> 3. **Display for-loop**: `for (int j = 0; j < 4; j++)` - shows individual subject scores
> 
> **Benefits:**
> - **Automates repetitive tasks** for multiple students and subjects
> - **Maintains clean, organized code** without repetition
> - **Easily scalable** - can handle more students by changing loop conditions


**How are selection statements implemented in the C++ grading system?**

> [!Tip]- Answer (Click to show)
> **Selection statements are implemented using an `if-else if-else` structure:**
> ```cpp
> char grade;
> if (average >= 90) {
>     grade = 'A';
> } else if (average >= 80) {
>     grade = 'B';
> } else if (average >= 70) {
>     grade = 'C';
> } else if (average >= 60) {
>     grade = 'D';
> } else {
>     grade = 'F';
> }
> ```
> **This structure:**
> - **Evaluates conditions sequentially** from highest to lowest
> - **Assigns exactly one grade** based on the average score
> - **Provides comprehensive coverage** of all possible score ranges
> - **Uses character data type** for efficient grade storage


**What data structures are used in this C++ solution and why?**

> [!Tip]- Answer (Click to show)
> **Three arrays are used in this C++ solution:**
> 1. **`string names[5]`** - stores student names
> 2. **`int scores[5][4]`** - 2D array storing scores for 5 students across 4 subjects
> 3. **`string subjects[4]`** - stores subject names for display
> 
> **Advantages of this approach:**
> - **Efficient memory usage** - fixed size arrays
> - **Direct index access** - fast retrieval of student data
> - **Structured organization** - related data grouped together
> - **Compatible with loops** - perfect for iterative processing


**Sample Output:**

> [!Tip]- View Expected Output (Click to show)
> ```
> STUDENT ACADEMIC PERFORMANCE REPORT
> ================================================
> Student: Alice
>   Subjects: Mathematics=85, Science=92, English=78, History=88
>   Average Score: 85.75
>   Grade: B
> --------------------------------
> Student: Bob
>   Subjects: Mathematics=72, Science=68, English=75, History=80
>   Average Score: 73.75
>   Grade: C
> --------------------------------
> Student: Charlie
>   Subjects: Mathematics=95, Science=89, English=92, History=96
>   Average Score: 93.00
>   Grade: A
> --------------------------------
> Student: Diana
>   Subjects: Mathematics=58, Science=62, English=65, History=60
>   Average Score: 61.25
>   Grade: D
> --------------------------------
> Student: Ethan
>   Subjects: Mathematics=45, Science=52, English=48, History=55
>   Average Score: 50.00
>   Grade: F
> --------------------------------
> ```











