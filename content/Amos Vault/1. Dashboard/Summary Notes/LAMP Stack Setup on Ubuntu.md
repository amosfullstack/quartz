
---

Tags: #apache, #linux, #php #mysql #lampstack
Date: 2025-08-20  
Source: Related Note | External Source(URL)

---

# LAMP Stack Setup on Ubuntu  

## **Overview**  
- Learning how to install a development environment on a fresh installed Ubuntu.
- LAMP Stack setup, that is Linux,Apache,MySQL,PHP.
## Steps.

###### 1. Install apache2 webserver.
```bash
$ sudo apt install apache2
```

- The above command will install the apache web server.
- In the browser type <span style="color:rgb(255, 0, 255)">localhost</span> , you should see the apache welcome page saying <span style="color:rgb(255, 255, 0)">It Works</span>.
- The welcome page is located at /var/www/html/index.html, it should be replaced before continuing to operate the HTTP server(Apache2 Server)

To check the status of the Server: You should see <span style="color:rgb(0, 176, 80)">active running</span>.
```bash
$service status apache2
//or
$sudo systemctl status apache2

//To restart apache2 service
$service apache2 restart
```

###### 2. Install mysql Server.
```bash
$sudo apt install mysql-server
```

**If still failing** – purge and reinstall  
⚠️ Warning: this removes MySQL databases, so back them up first.

```lua
sudo apt purge mysql-server mysql-client mysql-common -y
sudo rm -rf /etc/mysql /var/lib/mysql
sudo apt update

// Istall again
sudo apt install mysql-server -y

```

- Perform mysql secure installation
```lua
$sudo mysql_secure_installation


//To check the status of mysql
$service mysql status
```
> - Enter no, because i do not to be validated how strong my password is.
> - all others no.
> - Reload previleged tables : yes

Other commands
```bash
$sudo service mysql start
$sudo service mysql stop
$sudo service mysql restart
$sudo service mysql enable
```

###### 3. Install PHP
```bash
$sudo apt install php

//Check php installed version
$php -v
```

- Correct way to install PHP Apache module: this is the module that enable php connect to mysql
```bash
sudo apt install libapache2-mod-php

php -v              # shows PHP version

sudo apache2ctl -M | grep php   # shows if PHP module is loaded in Apache


sudo systemctl restart apache2   #Restart apache2 after enabling php

```


###### 4. Check if php actually works
- Go to the directory : <span style="color:rgb(255, 255, 0)">/var/www/html/</span>
- Create a php file there that output php info.
- To write into the file.
```bash
sudo nano test.php
```
ie:
```php
<?php  echo phpinfo();  ?>
```


###### 5. Change the owner of the /var/www/html/ directory to the user
- The /var/www/html/ directory  and all it conted is owned by root.
- Change ownership to the current user so as to allow read and write
ie:
```bash
$sudo chown $USER:$USER ./ -R
```

- SO , now we have the full PERMISSION ON this folder and it is where our <span style="color:rgb(255, 255, 0)">PROJECTS DIRECTORIES</span> will reside.

