'use client'
import React from 'react'
import { Typography } from '@mui/material';
import CodeBlock from '@/app/components/CodeBlock';


const page = () => {

	const text1 = ` protected function createForm(
	string $type, mixed $data = null, array $options = []
	): FormInterface
	{
			return $this
				->container
				->get('form.factory')
				->create($type, $data, $options);
	}`;

	return (
		<main>
			<Typography variant='h6' component="div" sx={{ marginTop: 4, marginBottom: 3 }}>
				🚀 Services - the Symfony Container - Dependency Injection
			</Typography>
			<div className='mb-10'>
				<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
					{`The container is a class object containing keys and functions to instantiate the classes that we need.`}
				</Typography>
				<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
					{`For example, here in a controller that extends abstractController, we call createForm method`}
				</Typography>
				<CodeBlock text={"$form = $this->createForm(ContactType::class, $data);"} />
				<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
					{`that method from AbstractController ask the container to instantiate the class that corresponding, in the container, to the key form.factory and call the create method.`}
				</Typography>
				<CodeBlock text={text1} />
				<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
					{`Show the list of all available classes in the framework`}
				</Typography>
				<CodeBlock text={"php bin/console debug:autowiring"} />
				<CodeBlock text={"php bin/console debug:autowiring form"} />
				<CodeBlock text={`php bin/console debug:autowiring mail

Interface for mailers able to send emails synchronously and/or asynchronously.
Symfony\Component\Mailer\MailerInterface - alias:mailer.mailer`} />
				<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
					{`We can see a MailerInterface is available, we can use it like this`}
				</Typography>
				<CodeBlock text={`// ContactController.php
#[Route('/demo')]
public function demo(MailerInterface $mailer) {
	dd($mailer);
	}`} />
				<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
					{`We can create our own Services and call it in our controllers, Symfony instantiate it for us`}
				</Typography>
				<CodeBlock text={`<?php
// src/Demo.php
namespace App;
class Demo
{	
	}`} />
				<CodeBlock text={`// ContactController.php
#[Route('/demo')]
public function demo(Demo $demo) {
	dd($demo);
	}`} />
				<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
					{`How it works : config/services.yaml`}
				</Typography>
				<CodeBlock text={`//config/services.yaml
services:
# default configuration for services in *this* file
_defaults:
autowire: true      # Automatically injects dependencies in your services.
autoconfigure: true # Automatically registers your services as commands, event subscribers, etc.

# makes classes in src/ available to be used as services
# this creates a service per class whose id is the fully-qualified class name
App\:
resource: '../src/'
exclude:
- '../src/DependencyInjection/'
- '../src/Entity/'
- '../src/Kernel.php'`} />
				<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
					{`autowire: true, meens that we can inject all those classes as dependancy in the __construct of any class`}
				</Typography>
				<CodeBlock text={`// controllers/ContactController.php
namespace App;

use Symfony\Component\Mailer\MailerInterface;

class Demo
{
	public function __construct(private MailerInterface $mailer)
	{
	
	}
}'`} />
				<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
					{`Thus, we can use the Demo service in our controllers methods, and this Demo service has an injected dependency in its constructor.
	(we make it private to allow to see it in the dd() output, so it belongs to the class with the "private" keyword)`}
				</Typography>
				<CodeBlock text={`// dd($demo)
ContactController.php on line 89:
App\Demo {#6118 ▼
-mailer: 
Symfony\Component\Mailer
\
Mailer {#6290 ▼
-transport: 
Symfony\Component\Mailer\Transport
\
Transports {#8994 ▶}
-bus: null
-dispatcher: 
Symfony\Component\HttpKernel\Debug
\
TraceableEventDispatcher {#7015 …8}
}
}'`} />
				<Typography variant='body1' component="div" sx={{ marginY: 2 }}>
					{`We can also inject our own dependency (key), like this`}
				</Typography>
				<CodeBlock text={`// services.yaml
App\:
        resource: '../src/'
        exclude:
            - '../src/DependencyInjection/'
            - '../src/Entity/'
            - '../src/Kernel.php'

    # add more service definitions when explicit configuration is needed
    # please note that last definitions always *replace* previous ones
    App\Demo:
      class: App\Demo
      arguments:
        key: 'thisIsMyApiKey'`} />
				<CodeBlock text={`// controllers/ContactController.php
namespace App;

use Symfony\Component\Mailer\MailerInterface;

class Demo
{
	public function __construct(private MailerInterface $mailer, private string $key)
	{
	
	}
}'`} />
			</div>
		</main>
	)
}

export default page