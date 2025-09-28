#### Linux/Unix Systems SOLUTION - CP 211

THE UNIVERSITY OF DODOMA  
**COLLEGE OF INFORMATICS AND VIRTUAL EDUCATION**  
**SCHOOL OF INFORMATICS**  
End of Semester University Examination for the 2024/2025 Academic Year
**CP 211: INTRODUCTION TO UNIX/LINUX**  

**Time Allocated:** 3 Hours  
**[100 Marks]**  

---

## **SECTION A (40 MARKS)**

### **Question One**  
*Choose the most correct answer.*

**i. if a CIVE Linux takes 6 seconds to load the kernel and an additional 2 seconds to start user-space services, but switching to a newer firmware reduces the kernel load time by 30%, how long does the CIVE Linux total boot time be?**
- A. 6.2 seconds  
- B. 7.4 seconds  
- C. 8.2 seconds  
- D. 6.8 seconds  

> [!Tip]- Answer (Click to show)
> **A. 6.2 seconds**



**ii. Mr. Uledi, a system administrator, is troubleshooting a Linux system that fails to boot. The error message states: “Error: No bootable medium found. Please insert a boot disk and press any key.” Which of the following is the most appropriate step to take you can suggest to Mr. Uledi?**  
- A. Check if the system BIOS/UEFI recognizes the boot disk  
- B. Run the fsck command to check for filesystem errors  
- C. Reinstall the GRUB bootloader from within the operating system  
- D. Manually configure system services using systemctl.  

> [!Tip]- Answer (Click to show)
> **A. Check if the system BIOS/UEFI recognizes the boot disk**



**iii.** ______ is the package management tools used in both Debian-based and Red Hat-based distributions.  
- A. DNF  
- B. APT  
- C. RPM  
- D. Flatpak  

> [!Tip]- Answer (Click to show)
> **D. Flatpak**



**iv.** In the Linux boot process, what is the role of the init system?  
- A. It initializes and mounts the kernel modules.  
- B. It loads the Linux kernel into memory.  
- C. It manages the user-space processes after the kernel has been loaded.  
- D. It sets up the BIOS and firmware interfaces before booting.  

> [!Tip]- Answer (Click to show)
> **C. It manages the user-space processes after the kernel has been loaded.**



**v.** Which of the following *umask* values will result in newly created files having 600 permissions?  
- A. 066  
- B. 027  
- C. 077  
- D. 002  

> [!Tip]- Answer (Click to show)
> **C. 077**



**vi.** Which command correctly assigns SGID to a directory named community_content?  
- A. chmod 1770 community_content/  
- B. chmod 2770 community_content/  
- C. chmod 4770 community_content/  
- D. chmod 7770 community_content/  

> [!Tip]- Answer (Click to show)
> **B. chmod 2770 community_content/**



**vii.** Which of the following options correctly represents the structure of an entry in */etc/passwd*?  
- A. Username:Password:UID:GID:Full_Name:Home_Directory:Default_Shell  
- B. Username:GID:Password:Full_Name:Home_Directory:Default_Shell  
- C. Username:UID:Password:GID:Home_Directory:Full_Name:Default_Shell  
- D. UID:Username:Password:GID:Full_Name:Home_Directory:Default_Shell  

> [!Tip]- Answer (Click to show)
> **A. Username:Password:UID:GID:Full_Name:Home_Directory:Default_Shell**



**viii.** What does the command *chmod 751 script.sh* do?  
- A. Gives the owner read, write, and execute permissions; group execute permission; others read permission  
- B. Gives the owner read, write, and execute permissions; group read and execute permissions; others no access  
- C. Gives the owner read, write, and execute permissions; group execute permissions; others execute permissions  

> [!Tip]- Answer (Click to show)
> **B. Gives the owner read, write, and execute permissions; group read and execute permissions; others no access**



### **Question Two**  
*Match the following items from List A with the correct descriptions in List B.*

**List A**  
1. GRUB Bootloader  
2. Linux last System  
3. MBR Partitioning  
4. UEFI Secure Boot  
5. System Call Interface  
6. chmod +x script.sh  
7. ls > output.txt  
8. [a-z]\{3,5\}  
9. cat file.txt >> newfile.txt  
10. Hello  

**List B**  
- A. Hardware installation before 0% reads  
- B. Handles process management post-tense1 boot  
- C. Legacy disk partitioning system supporting up to 2 TB storage  
- D. Verifies digital signatures of OS boot files  
- E. Allows user applications to interact with the tensel  
- F. Matches lowercase letters with a length of 3 to 5  
- G. Cracks execute permission to a script file  
- H. Redirects output to a file, overwriting existing content  
- I. Matches any file that ends with .log  
- J. Redirects output to a file, appending content  
- K. Matches a number with 3 to 5 digits  
- L. Controls CPU frequency for power efficiency  
- M. Manages user authentication and permissions  
- N. Determines network routing algorithm  

> [!Tip]- Answer (Click to show)
> 1. **B**  
> 2. **A**  
> 3. **C**  
> 4. **D**  
> 5. **E**  
> 6. **G**  
> 7. **H**  
> 8. **F**  
> 9. **J**  
> 10. 

---

### **Question Three**  

*Answer the following questions by filling in the correct answer.*

**a. If a user wants to view the current directory they are in, which command should they use?**

> [!Tip]- Answer (Click to show)
> **pwd**


**b. If a system administrator needs to display a list of files and directories in a specific location, what command should they enter?**

> [!Tip]- Answer (Click to show)
> **ls**


**c. If a user wants to change their current directory to the home directory, which command should they type?**

> [!Tip]- Answer (Click to show)
> **cd ~** or **cd**


**d. The command used to display real-time system information, such as CPU and memory usage, is known as `______`.**  

> [!Tip]- Answer (Click to show)
> **top**


**e. What command is commonly used to copy files from one location to another in Linux** ?

> [!Tip]- Answer (Click to show)
> **cp**


**f. To create an empty file named "example.txt" in Linux, which command would you use**?  

> [!Tip]- Answer (Click to show)
> **touch example.txt**


**g. If you need to display the contents of a text file in the terminal, which command would be suitable?**

> [!Tip]- Answer (Click to show)
> **cat**


**h. To end a user session in Linux, which command would the user typically enter?**

> [!Tip]- Answer (Click to show)
> **exit**


**i. If a user wants to view only the first 10 lines of a text file, which command should they use?**

> [!Tip]- Answer (Click to show)
> **head**   eg: head myfile.txt


**j. If you want to compress files in Linux to save disk space, which command would you use?**

> [!Tip]- Answer (Click to show)
> **gzip** or **tar**


---

### **Question Four**


**a.** List five key principles or philosophies behind the development of open-source software.  
*(5 Marks)*  
> [!Tip]- Answer (Click to show)
> 1. Free Redistribution  
> 2. Source Code Access  
> 3. Derived Works Allowed  
> 4. Integrity of The Author's Source Code  
> 5. No Discrimination Against Persons or Groups  


**b.** Mention five advantages of using Linux in embedded systems and Internet of Things (IoT) devices such as smart appliances, wearables, and sensors.  
*(5 Marks)*  
> [!Tip]- Answer (Click to show)
> 1. Open Source and Cost-Effective  
> 2. High Customizability  
> 3. Strong Security Features  
> 4. Wide Hardware Support  
> 5. Strong Community and Developer Support  


---

## **SECTION B (60 MARKS)**

### **Question Five**

**b.** Mwantum OS which a debian Linux based system has two different power management configurations:  
- Configuration X: Uses traditional BfOS + ACPI shutdown, taking 18 seconds to power off.  
- Configuration Y: Uses UEFI with fast shutdown optimization, improving shutdown efficiency by 25%.  

**i.** Using equations (1) or (2) in Question 5(a), calculate the new power-off time for Configuration Y after applying the 25% improvement.  
*(2 Marks)*  
> [!Tip]- Answer (Click to show)
> New time = 18 × (1 - 0.25) = 18 × 0.75 = 13.5 seconds  


**ii.** Provide detail description of how BfOS operates.  
*(3 Marks)*  
> [!Tip]- Answer (Click to show)
> BfOS (Basic Firmware Operating System) is a lightweight firmware that initializes hardware components during the boot process. It performs Power-On Self-Test (POST), detects connected devices, and loads the bootloader from the storage device to hand over control to the operating system kernel.


**iii.** Which configuration is more efficient, and by how many seconds does it improve power-off time?  
*(2 Marks)*  
> [!Tip]- Answer (Click to show)
> Configuration Y is more efficient. Improvement = 18 - 13.5 = 4.5 seconds

---

### **Question Six**

**a.** A team of developers is collaborating on a shared project directory named /projects/teamX. The requirements are:  
- Any new file created in the directory should be owned by the same group, regardless of the user who created it.  
- The group members should have read and write access, but other users should not have any access.  
- The permissions should be applied automatically when new files are created.  

Based on the requirements above:  

**i.** With justification, describe which special permission should be used.  
*(2 Marks)*  
> [!Tip]- Answer (Click to show)
> **SGID (Set Group ID)**. This ensures that files created in the directory inherit the group ownership of the directory, not the user's primary group.

**ii.** Write the command to implement this setting on /projects/teamX.  
*(3 Marks)*  
> [!Tip]- Answer (Click to show)
> ```bash
> chmod 2770 /projects/teamX
> chgrp teamgroup /projects/teamX
> ```

---


**TO BE CONTINUED...**
