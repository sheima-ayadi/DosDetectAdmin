const CACHE_NAME = 'wifi-dos-analysis-cache-v1';
const urlsToCache = [
  '/',
  '/static/style.css',
  '/static/images/Tekup.png',
  '/static/images/admin.png',
  '/static/images/icon-192x192.png',
  '/static/images/icon-512x512.png',
  // Ajoutez ici les autres ressources que vous souhaitez mettre en cache
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(event) {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
