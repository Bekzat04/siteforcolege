<?php
setcookie('user', $user['name'], time() - 3600, "/");
header('Location: /registration_p/registration.html');
