import { Typography } from "@mui/material";

const page = () => {
  const text = 
  `^1.2.3 : jusque 1.999.999
~1.2.3 : jusque 1.2.999

MAJOR.MINOR.PATCH, on incrémentera :

MAJOR lorsque on a apporté des modifications d'API INcompatibles.

MINOR lorsque on a ajouté des fonctionnalités rétro-compatibles.

PATCH lorsque  pn a effectué des bugs/corrections rétrocompatibles.



Des étiquettes supplémentaires pour les métadonnées de pré-version et de build sont disponibles en tant qu'extensions du format MAJOR.MINOR.PATCH.

par exemple : 2.0.0.2A56 (pour le build 2A56)


Résumé :

"require": {
    "vendor/package": "1.3.2",     // exactly 1.3.2

    // >, <, >=, <= 
    "vendor/package": ">=1.3.2",   // anything above or equal to 1.3.2
    "vendor/package": "<1.3.2",    // anything below 1.3.2

    // * 
    "vendor/package": "1.3.*",     // >=1.3.0 <1.4.0

    // ~
    "vendor/package": "~1.3.2", // >=1.3.2 <1.4.0
    "vendor/package": "~1.3", // >=1.3.0 <2.0.0

    // ^ 
    "vendor/package": "^1.3.2", // >=1.3.2 <2.0.0
    "vendor/package": "^0.3.2", // >=0.3.2 <0.4.0 // except if major version is 0
}
`;
  return (
    
      <nav className='overflow-x-auto text-sm'>
        <Typography variant="h5" mb={4}>Versioning</Typography>
        <pre>
          {text}
        </pre>
      </nav>
   
  )
}

export default page