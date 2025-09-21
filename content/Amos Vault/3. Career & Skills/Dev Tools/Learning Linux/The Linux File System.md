____

To list all the folders in the linux file system
```bash
ls /
```

#### 1. /bin/  (binaries)
- bin is a directory which contains important executable programmes and core operatiing system commands.
```bash
ls /bin
```
> -The above command lists all the contents in the bin directory.
> - You will see the tons of programmmes we use every day.
> - Even the <span style="color:rgb(255, 255, 0)">ls</span>  command itself is found in the bin directory.

- bin is symbolically linced to /usr/bin: Use the below command to see
```bash
ls -l /bin
```

<span style="color:rgb(255, 148, 148)">Addition</span> :
- Wtihin thr bin folder there are essential command binaries.
- The <span style="color:rgb(255, 255, 0)">ls</span> the command you use to list files is also a file.
ie: See this gibrish
```bash
cat ls  //You will see gibrish, you should not be able to understand this.
```
- You can <span style="color:rgb(255, 255, 0)">delete a command</span>,<span style="color:rgb(255, 255, 0)">rename</span> a command or <span style="color:rgb(255, 255, 0)">create </span>your own command and keep it inside the bin directory.

ie: renaming a command
```bash
 sudo cp ls amos
```
> The command ls has been renamed to amos. So u can delete ls and amos will still work as ls.



#### 2. /boot/
- boot directory contains the files needed by the boot loader.
```bash
ls /boot/
```
- The initial ram file system also lives here as well as the kernel.
- The boot directory is the directory that you should not be playing with unless you know what you are doing.

#### 3. /dev/
- dev directory contains the device files.
- These files are dynamically created based on physical and various virtual devices that are connected to your system.
- In <span style="color:rgb(255, 255, 0)">linux everything s a file or directory</span>. dev demostrates this very well.
ei: 
```bash
ls -l /dev/nvme*
crw------- 1 root root 240, 0 Aug 26 09:50 /dev/nvme0
brw-rw---- 1 root disk 259, 0 Aug 26 09:50 /dev/nvme0n1
brw-rw---- 1 root disk 259, 1 Aug 26 09:50 /dev/nvme0n1p1
brw-rw---- 1 root disk 259, 2 Aug 26 09:50 /dev/nvme0n1p2

```
From the output:
> - You can tell that.
> - Got it 👍 Let’s break down your `ls -l /dev/nvme*` output line by line:

Explanation of each field:

- **`c` / `b`** → Device type:
    - `c` = character device (accessed as a stream of bytes). 
    - `b` = block device (storage, accessed in blocks).
        
- **`rw-------` / `rw-rw----`** → File permissions:
    - `crw-------` → only root can access this character device.
    - `brw-rw----` → block devices, readable/writable by `root` and members of the `disk` group.
        
- **`1`** → Hard link count.
    
- **`root root` / `root disk`** → Owner and group.
    - `root root` → owned by `root`, group `root`.
    - `root disk` → owned by `root`, group `disk`.
        
- **`240, 0` / `259, x`** → Major and minor device numbers used by the kernel to identify the device driver.
    
- **Date & time** → when the device file was created.
    
- **Path (/dev/…)** → actual device node.
    

---

 Meaning of each device:
1. **`/dev/nvme0`**
    - NVMe _controller_ (character device for issuing commands to the NVMe driver).
    - Usually not directly used by you.
        
2. **`/dev/nvme0n1`**
    - The **first NVMe namespace** (block device).
    - Represents the whole NVMe SSD.
        
3. **`/dev/nvme0n1p1`**
    - **First partition** on `/dev/nvme0n1`.
        
4. **`/dev/nvme0n1p2`**
    - **Second partition** on `/dev/nvme0n1`.


So: Files and folders in the dev directory gives valuable information about whats connected to your system. And we use this information frequently as we manage our servers.

#### 3. /etc/
- etc directory contains the critical <span style="color:rgb(255, 255, 0)">configuration files</span> and <span style="color:rgb(255, 255, 0)">startup scripts</span>.
- When managing the linux server, you spend a lot of time in this directory.
Example: If I want to update the ssh setting on my server i will be going to the following file.
```bash
sudo nano /etc/ssh/sshd_config
```

Eg: <span style="color:rgb(255, 255, 0)">cd network</span> - for network configuration files.
    : <span style="color:rgb(255, 255, 0)">cd ssh</span> - for ssh configuration files.

#### 4. /home/
- home directory is the location of individual user home directories.
- Each individual user on the linux machine gets an individul folder inside the home directory.
- One user can not see the contents of anothers users home directory.
- The home directory also contains the configuration files specific to the user. eg: <span style="color:rgb(255, 255, 0)">.bash_profile</span>  contains the bash profile configurations.


#### 4. /lib/
- lib directory contains the shared libraries that the system programs will need.
- This shared libraries enables multiple programmes to share code with each other which is in need efficiency boost.
- Depending on your system, you may have few directories under the root starting with lib.
- <span style="color:rgb(255, 0, 255)">lib32 </span>and <span style="color:rgb(255, 0, 255)">lib64</span> are common ones. Reffering to libraries for 32 bit and 64 bit programmes respectively.
- Like the bin directory, the lib directory is symbolically linked to the <span style="color:rgb(255, 0, 255)">usr/lib</span> directory
ie:  Use the below command to see.
```bash
ls -l /bin
```

#### 5. /lost + found/
- lost and found directory is where the chunks of system files may resude after a system crash.
- We do not want to intentionally put files in this directory.

#### 6. /media/
- media directory is the mount point for file systems stored on removable media.
Eg: 
Seeing the devices connected to my system.
```bash
ls /media/amos-dev
```
- When the linux system auto mounts the device, on the media directory is where you will find it.

#### 7. /mnt/  (mount)
- mnt directory is where you mount devices temporaliy.
- Example you want to temporarity mount the network storage.
- Here you mount drives manually. You use commands to mount the drives.

#### 8. /opt/
- opt directory is where the optional software packages will be placed.
- opt directory is rarely used nowdays but it is not entirely gone.

#### 9. /proc/
- proc directory is a great example of the sudo file system.
- A sudo file system is a file system that is created at startup and destroyed at shutdown.
- proc directory contains information about every running process on your machine.
- Infact each active prcess has it own subdirectory in here.
- It also contains a ton of  information about your system.
eg: Seeing cpu info.
```php
cat /proc/cpuinfo
```
- Learn more about the proc directory by looking at the proce man page: <span style="color:rgb(255, 0, 255)">man proc</span> 

#### 10. /root/
- root directory is the home directory for the root user. This is the user with ultimate power on the system.

#### 11. /run/
- run directory contains info describing your system <span style="color:rgb(255, 0, 255)">since boot time</span>, such as who is logged in, and what demons might be running.
- The run directory is usefull because you are <span style="color:rgb(255, 0, 255)">gathering infiormation </span>about your system and how it is being used. <span style="color:rgb(255, 255, 0)">ls /run</span> 

#### 12. /sbin/  (super bin)
- sbin directory contains system essential files similar to the bin directory
- There is a little practical difference between bin and sbin
- sbin directory is also<span style="color:rgb(255, 0, 255)"> symbolically linked </span>to /usr/sbin

<span style="color:rgb(255, 148, 148)">Addition</span> : 
- sbin is like bin but a bit more special.
- sbin contains commands that only administrators can use.
Eg: <span style="color:rgb(255, 255, 0)">adduser</span> ,<span style="color:rgb(255, 255, 0)">goupadd</span> ,<span style="color:rgb(255, 255, 0)">groupdel</span>

#### 13. /srv/
- srv directory is ocassionally used as a folder for files served by a webserver or other server mechanisms such as ftp. This is rarely used in the morden era.
- Open suse uses it for web servers. So <span style="color:rgb(255, 0, 255)">/srv/www</span> is found here.
- In other systems it will often be seen as a blank directory.

#### 14. /sys/
- The sys directory contains informationa about devices, drivers an d kernel features running on your system.
- It is often refferd to as like proc but better structured.
- You will use both <span style="color:rgb(255, 255, 0)">sys and proc frequently as the linux administrator.</span>  for the information about your system you are working with.

#### 15. /tmp/
- tmp is a direcctory for temporary files.
- We keep things that we dont intend on keeping beyond the next reboot. On shutdown the data is lost.

#### 16. /usr/
- usr direcctory contains the progammes and utilities that your system will be running.
- This is not a place for the users is the system as it sounds.
- It is a place where your programmes actually reside.
- In most modern systems <span style="color:rgb(255, 255, 0)">/bin</span> is just a link to the forlder <span style="color:rgb(255, 255, 0)">/usr/bin</span>. A file placed in <span style="color:rgb(255, 255, 0)">/bin</span> is actually being placed in <span style="color:rgb(255, 255, 0)">usr/bin</span> . And then it is just made visibile in /bin for compatibily purposes.
- Same thing to sbin, is just a link to usr/sbin in modern linux systems.

#### 17. /var/
- var directory is the system specific variable files.
- This  means logs, and temporary message files etc..
- Sometimes u can find configuration files that are not in /etc
- Also this is a place where <span style="color:rgb(255, 255, 0)">web servers</span> tend to place their files.
Eg: Apache always servers files from<span style="color:rgb(255, 255, 0)"> /var/www/ </span> directory.


More info about the file system hierachy: <span style="color:rgb(255, 148, 148)">man hier</span> 