<!DOCTYPE html>

<html>
    <?php
    include 'menu/menu.php';
    ?>
    <head>
        <meta charset="ISO-8859-1">

        <title>LogIn</title>
        <link href="css/login.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div class="wrapper">
            <div class="form-signin">       
                <h2 class="form-signin-heading">Por favor Ingrese</h2>
                <input id="username" type="email" class="form-control" name="username" placeholder="correo" required="" autofocus="" />
                <input id="password" type="password" class="form-control" name="password" placeholder="Password" required=""/>      

                <button id="btnLogin" class="btn btn-lg btn-primary btn-block" >Login</button>   
                <button id="btnLogou" class="btn btn-lg btn-primary btn-block hide" >Logout</button>   
            </div>
        </div>

        <script src="js/util.js"></script>
        <script src="js/auth.js"></script> 
    </body>
</html>