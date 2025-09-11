'use client'
import CodeBlock from '@/app/components/CodeBlock'
import { Typography } from '@mui/material'
import ImageModal from "@/app/components/ImageModal";

const text = `<?php

	$users = [];
	$apiKey = 'reqres-free-v1';
	$endpoint = 'https://reqres.in/api/users';

	$curl = curl_init();

	curl_setopt_array($curl, [
		CURLOPT_URL => $endpoint,
		CURLOPT_TIMEOUT => 10,
		//CURLOPT_CAINFO => __DIR__ . DIRECTORY_SEPARATOR . '../certificates/cert.crt', // with certificate
		CURLOPT_SSL_VERIFYPEER => false, // without certificate - NOT SECURE
		CURLOPT_RETURNTRANSFER => true,
		//CURLOPT_CUSTOMREQUEST => "GET",
		CURLOPT_HTTPHEADER => [
			"x-api-key: $apiKey"
		],
	]);

	$response = curl_exec($curl);
	$err = curl_error($curl);

	curl_close($curl);

	if ($err) {
		echo "cURL Error #:" . $err;
	} else {
		$data = json_decode($response, true);
		$users = ($data['data']);
	}

	// Serialize (json_encode) and put a second array in a file
	// the id (foreign key) here refers the to user id (primary key) from the $users array
	$data = [
		[
			"id" => 1,
			"job" => "developer",
			"location" => "Central"
			],
		[
			"id" => 3,
			"job" => "manager",
			"location" => "Germany"
			],
		[
			"id" => 5,
			"job" => "support",
			"location" => "USA"
			],
		[
			"id" => 6,
			"job" => "admin",
			"location" => "China"
			]
	];

	file_put_contents('data.php', json_encode($data) );

	$infos = json_decode(file_get_contents('data.php') , 1);  // 1 Array , 0  Object

	foreach ($infos as $k => $v) {
		// id is the foreign key referencing user id
		$id = $v['id'];
		// key of user having id = id of info
		$key_user = array_search($id, array_column($users, 'id'));
		if ($key_user >= 0) {
			$users[$key_user] += [
				'job' => $infos[$k]['job'],
				'location' => $infos[$k]['location']
			];
		}
	};

	print "<pre>";
	print_r($users);
	print "</pre>";

`;

const Page = () => {
  
  return (
    <main>
      <Typography variant='h6' component="div">
        🚀  Merge 2 data arrays based on foreign key
      </Typography>
      <Typography variant='body2' component="div">
      This is a written test that I coded by a client interview (MediaWind in Nivelles).
      </Typography>
      <Typography variant='body2' component="div">
      {`Make 2 curl's to 2 api's, unserialize with json_decode and merge the 2 results arrays on id key, if exists.`}
      </Typography>
      <ImageModal img={"/merge.png"} />
      <Typography variant='h6' component="div">
        🚀  Solution : copy this file to some-project/index.php and serve (php -S localhost:8000)
      </Typography>
      <CodeBlock text={text} />
    </main>
  )
}

export default Page