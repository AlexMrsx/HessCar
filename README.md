# HessCar

**Calcule le coût des trajets avec tes potes !**

HessCar est une application web qui permet de calculer facilement le coût d'un trajet en voiture et de répartir les dépenses entre les passagers. Elle prend en compte la distance parcourue, le prix du carburant, la consommation du véhicule et les éventuels frais de parking.

**Application en ligne :** [hesscar.vercel.app](https://hesscar.vercel.app)

## Fonctionnalités

- **Calcul du trajet** : choix entre un aller simple et un aller-retour.
- **Coût du carburant** : prise en compte de la distance, du prix au litre et de la consommation du véhicule.
- **Partage des frais** : calcul de la participation de chaque passager.
- **Gestion du conducteur** : possibilité d'inclure ou non le conducteur dans le partage des frais.
- **Frais de parking** : ajout des éventuels coûts de stationnement.
- **Résultat instantané** : estimation du montant que chaque passager doit payer au conducteur.

## Comment utiliser HessCar ?

1. Choisir le type de trajet : aller simple ou aller-retour.
2. Renseigner la distance en kilomètres.
3. Indiquer le prix du carburant et la consommation du véhicule.
4. Préciser le nombre de passagers, conducteur inclus.
5. Choisir si le conducteur participe au partage des frais.
6. Ajouter les frais de parking éventuels.
7. Consulter le montant calculé par passager.

## Technologies

- **Hébergement** : [Vercel](https://vercel.com/)
- **Dev** : NextJs ( TS / Tailwind )
## Installation locale

### Prérequis

- Git
- Node.js et un gestionnaire de paquets compatible avec le projet

### Étapes

```bash
# Cloner le dépôt
git clone <URL_DU_REPO>

# Accéder au projet
cd <NOM_DU_REPO>

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir ensuite l'adresse locale affichée dans le terminal, généralement `http://localhost:3000` pour un projet Next.js.

Les commandes peuvent varier selon le framework et le gestionnaire de paquets utilisés.

## Déploiement

L'application est accessible à l'adresse suivante :

[https://hesscar.vercel.app](https://hesscar.vercel.app)

Le projet peut être déployé sur Vercel en connectant le dépôt Git et en configurant les paramètres de build adaptés à la stack utilisée.

## Objectif du projet

HessCar a pour objectif de simplifier le partage des frais de déplacement entre amis, en proposant un calcul rapide, accessible et facile à utiliser.

---

Développé avec soin pour rendre les trajets entre amis plus simples à organiser.
