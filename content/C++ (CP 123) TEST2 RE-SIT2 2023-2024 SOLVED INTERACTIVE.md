
### **Question**

**Miss Wandiba is class teacher at Jitambue Secondary school at Ulanga district. He is used to have monthly examination on 28th of every month. In this digital era, he wants a simple computer program that will be able to store permanently and display the report of her students. For each student, the report will have the following information: all scores, total scores, average score, and GPA. The student must attempt a minimum of 7 examinations to have a complete report. The student can either sit for 7, 8, or 9 examinations. Suppose that the class has 50 students, write a C++ program that will:**

**a.** Accept scores of all students and store them into array name scoredmark. The array should dynamic to support any entered within the range of 7<=size<=9.

**b.** Calculate sum and average, and find the grade from average marks.

**c.** For each student, the program should store sum, average score, and GPA into a file name report.txt.

**d.** Display data from report.txt on a screen.

> [!Tip]- Answer (Click to show)
> ```cpp
> #include <iostream>
> #include <fstream>
> #include <iomanip>
> using namespace std;
> 
> // Function to calculate grade based on average marks
> char calculateGrade(double average) {
>     if (average >= 81) return 'A';
>     else if (average >= 71) return 'B';
>     else if (average >= 61) return 'C';
>     else if (average >= 50) return 'D';
>     else return 'F';
> }
> 
> // Function to calculate GPA based on grade
> double calculateGPA(char grade) {
>     switch(grade) {
>         case 'A': return 5.0;
>         case 'B': return 4.0;
>         case 'C': return 3.0;
>         case 'D': return 2.0;
>         case 'F': return 0.0;
>         default: return 0.0;
>     }
> }
> 
> int main() {
>     const int NUM_STUDENTS = 50;
>     const int MIN_EXAMS = 7;
>     const int MAX_EXAMS = 9;
>     
>     // Dynamic array for scores
>     int** scoredmark = new int*[NUM_STUDENTS];
>     int* examCounts = new int[NUM_STUDENTS];
>     
>     // Part a: Accept scores for all students
>     for (int i = 0; i < NUM_STUDENTS; i++) {
>         cout << "Enter number of exams for student " << (i + 1) 
>              << " (7-9): ";
>         cin >> examCounts[i];
>         
>         // Validate exam count
>         while (examCounts[i] < MIN_EXAMS || examCounts[i] > MAX_EXAMS) {
>             cout << "Invalid number! Enter between 7 and 9: ";
>             cin >> examCounts[i];
>         }
>         
>         // Allocate dynamic array for this student's scores
>         scoredmark[i] = new int[examCounts[i]];
>         
>         cout << "Enter " << examCounts[i] << " scores for student " 
>              << (i + 1) << ": ";
>         for (int j = 0; j < examCounts[i]; j++) {
>             cin >> scoredmark[i][j];
>         }
>     }
>     
>     // Part c: Open file for writing
>     ofstream outFile("report.txt");
>     if (!outFile) {
>         cerr << "Error opening file for writing!" << endl;
>         return 1;
>     }
>     
>     // Write header to file
>     outFile << "STUDENT REPORT\n";
>     outFile << "==============\n\n";
>     
>     // Process each student
>     for (int i = 0; i < NUM_STUDENTS; i++) {
>         // Part b: Calculate sum and average
>         int sum = 0;
>         for (int j = 0; j < examCounts[i]; j++) {
>             sum += scoredmark[i][j];
>         }
>         
>         double average = static_cast<double>(sum) / examCounts[i];
>         char grade = calculateGrade(average);
>         double gpa = calculateGPA(grade);
>         
>         // Write to file
>         outFile << "Student " << (i + 1) << ":\n";
>         outFile << "Scores: ";
>         for (int j = 0; j < examCounts[i]; j++) {
>             outFile << scoredmark[i][j] << " ";
>         }
>         outFile << "\nTotal: " << sum;
>         outFile << "\nAverage: " << fixed << setprecision(2) << average;
>         outFile << "\nGrade: " << grade;
>         outFile << "\nGPA: " << gpa << "\n\n";
>     }
>     
>     outFile.close();
>     cout << "\nData successfully written to report.txt\n";
>     
>     // Part d: Display data from file
>     cout << "\n--- DISPLAYING REPORT FROM FILE ---\n";
>     ifstream inFile("report.txt");
>     string line;
>     
>     if (!inFile) {
>         cerr << "Error opening file for reading!" << endl;
>         return 1;
>     }
>     
>     while (getline(inFile, line)) {
>         cout << line << endl;
>     }
>     
>     inFile.close();
>     
>     // Clean up dynamic memory
>     for (int i = 0; i < NUM_STUDENTS; i++) {
>         delete[] scoredmark[i];
>     }
>     delete[] scoredmark;
>     delete[] examCounts;
>     
>     return 0;
> }
> ```