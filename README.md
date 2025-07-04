# 🌤️ App Météo Simulée – Vue 3

Cette application météo simple est développée avec Vue 3, Pinia et Vue Router.  
Elle permet de rechercher la météo de villes prédéfinies avec des données simulées, sans clé API.  
Les recherches sont sauvegardées en local dans le navigateur.

---

## Fonctionnalités

- Recherche météo par ville (liste limitée)  
- Affichage des données météo : température, humidité, description  
- Historique des recherches avec date et heure  
- Navigation entre page d’accueil et historique  
- Stockage local avec `localStorage`  
- Composants Vue modulaires et styling simple intégré

---

## Installation et lancement

1. Cloner le dépôt  
2. Installer les dépendances avec la commande : npm install  
3. Lancer le serveur de développement avec : npm run dev  
4. Ouvrir le navigateur à l’adresse indiquée (ex: http://localhost:3000)

---

## Structure du projet

- `src/components` : composants Vue (SearchForm, WeatherCard)  
- `src/stores` : store Pinia (gestion météo et historique)  
- `src/views` : vues/pages (HomeView, HistoryView)  
- `src/router` : configuration Vue Router  
- `src/App.vue` : composant racine avec navigation  

---

## Limitations

- Données météo simulées et statiques (pas d’appel API réel)  
- Liste de villes restreinte à : Paris, Londres, Tokyo, NewYork, Sydney

---

## A propos

Ce projet est destiné à un usage pédagogique, pour pratiquer Vue 3, Pinia, Vue Router, et la gestion d’état locale.

---

Merci pour votre visite !
