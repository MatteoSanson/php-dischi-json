<?php

$database = file_get_contents(__DIR__ . '/dischi.json');


// struttura php
$dischi = json_decode($database);

// var_dump($dischi);



// json con dischi
header('Content-Type: application/json');
echo json_encode($dischi);