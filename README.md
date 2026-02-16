# Atelier découverte programmation Web

Page d'accueil pour l'atelier live-coding "Mon premier site". Déployé automatiquement sur Cloudflare Pages.

## Structure du projet

```
├── index.html            ← généré par build.js (ne pas modifier à la main)
├── build.js              ← script de génération de index.html
├── template.html         ← template de la page d'accueil (modifier ici)
├── style.css             ← styles partagés (index + fiche triche)
├── fiche-triche.html     ← cheat sheet HTML & CSS
└── realisation/
    └── prenom.html       ← pages des étudiants
```

## Ajouter une réalisation

1. Créer un fichier dans `realisation/` nommé avec le **prénom en minuscules** :

   ```
   realisation/prenom.html
   ```

   Exemples : `robin.html`, `alice.html`

2. Le fichier doit être une page HTML complète et autonome :

   ```html
   <!DOCTYPE html>
   <html lang="fr">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Mon premier site</title>
       <style>
         /* ton CSS ici */
       </style>
     </head>
     <body>
       <!-- ton contenu ici -->
     </body>
   </html>
   ```

3. Lancer `node build.js` (ou pusher sur le repo pour que Cloudflare le fasse)

### Convention de nommage

| Nom de fichier | Prénom affiché |
| -------------- | -------------- |
| `robin.html`   | Robin          |
| `alice.html`   | Alice          |

- **Minuscules uniquement**, pas d'espaces ni de caractères spéciaux
- Extension `.html` obligatoire
- Un seul fichier par étudiant

## Build

```bash
node build.js
```

Lit `template.html`, injecte les cartes étudiants à la place de `{{REALISATIONS}}`, et écrit le résultat dans `index.html`.

**Build command Cloudflare Pages :** `node build.js`
