<?php

if(isset($_POST)){
    $to      = 'info@famd.org.uk';
    $subject = 'Customer Enquiry';

    if(isset($_POST['phone']) && !empty($_POST['phone'])){
        $message = '<p><h4>Phone: </h4>'.$_POST['phone'].'</p>';    
    }else{
        $message = '';
    }

    $headers = 'From: ' . $_POST['email'] . "\r\n" .
        'Reply-To: '. $_POST['email']  . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

    $res = array();
    $res['code'] = '6000';
    $res['message'] = 'Success';
    
    echo json_encode($res);
    die;
}