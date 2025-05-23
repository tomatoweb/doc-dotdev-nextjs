'use client'
import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { Typography } from '@mui/material';
const text = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Brand</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" integrity="" crossorigin="anonymous">
<link rel="icon" type="image/jpg" href="{{ asset('img/favicon.ico') }}" />
<body>
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #ab89f0;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div class="mx-auto" style="width: 80%;">
    <div class="d-flex align-content-end flex-wrap mt-5">
        <?php 
        require_once dirname(__DIR__) . DIRECTORY_SEPARATOR . 'class/User.php';
        $user = new User();
        $users = $user->get_users();
        foreach($users as $user) {
            echo '<div class="row row-cols-auto">
                    <div class="card my-3" style="width: 20rem;margin: 2rem"> 
                        <img src="https://miro.medium.com/v2/resize:fit:500/1*TYMKEhU1JSCRBClgjXbplw.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">'.$user['email'].'</h5>
                            <p class="card-text">
                                <ul>';
                            foreach($user['products'] as $product) {
                                echo '<li>'. $product['title'] .'</li>';
                            };
                            echo '
                                </ul>
                            </p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            ';
        }?>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>
</html>`;

const page = () => {

  return (
    <main>
      <Typography variant='h6' component="div">
      🚀  HTML Bootstrap 5 Template 
      </Typography>
      <CodeBlock text={text}/>      
    </main>
  )
}

export default page