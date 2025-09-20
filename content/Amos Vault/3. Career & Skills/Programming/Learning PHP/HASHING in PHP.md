
---

Tags: #summary, #topic/subject, #hashing
Date: 2025-08-20  
Source: Related Note | External Source(URL)

---

# HASHING in PHP  

## **Overview**  
- Learning the meaning of hashing, how it is done and its importance.


## Concept of Hashing.
- Hashing is the important security concept.
- Provide security when inserting data that are sensitive into the database.
- Incase of inseting sensitive data such as passwords into the database, it should be encrypted. We are not supposed to be able to tell what data actually it is.

<span style="color:rgb(255, 0, 255)">HASHING</span> : Refers to the use of algorithims to convert any string of text into a fixed length string with random characters.
- Salt: the text / characters that are combined with the string you want to hash before hashing algorithim does its thing.

Some hashing algorithims:
i. SHA256
ii. MD5

### General Hashing inside the website.
Example of general purpose hashing without using algorihim:(<span style="color:rgb(255, 255, 0)">hashing.inc.php</span>)
```php
<?php
$sensitiveData = "Amos";
$salt = bin2hex(random_bytes(16));//Generate random Salt
$peper = "ASecretPeperString";

$dataToHash = $sensitiveData.$salt.$peper;//fuse data,salt and peper

$hash = hash("sha256",$dataToHash); //Use hash function and hash the data by giving it the algorithim to use

//Echo to see how they have been hashed.
echo $hash;

```

From the code snippet:
> We have a salt and a paper, we fuse this together in order to make our hashing more secrue.
> Then hash the fused using the hashing algorithim.

For Verification:
- The salt and the hash are being stored in the database or any storage system.
- Then they will be compared with the data that the user submits
- ie:
```php

$sensitiveData = "Amos"; //We must have the sensitive data submitted by the user.

$storedHash; //Run the query to grab the stored hash from the database
$toredSalt;  //From the database
$peper = "ASecretpeperString"; //Remember the paper also

$dataToHash = $sensitiveData . $storedSalt . $peper; //Fuse again

$verificationHash = hash("sha256",$dataToHash); //Hash the data 

//Compare the the Stored Hash and the Verification hash

if($storedHash===$verificationHash){
      echo "The data are the same.";
}
else{
     echo "The data are not the same.";
}
```

- The hashing above is more complex, this is what you will do if you want to hash something that is <span style="color:rgb(255, 0, 255)">not password.</span>
- Can be used to hide sensitive data eg <span style="color:rgb(255, 255, 0)">name</span>,<span style="color:rgb(255, 255, 0)">email</span>,<span style="color:rgb(255, 255, 0)">financial data</span> .


### Password Hashing.
- Here we are going to use a hashing function that is built inside php in order to hash a password.
- <span style="color:rgb(255, 255, 0)">password_hash() </span>: This is going to automatically apply the salt and paper and make the password into gibrish unreadable format.

- The algorithims used inside password_hash()
      i. PASSWORD_DEFAULT
      ii. PASSWORD_BCRYPT
  ie: 
```php

$pwd = 1234; //Can be ,may be from the form,using the post method
password_hash($pwd,PASSWORD_DEFAULT);
    //or
password_hash($pwd,PASSWORD_BCRYPT);

```

Alternative: (<span style="color:rgb(255, 148, 148)">add cost</span>)
- You can add the cost as the parameter in the <span style="color:rgb(255, 255, 0)">password_hash()</span> function, which makes more strong encryption.
- It is advised to be a number between 10 and 12, it is going to make the hacker delay to decrypt the password or make it impossible.
- It must be submitted as an array(the cost), the raw interger will bring an error.
ie:
```php
$pwdSignup = "amos2323";

$options = [
   'cost'=>12
]

$hashedPwd = password_hash($pwdSignup,PASSWORD_BCRYPT,$options);//Store it in Database;
```

<span style="color:rgb(0, 176, 80)">Password Verification During User Login.</span>
- After signup the hashed password is stored inside the database.
- So, during login. The password submitted by user should be also hashed and compared to the password hash existing in the database.
- We use <span style="color:rgb(255, 255, 0)">password_verify()</span> .
ie:
```php
$pwdLogin = "amos2324";

$password_verify($pwdLogin,$hashedPwd); //This will return either true or false.
//Are these true the same? True or False.

if($password_verify($pwdLogin,$hashedPwd)){
     echo "They are the Same";
     //You can write code here to verify Login
}
else{
       echo "They are not the same";
       //Code here to show that login has failed.
}

```
## **Key Points**  
1. Point 1 (core concept, evidence, or detail)  
2. Point 2  
3. Point 3  

## **Examples & Applications**  
- (Real-world use cases, analogies, or personal connections)  

## **Connections**  
- Links to other notes: Related Note 1, Related Note 2
- Contrast with: Opposing/Alternative Idea

## **Questions & Gaps**  
- (Unclear areas or follow-up research needed)  

## **Quotes**  
> "Notable quote from source"  : Author/Source(URL)  

## **Action Items**  
- [ ] Follow up on: task
- [ ] Explore: Linked Topic

---