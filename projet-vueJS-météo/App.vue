<template>
  <nav>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/history">Historique</router-link>
  </nav>
  <router-view />
</template>

<style>
nav {
  padding: 1rem;
  background-color: #eef2f5;
}
nav a {
  margin-right: 1rem;
  text-decoration: none;
  color: #333;
}
nav a.router-link-active {
  font-weight: bold;
  color: #007acc;
}
</style>
