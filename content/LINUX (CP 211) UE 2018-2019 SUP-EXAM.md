
#### Linux/Unix Systems Exam - CP 211

UNIVERSITY OF DODOMA  
**COLLEGE OF INFORMATICS AND VIRTUAL EDUCATION**  
**DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING**  

**UNDERGRADUATE SUPPLEMENTARY/SPECIAL EXAMINATIONS 2018/2019**  

**CS214: UNIX/LINUX SYSTEMS ADMINISTRATION AND MANAGEMENT**  

**Date:** 24<sup>th</sup> October, 2019  
**Duration:** 3 hours  
**Start:** 08:00 AM  
**End:** 11:00 AM  

---

## Instructions:

1. This question paper consists of **six questions**.  
2. Each question carries **twenty (20) marks**.  
3. Answer **any five questions**.  
4. All University of Dodoma examination regulations apply.  

---

### Question One

**(a) Define the following terms** *(1 Mark Each)*  

**i. Open Source Software**  
**ii. General Public License**  
**iii. UNIX**  
**iv. Linux**  

**(b)**  
**i. Differentiate between Single User System and Multi User System** *(1 Mark)*  
**ii. Are Linux System Single User System or Multi User System.** *(0.5 Mark)*  
**iii. Describe the relationship between shell and kernel in Linux** *(2 Marks)*  
**iv. With an example define the general format of UNIX command syntax?** *(1.5 Marks)*  

**(c) It is well known that every command takes an input and displays an output. Redirection is defined as the process of directing data from one output to another or even cases exist where output serves as an input data for another process.**  

**i. In Computer Linux Systems what serve as the default standard input device and the default standard output device** *(2 Marks)*  
**ii. Explain symbols, numbers and denotation of three streams available in which input and output of Linux environment are distributed.** *(3 Marks)*  

**(d)
i. Why is it is recommended to use root account with care.** *(1 Mark)*  
**ii. Describe the usage and functionality of the command "rm -r *" in UNIX.** *(2 Marks)*  
**iii. From ii) above what will happen if root user runs the command?** *(1 Mark)*  
**iv. Define root directory.** *(1 Mark)*  
**v. What is the command to go to root directory in Linux.** *(1 Mark)*  

---

### Question Two

**(a) All Linux distributions use more or less the same approach in organizing the directory structure on a system. This means that certain directories will always be present, no matter what distribution you are using. Explain the purpose of the following directories.** *(1 Mark Each)*  

i. /sbin  
ii. /boot  
iii. /dev  
iv. /etc  
v. /proc  

**(b) Explain the difference in output when a user successfully runs the following commands:** *(1 Mark Each)*  

i. `ls /etc/*a.*` and `ls [abc]*`  
ii. `mkdir /some/directory` and `mkdir -p /some/directory`  
iii. `su` and `su -`  
iv. `rm -ivR /somedir` and `rm -rf /somedir`  
v. `cp ~/* /tmp` and `mv ~/* /tmp/`  

**(c)**  
**i. Most configuration files that are stored in user home directories are created as hidden files. Why?** *(2 Marks)*  
**ii. How can Hidden Files be identified in Linux System?** *(1 Mark)*  
**iii. What command is used to view all files including Hidden Files?** *(1 Mark)*  
**iv. In some situations, it is useful to know how many words there are in a file. For this purpose, Linux has the `wc` (wordcount) command. *Figure 1*, is an output after running `wc /etc/hosts`. Explain the output.** *(1 Mark)*  

```
23 77 683 /etc/hosts
```
*Figure 1*

**(d) *Figure 2* represents part of the output of `ls -l` command. Different columns are used to show the attributes of the files. Explain all the attributes of *config-2.6.20-15-server* and *grub* files.** *(5 Marks)*  

```
total 10032
-rw-r--r-- 1 root root  414210 2007-04-15 02:19 abi-2.6.20-15-server
-rw-r--r-- 1 root root   83298 2007-04-15 00:33 config-2.6.20-15-server
drwxr-xr-x 2 root root    4096 2007-07-29 02:51 grub
-rw-r--r-- 1 root root 6805645 2007-06-05 04:15 initrd.img-2.6.20-15-server
-rw-r--r-- 1 root root   94600 2006-10-20 05:44 mentest86+.bin
-rw-r--r-- 1 root root  812139 2007-04-15 02:20 System.map-2.6.20-15-server
-rw-r--r-- 1 root root 1763308 2007-04-15 02:19 vmlinuz-2.6.20-15-server
-rw-r--r-- 1 root root  240567 2007-03-24 10:03 xen-3.0-1386.gz
```

*Figure 2*

---

### Question Three

**(a) Define the following terms:** *(1 Mark Each)*  

i. Filesystem  
ii. Symbolic Link  
iii. Hard Link  

**(b) When mounting Drive, the address given depends on the bus the drive is installed on. What is the address given the following scenarios?** *(2 Marks)*  

i. Hard Drive on IDE Bus  
ii. Hard Drive on SATA Bus  
iii. Hard Drive on SCSI Bus  
iv. USB Drive  

**(c)**  
**i. With an example of usage differentiate between /mnt and /media directories.** *(3 Marks)*  
**ii. What are the role of /etc/mtab file?** *(2 Marks)*  
**iii. Ext2 file system doesn’t support journaling, and therefore is being replaced by journaling file systems like Ext3 and ReiserFS. What is journaling file system?** *(2 Marks)*  
**iv. The consistency of file systems is checked using fsck command. Why is it advisable never to use fsck command on a mounted file system?** *(3 Marks)*  

**(d) When starting your computer, some mounts need to be issued automatically. For this purpose, Linux uses the */etc/fstab* file. Each file system is described on a separate line, and the fields in these lines are separated by tabs or spaces. Describe the role of each and every field in figure 3.** *(5 Marks)*  

| Filesystem | Mount point | Type  | Options       | Dump | Pass |
|------------|-------------|-------|---------------|------|------|
| /dev/sda2  | /           | ext3  | acl,user_xattr| 1    |      |
| /dev/sda1  | /boot       | ext2  | acl,user_xattr| 1    |      |
| /dev/sda3  | swap        | swap  | defaults      | 0    |      |
| proc       | /proc       | proc  | defaults      | 0    |      |
| sysfs      | /sys        | sysfs | noauto        | 0    |      |
| debugfs    | /sys/kernel/debug | debugfs | noauto | 0    |      |
| usbfs      | /proc/bus/usb | usbfs | noauto    | 0    |      |
| devpts     | /dev/pts    | devpts | mode=0620,gid=5 | 0 |      |
| /dev/fd0   | /media/floppy | auto | noauto,user,sync | 0 |      |

*Figure 3*

---

### Question Four

**(a) Define the following terms:**  

i. Incremental Backups  
ii. Inode  
iii. Drive Extended Partitions  
iv. Logical Volume Manager (LVM) system  
v. User Quota  

**(b) Correct the commands i. through iv. by describing what is wrong (if any) then correctly rewriting the corresponding commands.** *(7 Marks)*  

i. `tar-f/somefile -vc /somedir`  
ii. `find-user linda-exec grep -l blah`  
iii. `cat users | tr a-z.A-Z > users2`  
iv. `mkfsext3 -L DRV /etc/sda1`  

**(c)**  
**i. Which file contains a list of all partitions that the Kernel knows about?** *(1 Mark)*  
**ii. One of the benefits of working with LVM is the number of logical volume you can create is much higher than the number of traditional partitions. How?** *(2 Marks)*  
**iii. When mounting disk drive, if the maximum mount count is set to 60. That means that after being mounted 60 times, on the next mount the file system will be checked automatically. What command can be used to change this and set the maximum mount count to 30?** *(2 Marks)*  

**(d)**  
**i. When creating a user in command line, *useradd* command will read its configuration file */etc/default/useradd* if an option isn’t specified. *Figure 4* is part of the content of the file (*/etc/default/useradd*). What does SKEL option mean?** *(2 Marks)*  

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

*Figure 4*

**ii. By default, a password can be used for 99,999 days. So, if you do nothing, a user may use his or her password for 273 years without changing it. What option of *passwd* command would you use if you want to change that?** *(1 Mark)*  

---

### Question Five

**(a) *Table 1* represents the summary of three advance permissions, Set User ID (SUID), Set Group ID (SGID) and Sticky Bit. From (i) through (vi) explain what happens when a specified permission is applied to files as well as directories.** *(6 Marks)*  

| Permission | On files | On directories |
|------------|----------|----------------|
| SGID       | (i)      | (ii)           |
| Sticky Bit | (iii)    | (iv)           |
| SUID       | (v)      | (vi)           |

*Table 1*

**(b) Given the 3 advance permission from a) above, what are their corresponding numerical and relative values.** *(3 Marks)*  

**(c) Imagine a situation where users *linda* and *lori* work for the accounting department and are both members of the group accounting. For security reasons, however, the administrator has decided to work with private primary groups. That means that *linda* is the only member of her primary group, *linda*, and *lori* is the only member of her primary group, *lori*. Both users, however, are members of the *accounting* group as well, but as a secondary group setting. However, if a shared group directory (say, /groups/account) is created and that the group *accounting* is set as the group owner for the directory.**  

**i. What command is used to set group *accounting* as the group owner for the directory?** *(1 Mark)*  
**ii. How can an administrator ensure that all files created in this directory (*/groups/account*) and all of its subdirectories would also get the group *accounting* as the default group owner?** *(3 Marks)*  

**(d)**  
**i. How do you direct the shell to execute a command in the background?** *(1 Mark)*  
**ii. Among the most common process management tasks is the killing of processes. If you use the kill command or any of its alternatives, you can send a signal to the process. Basically, by sending it a signal, you give the process a command that it simply cannot ignore. Table 2 gives an overview of four common signals. From (a) through (d) indicate what the corresponding numerical values of the given Signals are.** *(2 Marks)*  

| Signal   | Value |
|----------|-------|
| SIGTERM  | (a)   |
| SIGHUP   | (b)   |
| SIGUSR1  | (c)   |
| SIGKILL  | (d)   |

*Table 2*

**iii. From ii. Above, what is the difference between signals:** *(1 Mark Each)*  

a. SIGHUP and SIGUSR1  
b. SIGKILL and SIGTERM  

**iv. Figure 5 is part of the output after running `traceroute ubuntu.com` command. What does a string of three asterisks (* * *) mean?** *(2 Marks)*  

```
10 ae-15-53.cari.london2.level3.net (4.68.117.79) 18.917 ms 17.388 ms
11 ae-25-52.cari.london2.level3.net (4.68.117.47) 18.992 ms
12 tge9-3-146.core-r-1.lon2.mnet.net.uk (212.187.196.82) 14.699 ms 17.383 ms 15.293 ms
13 85.133.32.134 (85.133.32.134) 27.130 ms 33.310 ms 37.576 ms
14 82.211.81.76 (82.211.81.76) 16.784 ms 20.140 ms 17.556 ms
15 * * *
16 * * *
17 * * *
```

*Figure 5*

---

### Question Six

**(a)**  
**i. What are daemons?** *(1 Mark)*  
**ii. How can you find the status of a process?** *(1 Mark)*  

**(b)**  
**i. What are the contents of /usr/local?** *(2 Marks)*  
**ii. What is the maximum length for a filename under Linux?** *(2 Marks)*  
**iii. Write a command that will do the following:** *(3 Marks)*  

- look for all files in the current and subsequent directories with an extension c,v  
- strip the ,v from the result  
- use the result and use a grep command to search for all occurrences of the word ORANGE in the files  

**(c)**  
**i. Does it help for a Linux system to have multiple desktop environments installed?** *(2 Marks)*  
**ii. Does the Ctrl+Alt+Del key combination work on Linux?** *(2 Marks)*  
**iii. What is the command to calculate the size of a folder?** *(1 Mark)*  

**(d)**  
**i. What is a typical size for a swap partition under a Linux system?** *(2 Marks)*  
**ii. How can you find out how much memory Linux is using?** *(2 Marks)*  
**iii. How do you refer to the parallel port where devices such as printers are connected?** *(2 Marks)*  

---

**END OF EXAMINATION PAPER**