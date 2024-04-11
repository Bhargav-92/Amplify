<?php
session_start();

include('dbconnect.php');
$msg = false;
if (isset($_POST['user'])) {
    
    $user = $_POST['user'];
     $password = $_POST['password'];

    $query = "select * from user where user = '".$user."' AND password = '".$password."' limit 1";
    $result = mysqli_query($con, $query);

    if (mysqli_num_rows($result)==1) {
        header('Location: welcome.html');
    }
     else {
        $msg = "Incorrect password";     
    }
    
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./assets/amplify.png" type="image/x-icon">
    <title>Login-page</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header>
        <div class="left_bx1">
            <div class="content">
                <form method="post">
                    <h3>Login</h3>
                    <div class="card">
                        <label for="name">Name : </label>
                        <input type="text" name="user" placeholder="Enter Username..." required>
                    </div>
                    <div class="card">
                        <label for="name">Password : </label>
                        <input type="password" name="password" placeholder="Enter Password..." required>
                    </div>
                <input type="submit" value="Login" class="submit">
                <div class="check">
                    <input class="checkpop" type="checkbox" name=""><span>Remember Me.</span>
                </div>
                <p>Dont't have account yet? <a href="signup.php">Sign up</a></p>
                </form>
            </div>
        </div>        
        <div class="right_bx1">
            <img src="./login.png" alt="">
            <!-- <h3>Incorrect Password</h3> -->
            <?php
            echo('<h3>'.$msg.'</h3>');
            ?>
        </div>

    </header>
</body>
</html>