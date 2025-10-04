---
title: C++ (CP 123) LAB 5 SOLVED INTERACTIVE
module: Programming Fundamentals
module_code: CP 101
lab_number: 5
academic_year: 2024-2025
date_created: 2024-10-05
author:
difficulty: Intermediate
estimated_completion_time: 75
description: C++ programming lab on functions - creating a student grade calculator with multiple functions for score calculation, averaging, grading, and display. Learn function prototyping, parameter passing, and modular programming.
keywords:
  - C++ functions
  - function prototyping
  - parameter passing
  - modular programming
  - grade calculator
  - student performance analysis
  - C++ programming lab
  - function return values
category: Education/Computer Science
subcategory: Programming Labs
content_level: University Undergraduate
target_audience:
  - Computer Science Students
  - C++ Programming Beginners
  - Programming Fundamentals Learners
programming_language: C++
concepts_covered:
  - Function Declaration and Definition
  - Parameter Passing (Value vs Reference)
  - Return Values
  - Function Prototyping
  - Input Validation
  - Modular Program Design
  - String Manipulation
  - Control Structures
learning_objectives:
  - Create and use multiple functions in a C++ program
  - Implement function prototypes and definitions
  - Pass parameters by value and by reference
  - Return different data types from functions
  - Design modular programs with separated concerns
  - Implement input validation loops
  - Create interactive console applications
requirements:
  - C++ Compiler (GCC, Clang, or MSVC)
  - Text Editor or IDE
  - Basic C++ Syntax Knowledge
  - Understanding of Variables and Data Types
assessment_type: Group Work
grading_criteria:
  - Function Implementation (40%)
  - Program Logic (25%)
  - Input Validation (15%)
  - Code Organization (10%)
  - Output Formatting (10%)
ga_topic: Education - Computer Science - Programming Labs
ga_content_group: C++ Programming Exercises
ga_content_type: Interactive Tutorial
ga_audience: University Students, Programming Beginners
ga_difficulty: Intermediate
interactive_elements: true
has_code_samples: true
has_solutions: true
has_quizzes: false
download_resources: false
tags:
  - cpp
  - functions
  - programming
  - lab-work
  - grade-calculator
  - modular-programming
  - parameter-passing
  - input-validation
  - student-project
  - computer-science
  - education
  - code-solutions
  - programming-fundamentals
institution: Kwilkwio High School
course: Computer Programming Fundamentals
semester: First Semester
content_status: Completed with Solutions
version: "1.0"
last_reviewed: 2024-10-05
update_schedule: As needed
---

LAB WORK 4: PRACTICE LOOP, SELECTION, and ARRAY (if any)
Ngunguto, a high school student with a keen interest in programming, found himself
inspired during a computer science class project. His teacher challenged the students
to create a tool that could help with academic performance tracking. Motivated by
this challenge, Ngunguto decided to develop a program that would calculate and
display the average scores and corresponding grades for five of his classmates based
on their performance in four subjects: Mathematics, Science, English, and History.

To begin, Ngunguto gathered the scores of his classmates, ensuring he had accurate
data for each subject. He structured the data in a clear format, creating a list that
included the names of the students and their respective scores. This organization was
crucial, as it would allow him to efficiently process the information later.
Next, Ngunguto set about writing the program. He started by defining a function that
would calculate the average score for each student. To make the program user-
friendly, he included comments to explain each part of the code. He implemented a
grading scale that would categorize the average scores: an A for scores between 90
and 100, a B for 80 to 89, a C for 70 to 79, a D for 60 to 69, and an F for scores
below 60.


After coding the logic, Ngunguto ran several tests with sample data to ensure the
program worked correctly. He was thrilled to see that it not only calculated the
averages accurately but also determined the correct grades for each student. To
enhance the output, he formatted the results to display each student’s name, average
score, and corresponding grade neatly.


Encouraged by his success, Ngunguto decided to present his project to the class.
During his presentation, he explained the process he followed, the challenges he
faced, and how he overcame them. His classmates were impressed with the
program's functionality, and many expressed interests in using it for their own
academic tracking.


This project not only solidified Ngunguto's programming skills but also fostered a
sense of collaboration among his peers. They discussed potential improvements,
such as adding features for tracking progress over time or incorporating a graphical
user interface. Inspired by the feedback, Ngunguto felt motivated to continue
enhancing the program, turning it into a valuable tool for academic success. Through
this experience, he learned the importance of data management, problem-solving,
and the power of technology in education.

---

### Solution Implementation

**Write a complete C++ program that solves the problem using functions.**

> [!Tip]- Solution Code (Click to show)
> ```cpp
> #include <iostream>
> #include <string>
> using namespace std;
> 
> // Function prototypes
> double CalAvg(int total, int numSubjects);
> string GradeScore(double average, string &performance);
> string DispGrade(char grade, string performance);
> int SumScore(int math, int physics, int chemistry, int generalStudies);
> 
> int main() {
>     // Variables to store subject scores
>     int math, physics, chemistry, generalStudies;
>     
>     cout << "=== JAMAL'S ACADEMIC PERFORMANCE ANALYSIS ===" << endl;
>     cout << "Enter Jamal's scores (0-100) for each subject:" << endl;
>     
>     // Input with validation
>     cout << "Mathematics: ";
>     cin >> math;
>     while (math < 0 || math > 100) {
>         cout << "Invalid score! Enter Mathematics score (0-100): ";
>         cin >> math;
>     }
>     
>     cout << "Physics: ";
>     cin >> physics;
>     while (physics < 0 || physics > 100) {
>         cout << "Invalid score! Enter Physics score (0-100): ";
>         cin >> physics;
>     }
>     
>     cout << "Chemistry: ";
>     cin >> chemistry;
>     while (chemistry < 0 || chemistry > 100) {
>         cout << "Invalid score! Enter Chemistry score (0-100): ";
>         cin >> chemistry;
>     }
>     
>     cout << "General Studies: ";
>     cin >> generalStudies;
>     while (generalStudies < 0 || generalStudies > 100) {
>         cout << "Invalid score! Enter General Studies score (0-100): ";
>         cin >> generalStudies;
>     }
>     
>     // Calculate total score
>     int total = SumScore(math, physics, chemistry, generalStudies);
>     
>     // Calculate average score
>     double average = CalAvg(total, 4);
>     
>     // Determine grade and performance
>     string performance;
>     char grade = GradeScore(average, performance);
>     
>     // Display grade and get final message
>     string finalMessage = DispGrade(grade, performance);
>     
>     // Performance summary
>     cout << "\n=== PERFORMANCE SUMMARY ===" << endl;
>     cout << "Total Score: " << total << "/400" << endl;
>     cout << "Average Score: " << average << endl;
>     cout << "Final Grade: " << grade << endl;
>     cout << "Performance: " << performance << endl;
>     cout << finalMessage << endl;
>     
>     return 0;
> }
> 
> // Function to calculate total score
> int SumScore(int math, int physics, int chemistry, int generalStudies) {
>     int total = math + physics + chemistry + generalStudies;
>     return total;
> }
> 
> // Function to calculate average score
> double CalAvg(int total, int numSubjects) {
>     return static_cast<double>(total) / numSubjects;
> }
> 
> // Function to determine grade and performance
> string GradeScore(double average, string &performance) {
>     char grade;
>     
>     if (average >= 90) {
>         grade = 'A';
>         performance = "Excellent";
>     } else if (average >= 80) {
>         grade = 'B';
>         performance = "Good";
>     } else if (average >= 70) {
>         grade = 'C';
>         performance = "Average";
>     } else if (average >= 60) {
>         grade = 'D';
>         performance = "Below Average";
>     } else {
>         grade = 'F';
>         performance = "Poor";
>     }
>     
>     return grade;
> }
> 
> // Function to display grade and return welcome message
> string DispGrade(char grade, string performance) {
>     cout << "\n=== GRADE REPORT ===" << endl;
>     cout << "Grade: " << grade << endl;
>     cout << "Performance Level: " << performance << endl;
>     
>     return "Warmly Welcome Again!";
> }
> ```


**Explain the purpose of the `SumScore` function and how it interacts with `CalAvg`.**

> [!Tip]- Answer (Click to show)
> **The `SumScore` function:**
> - **Calculates total score** by adding all four subject scores
> - **Returns integer value** representing the sum of all scores
> - **Called from main function** with individual subject scores as parameters
> 
> **Interaction with `CalAvg`:**
> - `SumScore` **does not directly call** `CalAvg` in this implementation
> - The **main function calls** `CalAvg` using the total returned by `SumScore`
> - This creates a **logical workflow**: Sum → Average → Grade
> - **Separation of concerns** - each function has a single responsibility


**How does the `GradeScore` function determine both grade and performance description?**

> [!Tip]- Answer (Click to show)
> **The `GradeScore` function uses:**
> ```cpp
> string GradeScore(double average, string &performance) {
>     char grade;
>     
>     if (average >= 90) {
>         grade = 'A';
>         performance = "Excellent";
>     } else if (average >= 80) {
>         grade = 'B';
>         performance = "Good";
>     } // ... continues for other grades
> ```
> **Key features:**
> - **Reference parameter** `&performance` to return performance description
> - **Return value** is the letter grade as `char`
> - **Comprehensive grading scale** covering all performance levels
> - **Clear mapping** between numeric averages and qualitative descriptions


**What is the role of the `DispGrade` function and how does it return the final message?**

> [!Tip]- Answer (Click to show)
> **The `DispGrade` function:**
> ```cpp
> string DispGrade(char grade, string performance) {
>     cout << "\n=== GRADE REPORT ===" << endl;
>     cout << "Grade: " << grade << endl;
>     cout << "Performance Level: " << performance << endl;
>     
>     return "Warmly Welcome Again!";
> }
> ```
> **Its roles are:**
> 1. **Display grade information** to the user
> 2. **Show performance level** description
> 3. **Return farewell message** as a string
> 4. **Separate display logic** from calculation logic


**Sample Output:**

> [!Tip]- View Expected Output (Click to show)
> 
> ```
> === JAMAL'S ACADEMIC PERFORMANCE ANALYSIS ===
> Enter Jamal's scores (0-100) for each subject:
> Mathematics: 85
> Physics: 92
> Chemistry: 78
> General Studies: 88
> 
> === GRADE REPORT ===
> Grade: B
> Performance Level: Good
> 
> === PERFORMANCE SUMMARY ===
> Total Score: 343/400
> Average Score: 85.75
> Final Grade: B
> Performance: Good
> Warmly Welcome Again!
> ```


**Key C++ Function Concepts Demonstrated:**

> [!Tip]- C++ Function Concepts (Click to show)
> **This lab demonstrates these C++ function concepts:**
> 1. **Function Declaration** - using prototypes at the top
> 2. **Function Definition** - implementing each function's logic
> 3. **Parameter Passing** - by value and by reference
> 4. **Return Values** - different return types (int, double, char, string)
> 5. **Function Calls** - calling functions from main and other functions
> 6. **Input Validation** - while loops for score validation
> 7. **Modular Programming** - separating concerns into different functions
> 8. **Program Organization** - logical flow between functions

***
