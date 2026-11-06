# FAE-R Hub

Plateforme web institutionnelle pour FAE-R INC. — **prototype initial**.

> Le document « Plan de Projet & Charte de Gouvernance 2 » n'a pas encore été consulté. Les modules et rôles ci-dessous sont des hypothèses à valider avec les responsables.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000.

## Stack
- Next.js App Router, TypeScript, React
- CSS natif, sans dépendance UI
- Backend et authentification à ajouter après validation des exigences

## Feuille de route
1. Recueillir et analyser la charte de gouvernance, les rôles et circuits de décision.
2. Valider le périmètre MVP, les langues et l'identité visuelle.
3. Développer authentification, gestion des utilisateurs et RBAC.
4. Développer projets, tâches, réunions, décisions et documents.
5. Ajouter journal d'audit, tests, sauvegardes et règles de confidentialité.
6. Déployer un environnement de recette avant production.

## Sécurité
Les pages actuelles sont une démonstration statique : aucune donnée réelle, aucune connexion, aucune permission ou stockage n'est encore implémenté.
