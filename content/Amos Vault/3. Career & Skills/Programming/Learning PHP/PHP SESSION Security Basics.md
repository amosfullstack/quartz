___

Tags: #summary, #securiy, #sessions
Date: 2025-08-20  
Source: Related Note | External Source(URL)

---

# PHP SESSION Security Basics  

## **Overview**  
- SESSION Security involves ensureing that others users or other computers are not able to steal our session data.
- When we create the session and the session id is stored on the sever, we have to make sure that the Id stored on the server points to us only.
- So the <span style="color:rgb(255, 148, 148)">Session Id</span> Cookie inside our <span style="color:rgb(255, 148, 148)">browser,</span> should only <span style="color:rgb(255, 148, 148)">match</span> with the Session Id inside the <span style="color:rgb(255, 148, 148)">Server</span>.
- If the other user can hijack our session Id then they can go in and steal our session data.

## Potential Ways that SESSION can be hijacked.
i. <span style="color:rgb(255, 255, 0)">Session Id Sniffing</span>: The attacker intercepts unsecure traffic, hijacks the your session Id and Impersonates you as the user remotely inside their computer.

ii. <span style="color:rgb(255, 255, 0)">Session Id Prediction</span>: The attacker tries to guess what kind of session Id you are using. So it is important to generate a strong Session Id  that can not predicted.

iii. <span style="color:rgb(255, 255, 0)">Session fixation:</span> The attacker makes you use the cookie that they have on their computer. Example, they send you a link to website that has the cookie attatched that they have on their computer.

iv. <span style="color:rgb(255, 255, 0)">Cross Site Scripting</span>: The attacker tries to inject javascript to your website to steal the cookies


### Best Practices for Implementing Session Security.
i. Make Sure you <span style="color:rgb(255, 148, 148)">Validate and Sanitize </span>user data whenever you have anything to do with cookies.
ii. Do not Store any Sorts of <span style="color:rgb(255, 148, 148)">sensitive Data</span> inside  the session variables eg: address,phone,email etc. Bcz if the attacker gains access session data then they have access to personal Information.
iii. <span style="color:rgb(255, 148, 148)">Delete</span> the  Session data that u do not want to use any more.


###### Session Security in Coding
- Some of the session security can be done by configuring the php.ini file inside the server. But the can also be done manually when coding.

i. Setting up the Session <span style="color:rgb(255, 148, 148)">Use Only Cookies</span>.
- This makes sure that any Session Id can only be passed-in  using session cookies and not may be through the url or other way. This can prevent Session fixation.
Implementation:
- Create a <span style="color:rgb(255, 255, 0)">config.php</span> file inside the codebase. This can be included in any page using require_once when needed.
```php
<?php

//Make it true..,It can alse be set inside php.ini,but here we use code.
ini_set('session.use_only_cookies',1);

//This makes our session use the Id that was created by our server inside our website ONLY
ini_set('session_use_strict_mode',1);

//Create cookie parameters to make it more secure
//We create an array and define a bunch of parameters inside it
session_set_cookie_params([
     'lifetime'=>1800, //Make the cookie destroyed and unusable after a certain time p.
     'domain'=>'localhost' //The Cookie will work only inside this particular domain
     'path'=>'/' //Enter a subdirectory where the cookie shall be running inside ur webst.
     'secure'=>true, //Only run this cookie inside a secure website ie https connection
     'httponly'=>true, //Restrict any script sort of script access from our client.
]);

//Now After the Above, Start the Session
session_start(); //the session id is generated

//Regenerate the session Id here to make it a stronger version 
session_regenerate_id(true);

//But, the above Id regeneration is not continuoes.
//Alternative
//Below is the block of Code the regenerate the Id after amount of time so that the attacker can not use it.

if(!isset($_SESSION['last_regeneration'])){
    
    session_regenerate_id(true);
    $_SESSION['last_regeneration'] = time();//This checks the amount of time passed since we generated our last id.
}
else{
     $interval = 60 * 30;//time to pass before we regenerate session id again(60secs times 30) that is 30mins
     
     if(time()-$_SESSION['last_regeneration]>=$interval){
          
          session_regenerate_id(true);
          $_SESSION['last_regeneration] = time();
     }
}

 ?>
```

From the session id regeneration block of code:
>  If there is notsession varible named last_regeneration, regenerate session id and then create a last_regeneration variable and set its value to the current time.
>  
>  If the current time minus the last regeneration is greater than the interval, regenerate the session id, then set the last regeneration to be the current time.
>

- Basically We are just Regenerating our Session id Every 30 minutes.


## Summary
- There is more to find out about Session security ie <span style="color:rgb(255, 255, 0)">session_create_id()</span>.
## **Connections**  


---