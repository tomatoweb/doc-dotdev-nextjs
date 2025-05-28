'use client'
import React, { useState } from 'react'
import { Typography } from "@mui/material";
import CodeBlock from "@/app/components/CodeBlock";
import ImageModal from "@/app/components/ImageModal";
import Image from "next/image";

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

  const [popStatus, setPopStatus] = useState(false);
  const [popStatus1, setPopStatus1] = useState(false);

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

      <ImageModal
        popStatus={popStatus}
        img={"/doctrine1.png"}
        closePop={(status) => setPopStatus(status)}
      />

      <Image
        onClick={() => setPopStatus(true)}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto', cursor: 'zoom-in' }}
        className="h-auto rounded-lg"
        src="/doctrine1.png"
        alt=""
      />
      <Typography variant="body1" sx={{ fontWeight: 500, marginBottom: 4, marginTop: 4 }}>
        Pour éviter ces select on fera un leftjoin dans le QueryBuilder, on aura alors une seule requête SQL avec un join
      </Typography>
      <CodeBlock text={text} />

      <ImageModal
        popStatus={popStatus1}
        img={"/doctrine2.png"}
        closePop={(status) => setPopStatus1(status)}
      />

      <Image
        onClick={() => setPopStatus1(true)}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto', cursor: 'zoom-in' }}
        className="h-auto rounded-lg mb-10"
        src="/doctrine2.png"
        alt=""
      />
    </div>
  )
}
export default Page