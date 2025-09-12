'use client'
import React from 'react'
import { Typography } from '@mui/material';
import CodeBlock from '@/app/components/CodeBlock';


const page = () => {

	return (
		<main>
			<Typography variant='h6' component="div" sx={{ marginTop: 4, marginBottom: 3 }}>
				🚀 DTO data transfer object
			</Typography>
			<div className='mb-10'>
				<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
					{`Use DTO to represent data as object that will be transfered.
					Objects that we do not need to save in DB but that we prefer to represent as object insteed of array.
					This will give a good type to our data, thus more "controllable" than an array`}
				</Typography>				
				<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
					{`For example : a contact form should receive an object (name, email address, message) that we do not need to save in DB.
					We only want to send the user message email to our organisation inbox`}
				</Typography>	
				<CodeBlock text={`// src/DTO/ContactDTO
<?php

namespace App\DTO;

use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

// Alternative with alias 
use Symfony\Component\Validator\Constraints as Assert;


/* le but des DTO est de déplacer des données dans des appels distants coûteux (web api), des données ne provenant pas de la DB */


// Alternativ with alias "Assert", without a use for each constraints
class ContactDTO
{
	#[NotBlank()]
	#[Length(min:3, max: 200)]
	public $name = '';
	
	#[NotBlank()]
	#[Email()]
	public $email = '';
	
	#[NotBlank()]
	#[Length(min:3, max:200)]
	public $message = '';
}


// Alternativ with alias "Assert", without a use for each constraints
class _ContactDTO
{
		#[Assert\NotBlank]
    #[Assert\Length(min: 3, max: 200)]
    public string $name = '';
		
		#[Assert\NotBlank]
    #[Assert\Email]
    public string $email = '';
    
		#[Assert\NotBlank]
    #[Assert\Length(min: 3, max: 200)]
    public string $message = '';
}`} />			
			</div>
		</main>
	)
}

export default page