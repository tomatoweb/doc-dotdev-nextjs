import { Box, Link, Typography } from "@mui/material";
import CodeBlock from "@/app/components/CodeBlock";

const text0 =
`λ php bin/console debug:config

Available registered bundles with their extension alias if available
====================================================================

 ------------------------------- ---------------------------
  Bundle name                     Extension alias
 ------------------------------- ---------------------------
  DebugBundle                     debug
  DoctrineBundle                  doctrine
  DoctrineMigrationsBundle        doctrine_migrations
  FrameworkBundle                 framework
  KnpPaginatorBundle              knp_paginator
  MakerBundle                     maker
  MercureBundle                   mercure
  MonologBundle                   monolog
  SecurityBundle                  security
  StimulusBundle                  stimulus
  SymfonyCastsVerifyEmailBundle   symfonycasts_verify_email
  TurboBundle                     turbo
  TwigBundle                      twig
  TwigExtraBundle                 twig_extra
  WebProfilerBundle               web_profiler
  WebpackEncoreBundle             webpack_encore
 ------------------------------- ---------------------------`;
const text =
`// config/packages/knp_paginator.yaml
knp_paginator:
    convert_exception: false            # throw a 404 exception when an invalid page is requested
    page_range: 5                       # number of links shown in the pagination menu (e.g: you have 10 pages, a page_range of 3, on the 5th page you'll see links to page 4, 5, 6)
    remove_first_page_param: false      # remove the page query parameter from the first page link
    default_options:
        page_name: page                 # page query parameter name
        sort_field_name: sort           # sort field query parameter name
        sort_direction_name: direction  # sort direction query parameter name
        distinct: true                  # ensure distinct results, useful when ORM queries are using GROUP BY statements
        filter_field_name: filterField  # filter field query parameter name
        filter_value_name: filterValue  # filter value query parameter name
        page_out_of_range: ignore       # ignore, fix, or throwException when the page is out of range
        default_limit: 10               # default number of items per page
    template:
        pagination: '@KnpPaginator/Pagination/tailwindcss_pagination.html.twig'     # sliding pagination controls template
        rel_links: '@KnpPaginator/Pagination/rel_links.html.twig'    # <link rel=...> tags template
        sortable: '@KnpPaginator/Pagination/sortable_link.html.twig' # sort link template
        filtration: '@KnpPaginator/Pagination/filtration.html.twig'  # filters template`;
const text11 =
`λ php bin/console debug:config knp_paginator

Current configuration for extension with alias "knp_paginator"
==============================================================

knp_paginator:
    convert_exception: false
    page_range: 5
    remove_first_page_param: false
    default_options:
        page_name: page
        sort_field_name: sort
        sort_direction_name: direction
        distinct: true
        filter_field_name: filterField
        filter_value_name: filterValue
        page_out_of_range: ignore
        default_limit: 10
    template:
        pagination: '@KnpPaginator/Pagination/tailwindcss_pagination.html.twig'
        rel_links: '@KnpPaginator/Pagination/rel_links.html.twig'
        sortable: '@KnpPaginator/Pagination/sortable_link.html.twig'
        filtration: '@KnpPaginator/Pagination/filtration.html.twig'
    page_limit: null`;
const text10 =
`@tailwind base;
@tailwind components;
@tailwind utilities;


.pagination {
  span a{
    display: inline-block;
    width: 40px;
    padding: 5px;
    border-radius: 18px;
    background-color: rgb(33, 51, 70);
    text-align: center;
  }
}
.pagination {
  .current {
    display: inline-block;
    width: 40px;
    padding: 5px;
    border-radius: 18px;
    background-color: rgb(96, 102, 110);
    text-align: center;
  }
}`;
const text1 =
` #[Route('/profiles', name: 'profile.list')]                                            
    public function index(Request $request): Response   
    {

        /* Autre manière d'accéder à un service que via l'injection de dpdce: 
        via le container et son alias (donc pas par injection), 
        voir la commande debug:autowiring pour connaître les alias des services */
        $serviceForm = $this->container->get('form.factory'); // ok car le service est public, on peut y accéder par le container de Sf

        // $serviceValid = $this->container->get('validator');   // Error! car le service n'est pas public, on doit l'injecter par construction: soit dans la méthode (aka action), soit dans le constructeur

        // Attention: nota bene, l'instance retournée par le container est un singleton.
        // donc si on modifie une prop de l'instance dans une classe, cette prop est modifiée aussi dans les autres classes.
        // voir la config dans config/packages/knp_paginator.yaml
        $page = $request->query->getInt('page', 1);

        $limit = 8;
        
        $profiles = $this->repository->paginateProfiles($page, $limit);

        $maxPage = ceil($profiles->getTotalItemCount() / $limit);

        return $this->render('profile/index.html.twig', [
            'profiles' => $profiles,
            'maxPage' => $maxPage,
            'page' => $page
        ]);
    }`;
const text2 =
`// src/Repository/ProfileRepository.php
<?php

namespace App\Repository;

use App\Entity\Profile;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Knp\Component\Pager\PaginatorInterface;

/**
 * @extends ServiceEntityRepository<Profile>
 */
class ProfileRepository extends ServiceEntityRepository
{

    public function __construct(ManagerRegistry $registry, private PaginatorInterface $paginator)
    {
        parent::__construct($registry, Profile::class);
    }


    public function paginateProfiles(int $page, int $limit): PaginationInterface
    {
        return $this->paginator->paginate(
            $this->createQueryBuilder('r')
            ->select('r', 'p')
            ->leftJoin('r.pool', 'p'),
            $page,
            $limit
        );
    }`;

const page = () => {
  return (
    <div>
      <Typography variant="h6" sx={{fontWeight: 500, marginBottom:4}}>
        🚀 KPN Paginator vs. Doctrine Paginator
      </Typography>
      <Box>
        <Link
          href={"https://www.doctrine-project.org/projects/doctrine-orm/en/3.3/tutorials/pagination.html"}
          sx={{color: 'link.main', fontSize:18}}
        >
          Doctrine Paginator documentation online
        </Link>
      </Box>
      <Box>
        <Link
          href={"https://github.com/KnpLabs/KnpPaginatorBundle"}
          sx={{color: 'link.main', fontSize:18}}
          >
          KNP Paginator documentation online
        </Link>
      </Box>
      <Typography variant="h6" sx={{fontWeight: 500, marginBottom:4, marginTop:6}}>
        KPN Paginator
      </Typography>
      <CodeBlock text={"composer require knplabs/knp-paginator-bundle"} />
      <Typography variant="p" sx={{fontWeight: 500, marginBottom:4, marginTop:6}}>
        Check the alias for the new created bundle, it should be knp_paginator
      </Typography>
      <CodeBlock text={text0} />
      <Typography variant="p" sx={{fontWeight: 500, marginBottom:4, marginTop:6}}>
        Create config file config/packages/knp_paginator.yaml
      </Typography>
      <CodeBlock text={text} />
      <Typography variant="p" sx={{fontWeight: 500, marginBottom:4, marginTop:6}}>
        Or if you prefer to customize CSS, comment the lines of the template: key in knp_paginator.yaml
        and add this css in app.scss
      </Typography>
      <CodeBlock text={text10} />
      <Typography variant="p" sx={{fontWeight: 500, marginBottom:4, marginTop:6}}>
        Check if the configuration knp_paginator is integrated in Sf
      </Typography>
      <CodeBlock text={text11} />
      <Typography variant="p" sx={{fontWeight: 500, marginBottom:4, marginTop:6}}>
        Controller
      </Typography>
      <CodeBlock text={text1} />
      <Typography variant="p" sx={{fontWeight: 500, marginBottom:4, marginTop:6}}>
        Repository
      </Typography>
      <CodeBlock text={text2} />
      <Typography variant="p" sx={{fontWeight: 500, marginBottom:4, marginTop:6}}>
        clear cache
      </Typography>
      <CodeBlock text={"php bin/console cache:clear"} />
    </div>
  )
}
export default page