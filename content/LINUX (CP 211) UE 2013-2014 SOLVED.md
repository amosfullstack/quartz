
#### Linux/Unix Systems SOLUTION - CP 211

---

> [!info] 📝 Acknowledgement  
>**Contributor:** Issa Ibondo
>**WhatsApp:** 
>**Degree Programme:** BSc in SE4 
>**Submission Date:** 25th September, 2025  
>**Note:** <span style="color:rgb(0, 176, 80)">We sincerely appreciate your effort in solving and submitting this exam for academic support and reference.</span>

---

THE UNIVERSITY OF DODOMA  
**COLLEGE OF INFORMATICS AND VIRTUAL EDUCATION**  
**SCHOOL OF INFORMATICS**  

**NON-DEGREE PROGRAM UNIVERSITY EXAMINATION & MARKING SCHEME**  
**SECOND SEMESTER 2014/2015**  

**CS 0024: INTRODUCTION TO UNIX/LINUX**  

**Date:** 22nd June 2015  
**Time Allocated:** 3 Hours  
**[100 Marks]**  

---

## Instructions:

1. This question paper contains **FIFTY (50) questions** each carrying **two (2) marks**.  
2. Answer **ALL questions**.  
3. All University of Dodoma examination regulations apply.  

---

## Questions and Proposed Answers

**1. What would you enter at the command line to get more information about the cd command?**  
**Answer:** `man cd` or `info cd`

**2. What command would you use to show your current directory in the filesystem?**  
**Answer:** `pwd`

**3. What command would you use to list the contents of your current directory?**  
**Answer:** `ls`

**4. What command would you use to list the contents of your current directory including the hidden folders and the permissions for each entry?**  
**Answer:** `ls -al`

**5. What command would you use to go to your home directory?**  
**Answer:** `cd` or `cd ~` or `cd /home/<my-username>`

**6. What command would you use to display the contents of the file named foo.txt in your current directory?**  
**Answer:** `cat foo.txt`

**7. What command would you use to copy all the files whose name begins with “foo” in your current directory into the directory named work also in your current directory?**  
**Answer:** `cp foo* work`

**8. What command would you use to create a directory named work in your current directory?**  
**Answer:** `mkdir work`

**9. What command would you use to rename the file named foo.txt to bar.txt assuming foo.txt is in your current directory?**  
**Answer:** `mv foo.txt bar.txt`

**10. What command would you enter at the keyboard to see last 10 commands you entered at the keyboard?**  
**Answer:** `history -10`

**11. What would you enter at the command line if you wanted to run the last command again?**  
**Answer:** `!!` or `!-1` or `<Ctrl & up arrow>`

**12. What will the following command do?**  
`date; echo \`hostname\``  
**Answer:** The command will display current date and name of the computer.

**13. What is a shell?**  
**Answer:** Shell is a program that reads and execute commands for user.

**14. What is the name of the shell we were using in this course?**  
**Answer:** Borne Again Shell (bash)

**15. Write names of any four shells in Linux that you know.**  
**Answer:** Bourne shell (sh), C shell (csh), Zsh shell, TENEX C shell (tcsh)

---

**Use diagram shown in figure 1 on the right to answer questions 16 to 20. For all questions (i.e. 16 to 20) assume your current working directory is cs0024.**

![[Pasted image 20250925092144.png]]
*Figure 1: Sample directory hierarchy*

**16. What command would you use to list the contents of the directory mbega, using a relative pathname?**  
**Answer:** `ls ../mbega` or `ls ../../home/mbega`

**17. What command would you use to go to the directory mbega, using an absolute pathname?**  
**Answer:** `cd /home/mbega`

**18. What command would you use to create a file named unix_manual.txt in the directory classes?**  
**Answer:** `touch ../classes/unix_manual.txt` or `cat > /classes/unix_manual.txt`

**19. What command would you use to remove the directory lectures?**  
**Answer:** `rmdir lectures`

**20. Which command would you use to remove a file named Intro to UNIX notes.doc that is contained in directory cs0024? (Note the name of the file contains spaces)**  
**Answer:** `rm Intro\ to\ UNIX\ notes.doc`

---

**Assuming your current directory contains the following files:**  
Then answer question 21 to 25

```
bar.txt
bar1.txt
bar2.txt
bar3.txt
bar4.txt
bar5.txt
bar6.txt
bar7.txt
bar8.txt
bar9.txt
bar10.txt
foo.txt
foo2.txt
foobar.txt
```

**21. Which files will be removed by the following command?**  
`rm bar?.txt`  
**Answer:** bar1.txt, bar2.txt, bar3.txt, bar4.txt, bar5.txt, bar6.txt, bar7.txt, bar8.txt, bar9.txt

**22. Which files will be removed by the following command?**  
`rm bar*.txt`  
**Answer:** bar.txt, bar1.txt, bar2.txt, bar3.txt, bar4.txt, bar5.txt, bar6.txt, bar7.txt, bar8.txt, bar9.txt, bar10.txt

**23. What will the following command do?**  
`mv *.txt ..`  
**Answer:** It will move all files (i.e. ending with .txt) to parent directory.

**24. What will the following command do?**  
`mv f* /`  
**Answer:** It will move foo.txt, foo2.txt, foobar.txt to root directory.

**25. What will the following command do?**  
`cat [a-j]??.t*`  
**Answer:** It will display contents of files bar.txt and foo.txt.

---

**26. What is an Operating System?**  
**Answer:** An operating system (OS) is a resource manager. It takes the form of a set of software routines that allow users and application programs to access system resources (e.g. the CPU, memory, disks, modems, printers network cards etc.) in a safe, efficient and abstract way.  
For example, an OS ensures safe access to a printer by allowing only one application program to send data directly to the printer at any one time. An OS encourages efficient use of the CPU by suspending programs that are waiting for I/O operations to complete to make way for programs that can use the CPU more productively. An OS also provides convenient abstractions (such as files rather than disk locations) which isolate application programmers and users from the details of the underlying hardware.

**27. List four components of a typical Operating System.**  
**Answer:** Kernel, Shell or GUI, Application Program and System utilities.

**28. How do you logging into and out of UNIX System using Text-based (TTY) terminals?**  
**Answer:** You login by entering your username then press enter then enter correct password then press enter. To log out use exit command.

**29. How do you change your password in UNIX?**  
**Answer:** You use command `passwd`.

**30. Write any four points to consider when creating your password.**  
**Answer:**  
(i) Don’t use words from dictionary  
(ii) Use alphanumeric characters  
(iii) Mix with special characters  
(iv) Use at least 8 characters  
(v) Don’t use characters that may not be found in some other keyboard example “£”

**31. Write down general format of UNIX commands.**  
**Answer:** `$ command -options targets`

**32. List four different types of files that are contained in UNIX filesystem.**  
**Answer:**  
(i) Ordinary files  
(ii) Directories  
(iii) Device files  
(iv) Links

**33. Differentiate between Hard link and Soft (Symbolic) links.**  
**Answer:** A hard link to a file is indistinguishable from the file itself. A **soft link (or symbolic link)** provides an indirect pointer or shortcut to a file. A soft link is implemented as a directory file entry containing a pathname.

**34. What command would you use to give all permissions to the owner of the file foo.sh, read and execute permission to the group, and no privileges to anyone else, assuming the file is in your current directory?**  
**Answer:** `chmod 750 myprogram.sh` or `chmod u=rwx,g=rx,o-rwx myprogram.sh`

**35. If you created a program called myprogram.sh in your current directory, what permissions would you give it, assuming you want everyone using the computer to be able to execute it but only yourself to be able to update it in the future?**  
**Answer:** `chmod 755 myprogram`

**36. What is a process?**  
**Answer:** Process is a program in execution.

**37. How do you suspend a job or a process that is running on a foreground?**  
**Answer:** `<Ctrl-Z>`

**38. How do you resume running the currently suspended process (or job)?**  
**Answer:** Type on command line `fg` then press enter.

**39. Assume the program myprogram.sh is running in the foreground, what would you enter at the keyboard to stop it?**  
**Answer:** `<Ctrl-C>`

**40. How to run or start a background process/job directly from the command line?**  
**Answer:** `command-name &`

**41. How to show all processes running on the machine (not just the process in your current shell)?**  
**Answer:** `ps -aux` or `ps -fae`

**42. What will the following command do?**  
`echo {good,nice}{morning,job} amigo >> output.txt`  
**Answer:** It will print “goodmorning goodjob nicemorning nicejob amigo” inside the output.txt file.

**43. With example, explain how to use find command.**  
**Answer:** Find is used to search for files using their attributes such as name, file type, size etc. Example: `find . -name *.txt -print` will search for files whose names ends with .txt from the current directory and any subfolders of the current directory.

**44. With example, explain how to use grep command.**  
**Answer:** Grep is used to search for files whose contents match a certain criteria. Example: `grep "hello" ~` will search for all files that contain lines which contain string hello in it.

**45. How will you mount a Pen Drive (USB Flash Drive) in UNIX so that you can access your files stored in the pendrive?**  
**Answer:**  
Create a mount point: `mkdir mymountpoint`  
Mount pendrive to mount point: `mount -type <filetype> /dev/sdb mymountpoint`

---

**Consider the output of the following command displayed below. Then answer questions 46 to 50**

```
$ cat students
joachim maro 79 60
carina titus 85 74
gene mlowe 65 45
daud elisante 78 100
salum aziz 83 15
biligita kyando 80 50
nemes michael 81 30
mwaka saddy 84 10
carina titus 85 74
salum aziz 83 25
sophia kivina 90 68
```

**46. What will be the output of the following command?**  
`sort -r students`  
**Answer:**  
```
sophia    kivina    90    68
salum    aziz    83    25
salum    aziz    83    15
nemes    michael    81    30
mwaka    saddy    84    10
joachim    maro    79    60
gene    mlowe    65    45
daud    elisante    78    100
carina    titus    85    74
carina    titus    85    74
biligita    kyando    80    50
```

**47. What will be the output of the following command?**  
`sort -nk3 students`  
**Answer:**  
```
gene    mlowe    65    45
daud    elisante    78    100
joachim    maro    79    60
biligita    kyando    80    50
nemes    michael    81    30
salum    aziz    83    15
salum    aziz    83    25
mwaka    saddy    84    10
carina    titus    85    74
carina    titus    85    74
sophia    kivina    90    68
```

**48. What will be the output of the following command?**  
`sort students | uniq`  
**Answer:**  
```
biligita    kyando    80    50
carina    titus    85    74
daud    elisante    78    100
gene    mlowe    65    45
joachim    maro    79    60
mwaka    saddy    84    10
nemes    michael    81    30
salum    aziz    83    15
salum    aziz    83    25
sophia    kivina    90    68
```

**49. What will be the output of the following command?**  
`tail -5 students | cut -f1`  
**Answer:**  
```
nemes
mwaka
carina
salum
sophia
```

**50. What will be the output of the following command?**  
`head -6 students | tail -2`  
**Answer:**  
```
salum    aziz    83    15
biligita    kyando    80    50
```

---

**END OF EXAMINATION PAPER**