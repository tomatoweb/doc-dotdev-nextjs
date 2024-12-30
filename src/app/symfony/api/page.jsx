'use client'
import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { styled  } from '@mui/material/styles'

const text = `// Controller
<?php

namespace App\\Controller;

use App\\service\\NewsProvider;
use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\Routing\\Attribute\\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index( NewsProvider $provider ): Response
    {

        $response = $provider->getArticles();
        $articles = $response['articles'];

        return $this->render('home/index.html.twig', [
            'articles' => $articles,
        ]);
    }
}`;
const text1 = `// src/service/NewsProvider.php
<?php

namespace App\\service;

use Symfony\\Component\\DependencyInjection\\Attribute\\Autowire;
use Symfony\\Contracts\\HttpClient\\HttpClientInterface;

class NewsProvider
{

    public function __construct(
        #[Autowire('%api_news_key%')]
        private string $apikey,
        private HttpClientInterface $client
        )        
    {
        
    }

    public function getArticles() : iterable
    {
        $response = $this->client->request(
            'GET',
            'https://newsapi.org/v2/everything?q=apple&from='
              .date("Y-d-m").'&to='.date("Y-d-m", strtotime("yesterday"))
              .'&sortBy=popularity&apiKey='
              .$this->apikey
        );

        return $response->toArray();
    }

}`;
const text2 = `// template
{% extends 'base.html.twig' %}

{% block title %}Hello HomeController!{% endblock %}

{% block body %}
<style>
    .example-wrapper { margin: 1em auto; max-width: 800px; width: 95%; font: 16px/1.5 sans-serif; }
    .example-wrapper code { background: #F5F5F5; padding: 2px 6px; }
</style>

<div class="example-wrapper">
<ul>
    {% for article in articles %}
      {% if '[Removed]' not in article.title %}        
        <li>
            {{article.title}}
        </li>   
      {% endif %}
    {% endfor %}
</ul>
</div>
{% endblock %}`;

const StyledImage = styled('img')(() => ({
  width: '100%',
  maxWidth: 'none',
  height: 'auto',
  '&:hover': {
    width: '170%',
    zIndex: '2',
    position: 'relative'
  },
  transition: 'width 0.5s'
}))

const page = () => {
  return (
    <main>      
      <StyledImage 
        className="rounded-lg" 
        src="/symfony-service-api.png" 
        width={0}
        height={0}
        sizes="100vw"
        alt=""
      />
      <CodeBlock text={text}/>
      <CodeBlock text={text1}/>
      <CodeBlock text={text2}/>
    </main>
  )
}

export default page