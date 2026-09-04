# Site AV74

Site statique du club Annemasse Volley 74. HTML/CSS/JS vanilla, sans framework ni build step.

## Structure

```
index.html            Accueil
le-club.html           Présentation, histoire, valeurs
bureau.html             Le Bureau
salaries.html           Les Salariés (coachs)
vie-citoyenne.html      Vie Citoyenne
creneaux.html           Créneau / Gymnase (horaires d'entraînement)
equipes.html            Toutes les équipes (7 catégories)
documents.html          Documents d'inscription
evenements.html         Tournoi XNV, Nuit du Volley
boutique.html           Boutique du club
contact.html            Contact
assets/css/style.css    Styles partagés
assets/js/main.js       Comportements partagés (nav, menu mobile, reveal au scroll)
assets/img/             Logo, photos (à ajouter)
assets/documents/       PDF d'inscription et bons de commande (à ajouter)
```

## Développement local

Aucune dépendance. Ouvrir `index.html` dans un navigateur, ou servir le dossier :

```
python3 -m http.server 8000
```

## À faire avant mise en ligne

- Ajouter le logo du club dans `assets/img/` et l'intégrer dans la nav.
- Déposer les vrais PDF (inscriptions, bon de commande boutique) dans `assets/documents/` et mettre à jour les liens actuellement en `#`.
- Compléter la liste du bureau sur `bureau.html`.
- Choisir un hébergement (GitHub Pages, OVH, etc.) et un nom de domaine si besoin.
