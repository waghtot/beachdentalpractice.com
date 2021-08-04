<?php

// error_log('login called');
echo json_encode(true);
class Login{

    public function __construct()
    {
        return index();
    }

    public function index()
    {
        error_log('is anyone said login?');
        echo json_encode(true);
    }

}