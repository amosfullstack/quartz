---
---

Tags: #cloud #hosting-pannel #website-migration #cyber-panel #cwp-pannel #whmcs
Date: 2025-08-15  
Links : [[CWP (CentOS Web Panel)]] | [[CyberPanel]] 


# Website Migration from CWP to Zepson Cloud (CyberPanel)

## **Over<span style="color:rgb(255, 148, 148)"></span>view**  

>  This document explains the process of migrating websites from  <span style="color:rgb(255, 0, 255)">CWP (CentOS Web Panel)</span> to **Zepson Cloud** (running <span style="color:rgb(255, 0, 255)">CyberPanel</span>), covering: 

- The difference between the two systems
- The role of <span style="color:rgb(255, 0, 255)">WHMCS</span> <span style="color:rgb(255, 0, 255)"></span>in hosting automation
- The migration process
- How it works in the background
- Key terms and concepts
- **Why It Matters**: (Significance or relevance)  



## Differences Between CWP and Zepson Cloud

1. **CWP** is typically installed directly on a VPS/dedicated server and accessed via **IP address + port** (e.g., `https://IP:2087`). It’s aimed at full server control for administrators.
2. **Zepson Cloud** uses a **customer portal** (likely WHMCS) for billing and account management, with **CyberPanel** as the hosting control panel for website management.
3. **CWP** = full root access to server; **CyberPanel on Zepson Cloud** = shared or managed hosting access, no root privileges.

## **How WHMCS Fits In**

<span style="color:rgb(255, 255, 0)">WHMCS </span> stands for Web Host Manager Complete Solution.
- So Basically <span style="color:rgb(255, 0, 255)">Zepson Cloud </span>is the name given to the WHMCS system that acts as the frontend to manage the pannels in the backend.

- **Zepson Cloud** is basically the <span style="color:rgb(255, 0, 255)">branding name</span> for their **WHMCS-powered customer portal**.

- Behind the scenes, WHMCS talks to the **backend control panels** (like CyberPanel) through APIs to actually create and manage the hosting accounts.

The Workflow is as follows:

<span style="color:rgb(255, 0, 255)">Customer</span> → <span style="color:rgb(255, 255, 0)">Zepson Cloud (WHMCS portal) </span>→ <span style="color:rgb(255, 148, 148)">WHMCS API </span>→ <span style="color:rgb(0, 176, 80)">CyberPanel server(s)</span>

- WHMCS is the **central business and automation hub**.
    
> For **CWP**:
    WHMCS uses CWP's API to create/suspend/terminate hosting accounts.
        
        
> For **CyberPanel**:
    WHMCS uses CyberPanels API for the same purposes.
    
        
- WHMCS can control **both panels** at the same time if the hosting company uses multiple backends.

## **Migration Process**

###### **Step 1: Preparation**
- Audit existing sites, domains, databases, and emails in CWP.
- Gather login credentials for both CWP and Zepson Cloud.
###### **Step 2: Backup (in CWP)**
- Backup website files (`/home/username/public_html`).
- Export databases via phpMyAdmin or `mysqldump`.
- Backup emails if needed.
###### **Step 3: Transfer**
- Use **SCP/rsync** over SSH or download/upload via SFTP to move files to Zepson Cloud.
    

###### **Step 4: Import into CyberPanel**
- Create a new website in CyberPanel.
- Upload files into `/home/domain.com/public_html`.
- Create a new database and import the SQL dump.
- Update site configuration (e.g., database credentials in `wp-config.php`).

###### **Step 5: DNS Update**
- Change nameservers or update A records to point to Zepson Cloud’s IP.
- Wait for DNS propagation (1–48 hours).
    

###### **Step 6: Testing**
- Use a temporary domain or local hosts file to test the migrated site before DNS switch.
- Verify SSL, forms, email, and performance.

## **How It Works in the Background**

1. **Files** are physically copied from one server to another.
2. **Databases** are exported as `.sql` dumps and imported into the new server’s database engine.
3. **DNS changes** redirect traffic from the old server’s IP to the new one.
4. **WHMCS + CyberPanel** handle ongoing account management after migration.

### **Why Migrate from CWP to Zepson Cloud**

- <span style="color:rgb(255, 255, 0)">Performance</span>: Zepson Cloud uses LiteSpeed, which is faster than Apache (common in CWP setups).
- <span style="color:rgb(255, 255, 0)">Automation</span>: Integrated WHMCS makes managing accounts and billing easier.
- <span style="color:rgb(255, 255, 0)">Support & Maintenance</span>: Zepson Cloud is managed hosting, meaning you don’t have to maintain the OS and core services yourself.
- <span style="color:rgb(255, 255, 0)">Centralized Management:</span> All client sites can be managed in one WHMCS + CyberPanel environment.

## **Summary and Key Points**

- CWP and CyberPanel are both hosting control panels, but with different tech stacks and target users.
- WHMCS automates hosting account creation, billing, and support, and works with both CWP and CyberPanel.
- Migration involves moving files, databases, and DNS settings.
- Zepson Cloud’s setup offers better automation, performance, and centralized management.
- DNS changes are the final step to point users to the new hosting environment.

## **Questions & Gaps**  
- (Unclear areas or follow-up research needed).
- How to Use <span style="color:rgb(255, 255, 0)">Secure Copy and rsync </span>to transfer files between Servers.
- How to Use <span style="color:rgb(255, 255, 0)">python script and ssh</span> to transfer files between servers.


---