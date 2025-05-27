'use client'
import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { Typography } from '@mui/material';
import { styled  } from '@mui/material/styles'

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

            echo '<pre>';
            echo $this->encode_php($users);
            echo '</pre>';
        }

        $infos = include __DIR__ . DIRECTORY_SEPARATOR . '../data.php';

        echo '<pre>';
        echo $this->encode_php($infos);
        echo '</pre>';      
        
        foreach($infos as $k=>$v){
            // id of info (foreign key referencing user id)
            $id = $v['id'];
            // key of user having id = id of info
            $key_user = array_search($id, array_column($users, 'id'));
            if($key_user >= 0){
                $users[$key_user] += [
                    'job'=>$infos[$k]['job'],
                    'location'=>$infos[$k]['location']
                ];
            }
        }

        echo '<pre>';
        echo $this->encode_php($users);
        echo '</pre>';

        return $users;
    }

    private function encode_php($var, $tab = '   ',  $add = ''){
		if($var === null) return 'null';
		elseif(is_int($var) or is_float($var)) return $var;
		elseif(is_string($var)) return '"'.str_replace(['\\','"'],['\\\\','\"'], $var).'"';
		elseif(is_bool($var)) return $var ? 'true' : 'false';
		elseif($x = is_array($var) or is_object($var)){
			$o = $x ? '[' : '(object) [';
			$n = true;
			$end = empty($tab) ? '' : "\n";
			$op = empty($tab) ? '=>' : ' => ';
			$sequential = self::is_sequentialArray($var);
			foreach($var as $key => $sub){
				$o .= ($n ? '' : ',').$end.$tab.$add.($sequential ? '' : self::encode_php($key).$op).self::encode_php($sub, $tab, $add.$tab);
				$n = false;
				}
			return $o.(!$n ? $end.$tab.$add : '').']';
			}
		else return 'null';
	}
    
    public static function is_sequentialArray($val){
        if(!is_array($val)) return false;
        $i = 0;
        foreach($val as $k => $v){
            if($k !== $i) return false;
            $i++;
            }
        return true;
    }
}`;

const StyledImage = styled('img')(() => ({
    width: '100%',
    maxWidth: 'none',
    height: 'auto',
    transition: 'all 500ms ease-in-out',
    '&:hover': {
      width: '60vw',
      marginLeft: '-20rem',
      zIndex: '2',
      left: 20
    }
  }))

const page = () => {

  return (
    <main>
      <Typography variant='h6' component="div">
      🚀  Merge 2 arrays of arrays based on foreign key (id) 
      </Typography>
      <StyledImage 
        className="rounded-lg" 
        src="/merge.png" 
        width={0}
        height={0}
        sizes="100vw"
        alt=""
      />
      <CodeBlock text={text}/>
    </main>
  )
}

export default page