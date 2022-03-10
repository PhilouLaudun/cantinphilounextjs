Ce projet, développé dans le cadre d'une évaluation Studi, est adapté en Nextjs à partir d'un projet développé initialement en reactjs. Il répond au contexte du projet ainsi qu'à la demande du client qui veut que le site soit modifiable à l'aide d'un CMS. La solution choisie est l'utilisation de Nextjs+ netlifycms et l'hébergement sur Netlify.
Le site est visible a l'adresse : https://awesome-bose-88d73a.netlify.app  
Pour son déploiement :
 * en local : telecharger le zip sur Github à l'adresse PhilouLaudun/cantinphotonextjs. Créer une application avec creat-next-app puis tranférer les fichiers dézippés dans l'application créée. A l'aide de npm charger les extensions listées dans le fichier package.json et
 une fois les modifications faites lancer npm run dev pour voir le site et le modifier à l'aide visual studio code par exemple.
 *  en ligne : lancer Netlify et cliquer sur l'option "get started for free". Se connecter avec son compte Github. Dans Netlify, choisir l'option "Add a new site/Import an existing project"et choisir Github. Ensuite se reconnecter avec son compte puis choisir l'option "Configure the Netlify app on Github". Dans Github lancer l'option Explore et rechercher l'adresse PhilouLaudun/cantinphotonextjs. Sur la page du site trouvé, lancer l'option "Use this template" et renseigner le champ "Repository name" pour créer un nouveau dépot sur Github. Une fois créer sur Netlify, lancer le déploiement du site et accéder à son adresse.

 Concernant l'utilisation de netlifycms, il faut modifier:
  * en premier lieu charger l'extension netlifycms
  * ensuite modifier le repo de config.yml pour aller sur le nouveau repository
  * ensuite dans Github aller dans l'option "Settings/Developper settings/OAuth Apps/New OAuth App" pour créer une autorisation nécéssaire à la connection de netlifycms à Github lorsque le site est déployer sur Netlify
  * ensuite dans netlify aller dans l'option "Site settings/Access control/OAuth/Install provider" et renseigner les champs ID et client secret avec les valeurs fournies par Github 
  * lors de l'utilisation à partir du site déployé à l'adresse "https://monsite.netlify.app/admin/index.html" l'identification se fait et l'on peut modifier les valeurs des champs de la page home.

  Concernant la modification des pages, seule la page d'acceuil est modifiable par le cms. Pour les autres, les fichiers dans data sont modifiables pour enlever, modifier ou rajouter des items.
  Ensuite, une évolution possible est de tout passer en fichier json pour etre utilisable avec netlifycms. Exemple, le portfolio et les prestations seraient transformer en fichier json et les champs créés par le fichier config.yml. De même pour la navigation et les icones des réseaux sociaux. 