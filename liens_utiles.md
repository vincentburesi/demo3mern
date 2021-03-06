Liens utiles
============

Technos
-------

### Node.js

<https://nodejs.org/en/docs/> - Full documentation de toutes les libs inclues par défaut dans node (Lien \"API reference documentation\" pour la version actuelle)

### npm

<https://www.npmjs.com/> - Site officiel

<https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/> - Comme son nom l\'indique, tuto sur les bases

<https://docs.npmjs.com/cli/v8/commands> - Version online de la doc de l\'outil npm CLI

<https://docs.npmjs.com/cli/v8/configuring-npm> - Spécifications détaillée du contenu des différents fichiers de conf (package.json notamment)

<https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry> - Créer et publier son propre package npm

### MongoDB

<https://docs.mongodb.com/manual/introduction/> - Introduction à MongoDB

<https://mongoosejs.com/> - Site officiel de mongoose

<https://mongoosejs.com/docs/guides.html> - Guides officiels de mongoose

<https://www.npmjs.com/package/mongoose#overview> - Bases de l\'utilisation de mongoose (site officiel)

<https://learntutorials.net/fr/node-js/topic/6411/base-de-donnees--mongodb-avec-mongoose-> - Example de code simple avec mongoose

### Express

<https://expressjs.com/fr/starter/installing.html> - Doc officielle (voir les sections \"Mise en route\" et \"Guides\")

<https://developer.mozilla.org/fr/docs/Learn/Server-side/Express_Nodejs/Introduction> - Tutorial très complet sur le site du MDN

<https://practicalprogramming.fr/express-js> - Présentation rapide d\'Express

<https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466277-creez-une-application-express> - Tuto OpenClassroom sur Express + MongoDB (Je suis pas toujours fan d\'OpenClassroom qui pouvait avoir tendance à manquer de rigueur mais ça peut être un bon point de départ)

### [TODO]{.todo .TODO} Tests {#tests}

### Websockets / Socket.io

Rarement utilisé tel quel, il est préférable d\'utiliser une lib qui fait la gestion fastidieuse à votre place (par exemple socket.io en JS)

1.  Websocket

    <https://fr.wikipedia.org/wiki/WebSocket> - Article wikipédia présentant la techno

    <https://developer.mozilla.org/fr/docs/Web/API/WebSockets_API> - Présentation de l\'API WebSocket

    <https://datatracker.ietf.org/doc/html/rfc6455> - La RFC officielle (Pas une ressource pédagogique !)

2.  Socket.io

    <https://socket.io/> - Site officiel

    <https://socket.io/get-started/chat> - Getting started, exemple classique du chat dynamique

### [TODO]{.todo .TODO} Heroku (Déploiement) {#heroku-déploiement}

Sécurité
--------

### CORS (Cross-Origin Resource Sharing)

<https://fr.wikipedia.org/wiki/Cross-origin_resource_sharing> - Article wikipedia (avec un schéma explicatif), permet de comprendre l\'idée générale

<https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/> - Tuto sur la manière d\'implémenter CORS avec Node.js + Express

<https://developer.mozilla.org/fr/docs/Web/HTTP/CORS> - Site de Mozilla, très (trop) détaillé mais rentrant plus dans la mise en pratique

<https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#access-control-allow-origin> - Détail sur le header le plus important pour faire marcher CORS ;)

-   /!\\ Attention /!\\ : Utiliser le wildcard (\*) permet de \"faire marcher\" facilement les requêtes, mais peut poser des gros problèmes de sécurité en prod !

<https://datatracker.ietf.org/doc/html/rfc6454> - La RFC officielle (Pas une ressource pédagogique !)

### HTTPS

<https://www.vaadata.com/blog/fr/fonctionnement-et-configuration-dhttps/> - Explication \"en gros\" de ce que c\'est et de comment ça marche

<https://certbot.eff.org/> - Méthode simple pour implémenter rapidement https sur un domaine que l\'on possède (C\'est ce que j\'utilise sur mon serveur perso)

<https://datatracker.ietf.org/doc/html/rfc2818> - La RFC officielle (Pas une ressource pédagogique !)

### JWT (JSON Web Tokens)

<https://fr.wikipedia.org/wiki/JSON_Web_Token> - L\'article wikipedia présentant le concept

<https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs> - Tuto sur l\'implémentation simple de JWT avec Node.js + Express (mentionne dotenv qui peut être utile pour d\'autres trucs)

<https://etienner.github.io/api-json-web-token-authentication-jwt-sur-express-js/> - Tuto sur l\'implémentation d\'un système d\'auth basique

<https://www.wawasensei.dev/tuto/tuto-authentification-refresh-json-web-token-en-nodejs-avec-express> - Un autre tuto dans le même esprit

<https://jwt.io/#debugger-io> - Debugger JWT (encode et decode des tokens)

<https://datatracker.ietf.org/doc/html/rfc7519> - La RFC officielle (Pas une ressource pédagogique !)

### BCrypt

Permet de stocker et comparer uniquement des hash (et jamais des mots de passe en clair)

<https://fr.wikipedia.org/wiki/Bcrypt> - Article wikipedia

<https://www.npmjs.com/package/bcrypt> - Le package npm qui l\'implémente

<https://github.com/kelektiv/node.bcrypt.js#usage> - La doc du passage en question

### OAuth 2.0

<https://zestedesavoir.com/articles/1616/comprendre-oauth-2-0-par-lexemple/> - Pour comprendre le principe d\'OAuth 2.0 de manière simple et claire, un peu long mais vaut le coup d\'être lu en entier.

<https://grafikart.fr/tutoriels/oauth2-php-google-1171> - Autre lien (avec une vidéo de tuto et du code), pas encore vu la vidéo mais les texte a l\'air clean (à vérifier)

<https://oauth.net/2/> - Lien officiel (RFC + Doc technique), utile en cas de doute sur un point précis et avancé de la spécification (Pas une ressource pédagogique !)
