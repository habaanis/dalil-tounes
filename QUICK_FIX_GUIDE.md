# 🚀 GUIDE RAPIDE : Résoudre les Problèmes de Clés API

## 🎯 PROBLÈME ACTUEL

Votre site https://www.dalil-tounes.com est en ligne mais certaines fonctionnalités ne marchent pas car les variables d'environnement ne sont pas configurées sur Netlify.

---

## ⚡ SOLUTION RAPIDE (5 MINUTES)

### 🔧 **ÉTAPE 1 : Aller dans les paramètres Netlify**

1. **Ouvrez** : https://app.netlify.com
2. **Cliquez sur votre site** "dalil-tounes"
3. **Site settings** → **Environment variables**

### 🔑 **ÉTAPE 2 : Ajouter ces 4 variables OBLIGATOIRES**

```
1. VITE_SUPABASE_URL
   Valeur: https://votre-projet-id.supabase.co

2. VITE_SUPABASE_ANON_KEY  
   Valeur: VOTRE_CLÉ_SUPABASE

3. SUPABASE_SERVICE_ROLE_KEY
   Valeur: VOTRE_CLÉ_SUPABASE

4. GOOGLE_MAPS_API_KEY
   Valeur: VOTRE_CLÉ_GOOGLE_MAPS
```

### 🔄 **ÉTAPE 3 : Redéployer**

1. **Onglet "Deploys"**
2. **"Trigger deploy"** → **"Deploy site"**
3. **Attendre 2-3 minutes**

---

## 🎯 RÉSULTAT IMMÉDIAT

Après cette configuration :
- ✅ **Recherche** fonctionnelle
- ✅ **Cartes Google Maps** actives
- ✅ **Suggestions** d'établissements
- ✅ **Base de données** connectée
- ✅ **Toutes les fonctionnalités** opérationnelles

---

## 📞 OÙ TROUVER VOS CLÉS ?

### 🗄️ **Supabase** :
1. https://supabase.com/dashboard
2. Votre projet → Settings → API
3. Copiez URL + anon key + service_role key

### 🗺️ **Google Maps** :
1. https://console.cloud.google.com/apis/credentials
2. Votre projet → Clés API
3. Copiez votre clé (commence par AIza...)

---

## ⚠️ SI VOUS N'AVEZ PAS CES CLÉS

### 📋 **Supabase** (OBLIGATOIRE) :
- Suivez : `SUPABASE_SETUP_GUIDE.md`
- Créez votre projet gratuit
- Configurez la base de données

### 🗺️ **Google Maps** (OBLIGATOIRE) :
- Suivez : `GOOGLE_MAPS_SETUP.md`
- Créez votre projet Google Cloud
- Activez les APIs nécessaires

---

**🚀 Une fois configuré, votre site sera 100% fonctionnel !**