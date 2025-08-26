import React, { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Précharger les ressources critiques
    const preloadCriticalResources = () => {
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);
    };

    // Optimiser les images en lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[loading="lazy"]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
              }
            }
          });
        }, {
          rootMargin: '50px 0px'
        });

        images.forEach((img) => imageObserver.observe(img));
      }
    };

    // Différer les scripts non critiques
    const deferNonCriticalScripts = () => {
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach((script) => {
        const newScript = document.createElement('script');
        newScript.src = script.getAttribute('src') || '';
        newScript.async = true;
        document.head.appendChild(newScript);
      });
    };

    // Optimiser le cache du navigateur
    const optimizeBrowserCache = () => {
      const cacheMetaTag = document.createElement('meta');
      cacheMetaTag.httpEquiv = 'Cache-Control';
      cacheMetaTag.content = 'public, max-age=31536000';
      document.head.appendChild(cacheMetaTag);
    };

    // // Mesurer les Core Web Vitals
try {
  getCLS(console.log);
  getFID(console.log);
  getFCP(console.log);
  getLCP(console.log);
  getTTFB(console.log);
} catch (error) {
  console.log('Web Vitals not available');
}

    // Exécuter les optimisations
    preloadCriticalResources();
    optimizeImages();
    deferNonCriticalScripts();
    optimizeBrowserCache();

    // Mesurer après le chargement complet
    if (document.readyState === 'complete') {
      measureWebVitals();
    } else {
      window.addEventListener('load', measureWebVitals);
    }

    return () => {
      window.removeEventListener('load', measureWebVitals);
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;