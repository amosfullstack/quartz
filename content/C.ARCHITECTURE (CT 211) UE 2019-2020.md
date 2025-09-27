

CN 210: COMPUTER ARCHITECTURE AND ORGANIZATION - EXAM 2019/2020
THE UNIVERSITY OF DODOMA
COLLEGE OF INFORMATICS AND VIRTUAL EDUCATION
DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
FIRST SEMESTER 2019/2020
CN 210: COMPUTER ARCHITECTURE AND ORGANIZATION
Date: 26th February, 2020"
Time: 15:30 PM - 18:30 PM (3 Hours)


instructions: 
1. This examination consists of two sections.
2. Answer ALL questions from Section A and ANY TWO from Section B.
3. All University of Dodoma Examination Regulations Apply.

---

## Section A (60 Marks)

### Question One

**a)** Briefly explain the distinction between computer structure and computer function?  
**[4 Marks]**

**b)** List and briefly define the main structural components of a process:  
**[4 Marks]**

**c)** While browsing at Nyahongo’s computer store, you overhear a customer asking Mr. Nyahongo what is the fastest computer in the store that he can buy. Mr. Nyahongo replies, “You’re looking at our Macintosies. The fastest Mac we have runs at a clock speed of 1.2 gigahertz. If you really want the fastest machine, you should buy our 2.4-gigahertz Intel Pentium IV install.”  
Is Mr. Nyahongo correct? What would you say to help this customer?  
**[7 Marks]**

---

### Question Two

**a)** Convert the following decimal fractions to binary with a maximum of six places to the right of the binary point:  
**[2 Marks Each]**

-   **i.** 26.78125
-   **ii.** 16.1240234375

**b)** Represent the following decimal numbers in binary using 8-bit signed magnitude, one’s complement and two’s complement:  
**[3 Marks Each]**

-   **i.** 119
-   **ii.** –107

**c)** Create the 32-bit single-precision IEEE Standard 754 representation of the binary number $0.40625_{10}$
**[5 Marks]**

---

## Question Three

**a)** Considering the transfers over the address and data lines in order to execute various instructions, explain what is meant by the “von Neumann bottleneck”  
**[5 Marks]**

**b)** Explain the function of a bus and how we can logically subdivide its components.  
**[4 Marks]**

**c)** Discuss the impact on the system speed if the microprocessor bus has:  
**[3 Marks Each]**

-   **i.** A 32-bit local address bus and a 16-bit local data bus.
-   **ii.** A 16-bit local address bus and a 16-bit local data bus.

---

## Question Four

**a)** Simplify the following functional expressions using Boolean algebra and its identities. List the identity used at each step.  
**[2 Marks Each]**

$$\begin{align*}
&\text{i. }  F(x,y,z) = \hat{x}y + xy\bar{z} + xyz \\
&\text{ii. }  F(w,x,y,z) = (x\bar{y} + \bar{ω}z)(w\bar{x} + y\bar{z}) \\
&\text{iii. }  F(x,y,z) = \overline{(x+y)}.\overline{(x+y)}
\end{align*}$$

**b) Given the function:** $$ ( F(x,y,z) = xyz + x\bar{y}z + xy)$$

-   **i.** List the truth table for \( F \).  
    **[5 Marks]**
-   **ii.** Draw the logic diagram using the original Boolean expression.  
    **[4 Marks]**

---

## Section B (40 Marks)
*(Answer ANY TWO questions from this section)*

### Question Five

**a)** A computer system uses 16-bit memory addresses. It has a 2K-byte cache organized in a direct-mapped manner with 64 bytes per cache block. Assume that the size of each memory word is 1 byte.

-   **i.** Calculate the number of bits in each of the Tag, Block, and Word fields of the memory address.  
    **[3 Marks]**
-   **ii.** When a program is executed, the processor reads data sequentially from the following word addresses:  
    128, 144, 2176, 2180, 128, 2176, 334.  
    All the above addresses are shown in decimal values. Assume that the cache is initially empty. For each of the above addresses, indicate whether the cache access will result in a hit or a miss.  
    **[7 Marks]**

**b)** A computer system uses 16-bit memory addresses. It has a 2K-byte cache sequenced as a 2-way set-associative cache that uses the LRU replacement algorithm.

-   **i.** Calculate the number of bits in each of the Tag, Block, and Word fields of the memory address.  
    **[3 Marks]**
-   **ii.** When a program is executed, the processor reads data sequentially from the following word addresses:  
    128, 144, 2176, 2180, 128, 2176, 334.  
    All the above addresses are shown in decimal values. Assume that the cache is initially empty. For each of the above addresses, indicate whether the cache access will result in a hit or a miss.  
    **[7 Marks]**

---

### Question Six

**a)** What are pipeline hazards?  
**[1 Mark]**

**b)** Briefly explain the following classes of pipeline hazards:  
**[2 Marks Each]**

-   **i.** Data hazard.
-   **ii.** Control hazard.
-   **iii.** Structural hazard.

**c)** Briefly explain the techniques used to deal with Data and Control hazards.  
**[5 Marks]**

**d)** Mention and explain four (4) techniques for dealing with pipeline stalls caused by branch delay in pipelined processor implementation.  
**[8 Marks]**

---

### Question Seven

**a)** What is the difference between using direct and indirect addressing? Give an example.  
**[4 Marks]**

**b)** A digital computer has a memory unit with 24 bits per word. The instruction set consists of 150 different operations. All instructions have an operation code part (opcode) and an address part (allowing for only one address). Each instruction is stored in one word of memory.  
**[2 Marks Each]**

-   **i.** How many bits are needed for the opcode?
-   **ii.** How many bits are left for the address part of the instruction?
-   **iii.** What is the maximum allowable size for memory?

**c)** Suppose an instruction takes four cycles to execute in a non-pipelined CPU: one cycle to fetch the instruction, one cycle to decode the instruction, one cycle to perform the ALU operation, and one cycle to store the result. In a CPU with a 4-stage pipeline, that instruction still takes four cycles to execute, so how can we say the pipeline speeds up the execution of the program?  
**[4 Marks]**

**d)** Suppose we have instruction LDA 800. Given memory as follows:

| Address | Content |
| :-----: | :-----: |
|   800   |   900   |
|   ...   |   900   |
|   ...   |  1000   |
|   ...   |  1000   |
|   ...   |   500   |
|   ...   |  1100   |
|   ...   |   600   |
|   ...   |  1200   |

What would be loaded into the AC if the addressing mode for the instruction is:  
**[2 Marks Each]**

-   **i.** Immediate ______
-   **ii.** Direct ______
-   **iii.** Indirect ______