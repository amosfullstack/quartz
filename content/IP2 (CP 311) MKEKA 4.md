
# CP311 - Internet Programming and Applications II
## JSON Data Processing Examples

---

**Question: Fetch data from table and display it in JSON format on the browser.**
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> //array for data fetching
> $data=array();
>
> //database connection
> $con=mysqli_connect("localhost","root","","uis_db");
>
> //selecting data from databases table
> $sql="select * from student_tb";
> $result=mysqli_query($con,$sql);
> $i=0;
>
> //while loop for data fetching in table
> while($row=mysqli_fetch_array($result)){
>     $data[$i]['reg']=$row['regno'];
>     $data[$i]['fname']=$row['fname'];
>     $data[$i]['mname']=$row['mname'];
>     $data[$i]['lname']=$row['lname'];
>     $data[$i]['email']=$row['email'];
>     $data[$i]['phone']=$row['phone'];
>     $data[$i]['program']=$row['program'];
>     //incrementing data
>     $i++;
> }
>
> //converting data to json format
> $json_data=json_encode($data,JSON_PRETTY_PRINT);
>
> //put data to file
> file_put_contents('api_data.json',$json_data);
>
> echo $json_data;
> ?>
> ```

---

**Question: Decode data from JSON and display it in a table.**
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <!DOCTYPE html>
> <html>
> <head>
>     <title></title>
> </head>
> <body>
>     <table border="1">
>         <th>names</th>
>         <th>email</th>
>         <th>program</th>
>
>         <?php
>         //viewing data using api
>         //api link or json file
>         $link="http://localhost/ue/api.php";
>         $js_data=file_get_contents($link);
>
>         //decode json file format
>         $decode_data=json_decode($js_data, true);
>
>         //foreach loop to view data
>         foreach ($decode_data as $rows) {
>         ?>
>             <tr>
>                 <td><?php echo $rows['fname']; ?></td>
>                 <td><?php echo $rows['email']; ?></td>
>                 <td><?php echo $rows['program']; ?></td>
>             </tr>
>         <?php
>         }
>         ?>
>     </table>
> </body>
> </html>
> ```

---

**Question: Display data from JSON file or given end point link or IP and decode then insert to database.**
*(10 Marks)*

> [!Tip]- Answer (Click to show)
> ```php
> <?php
> //connect to database
> $con=mysqli_connect("localhost","root","","helloguy");
>
> //check if connection is successful
> if(!$con){
>     die('Could not connect: '.mysqli_error());
> }
>
> //check if the request method is POST
> if($_SERVER['REQUEST_METHOD'] == 'POST'){
>
>     //get the data from the request body
>     $data = json_decode(file_get_contents("z/api/v2/sr2/njonjo.json:"), true);
>
>     //validate the data (e.g. check if all required fields are present)
>     if(isset($data['email']) && isset($data['password'])){
>
>         //escape the data to prevent SQL injection attacks
>         $email = mysqli_real_escape_string($con, $data['email']);
>         $password = mysqli_real_escape_string($con, $data['password']);
>
>         //hash the password (for security reasons)
>         $hashed_password = password_hash($password, PASSWORD_DEFAULT);
>
>         //insert the data into the database
>         $sql = "INSERT INTO user (email, password) VALUES ('$email', '$hashed_password')";
>         $result = mysqli_query($con, $sql);
>
>         //close the database connection
>         mysqli_close($con);
>     }
> }
> ?>
> ```

---

*End of Code Examples*