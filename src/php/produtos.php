<?php

require_once "./db.connect.php";

$result = query("SELECT * FROM produtos");
$produtos = [];

while($row = mysqli_fetch_assoc($result)) {
    $produtos[] = $row;
}

header("Access-Control-Allow-Origin:*");
echo json_encode($produtos);


?>