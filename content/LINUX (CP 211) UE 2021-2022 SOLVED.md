

#### Linux/Unix Systems SOLUTION - CP 211

---
> [!info] 📝 Acknowledgement  
> **Contributor:** Eliakim Kilimba  
> **WhatsApp:** 
> **Degree Programme:** BSc in SE3  
> **Submission Date:** 25th September, 2025  
> **Note:** <span style="color:rgb(0, 176, 80)">We sincerely appreciate your effort in solving and submitting this exam for academic support and reference.</span>

---

## SECTION A: (15 MARKS)

1. Define the following terms:

**a. Open-source software<br>**
<span style="color:rgb(0, 176, 80)">ANSWER</span> :
Open-source software is computer software that is released under a license in which the copyright holder grants users the rights to use, study, change, and distribute the software and its source code to anyone and for any purpose.

**b. General Public License<br>**  
<span style="color:rgb(0, 176, 80)">ANSWER</span> :
The GNU General Public License is a series of widely used free software licenses that guarantee end users the four freedoms to run, study, share, and modify the software.

**c. Journaling file systems<br>** 
<span style="color:rgb(0, 176, 80)">ANSWER</span> :
A journaling file system is a file system that keeps track of changes not yet committed to the file system's main part by recording the goal of such changes in a data structure known as a "journal", which is usually a circular log.

**d. Incremental Backup<br>**  
<span style="color:rgb(0, 176, 80)">ANSWER</span> :
An incremental backup is one in which successive copies of the data contain only the portion that has changed since the preceding backup copy was made. When a full recovery is needed, the restoration process would need the last full backup plus all the incremental backups until the point of restoration.

**e. Inode<br>** 
<span style="color:rgb(0, 176, 80)">ANSWER</span> : 
The inode is a data structure in a Unix-style file system that describes a file-system object such as a file or a directory. Each inode stores the attributes and disk block locations of the object's data.

---

2. Answer the following questions:

**a. With help of a figure, briefly describe Linux process states<br>.**  

<span style="color:rgb(0, 176, 80)">ANSWER</span> :
Five process states in Linux:
i. **New/Ready**: A new process is created and ready to run.  
ii. **Running**: The process is being executed.  
iii. **Blocked/Wait**: The process is waiting for input from the user.  
iv. **Terminated/Completed**: The process completed the execution or terminated by the operating system.  
v. **Zombie**: The process is deleted, but still the information regarding the process exists in the process table.

**Process State Diagram:**
![[Pasted image 20250925065217.png]]

**b. Briefly describe process components.**  
    <span style="color:rgb(255, 148, 148)">NOT SOLVED</span> : Please Solve!(Solution will be available soon)

**c. By using illustration, briefly describe short-time, medium-term and long-term scheduling.<br>**
<span style="color:rgb(0, 176, 80)">ANSWER</span> :
**Long-Term Scheduling**  
- Long term scheduler is also known as a job scheduler.This scheduler regulates the program and select process from the queue and loads them into memory for execution.It also regulates the degree of multi-programing.
- However, the main goal of this type of scheduler is to offer a balanced mix of jobs,like Processor, I/O jobs.,that allows managing multiprogramming.

**Short-Term Scheduling**  
- Short term scheduling is also known as CPU scheduler.The main goal of this scheduler is to boost the system performance according to set criteria. This helps you to select from a group of processes that are ready to execute and allocates CPU to one of them. The dispatcher gives control of the CPU to the process selected by the short-term scheduler.

- A diagram that demonstrates scheduling using long-term and short-term schedulers is given as follows

![[shortterm scheduler.png]]

**Medium-Term Scheduling**  
- Medium-term scheduling is an important part of swapping. It enables you to handle the swapped out-processes. In this scheduler, a running process can become suspended, which makes an I/O request.
- A running process can become suspended if it makes an I/O request. A suspended processes can’t make any progress towards completion. In order to remove the process from memory and make space for other processes, the suspended process should be moved to secondary storage.

- A diagram that demonstrates medium-term scheduling is given as follows:
**Diagram Representation:**  
![[midternscheduler.png]]


**d. What are desirable skills a system administrator should possess?<br>**  
<span style="color:rgb(0, 176, 80)">ANSWER</span> :
i. Critical thinking  
ii. Problem solving mindset  
iii. Attention to detail  
iv. Hardware knowledge  
v. Basic programming skills (PHP, JavaScript, etc.)  
vi. Knowledge of different operating systems (Microsoft, Unix, Linux, etc.)  
vii. Ensure security and efficiency of IT infrastructure  
viii. Track emerging technologies and implement them in the organization

**e. Briefly describe the basic features of the Linux Operating System.<br>**  
<span style="color:rgb(0, 176, 80)">ANSWER</span> :
i. **Portable** – Works on different hardware platforms.  
ii. **Open Source** – Source code is freely available.  
iii. **Multi-User** – Multiple users can access system resources simultaneously.  
iv. **Multiprogramming** – Multiple applications can run at same time.  
v. **Hierarchical File System** – Standard file structure.  
vi. **Shell** – Interpreter program to execute OS commands.  
vii. **Security** – Authentication features like password protection, access control, encryption.

---

3. Answer the following questions:

**a. Correct the commands i. through iv. By identifying what is wrong (if any) then rewrite the corresponding commands in the correct syntax:**  

i. `tar -f /somefile -vc /somedir`
   - <span style="color:rgb(0, 176, 80)">ANS</span>: `tar -cvf /somefile /somedir`  
   -
ii. `find -user linda -exec grep -l blah \`
   - <span style="color:rgb(0, 176, 80)">ANS</span>: `find -user linda -exec grep -l blah {} \;`  

iii. `cat users \ tr a-z A-Z > user2` 
   - <span style="color:rgb(0, 176, 80)">ANS</span>: `cat users | tr a-z A-Z > user2`  

iv. `mkfsext3 -L DRV /etc/sda1`
   - <span style="color:rgb(0, 176, 80)">ANS</span>: `mkfs.ext3 -L DRV /dev/sda1`

**b. State the difference in outputs when a user successfully runs the following commands:**  

i. `ls /etc/*a.*` vs `ls [abc]*`  

ii. `mkdir /some/directory` vs `mkdir -p /some/directory`  

iii. `su` vs `su –`  
 - <span style="color:rgb(0, 176, 80)">ANS</span> :
   - **su**: keeps almost all environment variables belonging to the original user.  
   - **su –**: clears most environment variables.  
   
iv. `rm -ivR /somedir` vs `rm -rf /somedir`  

v. `cp ~/* /tmp` vs `mv ~/ /tmp/`  

vi. `wc -w /etc/hosts` vs `wc -l /etc/hosts`

---

## SECTION B: (45 MARKS)  
**Attempt THREE (3) out of FOUR (4) questions provided.**

4. Answer the following questions:

**a. In Linux, commands take inputs and provide outputs. Redirection is defined as the process of directing data from one output to another output.**  

i. **What serve as default standard input device and default standard output device?**  
<span style="color:rgb(0, 176, 80)">ANSWER</span> :
   - Default standard input device – Keyboard.  
   - Default standard output device – Monitor.  

ii. **Explain symbols, numbers and denotation of three streams available in which input and output of Linux environment are distributed.**  

<span style="color:rgb(0, 176, 80)">ANSWER</span> :

| Symbol | Number | Denotation |
|--------|--------|------------|
| 0<     | 0      | stdin      |
| 1>     | 1      | stdout     |
| 2>     | 2      | stderr     |

**b. When mounting a drive, the address given depends on the bus where the drive is installed on. What is the address given the following scenarios:**  
i. Hard drive on IDE Bus  
ii. Hard drive on SATA Bus  
iii. Hard drive on SCSI Bus  
iv. USB Drive  

**c. Write four Linux commands that can be used to discover disk devices.** 
<span style="color:rgb(0, 176, 80)">ANSWER</span> :
i. `df`  
ii. `fdisk`  
iii. `lsblk`  
iv. `cfdisk`  
v. `parted`  
vi. `sfdisk`  

**d. The consistency of file systems is checked using fsck command. Why is it advisable never to use fsck command on a mounted filesystem?**  
- Data loss is a possibility when you use this command so you should ensure that you have backup of your data before you proceed with the filesystem check.

**e. When starting your computer, some mounts need to be issued automatically. For this purpose, Linux uses the /etc/fstab file. Each file system is described on a separate line, and the fields in these lines are separated by tabs or spaces. Describe the role of each and every field in figure 1.**  
![[Pasted image 20250925071355.png]]

<span style="color:rgb(0, 176, 80)">ANSWER</span> :
- The table is a 6-column structure where each column designates a specific parameter and must be set up in the correct order. The columns of the table are as follows from left to right:
     ii. **Device**: usually the given name or UUID of the mounted device (sda1/sda2/etc).  
    ii. **Mount Point**: designates the directory where the device is/will be mounted.  
    iii. **File System Type**: shows the type of filesystem in use.  
    iv. **Options**: ists any active mount options. If using multiple options, they must be separated by commas.  
    v. **Backup Operation**: (the first digit) this is a binary system where 1 = dump utility backup of a partition. 0 = no backup. This is an outdated backup method and should NOT be used.  
    vi. **File System Check Order**: (second digit) Here we can see three possible outcomes. 0 means that fsck will not check the filesystem. Numbers higher than this represents the check order. The root filesystem should be set to 1 and other partitions set to 2.

---

5. As a system administrator you will be required to identify the package manager running on your systems and make yourself familiar with it.

**a. How will you list all packages installed on your system with version numbers. Identify packages that have other packages depend on them as well as "leaf" packages (those without any other package depending on them).**  

<span style="color:rgb(0, 176, 80)">ANSWER</span> :
**List all packages installed on your system with version numbers:**  
i. `dpkg -l`  
ii. `apt-show-versions`  

**Identify packages that have other packages depend on them:**  
i. `pacman -Qi [package_name]`  
ii. `pacman -Qi [package_name] | awk '/(^Name)|(^Required By)|(^Optional For)/'`  

**List "leaf" packages:**   <span style="color:rgb(255, 148, 148)">SOLVE</span>
i. 
ii. 

**b. Answer the following questions:**  

i. **What are the commands to install a piece of software?<br>**  
<span style="color:rgb(0, 176, 80)">ANSWER</span> :
   - `sudo apt install package_name`  
   - `sudo dnf install package_name`  
   - `sudo yum install package_name`  

ii. **What are the commands to delete a package?**  

<span style="color:rgb(0, 176, 80)">ANSWER</span> :
   - `sudo apt remove package_name`  
   - `sudo dnf remove package_name`  

iii. **What are the commands to upgrade a package?<br>**  
<span style="color:rgb(0, 176, 80)">ANSWER</span> :
   - `sudo apt upgrade package_name`  
   - `sudo dnf upgrade package_name`  
   - `sudo yum upgrade package_name`  

iv. **What are the commands to update a package?<br>**  
<span style="color:rgb(0, 176, 80)">ANSWER</span> :
   - `sudo apt update package_name`  
   - `sudo dnf update package_name`  
   - `sudo yum update package_name`  

v. **What are the commands to downgrade a package?<br>**  
<span style="color:rgb(0, 176, 80)">ANSWER</span> :
   - `sudo dnf downgrade package_name`  
   - <span style="color:rgb(255, 148, 148)">ADD MORE</span>


**c. What are the commands to list the files installed by a given package? Given a file name, how do you identify what package it belongs to?**  

**List files installed by a package:**  
i. <span style="color:rgb(255, 148, 148)">SOLVE</span>  

**Identify package a file belongs to:<br>**  
<span style="color:rgb(0, 176, 80)">ANSWER</span> :
i. `sudo yum provides package_name`  
ii. `sudo dnf provides package_name`  

---

6. Answer the following questions:

**a. Your organization is not sure about the file permissions to the users of their Linux systems. As a system administrator, your IT Manager has tasked you to determine system users that have permissions to read, write and execute permissions. What and how would you accomplish the task?**  

**b. As the Linux system administrator, you're responsible for maintaining all approved scripts. Your manager asks whether you can add a feature to one of the scripts. She wants you the script ask users for their names and greet users by name. She asks you to create a test script first and send it to her. Write the commands you'd use to meet these requirements.**  

**c. You're the system administrator for a major automobile company, and you just found out that the chief financial officer (CFO) has resigned. Your boss asks you find all files in the CFO's home directory that have been modified in the past 90 days, and then move them to your home directory for continuity purposes. What command should you use to find out which files have been modified in this time frame, and what command should you use to copy these files to your home directory?**  

---

7. Answer the following questions:

**a. When creating a user in command line, useradd command will read its configuration file to /etc/default/useradd, if an option isn't specified. Figure 2 is part of the content of the file (etc/default/useradd).**  

```bash
# useradd defaults file
GROUP=100
HOME=/home
INACTIVE=-1
EXPIRE=
SHELL=/bin/bash
SKEL=/etc/skel
CREATE_MAIL_SPOOL=yes
```

**Briefly explain the meaning of the following options:<br>**  
<span style="color:rgb(0, 176, 80)">ANSWER</span> :
i. **GROUP** - The group name or ID for a new user's initial group (when -N/--no-user-group is used or USERGROUPS_ENAB is set to no in /etc/login.defs). The named group must exist.  
ii. **INACTIVE** - The number of days after a password has expired before the account will be disabled.  
iii. **SKEL** - The skeleton directory, containing files and directories to be copied to the user's home directory when created by useradd with -m option.  

**b. By default, a password can be used for 99,999 days. A user may use his or her password for 273 years without changing it. What option of password command would one use to change the maximum duration of using the password without enforcing the user to change?**  
<span style="color:rgb(0, 176, 80)">ANSWER</span> :
- `-M` (short term) or `--maxdays` (long term)  

**c. Table 1 represents the summary of three advance permissions, Set User ID(SUID), Set Group ID(SGID) and sticky bit. From i. through iv. Briefly explain what happens when a specified permission is applied to files as well as directories.**  

| Permission | On File | On Directories |
|------------|---------|----------------|
| SGID       | i)      | ii)            |
| Sticky Bit | iii)    | iv)            |
| SUID       | v)      | vi)            |

**d. Among the most common process management tasks is the killing of processes. If you use kill command or any alternatives, you can send a signal to the process. Basically, by sending it a signal, you give the process a command that simply cannot ignore. Table 2 gives an overview of four common signals. From i) through iv) indicate what are the corresponding numerical values of the given signals:**  

<span style="color:rgb(0, 176, 80)">ANSWER</span> :

| Signal   | Value          |
|----------|----------------|
| SIGTERM  | i) 15          |
| SIGHUP   | ii) 1          |
| SIGUSR1  | iii) 30, 10, 16|
| SIGKILL  | iv) 9          |

**e. From question 7(d) what is the difference between the following signals:**  

i. **SIGHUP and SIGUSR1**  
   - **SIGHUP**: The SIGHUP signal is sent to a process when its controlling terminal is closed. It was originally designed to notify the process of a serial line drop (a hangup).  
   - **SIGUSR1**: The SIGUSR1 and SIGUSR2 signals are sent to a process to indicate user-defined conditions.  

ii. **SIGKILL and SIGTERM**  
   - **SIGKILL**: The SIGKILL signal is sent to a process to cause it to terminate immediately (kill). In contrast to SIGTERM and SIGINT, this signal cannot be caught or ignored, and the receiving process cannot perform any clean-up upon receiving this signal. 
   - **SIGTERM**: The SIGTERM signal is sent to a process to request its termination. Unlike the SIGKILL signal, it can be caught and interpreted or ignored by the process. This allows the process to perform nice termination releasing resources and saving state if appropriate. SIGINT is nearly identical to SIGTERM.

---
