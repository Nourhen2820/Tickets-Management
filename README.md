
# Gestion-tickets
=======
# Gestion des Tickets

Application de gestion des tickets de support avec **Laravel** (backend) et **Angular** (frontend).

## Structure du projet
mon-projet/
├─ backend/ # Code Laravel (API)
├─ frontend/ # Code Angular (interface)
├─ README.md # Instructions (ce fichier)

## Prérequis

- PHP >= 8.1, Composer
- Node.js >= 18, Angular CLI
- Base de données MySQL 

## Installation

### Backend (Laravel)

1. Ouvre un terminal dans le dossier `backend`
2. Installe les dépendances :
   ```bash
   composer install

Copie le fichier .env.example en .env :
cp .env.example .env

Génère la clé de l’application :
php artisan key:generate

Lance les migrations :
php artisan migrate

Lance le serveur :
php artisan serve

####Frontend (Angular)
Ouvre un terminal dans le dossier frontend

Installe les dépendances :
npm install

Lance le serveur Angular :
ng serve
***Fonctionnalités**

Créer, modifier, supprimer des tickets

Filtrage par statut (ouvert, en cours, résolu)

Pagination (4 tickets par page)

Notifications visuelles de succès ou d’erreur
