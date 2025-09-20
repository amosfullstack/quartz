**MVC** stands for **Model–View–Controller**, which is a software design pattern used to separate an application into three main components. This helps keep your code **organized, reusable, and easier to maintain**.

Here’s the breakdown:

### 1. **Model** (Data and Business Logic)

- Handles data and database interactions.
    
- Defines rules, queries, and relationships.
    
- Example: A `User.php` model that retrieves users from the database.
    

```php
// Model: User.php
class User {
    public function getAllUsers($conn) {
        $sql = "SELECT * FROM users";
        return $conn->query($sql);
    }
}
```

---

### 2. **View** (User Interface)

- Responsible for displaying data to the user (HTML, CSS, sometimes JS).
    
- Doesn’t directly handle logic—it only shows what the Controller passes.
    
- Example: `users.php` view file that displays the list of users.
    

```php
<!-- View: users.php -->
<!DOCTYPE html>
<html>
<head><title>User List</title></head>
<body>
    <h1>All Users</h1>
    <ul>
        <?php foreach($users as $user): ?>
            <li><?= $user['name']; ?></li>
        <?php endforeach; ?>
    </ul>
</body>
</html>
```

---

### 3. **Controller** (Middle Layer / Request Handling)

- Acts as a bridge between **Model** and **View**.
    
- Receives user input (from URL, form, button click).
    
- Tells the Model what to do, and then chooses the correct View to display.
    

```php
// Controller: UserController.php
require 'User.php';

class UserController {
    public function index($conn) {
        $userModel = new User();
        $users = $userModel->getAllUsers($conn);
        include 'users.php'; // Pass data to the view
    }
}
```

---

### How It Works (Flow)

1. **User makes a request** (e.g., visits `example.com/users`).
    
2. **Controller** handles the request and asks the **Model** for data.
    
3. **Model** fetches data (e.g., from MySQL).
    
4. **Controller** passes the data to the **View**.
    
5. **View** displays the data to the user.
    

---

-  In PHP, frameworks like **Laravel, CodeIgniter, Symfony** use MVC as their core structure.  
- If you’re writing plain PHP, you can still apply MVC by organizing your files into **Models, Views, and Controllers** manually.
