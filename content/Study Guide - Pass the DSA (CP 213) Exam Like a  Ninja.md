#### **Data Structures AND Algorithms - Ninja Study Guide**

So, this is what you should follow so us to understand data structures and algorithms. Become a Tai chi master in DSA. Also pass all the exams that come in your way.

### **Step 1: Algorithm Analysis and Complexity**
- The Foundation, lean how algorithms work.
- This is the most important first Step
- Its questions usually appear in Marching items and Multiple choices.

i. **Understand the Big Picture:**
- **Time Complexity**: How fast your algorithm runs (Big O, Ω, Θ)
- **Space Complexity**: How much memory your algorithm uses
- **Why this matters**: A slow algorithm can take a lot of time to process large data!

ii. **Key Concepts to Master:**
Makes sure later at the end, before entering the Exam room you have claimed the Big O notation of each data structure.
- **O(1)** - Constant time (instantaneous)
- **O(log n)** - Logarithmic time (very fast)
- **O(n)** - Linear time (proportional to input)
- **O(n²)** - Quadratic time (gets slow quickly)
- **O(2ⁿ)** - Exponential time (avoid at all costs!)

ii **C++ Code Examples:**
(In your Exam explanation if you are asked the importance of time complexity)
```cpp
// O(1) - Constant Time
int getFirstElement(int arr[]) {
    return arr[0];  // One operation, always fast
}

// O(n) - Linear Time
bool findElement(int arr[], int n, int target) {
    for(int i = 0; i < n; i++) {  // Grows with input size
        if(arr[i] == target) return true;
    }
    return false;
}
```

---

### **Step 2: Learn Arrays  - Your First Weapons**

- This is the basic data structure you start with

i. **Arrays: The Basic Building Blocks**
Understant in deep the following basics
- **Fixed-size arrays**: `int arr[100]` - The size of the arrray is  known at compile time.
- **Dynamic arrays**: `vector<int>` - The size of the array Grows as needed ie as the elements are added.
- **Multi-dimensional**: `int matrix[10][10]`

ii. **Essential Operations (Exam Favorites):**
```cpp
#include <vector>
#include <algorithm>
#include <string>

vector<int> nums = {3, 1, 4, 1, 5};
sort(nums.begin(), nums.end());        // O(n log n)
```

(Learn to reverse array and array trick, these questions are liked by lectures)

---

### **Step 3: Master Linked Lists**
(Mahenge Likes Linked list very much so, make sure you spend all your time here)

i. **Types of Linked Lists:**
- **Singly Linked**: Each node points to next only
- **Doubly Linked**: Each node points to next AND previous
- **Circular Linked**: Last node points back to first

iii. **Example:** : I think you get me, below are the diagrams of the linked lists single vs double linked.
```
Singly: [Data|Next] → [Data|Next] → [Data|NULL]

Doubly: [Prev|Data|Next] ↔ [Prev|Data|Next] ↔ [Prev|Data|Next]
```

iv. **C++ Implementation (Must Know):** Spend your life here.

(You might be confused, because others implement using <span style="color:rgb(0, 176, 80)">struct</span> others use <span style="color:rgb(0, 176, 80)">class</span>)
(Bad News, You must know both. Because mahenge brings any.)
- Learn to use <span style="color:rgb(0, 176, 80)">structures</span> to implement nodes and learn to use <span style="color:rgb(0, 176, 80)">classes</span> .
```cpp
class Node {
public:
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

// Exam Favorite Operations:
// 1. Insert at beginning/end
// 2. Delete a node
// 3. Reverse the list ← **SUPER IMPORTANT!**

```
- The Above are mother and father. Knowing them can make you answer any Question. Regardless is a stack or que etc. So focus on linked list first. Then the implementation of the following data-structures will be easier

v. **Why Linked Lists Matter:** (The impotance of linked List)
- **Dynamic size** (unlike arrays)
- **Efficient insertions/deletions**
- **Foundation for stacks, queues, trees**

---

### **Step 4: Learn Stacks and Queues - The Ordering Masters**
- These deals with the order of things

i. **Stack (LIFO - Last In, First Out)**
- **Like a stack of plates on top of each other**: Last plate placed is first removed
- **Operations**: push(), pop(), peek(), isEmpty()

ii. **Queue (FIFO - First In, First Out)**
- **Like a checkout line at the SGR station**: First person in line gets served first
- **Operations**: enqueue(), dequeue(), front(), isEmpty()
- **Uses**: BFS, task scheduling, printer queue

iii. **C++ Implementation:**

```cpp
#include <stack>
#include <queue>

// STL makes it easy!
stack<int> s;           // LIFO
s.push(10); s.pop();

queue<int> q;           // FIFO  
q.push(20); q.pop();

// Common Exam Question: "Implement stack using queues" or vice versa
```

---

### **Step 5: Understand Recursion**

i. **What is Recursion?**
- **A function that calls itself**
- **Two parts**: Base case (stopping condition) + Recursive case

**Examples :**

```cpp
// Factorial: n! = n × (n-1) × ... × 1
int factorial(int n) {
    if (n <= 1) return 1;           // Base case
    return n * factorial(n - 1);    // Recursive case
}

// Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13...
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
```

ii. **Recursion Thinking Process:**
1. **Identify base case** - When does it stop?
2. **Identify recursive case** - How does it shrink the problem?
3. **Combine results** - How to build answer from smaller solutions?

(Recursion Question might be asked, but not frequently)

---

### **Step 6: Learn Trees data structure**

i. **Tree Terminology:** (Understanding these terminologies they can help give you free marks)
- **Root**: Top node (the ancestor)
- **Parent/Child**: Family relationships
- **Leaf**: Node with no children
- **Height**: Longest path from root to leaf

ii. **Learn the Binary Search Tree (BST) :**
- **Rule**: Left child < Parent < Right child
- **Search**: O(log n) if balanced
- **Operations**: Insert, Delete, Search, Traverse

iii. **Tree Traversals (Just Memorize):**

(If you are not lucky, you might face it as code provided, So study their code and how they work)

```cpp
class TreeNode {
public:
    int data;
    TreeNode* left, *right;
};

void inorder(TreeNode* node) {   // Left, Root, Right
    if(!node) return;
    inorder(node->left);
    cout << node->data << " ";
    inorder(node->right);
}

// Preorder: Root, Left, Right
// Postorder: Left, Right, Root
// Level-order: Level by level (BFS)
```

**Exam Question Example: Check if tree is BST**

---

### **Step 7: Sorting Algorithms - The Organizers**
- These are algorithms for organizing things

i. **O(n²) Algorithms (Simple but Slow):** (The algorithims with this big O notation include)
- **Bubble Sort**: Compare adjacent elements, swap if wrong order
- **Selection Sort**: Find minimum, swap to front, repeat
- **Insertion Sort**: Build sorted array one element at a time

ii. **O(n log n) Algorithms (Fast and Efficient):** (The algorithms with this Big O notation include)
- **Merge Sort**: Divide and conquer, stable
- **Quick Sort**: Divide and conquer, in-place
- **Heap Sort**: Uses heap data structure

iii. **Quick Sort Implementation (Most liked in Exams):**
```cpp
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}
// Partition function is the tricky part - practice this!
```

- SO
- Learning the implementations of the above sorting aligorithms
- If you are not lucky, you might face a question about Implement a Merge Sort Algorithm
- If you are lucky, You can find a piece of code that requires you to identify the type of the Algorithm<br>

   (Dont waste too much time here, because you can get confused. Since you know Linked list you are good. But you are sacrificing 20 marks)
---

### **Step 8: Searching Algorithms - The finders**
- These are the algorithms for finding things

i. **Linear Search: O(n)**
- **Simple**: Check each element one by one
- **Works on**: Unsorted data
- **When to use**: Small datasets or unsorted data

ii. **Binary Search: O(log n)**
- **Requires**: Sorted data
- **Process**: Repeatedly divide search space in half
- **Very efficient** for large datasets

iii. **Binary Search Code (Just Know):**
```cpp
int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;  // Avoid overflow!
        
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;  // Not found
}
```

---

### **Step 9: Learn Graphs - The Network**
- These are algorithims for networked structures

i. **Graph Basics:** (Know the definitions)
- **Vertices/Nodes**: The points
- **Edges**: Connections between points
- **Directed/Undirected**: One-way or two-way connections
- **Weighted/Unweighted**: Edges with or without costs/value.

ii. **Graph Representations:**
```cpp
// Adjacency Matrix
bool matrix[V][V];  // V = number of vertices

// Adjacency List (More efficient)
vector<list<int>> adjList;
```

iii. **Graph Traversals (These questions will Give you free marks):**
- **BFS (Breadth-First Search)**: Level by level, uses queue
- **DFS (Depth-First Search)**: Go deep first, uses stack/recursion

iv. **Common Graph Problems:** (You might be asked in the exam)
- Find shortest path - Dijkstra's algorithm
- Detect cycle in graph
- Find connected components

---

### **4-Hour Study Plan**

**Hour 1: Foundationsand Linear Structures**
- **30 min**: Complexity analysis (Big O notation)
- **30 min**: Arrays, strings, basic operations
- **30 min**: Linked lists (implementation + reversal)
- **30 min**: Stacks and queues (concepts + applications)

**Hour 2: Trees and Recursion**
- **30 min**: Recursion thinking + examples
- **30 min**: Tree terminology + BST properties
- **30 min**: Tree traversals (inorder, preorder, postorder)
- **30 min**: Common tree problems (height, search, validation)

**Hour 3: Sorting and Searching**
- **30 min**: Quick sort and merge sort
- **20 min**: Binary search implementation
- **20 min**: Linear vs binary search comparison
- **30 min**: Practice problems

**Hour 4: Graphs and Advanced Topics**
- **30 min**: Graph representations + terminology
- **30 min**: BFS vs DFS implementations
- **30 min**: Review + common exam patterns
- **30 min**: Problem solving for practice

---

### **Exam Strategy**
- What Lectures Love to Ask

**Theory Questions:**
- Compare time complexities of different sorting algorithms
- Explain BST properties and operations
- When would you use hash table vs binary search?

 **Code Implementation:**
- **Linked List**: Reverse, detect cycle, merge two lists
- **Tree**: Traversals, BST validation, height calculation
- **Sorting**: Implement quick sort or merge sort
- **Searching**: Binary search on array

**Problem Solving:**
- Given problem X, which data structure would you use and why?
- Optimize this O(n²) solution to O(n log n)
- Find the bug in this recursive function

### **Final Tips:** 
(<span style="color:rgb(0, 176, 80)">TAFADHALI ZIGATIA HAPA</span>)
- **Practice writing code on paper** : (You shall remember a lot of codes in UE)
- **Memorize time complexities** of common operations . (The Big O notations of algorithms)
- **Understand the usages** - when to use array vs linked list, etc.
- **Test edge cases** - empty input, single element, duplicates
- **Draw a lot** - Learn to draw linked lists, and in the exams draw as many as you can, on each answer include the drawing.