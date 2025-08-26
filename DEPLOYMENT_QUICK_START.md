# 🚀 Déploiement Rapide - Dalil Tounes (Option 1)

## ✅ ÉTAPE 1 : Configuration Google Maps API (OBLIGATOIRE)

### 1.1 Création du projet Google Cloud

1. **Allez sur** : https://console.cloud.google.com/
2. **Connectez-vous** avec votre compte Google
3. **Créez un nouveau projet** :
   - Cliquez sur "Sélectionner un projet" → "Nouveau projet"
   - Nom : `dalil-tounes-maps`
   - Cliquez sur "Créer"

### 1.2 Activation des APIs nécessaires

**Activez ces 3 APIs (une par une) :**

1. **Maps JavaScript API** : https://console.cloud.google.com/apis/library/maps-backend.googleapis.com
   - Cliquez sur "Activer"

2. **Places API** : https://console.cloud.google.com/apis/library/places-backend.googleapis.com
   - Cliquez sur "Activer"

3. **Geocoding API** : https://console.cloud.google.com/apis/library/geocoding-backend.googleapis.com
   - Cliquez sur "Activer"

### 1.3 Création de la clé API

1. **Allez dans** : https://console.cloud.google.com/apis/credentials
2. **Cliquez sur** "Créer des identifiants" → "Clé API"
3. **Copiez votre clé** (commence par `AIza...`)
4. **Cliquez sur "Restreindre la clé"**

### 1.4 Configuration des restrictions (IMPORTANT pour la sécurité)

1. **Restrictions d'application** :
   - Sélectionnez "Référents HTTP (sites web)"
   - Ajoutez : `https://votre-domaine.netlify.app/*`
   - Ajoutez : `http://localhost:*` (pour les tests)

2. **Restrictions d'API** :
   - Sélectionnez "Restreindre la clé"
   - Cochez les 3 APIs activées précédemment

3. **Cliquez sur "Enregistrer"**

---

## ✅ ÉTAPE 2 : Configuration du fichier .env

### 2.1 Mise à jour de votre fichier .env

Remplacez le contenu de votre fichier `.env` par :

```env
# Supabase Configuration (remplacez par vos vraies valeurs)
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Google Maps Configuration (remplacez par votre vraie clé)
GOOGLE_MAPS_API_KEY=AIzaSyANJrHS7OFU12UiLgtPIliTGgVVNrQKTug

# Stripe (désactivé temporairement)
# VITE_STRIPE_PUBLISHABLE_KEY=
# STRIPE_SECRET_KEY=
# STRIPE_WEBHOOK_SECRET=
```

### 2.2 Remplacez les valeurs

- **VITE_SUPABASE_URL** : Votre URL Supabase (étape précédente)
- **VITE_SUPABASE_ANON_KEY** : Votre clé anon Supabase
- **SUPABASE_SERVICE_ROLE_KEY** : Votre clé service role Supabase
- **GOOGLE_MAPS_API_KEY** : Votre clé Google Maps (étape 1.3)

---

## ✅ ÉTAPE 3 : Désactivation temporaire de Stripe

### 3.1 Modification de App.tsx

Nous allons temporairement masquer les fonctionnalités de paiement.

---

## ✅ ÉTAPE 4 : Test local

### 4.1 Installation et test

```bash
# Installation des dépendances
npm install

# Test local
npm run dev
```

### 4.2 Vérifications à faire

- ✅ L'application se lance sans erreur
- ✅ La recherche fonctionne
- ✅ Les cartes s'affichent (Google Maps)
- ✅ Les filtres fonctionnent
- ✅ La suggestion d'établissement fonctionne

---

## ✅ ÉTAPE 5 : Build de production

### 5.1 Création du build

```bash
npm run build
```

### 5.2 Test du build

```bash
npm run preview
```

Si tout fonctionne, vous avez un dossier `dist/` prêt pour le déploiement !

---

## ✅ ÉTAPE 6 : Déploiement sur Netlify

### 6.1 Création du compte Netlify

1. **Allez sur** : https://netlify.com
2. **Créez un compte** (gratuit)
3. **Connectez-vous**

### 6.2 Déploiement par Drag & Drop (le plus simple)

1. **Allez sur** : https://app.netlify.com
2. **Glissez-déposez** le dossier `dist/` sur la zone "Deploy"
3. **Attendez** le déploiement (2-3 minutes)
4. **Votre site est en ligne !** 🎉

### 6.3 Configuration des variables d'environnement sur Netlify

1. **Cliquez sur votre site** dans le dashboard Netlify
2. **Allez dans** "Site settings" → "Environment variables"
3. **Ajoutez ces variables** :
   - `VITE_SUPABASE_URL` : Votre URL Supabase
   - `VITE_SUPABASE_ANON_KEY` : Votre clé anon Supabase
   - `GOOGLE_MAPS_API_KEY` : Votre clé Google Maps

4. **Redéployez** : Site overview → "Trigger deploy" → "Deploy site"

---

## ✅ ÉTAPE 7 : Configuration du domaine personnalisé (optionnel)

### 7.1 Domaine Netlify gratuit
Votre site aura une URL comme : `https://amazing-site-name.netlify.app`

### 7.2 Domaine personnalisé
1. **Achetez votre domaine** (ex: dalil-tounes.tn)
2. **Dans Netlify** : Site settings → Domain management
3. **Ajoutez votre domaine personnalisé**
4. **Configurez les DNS** selon les instructions Netlify
5. **SSL automatique** sera activé

---

## 🎯 Fonctionnalités disponibles

### ✅ **Fonctionnalités actives** :
- 🔍 Recherche d'établissements
- 🗺️ Cartes interactives Google Maps
- 🎛️ Filtres avancés
- 🌍 Interface multilingue (FR/AR/EN)
- 📱 PWA (installation mobile)
- 💾 Mode hors ligne
- 📝 Suggestions d'établissements
- 🎨 Design responsive

### ⏳ **Fonctionnalités désactivées temporairement** :
- 💳 Abonnements payants
- 👑 Plans premium
- 💰 Paiements Stripe

---

## 📋 Checklist finale

- [ ] Google Maps API configurée et restreinte
- [ ] Fichier .env mis à jour avec les vraies valeurs
- [ ] Test local réussi
- [ ] Build de production créé
- [ ] Site déployé sur Netlify
- [ ] Variables d'environnement configurées sur Netlify
- [ ] Site accessible publiquement
- [ ] Domaine configuré (optionnel)

---

## 🎉 Félicitations !

Votre site **Dalil Tounes** est maintenant **EN LIGNE** ! 

### 🔗 Liens utiles :
- **Votre site** : https://votre-site.netlify.app
- **Dashboard Netlify** : https://app.netlify.com
- **Dashboard Supabase** : https://supabase.com/dashboard

---

## 🔄 Ajout de Stripe plus tard

Quand vous serez prêt à ajouter les paiements :

1. **Activez votre compte Stripe**
2. **Ajoutez les variables Stripe** dans Netlify
3. **Réactivez les composants de paiement**
4. **Redéployez automatiquement**

---

**🚀 Votre site est PRÊT et EN LIGNE !**