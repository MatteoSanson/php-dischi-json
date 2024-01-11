<?php

$database = file_get_contents(__DIR__ . '/dischi.json');

$dischi = json_decode($database);

var_dump($dischi);