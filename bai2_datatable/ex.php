<?php

    $pdo = new PDO('mysql:host=localhost;dbname=bookstore','root','');
    $pdo->query('set names utf8');
    /* $kw = $_GET['n'];
    $sql = "select * from sach where tensach like '%$kw%'";
     *///echo $sql;
    $sql = "select * from sach";
    $stm = $pdo->prepare($sql);
    $stm->execute();
    $data = $stm->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
    /* $a = [ ];
    $item = ['id' => 1, 'name' => 'A', 'price' => 10];
    $a[] = $item;

    $item = ['id' => 2, 'name' => 'B', 'price' => 6];
    $a[] = $item;

    $item = ['id' => 3, 'name' => 'C', 'price' => 5];
    $a[] = $item;

     *//* echo '<pre>';
    print_r($a);
     */
    //echo json_encode($a);