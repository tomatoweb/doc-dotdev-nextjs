import { Alert, Typography } from "@mui/material";
import CodeBlock from "@/app/components/CodeBlock";

const text1 = 
`# the URL of the Mercure hub, used by the app to publish updates (can be a local URL)
MERCURE_URL=http://localhost/.well-known/mercure

# The public URL of the Mercure hub, used by the browser to subscribe and connect
MERCURE_PUBLIC_URL=http://localhost/.well-known/mercure

# The secret used to sign the JWTs
MERCURE_JWT_SECRET="demoSecretKey"`;

const text2 = 
`<?php
        namespace App\\Controller;

        use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
        use Symfony\\Component\\HttpFoundation\\Response;
        use Symfony\\Component\\Mercure\\HubInterface;
        use Symfony\\Component\\Mercure\\Update;
        use Symfony\\Component\\Routing\\Attribute\\Route;

        class PublishController extends AbstractController
        {
            #[Route('/publish', name: 'publish')]
            public function publish(HubInterface $hub): Response
            {
                $update = new Update(
                    'https://example.com/books/1',
                    json_encode(['status' => 'OutOfStock'])
                );

                $hub->publish($update);

                return new Response('published!');
            }
        }`;
const text3 = 
`// templates/home/index.html.twig

        {% extends 'base.html.twig' %}

		{% block title %}Hello HomeController!{% endblock %}

		{% block body %}

		<div class="w-full h-[100vh]" style="opacity: 0.5; background-image:url('{{ asset('images/background.png') }}'); background-repeat: no-repeat; background-attachment: fixed; background-position: center;"> 

		<h2 id="msg" style='color: Crimson'></h2>
		</div>

		{% endblock %}

		{% block javascripts %}

		    {{ encore_entry_script_tags('app') }}   
		    
		    <script>
		      const eventSource = new EventSource("{{ mercure('https://example.com/books/1')|escape('js') }}");
		      eventSource.onmessage = event => {
		        // Will be called every time an update is published by the server
		        message = JSON.parse(event.data).status;
		        document.getElementById('msg').innerHTML += message += '<br>';
		      } 
		    </script>

		{% endblock %}`;
const text4 = 
`{ ..., "caller":"mercure/subscribe.go:204","msg":"New subscriber","subscriber":{"id":"urn:uuid:c1339793-1fb5-48ba-a437-4c7c8ba5eea9","last_event_id":"","remote_addr":"[::1]:54068","topics":["https://example.com/books/1"]}}`;


const page = () => {
  return (
    <div>
      <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4}}>🚀 Pushing Data to Clients Using the Mercure Protocol</Typography>
      <CodeBlock text={"composer require mercure"} />
      .env file :
      <CodeBlock text={text1} />     
      Create PHP, JS and HTML files :
      <CodeBlock text={text2} />
      <CodeBlock text={text3} />
      <p>Open a Powershell CLI in mercure directory</p> 
      <p>( List Mercure options:  .\mercure.exe --help)</p>
      <CodeBlock text={".\\mercure.exe run --jwt-key 'demoSecretKey' --cors-allowed-origins 'http://localhost:8000' --allow-anonymous"} />
      <p>Or Open a Cmder CLI in mercure directory</p> 
      <p>(url without quotes)</p>
      <CodeBlock text={".\\mercure.exe run --jwt-key 'demoSecretKey' --cors-allowed-origins http://localhost:8000 --allow-anonymous"} />
      <Alert color="warning" sx={{fontSize: '1rem'}}>
        Stop the Wamp Apache service (e.g. Wamp), to allow Mercure Protocol to listen to clients browser HTTP Requests on localhost !
      </Alert>
      And now we can start the PHP built-in server :
      <CodeBlock text={"php -S localhost:8000 -t public"} />
      <p>Open frontend in browser  http://localhost:8000/client</p>
      <p>We can see in the log powershell that the client has just subscribed:</p> 
      <CodeBlock text={text4} />
      <p>Go to publish : http://localhost:8000/publish</p>
      <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4, marginTop: 5}}>
        🚀 Each refresh from localhost:8000/publish will automaticaly update the content of frontend localhost:8000/home via the Mercure hub
      </Typography>
    </div>
  )
}
export default page