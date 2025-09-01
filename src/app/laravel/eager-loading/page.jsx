'use client'
import { Typography } from "@mui/material";
import CodeBlock from "@/app/components/CodeBlock";
import ImageModal from "@/app/components/ImageModal";

const text =
  `public function paginateProfiles(int $page, int $limit): PaginationInterface
{
    return $this->paginator->paginate(
        $this->createQueryBuilder('r')
        ->select('r', 'p')
        ->leftJoin('r.pool', 'p'),
        $page,
        $limit
    );
}`;

const Page = () => {
  return (
    <div>
      <Typography variant="h6" sx={{ fontWeight: 500, marginBottom: 4 }}>
        🚀 Doctrine n+1 select problem
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 500, marginBottom: 4 }}>
        Par défaut, Doctrine fetch la table de la clé étrangère à la demande.
        Ici on voit un select (n+1) pour chaque pool, car on demande le pool name dans la vue.
        Ceci est prévu par Doctrine pour éviter de fetcher la table de la clé étrangère Pool pour rien
        dans le cas où on affiche pas les infos du pool (cas du proxy).
      </Typography>
      <ImageModal img={"/doctrine1.png"} />
      <Typography variant="body1" sx={{ fontWeight: 500, marginBottom: 4, marginTop: 4 }}>
        Pour éviter ces select on fera un leftjoin dans le QueryBuilder, on aura alors une seule requête SQL avec un join
      </Typography>
      <CodeBlock text={text} />
      <ImageModal img={"/doctrine2.png"} />
    </div>
  )
}
export default Page