
**Jiongeze Tournament Age Ranking Program**

**Problem Statement:**
Somasoma, a programmer at CIVE, wrote a program that accepts age of any entered number of attendees at Jiongeze tournament. The program calculates the average age of attendees and ranks the average into "Young Team" or "Elder Team". Finally, the program prints the rank of the average age.

**NOTE:**
- The ranking criteria is average age between 18-30 implies young team; and above 30 implies elder team.
- Mr. Somasoma organized the program into four functions:
  - Function *capture*, receives input from user. This function is called from the main function.
  - Function *rank*, ranks the average score and returns the rank to the main function
  - Function *print*, receive the rank value and display to the user.

> [!Tip]- C++ Solution (Click to show)
> ```cpp
> #include <iostream>
> #include <vector>
> using namespace std;
> 
> // Function prototypes
> vector<int> capture();
> string rankTeam(double average);
> void print(string teamRank);
> 
> int main() {
>     // Capture ages from user
>     vector<int> ages = capture();
>     
>     // Calculate average age
>     double sum = 0;
>     for(int age : ages) {
>         sum += age;
>     }
>     double average = sum / ages.size();
>     
>     // Rank the average age
>     string teamRank = rankTeam(average);
>     
>     // Print the result
>     print(teamRank);
>     
>     return 0;
> }
> 
> // Function to capture ages from user
> vector<int> capture() {
>     vector<int> ages;
>     int numAttendees;
>     
>     cout << "Enter the number of attendees: ";
>     cin >> numAttendees;
>     
>     cout << "Enter the ages of " << numAttendees << " attendees:" << endl;
>     for(int i = 0; i < numAttendees; i++) {
>         int age;
>         cout << "Attendee " << (i + 1) << ": ";
>         cin >> age;
>         ages.push_back(age);
>     }
>     
>     return ages;
> }
> 
> // Function to rank the average age
> string rankTeam(double average) {
>     if(average >= 18 && average <= 30) {
>         return "Young Team";
>     } else if(average > 30) {
>         return "Elder Team";
>     } else {
>         return "Invalid Average (Below 18)";
>     }
> }
> 
> // Function to print the rank
> void print(string teamRank) {
>     cout << "\n=== TOURNAMENT RESULTS ===" << endl;
>     cout << "Team Rank: " << teamRank << endl;
>     cout << "==========================" << endl;
> }
> ```