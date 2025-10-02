
### **Question**

**Madam Rose, a programming instructor at CIVE is used to have timed quiz in every tutorial session. In this digital era, she wants a simple computer program that will be able display the report of one student at a time. The report will have the following information: number of questions attempted, total marks scored, average score per question, and the ranked average score. Every quiz has a total of 5 questions of equal weight (20 Marks Each), a student should attempt all questions in a quiz. Write a C++ program that will accepts student's marks and print the average score. Table 2 shows the ranked average score.**

**NOTE:**
1. Use function `rank()` that receive average score from the main function to rank the average score.
2. Use function `showrank()` that receive the rank from function `rank()` to print the rank of the average score.

| Average Score | Rank  |
| :------------ | :---- |
| 0 – 5         | Weak  |
| 6 - 10        | Normal|
| 11 - 15       | Good  |
| 16 - 20       | Best  |

> [!Tip]- Answer (Click to show)
> ```cpp
> #include <iostream>
> #include <string>
> using namespace std;
> 
> // Function to determine rank based on average score
> string rank(double average) {
>     if (average >= 0 && average <= 5) {
>         return "Weak";
>     } else if (average >= 6 && average <= 10) {
>         return "Normal";
>     } else if (average >= 11 && average <= 15) {
>         return "Good";
>     } else if (average >= 16 && average <= 20) {
>         return "Best";
>     } else {
>         return "Invalid";
>     }
> }
> 
> // Function to display the rank
> void showrank(string rank) {
>     cout << "Rank: " << rank << endl;
> }
> 
> int main() {
>     const int TOTAL_QUESTIONS = 5;
>     const int MAX_MARKS_PER_QUESTION = 20;
>     
>     int marks[TOTAL_QUESTIONS];
>     int totalMarks = 0;
>     
>     cout << "Enter marks for " << TOTAL_QUESTIONS << " questions (each out of 20):" << endl;
>     
>     // Accept marks for all questions
>     for (int i = 0; i < TOTAL_QUESTIONS; i++) {
>         cout << "Question " << (i + 1) << ": ";
>         cin >> marks[i];
>         
>         // Validate input
>         while (marks[i] < 0 || marks[i] > MAX_MARKS_PER_QUESTION) {
>             cout << "Invalid marks! Enter between 0 and 20: ";
>             cin >> marks[i];
>         }
>         
>         totalMarks += marks[i];
>     }
>     
>     // Calculate average score per question
>     double average = static_cast<double>(totalMarks) / TOTAL_QUESTIONS;
>     
>     // Display report
>     cout << "\n--- STUDENT QUIZ REPORT ---" << endl;
>     cout << "Number of questions attempted: " << TOTAL_QUESTIONS << endl;
>     cout << "Total marks scored: " << totalMarks << "/" << (TOTAL_QUESTIONS * MAX_MARKS_PER_QUESTION) << endl;
>     cout << "Average score per question: " << average << endl;
>     
>     // Get and display rank
>     string studentRank = rank(average);
>     showrank(studentRank);
>     
>     return 0;
> }
> ```