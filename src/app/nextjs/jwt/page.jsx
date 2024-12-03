import { Typography } from "@mui/material";

const page = () => {
  const text = 
  `
Le JWT est le next-auth.session-token qui se trouve dans le cookie du nom du domaine 
(p.e. localhost:3000) dans le browser.
Voir dans F12 --> application --> cookies.
Il a une valeur (hashée avec NEXT_AUTH_SECRET env key), et une expire-max-age 
(défini dans libs/auth.js)
Il est inclus dans le header de chaque requête http faite par le browser sur le serveur. 

Cookies are intended to be read by the server, 
whereas localStorage can only be read by the browser. 
Thus, cookies are restricted to small data volumes, 
while localStorage can store more data.

Access tokens, which are short-lived (30 days) JWT tokens signed 
(hashed with NEXT_AUTH_SECRET env key) by the server 
and included in every HTTP request (in header) 
that a browser makes to a web server, in order to authorize the request

La stratégie JWT est définie dans /libs/auth.js :   
(voir ici https://next-auth.js.org/configuration/options)

	export const authOptions = {
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60 // ** 30 days
    },

    providers: [




Ce payload a été hashé avec la clé secrète de .env 
(NEXT_AUTH_SECRET ou SECRET si la 1ère n'est pas définie)
et cette valeur hashée a été mis dans le jwt token 
(browser -> F12 -> onglet application -> menu storage -> Cookies -> next-auth.session-token ) :

	name: next-auth.session-token

	    value: eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0.
      .LJoxTmXtNa-qxNOw
       . eALrbuZ_hPay3WkL41QXIkPyoCM5hc62Cj4GhOncRNPi1JJCIhKS8-cCzsoiKvVY99EOoGSsNcGBzOFHVUBVeyAvjreB3KZVG6XFPYGHzK9LjvzFnbXGOp2i9eoEJrnWSNvOw9757wA9UcHSjv6xpBfhbRBjoTicHUIaFAuzrx8a8HIR_KaqKKmJZ_lOeSeYlhmFuR7dnPWAXWz8BylZJtTPg0K9w_xN
        . QNSPUOB3Z-eNrF1aJpVmiw


			Header . Payload . Signature

What is the JSON Web Token structure?
In its compact form, JSON Web Tokens consist of three parts separated by dots (.), 
which are:

Header . Payload . Signature

Exemple de PAYLOAD contenu dans le JWT:
{
  name: 'John Doe',
  email: 'admin@dotdev.be',
  picture: '/images/avatars/1.png',
  sub: '1',
  iat: 1718552600,
  exp: 1721144600,
  jti: '1f590692-139f-4d57-bc63-bd2911eac8de'
}


Doc : https://jwt.io/introduction

`;
  return (
    
      <nav className='overflow-x-auto text-sm'>
        <Typography variant="h5" mb={4}>Json Web Token</Typography>
        <pre>
          {text}
        </pre>
      </nav>
   
  )
}

export default page