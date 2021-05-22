const CACHE_NAME = 'learning-tracker-cache';
const CACHE_DEFAULT = ['/'];
const CACHE_FILES = ['main', 'polyfill', 'runtime', 'styles'];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(CACHE_DEFAULT);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request).then(function (response) {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        const isNeedToCache = CACHE_FILES.some((file) => event.request.url.includes(file));
        if (isNeedToCache) {
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      });
    })
  );
});
