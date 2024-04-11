
<?php
session_start();

include('dbconnect.php');
$msg = false;
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user = $_POST['user'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $re_password = $_POST['re_password'];

    if (!empty($user) && !empty($email) && !empty($password)  && !is_numeric($user)) {
        if ($password === $re_password) {
            $query = "insert into user (user, email, password) VALUES('$user','$email','$password');";
            mysqli_query($con, $query);
            header("Location: index.php");
        }
        else{
             $msg = "Password doesn't Match";
        }
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
    <title>Sign-up-page</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header>
        <div class="left_bx1">
            <div class="content">
                <form  method="post">
                    <h3>Sign Up</h3>
                    <div class="card">
                        <label for="name">Name : </label>
                        <input type="text" name="user" placeholder="Enter Your Username..." required>
                    </div>
                    <div class="card">
                        <label for="email">Email : </label>
                        <input type="email" name="email" placeholder="Enter Your email..." required>
                    </div>
                    <div class="card">
                        <label for="name">Password : </label>
                        <input type="password" name="password" placeholder="Enter Your Password..." required>
                    </div>
                    <div class="card">
                        <label for="name">Re-Password : </label>
                        <input type="password" name="re_password" placeholder="Enter Your Re-Password..." required>
                    </div>
                <input type="submit" value="Sign Up" class="submit" name="btnsub">
                <div class="check">
                    <input class="checkpop" type="checkbox" name=""><span>Remember Me.</span>
                </div>
                <p>You have account? <a href="index.php">Login</a></p>
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