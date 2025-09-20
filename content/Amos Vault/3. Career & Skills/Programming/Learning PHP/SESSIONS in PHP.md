
---

Tags: #summary, #topic/subject, #sessions
Date: 2025-08-19  
Source: Related Note | External Source(URL)

---

# SESSIONS in PHP  

## **Overview**  
- Learn the meaning of Sessions.
- How to create sessions.

## **Key Points**  

<span style="color:rgb(255, 255, 0)">SESSION</span>: Refer to the way that the website remembers information across all the pages inside the website.

- In session information is stored in the website across multiple pages atleast for a <span style="color:rgb(255, 148, 148)">longer period </span>of time when the user is<span style="color:rgb(255, 148, 148)"> CURRENTLY</span> using the website. This is different from the get and POST methods where data is sent across pages but is just temporary.

- A COOKIE: Is the information that is stored locally inside the browser not inside the server. If we start a session inside the browser, we generate something called a <span style="color:rgb(255, 148, 148)">SESSION ID COOKIE</span>. The server places the session Id cookie so as to remember which user you are, and which session variables you have been assigned.

Starting a session:
```php
session_start();
```
> The above method starts a session in the sepecific page, the <span style="color:rgb(255, 148, 148)">PHPSESSID</span> is generated and stored inside the browser.(inspect then storage to see it)
> If the method is written again in the other page,means <span style="color:rgb(255, 148, 148)">both pages</span> will have the <span style="color:rgb(255, 148, 148)">same session</span>.
> Implies that the pages will store and remember the<span style="color:rgb(255, 148, 148)"> same data</span>.

- The session ID cookie helps the server to pinpoint which user is which, because there may be many users using the website.
- If PHPSESSID Is deleted then the server no longer knows who you are.
- When the browser is closed, it automatically deleted the session cookies.
- There are some session security issues that include <span style="color:rgb(255, 148, 148)">SESSION HIJACKING</span>

### Creating SESSION variables.
- This involves creating variables that will be stored inside the browser during the user session_start.
- This is done using the session super global.ie
```php
session_start();
$_SESSION["username"]= "Amos"; 
```
> From above, means I have a session variable "username" that is equal to the string "amos".Then this information is going to be remembered on all pages that have session_start at the top of the PAGE.
> 
> NB: Session variables are declared once and remembered across all the pages, there is no need of re-declarion.

Example:
index.php
```php
session_start();
$_SESSION["username"]="Amos";//Declared on first page
```

index2.php
```php
session_start();
//No any variable declared.
```
> Since varibale is declared on only index.php. But both pages have session started.Then the variables will be remembered on both pages.

### Deleting Data inside session variables.
- If you have a bunch of data inside the session variables how can you delete them.
i. Use <span style="color:rgb(255, 255, 0)">unset()</span> method.
> This is for deleting one session data.
```php
$_SESSION["username"]="Amos";
unset($_SESSION["username"]); //This deletes the data 
```


- What if I have more than one session variable that i want to delete and I want to PURGE all of them?
ii. Use <span style="color:rgb(255, 255, 0)">session_unset()</span> method.
> This is going to purge all the data inside our session , so that we cant see it inside our website.
```php
session_start();
$_SESSION["username] = "Amos";

session_unset();
```


- What if I want to stop the session from running inside our page.
iii. Use <span style="color:rgb(255, 255, 0)">session_destroy()</span> method.
- So, I want to stop the session from running again.
- This unsets the SESSION ID on the server and not the SESSION ID COOKIE on the browser.
- Session destroy will purge all the data but you cant see the effect until you access another page.

iv. To complete destroy the session and unset the session variables, use the previous methods simultaneously. ie
```php
session_unset();
session_destroy();
```


## **Examples & Applications**  
- (Real-world use cases, analogies, or personal connections)  
i. <span style="color:rgb(255, 255, 0)">LOG IN system</span>, the website has to remember the logged in user across all the pages.

ii. <span style="color:rgb(255, 255, 0)">Shopping Cart</span>, the website has to remember across all the  pages what Item was put inside the cart.

## **Connections**  
- Links to other notes: 
- [[PHP SESSION Security Basics]]
