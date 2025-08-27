// Les imports Deno sont remplacés par des appels 'require'
const { createClient } = require('@supabase/supabase-js');
const fetch = require('node-fetch');

// L'export de la fonction est standard pour Netlify
exports.handler = async (event, context) => {
    // Gestion des requêtes OPTIONS pour les CORS
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
            },
            body: 'ok',
        };
    }

    try {
        // Initialisation du client Supabase avec les variables d'environnement de Netlify
        const supabase = createClient(
            process.env.VITE_SUPABASE_URL,
            process.env.VITE_SUPABASE_ANON_KEY
        );

        // Récupération des données de la table 'etablissements'
        const { data, error } = await supabase
            .from('etablissements')
            .select('*');

        if (error) {
            console.error('Erreur Supabase :', error);
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Erreur Supabase' }),
            };
        }

        // Renvoi des données en cas de succès
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data),
        };

    } catch (err) {
        console.error('Erreur du serveur :', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Erreur du serveur interne' }),
        };
    }
};