
#### **Study Guide / Roadmap for Linux/UNIX Systems (CP 211)**

This is all you need to Conquer the LINUX Exam like a Kung Fu Master. But also you will understand the Linux System like never before.

### Step 1. **Introduction to Linux/UNIX**

- Know the History of UNIX and Linux
- Differences between UNIX, Linux, and Windows
- Know the names of diff linux distributions (Ubuntu, CentOS, Fedora, Debian, etc.)
    
- Understant the System architecture:
    - **Kernel**
    - **Shell**
    - **File System**
    - **Utilities and Commands**
        
---
 
### Step 2. **Linux/UNIX File System**

- Understant the file system hierarchy (`/`, `/home`, `/bin`, `/etc`, `/var`, `/tmp`, `/usr`, `/dev`)  : Understand how the linux system is organised and the function of each directory. (Eg: <span style="color:rgb(255, 255, 0)">/bin </span>stores executable files and commands)

- File types: regular files, directories, device files, symbolic links (understand What kinds of files are in the linux system)

- **Absolute vs Relative paths** (Focus here,<span style="color:rgb(0, 176, 80)"> lectures love this place</span>)
    - Lean how to find,copy,move files and directories using both (absolute and relative paths)

- **File management commands**: (Most of the <span style="color:rgb(0, 176, 80)">Section A </span>questions base here)
    - Understant the commands used to <span style="color:rgb(255, 0, 255)">navigate</span> the file system and their example usage.
    - `ls`, `pwd`, `cd`, `mkdir`, `rmdir`, `touch`
    - `cp`, `mv`, `rm`, `find`, `locate`
        

---

### **Step 3. User and Group management.**

  i. Users and Groups management : Learn how the linux admin manages users and groups       in linux.
  - Commands must know on this Section
  ```sh
useradd/userdel/usermod    # User management command must know
groupadd/groupdel/groupmod # Group management commands must know
passwd                     # Change passwords
id                         # User identity information
who/w                      # Logged-in users
`su`, `sudo`               # Switching users
  ```

Know these System files and what are their contents. 
- /etc/passwd - User accounts
- /etc/shadow - Encrypted passwords
-  /etc/group - Group definitions

And be able to explain the output of each file eg `sudo cat /etc/passwd`. Explain the fields.

---

### **Step 4. File management and file permissions**

 i. Understand the file attributes  (`ls -l`) : Be able to explain the output of this command          and the properties that the files has such as ownership, permissions etc.
 
 Eg: Be able to explain the below output :
 ```
 drwxr-xr-x 16 amos-dev amos-dev 4096 Sep 25 03:35 Desktop
 ```


ii. Understand file permissions and how to change them.
- Read, Write, Execute permissions (rwx for user, group, others)
- Changing permissions: `chmod` (numeric ie: Read(r=4),Write(w=2),Execute(x=1) and symbolic modes)
- Changing ownership: `chown`, `chgrp`
- `umask` and default permissions

 Commands Summary:
 ```sh
 chmod       # Change permissions (numeric: chmod 755, symbolic: chmod u+x)
 chown       # Change ownership
 chgrp       # Change group
 umask       # Default permissions mask
 ```
    

---

### **Step 5. Basic Shell Commands**

- Learn commands to view content of a file: `cat`, `less`, `more`, `head`, `tail`

- Learn tools used in file editing: `nano`, `vim`, `gedit` (<span style="color:rgb(0, 176, 80)">Vim commands</span> are mostly asked, Lean only basics)
    
- Learn commands used in Counting and searching:
               - `wc`, `grep`, `cut`, `sort`, `uniq`, `diff`
        
- Learn commands used forCompression & archiving: (Do not go deep, <span style="color:rgb(0, 176, 80)">tar</span> command is mostly asked)
               -  `tar`, `gzip`, `bzip2`, `zip`, `unzip`
        
- Know some commands for viewing system processes: `ps`, `top`, `htop`, `kill`, `jobs`, `bg`, `fg` (The <span style="color:rgb(0, 176, 80)">kill</span> command and the kill <span style="color:rgb(0, 176, 80)">signals</span> are asked in many UEs)
    

---

### Step 6. **Shell and Shell Scripting**

i. Intro to scripting
- Know the  types of shells (Bash, Zsh, etc.) in linux.
    
- Shell variables (local, environment, `$PATH`) : (Be shallow, not deep).

- Input and output redirection: (The meaning of these redirections and others are always asked)
           - `>`, `>>`, `<`, `2>`, `&>`
        

ii.  Writing scripts: (You cant cover this, Just know the syntax and practice : Eg writing script to rename files and folder, writing a script to delete a file etc.)
- Shebang (`#!/bin/bash`)
- Variables, input (`read`), output (`echo`)
- Conditional statements (`if`, `case`)
- Loops (`for`, `while`, `until`)
- Functions   
- Command-line arguments (`$1`, `$@`, `$#`)
        

---

### Step 7. **Process Management**

- Know the Foreground vs Background processes
- Job control (`jobs`, `bg`, `fg`, `kill`) : Commands to control jobs and why.
- Signals (`kill -9`, `kill -15`) : How to terminate processess using kill and all kill signals by numbers and their names eg: SIGKILL,SIGSTOP.
- Process priority: `nice`, `renice` : How to give priority to running processes
    
---

### Step 8. **Package Management**

- **Debian-based (Ubuntu, Debian):** `apt`, `dpkg` (The package managers in debian distro)
- **Red Hat-based (CentOS, Fedora):** `yum`, `dnf`, `rpm` (The Package managers in fedora distros)
- Installing, updating, removing packages
- Checking package dependencies

(You can be asked to list the commands used to install packages in linux UE 2022)

---

### Step 9. **Disk and Storage Management**
These commands are used to manage the storage devices connected to the linux system and the internal storage of the system
- Listing disks and partitions: `lsblk`, `fdisk`, `parted`
- Mounting and unmounting: `mount`, `umount`
- File system check: `df`, `du`, `fsck`

	(You can be given the output of the above disk commands to explain)

---

### **4 Hour Study Plan**

(You can cover this in 4 Hours, here is how)
1. **Hour 1:** Basics (File system, commands, permissions)
2. **Hour 2:** Shell scripting (loops, conditions, scripts)
3. **Hour 3:** Processes, jobs, users & groups 
4. **Hour 4:** Networking, package management
