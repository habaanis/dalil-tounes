// Configuration des variables d'environnement
export const config = {
  // Supabase
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL || '',
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
    serviceRoleKey: import.meta.env.SUPABASE_SERVICE_ROLE_KEY || ''
  },

  // Google Maps
  googleMaps: {
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''
  },

  // Stripe (optionnel)
  stripe: {
    publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '',
    secretKey: import.meta.env.STRIPE_SECRET_KEY || '',
    webhookSecret: import.meta.env.STRIPE_WEBHOOK_SECRET || ''
  },

  // Environnement
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD
};