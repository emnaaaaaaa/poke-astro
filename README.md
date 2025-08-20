# Astro Pokémon Quest

**Astro Pokémon Quest** est une application web interactive développée avec **Next.js**, **React** et **Babylon.js**. Elle propose un mini-jeu de capture de Pokémon sur la planète Mercure, alliant vue 3D sphérique et vue paysage immersive.

## Fonctionnalités actuelles

### Menu Principal

- Affiche le système solaire (Mercure à Neptune) sur un fond étoilé (`stars_milky_way.jpg`).
- Seule Mercure est débloquée au lancement (les autres planètes apparaissent « verrouillées »).
- Lien vers la **Collection** des Pokémon capturés.

### Vue 3D de Mercure (`/mercure`)

- Sphère texturée avec `mercury2.jpg`, fond transparent pour laisser apparaître le ciel étoilé.
- 20 points noirs cliquables répartis aléatoirement.
- Joystick tactile ou glisser pour faire tourner la planète.
- Clic sur un point déclenche une animation de zoom puis bascule en mode capture.

### Mode Paysage (Capture)

- Fond planétaire (`mercury_view.jpg`) couvrant toute la zone.
- Pokémon animé se déplaçant en douceur.
- Bouton **Pokéball** pour activer le mode capture.
- Curseur personnalisé et jauge de progression.
- **Mécanique** : 5 secondes cumulées passées sur le Pokémon pour réussir la capture.
- Bouton **Annuler** pour revenir en vue 3D à tout moment.

### Fiche Pokémon (Carte TCG)

- Apparaît après capture, sur fond étoilé.
- Affiche l’artwork officiel, le nom, les types et les statistiques.
- Bouton **Retour au 3D** pour continuer la chasse.

### Collection (`/collection`)

- Liste tous les Pokémon capturés (jusqu’à 20) avec image, nom, types, taille, poids et stats.
- Emplacements vides jusqu’à 20 cases.
- Design sombre et immersif, cohérent avec le thème spatial.

## Contexte et persistance

- Stockage en **LocalStorage** pour conserver captures et débloquage de planètes.

## Navigation

- Navbar fixe en haut (**Accueil**, **Collection**).

## Technologies utilisées

- **Framework :** Next.js (App Router)
- **3D :** Babylon.js (`react-babylonjs`)
- **APIs :** PokéAPI (détails Pokémon)
- **Stockage :** LocalStorage via Context API
- **Animations :** Framer Motion

## Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/roronoacheick/astro-pokemon-quest.git
cd astro-pokemon-quest
```

2. Créer le fichier d'environnement :

```bash
cp .env.example .env.local
```

3. Dans `.env.local`, définir :

```
NEXT_PUBLIC_POKEAPI_BASE
