#linux #backup 
___
# Overview
- I am learning on how to backup the Entire Linux Sytem on to the External Drive.
- Learn on Encrypted backup such that data can not be read without Decryption
- Learn on Unencrypted Backup such that data on the drive can be accessed without decryption on any other system.
- Learn the best practices during Linux system backuo.
- Learn all the available Options and Methods for system backup.

# Goal
1. Avoid Data loss when the system Crashes(I am Using Ubuntu).
2. Be able to safely restore all the data without corruption.
3. Provide Safe storage for my Data.
___

## **Linux System Backup Approaches**
### 1. Full Disk/ Partition Backup
- <span style="color:rgb(255, 148, 148)">What it does</span>: It creates an exact clone(bit-by-bit image) of your disk or partiion.
- <span style="color:rgb(255, 148, 148)">Tools used: </span>
           i.<span style="color:rgb(255, 255, 0)"> dd </span>(basic, dangerous if misused)
           ii. <span style="color:rgb(255, 255, 0)">Clonezilla</span>(bootable tool, supports compression and restores bootloader)
           iii. <span style="color:rgb(255, 255, 0)">partclone</span>(faster, filesystem-aware)
- <span style="color:rgb(255, 148, 148)">When to use</span>: Before big changes, system migration, disaster recovery.

### 2. File-level Backup
- <span style="color:rgb(255, 148, 148)">What it does:</span> Copies only files and directories.
- <span style="color:rgb(255, 148, 148)">Tools used</span>:
                      i. <span style="color:rgb(255, 255, 0)">rsync</span> → incremental, efficient, widely used.
                      ii. <span style="color:rgb(255, 255, 0)">tar</span>→ good for archiving whole system into <span style="color:rgb(255, 0, 255)">.tar.gz</span>.
                      iii. <span style="color:rgb(255, 255, 0)">Bacula</span>, <span style="color:rgb(255, 255, 0)">Amanda</span>, <span style="color:rgb(255, 255, 0)">BorgBackup</span>, <span style="color:rgb(255, 255, 0)">Restic</span> → enterprise-grade options.
- <span style="color:rgb(255, 148, 148)">When to use</span>: Daily or weekly backups, user files, configs.

### 3. Incremental & Differential Backups
- **Incremental** → only changed files since the last backup. (efficient, smaller size)
- **Differential** → all changes since the last full backup. (bigger, but faster restore)
    
- Tools used: <span style="color:rgb(255, 255, 0)">rsync --link-dest</span>, <span style="color:rgb(255, 255, 0)">Borg</span>, <span style="color:rgb(255, 255, 0)">Restic</span>, <span style="color:rgb(255, 255, 0)">Duplicity</span>.


## **Encrypted vs Unencrypted Backups**

### **Encrypted Backup**
- <span style="color:rgb(255, 148, 148)">Why it is important</span>: Secure if drive is stolen/lost.
- <span style="color:rgb(255, 148, 148)">Methods used </span>for encrypted backup:
                                  i. <span style="color:rgb(255, 255, 0)">gpg + tar</span> → e.g., `tar -czf - /home | gpg -c > backup.tar.gz.gpg`
                                  ii. Backup tools with built-in encryption:
                                           - <span style="color:rgb(255, 255, 0)">BorgBackup</span>→ AES256 + deduplication + compression
                                           - <span style="color:rgb(255, 255, 0)">Restic</span>→ fast, secure, supports cloud
                                           - <span style="color:rgb(255, 255, 0)">Duplicity</span>→ encrypts backups with GnuPG
                                  iii. Encrypt the whole external drive: 
                                            -<span style="color:rgb(255, 255, 0)">LUKS + cryptsetup</span> → protects all data on drive.
            
- <span style="color:rgb(255, 148, 148)">Drawback:</span> You **must have the decryption key/password** to restore.

### **Unencrypted Backup**
- Why it is important: I Can access files directly from any machine.
- Methods used:
                      i. Simple <span style="color:rgb(255, 255, 0)">rsync</span> to external drive: ie...
    ```bash
    rsync -aAXv /* /mnt/backup --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"}

```

ii. Create compressed archive: ie
```bash
tar -cvpzf /mnt/backup/system-backup.tar.gz --exclude=/proc --exclude=/tmp --exclude=/mnt --exclude=/sys --exclude=/dev --exclude=/run /
```


## Best Practices for Linux Backups

1. **Follow the 3-2-1 Rule**
    - 3 copies of data
    - 2 different media (e.g., external drive + cloud)
    - 1 offsite (e.g., remote/cloud storage).
        
2. **Automate Backups**
    - Use `cron` jobs or `systemd` timers for rsync/Borg.
    
3. **Verify Backups**
    - Test restore process (`--dry-run` in rsync, `borg extract` check).
    - Corrupted backups = no backups.
        
4. **Separate System and Data**
    - Consider backing up `/home`, `/etc`, databases separately.
    - System can be reinstalled, but personal data is unique.
        
5. **Encrypt sensitive data** if portability/security matters.
    
6. **Keep logs** of backups (rsync’s `--log-file` or Borg’s logs).

## Recommended Methods for You (Ubuntu User)

- **Simple unencrypted daily backup**:  
    `rsync` to external HDD.
    
- **Encrypted backup**:  
    Use **BorgBackup** → safe, deduped, encrypted, fast.
    
- **Full disaster recovery**:  
    Use **Clonezilla** once in a while for full-disk imaging.
    
- **Critical configs**:  
    Regularly back up `/etc`, `/home`, `/var/lib/mysql` (if using DB).


## To Study
- Full unencrypted backup ([[rsync]]/[[tar]])
- Encrypted backup (Borg/Restic)
- Full disk clone (Clonezilla/dd)?

