'use client'
import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { Typography } from '@mui/material';

const text = `<?php

class User {

    public function get_users(): ?array
    {
        $users = [];
        $copy_users = [];
        $users_products = [];
        $apiKey = 'reqres-free-v1';
        $endpoint = 'https://reqres.in/api/users';

        $curl = curl_init();

        curl_setopt_array($curl, [
            CURLOPT_URL => $endpoint,
            CURLOPT_TIMEOUT => 10,
            CURLOPT_CAINFO => __DIR__ . DIRECTORY_SEPARATOR . '../certificates/cert.crt', // with certificate
            //CURLOPT_SSL_VERIFYPEER => false, // without certificate - NOT SECURE
            CURLOPT_RETURNTRANSFER => true,
            //CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => [
                "x-api-key: $apiKey"
            ],
        ]);

        $response = curl_exec($curl);
        $err = curl_error($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
            $data = json_decode($response, true);
            $users = ($data['data']);
        }

        curl_close($curl);

        // cart API user id's having a not empty cart
        $ids = [6,11,15,20,23,33];

        // deep copy users and add cart_user_id property
        foreach($users as $user) {
            $user['cart_user_id'] = $ids[((int)$user['id'] - 1)];
            $copy_users[] = $user;
        }

        // GET PRODUCTS BY USER
        foreach ($copy_users as $user) {
            $curl = curl_init();

            curl_setopt_array($curl, [
                CURLOPT_URL => "https://dummyjson.com/carts/user/{$user['cart_user_id']}",
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_CAINFO =>  __DIR__ . DIRECTORY_SEPARATOR . '../certificates/dummycarts.crt', // with certificate
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 30,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "GET",
                CURLOPT_HTTPHEADER => [
                    "x-rapidapi-host: rawg-video-games-database.p.rapidapi.com",
                    "x-rapidapi-key: f3cd158130mshb8f1d9b8a772cf4p13df6ejsn539796cea915"
                ],
            ]);

            $response = curl_exec($curl);
            $err = curl_error($curl);

            curl_close($curl);

            if ($err) {
                echo "cURL Error #:" . $err;
            } else {
                $res = json_decode($response, true);
                $user['products'] = $res['carts'][0]['products'];
                $users_products[] = $user; 
            }
        }

        return $users_products;
    }
}`;

const page = () => {

  return (
    <main>
      <Typography variant='h6' component="div">
      🚀  Curl API 
      </Typography>
      <CodeBlock text={text}/>
    </main>
  )
}

export default page