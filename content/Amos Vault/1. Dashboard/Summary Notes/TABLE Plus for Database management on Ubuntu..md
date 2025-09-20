

---

Tags: #management, #database, #tableplus
Date: 2025-08-21  
Source: 

---

# TABLE Plus for Database management on Ubuntu.  

## **Overview**  
- Installing  **TablePlus** a sleek, native GUI tool for managing databases like MySQL, PostgreSQL, and SQLite on **Ubuntu**.
- Understanding how it wotks, setup and mode of operation.

## Steps

- Install via APT Repository:
- This integrates TablePlus into your system, simplifying updates and management

###### 1. Add the TablePlus GPG Key
```bash
wget -qO - https://deb.tableplus.com/apt.tableplus.com.gpg.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/tableplus-archive.gpg > /dev/null

```

###### 2. Add the Appropriate Repository
```bash
sudo add-apt-repository "deb [arch=amd64] https://deb.tableplus.com/debian/24 tableplus main"

or

echo "deb [arch=amd64] https://deb.tableplus.com/debian/24 tableplus main" | sudo tee /etc/apt/sources.list.d/tableplus.list

```

###### 3. Install TablePlus
```bash
sudo apt update
sudo apt install tableplus
```




## Connecting mysql-server to table plus

##### 1. Create a dedicated mysql user for Tableplus
i. Login to the shell
```bash
sudo mysql -u root
```

ii. Create a new user with password
```sql
CREATE USER 'amos'@'localhost' IDENTIFIED BY '123456';
GRANT ALL PRIVILEGES ON *.* TO 'amos'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;

```

iii. In TablePlus, connect using:
- Host: `127.0.0.1` (not `localhost`, sometimes avoids socket auth issues)
- Port: `3306`
- User: `amos`
- Password: `StrongPassword123!`


The above Applies to all other Database Management GUIs example:
i. mysql workbench.
ii. beekeeper station
iii. dbeaver ce
etc...